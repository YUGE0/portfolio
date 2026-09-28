import CaseStudyPage from '../compo/CaseStudyPage'
import PageLoader from '../compo/PageLoader'

export default function Page() {
  return (
    <PageLoader page="Autos" speed={1200}>
      <CaseStudyPage slug="auto" />
    </PageLoader>
  )
}
