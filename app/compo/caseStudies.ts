export type Shot = {
  src: string
  w: number
  h: number
  alt: string
  mock?: 'dashboard' | 'plans'
}

export type Point = { title: string; text: string }

export type Feature = {
  eyebrow: string
  shot?: Shot
  frame?: 'browser' | 'plain'
  demo?: 'engine-sound' | 'host-switcher' | 'privacy-wallet'
  points: Point[]
  learning: string
}

export type Challenge = {
  title: string
  problem: string
  solution: string
  before: { label: string; items: string[] }
  after: { label: string; items: string[] }
}

export type CaseStudy = {
  slug: string
  index: string
  name: string
  category: string
  tagline: string
  summary: string
  status: 'Live' | 'In Progress' | 'Source Code'
  url?: string
  meta: Array<{ label: string; value: string }>
  stack: string[]
  links: Array<{ label: string; href: string }>
  hero: Shot
  heroFrame: 'browser' | 'plain'
  highlights: Point[]
  gallery?: Array<{ label: string; shots: Shot[] }>
  features: Feature[]
  stats?: Array<{ value: string; label: string }>
  challenge?: Challenge
  roadmap?: Point[]
}

const shot = (src: string, w: number, h: number, alt: string, mock?: Shot['mock']): Shot => ({ src, w, h, alt, mock })

const pw = (file: string, alt: string, mock?: Shot['mock']) => shot(`/position-wise/${file}`, 1900, 1188, alt, mock)

