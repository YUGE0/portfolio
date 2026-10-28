import CaseStudyPage from '../compo/CaseStudyPage'
import { getAvailableShots } from '../compo/caseStudyAssets'
import PageLoader from '../compo/PageLoader'
import { caseStudyMetadata } from '../compo/caseStudyMeta'
import { CaseStudyJsonLd } from '../compo/JsonLd'

export const metadata = caseStudyMetadata('clocko')

export default function Page() {
  return (
    <PageLoader page="Clocko">
      <CaseStudyJsonLd slug="clocko" />
      <CaseStudyPage slug="clocko" available={getAvailableShots()} />
    </PageLoader>
  )
}
