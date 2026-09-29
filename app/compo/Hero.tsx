'use client'

import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { DashboardMock, FoodHouseMock, MitreisenMock } from './HeroMocks'

const supabaseIcon = (
  <svg className="h-4 w-4" viewBox="0 0 109 113" aria-hidden>
    <path d="M63.708 110.284c-2.86 3.601-8.658 1.628-8.727-2.97l-1.007-67.251h45.22c8.19 0 12.758 9.46 7.665 15.874l-43.151 54.347Z" fill="#249361" />
    <path d="M45.317 2.071c2.86-3.601 8.657-1.628 8.726 2.97l.442 67.251H9.83c-8.19 0-12.759-9.46-7.665-15.875L45.317 2.072Z" fill="#3ECF8E" />
  </svg>
)

const stack: { name: string; icon: string | ReactNode }[] = [
  { name: 'React', icon: '/Reactjs.svg' },
  { name: 'Next.js', icon: '/Nextjs.svg' },
  { name: 'TypeScript', icon: '/TypeScript.svg' },
  { name: 'Tailwind CSS', icon: '/TailwindCSS.svg' },
  { name: 'Supabase', icon: supabaseIcon },
]

const stats = [
  { value: '2+', label: ['Years', 'Experience'] },
  { value: '10+', label: ['Projects', 'Built'] },
  { value: '100%', label: ['Passion', 'for Building'] },
]

const tagIcons = {
  design: 'M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z',
  ideas: 'M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.8c.6.45 1 1.1 1.1 1.85V17h4.8v-1.35c.1-.75.5-1.4 1.1-1.85A6 6 0 0 0 12 3Z',
  develop: 'm16 18 6-6-6-6M8 6l-6 6 6 6',
}

function FloatingTag({ icon, children }: { icon: string; children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-xl border border-white bg-white/95 px-4 py-2.5 font-inter text-sm font-semibold text-fcolor shadow-[0_12px_30px_-8px_rgba(42,64,100,0.25)]">
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d={icon} />
      </svg>
      {children}
    </span>
  )
}

