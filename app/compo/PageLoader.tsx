'use client'

import { useEffect, useState, type ReactNode } from 'react'
import { motion, useAnimate } from 'framer-motion'

const HOLD_MS = 550
const ease = [0.76, 0, 0.24, 1] as const
let hasMountedBefore = false

export default function PageLoader({ children, page }: { children: ReactNode; page?: string }) {
  const [scope, animateScope] = useAnimate()
  const [visible, setVisible] = useState(
    () => hasMountedBefore && !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )

  useEffect(() => {
    hasMountedBefore = true
    if (!visible) return
    let cancelled = false

    const flyIntoMenu = async () => {
      const overlay = scope.current as HTMLElement
      const label = overlay.querySelector<HTMLElement>('[data-page-label]')
      const target = document.querySelector<HTMLElement>('nav[aria-label="Main navigation"] a[aria-current="page"]')
      if (!label || !target) {
        await animateScope(overlay, { y: '-100%' }, { duration: 0.75, ease })
        return
      }
      const box = overlay.getBoundingClientRect()
      const to = target.getBoundingClientRect()
      const from = label.getBoundingClientRect()
      const fromSize = parseFloat(getComputedStyle(label).fontSize)
      const toSize = parseFloat(getComputedStyle(target).fontSize)
      const scale = Math.min(toSize / fromSize, (to.width * 0.85) / from.width)
      const pill = `inset(${to.top - box.top}px ${box.right - to.right}px ${box.bottom - to.bottom}px ${to.left - box.left}px round ${to.height / 2}px)`

      await Promise.all([
        animateScope('[data-page-fade]', { opacity: 0 }, { duration: 0.25 }),
        animateScope(overlay, { clipPath: ['inset(0px 0px 0px 0px round 0px)', pill] }, { duration: 0.75, ease }),
        animateScope(
          label,
          {
            x: to.left + to.width / 2 - (from.left + from.width / 2),
            y: to.top + to.height / 2 - (from.top + fromSize / 2),
            scale,
          },
          { duration: 0.75, ease }
        ),
      ])
      if (cancelled) return
      await animateScope(overlay, { opacity: 0 }, { duration: 0.3, ease: 'easeOut' })
    }

    const timer = setTimeout(async () => {
      await flyIntoMenu()
      if (!cancelled) setVisible(false)
    }, HOLD_MS)

    return () => {
      cancelled = true
      clearTimeout(timer)
    }
  }, [visible, animateScope, scope])

  return (
    <>
      {children}
      {visible && (
        <div
          ref={scope}
          aria-hidden
          className="fixed inset-0 z-[150] flex flex-col items-center justify-center overflow-hidden bg-fcolor text-white"
        >
          <div
            data-page-fade
            className="pointer-events-none absolute inset-0"
            style={{ background: 'radial-gradient(ellipse 55% 45% at 50% 50%, rgba(91,168,245,0.35), transparent 70%)' }}
          />
          <span
            data-page-label
            className="relative overflow-hidden px-4 pb-[0.18em] text-center font-satoshi text-5xl font-black leading-none tracking-[-0.04em] sm:text-8xl"
            style={{ transformOrigin: '50% 0.5em' }}
          >
            <motion.span
              className="block"
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              {page ?? 'Yug'}
              <span className="text-accent">.</span>
            </motion.span>
          </span>
          <motion.span
            data-page-fade
            className="relative mt-5 block h-px w-24 origin-left bg-white/40"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease }}
          />
        </div>
      )}
    </>
  )
}
