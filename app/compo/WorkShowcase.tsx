'use client'

import Link from 'next/link'
import { useLayoutEffect, useRef, useState, type ReactNode } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import CtaBanner from './CtaBanner'
import { DashboardMock } from './HeroMocks'
import {
  ArrowIcon,
  AutosPreview,
  cardClass,
  FoodHousePreview,
  IndexLabel,
  MitreisenPreview,
  TechChips,
} from './FeaturedWork'

type Category = 'Web App' | 'Website' | 'Widget'

type Project = {
  index: string
  name: string
  href: string
  category: Category
  tagline: string
  description: string
  tech: string[]
  status?: string
  preview: ReactNode
}

const PREVIEW_BASE = 340

function ClockoPreview() {
  const cities = [
    ['New York', '01:05 AM'],
    ['Frankfurt', '07:05 AM'],
    ['Helsinki', '08:05 AM'],
  ]

  return (
    <div className="flex h-full flex-col items-center justify-center gap-3 bg-[#0d0d0f] text-white">
      <div className="flex gap-3">
        {[
          ['10', 'AM', ':22'],
          ['35', 'FRI', '20'],
        ].map(([digits, left, right]) => (
          <div
            key={digits}
            className="relative flex h-[104px] w-[86px] flex-col justify-between rounded-md bg-gradient-to-b from-[#1b1b1f] to-[#121215] px-2 pb-1.5 pt-1 shadow-[0_10px_24px_rgba(0,0,0,0.6)]"
          >
            <span className="absolute inset-x-0 top-1/2 h-px bg-black/70" aria-hidden />
            <span className="text-center font-inter text-[56px] font-extralight leading-none tracking-tight">{digits}</span>
            <span className="flex justify-between font-inter text-[7px] font-semibold">
              <span>{left}</span>
              <span>{right}</span>
            </span>
          </div>
        ))}
      </div>
      <div className="flex gap-2.5">
        {cities.map(([city, time]) => (
          <span key={city} className="flex flex-col items-center gap-0.5 font-inter text-[6px] font-semibold">
            {city}
            <span className="rounded-sm bg-white/10 px-1 py-0.5 font-medium text-white/80">{time}</span>
          </span>
        ))}
      </div>
    </div>
  )
}

function ScaledPreview({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(0)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    const update = () => setScale(el.clientWidth / PREVIEW_BASE)
    update()
    const observer = new ResizeObserver(update)
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="relative aspect-[16/9] w-full overflow-hidden">
      <div
        className="absolute left-0 top-0 origin-top-left"
        style={{
          width: PREVIEW_BASE,
          height: (PREVIEW_BASE * 9) / 16,
          transform: `scale(${scale})`,
          opacity: scale ? 1 : 0,
        }}
      >
        {children}
      </div>
    </div>
  )
}

const projects: Project[] = [
  {
    index: '02',
    name: 'Mitreisen',
    href: '/mitreisen',
    category: 'Web App',
    tagline: 'Multi-modal travel booking',
    description:
      'A travel booking system built during my internship at Skywinds Solutions. Users can search and book flights, trains, hotels and tours in one seamless flow.',
    tech: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    preview: <MitreisenPreview />,
  },
  {
    index: '03',
    name: 'Food House',
    href: '/foodHouse',
    category: 'Web App',
    tagline: 'Food ordering with admin panel',
    description:
      'A sleek food ordering app with dynamic menu browsing, seamless cart management and a robust admin panel for order and item control.',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    status: 'In Progress',
    preview: <FoodHousePreview />,
  },
  {
    index: '04',
    name: 'Autos',
    href: '/auto',
    category: 'Website',
    tagline: 'Immersive car showcase',
    description:
      'A car showcase platform with dynamically rendered pages for every car and an immersive engine sound playback feature.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    preview: <AutosPreview />,
  },
  {
    index: '05',
    name: 'Clocko',
    href: '/clocko',
    category: 'Widget',
    tagline: 'World clock with flip cards',
    description:
      'A dynamic world clock showing real-time timezones across cities, with smooth flip transitions and light and dark themes.',
    tech: ['React.js', 'Tailwind CSS'],
    preview: <ClockoPreview />,
  },
]

const filters: Array<'All' | Category> = ['All', 'Web App', 'Website', 'Widget']

