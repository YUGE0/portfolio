import type { Metadata } from 'next'
import { caseStudies } from './caseStudies'
import { pageMetadata } from '../site'

export function caseStudyMetadata(slug: string): Metadata {
  const study = caseStudies.find((item) => item.slug === slug)
  if (!study) throw new Error(`Unknown case study: ${slug}`)

  return pageMetadata({
    path: `/${study.slug}`,
    title: `${study.name} Case Study`,
    description: `${study.tagline} Built with ${study.stack.slice(0, 4).join(', ')}.`,
    ogType: 'article',
  })
}
