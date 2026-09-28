'use client'

import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

type Tool = { name: string; description?: string; icon: ReactNode }

const img = (src: string) => <Image src={src} alt="" width={40} height={40} className="h-full w-full object-contain" />

export const brand = {
  react: img('/Reactjs.svg'),
  next: img('/Nextjs.svg'),
  typescript: img('/TypeScript.svg'),
  tailwind: img('/TailwindCSS.svg'),
  shadcn: (
    <svg viewBox="0 0 24 24" className="h-full w-full" aria-hidden>
      <circle cx="12" cy="12" r="12" fill="#0a0a0a" />
      <path d="M7.5 15.5 15.5 7.5M11.5 17 17 11.5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  radix: (
    <svg viewBox="0 0 25 25" className="h-full w-full" fill="#0a0a0a" aria-hidden>
      <path d="M12 25a8 8 0 0 1 0-16Z" />
      <rect x="4" y="0" width="8" height="8" />
      <circle cx="17" cy="4" r="4" />
    </svg>
  ),
  zustand: (
    <span className="grid h-full w-full place-items-center text-[2rem] leading-none" aria-hidden>
      🐻
    </span>
  ),
  redux: (
    <svg viewBox="0 0 24 24" className="h-full w-full" fill="none" stroke="#764ABC" strokeWidth="2" strokeLinecap="round" aria-hidden>
      <path d="M15.6 17.4A5.5 5.5 0 1 1 8.3 10" />
      <path d="M7.6 7.4a5.5 5.5 0 0 1 10 3" />
      <path d="M17.2 13.8a5.5 5.5 0 0 1-9.5 4.1" />
      <circle cx="15.6" cy="17.4" r="1.4" fill="#764ABC" stroke="none" />
      <circle cx="7.6" cy="7.4" r="1.4" fill="#764ABC" stroke="none" />
      <circle cx="17.6" cy="10.4" r="1.4" fill="#764ABC" stroke="none" />
    </svg>
  ),
  supabase: (
    <svg viewBox="0 0 109 113" className="h-full w-full" aria-hidden>
      <path d="M63.708 110.284c-2.86 3.601-8.658 1.628-8.727-2.97l-1.007-67.251h45.22c8.19 0 12.758 9.46 7.665 15.874l-43.151 54.347Z" fill="#249361" />
      <path d="M45.317 2.071c2.86-3.601 8.657-1.628 8.726 2.97l.442 67.251H9.83c-8.19 0-12.759-9.46-7.665-15.875L45.317 2.072Z" fill="#3ECF8E" />
    </svg>
  ),
  mongodb: (
    <svg viewBox="0 0 24 24" className="h-full w-full" fill="#47A248" aria-hidden>
      <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0 1 11.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 0 0 3.639-8.464c.01-.814-.103-1.662-.197-2.218Zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405Z" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 16 16" className="h-full w-full" fill="#0a0a0a" aria-hidden>
      <path fillRule="evenodd" clipRule="evenodd" d="M7.976 0A7.977 7.977 0 0 0 0 7.976c0 3.522 2.3 6.507 5.431 7.584.392.049.538-.196.538-.392v-1.37c-2.201.49-2.69-1.076-2.69-1.076-.343-.93-.881-1.175-.881-1.175-.734-.489.048-.489.048-.489.783.049 1.224.832 1.224.832.734 1.223 1.859.88 2.3.685.048-.538.293-.88.489-1.076-1.762-.196-3.621-.881-3.621-3.964 0-.88.293-1.566.832-2.153-.05-.147-.343-.978.098-2.055 0 0 .685-.196 2.201.832.636-.196 1.322-.245 2.007-.245s1.37.098 2.006.245c1.517-1.027 2.202-.832 2.202-.832.44 1.077.146 1.908.097 2.104a3.16 3.16 0 0 1 .832 2.153c0 3.083-1.86 3.719-3.62 3.915.293.244.538.733.538 1.467v2.202c0 .196.146.44.538.392A7.984 7.984 0 0 0 16 7.976C15.951 3.572 12.38 0 7.976 0z" />
    </svg>
  ),
  figma: (
    <svg viewBox="0 0 256 384" className="h-full w-full" aria-hidden>
      <path d="M64 384c35.328 0 64-28.672 64-64v-64H64c-35.328 0-64 28.672-64 64s28.672 64 64 64Z" fill="#0ACF83" />
      <path d="M0 192c0-35.328 28.672-64 64-64h64v128H64c-35.328 0-64-28.672-64-64Z" fill="#A259FF" />
      <path d="M0 64C0 28.672 28.672 0 64 0h64v128H64C28.672 128 0 99.328 0 64Z" fill="#F24E1E" />
      <path d="M128 0h64c35.328 0 64 28.672 64 64s-28.672 64-64 64h-64V0Z" fill="#FF7262" />
      <path d="M256 192c0 35.328-28.672 64-64 64s-64-28.672-64-64 28.672-64 64-64 64 28.672 64 64Z" fill="#1ABCFE" />
    </svg>
  ),
  docker: (
    <svg viewBox="0 0 24 24" className="h-full w-full" fill="#2496ED" aria-hidden>
      <path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.186.186 0 0 0-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 0 0-.75.748 11.376 11.376 0 0 0 .692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 0 0 3.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z" />
    </svg>
  ),
  vercel: (
    <svg viewBox="0 0 24 22" className="h-full w-full" fill="#0a0a0a" aria-hidden>
      <path d="M12 1 23 21H1z" />
    </svg>
  ),
  eslint: (
    <svg viewBox="0 0 24 24" className="h-full w-full" fill="none" aria-hidden>
      <path d="M12 1.5 21.1 6.75v10.5L12 22.5l-9.1-5.25V6.75Z" stroke="#4B32C3" strokeWidth="2" strokeLinejoin="round" />
      <path d="M12 7l4.3 2.5v5L12 17l-4.3-2.5v-5Z" fill="#8080F2" />
    </svg>
  ),
  prettier: (
    <svg viewBox="0 0 24 24" className="h-full w-full" aria-hidden>
      <rect x="2" y="2" width="12" height="2.4" rx="1.2" fill="#56B3B4" />
      <rect x="2" y="6.4" width="7" height="2.4" rx="1.2" fill="#EA5E5E" />
      <rect x="11" y="6.4" width="9" height="2.4" rx="1.2" fill="#BF85BF" />
      <rect x="2" y="10.8" width="14" height="2.4" rx="1.2" fill="#F7BA3E" />
      <rect x="2" y="15.2" width="5" height="2.4" rx="1.2" fill="#4D616E" />
      <rect x="9" y="15.2" width="10" height="2.4" rx="1.2" fill="#56B3B4" />
      <rect x="2" y="19.6" width="9" height="2.4" rx="1.2" fill="#EA5E5E" />
    </svg>
  ),
  postman: (
    <svg viewBox="0 0 24 24" className="h-full w-full" aria-hidden>
      <circle cx="12" cy="12" r="11" fill="#FF6C37" />
      <path d="M7 17.5 16.5 8M14.5 6.5l3 3" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="17.2" cy="6.8" r="1.6" fill="#fff" />
    </svg>
  ),
  vscode: (
    <svg viewBox="0 0 24 24" className="h-full w-full" fill="#007ACC" aria-hidden>
      <path d="M23.15 2.587 18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" />
    </svg>
  ),
}

