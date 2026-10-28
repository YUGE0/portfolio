import type { Metadata } from 'next'
import PageLoader from '../compo/PageLoader'
import WorkShowcase from '../compo/WorkShowcase'
import { pageMetadata } from '../site'

export const metadata: Metadata = pageMetadata({
  path: '/work',
  title: 'Work and Projects',
  description:
    'Frontend development portfolio of Yug Prajapati: case studies covering a multi-tenant SaaS, a MERN travel booking app, a Next.js food ordering app and more.',
})

export default function page() {
  return (
    <PageLoader page="Work">
      <WorkShowcase />
    </PageLoader>
  )
}
