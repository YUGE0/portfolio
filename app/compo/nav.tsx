'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import ShapeShell, { type SlantedInset } from './ShapeShell'

const navItems = [
  { href: '/work', label: 'Work', icon: '/work.svg', activeIcon: '/worka.svg' },
  { href: '/about', label: 'About', icon: '/about.svg', activeIcon: '/abouta.svg' },
  { href: '/blogs', label: 'Blogs', icon: '/blogs.svg', activeIcon: '/blogsa.svg' },
]

/** Customize pill + slanted shape layout here */
const NAV_SHAPE = {
  pillClassName:
    'flex w-full items-center justify-between gap-1 px-2 py-1.5 sm:gap-4 sm:px-5 sm:py-2.5',
  slantedClassName:
    'flex items-center justify-between gap-0.5 px-0.5 sm:gap-2 sm:px-2',
  /** Inset in viewBox units — increase values for more padding / thicker border look */
  slantedInset: {
    top: 0,
    right: 700,
    bottom: 0,
    left: 100,
  } satisfies SlantedInset,
}

const FOOTER_GAP = 0
const DOCK_GAP = 0

function getDefaultBottom() {
  if (typeof window === 'undefined') return 16
  return window.matchMedia('(min-width: 640px)').matches ? 24 : 16
}

function canDockBesideContact() {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(min-width: 768px)').matches
}

export default function Nav() {
  const pathname = usePathname()
  const navRef = useRef<HTMLElement>(null)
  const [navMode, setNavMode] = useState<'float' | 'lift' | 'dock'>('float')

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  useEffect(() => {
    const nav = navRef.current
    if (!nav) return

    let rafId = 0

    const updatePosition = () => {
      rafId = 0
      const footer = document.getElementById('site-footer')
      const contactMe = document.getElementById('contact-me-badge')
      if (!footer) return

      const defaultBottom = getDefaultBottom()
      const footerTop = footer.getBoundingClientRect().top
      const fixedBottomEdge = window.innerHeight - defaultBottom
      const desiredBottomEdge = footerTop - FOOTER_GAP
      const lift = Math.max(0, fixedBottomEdge - desiredBottomEdge)

      const shouldDock = lift > 0 && contactMe && canDockBesideContact()

      if (shouldDock) {
        const cmRect = contactMe.getBoundingClientRect()
        const footerRect = footer.getBoundingClientRect()
        const footerMargin = window.matchMedia('(min-width: 768px)').matches ? 40 : 0

        nav.style.left = `${cmRect.right + DOCK_GAP}px`
        nav.style.right = `${window.innerWidth - footerRect.right + footerMargin}px`
        nav.style.width = 'auto'
        nav.style.maxWidth = 'none'
        nav.style.bottom = `${window.innerHeight - cmRect.bottom}px`
        nav.style.height = `${cmRect.height}px`
        nav.style.transform = 'translate3d(0, 0, 0)'
        setNavMode('dock')
      } else {
        nav.style.left = '50%'
        nav.style.right = 'auto'
        nav.style.width = ''
        nav.style.maxWidth = ''
        nav.style.bottom = `${defaultBottom}px`
        nav.style.transform = `translate3d(-50%, ${-lift}px, 0)`
        setNavMode(lift > 0 ? 'lift' : 'float')
      }
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
      className="fixed z-50 w-[calc(100%-1rem)] max-w-md will-change-transform sm:w-[calc(100%-1.5rem)] sm:max-w-xl"
      style={{ transform: 'translate3d(-50%, 0, 0)', left: '50%', bottom: 12 }}
    >
      <ShapeShell
        variant={navMode === 'dock' ? 'slanted' : 'pill'}
        slantedInset={NAV_SHAPE.slantedInset}
        pillClassName={NAV_SHAPE.pillClassName}
        slantedClassName={NAV_SHAPE.slantedClassName}
        className="w-full"
      >
        <Link
          href="/"
          aria-current={isActive('/') ? 'page' : undefined}
          className={`shrink-0 rounded-full px-1.5 py-0.5 transition-all duration-200 sm:px-3 sm:py-1 ${
            isActive('/')
              ? 'bg-fcolor text-white'
              : 'text-fcolor hover:bg-fcolor/10 active:scale-95'
          }`}
        >
          <span className="font-work text-[10px] font-bold uppercase tracking-wide sm:text-sm">
            <span className="hidden sm:inline">Yug Prajapati</span>
            <span className="sm:hidden">Yug</span>
          </span>
        </Link>

        <div className="flex items-center gap-0.5 sm:gap-1">
          {navItems.map(({ href, label, icon, activeIcon }) => {
            const active = isActive(href)

            return (
              <Link
                key={href}
                href={href}
                aria-label={label}
                aria-current={active ? 'page' : undefined}
                className={`relative flex items-center justify-center rounded-full p-1 transition-all duration-200 sm:p-2 `}
              >
                <Image
                  src={active ? activeIcon : icon}
                  width={120}
                  height={32}
                  alt={label}
                  className="h-5 w-auto sm:h-7"
                />
              </Link>
            )
          })}
        </div>
      </ShapeShell>
    </nav>
  )
}
