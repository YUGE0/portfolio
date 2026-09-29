'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, type ReactNode } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import CtaBanner from './CtaBanner'
import { experiences } from './experience'
import { cardClass as hoverCardClass, IndexLabel, TechChips } from './FeaturedWork'
import { icons, socials } from './footer'
import { brand } from './SkillsSection'

const cardClass =
  'rounded-3xl border border-white/80 bg-white/70 shadow-[0_24px_60px_-32px_rgba(42,64,100,0.35)] backdrop-blur-sm'

const eyebrowClass = 'font-inter text-[11px] font-medium uppercase tracking-[0.32em] text-accent sm:text-xs'

const facts: Array<{ label: string; value: ReactNode }> = [
  { label: 'Based in', value: 'Ahmedabad, Gujarat' },
  { label: 'Currently at', value: 'FastOne Global Markets' },
  { label: 'Focus', value: 'React, Next.js & Tailwind CSS' },
]

const highlights = [
  { value: '03', label: 'Companies' },
  { value: '2+', label: 'Years experience' },
  { value: '05', label: 'Featured projects' },
]

const careerPath = ['MERN Stack Intern', 'React Developer', 'Junior Front-End Developer']

const toolbox = [
  { name: 'React', icon: brand.react },
  { name: 'Next.js', icon: brand.next },
  { name: 'TypeScript', icon: brand.typescript },
  { name: 'Tailwind CSS', icon: brand.tailwind },
  { name: 'Supabase', icon: brand.supabase },
  { name: 'MongoDB', icon: brand.mongodb },
  { name: 'Figma', icon: brand.figma },
  { name: 'GitHub', icon: brand.github },
  { name: 'Vercel', icon: brand.vercel },
  { name: 'Docker', icon: brand.docker },
  { name: 'Postman', icon: brand.postman },
  { name: 'VS Code', icon: brand.vscode },
]

const languages = [
  { name: 'English', flag: '/US.svg' },
  { name: 'Deutsch', flag: '/DE.svg' },
]

