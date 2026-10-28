import CaseStudyPage from '../compo/CaseStudyPage'
import { getAvailableShots } from '../compo/caseStudyAssets'
import PageLoader from '../compo/PageLoader'
import { caseStudyMetadata } from '../compo/caseStudyMeta'
import { CaseStudyJsonLd } from '../compo/JsonLd'

export const metadata = caseStudyMetadata('foodHouse')

export default function Page() {
  return (
    <PageLoader page="Food House">
      <CaseStudyJsonLd slug="foodHouse" />
      <CaseStudyPage slug="foodHouse" available={getAvailableShots()} />
    </PageLoader>
  )
}
