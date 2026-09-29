'use client'

import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { DashboardMock } from './HeroMocks'

type Project = {
  index: string
  name: string
  href: string
  description: string
  tech: string[]
  preview: ReactNode
}

export const cardClass =
  'rounded-3xl border border-white/80 bg-white/70 shadow-[0_24px_60px_-32px_rgba(42,64,100,0.35)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_-30px_rgba(42,64,100,0.45)]'

export function ArrowIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 14 14" fill="none" aria-hidden>
      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IndexLabel({ children }: { children: string }) {
  return (
    <span className="flex items-center gap-3 font-inter text-xs text-fcolor/50">
      {children}
      <span className="h-px w-5 bg-fcolor/30" aria-hidden />
    </span>
  )
}

export function TechChips({ tech }: { tech: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tech.map((item) => (
        <span key={item} className="rounded-full border border-fcolor/5 bg-[#eef4fd] px-3 py-1 font-inter text-[11px] font-medium text-fcolor/80">
          {item}
        </span>
      ))}
    </div>
  )
}

export function MitreisenPreview() {
  return (
    <div className="flex h-full flex-col bg-white">
      <div className="flex items-center justify-between px-3 py-2">
        <span className="font-satoshi text-[10px] font-bold text-fcolor">✈ Mitreisen</span>
        <span className="hidden gap-2.5 font-inter text-[6px] text-fcolor/60 sm:flex">
          <span>Destinations</span>
          <span>Hotels</span>
          <span>Experiences</span>
          <span>About</span>
        </span>
        <span className="rounded-full bg-accent px-2 py-0.5 font-inter text-[6px] font-semibold text-white">Sign In</span>
      </div>
      <div className="relative flex-1 overflow-hidden">
        <div className="absolute left-[-123%] top-0 -mt-[31%] aspect-[1904/3194] w-[223%]">
          <Image src="/HomePage.png" alt="" fill sizes="900px" className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1c3150]/80 via-[#1c3150]/35 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-center px-4">
          <span className="font-satoshi text-[15px] font-bold leading-tight text-white">
            Discover the
            <br />
            World Together
          </span>
          <span className="mt-1 font-inter text-[6px] text-white/75">Plan, explore and book your next journey</span>
          <span className="mt-2.5 flex h-5 w-[60%] items-center justify-between rounded-full bg-white/95 pl-2 pr-0.5 font-inter text-[6px] text-fcolor/45">
            Search destinations...
            <span className="grid h-4 w-4 place-items-center rounded-full bg-accent text-white">
              <ArrowIcon className="h-2 w-2" />
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}

export function FoodHousePreview() {
  return (
    <div className="flex h-full flex-col bg-[#15120f] text-white">
      <div className="flex items-center justify-between px-3 py-2">
        <span className="font-satoshi text-[10px] font-bold">Food House</span>
        <span className="hidden gap-2.5 font-inter text-[6px] text-white/60 sm:flex">
          <span>Home</span>
          <span>Menu</span>
          <span>About</span>
          <span>Contact</span>
        </span>
        <span className="rounded-full bg-[#f3c78b] px-2 py-0.5 font-inter text-[6px] font-semibold text-[#15120f]">Reserve a Table</span>
      </div>
      <div className="relative flex flex-1 items-center overflow-hidden">
        <div className="relative z-10 w-[55%] px-4">
          <span className="block font-satoshi text-[15px] font-bold leading-tight">
            Good Food
            <br />
            Great Moments
          </span>
          <span className="mt-1 block font-inter text-[6px] text-white/65">Modern dining experience with real time features.</span>
          <span className="mt-2.5 flex gap-1.5 font-inter text-[6px] font-semibold">
            <span className="rounded-full bg-[#f3c78b] px-2 py-1 text-[#15120f]">View Menu</span>
            <span className="rounded-full border border-white/40 px-2 py-1">Book a Table</span>
          </span>
        </div>
        <div className="absolute -right-[6%] top-1/2 aspect-square w-[46%] -translate-y-1/2 overflow-hidden rounded-full border-4 border-[#2a241e] shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          <div className="absolute left-[-16.3%] top-0 -mt-[126%] aspect-[1440/739] w-[670%]">
            <Image src="/FoodHouseApp.webp" alt="" fill sizes="1000px" className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function AutosPreview() {
  return (
    <div className="flex h-full flex-col bg-white">
      <div className="flex items-center justify-between px-3 py-2">
        <span className="font-satoshi text-[10px] font-bold text-fcolor">Autos</span>
        <span className="hidden gap-2.5 font-inter text-[6px] text-fcolor/60 sm:flex">
          <span>Home</span>
          <span>Cars</span>
          <span>About</span>
        </span>
        <span className="rounded-full bg-fcolor px-2 py-0.5 font-inter text-[6px] font-semibold text-white">Contact</span>
      </div>
      <div className="relative flex flex-1 items-center overflow-hidden bg-gradient-to-br from-white via-[#f3f6fb] to-[#e4ebf5]">
        <div className="relative z-10 w-[45%] px-4">
          <span className="block font-satoshi text-[14px] font-bold leading-tight text-fcolor">
            Drive Your
            <br />
            Next Adventure
          </span>
          <span className="mt-1 block font-inter text-[6px] text-fcolor/55">Explore a wide range of cars with a clean experience.</span>
          <span className="mt-2.5 inline-block rounded-full bg-fcolor px-2 py-1 font-inter text-[6px] font-semibold text-white">Browse Cars</span>
        </div>
        <div className="absolute bottom-2 right-2 top-2 flex w-[58%] items-center overflow-hidden rounded-lg bg-[#ececec]">
          <div className="relative aspect-[1570/500] w-[108%] shrink-0 overflow-hidden">
            <div className="absolute left-[-15.9%] top-0 -mt-[240%] aspect-[1904/4414] w-[121%]">
              <Image src="/AutoRevuelto.png" alt="" fill sizes="700px" className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const projects: Project[] = [
  {
    index: '02',
    name: 'Mitreisen',
    href: '/mitreisen',
    description: 'Travel booking web application with end to end flow.',
    tech: ['MERN', 'MongoDB', 'Tailwind'],
    preview: <MitreisenPreview />,
  },
  {
    index: '03',
    name: 'Food House',
    href: '/foodHouse',
    description: 'Restaurant website with modern UI and real time features.',
    tech: ['Next.js', 'TypeScript', 'Supabase'],
    preview: <FoodHousePreview />,
  },
  {
    index: '04',
    name: 'Autos',
    href: '/auto',
    description: 'Car showcase website with a clean and minimal design.',
    tech: ['Next.js', 'TypeScript', 'Tailwind'],
    preview: <AutosPreview />,
  },
]

export default function FeaturedWork() {
  const reduceMotion = useReducedMotion()

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
    <section id="work" className="relative overflow-hidden py-16 sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 45% 40% at 80% 20%, rgba(91,168,245,0.18), transparent 65%), radial-gradient(ellipse 40% 35% at 10% 90%, rgba(91,168,245,0.12), transparent 60%)',
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        <div className="grid gap-5 lg:grid-cols-3">
          <motion.div className="flex flex-col justify-center lg:pr-6" {...reveal(0)}>
            <p className="font-inter text-[11px] font-medium uppercase tracking-[0.32em] text-accent sm:text-xs">Featured Work</p>
            <h2 className="mt-4 font-satoshi text-5xl font-black leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-[4rem] xl:text-[4.75rem]">
              <span className="block text-fcolor">Projects</span>
              <span className="block bg-gradient-to-b from-[#6db3f7] to-[#4a8fe8] bg-clip-text -mb-[0.1em] pb-[0.18em] text-transparent">
                I&apos;ve Built
              </span>
            </h2>
            <p className="mt-5 max-w-md font-inter text-sm leading-relaxed text-fcolor/70 sm:text-base">
              A collection of products and experiments I&apos;ve designed and built — from dashboards to consumer apps,
              with a focus on clean UI, real data and great user experience.
            </p>
            <Link
              href="/work"
              className="group mt-8 inline-flex h-12 w-fit items-center gap-5 rounded-full bg-fcolor pl-6 pr-1.5 font-inter text-sm font-semibold text-white shadow-[0_12px_30px_-10px_rgba(42,64,100,0.6)] transition hover:bg-fcolor/90 active:scale-[0.98]"
            >
              View All Projects
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-fcolor transition-transform group-hover:translate-x-0.5">
                <ArrowIcon />
              </span>
            </Link>
          </motion.div>

          <motion.article className={`${cardClass} group relative overflow-hidden lg:col-span-2`} {...reveal(0.1)}>
            <div className="grid md:grid-cols-[0.9fr_1.1fr]">
              <div className="relative z-10 flex flex-col p-6 sm:p-8">
                <IndexLabel>01</IndexLabel>
                <h3 className="mt-5 font-satoshi text-3xl font-bold leading-tight tracking-tight text-fcolor sm:text-4xl">
                  Position Wise
                  <br />
                  Advisory
                </h3>
                <p className="mt-4 max-w-xs font-inter text-sm leading-relaxed text-fcolor/70 sm:text-sm">
                  A complete advisory platform with real data flows, authentication, role based access and a focus on
                  clean UX and performance.
                </p>
                <div className="mt-5">
                  <TechChips tech={['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase']} />
                </div>
                <Link
                  href="/position-wise"
                  aria-label="View Position Wise Advisory"
                  className="mt-7 grid h-12 w-12 place-items-center rounded-full bg-fcolor text-white transition hover:bg-fcolor/90 group-hover:translate-x-0.5"
                >
                  <ArrowIcon className="h-5 w-5" />
                </Link>
              </div>

              <div className="relative h-[240px] overflow-hidden sm:h-[300px] md:h-auto md:min-h-[340px]">
                <div
                  className="absolute left-4 top-6 origin-top-left scale-[0.5] sm:left-8 sm:scale-[0.62] md:left-2 md:top-14 md:scale-[0.62] xl:scale-[0.78]"
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

            <Link
              href="/position-wise"
              aria-label="Open Position Wise Advisory"
              className="absolute right-5 top-5 z-20 grid h-10 w-10 place-items-center rounded-full border border-fcolor/10 bg-white/80 text-fcolor transition hover:border-fcolor hover:bg-fcolor hover:text-white"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
              </svg>
            </Link>
          </motion.article>

          {projects.map((project, i) => (
            <motion.article key={project.name} className={`${cardClass} group p-4 sm:p-5`} {...reveal(0.15 + i * 0.08)}>
              <Link href={project.href} className="block">
                <IndexLabel>{project.index}</IndexLabel>
                <div className="mt-3 aspect-[16/9] overflow-hidden rounded-2xl border border-fcolor/5 shadow-[0_12px_30px_-18px_rgba(42,64,100,0.4)]">
                  <div className="h-full transition-transform duration-500 group-hover:scale-[1.03]">{project.preview}</div>
                </div>
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-satoshi text-xl font-bold text-fcolor sm:text-xl">{project.name}</h3>
                    <p className="mt-1 max-w-[16rem] font-inter text-sm leading-relaxed text-fcolor/65 sm:text-sm">{project.description}</p>
                  </div>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-fcolor/15 bg-white text-fcolor transition group-hover:border-fcolor group-hover:bg-fcolor group-hover:text-white">
                    <ArrowIcon />
                  </span>
                </div>
              </Link>
              <div className="mt-4">
                <TechChips tech={project.tech} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
