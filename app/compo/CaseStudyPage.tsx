'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useState, type CSSProperties } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import useSound from 'use-sound'
import CtaBanner from './CtaBanner'
import { ArrowIcon, TechChips } from './FeaturedWork'
import { getCaseStudy, type Feature, type Shot } from './caseStudies'
import { DashboardMock } from './HeroMocks'
import { HostSwitcher, PlansMock, PrivacyWallet, ScaledBox } from './PositionWiseDemos'

const cardClass =
  'rounded-3xl border border-white/80 bg-white/70 shadow-[0_24px_60px_-32px_rgba(42,64,100,0.35)] backdrop-blur-sm'

const eyebrowClass = 'font-inter text-[11px] font-medium uppercase tracking-[0.32em] text-accent sm:text-xs'

const FRAME_RATIO = 10 / 16

function ExpandIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
    </svg>
  )
}

const browserClass =
  'group relative overflow-hidden rounded-2xl border border-fcolor/10 bg-white shadow-[0_30px_60px_-30px_rgba(42,64,100,0.45)]'

function BrowserBar({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 border-b border-fcolor/10 bg-[#f6f9fe] px-4 py-2.5">
      <span className="flex gap-1.5" aria-hidden>
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff6159]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c941]" />
      </span>
      <span className="mx-auto truncate rounded-full bg-white px-4 py-1 font-inter text-[11px] text-fcolor/50 ring-1 ring-fcolor/10">
        {label}
      </span>
      <span className="w-10" aria-hidden />
    </div>
  )
}

function ShotMock({ shot }: { shot: Shot }) {
  if (shot.mock === 'dashboard' || shot.mock === 'plans') {
    return (
      <div className="bg-gradient-to-br from-[#f6f9fe] to-[#e4eefb] p-[4%]">
        <ScaledBox base={620} ratio={400 / 620}>
          {shot.mock === 'dashboard' ? <DashboardMock /> : <PlansMock />}
        </ScaledBox>
      </div>
    )
  }

  return (
    <div className="grid aspect-[16/10] place-items-center bg-gradient-to-br from-[#f6f9fe] to-[#e4eefb] p-6 text-center">
      <span>
        <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-white text-accent shadow-sm">
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <rect x="3" y="4" width="18" height="16" rx="2" />
            <circle cx="9" cy="10" r="2" />
            <path d="m21 16-5-5-9 9" />
          </svg>
        </span>
        <span className="mt-3 block font-satoshi text-lg font-bold text-fcolor">{shot.alt}</span>
        <span className="mt-1 block font-inter text-xs text-fcolor/50">Screenshot coming soon</span>
      </span>
    </div>
  )
}

function Visual({
  shot,
  available,
  frame = 'browser',
  label,
  ratio,
  onOpen,
  priority,
}: {
  shot: Shot
  available: boolean
  frame?: 'browser' | 'plain'
  label?: string
  ratio?: number
  onOpen?: (shot: Shot) => void
  priority?: boolean
}) {
  if (available) return <ShotFrame shot={shot} frame={frame} label={label} ratio={ratio} onOpen={onOpen} priority={priority} />

  return (
    <div className={browserClass}>
      <BrowserBar label={label ?? shot.alt} />
      <ShotMock shot={shot} />
    </div>
  )
}

function ShotFrame({
  shot,
  frame = 'browser',
  label,
  ratio = FRAME_RATIO,
  onOpen,
  priority,
}: {
  shot: Shot
  frame?: 'browser' | 'plain'
  label?: string
  ratio?: number
  onOpen?: (shot: Shot) => void
  priority?: boolean
}) {
  const tall = shot.h / shot.w > ratio + 0.02
  const frameHeight = Math.min(shot.h, shot.w * ratio)
  const scrollSeconds = Math.min(9, 1.5 + (shot.h / shot.w - ratio) * 2.2)

  if (frame === 'plain') {
    return (
      <div className={`${cardClass} group relative overflow-hidden p-4 sm:p-6`}>
        <Image
          src={shot.src}
          alt={shot.alt}
          width={shot.w}
          height={shot.h}
          priority={priority}
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]"
        />
        {onOpen && <OpenButton shot={shot} onOpen={onOpen} plain />}
      </div>
    )
  }

  return (
    <div className={browserClass}>
      <BrowserBar label={label ?? shot.alt} />
      <div className="relative overflow-hidden bg-white" style={{ aspectRatio: `${shot.w} / ${frameHeight}` }}>
        <div
          className={`absolute inset-x-0 top-0 ${
            tall
              ? 'transition-[top,transform] duration-700 ease-in-out group-hover:top-full group-hover:-translate-y-full group-hover:[transition-duration:var(--scroll-time)]'
              : ''
          }`}
          style={tall ? ({ '--scroll-time': `${scrollSeconds}s` } as CSSProperties) : undefined}
        >
          <Image
            src={shot.src}
            alt={shot.alt}
            width={shot.w}
            height={shot.h}
            priority={priority}
            sizes="(min-width: 1024px) 70vw, 100vw"
            className="h-auto w-full"
          />
        </div>
        {tall && (
          <span className="pointer-events-none absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-fcolor/85 px-3 py-1 font-inter text-[11px] font-medium text-white opacity-100 backdrop-blur transition-opacity duration-300 group-hover:opacity-0">
            <svg className="h-3 w-3" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path d="M7 2v10M3 8l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Hover to scroll
          </span>
        )}
      </div>
      {onOpen && <OpenButton shot={shot} onOpen={onOpen} />}
    </div>
  )
}

