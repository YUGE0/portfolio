'use client'

import { useLayoutEffect, useRef, useState, type ReactNode } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

export function ScaledBox({ base, ratio, children }: { base: number; ratio: number; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(0)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    const update = () => setScale(el.clientWidth / base)
    update()
    const observer = new ResizeObserver(update)
    observer.observe(el)
    return () => observer.disconnect()
  }, [base])

  return (
    <div ref={ref} className="relative w-full" style={{ aspectRatio: `1 / ${ratio}` }}>
      <div
        className="absolute left-0 top-0 origin-top-left"
        style={{ width: base, height: base * ratio, transform: `scale(${scale})`, opacity: scale ? 1 : 0 }}
      >
        {children}
      </div>
    </div>
  )
}

const hosts = [
  {
    id: 'www',
    host: 'www.domain.com',
    subdomain: '—',
    product: 'web',
    gate: 'Public',
    rewrite: '/web',
    title: 'Marketing Site',
    text: 'Pitches Advisory and Wise Track, with email and Google sign-up.',
    accent: 'from-[#6db3f7] to-[#4a8fe8]',
  },
  {
    id: 'acme',
    host: 'acme.domain.com',
    subdomain: 'acme',
    product: 'tenant',
    gate: 'Org member session',
    rewrite: '/advisory',
    title: 'Acme Advisory',
    text: 'Live market board, broadcasts and plans scoped to the acme org.',
    accent: 'from-[#2a4064] to-[#4a6a9c]',
  },
  {
    id: 'track',
    host: 'track.domain.com',
    subdomain: 'track',
    product: 'track',
    gate: 'Signed-in user',
    rewrite: '/track',
    title: 'Wise Track',
    text: 'A personal ledger for expenses, income, transfers and cards.',
    accent: 'from-[#28a36a] to-[#5bd49b]',
  },
  {
    id: 'owner',
    host: 'owner.domain.com',
    subdomain: 'owner',
    product: 'owner',
    gate: 'Platform owner role',
    rewrite: '/owner',
    title: 'Owner Console',
    text: 'Create orgs and assign members across the whole platform.',
    accent: 'from-[#8b5cf6] to-[#b794f6]',
  },
]