const frontend: Tool[] = [
  { name: 'React', description: 'Building modern UI with hooks and best practices.', icon: brand.react },
  { name: 'Next.js', description: 'SSR, SSG, routing and scalable apps.', icon: brand.next },
  { name: 'TypeScript', description: 'Type-safe, scalable and maintainable code.', icon: brand.typescript },
  { name: 'Tailwind CSS', description: 'Utility-first styling for fast and consistent UI.', icon: brand.tailwind },
  { name: 'shadcn/ui', description: 'Accessible and reusable UI components.', icon: brand.shadcn },
  { name: 'Radix UI', description: 'Unstyled, accessible primitives.', icon: brand.radix },
]

const stateManagement: Tool[] = [
  { name: 'Zustand', description: 'Lightweight and simple state management.', icon: brand.zustand },
  { name: 'Redux Toolkit', description: 'Used in past projects and familiar with core concepts.', icon: brand.redux },
]

const backend: Tool[] = [
  { name: 'Supabase', description: 'Auth, real-time database and backend services.', icon: brand.supabase },
  { name: 'MongoDB', description: 'Used in early projects and full-stack development.', icon: brand.mongodb },
]

const others: Tool[] = [
  { name: 'Git & GitHub', icon: brand.github },
  { name: 'Figma', icon: brand.figma },
  { name: 'Docker', icon: brand.docker },
  { name: 'Vercel', icon: brand.vercel },
  { name: 'ESLint', icon: brand.eslint },
  { name: 'Prettier', icon: brand.prettier },
  { name: 'Postman', icon: brand.postman },
  { name: 'VS Code', icon: brand.vscode },
]

