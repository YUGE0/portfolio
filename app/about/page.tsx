import type { Metadata } from 'next'
import AboutShowcase from '../compo/AboutShowcase'
import PageLoader from '../compo/PageLoader'
import { pageMetadata } from '../site'

export const metadata: Metadata = pageMetadata({
  path: '/about',
  title: 'About',
  description:
    'Experience, skills and background of Yug Prajapati, a frontend developer in Ahmedabad working with React, Next.js, TypeScript, Tailwind CSS and Supabase.',
})

export default function page() {
  return (
    <PageLoader page="About">
      <AboutShowcase />
    </PageLoader>
  )
}
