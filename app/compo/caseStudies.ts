export type Shot = {
  src: string
  w: number
  h: number
  alt: string
}

export type Point = { title: string; text: string }

export type Feature = {
  eyebrow: string
  shot?: Shot
  frame?: 'browser' | 'plain'
  demo?: 'engine-sound'
  points: Point[]
  learning: string
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
  roadmap?: Point[]
}

const shot = (src: string, w: number, h: number, alt: string): Shot => ({ src, w, h, alt })

export const caseStudies: CaseStudy[] = [
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
