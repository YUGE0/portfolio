import type { Metadata } from 'next'
import PageLoader from '../compo/PageLoader'
import { ContactSection } from '../compo/footer'
import { pageMetadata } from '../site'

export const metadata: Metadata = pageMetadata({
  path: '/contact',
  title: 'Contact',
  description:
    'Get in touch with Yug Prajapati for frontend developer roles, freelance React and Next.js projects or collaborations.',
})

export default function page() {
  return (
    <PageLoader page="Contact">
      <ContactSection headingLevel="h1" />
    </PageLoader>
  )
}