export default function Hero() {
  const reduceMotion = useReducedMotion()

  const enter = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
        }

  const float = (delay: number, amount = 6, duration = 5) =>
    reduceMotion
      ? { initial: false as const, animate: { opacity: 1 } }
      : {
          initial: { opacity: 0, scale: 0.85 },
          animate: {
            opacity: 1,
            scale: 1,
            y: [0, -amount, 0],
            transition: {
              opacity: { duration: 0.6, delay },
              scale: { duration: 0.6, delay },
              y: { duration, repeat: Infinity, ease: 'easeInOut', delay: delay + 0.6 },
            },
          },
        }

  return (
    <section className="relative -mt-14 flex min-h-[100svh] items-center overflow-hidden pt-24 pb-28 sm:-mt-16 sm:pt-28 sm:pb-32 lg:pt-20 lg:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 50% 55% at 75% 40%, rgba(91,168,245,0.30), transparent 65%), radial-gradient(ellipse 40% 35% at 95% 5%, rgba(91,168,245,0.25), transparent 60%), linear-gradient(135deg, #ffffff 0%, #f3f8ff 40%, #dde9fb 100%)',
        }}
      />

      {/* Orbit lines */}
      <svg
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 -z-10 hidden h-full w-[70%] lg:block"
        viewBox="0 0 900 800"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <ellipse cx="560" cy="360" rx="520" ry="190" transform="rotate(-14 560 360)" stroke="#fff" strokeWidth="1.2" strokeDasharray="4 7" />
        <ellipse cx="600" cy="420" rx="420" ry="260" transform="rotate(18 600 420)" stroke="#fff" strokeOpacity="0.7" strokeWidth="1" strokeDasharray="3 8" />
        <circle cx="720" cy="170" r="4" fill="#5BA8F5" />
        <circle cx="420" cy="560" r="3.5" fill="#5BA8F5" />
        <circle cx="880" cy="540" r="3" fill="#5BA8F5" />
      </svg>

      {/* Globe */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-[360px] -right-[260px] h-[640px] w-[640px] sm:-bottom-[500px] sm:-right-[280px] sm:h-[820px] sm:w-[820px] lg:-bottom-[690px] lg:-right-[380px] lg:h-[1000px] lg:w-[1000px]"
      >
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_28%_18%,#ffffff_0%,#d6e8ff_16%,#8ec0f7_38%,#4d8fe0_62%,#2f63b0_85%)] shadow-[0_0_100px_20px_rgba(91,168,245,0.4),inset_-60px_-40px_140px_rgba(20,45,100,0.35)]" />
        <div className="hero-globe-dots absolute inset-0 rounded-full opacity-60 [mask-image:radial-gradient(circle_at_40%_35%,black_30%,transparent_68%)]" />
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 400" fill="none">
          <ellipse cx="200" cy="200" rx="199" ry="70" stroke="#fff" strokeOpacity="0.25" strokeWidth="0.6" />
          <ellipse cx="200" cy="200" rx="199" ry="135" stroke="#fff" strokeOpacity="0.2" strokeWidth="0.5" />
          <ellipse cx="200" cy="200" rx="70" ry="199" stroke="#fff" strokeOpacity="0.25" strokeWidth="0.6" />
          <ellipse cx="200" cy="200" rx="140" ry="199" stroke="#fff" strokeOpacity="0.2" strokeWidth="0.5" />
          <path d="M70 95 L135 60 L205 42 L270 70 M135 60 L160 120 L205 42 M160 120 L95 150" stroke="#fff" strokeOpacity="0.7" strokeWidth="0.7" />
          {[
            [70, 95],
            [135, 60],
            [205, 42],
            [270, 70],
            [160, 120],
            [95, 150],
          ].map(([cx, cy]) => (
            <g key={`${cx}-${cy}`}>
              <circle cx={cx} cy={cy} r="5" fill="#fff" opacity="0.35" />
              <circle cx={cx} cy={cy} r="2.2" fill="#fff" />
            </g>
          ))}
        </svg>
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-6 px-4 sm:px-8 lg:grid-cols-[1fr_1fr] lg:gap-4 lg:px-12">
        {/* ——— Left copy ——— */}
        <div className="relative z-10 max-w-xl">
          <motion.p
            className="font-inter text-[11px] font-medium uppercase tracking-[0.32em] text-fcolor/45 sm:text-xs"
            {...enter(0.06)}
          >
            Design. Develop. Ship.
          </motion.p>

          <motion.h1
            className="mt-4 font-satoshi text-[3.75rem] font-black leading-[0.9] tracking-[-0.045em] sm:text-7xl md:text-8xl lg:text-[5.5rem] xl:text-[6.75rem]"
            {...enter(0.14)}
          >
            <span className="block text-fcolor">Design.</span>
            <span className="block bg-gradient-to-b from-[#6db3f7] to-[#4a8fe8] bg-clip-text -mb-[0.1em] pb-[0.18em] text-transparent">
              Develop.
            </span>
          </motion.h1>

          <motion.p
            className="mt-5 max-w-md font-inter text-sm leading-relaxed text-fcolor/70 sm:text-[17px] sm:leading-relaxed"
            {...enter(0.24)}
          >
            I&apos;m Yug Prajapati, a Frontend Developer who turns ideas into fast, beautiful and
            functional web experiences.
          </motion.p>

          <motion.div className="mt-8 flex flex-wrap items-center gap-4" {...enter(0.32)}>
            <Link
              href="/work"
              className="group inline-flex h-12 items-center xl:h-14 gap-6 rounded-full bg-fcolor pl-7 pr-2 font-inter text-sm font-semibold text-white shadow-[0_12px_30px_-10px_rgba(42,64,100,0.6)] transition hover:bg-fcolor/90 active:scale-[0.98]"
            >
              View My Work
              <span className="flex h-9 w-9 items-center xl:h-10 xl:w-10 justify-center rounded-full bg-white text-fcolor transition-transform group-hover:translate-x-0.5">
                <svg width="16" height="16" viewBox="0 0 14 14" fill="none" aria-hidden>
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
            <Link
              href="#contact"
              className="inline-flex h-12 items-center rounded-full xl:h-14 border border-fcolor/25 px-9 font-inter text-sm font-semibold text-fcolor transition hover:border-fcolor hover:bg-fcolor hover:text-white active:scale-[0.98]"
            >
              Let&apos;s Talk
            </Link>
          </motion.div>

          <motion.div className="mt-7 flex flex-wrap gap-1.5 sm:gap-2 lg:gap-1.5 xl:gap-2" {...enter(0.4)}>
            {stack.map((item) => (
              <span
                key={item.name}
                className="inline-flex items-center gap-1.5 rounded-xl border border-white bg-white/90 px-2.5 py-2 lg:px-2 xl:px-3 shadow-[0_6px_18px_-6px_rgba(42,64,100,0.15)]"
              >
                {typeof item.icon === 'string' ? (
                  <Image src={item.icon} alt="" width={16} height={16} className="h-4 w-4 object-contain" />
                ) : (
                  item.icon
                )}
                <span className="whitespace-nowrap font-inter text-xs font-medium text-fcolor lg:text-[11px] xl:text-xs">{item.name}</span>
              </span>
            ))}
          </motion.div>

          <motion.div className="mt-8 flex divide-x divide-fcolor/15" {...enter(0.48)}>
            {stats.map((stat) => (
              <div key={stat.value} className="px-5 first:pl-0 sm:px-8">
                <p className="font-satoshi text-3xl font-bold text-fcolor sm:text-4xl">{stat.value}</p>
                <p className="mt-1 font-inter text-[11px] leading-snug text-fcolor/55 sm:text-xs">
                  {stat.label[0]}
                  <br />
                  {stat.label[1]}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ——— Right visual cluster ——— */}
        <div className="relative h-[300px] sm:h-[440px] lg:h-[560px]">
          <div className="absolute left-1/2 top-0 h-[560px] w-[780px] origin-top -translate-x-1/2 scale-[0.46] sm:scale-[0.7] lg:left-[-12%] lg:top-[4%] lg:translate-x-0 lg:origin-top-left lg:scale-[0.72] xl:scale-[0.9]">
            <motion.div
              className="absolute inset-0"
              style={{ transformStyle: 'preserve-3d' }}
              initial={reduceMotion ? false : { opacity: 0, y: 40 }}
              animate={
                reduceMotion
                  ? { opacity: 1 }
                  : { opacity: 1, y: [0, -8, 0] }
              }
              transition={
                reduceMotion
                  ? { duration: 0.4 }
                  : {
                      opacity: { duration: 0.9, delay: 0.25 },
                      y: { duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1.1 },
                    }
              }
            >
              <div
                className="absolute inset-0"
                style={{ transform: 'perspective(2200px) rotateX(10deg) rotateY(-10deg) rotateZ(5deg)', transformStyle: 'preserve-3d' }}
              >
                <div className="absolute left-[10px] top-[170px]" style={{ transform: 'translateZ(-60px)' }}>
                  <MitreisenMock />
                </div>
                <div className="absolute left-[700px] top-[170px]" style={{ transform: 'translateZ(-80px)' }}>
                  <FoodHouseMock />
                </div>
                <div className="absolute left-[120px] top-[90px]">
                  <DashboardMock />
                </div>
              </div>
            </motion.div>

            {/* Sparkle */}
            <span
              aria-hidden
              className="absolute left-[610px] top-[58px] h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,1)_0%,rgba(255,255,255,0.6)_12%,transparent_60%)]"
            />
            <span aria-hidden className="absolute left-[610px] top-[58px] h-px w-40 -translate-x-1/2 bg-gradient-to-r from-transparent via-white to-transparent" />
            <span aria-hidden className="absolute left-[610px] top-[58px] h-28 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-white to-transparent" />

            <motion.div className="absolute left-[30px] top-[110px] z-30" {...float(0.6, 5, 4)}>
              <FloatingTag icon={tagIcons.design}>Design</FloatingTag>
            </motion.div>
            <motion.div className="absolute left-[400px] top-[10px] z-30" {...float(0.75, 4, 3.6)}>
              <FloatingTag icon={tagIcons.ideas}>Ideas</FloatingTag>
            </motion.div>
            <motion.div className="absolute left-[610px] top-[500px] z-30" {...float(0.9, 5, 4.4)}>
              <FloatingTag icon={tagIcons.develop}>Develop</FloatingTag>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
