import Image from 'next/image'
import type { ReactNode } from 'react'

const icon = {
  home: 'M3 10.5 12 3l9 7.5V21h-6v-6H9v6H3z',
  list: 'M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01',
  calendar: 'M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z',
  clock: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 6v6l4 2',
  plus: 'M12 5v14M5 12h14',
  moon: 'M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z',
  eyeOff: 'M9.9 4.2A10 10 0 0 1 12 4c7 0 10 8 10 8a17 17 0 0 1-3 4.2M6.6 6.6A17 17 0 0 0 2 12s3 8 10 8a10 10 0 0 0 5.4-1.6M3 3l18 18',
  left: 'm15 18-6-6 6-6',
  right: 'm9 18 6-6-6-6',
  trendUp: 'm3 17 6-6 4 4 8-8M15 7h6v6',
  trendDown: 'm3 7 6 6 4-4 8 8M15 17h6v-6',
  megaphone: 'M3 11v2a1 1 0 0 0 1 1h2l5 4V6L6 10H4a1 1 0 0 0-1 1zM15 9a3 3 0 0 1 0 6M18 6a7 7 0 0 1 0 12',
  check: 'M20 6 9 17l-5-5',
  layers: 'm12 2 10 5-10 5L2 7zM2 17l10 5 10-5M2 12l10 5 10-5',
  pencil: 'M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z',
}

const MASK = '••••••'
const panel = 'rounded-[14px] border border-fcolor/[0.06] bg-white shadow-[0_8px_20px_-12px_rgba(42,64,100,0.3)]'
const stripes = {
  backgroundColor: '#edf1f7',
  backgroundImage: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.75) 0 5px, transparent 5px 11px)',
}

function Glyph({ d, className = 'h-3 w-3' }: { d: string; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d={d} />
    </svg>
  )
}

function DatePill({ children }: { children: string }) {
  return (
    <span className="flex items-center gap-2 rounded-full bg-[#eef2f8] px-1.5 py-1 font-inter text-[7px] font-semibold text-fcolor">
      <Glyph d={icon.left} className="h-2 w-2" />
      {children}
      <Glyph d={icon.right} className="h-2 w-2" />
    </span>
  )
}

type Stat = { label: string; value: string; note: string; up?: boolean }

function Stats({ items }: { items: Stat[] }) {
  return (
    <div className="grid grid-cols-4 gap-2">
      {items.map((stat) => (
        <div key={stat.label}>
          <div className="font-inter text-[6.5px] text-fcolor/55">{stat.label}</div>
          <div className={`mt-1 font-satoshi text-[12px] font-bold leading-none ${stat.up ? 'text-[#1f9d5c]' : 'text-fcolor'}`}>
            {stat.value}
          </div>
          <div className="mt-1 font-inter text-[5.5px] text-fcolor/40">{stat.note}</div>
        </div>
      ))}
    </div>
  )
}

