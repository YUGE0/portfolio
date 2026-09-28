'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { caseStudyRoutes } from './caseStudies'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/blogs', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

/** Distance (px) over which the floating pill dissolves into the footer bar */
const MERGE_RANGE = 140
const MOBILE_SIDE_GUTTER = 24
const MOBILE_MAX_WIDTH = 448

function isSmUp() {
  return window.matchMedia('(min-width: 640px)').matches
}

export default function Nav() {
  const pathname = usePathname()
  const navRef = useRef<HTMLElement>(null)
  const [merged, setMerged] = useState(false)

  const isActive = (href: string) => {
    if (merged && pathname === '/') return href === '/contact'
    if (href === '/') return pathname === '/'
    if (caseStudyRoutes.includes(pathname)) return href === '/work'
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  useEffect(() => {
    const nav = navRef.current
    if (!nav) return

    let rafId = 0

    const updatePosition = () => {
      rafId = 0
      const slot = document.getElementById('footer-nav-slot')
      const smUp = isSmUp()
      const defaultBottom = smUp ? 24 : 16

      if (!slot) {
        nav.style.transform = 'translate3d(-50%, 0, 0)'
        nav.style.bottom = `${defaultBottom}px`
        nav.style.setProperty('--nav-chrome', '1')
        setMerged(false)
        return
      }

      const navHeight = nav.offsetHeight
      if (slot.style.height !== `${navHeight}px`) slot.style.height = `${navHeight}px`

      if (smUp) {
        nav.style.width = ''
        const navWidth = `${nav.offsetWidth}px`
        if (slot.style.width !== navWidth) slot.style.width = navWidth
      } else if (slot.style.width) {
        slot.style.width = ''
      }

      const slotRect = slot.getBoundingClientRect()
      const slotCenter = slotRect.top + slotRect.height / 2
      const defaultCenter = window.innerHeight - defaultBottom - navHeight / 2
      const distance = slotCenter - defaultCenter
      const progress = Math.min(1, Math.max(0, 1 - distance / MERGE_RANGE))
      const lift = Math.max(0, -distance)

      if (!smUp) {
        const viewportWidth = document.documentElement.clientWidth
        const floatWidth = Math.min(viewportWidth - MOBILE_SIDE_GUTTER, MOBILE_MAX_WIDTH)
        nav.style.width = `${floatWidth + (slotRect.width - floatWidth) * progress}px`
      }

      nav.style.bottom = `${defaultBottom}px`
      nav.style.transform = `translate3d(-50%, ${-lift}px, 0)`
      nav.style.setProperty('--nav-chrome', String(1 - progress))
      setMerged(progress >= 1)
    }

    const scheduleUpdate = () => {
      if (!rafId) rafId = requestAnimationFrame(updatePosition)
    }

    updatePosition()
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)

    return () => {
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [pathname])

  return (
    <nav
      ref={navRef}
      aria-label="Main navigation"
      className="fixed z-50 w-[calc(100%-1.5rem)] max-w-md will-change-transform sm:w-auto sm:max-w-none"
      style={{ transform: 'translate3d(-50%, 0, 0)', left: '50%', bottom: 16 }}
    >
      <div className="relative flex w-full items-center justify-center px-3 py-2.5 sm:px-6 sm:py-3">
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-full bg-white shadow-lg shadow-fcolor/20"
          style={{ opacity: 'var(--nav-chrome, 1)' }}
        />
        <div className="relative flex w-full items-center justify-between gap-0.5 sm:justify-center sm:gap-1">
          {navItems.map(({ href, label }) => {
            const active = isActive(href)

            return (
              <Link
                key={label}
                href={href === '/contact' && pathname === '/' ? '#contact' : href}
                aria-current={active ? 'page' : undefined}
                className={`relative rounded-full px-2.5 py-1.5 font-inter text-xs transition-colors duration-200 sm:px-4 sm:py-2 sm:text-sm ${
                  active
                    ? 'font-semibold text-fcolor'
                    : 'font-medium text-fcolor/55 hover:text-fcolor'
                }`}
              >
                {label}
                {active && (
                  <span
                    className="absolute bottom-0.5 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-accent"
                    aria-hidden
                  />
                )}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
