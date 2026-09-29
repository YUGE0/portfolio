'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import { animate, motion, useAnimate, useReducedMotion } from 'framer-motion'

const INTRO_SECONDS = 1.3
const ease = [0.76, 0, 0.24, 1] as const

export default function AppLoader({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion()
  const [scope, animateScope] = useAnimate()
  const brandRef = useRef<HTMLSpanElement>(null)
  const [visible, setVisible] = useState(true)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const root = document.documentElement
    root.style.overflow = 'hidden'
    root.dataset.intro = ''
    let cancelled = false

    const finish = () => {
      root.style.overflow = ''
      delete root.dataset.intro
      setVisible(false)
    }

    const flyIntoPill = async () => {
      const brand = brandRef.current
      const target = document.querySelector<HTMLElement>('[data-loader-target="brand"]')
      if (reduceMotion || !brand || !target) {
        await animateScope(scope.current, { opacity: 0 }, { duration: 0.3 })
        return
      }
      const from = brand.getBoundingClientRect()
      const to = target.getBoundingClientRect()
      const fromSize = parseFloat(getComputedStyle(brand).fontSize)
      const toSize = parseFloat(getComputedStyle(target).fontSize)
      await Promise.all([
        animateScope('[data-intro-fade]', { opacity: 0 }, { duration: 0.35, ease: 'easeOut' }),
        animateScope('[data-intro-bg]', { opacity: 0 }, { duration: 0.7, delay: 0.2, ease }),
        animateScope(
          brand,
          {
            x: to.left + to.width / 2 - (from.left + from.width / 2),
            y: to.top + to.height / 2 - (from.top + fromSize / 2),
            scale: toSize / fromSize,
          },
          { duration: 0.9, ease }
        ),
      ])
    }

    const counter = animate(0, 100, {
      duration: reduceMotion ? 0.3 : INTRO_SECONDS,
      ease: [0.65, 0, 0.35, 1],
      onUpdate: (value) => setCount(Math.round(value)),
    })
    counter.then(async () => {
      if (cancelled) return
      await flyIntoPill()
      if (!cancelled) finish()
    })

    return () => {
      cancelled = true
      counter.stop()
      root.style.overflow = ''
      delete root.dataset.intro
    }
  }, [reduceMotion, animateScope, scope])

  return (
    <>
      {children}
      {visible && (
        <div ref={scope} aria-hidden className="fixed inset-0 z-[200] text-fcolor">
          <div data-intro-bg className="absolute inset-0 overflow-hidden bg-[#f4f8ff]">
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'radial-gradient(ellipse 55% 45% at 50% 55%, rgba(91,168,245,0.22), transparent 70%), radial-gradient(ellipse 40% 30% at 90% 10%, rgba(91,168,245,0.14), transparent 65%)',
              }}
            />
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[min(70vw,520px)] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40"
              style={{
                backgroundImage: 'radial-gradient(rgba(42,64,100,0.35) 1px, transparent 1.4px)',
                backgroundSize: '14px 14px',
                maskImage: 'radial-gradient(circle, black 30%, transparent 70%)',
              }}
            />
          </div>

          <div className="relative flex h-full flex-col">
            <div
              data-intro-fade
              className="flex items-center justify-between px-5 pt-5 font-inter text-[11px] uppercase tracking-[0.2em] text-fcolor/50 sm:px-10 sm:pt-8"
            >
              <span>Portfolio</span>
              <span>©{new Date().getFullYear()}</span>
            </div>

            <div className="flex flex-1 flex-col items-center justify-center">
              <span
                ref={brandRef}
                className="flex overflow-hidden pb-[0.18em] font-satoshi text-7xl font-black leading-none tracking-tight sm:text-9xl"
                style={{ transformOrigin: '50% 0.5em' }}
              >
                {['Y', 'u', 'g'].map((letter, i) => (
                  <motion.span
                    key={letter}
                    className="inline-block"
                    initial={reduceMotion ? false : { y: '110%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {letter}
                  </motion.span>
                ))}
                <motion.span
                  className="inline-block text-accent"
                  initial={reduceMotion ? false : { scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 18, delay: 0.45 }}
                >
                  .
                </motion.span>
              </span>
              <motion.span
                data-intro-fade
                className="mt-2 flex items-center gap-3 font-inter text-xs font-medium uppercase tracking-[0.32em] text-fcolor/55 sm:text-sm"
                initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Design <span className="h-1 w-1 rounded-full bg-accent" /> Develop{' '}
                <span className="h-1 w-1 rounded-full bg-accent" /> Ship
              </motion.span>
            </div>

            <div data-intro-fade>
              <div className="flex items-end justify-between gap-4 px-5 pb-6 sm:px-10 sm:pb-8">
                <span className="font-inter text-xs text-fcolor/55 sm:text-sm">Front-End Developer</span>
                <span className="font-satoshi text-5xl font-black tabular-nums tracking-tight sm:text-7xl">
                  {count}
                  <span className="text-accent">%</span>
                </span>
              </div>
              <div className="h-1 bg-fcolor/10">
                <div className="h-full origin-left bg-fcolor" style={{ transform: `scaleX(${count / 100})` }} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
