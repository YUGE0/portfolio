import Image from 'next/image'

const sidebarItems = [
  { label: 'Dashboard', icon: 'M3 3h7v7H3zM14 3h7v4h-7zM14 11h7v10h-7zM3 14h7v7H3z' },
  { label: 'Positions', icon: 'M4 7h16v13H4zM9 7V4h6v3' },
  { label: 'Advisory', icon: 'M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.8c.6.45 1 1.1 1.1 1.85V17h4.8v-1.35c.1-.75.5-1.4 1.1-1.85A6 6 0 0 0 12 3Z' },
  { label: 'Watchlist', icon: 'M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z' },
  { label: 'Reports', icon: 'M6 3h9l4 4v14H6zM9 12h7M9 16h5' },
  { label: 'Settings', icon: 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM19 12l2-1-1-3-2 .3-1.5-1.5L17 5l-3-1-1 2h-2L10 4 7 5l.5 2L6 8.5 4 8.2 3 11l2 1v0l-2 1 1 3 2-.3 1.5 1.5L7 19l3 1 1-2h2l1 2 3-1-.5-2 1.5-1.5 2 .3 1-3z' },
]

const stats = [
  { label: 'Total Positions', value: '12' },
  { label: 'Active Advisory', value: '8' },
  { label: 'Success Rate', value: '78%' },
  { label: 'Total Return', value: '+12.4%', positive: true },
]

const bars = [
  { month: 'Jan', height: 42 },
  { month: 'Feb', height: 55 },
  { month: 'Mar', height: 38 },
  { month: 'Apr', height: 82, highlight: true },
  { month: 'May', height: 48 },
  { month: 'Jun', height: 60 },
  { month: 'Jul', height: 44 },
  { month: 'Aug', height: 90, highlight: true },
]

function Glyph({ d, className = 'h-3 w-3' }: { d: string; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d={d} />
    </svg>
  )
}

export function DashboardMock() {
  return (
    <div className="flex h-[400px] w-[620px] overflow-hidden rounded-[1.25rem] border border-white bg-white shadow-[0_40px_80px_-20px_rgba(42,64,100,0.35)]">
      <div className="flex w-[118px] shrink-0 flex-col bg-fcolor px-3 py-4 text-white">
        <div className="mb-6 flex items-center gap-2 px-1 font-inter text-[11px] font-bold">
          <span className="grid h-5 w-5 place-items-center rounded-md bg-white/15">
            <Glyph d="M12 2v20M2 12h20" className="h-2.5 w-2.5" />
          </span>
          PWA
        </div>
        <div className="space-y-1">
          {sidebarItems.map((item, index) => (
            <div
              key={item.label}
              className={`flex items-center gap-2 rounded-lg px-2 py-1.5 font-inter text-[9px] ${
                index === 0 ? 'bg-white/15 font-semibold text-white' : 'text-white/60'
              }`}
            >
              <Glyph d={item.icon} />
              {item.label}
            </div>
          ))}
        </div>
      </div>

      <div className="flex min-w-0 flex-1 flex-col bg-[#f7faff] p-4">
        <div className="flex items-center gap-3">
          <Glyph d="M4 6h16M4 12h16M4 18h16" className="h-3.5 w-3.5 text-fcolor" />
          <div className="flex h-6 flex-1 items-center gap-1.5 rounded-full bg-white px-2.5 font-inter text-[8px] text-fcolor/40 shadow-sm">
            <Glyph d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM21 21l-4.3-4.3" className="h-2.5 w-2.5" />
            Search for companies, insights...
          </div>
          <div className="flex items-center gap-2 text-fcolor/50">
            <Glyph d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9M10.3 21a1.94 1.94 0 0 0 3.4 0" className="h-3 w-3" />
            <Glyph d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 16v-4M12 8h.01" className="h-3 w-3" />
            <span className="h-5 w-5 rounded-full bg-gradient-to-br from-accent to-fcolor" />
          </div>
        </div>

        <div className="mt-4 flex items-end justify-between gap-3">
          <div>
            <div className="font-satoshi text-[19px] font-bold leading-tight text-fcolor">Position Wise Advisory</div>
            <div className="mt-0.5 font-inter text-[8px] text-fcolor/45">Personalised advisory across every position in your portfolio</div>
          </div>
          <div className="flex shrink-0 items-center gap-1.5 font-inter text-[8px]">
            <span className="rounded-md border border-fcolor/10 bg-white px-2 py-1 text-fcolor/70">Last 30 days ▾</span>
            <span className="rounded-md bg-accent px-2 py-1 font-semibold text-white">Download</span>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-4 gap-2">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-lg border border-fcolor/5 bg-white p-2.5 shadow-sm">
              <div className="font-inter text-[8px] text-fcolor/50">{stat.label}</div>
              <div className={`mt-1 font-satoshi text-[17px] font-bold ${stat.positive ? 'text-emerald-500' : 'text-fcolor'}`}>
                {stat.value}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-3 flex min-h-0 flex-1 flex-col rounded-lg border border-fcolor/5 bg-white p-3 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="font-inter text-[10px] font-semibold text-fcolor">Performance Overview</div>
            <div className="flex gap-1 font-inter text-[7px] text-fcolor/50">
              {['1M', '3M', '6M', '1Y'].map((range) => (
                <span key={range} className={`rounded px-1.5 py-0.5 ${range === '1Y' ? 'bg-accent text-white' : 'bg-[#eef4fd]'}`}>
                  {range}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-2 flex min-h-0 flex-1 gap-2">
            <div className="flex flex-col justify-between pb-3 font-inter text-[7px] text-fcolor/35">
              <span>30%</span>
              <span>20%</span>
              <span>10%</span>
              <span>0%</span>
            </div>
            <div className="flex flex-1 items-end justify-between gap-2 border-l border-fcolor/5 pl-2">
              {bars.map((bar) => (
                <div key={bar.month} className="flex h-full flex-1 flex-col items-center justify-end gap-1">
                  <div
                    className={`w-full max-w-[18px] rounded-t ${
                      bar.highlight ? 'bg-gradient-to-t from-[#3B7FD4] to-accent' : 'bg-gradient-to-t from-accent/15 to-accent/40'
                    }`}
                    style={{ height: `${bar.height}%` }}
                  />
                  <span className="font-inter text-[6px] text-fcolor/35">{bar.month}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
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

export function FoodHouseMock() {
  return (
    <div className="w-[170px] rounded-[1.1rem] border border-white/20 bg-fcolor p-3 text-white shadow-[0_24px_50px_-18px_rgba(42,64,100,0.45)]">
      <div className="font-satoshi text-[14px] font-bold">Food House</div>
      <div className="relative mt-2 h-[120px] overflow-hidden rounded-xl">
        <Image src="/FoodHouseApp.webp" alt="" fill sizes="170px" className="origin-[50%_90%] scale-[1.9] object-cover object-[50%_100%]" />
      </div>
      <div className="mt-3 inline-flex rounded-md border border-white/40 px-2.5 py-1 font-inter text-[8px] font-semibold">
        Book a Table
      </div>
    </div>
  )
}
