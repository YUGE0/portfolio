import type { Metadata } from 'next'

export const SITE_URL = 'https://yugprajapati.space'
export const SITE_NAME = 'Yug Prajapati'
export const JOB_TITLE = 'Frontend Developer'
export const SITE_DESCRIPTION =
  'Yug Prajapati is a frontend developer based in Ahmedabad, India, building modern web applications with React, Next.js, TypeScript and Tailwind CSS.'

export const EMAIL = 'yugprajapati32@gmail.com'
export const LINKEDIN_URL = 'https://www.linkedin.com/in/yug-prajapati-70524926b/'
export const GITHUB_URL = 'https://github.com/YUGE0'
export const FIGMA_URL = 'https://www.figma.com/@_yug'

export const PERSON_ID = `${SITE_URL}/#person`

export const DEFAULT_TITLE = `${SITE_NAME} | ${JOB_TITLE}`

const OG_IMAGE = { url: '/opengraph-image', width: 1200, height: 630, alt: DEFAULT_TITLE }

type PageMeta = {
  path: string
  title?: string
  description?: string
  ogType?: 'website' | 'article'
}

// Nested metadata objects replace the parent's instead of merging, so each page gets the full set.
export function pageMetadata({ path, title, description = SITE_DESCRIPTION, ogType = 'website' }: PageMeta): Metadata {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE
  return {
    ...(title && { title }),
    description,
    alternates: { canonical: path },
    openGraph: {
      type: ogType,
      locale: 'en_IN',
      siteName: SITE_NAME,
      url: path,
      title: fullTitle,
      description,
      images: [OG_IMAGE],
    },
    twitter: { card: 'summary_large_image', title: fullTitle, description, images: [OG_IMAGE.url] },
  }
}
