import { existsSync } from 'node:fs'
import path from 'node:path'
import { caseStudies } from './caseStudies'

export function getAvailableShots() {
  const sources = new Set<string>()
  for (const study of caseStudies) {
    sources.add(study.hero.src)
    study.gallery?.forEach((group) => group.shots.forEach((item) => sources.add(item.src)))
    study.features.forEach((feature) => feature.shot && sources.add(feature.shot.src))
  }
  return [...sources].filter((src) => existsSync(path.join(process.cwd(), 'public', src)))
}
