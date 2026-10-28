import { caseStudies } from './caseStudies'
import { getAvailableShots } from './caseStudyAssets'
import { FIGMA_URL, GITHUB_URL, JOB_TITLE, LINKEDIN_URL, PERSON_ID, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '../site'

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  )
}

export function PersonJsonLd() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Person',
            '@id': PERSON_ID,
            name: SITE_NAME,
            url: SITE_URL,
            jobTitle: JOB_TITLE,
            description: SITE_DESCRIPTION,
            knowsAbout: [
              'React',
              'Next.js',
              'TypeScript',
              'Tailwind CSS',
              'Supabase',
              'Frontend Development',
              'Web Application Development',
            ],
            homeLocation: { '@type': 'Place', name: 'Ahmedabad, Gujarat, India' },
            sameAs: [GITHUB_URL, LINKEDIN_URL, FIGMA_URL],
          },
          {
            '@type': 'WebSite',
            '@id': `${SITE_URL}/#website`,
            url: SITE_URL,
            name: SITE_NAME,
            author: { '@id': PERSON_ID },
          },
        ],
      }}
    />
  )
}

export function CaseStudyJsonLd({ slug }: { slug: string }) {
  const study = caseStudies.find((item) => item.slug === slug)
  if (!study) return null
  const hasHeroImage = getAvailableShots().includes(study.hero.src)
  const externalLinks = study.links.map((link) => link.href)

  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        name: study.name,
        headline: `${study.name}: ${study.tagline}`,
        description: study.summary,
        url: `${SITE_URL}/${study.slug}`,
        ...(hasHeroImage && { image: `${SITE_URL}${study.hero.src}` }),
        genre: study.category,
        keywords: study.stack.join(', '),
        creator: { '@id': PERSON_ID },
        ...(externalLinks.length > 0 && { sameAs: externalLinks }),
      }}
    />
  )
}
