'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowIcon } from './FeaturedWork'

type CtaBannerProps = {
  eyebrow: string
  title: string
  cta: string
  href?: string
}

export default function CtaBanner({ eyebrow, title, cta, href = '/contact' }: CtaBannerProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className="relative overflow-hidden rounded-3xl bg-fcolor px-6 py-10 text-white shadow-[0_30px_70px_-30px_rgba(42,64,100,0.7)] sm:px-12 sm:py-14"
      {...(reduceMotion
        ? {}
        : {
            initial: { opacity: 0, y: 28 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, amount: 0.2 },
            transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
          })}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 45% 70% at 90% 10%, rgba(91,168,245,0.45), transparent 65%), radial-gradient(ellipse 35% 60% at 0% 100%, rgba(91,168,245,0.25), transparent 60%)',
        }}
      />
      <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-inter text-[11px] font-medium uppercase tracking-[0.32em] text-[#9ccbfa] sm:text-xs">{eyebrow}</p>
          <h2 className="mt-3 max-w-xl font-satoshi text-3xl font-black leading-tight tracking-[-0.03em] text-white sm:text-5xl">{title}</h2>
        </div>
        <Link
          href={href}
          className="group inline-flex h-12 w-fit shrink-0 items-center gap-5 rounded-full bg-white pl-6 pr-1.5 font-inter text-sm font-semibold text-fcolor transition hover:bg-white/90 active:scale-[0.98]"
        >
          {cta}
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-fcolor text-white transition-transform group-hover:translate-x-0.5">
            <ArrowIcon />
          </span>
        </Link>
      </div>
    </motion.div>
  )
}
