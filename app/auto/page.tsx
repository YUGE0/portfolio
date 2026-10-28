import CaseStudyPage from '../compo/CaseStudyPage'
import { getAvailableShots } from '../compo/caseStudyAssets'
import PageLoader from '../compo/PageLoader'
import { caseStudyMetadata } from '../compo/caseStudyMeta'
import { CaseStudyJsonLd } from '../compo/JsonLd'

export const metadata = caseStudyMetadata('auto')

export default function Page() {
  return (
    <PageLoader page="Autos">
      <CaseStudyJsonLd slug="auto" />
      <CaseStudyPage slug="auto" available={getAvailableShots()} />
    </PageLoader>
  )
}