export const caseStudies: CaseStudy[] = [
  {
    slug: 'position-wise',
    index: '01',
    name: 'Position Wise',
    category: 'Multi-product SaaS',
    tagline: 'One codebase, three products: an advisory SaaS, a finance tracker and the console that runs them.',
    summary:
      'Position Wise is a multi-tenant Next.js and Supabase platform. Investment advisory firms each get their own subdomain with live markets, trade and invest broadcasts, subscription plans and a full admin control center. Wise Track, a sibling product on its own host, is a free personal ledger for expenses, income, transfers and credit cards. It started as a single advisory app, grew into org multi-tenancy, and was then split into separate product hosts so each product could grow independently while still sharing a single login.',
    status: 'Live',
    meta: [
      { label: 'Client', value: 'Position Wise Advisory' },
      { label: 'Timeline', value: 'Mar 2026 – Sep 2026' },
      { label: 'Type', value: 'Multi-tenant SaaS' },
      { label: 'Products', value: 'Advisory · Wise Track · Owner' },
    ],
    stack: [
      'Next.js 16',
      'React 19',
      'TypeScript',
      'Tailwind CSS 4',
      'shadcn/ui',
      'Radix UI',
      'Recharts',
      'Sonner',
      'lucide-react',
      'CVA',
      'Supabase Auth',
      'Postgres + RLS',
      'Supabase Storage',
      '@supabase/ssr',
      'Google OAuth',
      'Vercel',
      'ESLint',
    ],
    links: [],
    hero: pw('adv-dashboard.png', 'Advisory dashboard', 'dashboard'),
    heroFrame: 'browser',
    highlights: [
      {
        title: 'Subdomain multi-tenancy',
        text: 'Every advisory firm runs on its own subdomain with scoped members, plans, billing and admin, all from one deployment.',
      },
      {
        title: 'Live advisory desk',
        text: 'A live market board plus trade and invest broadcasts with P/L feedback and tier-gated tips.',
      },
      {
        title: 'Wise Track',
        text: 'A sibling finance app with a wallet-style card carousel, activity-flow analytics and privacy masking.',
      },
    ],
    stats: [
      { value: '~112', label: 'Commits' },
      { value: '7', label: 'Build phases' },
      { value: '4', label: 'Product hosts' },
      { value: '~35', label: 'Distinct screens' },
    ],
    gallery: [
      {
        label: 'Website',
        shots: [
          pw('web-home.png', 'Home page pitching Advisory and Track'),
          pw('web-advisory.png', 'Advisory marketing landing'),
          pw('web-sign-up.png', 'Email and Google sign-up'),
        ],
      },
      {
        label: 'Advisory',
        shots: [
          pw('adv-dashboard.png', 'Live market board and broadcast workspace'),
          pw('adv-subscribe.png', 'Plan picker with payment-proof upload'),
          pw('adv-tips.png', 'Tier-gated tip modules'),
          pw('adv-wait-approval.png', 'Pending admin approval state'),
        ],
      },
      {
        label: 'Admin',
        shots: [
          pw('adv-admin.png', 'Control center overview metrics'),
          pw('adv-admin-broadcast.png', 'Publish and manage broadcasts'),
          pw('adv-admin-subs.png', 'Approve or reject subscriptions with proof viewer'),
          pw('adv-admin-users.png', 'Member roster and weekly trade usage'),
        ],
      },
      {
        label: 'Wise Track',
        shots: [
          pw('trk-landing.png', 'Wise Track marketing page'),
          pw('trk-overview.png', 'Month dashboard'),
          pw('trk-expenses.png', 'Filterable ledger'),
          pw('trk-accounts.png', 'Wallet-style accounts carousel'),
          pw('trk-analytics.png', 'Activity flow and spend charts'),
          pw('trk-profile.png', 'Settings, categories and theme customizer'),
        ],
      },
      { label: 'Platform', shots: [pw('plt-owner.png', 'Owner console: create orgs and assign members')] },
    ],
    features: [
      {
        eyebrow: 'One Brand, Many Tenants',
        demo: 'host-switcher',
        points: [
          {
            title: 'Host-aware edge proxy',
            text: 'proxy.ts reads the subdomain and tags each request with x-subdomain and x-product (tenant, track or owner), then refreshes the session and enforces auth gates before a page renders.',
          },
          {
            title: 'Reserved product hosts',
            text: 'track, owner and www can never become org slugs, so new products get their own hosts instead of being bolted into a tenant.',
          },
          {
            title: 'Shared login across subdomains',
            text: 'One Supabase user and a parent-domain auth cookie keep OAuth working as users hop between hosts, while org-scoped subscriptions mean billing never leaks between tenants.',
          },
        ],
        learning:
          'Multi-tenancy is mostly a routing and identity problem before it is a data problem. Centralising access in one resolver (getCurrentUserAccess → route) made every new host and waiting state cheap to add.',
      },
      {
        eyebrow: 'The Advisory Desk',
        shot: pw('adv-dashboard.png', 'Live market board and broadcast workspace', 'dashboard'),
        points: [
          {
            title: 'Live market board',
            text: 'Admin-managed symbols feed a live quote board alongside trade and invest broadcast tabs.',
          },
          {
            title: 'Broadcasts with feedback',
            text: 'Admins publish calls, members report P/L, and non-private calls get a public share link.',
          },
          {
            title: 'Weekly trade limits',
            text: 'Plan tiers cap trade usage, and admins can see it per member in the roster.',
          },
        ],
        learning:
          'Power-user dashboards need hierarchy more than features. Splitting trade and invest into tabs made the board scannable.',
      },
      {
        eyebrow: 'Membership That Pays',
        shot: pw('adv-subscribe.png', 'Plan picker with payment-proof upload', 'plans'),
        points: [
          {
            title: 'Payment-proof onboarding',
            text: 'Members choose a plan and upload proof of payment to Supabase Storage.',
          },
          {
            title: 'Admin approval loop',
            text: 'Admins review proofs in a viewer dialog and approve or cancel from one table.',
          },
          {
            title: 'Honest waiting states',
            text: '/waiting (no org yet) and /wait-approval (paid, pending review) are deliberately separate, so users always know what is blocking them.',
          },
        ],
        learning:
          'Manual payment flows are fine if every state has a clear screen. Splitting the two waiting states noticeably reduced confusion.',
      },
      {
        eyebrow: 'Wise Track Comes Alive',
        demo: 'privacy-wallet',
        points: [
          {
            title: 'Wallet-style accounts',
            text: 'Cash, bank and credit cards in a carousel with card networks and shared credit-limit pools.',
          },
          {
            title: 'Month-centric analytics',
            text: 'Day and month calendar views and a custom activity-flow chart built with Recharts.',
          },
          {
            title: 'Personal touches',
            text: 'Privacy mode masks every amount, and theme presets and washes are saved per user.',
          },
        ],
        learning:
          'Shipping Track as a separate product host rather than a tenant feature let it have its own shell, branding and nav without touching the advisory code.',
      },
    ],
    challenge: {
      title: 'Splitting a live app without breaking a URL',
      problem:
        'The app had grown from a single advisory product into several, and the code needed to move into separate web, advisory and track folders while real users kept using the same public URLs.',
      solution:
        'Next.js rewrites (mapToProduct) map every stable public path onto its new product folder, so /dashboard, /admin and /app never changed while the code moved underneath.',
      before: { label: 'Single advisory app', items: ['/dashboard', '/admin', '/app', 'One shell, one brand'] },
      after: {
        label: 'Multi-product hosts',
        items: ['web/ — marketing site', 'advisory/ — tenant subdomains', 'track/ — Wise Track', 'owner/ — platform console'],
      },
    },
    roadmap: [{ title: 'Budgets', text: 'Per-category monthly budgets in Wise Track. The screen already exists as a placeholder.' }],
  },
  {
    slug: 'mitreisen',
    index: '02',
    name: 'Mitreisen',
    category: 'Web App',
    tagline: 'One platform for flights, trains, hotels and tours.',
    summary:
      'Mitreisen is a multi-modal travel booking system I built during my internship at Skywinds Solutions. Users can search and book flights, trains, hotels and tours from a single platform. It was my first real exposure to full-stack development, team workflows and building production-oriented features end to end.',
    status: 'Source Code',
    meta: [
      { label: 'Role', value: 'MERN Stack Intern' },
      { label: 'Company', value: 'Skywinds Solutions' },
      { label: 'Timeline', value: 'Dec 2023 – Mar 2024' },
      { label: 'Type', value: 'Travel Booking Web App' },
    ],
    stack: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Figma'],
    links: [{ label: 'GitHub Repository', href: 'https://github.com/YUGE0/Mitreisen' }],
    hero: shot('/HomePage.png', 1904, 3194, 'Mitreisen home page'),
    heroFrame: 'browser',
    highlights: [
      { title: 'Multi-modal search', text: 'Flights, trains and hotels under one roof with a shared design language.' },
      { title: 'End-to-end booking', text: 'Guided flows from browsing options to confirming a reservation.' },
      { title: 'Full-stack scope', text: 'MongoDB schemas, Express APIs, React UI and an admin dashboard.' },
    ],
    gallery: [
      {
        label: 'Home',
        shots: [
          shot('/HomePage.png', 1904, 3194, 'Home page'),
          shot('/LoginPage.png', 1904, 1364, 'Login page'),
          shot('/SignupPage.png', 1904, 1365, 'Signup page'),
          shot('/HomePage_Flight.png', 1904, 362, 'Flight search'),
          shot('/HomePage_Train.png', 1904, 362, 'Train search'),
          shot('/HomePage_Hotel.png', 1904, 362, 'Hotel search'),
        ],
      },
      {
        label: 'Booking',
        shots: [
          shot('/FlightsPage.png', 1904, 2772, 'Flights results'),
          shot('/FlightsBook.png', 1904, 1452, 'Flight booking'),
          shot('/TrainsPage.png', 1904, 2966, 'Trains results'),
          shot('/TrainsBook.png', 1904, 1452, 'Train booking'),
          shot('/HotelsPage.png', 1904, 2541, 'Hotels results'),
          shot('/HotelsBook.png', 1904, 1452, 'Hotel booking'),
        ],
      },
      {
        label: 'Destinations',
        shots: [
          shot('/AMDDestPage.png', 1904, 5367, 'Destination page'),
          shot('/TourBook.png', 1904, 1452, 'Tour booking'),
        ],
      },
      { label: 'Admin', shots: [shot('/AdminSum.png', 1904, 1413, 'Admin dashboard')] },
    ],
    features: [
      {
        eyebrow: 'Home Page',
        shot: shot('/HomePage.png', 1904, 3194, 'Mitreisen home page'),
        points: [
          {
            title: 'A central hub',
            text: 'Users switch between flights, trains and hotels from one interface, search destinations and reach login and signup, all translated from Figma into responsive React components.',
          },
          {
            title: 'Multi-modal search',
            text: 'Each travel mode has its own search form and results layout while sharing a consistent design language, so complete trips can be planned without leaving the platform.',
          },
        ],
        learning:
          'Breaking a large Figma design into reusable React components, managing conditional UI for different booking types and structuring a frontend that scales as new travel modules are added.',
      },
      {
        eyebrow: 'Booking Pages',
        shot: shot('/FlightsPage.png', 1904, 2772, 'Mitreisen flights booking'),
        points: [
          {
            title: 'Guided flows',
            text: 'Dedicated flows for flights, trains and hotels take users from browsing to confirmation, with clear steps for dates, passengers and preferences.',
          },
          {
            title: 'Dynamic data',
            text: 'Results, availability and pricing come from Node.js and Express APIs and render dynamically in React as users move through the process.',
          },
        ],
        learning:
          'Integrating REST APIs into a React frontend, handling loading and empty states, and designing flows that feel intuitive even when the data and logic underneath are complex.',
      },
      {
        eyebrow: 'Destinations & Tours',
        shot: shot('/AMDDestPage.png', 1904, 5367, 'Mitreisen destination page'),
        points: [
          {
            title: 'Beyond point-to-point',
            text: 'Destination pages and tour packages let users explore curated experiences and book directly, extending the platform into full trip planning.',
          },
          {
            title: 'Routing',
            text: 'Dynamic routing connects home, booking, destination and tour pages into seamless navigation without full page reloads.',
          },
        ],
        learning:
          'Dynamic routing in React, structuring pages that share layouts but differ in content, and presenting rich travel content in a clean, scannable way.',
      },
      {
        eyebrow: 'Admin Dashboard',
        shot: shot('/AdminSum.png', 1904, 1413, 'Mitreisen admin dashboard'),
        points: [
          {
            title: 'Operator overview',
            text: 'An admin panel summarises bookings, users and activity, and manages the data behind the booking experience, making Mitreisen a complete system rather than a prototype.',
          },
          {
            title: 'Full-stack scope',
            text: 'Working on both sides, from MongoDB schemas and Express routes to React dashboards, was my first time connecting every layer of a web application.',
          },
        ],
        learning:
          'Dashboard design, role-based views and CRUD over travel data, plus how frontend and backend must align on data models and API contracts for a product to work smoothly.',
      },
    ],
  },
  {
    slug: 'foodHouse',
    index: '03',
    name: 'Food House',
    category: 'Web App',
    tagline: 'Food ordering with a modern dining experience.',
    summary:
      'Food House is a sleek food ordering web app powered by Next.js. It offers dynamic menu browsing, seamless cart management and a robust admin panel for order and item control. The project is actively in development, so this page grows as new parts ship.',
    status: 'In Progress',
    meta: [
      { label: 'Role', value: 'Design & Development' },
      { label: 'Type', value: 'Food Ordering Web App' },
      { label: 'Status', value: 'In active development' },
    ],
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    links: [],
    hero: shot('/FoodHouseApp.webp', 1440, 739, 'Food House menu'),
    heroFrame: 'browser',
    highlights: [
      { title: 'Dynamic menu', text: 'Browse dishes with images, descriptions, serving size and pricing.' },
      { title: 'Seamless cart', text: 'Add, remove and adjust quantities right from the menu cards.' },
      { title: 'Admin control', text: 'Manage orders and menu items from a dedicated panel.' },
    ],
    features: [],
    roadmap: [
      { title: 'Menu browsing', text: 'Menu cards rendered from Supabase data with quantity controls and quick add.' },
      { title: 'Cart management', text: 'A persistent cart that keeps quantities and totals in sync across the app.' },
      { title: 'Admin panel', text: 'Order tracking and item management so the restaurant stays in control.' },
      { title: 'Real-time updates', text: 'Live order status powered by Supabase real-time subscriptions.' },
    ],
  },
  {
    slug: 'auto',
    index: '04',
    name: 'Autos',
    category: 'Website',
    tagline: 'A car showcase you can see and hear.',
    summary:
      'Autos is a car showcase platform with dynamically rendered pages for every car and an immersive engine sound feature. I took on the challenge of learning TypeScript and Next.js at the same time while building it, exploring server-side rendering, "use client" boundaries and dynamic routes.',
    status: 'Live',
    url: 'autosshow.vercel.app',
    meta: [
      { label: 'Role', value: 'Solo Project' },
      { label: 'Type', value: 'Car Showcase Website' },
      { label: 'Focus', value: 'SSR & Dynamic Routes' },
    ],
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'use-sound'],
    links: [
      { label: 'Visit Live Site', href: 'https://autosshow.vercel.app/' },
      { label: 'GitHub Repository', href: 'https://github.com/YUGE0/Autos' },
    ],
    hero: shot('/AutoHomePage.png', 1904, 1831, 'Autos home page'),
    heroFrame: 'browser',
    highlights: [
      { title: 'Server-side rendering', text: 'Car data is fetched from Supabase on the server for fast first loads.' },
      { title: 'Dynamic pages', text: 'One slug-based layout renders a detailed page for every car.' },
      { title: 'Engine sound', text: 'Selected models let you play the real sound of the engine.' },
    ],
    gallery: [
      { label: 'Home', shots: [shot('/AutoHomePage.png', 1904, 1831, 'Autos home page')] },
      {
        label: 'GT3 RS',
        shots: [
          shot('/AutoGT3RSUP.png', 1904, 2291, 'GT3 RS hero'),
          shot('/AutoGT3RSAero.png', 1904, 890, 'GT3 RS aerodynamics'),
          shot('/AutoGT3RSPer.png', 1904, 860, 'GT3 RS performance'),
          shot('/AutoGT3RSCon.png', 1904, 855, 'GT3 RS connectivity'),
          shot('/AutoGT3RSDown.png', 1904, 665, 'GT3 RS footer'),
        ],
      },
      { label: 'Revuelto', shots: [shot('/AutoRevuelto.png', 1904, 4414, 'Revuelto page')] },
    ],
    features: [
      {
        eyebrow: 'Product Card',
        shot: shot('/AutoCard.png', 1514, 1392, 'Autos product card anatomy'),
        frame: 'plain',
        points: [
          {
            title: 'Everything at a glance',
            text: 'Each card shows the car image, brand logo and name, a brief description, model and price, all fetched from Supabase during server-side rendering.',
          },
          {
            title: 'Generated from data',
            text: 'Cards are mapped from the dataset, and clicking one opens the dedicated page for that car.',
          },
        ],
        learning:
          'Using a slug to render pages dynamically in Next.js. When every product shares a layout, one template can present them all, giving quick information up front and more detail one click away.',
      },
      {
        eyebrow: 'Engine Sound',
        demo: 'engine-sound',
        points: [
          {
            title: 'Feel the engine',
            text: 'Users can play the sound of the car, which makes the experience far more immersive. It is built with use-sound and a bit of state to play and pause.',
          },
        ],
        learning:
          'I had never worked with audio on a website before. Small touches like this enhance the experience and make a site stand out.',
      },
    ],
  },
  {
    slug: 'clocko',
    index: '05',
    name: 'Clocko',
    category: 'Widget',
    tagline: 'A world clock built while learning React.',
    summary:
      'I used a clock while studying, especially when learning React.js, so I decided to build a meaningful project around it. Clocko brings together props, components, hooks and conditional rendering, with a special touch of Tailwind CSS.',
    status: 'Live',
    url: 'cl0cko.vercel.app',
    meta: [
      { label: 'Role', value: 'Solo Project' },
      { label: 'Type', value: 'World Clock Widget' },
      { label: 'Focus', value: 'Hooks & Rendering' },
    ],
    stack: ['React.js', 'Tailwind CSS'],
    links: [
      { label: 'Visit Live Site', href: 'https://cl0cko.vercel.app/' },
      { label: 'GitHub Repository', href: 'https://github.com/YUGE0/Clock' },
    ],
    hero: shot('/Clocko.webp', 7552, 4248, 'Clocko in dark and light themes'),
    heroFrame: 'plain',
    highlights: [
      { title: 'Big, bold time', text: 'Flip-style cards that capture attention at a glance.' },
      { title: 'Cities & time zones', text: 'Local time for any city based on its UTC offset.' },
      { title: 'Themes & full screen', text: 'Dark or light mode, and a full-screen screensaver view.' },
    ],
    features: [
      {
        eyebrow: 'Hours & Seconds',
        shot: shot('/Hours.png', 1462, 1340, 'Clocko hours card anatomy'),
        frame: 'plain',
        points: [
          { title: 'Hours', text: 'Big and bold hours quickly capture attention.' },
          { title: 'Seconds', text: 'A critical component that has to re-render at very short intervals.' },
          {
            title: 'AM/PM',
            text: 'An indicator that helps users tell morning from afternoon at a glance, especially around meetings or long work sessions.',
          },
        ],
        learning:
          'Rendering hours and AM/PM is easy, but seconds needed deeper thought. A timeout works but creates glitches, while useEffect makes it behave exactly as it should.',
      },
      {
        eyebrow: 'Minutes, Day & Date',
        shot: shot('/Minutes.png', 1420, 1340, 'Clocko minutes card anatomy'),
        frame: 'plain',
        points: [
          { title: 'Minutes', text: 'Everything learned building seconds made this component quick to finish.' },
          { title: 'Day', text: 'A short day label so you never miss your weekend, and a unique touch.' },
          { title: 'Date', text: 'Only the day of the month, a more concise representation than the usual format.' },
        ],
        learning:
          'The emphasis was on choosing the right aesthetic. Distinguishing the day and date visually makes the whole interface feel more streamlined.',
      },
      {
        eyebrow: 'Cities & Themes',
        shot: shot('/City.png', 1462, 1340, 'Clocko city time anatomy'),
        frame: 'plain',
        points: [
          { title: 'City time', text: 'Shows local time for any city from its UTC offset. Add a city and everything updates.' },
          { title: 'Theme', text: 'Dark or light mode, so users can pick their preferred presentation.' },
          { title: 'Full screen', text: 'Maximises the display so Clocko can double as a screensaver.' },
        ],
        learning:
          'Showing time across cities requires careful handling of UTC offsets. Themes and full screen taught me how small options make an app feel personal.',
      },
    ],
  },
]

export const caseStudyRoutes = caseStudies.map((study) => `/${study.slug}`)

export function getCaseStudy(slug: string) {
  const index = caseStudies.findIndex((study) => study.slug === slug)
  const study = caseStudies[index]
  if (!study) throw new Error(`Unknown case study: ${slug}`)
  return { study, next: caseStudies[(index + 1) % caseStudies.length] }
}