const timeline = [
  {
    period: 'Sep 2025 – Present',
    role: 'Junior Front-End Developer',
    company: 'FastOne Global Markets',
    summary: 'Building an internal CRM platform — dashboards, API integrations and reusable React components.',
  },
  {
    period: 'Feb 2025 – May 2025',
    role: 'React Developer',
    company: 'Megnx Software',
    summary: 'Worked on multiple client projects using React, Next.js and modern frontend tools.',
  },
  {
    period: 'Dec 2023 – Mar 2024',
    role: 'MERN Stack Intern',
    company: 'Skywinds Solutions',
    summary: 'Built the Mitreisen travel booking system with MongoDB, Express, React and Node.js.',
  },
]

const values = [
  { title: 'Clean Code', description: 'Readable, scalable and easy to maintain.', icon: 'M13 2 3 14h9l-1 8 10-12h-9l1-8z' },
  { title: 'Great UX', description: 'Focus on usability and performance.', icon: 'M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9ZM19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9Z' },
  { title: 'Continuous Learning', description: 'Always exploring new tools and ideas.', icon: 'M21 8 12 3 3 8v8l9 5 9-5ZM3 8l9 5 9-5M12 13v8' },
  { title: 'Ship Real Products', description: 'Turn ideas into usable, working products.', icon: 'm12 2 10 5-10 5L2 7Zm-10 10 10 5 10-5M2 17l10 5 10-5' },
]

const exploring = ['Next.js', 'React 19', 'AI Tools', 'Cloud & DevOps', 'System Design']

const cardClass =
  'rounded-3xl border border-white/80 bg-white/70 p-5 shadow-[0_24px_60px_-32px_rgba(42,64,100,0.35)] backdrop-blur-sm sm:p-6'

function CardHeader({ index, title, href }: { index: string; title: string; href?: string }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <p className="flex items-center gap-3 font-inter text-xs sm:text-xs">
        <span className="text-fcolor/50">{index}</span>
        <span className="h-px w-5 bg-fcolor/30" aria-hidden />
        <span className="font-semibold text-fcolor">{title}</span>
      </p>
      {href && (
        <Link
          href={href}
          aria-label={`More about ${title}`}
          className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-fcolor/15 bg-white text-fcolor transition hover:border-fcolor hover:bg-fcolor hover:text-white"
        >
          <svg className="h-3.5 w-3.5" viewBox="0 0 14 14" fill="none" aria-hidden>
            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      )}
    </div>
  )
}

function ToolTile({ tool }: { tool: Tool }) {
  return (
    <div className="group rounded-2xl border border-fcolor/5 bg-white/90 p-4 transition duration-300 hover:-translate-y-0.5 hover:border-fcolor/15 hover:shadow-[0_16px_30px_-18px_rgba(42,64,100,0.4)]">
      <div className="h-9 w-9 transition-transform duration-300 group-hover:scale-110">{tool.icon}</div>
      <p className="mt-4 font-inter text-sm font-semibold text-fcolor sm:text-sm">{tool.name}</p>
      {tool.description && (
        <p className="mt-1 font-inter text-[11px] leading-snug text-fcolor/60 sm:text-[11px]">{tool.description}</p>
      )}
    </div>
  )
}

