import CaseStudyPage from '../compo/CaseStudyPage'
import { getAvailableShots } from '../compo/caseStudyAssets'
import PageLoader from '../compo/PageLoader'

export default function Page() {
  return (
    <PageLoader page="Mitreisen">
      <CaseStudyPage slug="mitreisen" available={getAvailableShots()} />
    </PageLoader>
  )
}