function OpenButton({ shot, onOpen, plain }: { shot: Shot; onOpen: (shot: Shot) => void; plain?: boolean }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(shot)}
      aria-label={`View ${shot.alt} full size`}
      className={`absolute right-3 z-10 ${plain ? 'top-3' : 'top-12'} grid h-9 w-9 place-items-center rounded-full border border-fcolor/10 bg-white/90 text-fcolor shadow-sm transition hover:border-fcolor hover:bg-fcolor hover:text-white`}
    >
      <ExpandIcon />
    </button>
  )
}

function Lightbox({ shot, onClose }: { shot: Shot | null; onClose: () => void }) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  useEffect(() => {
    if (!shot) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    const overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = overflow
      window.removeEventListener('keydown', onKey)
    }
  }, [shot, onClose])

  if (!mounted) return null

  return createPortal(
    <AnimatePresence>
      {shot && (
        <motion.div
          role="dialog"
          aria-modal
          aria-label={shot.alt}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#16233a]/75 p-3 backdrop-blur-sm sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative flex max-h-full w-full max-w-6xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
            initial={{ scale: 0.96, y: 16 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.96, y: 16 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 border-b border-fcolor/10 px-4 py-3 sm:px-5">
              <span className="truncate font-inter text-sm font-semibold text-fcolor">{shot.alt}</span>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-fcolor/15 text-fcolor transition hover:bg-fcolor hover:text-white"
              >
                <svg className="h-4 w-4" viewBox="0 0 14 14" fill="none" aria-hidden>
                  <path d="m3 3 8 8M11 3l-8 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <div className="overflow-y-auto">
              <Image src={shot.src} alt={shot.alt} width={shot.w} height={shot.h} sizes="(min-width: 1152px) 1152px, 100vw" className="h-auto w-full" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}

function EngineSound() {
  const [playing, setPlaying] = useState(false)
  const [play, { stop }] = useSound('/LB744_Exhaust_MIX8D_230303.mp3', { onend: () => setPlaying(false) })
  const reduceMotion = useReducedMotion()

  const toggle = () => {
    if (playing) {
      stop()
      setPlaying(false)
    } else {
      play()
      setPlaying(true)
    }
  }

  return (
    <div className="relative overflow-hidden rounded-3xl bg-fcolor p-6 text-white shadow-[0_30px_70px_-30px_rgba(42,64,100,0.7)] sm:p-10">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 60% 80% at 100% 0%, rgba(91,168,245,0.5), transparent 65%)' }}
      />
      <div className="relative">
        <p className="font-inter text-[11px] font-medium uppercase tracking-[0.32em] text-[#9ccbfa]">Try it</p>
        <p className="mt-3 font-satoshi text-3xl font-black tracking-tight sm:text-4xl">Feel the Engine</p>
        <p className="mt-1 font-inter text-sm text-white/65">Lamborghini Revuelto exhaust</p>

        <div className="mt-8 flex h-20 items-center gap-1" aria-hidden>
          {Array.from({ length: 36 }, (_, i) => {
            const base = 0.25 + 0.75 * Math.abs(Math.sin(i * 0.9) * Math.cos(i * 0.35))
            return (
              <motion.span
                key={i}
                className="w-full rounded-full bg-gradient-to-t from-accent to-[#9ccbfa]"
                style={{ height: `${base * 100}%` }}
                animate={
                  playing && !reduceMotion
                    ? { scaleY: [0.35, 1, 0.5, 0.9, 0.35] }
                    : { scaleY: 0.3 }
                }
                transition={
                  playing && !reduceMotion
                    ? { duration: 0.8 + (i % 5) * 0.12, repeat: Infinity, ease: 'easeInOut' }
                    : { duration: 0.4 }
                }
              />
            )
          })}
        </div>

        <button
          type="button"
          onClick={toggle}
          aria-pressed={playing}
          className="group mt-8 inline-flex h-12 items-center gap-4 rounded-full bg-white pl-1.5 pr-6 font-inter text-sm font-semibold text-fcolor transition hover:bg-white/90 active:scale-[0.98]"
        >
          <span className="grid h-9 w-9 place-items-center rounded-full bg-fcolor text-white">
            {playing ? (
              <svg className="h-3.5 w-3.5" viewBox="0 0 14 14" fill="currentColor" aria-hidden>
                <rect x="3" y="2" width="3" height="10" rx="1" />
                <rect x="8" y="2" width="3" height="10" rx="1" />
              </svg>
            ) : (
              <svg className="h-3.5 w-3.5 translate-x-px" viewBox="0 0 14 14" fill="currentColor" aria-hidden>
                <path d="M4 2.5v9a.5.5 0 0 0 .77.42l7-4.5a.5.5 0 0 0 0-.84l-7-4.5A.5.5 0 0 0 4 2.5Z" />
              </svg>
            )}
          </span>
          {playing ? 'Stop Engine' : 'Start Engine'}
        </button>
      </div>
    </div>
  )
}

function FeatureRow({
  feature,
  index,
  onOpen,
  has,
}: {
  feature: Feature
  index: number
  onOpen: (shot: Shot) => void
  has: (shot: Shot) => boolean
}) {
  const flip = index % 2 === 1

  return (
    <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
      <div className={flip ? 'lg:order-2' : ''}>
        {feature.demo === 'engine-sound' && <EngineSound />}
        {feature.demo === 'host-switcher' && <HostSwitcher />}
        {feature.demo === 'privacy-wallet' && <PrivacyWallet />}
        {!feature.demo && feature.shot && (
          <Visual shot={feature.shot} available={has(feature.shot)} frame={feature.frame} onOpen={onOpen} />
        )}
      </div>

      <div>
        <p className="flex items-center gap-3 font-inter text-xs text-fcolor/50">
          {String(index + 1).padStart(2, '0')}
          <span className="h-px w-5 bg-fcolor/30" aria-hidden />
          <span className="font-semibold uppercase tracking-[0.18em] text-accent">{feature.eyebrow}</span>
        </p>
        <div className="mt-5 space-y-5">
          {feature.points.map((point) => (
            <div key={point.title}>
              <h3 className="font-satoshi text-2xl font-bold tracking-tight text-fcolor sm:text-3xl">{point.title}</h3>
              <p className="mt-2 font-inter text-sm leading-relaxed text-fcolor/70 sm:text-base">{point.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-2xl border border-fcolor/5 bg-[#eef4fd] p-4 sm:p-5">
          <p className="flex items-center gap-2 font-inter text-[11px] font-semibold uppercase tracking-[0.18em] text-fcolor/55">
            <svg className="h-4 w-4 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2Z" />
            </svg>
            What I Learned
          </p>
          <p className="mt-2 font-inter text-sm leading-relaxed text-fcolor/75">{feature.learning}</p>
        </div>
      </div>
    </div>
  )
}

export default function CaseStudyPage({ slug, available }: { slug: string; available: string[] }) {
  const { study, next } = getCaseStudy(slug)
  const has = (shot: Shot) => available.includes(shot.src)
  const galleryGroups = (study.gallery ?? [])
    .map((group) => ({ ...group, shots: group.shots.filter(has) }))
    .filter((group) => group.shots.length > 0)
  const reduceMotion = useReducedMotion()
  const [tab, setTab] = useState(0)
  const [openShot, setOpenShot] = useState<Shot | null>(null)
  const closeShot = useCallback(() => setOpenShot(null), [])
  const inProgress = study.status === 'In Progress'

  const reveal = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.15 },
          transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
        }

  const gallery = galleryGroups[tab]

  return (
    <section className="relative overflow-hidden pb-16 pt-6 sm:pb-24 sm:pt-10">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 45% 25% at 85% 5%, rgba(91,168,245,0.2), transparent 65%), radial-gradient(ellipse 40% 20% at 5% 35%, rgba(91,168,245,0.12), transparent 60%), radial-gradient(ellipse 45% 20% at 95% 70%, rgba(91,168,245,0.12), transparent 60%)',
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        <Link
          href="/work"
          className="group inline-flex items-center gap-2 rounded-full border border-fcolor/10 bg-white/70 py-1.5 pl-1.5 pr-4 font-inter text-xs font-semibold text-fcolor backdrop-blur transition hover:border-fcolor/30"
        >
          <span className="grid h-7 w-7 place-items-center rounded-full bg-fcolor text-white transition-transform group-hover:-translate-x-0.5">
            <ArrowIcon className="h-3.5 w-3.5 rotate-180" />
          </span>
          All Projects
        </Link>

        <div className="mt-8 grid items-end gap-8 lg:grid-cols-[1.45fr_1fr] lg:gap-12">
          <motion.div {...reveal(0)}>
            <div className="flex flex-wrap items-center gap-3">
              <p className={eyebrowClass}>
                Case Study · {study.index} · {study.category}
              </p>
              <span className="flex items-center gap-1.5 rounded-full border border-fcolor/10 bg-white px-2.5 py-0.5 font-inter text-[11px] font-medium text-fcolor">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${inProgress ? 'animate-pulse bg-accent' : 'bg-[#28c941]'}`}
                  aria-hidden
                />
                {study.status}
              </span>
            </div>
            <h1 className="mt-4 font-satoshi text-[3.25rem] font-black leading-[0.9] tracking-[-0.04em] text-fcolor sm:text-8xl xl:text-[7.5rem]">
              {study.name}
            </h1>
            <p className="mt-4 max-w-xl bg-gradient-to-b from-[#6db3f7] to-[#4a8fe8] bg-clip-text pb-1 font-satoshi text-2xl font-bold leading-tight tracking-tight text-transparent sm:text-3xl">
              {study.tagline}
            </p>
            <p className="mt-5 max-w-2xl font-inter text-sm leading-relaxed text-fcolor/70 sm:text-base">{study.summary}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              {study.links.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`group inline-flex h-12 items-center gap-4 rounded-full pl-6 pr-1.5 font-inter text-sm font-semibold transition active:scale-[0.98] ${
                    i === 0
                      ? 'bg-fcolor text-white shadow-[0_12px_30px_-10px_rgba(42,64,100,0.6)] hover:bg-fcolor/90'
                      : 'border border-fcolor/15 bg-white text-fcolor hover:border-fcolor'
                  }`}
                >
                  {link.label}
                  <span
                    className={`grid h-9 w-9 place-items-center rounded-full transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${
                      i === 0 ? 'bg-white text-fcolor' : 'bg-fcolor text-white'
                    }`}
                  >
                    <ArrowIcon className="h-4 w-4 -rotate-45" />
                  </span>
                </a>
              ))}
              {inProgress && (
                <span className="inline-flex h-12 items-center gap-3 rounded-full border border-dashed border-fcolor/25 bg-white/60 px-6 font-inter text-sm font-semibold text-fcolor/60">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-accent" aria-hidden />
                  Live demo coming soon
                </span>
              )}
            </div>
          </motion.div>

          <motion.aside className={`${cardClass} p-5 sm:p-7`} {...reveal(0.1)}>
            <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.18em] text-fcolor/45">Project Details</p>
            <dl className="mt-3 divide-y divide-fcolor/10 border-y border-fcolor/10 font-inter">
              {study.meta.map((item) => (
                <div key={item.label} className="flex items-start justify-between gap-4 py-3">
                  <dt className="shrink-0 text-[11px] uppercase tracking-[0.18em] text-fcolor/45">{item.label}</dt>
                  <dd className="text-right text-sm font-semibold text-fcolor">{item.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 font-inter text-[11px] font-semibold uppercase tracking-[0.18em] text-fcolor/45">Tech Stack</p>
            <div className="mt-3">
              <TechChips tech={study.stack} />
            </div>
          </motion.aside>
        </div>

        <motion.div className="mt-10 sm:mt-14" {...reveal(0.15)}>
          <Visual
            shot={study.hero}
            available={has(study.hero)}
            frame={study.heroFrame}
            label={study.url ?? study.name}
            ratio={study.heroFrame === 'browser' ? 9 / 16 : 1}
            onOpen={setOpenShot}
            priority
          />
        </motion.div>

        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {study.highlights.map((item, i) => (
            <motion.div key={item.title} className={`${cardClass} p-5 sm:p-6`} {...reveal(0.05 * i)}>
              <span className="font-satoshi text-sm font-black text-accent">{String(i + 1).padStart(2, '0')}</span>
              <p className="mt-3 font-satoshi text-xl font-bold tracking-tight text-fcolor">{item.title}</p>
              <p className="mt-1.5 font-inter text-sm leading-relaxed text-fcolor/65">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {study.stats && (
          <motion.dl
            className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-fcolor/10 shadow-[0_24px_60px_-32px_rgba(42,64,100,0.35)] md:grid-cols-4"
            {...reveal(0.1)}
          >
            {study.stats.map((item) => (
              <div key={item.label} className="bg-white/85 p-5 backdrop-blur-sm sm:p-6">
                <dd className="font-satoshi text-4xl font-black tracking-tight text-fcolor sm:text-5xl">{item.value}</dd>
                <dt className="mt-1 font-inter text-xs text-fcolor/55 sm:text-sm">{item.label}</dt>
              </div>
            ))}
          </motion.dl>
        )}

        {gallery && (
          <div className="mt-16 sm:mt-24">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <motion.div {...reveal(0)}>
                <p className={eyebrowClass}>Screens</p>
                <h2 className="mt-3 font-satoshi text-3xl font-black tracking-[-0.03em] text-fcolor sm:text-5xl">Inside the Product</h2>
              </motion.div>
              <div
                role="tablist"
                aria-label="Screen groups"
                className="flex w-fit max-w-full gap-1 overflow-x-auto rounded-full border border-white/80 bg-white/70 p-1 shadow-[0_12px_30px_-20px_rgba(42,64,100,0.4)] backdrop-blur-sm"
              >
                {galleryGroups.map((group, i) => {
                  const active = tab === i
                  return (
                    <button
                      key={group.label}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() => setTab(i)}
                      className={`relative shrink-0 rounded-full px-4 py-2 font-inter text-xs font-semibold transition-colors sm:text-sm ${
                        active ? 'text-white' : 'text-fcolor/65 hover:text-fcolor'
                      }`}
                    >
                      {active && (
                        <motion.span
                          layoutId="case-study-tab"
                          className="absolute inset-0 rounded-full bg-fcolor"
                          transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                        />
                      )}
                      <span className="relative">
                        {group.label}
                        <span className={`ml-1.5 ${active ? 'text-white/60' : 'text-fcolor/35'}`}>{group.shots.length}</span>
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={gallery.label}
                role="tabpanel"
                className="mt-8 grid items-start gap-5 md:grid-cols-2"
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                {gallery.shots.map((item, i) => (
                  <div key={item.src} className={gallery.shots.length === 1 || (i === 0 && gallery.shots.length % 2 === 1) ? 'md:col-span-2' : ''}>
                    <ShotFrame shot={item} onOpen={setOpenShot} />
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        )}

        {study.features.length > 0 && (
          <div className="mt-16 sm:mt-24">
            <motion.div {...reveal(0)}>
              <p className={eyebrowClass}>Deep Dive</p>
              <h2 className="mt-3 font-satoshi text-3xl font-black tracking-[-0.03em] text-fcolor sm:text-5xl">
                How It Works <span className="bg-gradient-to-b from-[#6db3f7] to-[#4a8fe8] bg-clip-text text-transparent">&amp; What I Learned</span>
              </h2>
            </motion.div>
            <div className="mt-10 space-y-16 sm:space-y-24">
              {study.features.map((feature, i) => (
                <motion.div key={feature.eyebrow} {...reveal(0)}>
                  <FeatureRow feature={feature} index={i} onOpen={setOpenShot} has={has} />
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {study.challenge && (
          <motion.div className={`${cardClass} mt-16 p-6 sm:mt-24 sm:p-10`} {...reveal(0)}>
            <p className={eyebrowClass}>The Hardest Part</p>
            <h2 className="mt-3 max-w-3xl font-satoshi text-3xl font-black leading-tight tracking-[-0.03em] text-fcolor sm:text-5xl">
              {study.challenge.title}
            </h2>
            <div className="mt-6 grid gap-5 font-inter text-sm leading-relaxed text-fcolor/70 sm:text-base md:grid-cols-2 md:gap-8">
              <p>
                <span className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.18em] text-fcolor/45">Problem</span>
                {study.challenge.problem}
              </p>
              <p>
                <span className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.18em] text-fcolor/45">Solution</span>
                {study.challenge.solution}
              </p>
            </div>
            <div className="mt-8 grid items-center gap-4 md:grid-cols-[1fr_auto_1.3fr]">
              <div className="rounded-2xl border border-fcolor/10 bg-white/90 p-5">
                <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.18em] text-fcolor/45">Before</p>
                <p className="mt-1 font-satoshi text-lg font-bold text-fcolor">{study.challenge.before.label}</p>
                <ul className="mt-3 space-y-1.5">
                  {study.challenge.before.items.map((item) => (
                    <li key={item} className="rounded-lg bg-[#eef4fd] px-3 py-1.5 font-mono text-xs text-fcolor/75">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <span className="mx-auto grid h-11 w-11 rotate-90 place-items-center rounded-full bg-fcolor text-white md:rotate-0" aria-hidden>
                <ArrowIcon />
              </span>
              <div className="rounded-2xl bg-fcolor p-5 text-white shadow-[0_24px_50px_-24px_rgba(42,64,100,0.7)]">
                <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55">After</p>
                <p className="mt-1 font-satoshi text-lg font-bold">{study.challenge.after.label}</p>
                <ul className="mt-3 grid gap-1.5 sm:grid-cols-2">
                  {study.challenge.after.items.map((item) => (
                    <li key={item} className="rounded-lg bg-white/10 px-3 py-1.5 font-mono text-xs text-white/85">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}

        {study.roadmap && (
          <div className="mt-16 sm:mt-24">
            <motion.div {...reveal(0)}>
              <p className={eyebrowClass}>Roadmap</p>
              <h2 className="mt-3 font-satoshi text-3xl font-black tracking-[-0.03em] text-fcolor sm:text-5xl">
                {inProgress ? <>What&apos;s Being Built</> : <>What&apos;s Next</>}
              </h2>
            </motion.div>
            <ol className="mt-8 grid gap-5 sm:grid-cols-2">
              {study.roadmap.map((item, i) => (
                <motion.li key={item.title} className={`${cardClass} flex gap-4 p-5 sm:p-6`} {...reveal(0.05 * i)}>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-fcolor font-satoshi text-sm font-black text-white">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <p className="font-satoshi text-xl font-bold tracking-tight text-fcolor">{item.title}</p>
                    <p className="mt-1.5 font-inter text-sm leading-relaxed text-fcolor/65">{item.text}</p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        )}

        <motion.div className="mt-16 sm:mt-24" {...reveal(0)}>
          <Link
            href={`/${next.slug}`}
            className={`${cardClass} group grid items-center gap-6 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_-30px_rgba(42,64,100,0.45)] sm:p-8 md:grid-cols-[1fr_1.1fr]`}
          >
            <div>
              <p className={eyebrowClass}>Next Case Study</p>
              <p className="mt-3 font-satoshi text-4xl font-black tracking-[-0.03em] text-fcolor sm:text-6xl">{next.name}</p>
              <p className="mt-2 font-inter text-sm text-fcolor/60 sm:text-base">{next.tagline}</p>
              <span className="mt-6 inline-flex items-center gap-4 font-inter text-sm font-semibold text-fcolor">
                View Case Study
                <span className="grid h-11 w-11 place-items-center rounded-full border border-fcolor/15 bg-white transition group-hover:border-fcolor group-hover:bg-fcolor group-hover:text-white">
                  <ArrowIcon />
                </span>
              </span>
            </div>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-fcolor/5 bg-white shadow-[0_16px_40px_-22px_rgba(42,64,100,0.45)]">
              {has(next.hero) ? (
                <Image
                  src={next.hero.src}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className={`transition-transform duration-500 group-hover:scale-[1.03] ${
                    next.heroFrame === 'plain' ? 'object-contain p-2' : 'object-cover object-top'
                  }`}
                />
              ) : (
                <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.03]">
                  <ShotMock shot={next.hero} />
                </div>
              )}
            </div>
          </Link>
        </motion.div>

        <div className="mt-5">
          <CtaBanner eyebrow="Like What You See?" title="Let's build something great together." cta="Start a Conversation" />
        </div>
      </div>

      <Lightbox shot={openShot} onClose={closeShot} />
    </section>
  )
}