const stats = [
  { value: '05', label: 'Featured projects' },
  { value: '03', label: 'Companies worked with' },
  { value: '2+', label: 'Years building for the web' },
]

export default function WorkShowcase() {
  const reduceMotion = useReducedMotion()
  const [filter, setFilter] = useState<(typeof filters)[number]>('All')
  const visible = filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  const reveal = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.2 },
          transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
        }

  return (
    <section className="relative overflow-hidden pb-16 pt-10 sm:pb-24 sm:pt-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 45% 35% at 85% 8%, rgba(91,168,245,0.2), transparent 65%), radial-gradient(ellipse 40% 30% at 5% 45%, rgba(91,168,245,0.12), transparent 60%), radial-gradient(ellipse 45% 30% at 90% 90%, rgba(91,168,245,0.12), transparent 60%)',
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        <div className="grid items-end gap-8 lg:grid-cols-[1.4fr_1fr]">
          <motion.div {...reveal(0)}>
            <p className="font-inter text-[11px] font-medium uppercase tracking-[0.32em] text-accent sm:text-xs">Selected Work</p>
            <h1 className="mt-4 font-satoshi text-5xl font-black leading-[0.95] tracking-[-0.04em] sm:text-7xl xl:text-[5.5rem]">
              <span className="block text-fcolor">Things I&apos;ve</span>
              <span className="block bg-gradient-to-b from-[#6db3f7] to-[#4a8fe8] bg-clip-text pb-[0.08em] text-transparent">
                Designed &amp; Built
              </span>
            </h1>
            <p className="mt-5 max-w-lg font-inter text-sm leading-relaxed text-fcolor/70 sm:text-base">
              From advisory dashboards to travel booking and food ordering, here&apos;s a closer look at the products I&apos;ve
              shipped, what they do and the stack behind them.
            </p>
          </motion.div>

          <motion.div className={`${cardClass} grid grid-cols-3 divide-x divide-fcolor/10 p-5 sm:p-6`} {...reveal(0.1)}>
            {stats.map((stat) => (
              <div key={stat.label} className="px-3 first:pl-0 last:pr-0 sm:px-5">
                <span className="block font-satoshi text-3xl font-black tracking-tight text-fcolor sm:text-4xl">{stat.value}</span>
                <span className="mt-1 block font-inter text-[11px] leading-snug text-fcolor/60 sm:text-xs">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.article className={`${cardClass} group relative mt-10 overflow-hidden sm:mt-14`} {...reveal(0.15)}>
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            <div className="relative z-10 flex flex-col p-6 sm:p-10">
              <div className="flex items-center justify-between gap-4">
                <IndexLabel>01</IndexLabel>
                <span className="rounded-full bg-fcolor px-3 py-1 font-inter text-[11px] font-semibold text-white">Featured</span>
              </div>
              <h2 className="mt-6 font-satoshi text-4xl font-bold leading-[1.05] tracking-tight text-fcolor sm:text-5xl">
                Position Wise
                <br />
                Advisory
              </h2>
              <p className="mt-4 max-w-md font-inter text-sm leading-relaxed text-fcolor/70 sm:text-base">
                A complete advisory platform with real data flows, authentication, role based access and a focus on clean
                UX and performance.
              </p>

              <dl className="mt-6 grid grid-cols-2 gap-4 border-y border-fcolor/10 py-5 font-inter">
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.18em] text-fcolor/45">Type</dt>
                  <dd className="mt-1 text-sm font-semibold text-fcolor">Advisory Platform</dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.18em] text-fcolor/45">Focus</dt>
                  <dd className="mt-1 text-sm font-semibold text-fcolor">Dashboards &amp; Auth</dd>
                </div>
              </dl>

              <div className="mt-5">
                <TechChips tech={['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase']} />
              </div>
            </div>

            <div className="relative h-[250px] overflow-hidden sm:h-[380px] lg:h-auto lg:min-h-[460px]">
              <div
                aria-hidden
                className="absolute inset-0"
                style={{ background: 'radial-gradient(ellipse 60% 55% at 55% 50%, rgba(91,168,245,0.22), transparent 70%)' }}
              />
              <div
                className="absolute left-4 top-6 origin-top-left scale-[0.5] sm:left-10 sm:top-8 sm:scale-[0.85] lg:left-4 lg:top-16 lg:scale-[0.8] xl:scale-[0.95]"
                style={{ perspective: '1600px' }}
              >
                <div
                  className="transition-transform duration-500 group-hover:[transform:rotateY(10deg)_rotateX(4deg)_rotateZ(-3deg)]"
                  style={{ transform: 'rotateY(16deg) rotateX(6deg) rotateZ(-4deg)' }}
                >
                  <DashboardMock />
                </div>
              </div>
            </div>
          </div>
        </motion.article>

        <div className="mt-16 flex flex-col gap-5 sm:mt-24 md:flex-row md:items-end md:justify-between">
          <motion.div {...reveal(0)}>
            <p className="font-inter text-[11px] font-medium uppercase tracking-[0.32em] text-accent sm:text-xs">Archive</p>
            <h2 className="mt-3 font-satoshi text-3xl font-black tracking-[-0.03em] text-fcolor sm:text-5xl">More Projects</h2>
          </motion.div>

          <div role="tablist" aria-label="Filter projects" className="flex w-fit gap-1 rounded-full border border-white/80 bg-white/70 p-1 shadow-[0_12px_30px_-20px_rgba(42,64,100,0.4)] backdrop-blur-sm">
            {filters.map((item) => {
              const active = filter === item
              return (
                <button
                  key={item}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(item)}
                  className={`relative rounded-full px-4 py-2 font-inter text-xs font-semibold transition-colors sm:text-sm ${
                    active ? 'text-white' : 'text-fcolor/65 hover:text-fcolor'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="work-filter"
                      className="absolute inset-0 rounded-full bg-fcolor"
                      transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                    />
                  )}
                  <span className="relative">{item === 'All' ? 'All' : `${item}s`}</span>
                </button>
              )
            })}
          </div>
        </div>

        <motion.div layout={!reduceMotion} className="mt-8 grid gap-5 sm:gap-6">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((project, i) => (
              <motion.article
                key={project.name}
                layout={!reduceMotion}
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className={`${cardClass} group`}
              >
                <Link href={project.href} className="grid items-center gap-6 p-4 sm:p-6 lg:grid-cols-[1.1fr_1fr] lg:gap-10 lg:p-7">
                  <div
                    className={`overflow-hidden rounded-2xl border border-fcolor/5 shadow-[0_16px_40px_-22px_rgba(42,64,100,0.45)] ${
                      i % 2 ? 'lg:order-2' : ''
                    }`}
                  >
                    <div className="transition-transform duration-500 group-hover:scale-[1.03]">
                      <ScaledPreview>{project.preview}</ScaledPreview>
                    </div>
                  </div>

                  <div className="flex flex-col px-1 pb-1 sm:px-2 lg:py-2">
                    <div className="flex flex-wrap items-center gap-3">
                      <IndexLabel>{project.index}</IndexLabel>
                      <span className="font-inter text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
                        {project.category}
                      </span>
                      {project.status && (
                        <span className="flex items-center gap-1.5 rounded-full border border-fcolor/10 bg-white px-2.5 py-0.5 font-inter text-[11px] font-medium text-fcolor">
                          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" aria-hidden />
                          {project.status}
                        </span>
                      )}
                    </div>
                    <h3 className="mt-4 font-satoshi text-3xl font-bold tracking-tight text-fcolor sm:text-4xl">{project.name}</h3>
                    <p className="mt-1 font-inter text-sm font-medium text-fcolor/50">{project.tagline}</p>
                    <p className="mt-4 max-w-md font-inter text-sm leading-relaxed text-fcolor/70 sm:text-base">
                      {project.description}
                    </p>
                    <div className="mt-5">
                      <TechChips tech={project.tech} />
                    </div>
                    <span className="mt-7 inline-flex w-fit items-center gap-4 font-inter text-sm font-semibold text-fcolor">
                      View Case Study
                      <span className="grid h-11 w-11 place-items-center rounded-full border border-fcolor/15 bg-white transition group-hover:border-fcolor group-hover:bg-fcolor group-hover:text-white">
                        <ArrowIcon />
                      </span>
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-16 sm:mt-24">
          <CtaBanner eyebrow="Next Project" title="Have an idea? Let's build it together." cta="Start a Conversation" />
        </div>
      </div>
    </section>
  )
}
