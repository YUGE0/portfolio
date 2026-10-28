import CaseStudyPage from '../compo/CaseStudyPage'
import { getAvailableShots } from '../compo/caseStudyAssets'
import PageLoader from '../compo/PageLoader'
import { caseStudyMetadata } from '../compo/caseStudyMeta'
import { CaseStudyJsonLd } from '../compo/JsonLd'

export const metadata = caseStudyMetadata('position-wise')

export default function Page() {
  return (
    <PageLoader page="Position Wise">
      <CaseStudyJsonLd slug="position-wise" />
      <CaseStudyPage slug="position-wise" available={getAvailableShots()} />
    </PageLoader>
  )
}
