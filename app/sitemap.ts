import type { MetadataRoute } from 'next'
import { caseStudyRoutes } from './compo/caseStudies'
import { SITE_URL } from './site'

// Only indexable pages belong here; /blogs stays out while it is noindex.
const routes = ['', '/work', '/about', '/contact', ...caseStudyRoutes]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({ url: `${SITE_URL}${route}` }))
}
