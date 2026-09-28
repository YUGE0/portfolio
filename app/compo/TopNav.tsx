'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState, type ReactNode } from 'react'
import { caseStudies } from './caseStudies'

type ShellContext = {
  left: ReactNode
  right: ReactNode
}

/**
 * Route-aware top-shell contextual labels.
 * Home matches the Phase 1 reference; other routes stay ready for later.
 */
const SHELL_CONTEXT: Record<string, ShellContext> = {
  '/': {
    left: (
      <>
        <span className="block uppercase tracking-[0.16em] text-fcolor/45">
          01 — Home
        </span>
        <span className="mt-1 hidden normal-case tracking-normal text-fcolor/55 sm:block">
          Best way to see future{' '}
          <br />
          is to build it.
        </span>      </>
    ),
    right: (
      <>
        Front-End Developer
      </>
    ),
  },
  '/work': {
    left: (
      <span className="uppercase tracking-[0.16em]">02 — Projects</span>
    ),
    right: (
      <>
        Selected Projects
      </>
    ),
  },
  '/about': {
    left: (
      <span className="uppercase tracking-[0.16em]">
        03 — Skills & Experience
      </span>
    ),
    right: (
      <>
        Tools & Experience
      </>
    ),
  },
  '/blogs': {
    left: (
      <span className="uppercase tracking-[0.16em]">04 — Blog</span>
    ),
    right: (
      <>
        Notes & Writing
      </>
    ),
  },
  '/contact': {
    left: <span className="uppercase tracking-[0.16em]">05 — Contact</span>,
    right: <>Let&apos;s Talk</>,
  },
  ...Object.fromEntries(
    caseStudies.map((study) => [
      `/${study.slug}`,
      {
        left: <span className="uppercase tracking-[0.16em]">02 — Case Study</span>,
        right: <>{study.name}</>,
      },
    ])
  ),
}

function resolveContext(pathname: string): ShellContext {
  if (SHELL_CONTEXT[pathname]) return SHELL_CONTEXT[pathname]
  const match = Object.keys(SHELL_CONTEXT).find(
    (key) => key !== '/' && pathname.startsWith(key)
  )
  return match ? SHELL_CONTEXT[match] : SHELL_CONTEXT['/']
}

export default function TopNav() {
  const pathname = usePathname()
  const { left, right } = resolveContext(pathname)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])

  const sideClass = `transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
    scrolled ? 'pointer-events-none -translate-y-3 opacity-0' : 'pointer-events-auto translate-y-0 opacity-100'
  }`

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div className="relative mx-auto flex min-h-14 max-w-7xl items-start justify-between px-4 pt-3 sm:min-h-16 sm:px-8 sm:pt-4 lg:px-12">
        <div className={`max-w-[10.5rem] font-inter text-[10px] leading-snug sm:max-w-[14rem] sm:text-xs ${sideClass}`}>
          {left}
        </div>

        <Link
          href="/"
          aria-label="Yug home"
          className="pointer-events-auto absolute left-1/2 top-0 z-10 -translate-x-1/2"
        >
          <span className="flex h-11 items-end justify-center rounded-b-[1.5rem] bg-white px-7 pb-2 pt-3 shadow-[0_8px_30px_rgba(42,64,100,0.12)] sm:h-14 sm:rounded-b-[1.75rem] sm:px-9 sm:pb-2.5">
            <span className="font-satoshi text-2xl font-black tracking-tight text-fcolor sm:text-3xl">
              Yug<span className="text-accent">.</span>
            </span>
          </span>
        </Link>

        <p className={`flex items-start gap-2 text-left font-inter text-[10px] leading-snug text-fcolor sm:gap-3 sm:text-sm ${sideClass}`}>
          <span className="border-l border-fcolor/20 pl-3 sm:pl-4">{right}</span>
        </p>
      </div>
    </header>
  )
}
