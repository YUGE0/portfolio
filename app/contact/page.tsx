import PageLoader from '../compo/PageLoader'
import { ContactSection } from '../compo/footer'

export default function page() {
  return (
    <PageLoader page="Contact">
      <ContactSection />
    </PageLoader>
  )
}
