import CaseStudyPage from '../compo/CaseStudyPage'
import { getAvailableShots } from '../compo/caseStudyAssets'
import PageLoader from '../compo/PageLoader'
import { caseStudyMetadata } from '../compo/caseStudyMeta'
import { CaseStudyJsonLd } from '../compo/JsonLd'

export const metadata = caseStudyMetadata('mitreisen')

export default function Page() {
  return (
    <PageLoader page="Mitreisen">
      <CaseStudyJsonLd slug="mitreisen" />
      <CaseStudyPage slug="mitreisen" available={getAvailableShots()} />
    </PageLoader>
  )
}
