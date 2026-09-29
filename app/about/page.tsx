import AboutShowcase from '../compo/AboutShowcase'
import PageLoader from '../compo/PageLoader'

export default function page() {
  return (
    <PageLoader page="About">
      <AboutShowcase />
    </PageLoader>
  )
}
