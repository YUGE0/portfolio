import PageLoader from '../compo/PageLoader'
import { ContactSection } from '../compo/footer'

export default function page() {
  return (
    <PageLoader page="Contact" speed={1200}>
      <ContactSection />
    </PageLoader>
  )
}