function ExperienceItem({
  experience,
  index,
  open,
  onToggle,
}: {
  experience: (typeof experiences)[number]
  index: number
  open: boolean
  onToggle: () => void
}) {
  const reduceMotion = useReducedMotion()
  const panelId = `experience-${index}`

  return (
    <li className="relative pl-8 sm:pl-12">
      <span
        aria-hidden
        className={`absolute left-0 top-8 h-[13px] w-[13px] rounded-full border-2 border-white shadow-[0_0_0_4px_rgba(91,168,245,0.2)] sm:left-[3px] ${
          open ? 'bg-fcolor' : 'bg-accent'
        }`}
      />
      <article className={`${cardClass} p-5 sm:p-7`}>
        <div className="grid gap-4 lg:grid-cols-[13rem_1fr] lg:gap-8">
          <div className="font-inter">
            <IndexLabel>{String(index + 1).padStart(2, '0')}</IndexLabel>
            <p className="mt-3 text-sm font-semibold text-fcolor">{experience.period}</p>
            <p className="mt-1 text-xs text-fcolor/55">{experience.location}</p>
          </div>

          <div>
            <h3 className="font-satoshi text-2xl font-bold tracking-tight text-fcolor sm:text-3xl">{experience.role}</h3>
            <p className="mt-1 font-inter text-sm font-medium text-accent">{experience.company}</p>
            <p className="mt-4 max-w-3xl font-inter text-sm leading-relaxed text-fcolor/70 sm:text-base">{experience.description}</p>
            <div className="mt-5">
              <TechChips tech={experience.technologies} />
            </div>

            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  id={panelId}
                  key="details"
                  initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="mt-6 grid gap-5 border-t border-fcolor/10 pt-6 md:grid-cols-[1.3fr_1fr] md:gap-8">
                    <div>
                      <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.18em] text-fcolor/45">
                        Key Responsibilities
                      </p>
                      <ul className="mt-3 space-y-2.5">
                        {experience.responsibilities.map((item) => (
                          <li key={item} className="flex gap-3 font-inter text-sm leading-relaxed text-fcolor/75">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-2xl bg-[#eef4fd] p-4 sm:p-5">
                      <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.18em] text-fcolor/45">What I Learned</p>
                      <p className="mt-3 font-inter text-sm leading-relaxed text-fcolor/75">{experience.learned}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              type="button"
              onClick={onToggle}
              aria-expanded={open}
              aria-controls={panelId}
              className="group mt-6 inline-flex items-center gap-3 font-inter text-sm font-semibold text-fcolor"
            >
              {open ? 'Show less' : 'Responsibilities & learnings'}
              <span className="grid h-9 w-9 place-items-center rounded-full border border-fcolor/15 bg-white transition group-hover:border-fcolor group-hover:bg-fcolor group-hover:text-white">
                <svg
                  className={`h-3.5 w-3.5 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden
                >
                  <path d="M3 5.5 7 9.5l4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </article>
    </li>
  )
}

export default function AboutShowcase() {
  const reduceMotion = useReducedMotion()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const reveal = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.15 },
          transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
        }

  return (
    <section className="relative overflow-hidden pb-16 pt-10 sm:pb-24 sm:pt-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 45% 30% at 85% 6%, rgba(91,168,245,0.2), transparent 65%), radial-gradient(ellipse 40% 25% at 5% 40%, rgba(91,168,245,0.12), transparent 60%), radial-gradient(ellipse 45% 25% at 95% 75%, rgba(91,168,245,0.12), transparent 60%)',
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        <div className="grid items-center gap-8 lg:grid-cols-[1.5fr_1fr] lg:gap-12">
          <motion.div {...reveal(0)}>
            <p className={eyebrowClass}>About Me</p>
            <h1 className="mt-4 font-satoshi text-[2.35rem] font-black leading-[0.95] tracking-[-0.04em] sm:text-7xl lg:text-[3.6rem] xl:text-[4.5rem]">
              <span className="block text-fcolor">Hey, I&apos;m Yug.</span>
              <span className="block bg-gradient-to-b from-[#6db3f7] to-[#4a8fe8] bg-clip-text -mb-[0.1em] pb-[0.18em] text-transparent">
                I Craft for the Web.
              </span>
            </h1>
            <p className="mt-6 max-w-xl font-inter text-sm leading-relaxed text-fcolor/70 sm:text-base">
              I&apos;m a front-end developer who loves turning ideas into fast, carefully crafted interfaces with React,
              Next.js and Tailwind CSS. I&apos;m committed to improving my craft every day, and right now I&apos;m building
              Food House.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="group inline-flex h-12 w-fit items-center gap-5 rounded-full bg-fcolor pl-6 pr-1.5 font-inter text-sm font-semibold text-white shadow-[0_12px_30px_-10px_rgba(42,64,100,0.6)] transition hover:bg-fcolor/90 active:scale-[0.98]"
              >
                Let&apos;s Talk
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-fcolor transition-transform group-hover:translate-x-0.5">
                  <svg className="h-4 w-4" viewBox="0 0 14 14" fill="none" aria-hidden>
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
              <div className="flex gap-2">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel="noreferrer"
                    aria-label={social.label}
                    className="grid h-12 w-12 place-items-center rounded-full border border-fcolor/10 bg-white/80 text-fcolor transition hover:border-fcolor hover:bg-fcolor hover:text-white"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.aside className={`${cardClass} overflow-hidden`} {...reveal(0.1)}>
            <div className="relative h-40 overflow-hidden bg-fcolor sm:h-44">
              <div
                aria-hidden
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage: 'radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)',
                  backgroundSize: '14px 14px',
                  maskImage: 'radial-gradient(ellipse 70% 90% at 80% 20%, black, transparent 75%)',
                }}
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{ background: 'radial-gradient(ellipse 60% 80% at 90% 0%, rgba(91,168,245,0.55), transparent 70%)' }}
              />
              <span className="absolute bottom-3 right-5 font-satoshi text-7xl font-black tracking-tight text-white/10 sm:text-8xl">
                Yug.
              </span>
              <span className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 font-inter text-[11px] font-medium text-white backdrop-blur">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#7ee2a8]" aria-hidden />
                Currently building Food House
              </span>
            </div>

            <div className="relative px-5 pb-6 sm:px-7">
              <span className="-mt-10 grid h-20 w-20 place-items-center rounded-2xl border-4 border-white bg-gradient-to-br from-[#6db3f7] to-[#2a4064] font-satoshi text-3xl font-black text-white shadow-[0_16px_30px_-12px_rgba(42,64,100,0.6)]">
                YP
              </span>
              <p className="mt-4 font-satoshi text-2xl font-bold tracking-tight text-fcolor">Yug Prajapati</p>
              <p className="mt-0.5 font-inter text-sm text-fcolor/60">Junior Front-End Developer</p>

              <dl className="mt-5 divide-y divide-fcolor/10 border-y border-fcolor/10 font-inter">
                {facts.map((fact) => (
                  <div key={fact.label} className="flex items-start justify-between gap-4 py-3">
                    <dt className="shrink-0 text-[11px] uppercase tracking-[0.18em] text-fcolor/45">{fact.label}</dt>
                    <dd className="text-right text-sm font-semibold text-fcolor">{fact.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-5 grid grid-cols-3 gap-3">
                {highlights.map((item) => (
                  <div key={item.label}>
                    <span className="block font-satoshi text-2xl font-black tracking-tight text-fcolor sm:text-3xl">{item.value}</span>
                    <span className="mt-0.5 block font-inter text-[11px] leading-snug text-fcolor/55">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.aside>
        </div>

        <div className="mt-16 grid gap-5 sm:mt-24 lg:grid-cols-3">
          <motion.article className={`${cardClass} p-6 sm:p-10 lg:col-span-2`} {...reveal(0)}>
            <p className={eyebrowClass}>My Story</p>
            <h2 className="mt-4 font-satoshi text-3xl font-black leading-tight tracking-[-0.03em] text-fcolor sm:text-5xl">
              Building from the ground up
            </h2>
            <div className="mt-6 grid gap-5 font-inter text-sm leading-relaxed text-fcolor/70 sm:text-base md:grid-cols-2 md:gap-8">
              <p>
                I started my career with small and emerging startups, which gave me a strong foundation both personally and
                professionally. My dedication was recognised early, and I&apos;m grateful to the mentors who took the time to
                help me build solid technical skills.
              </p>
              <p>
                Building on that, I received the Employee of the Month award in my very first month at my next company by
                delivering efficient, high-impact work. Along the way I learned how much I value teams where effort is
                genuinely acknowledged, and that&apos;s what I look for wherever I work.
              </p>
            </div>
          </motion.article>

          <div className="grid gap-5">
            <motion.div
              className="relative overflow-hidden rounded-3xl bg-fcolor p-6 text-white shadow-[0_30px_70px_-30px_rgba(42,64,100,0.7)] sm:p-7"
              {...reveal(0.08)}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{ background: 'radial-gradient(ellipse 70% 80% at 100% 0%, rgba(91,168,245,0.5), transparent 65%)' }}
              />
              <svg className="relative h-9 w-9 text-[#9ccbfa]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <circle cx="12" cy="8" r="6" />
                <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
              </svg>
              <p className="relative mt-5 font-satoshi text-2xl font-bold leading-tight">Employee of the Month</p>
              <p className="relative mt-1 font-inter text-sm text-white/70">Awarded in my very first month on the job.</p>
            </motion.div>

            <motion.figure className={`${cardClass} p-6 sm:p-7`} {...reveal(0.14)}>
              <svg className="h-7 w-7 text-accent" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M4.6 18.4C3.5 17.2 3 16 3 14c0-3.5 2.5-6.6 6-8.2l.9 1.4C6.6 9 5.9 11.3 5.7 12.8c.5-.3 1.2-.4 1.8-.3 1.8.2 3.2 1.6 3.2 3.4a3.5 3.5 0 0 1-3.5 3.5c-1.1 0-2-.4-2.6-1Zm10 0C13.5 17.2 13 16 13 14c0-3.5 2.5-6.6 6-8.2l.9 1.4c-3.3 1.8-4 4.1-4.2 5.6.5-.3 1.2-.4 1.8-.3 1.8.2 3.2 1.6 3.2 3.4a3.5 3.5 0 0 1-3.5 3.5c-1.1 0-2-.4-2.6-1Z" />
              </svg>
              <blockquote className="mt-4 font-satoshi text-xl font-bold leading-snug text-fcolor sm:text-2xl">
                The best way to predict the future is to create it.
              </blockquote>
              <figcaption className="mt-3 font-inter text-sm text-fcolor/55">— Peter Drucker</figcaption>
            </motion.figure>
          </div>
        </div>

        <div className="mt-16 sm:mt-24">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <motion.div {...reveal(0)}>
              <p className={eyebrowClass}>Experience</p>
              <h2 className="mt-4 font-satoshi text-4xl font-black leading-[0.95] tracking-[-0.04em] sm:text-6xl">
                <span className="text-fcolor">My Journey </span>
                <span className="bg-gradient-to-b from-[#6db3f7] to-[#4a8fe8] bg-clip-text text-transparent">So Far</span>
              </h2>
              <p className="mt-5 max-w-2xl font-inter text-sm leading-relaxed text-fcolor/70 sm:text-base">
                From building individual frontend modules to contributing to CRM platforms, multi-tenant applications and
                admin dashboards, with a growing focus on architecture, maintainability and the full product workflow.
              </p>
            </motion.div>

            <motion.ol
              aria-label="Career growth"
              className="flex w-fit flex-wrap items-center gap-2 rounded-2xl border border-white/80 bg-white/70 p-2 shadow-[0_12px_30px_-20px_rgba(42,64,100,0.4)] backdrop-blur-sm"
              {...reveal(0.08)}
            >
              {careerPath.map((step, i) => (
                <li key={step} className="flex items-center gap-2">
                  <span
                    className={`rounded-xl px-3 py-2 font-inter text-xs font-semibold ${
                      i === careerPath.length - 1 ? 'bg-fcolor text-white' : 'text-fcolor/70'
                    }`}
                  >
                    {step}
                  </span>
                  {i < careerPath.length - 1 && (
                    <svg className="h-3.5 w-3.5 text-accent" viewBox="0 0 14 14" fill="none" aria-hidden>
                      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </li>
              ))}
            </motion.ol>
          </div>

          <motion.ol
            className="relative mt-10 space-y-5 before:absolute before:bottom-8 before:left-[6px] before:top-8 before:w-px before:bg-accent/30 sm:before:left-[9px]"
            {...reveal(0.1)}
          >
            {experiences.map((experience, i) => (
              <ExperienceItem
                key={experience.company}
                experience={experience}
                index={i}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </motion.ol>
        </div>

        <div className="mt-16 grid gap-5 sm:mt-24 lg:grid-cols-3">
          <motion.div className={`${hoverCardClass} p-6 sm:p-8 lg:col-span-2`} {...reveal(0)}>
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className={eyebrowClass}>Toolbox</p>
                <h2 className="mt-3 font-satoshi text-3xl font-black tracking-[-0.03em] text-fcolor sm:text-4xl">What I Build With</h2>
              </div>
              <Link
                href="/#skills"
                aria-label="See all tools"
                className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-fcolor/15 bg-white text-fcolor transition hover:border-fcolor hover:bg-fcolor hover:text-white"
              >
                <svg className="h-4 w-4" viewBox="0 0 14 14" fill="none" aria-hidden>
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-6">
              {toolbox.map((tool) => (
                <div
                  key={tool.name}
                  className="group flex flex-col items-center gap-3 rounded-2xl border border-fcolor/5 bg-white/90 px-2 py-4 text-center transition duration-300 hover:-translate-y-0.5 hover:border-fcolor/15 hover:shadow-[0_16px_30px_-18px_rgba(42,64,100,0.4)]"
                >
                  <span className="h-9 w-9 transition-transform duration-300 group-hover:scale-110">{tool.icon}</span>
                  <span className="font-inter text-[11px] font-semibold text-fcolor/80">{tool.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div className={`${hoverCardClass} flex flex-col p-6 sm:p-8`} {...reveal(0.08)}>
            <p className={eyebrowClass}>Languages</p>
            <h2 className="mt-3 font-satoshi text-3xl font-black tracking-[-0.03em] text-fcolor sm:text-4xl">I Speak</h2>
            <div className="mt-6 grid flex-1 content-start gap-3">
              {languages.map((language) => (
                <div key={language.name} className="flex items-center gap-4 rounded-2xl border border-fcolor/5 bg-white/90 p-4">
                  <Image src={language.flag} alt="" width={40} height={28} className="h-7 w-10 rounded object-cover shadow-sm" />
                  <span className="font-satoshi text-lg font-bold text-fcolor">{language.name}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 flex items-center gap-2 font-inter text-xs text-fcolor/55">
              <span className="text-accent">{icons.pin}</span>
              Ahmedabad, Gujarat, India
            </p>
          </motion.div>
        </div>

        <div className="mt-16 sm:mt-24">
          <CtaBanner eyebrow="Let's Connect" title="Want to work together or just say hi?" cta="Get in Touch" />
        </div>
      </div>
    </section>
  )
}