export default function SkillsSection() {
  const reduceMotion = useReducedMotion()

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
    <section id="skills" className="relative overflow-hidden py-16 sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 45% 40% at 15% 15%, rgba(91,168,245,0.14), transparent 65%), radial-gradient(ellipse 45% 40% at 85% 75%, rgba(91,168,245,0.14), transparent 65%)',
        }}
      />

      <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-8 lg:grid-cols-12 lg:px-12">
        <motion.div className="flex flex-col justify-center lg:col-span-12 xl:col-span-4 xl:pr-4" {...reveal(0)}>
          <p className="font-inter text-[11px] font-medium uppercase tracking-[0.32em] text-accent sm:text-xs">Tools &amp; Technologies</p>
          <h2 className="mt-4 font-satoshi text-5xl font-black leading-[0.95] tracking-[-0.04em] sm:text-6xl xl:text-[3.6rem]">
            <span className="block whitespace-nowrap text-fcolor">Tools I Work</span>
            <span className="block bg-gradient-to-b from-[#6db3f7] to-[#4a8fe8] bg-clip-text pb-[0.08em] text-transparent">With</span>
          </h2>
          <p className="mt-5 max-w-md font-inter text-sm leading-relaxed text-fcolor/70 sm:text-base">
            A combination of tools, technologies and practices I use to design, develop and ship modern web experiences.
          </p>
          <Link
            href="/about"
            className="group mt-8 inline-flex h-12 w-fit items-center gap-5 rounded-full bg-fcolor pl-6 pr-1.5 font-inter text-sm font-semibold text-white shadow-[0_12px_30px_-10px_rgba(42,64,100,0.6)] transition hover:bg-fcolor/90 active:scale-[0.98]"
          >
            View My Experience
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-fcolor transition-transform group-hover:translate-x-0.5">
              <svg className="h-4 w-4" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
        </motion.div>

        <motion.div className={`${cardClass} lg:col-span-12 xl:col-span-8`} {...reveal(0.08)}>
          <CardHeader index="01" title="Frontend" href="/about" />
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {frontend.map((tool) => (
              <ToolTile key={tool.name} tool={tool} />
            ))}
          </div>
        </motion.div>

        <motion.div className={`${cardClass} lg:col-span-4`} {...reveal(0.12)}>
          <CardHeader index="02" title="State Management" />
          <div className="mt-4 grid grid-cols-2 gap-3">
            {stateManagement.map((tool) => (
              <ToolTile key={tool.name} tool={tool} />
            ))}
          </div>
        </motion.div>

        <motion.div className={`${cardClass} lg:col-span-4`} {...reveal(0.16)}>
          <CardHeader index="03" title="Backend & Database" />
          <div className="mt-4 grid grid-cols-2 gap-3">
            {backend.map((tool) => (
              <ToolTile key={tool.name} tool={tool} />
            ))}
          </div>
        </motion.div>

        <motion.div className={`${cardClass} lg:col-span-4`} {...reveal(0.2)}>
          <CardHeader index="04" title="Tools & Others" />
          <div className="mt-5 grid grid-cols-4 gap-x-2 gap-y-5">
            {others.map((tool) => (
              <div key={tool.name} className="group flex flex-col items-center gap-2 text-center">
                <div className="grid h-12 w-12 place-items-center rounded-xl p-2.5 transition duration-300 group-hover:bg-white group-hover:shadow-[0_10px_24px_-14px_rgba(42,64,100,0.5)]">
                  {tool.icon}
                </div>
                <span className="font-inter text-[11px] font-medium text-fcolor/75">{tool.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div className={`${cardClass} lg:col-span-6 lg:row-span-2`} {...reveal(0.1)}>
          <CardHeader index="05" title="Experience Timeline" />
          <ol className="relative mt-6 space-y-2 before:absolute before:bottom-6 before:left-[5px] before:top-6 before:w-px before:bg-accent/30">
            {timeline.map((item) => (
              <li
                key={item.company}
                className="relative grid gap-1 border-b border-fcolor/10 pb-5 pl-8 pt-3 last:border-0 sm:grid-cols-[8.5rem_1fr] sm:gap-x-4 xl:grid-cols-[8.5rem_1fr_1.2fr]"
              >
                <span className="absolute left-0 top-[1.1rem] h-[11px] w-[11px] rounded-full border-2 border-white bg-accent shadow-[0_0_0_3px_rgba(91,168,245,0.2)]" aria-hidden />
                <span className="font-inter text-xs text-fcolor/55">{item.period}</span>
                <div>
                  <p className="font-inter text-sm font-semibold text-fcolor sm:text-sm">{item.role}</p>
                  <p className="mt-0.5 font-inter text-xs text-fcolor/55 sm:text-xs">{item.company}</p>
                </div>
                <p className="mt-1 font-inter text-xs leading-relaxed text-fcolor/65 sm:col-start-2 sm:text-xs xl:col-start-auto xl:mt-0">{item.summary}</p>
              </li>
            ))}
          </ol>
        </motion.div>

        <motion.div className={`${cardClass} lg:col-span-6`} {...reveal(0.14)}>
          <CardHeader index="06" title="A Few Things I Care About" href="/about" />
          <div className="mt-4 grid grid-cols-2 gap-3 xl:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="rounded-2xl border border-fcolor/5 bg-white/90 p-4">
                <svg className="h-5 w-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d={value.icon} />
                </svg>
                <p className="mt-3 font-inter text-xs font-semibold text-fcolor sm:text-xs">{value.title}</p>
                <p className="mt-1 font-inter text-[11px] leading-snug text-fcolor/60 sm:text-[11px]">{value.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div className={`${cardClass} lg:col-span-6`} {...reveal(0.18)}>
          <CardHeader index="07" title="Currently Exploring" href="/blogs" />
          <div className="mt-4 flex flex-wrap gap-2">
            {exploring.map((topic) => (
              <span key={topic} className="rounded-full border border-fcolor/5 bg-[#eef4fd] px-4 py-1.5 font-inter text-xs font-medium text-fcolor/80 transition hover:bg-fcolor hover:text-white">
                {topic}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
