import CaseStudyPage from '../compo/CaseStudyPage'
import { getAvailableShots } from '../compo/caseStudyAssets'
import PageLoader from '../compo/PageLoader'

export default function Page() {
  return (
    <PageLoader page="Position Wise">
      <CaseStudyPage slug="position-wise" available={getAvailableShots()} />
    </PageLoader>
  )
}