export function HostSwitcher() {
  const [active, setActive] = useState(1)
  const reduceMotion = useReducedMotion()
  const host = hosts[active]

  const steps = [
    { label: 'proxy.ts', lines: [`x-subdomain: ${host.subdomain}`, `x-product: ${host.product}`] },
    { label: 'Auth gate', lines: [host.gate] },
    { label: 'Rewrite', lines: [`/  →  ${host.rewrite}`] },
  ]

  return (
    <div className="rounded-3xl border border-white/80 bg-white/70 p-4 shadow-[0_24px_60px_-32px_rgba(42,64,100,0.35)] backdrop-blur-sm sm:p-6">
      <div className="flex items-center justify-between gap-3">
        <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.18em] text-fcolor/45">Try it · Pick a host</p>
        <span className="font-inter text-[11px] text-fcolor/40">Same path, different product</span>
      </div>

      <div role="tablist" aria-label="Hosts" className="mt-3 grid grid-cols-4 gap-1 rounded-full bg-[#eef4fd] p-1">
        {hosts.map((item, i) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={active === i}
            onClick={() => setActive(i)}
            className={`relative rounded-full py-2 font-inter text-xs font-semibold transition-colors ${
              active === i ? 'text-white' : 'text-fcolor/60 hover:text-fcolor'
            }`}
          >
            {active === i && (
              <motion.span
                layoutId="host-switcher"
                className="absolute inset-0 rounded-full bg-fcolor"
                transition={{ type: 'spring', stiffness: 400, damping: 34 }}
              />
            )}
            <span className="relative">{item.id}</span>
          </button>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-2 rounded-xl border border-fcolor/10 bg-white px-3 py-2.5 font-mono text-xs text-fcolor sm:text-sm">
        <svg className="h-3.5 w-3.5 shrink-0 text-[#28c941]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <rect x="5" y="11" width="14" height="10" rx="2" />
          <path d="M8 11V7a4 4 0 0 1 8 0v4" />
        </svg>
        <span className="text-fcolor/45">https://</span>
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={host.host}
            initial={reduceMotion ? false : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="font-semibold"
          >
            {host.host}
          </motion.span>
        </AnimatePresence>
        <span className="text-fcolor/45">/</span>
      </div>

      <ol className="mt-4 grid gap-2 sm:grid-cols-3">
        {steps.map((step, i) => (
          <li key={step.label} className="relative rounded-xl border border-fcolor/5 bg-white/90 p-3">
            <span className="flex items-center gap-2 font-inter text-[11px] font-semibold text-fcolor">
              <span className="grid h-5 w-5 place-items-center rounded-full bg-fcolor text-[10px] text-white">{i + 1}</span>
              {step.label}
            </span>
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={step.lines.join()}
                initial={reduceMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={reduceMotion ? undefined : { opacity: 0 }}
                transition={{ duration: 0.2, delay: 0.08 * i }}
                className="mt-2 block space-y-0.5 font-mono text-[11px] leading-snug text-fcolor/70"
              >
                {step.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </motion.span>
            </AnimatePresence>
          </li>
        ))}
      </ol>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={host.id}
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: 0.3, delay: reduceMotion ? 0 : 0.2 }}
          className={`relative mt-4 overflow-hidden rounded-2xl bg-gradient-to-br ${host.accent} p-5 text-white`}
        >
          <span
            aria-hidden
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: 'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)',
              backgroundSize: '12px 12px',
              maskImage: 'radial-gradient(ellipse 60% 90% at 100% 0%, black, transparent 70%)',
            }}
          />
          <span className="relative font-inter text-[11px] font-medium uppercase tracking-[0.2em] text-white/70">Resolves to</span>
          <p className="relative mt-1 font-satoshi text-2xl font-black tracking-tight sm:text-3xl">{host.title}</p>
          <p className="relative mt-1 max-w-sm font-inter text-sm text-white/80">{host.text}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

const accounts = [
  { name: 'Cash', kind: 'Wallet', balance: '₹ 8,450', number: 'Everyday cash', tone: 'from-[#28a36a] to-[#1d7a50]' },
  { name: 'Savings', kind: 'Bank Account', balance: '₹ 1,24,300', number: '•••• 4821', tone: 'from-[#2a4064] to-[#3f5f92]' },
  { name: 'Platinum', kind: 'Credit Card', balance: '₹ 32,780', number: '•••• 9014', tone: 'from-[#1f1f28] to-[#474758]', network: 'VISA' },
]

const activity = [
  { label: 'Groceries', meta: 'Cash · Today', amount: '− ₹ 1,240' },
  { label: 'Salary', meta: 'Savings · 1 Sep', amount: '+ ₹ 65,000', positive: true },
  { label: 'Card payment', meta: 'Transfer · 28 Aug', amount: '− ₹ 12,500' },
]

export function PrivacyWallet() {
  const [active, setActive] = useState(1)
  const [hidden, setHidden] = useState(false)
  const reduceMotion = useReducedMotion()

  const mask = `transition-[filter] duration-300 ${hidden ? 'select-none blur-[6px]' : ''}`

  return (
    <div className="rounded-3xl border border-white/80 bg-white/70 p-4 shadow-[0_24px_60px_-32px_rgba(42,64,100,0.35)] backdrop-blur-sm sm:p-6">
      <div className="flex items-center justify-between gap-3">
        <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.18em] text-fcolor/45">Try it · Wise Track</p>
        <button
          type="button"
          role="switch"
          aria-checked={hidden}
          onClick={() => setHidden(!hidden)}
          className="flex items-center gap-2.5 font-inter text-xs font-semibold text-fcolor"
        >
          Privacy mode
          <span className={`relative h-6 w-11 rounded-full transition-colors ${hidden ? 'bg-fcolor' : 'bg-fcolor/15'}`}>
            <span
              className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow transition-[left] duration-300 ${hidden ? 'left-6' : 'left-1'}`}
            />
          </span>
        </button>
      </div>

      <div className="relative mt-5 h-44 sm:h-48">
        {accounts.map((account, i) => {
          const offset = (i - active + accounts.length) % accounts.length
          return (
            <motion.button
              key={account.name}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show ${account.name}`}
              className={`absolute inset-x-0 mx-auto flex h-40 w-[88%] max-w-sm flex-col justify-between rounded-2xl bg-gradient-to-br ${account.tone} p-5 text-left text-white shadow-[0_20px_40px_-18px_rgba(20,30,50,0.6)] sm:h-44`}
              animate={{
                y: offset * 10,
                scale: 1 - offset * 0.06,
                opacity: offset === 2 ? 0.55 : 1,
                zIndex: accounts.length - offset,
              }}
              transition={reduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 300, damping: 30 }}
            >
              <span className="flex items-start justify-between">
                <span>
                  <span className="block font-inter text-[11px] uppercase tracking-[0.18em] text-white/60">{account.kind}</span>
                  <span className="block font-satoshi text-lg font-bold">{account.name}</span>
                </span>
                <span className="font-satoshi text-sm font-black italic tracking-wider text-white/85">{account.network ?? '◎'}</span>
              </span>
              <span className="flex items-end justify-between gap-3">
                <span className={`font-satoshi text-2xl font-black tracking-tight sm:text-3xl ${mask}`}>{account.balance}</span>
                <span className="font-mono text-xs text-white/60">{account.number}</span>
              </span>
            </motion.button>
          )
        })}
      </div>

      <div className="mt-3 flex justify-center gap-1.5">
        {accounts.map((account, i) => (
          <button
            key={account.name}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Show ${account.name}`}
            className={`h-1.5 rounded-full transition-all ${active === i ? 'w-6 bg-fcolor' : 'w-1.5 bg-fcolor/20'}`}
          />
        ))}
      </div>

      <ul className="mt-4 divide-y divide-fcolor/10 rounded-2xl border border-fcolor/5 bg-white/90 px-4">
        {activity.map((item) => (
          <li key={item.label} className="flex items-center justify-between gap-3 py-3 font-inter">
            <span>
              <span className="block text-sm font-semibold text-fcolor">{item.label}</span>
              <span className="block text-[11px] text-fcolor/50">{item.meta}</span>
            </span>
            <span className={`text-sm font-semibold ${item.positive ? 'text-[#1f9d5c]' : 'text-fcolor'} ${mask}`}>{item.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

const plans = [
  { name: 'Basic', trades: '5 trades / week', highlight: false },
  { name: 'Pro', trades: '15 trades / week', highlight: true },
  { name: 'Elite', trades: 'Unlimited trades', highlight: false },
]

export function PlansMock() {
  return (
    <div className="flex h-[400px] w-[620px] gap-4 bg-gradient-to-br from-white to-[#eef4fd] p-6 font-inter text-fcolor">
      <div className="flex-1">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-fcolor/45">Step 1 · Choose a plan</p>
        <p className="mt-1 font-satoshi text-xl font-bold">Membership Plans</p>
        <div className="mt-4 space-y-2.5">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex items-center justify-between rounded-xl border px-4 py-3 ${
                plan.highlight ? 'border-fcolor bg-fcolor text-white shadow-lg' : 'border-fcolor/10 bg-white'
              }`}
            >
              <span>
                <span className="block font-satoshi text-sm font-bold">{plan.name}</span>
                <span className={`block text-[10px] ${plan.highlight ? 'text-white/70' : 'text-fcolor/55'}`}>{plan.trades}</span>
              </span>
              <span
                className={`grid h-5 w-5 place-items-center rounded-full border-2 ${
                  plan.highlight ? 'border-white bg-white' : 'border-fcolor/25'
                }`}
              >
                {plan.highlight && <span className="h-2 w-2 rounded-full bg-fcolor" />}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex w-[270px] flex-col gap-3">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-fcolor/45">Step 2 · Upload proof</p>
        <div className="grid flex-1 place-items-center rounded-xl border-2 border-dashed border-accent/50 bg-white/80 p-4 text-center">
          <span>
            <span className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-accent/15 text-accent">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M12 16V4M7 9l5-5 5 5M4 20h16" />
              </svg>
            </span>
            <span className="mt-2 block text-xs font-semibold">payment-proof.jpg</span>
            <span className="block text-[10px] text-fcolor/50">Uploaded to Supabase Storage</span>
          </span>
        </div>
        <div className="rounded-xl bg-white p-3 shadow-[0_10px_30px_-18px_rgba(42,64,100,0.5)]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-fcolor/45">Admin · Review</p>
          <div className="mt-2 flex items-center justify-between">
            <span className="text-xs font-semibold">Pro · new member</span>
            <span className="flex gap-1.5 text-[10px] font-semibold">
              <span className="rounded-full bg-[#1f9d5c] px-2.5 py-1 text-white">Approve</span>
              <span className="rounded-full border border-fcolor/15 px-2.5 py-1">Cancel</span>
            </span>
          </div>
        </div>
        <span className="flex items-center gap-2 self-start rounded-full bg-[#fff4db] px-3 py-1 text-[10px] font-semibold text-[#9a6b00]">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#e0a100]" />
          /wait-approval
        </span>
      </div>
    </div>
  )
}