function BarRows({ title, rows }: { title: string; rows: { label: string; pct: number }[] }) {
  return (
    <div>
      <div className="flex items-center justify-between font-inter text-[7px] font-semibold text-fcolor">
        {title}
        <span className="font-medium text-fcolor/45">View all</span>
      </div>
      <div className="mt-1.5 space-y-[5px]">
        {rows.map((row) => (
          <div key={row.label}>
            <div className="flex justify-between font-inter text-[6.5px] text-fcolor/70">
              {row.label}
              <span className="text-fcolor/45">
                {MASK} {row.pct}%
              </span>
            </div>
            <div className="mt-[3px] h-[3px] rounded-full bg-[#eef2f8]">
              <div className="h-full rounded-full bg-fcolor" style={{ width: `${row.pct * 2.4}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function TrendChart({ points, labels, className }: { points: number[]; labels: string[]; className: string }) {
  const w = 300
  const h = 80
  const step = w / (points.length - 1)
  const line = points.map((p, i) => `${i ? 'L' : 'M'}${(i * step).toFixed(1)} ${(h - (p * h) / 100).toFixed(1)}`).join(' ')

  return (
    <div>
      <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" className={`w-full ${className}`} aria-hidden>
        <path d={`${line} L${w} ${h} L0 ${h}Z`} fill="rgba(42,64,100,0.07)" />
        <path d={line} fill="none" stroke="#2a4064" strokeWidth="1.3" vectorEffect="non-scaling-stroke" />
      </svg>
      <div className="mt-1 flex justify-between font-inter text-[5.5px] text-fcolor/40">
        {labels.map((label) => (
          <span key={label}>{label}</span>
        ))}
      </div>
    </div>
  )
}

function ActionTiles({ items }: { items: { label: string; note: string; icon: string }[] }) {
  return (
    <div className="grid grid-cols-4 gap-1.5">
      {items.map((item, i) => (
        <div
          key={item.label}
          className={`flex items-center gap-1.5 rounded-lg border px-1.5 py-1.5 ${
            i === 0 ? 'border-fcolor/20 bg-[#e6eefa]' : 'border-fcolor/[0.07] bg-[#f6f8fb]'
          }`}
        >
          <span className={`grid h-4 w-4 shrink-0 place-items-center rounded-md ${i === 0 ? 'bg-fcolor text-white' : 'bg-white text-fcolor'}`}>
            <Glyph d={item.icon} className="h-2.5 w-2.5" />
          </span>
          <span className="min-w-0">
            <span className="block truncate font-inter text-[7px] font-semibold text-fcolor">{item.label}</span>
            <span className="block truncate font-inter text-[5.5px] text-fcolor/45">{item.note}</span>
          </span>
        </div>
      ))}
    </div>
  )
}

function Tabs({ items }: { items: { label: string; count?: number }[] }) {
  return (
    <div className="mx-auto flex w-fit gap-0.5 rounded-full bg-fcolor p-[3px] font-inter text-[6.5px] font-semibold">
      {items.map((item, i) => (
        <span
          key={item.label}
          className={`flex items-center gap-1 rounded-full px-2 py-[3px] ${i === 0 ? 'bg-white text-fcolor' : 'text-white/75'}`}
        >
          {item.label}
          {item.count !== undefined && (
            <span className={`grid h-2.5 min-w-2.5 place-items-center rounded-full px-[2px] text-[5px] ${i === 0 ? 'bg-fcolor text-white' : 'bg-white/20'}`}>
              {item.count}
            </span>
          )}
        </span>
      ))}
    </div>
  )
}

type Row = { initial: string; name: string; meta: string; badge: string; value?: string }

function ListRows({ rows, active, tone = 'cool' }: { rows: Row[]; active: number; tone?: 'cool' | 'warm' }) {
  return (
    <div className="space-y-1">
      {rows.map((row, i) => {
        const on = i === active
        return (
          <div key={row.name} className={`flex items-center gap-1.5 rounded-lg px-1.5 py-1 ${on ? 'bg-fcolor text-white' : 'text-fcolor'}`}>
            <span
              className={`grid h-4 w-4 shrink-0 place-items-center rounded-full font-inter text-[6px] font-bold ${
                on ? 'bg-white/15' : tone === 'warm' ? 'bg-[#fbeedd] text-[#9a5b12]' : 'bg-[#eef2f8]'
              }`}
            >
              {row.initial}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate font-inter text-[7px] font-semibold">{row.name}</span>
              <span className={`block truncate font-inter text-[5.5px] ${on ? 'text-white/60' : 'text-fcolor/45'}`}>{row.meta}</span>
            </span>
            <span className="flex flex-col items-end gap-[2px]">
              <span className={`font-inter text-[6.5px] font-semibold ${on ? '' : 'text-fcolor/70'}`}>{row.value ?? MASK}</span>
              <span
                className={`rounded-full border px-1 font-inter text-[5px] font-semibold ${
                  on ? 'border-white/40 bg-white text-fcolor' : 'border-fcolor/15 bg-[#f4f6fa] text-fcolor/70'
                }`}
              >
                {row.badge}
              </span>
            </span>
          </div>
        )
      })}
    </div>
  )
}

function DetailTiles({ items }: { items: { label: string; value: string }[] }) {
  return (
    <div className="grid grid-cols-3 gap-1">
      {items.map((item) => (
        <div key={item.label} className="rounded-md bg-white/10 px-1.5 py-1">
          <div className="font-inter text-[5px] uppercase tracking-[0.12em] text-white/55">{item.label}</div>
          <div className="mt-0.5 font-inter text-[7px] font-semibold">{item.value}</div>
        </div>
      ))}
    </div>
  )
}

function IconRail({ items }: { items: string[] }) {
  return (
    <div className="flex w-[30px] shrink-0 flex-col items-center justify-between rounded-full border border-fcolor/[0.06] bg-white py-2 text-fcolor shadow-[0_8px_20px_-12px_rgba(42,64,100,0.3)]">
      <div className="flex flex-col items-center gap-2">
        {items.map((d, i) => (
          <span key={d} className={`grid h-5 w-5 place-items-center rounded-full ${i === 0 ? 'bg-fcolor text-white' : 'text-fcolor/60'}`}>
            <Glyph d={d} className="h-2.5 w-2.5" />
          </span>
        ))}
        <span className="mt-1 grid h-5 w-5 place-items-center rounded-full bg-fcolor text-white">
          <Glyph d={icon.plus} className="h-2.5 w-2.5" />
        </span>
      </div>
      <Glyph d={icon.moon} className="h-2.5 w-2.5 text-fcolor/50" />
    </div>
  )
}

function PanelTitle({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex items-center justify-between">
      <div className="font-satoshi text-[15px] font-bold leading-none tracking-tight text-fcolor">{title}</div>
      {children}
    </div>
  )
}

const advisoryCalls: Row[] = [
  { initial: 'H', name: 'HDFC Bank', meta: 'Today · Banking', badge: 'Buy' },
  { initial: 'T', name: 'TCS', meta: 'Today · IT Services', badge: 'Buy' },
  { initial: 'R', name: 'Reliance', meta: 'Yesterday · Energy', badge: 'Hold' },
  { initial: 'S', name: 'Sun Pharma', meta: 'Yesterday · Pharma', badge: 'Exit' },
]

export function DashboardMock() {
  return (
    <div aria-hidden className="flex h-[400px] w-[620px] gap-2 overflow-hidden rounded-[1.25rem] p-2 shadow-[0_40px_80px_-20px_rgba(42,64,100,0.35)]" style={stripes}>
      <div className={`${panel} flex min-w-0 flex-1 flex-col gap-3 p-3`}>
        <PanelTitle title="Advisory Desk">
          <DatePill>OCT 26</DatePill>
        </PanelTitle>

        <Stats
          items={[
            { label: 'Active calls', value: '12', note: 'Trade + invest' },
            { label: 'Win rate', value: '78%', note: 'Last 30 days' },
            { label: 'Members', value: MASK, note: 'Across 3 plans' },
            { label: 'Net P/L', value: '+12.4%', note: 'Period change', up: true },
          ]}
        />

        <BarRows
          title="Sector exposure"
          rows={[
            { label: 'Banking', pct: 34 },
            { label: 'IT Services', pct: 26 },
            { label: 'Energy', pct: 18 },
            { label: 'Pharma', pct: 11 },
          ]}
        />

        <div>
          <div className="flex items-start justify-between">
            <div>
              <div className="font-inter text-[7px] font-semibold text-fcolor">Insights</div>
              <div className="font-inter text-[5.5px] text-fcolor/45">Advisory performance</div>
            </div>
            <div className="text-right">
              <div className="font-satoshi text-[13px] font-bold leading-none text-fcolor">+12.4%</div>
              <div className="font-inter text-[5.5px] text-fcolor/45">period change</div>
            </div>
          </div>
          <TrendChart
            className="mt-1 h-[52px]"
            points={[8, 12, 30, 34, 36, 41, 40, 47, 52, 50, 58, 63, 61, 68, 72, 74]}
            labels={['1', '5', '9', '13', '17', '21', '25', '30']}
          />
        </div>

        <ActionTiles
          items={[
            { label: 'Trade call', note: 'Broadcast a buy', icon: icon.trendUp },
            { label: 'Invest call', note: 'Long-term pick', icon: icon.layers },
            { label: 'Plans', note: 'Manage tiers', icon: icon.list },
            { label: 'Approvals', note: '3 pending', icon: icon.check },
          ]}
        />
      </div>

      <div className={`${panel} flex w-[200px] shrink-0 flex-col gap-2 p-2.5`}>
        <Tabs items={[{ label: 'Trade', count: 6 }, { label: 'Invest', count: 4 }, { label: 'Plans', count: 3 }]} />
        <div className="flex items-center justify-between px-0.5 font-inter text-[7px] font-semibold text-fcolor">
          Live broadcasts
          <span className="font-medium text-fcolor/45">See all</span>
        </div>
        <ListRows rows={advisoryCalls} active={1} />

        <div className="mt-auto flex flex-col gap-1.5 rounded-xl bg-fcolor p-2 text-white">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1 font-inter text-[8px] font-bold">
              TCS
              <span className="rounded-full bg-white/15 px-1 text-[5px] font-semibold">Buy</span>
            </span>
            <span className="flex items-center gap-1 font-inter text-[6.5px] text-white/70">
              <Glyph d={icon.eyeOff} className="h-2 w-2" />
              {MASK}
            </span>
          </div>
          <div className="font-inter text-[5px] uppercase tracking-[0.12em] text-white/55">Details</div>
          <DetailTiles
            items={[
              { label: 'Entry', value: '₹4,120' },
              { label: 'Target', value: '₹4,380' },
              { label: 'Stop', value: '₹3,990' },
            ]}
          />
          <div className="rounded-md bg-white/10 px-1.5 py-1">
            <div className="font-inter text-[5px] uppercase tracking-[0.12em] text-white/55">Note</div>
            <div className="mt-0.5 font-inter text-[6.5px]">Breakout above 4,100 on strong volume.</div>
          </div>
          <div className="flex items-center justify-end gap-1 pt-0.5 font-inter text-[6px] font-semibold">
            <span className="rounded-full bg-white/15 px-2 py-[3px]">Close</span>
            <span className="rounded-full bg-white px-2 py-[3px] text-fcolor">Edit call</span>
          </div>
        </div>
      </div>

      <IconRail items={[icon.home, icon.megaphone, icon.calendar, icon.clock]} />
    </div>
  )
}

const cafeMenu = [
  ['Margherita', 'Pizza', '₹349'],
  ['Paneer Tikka', 'Starter', '₹279'],
  ['Cold Coffee', 'Drink', '₹149'],
]

function DishPhoto({ className }: { className: string }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="absolute left-[-16.3%] top-0 -mt-[126%] aspect-[1440/739] w-[670%]">
        <Image src="/FoodHouseApp.webp" alt="" fill sizes="500px" className="object-cover" />
      </div>
    </div>
  )
}

export function FoodHouseMock() {
  return (
    <div aria-hidden className="w-[188px] overflow-hidden rounded-[1.1rem] bg-[#241910] text-[#f6efe6] shadow-[0_24px_50px_-18px_rgba(36,25,16,0.6)]">
      <div className="flex items-center justify-between px-3 pt-3">
        <span className="font-satoshi text-[13px] font-bold tracking-tight">Food House</span>
        <span className="font-inter text-[7px] font-semibold uppercase tracking-[0.18em] text-[#e7c9a0]">Café</span>
      </div>
      <DishPhoto className="mx-3 mt-2 h-[88px] rounded-xl" />
      <div className="space-y-1.5 px-3 pt-2.5">
        {cafeMenu.map(([name, kind, price]) => (
          <div key={name} className="flex items-baseline justify-between gap-2 font-inter">
            <span className="min-w-0">
              <span className="block truncate text-[9px] font-semibold">{name}</span>
              <span className="block text-[7px] text-[#e7c9a0]/70">{kind}</span>
            </span>
            <span className="text-[8px] text-[#e7c9a0]">{price}</span>
          </div>
        ))}
      </div>
      <div className="px-3 pb-3 pt-2.5">
        <span className="inline-flex rounded-full bg-[#e7c9a0] px-2.5 py-1 font-inter text-[8px] font-semibold text-[#241910]">
          Reserve a Table
        </span>
      </div>
    </div>
  )
}

export function MitreisenMock() {
  return (
    <div className="w-[200px] rounded-[1.1rem] border border-white/90 bg-white/75 p-2.5 shadow-[0_24px_50px_-18px_rgba(42,64,100,0.35)] backdrop-blur-md">
      <div className="mb-2 flex items-center gap-1.5 px-1 font-inter text-[11px] font-bold text-fcolor">
        <Glyph d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20" className="h-3 w-3" />
        Mitreisen
      </div>
      <div className="relative h-[190px] overflow-hidden rounded-xl bg-gradient-to-b from-[#9fbde6] via-[#58789f] to-[#1f3556]">
        <svg className="absolute inset-x-0 bottom-0 h-[70%] w-full" viewBox="0 0 200 130" preserveAspectRatio="none" aria-hidden>
          <path d="M0 130 L0 80 L40 45 L70 70 L105 20 L140 65 L165 50 L200 75 L200 130 Z" fill="#2a4064" opacity="0.7" />
          <path d="M105 20 L95 33 L103 30 L110 38 L115 30 Z" fill="#fff" opacity="0.8" />
          <path d="M0 130 L0 100 L50 75 L90 95 L130 70 L170 92 L200 85 L200 130 Z" fill="#162843" />
        </svg>
        <div className="relative p-3">
          <div className="font-satoshi text-[17px] font-bold leading-tight text-white">
            Discover
            <br />
            The World
          </div>
          <div className="mt-1 font-inter text-[7px] text-white/75">Plan, explore, and book your next trip</div>
        </div>
        <div className="absolute inset-x-3 bottom-3 flex h-6 items-center gap-1.5 rounded-full bg-white/90 px-2 font-inter text-[7px] text-fcolor/50">
          <Glyph d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM21 21l-4.3-4.3" className="h-2.5 w-2.5" />
          Search destination...
        </div>
      </div>
    </div>
  )
}
