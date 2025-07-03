import React from 'react'
import PageLoader from '../compo/PageLoader'
import ParallaxText from '../compo/ParallaxText'

export default function page() {
  return (
    <PageLoader page='Blogs to read' speed={1200}>
    <div className="p-2 md:p-12 mb-10 h-screen flex items-center">
      <ParallaxText baseVelocity={20}>Working</ParallaxText>
    </div>
    </PageLoader>
  )
}

