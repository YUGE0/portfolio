import PageLoader from '../compo/PageLoader'
import WorkShowcase from '../compo/WorkShowcase'

export default function page() {
  return (
    <PageLoader page="My Work" speed={1200}>
      <WorkShowcase />
    </PageLoader>
  )
}
