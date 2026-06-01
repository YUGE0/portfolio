import React from 'react'
import PageLoader from '../compo/PageLoader'
import ParallaxText from '../compo/ParallaxText'
import Image from 'next/image'

export default function page() {
  return (
    <PageLoader page='Blogs to read' speed={1200}>
      <Image className="w-full" src="/blogp.svg" width={1200} height={0} alt="Ongoing Projects"/>
    <div className="px-3 sm:p-2 md:p-12 mb-6 sm:mb-10 h-[50vh] sm:h-screen flex items-center">
      <ParallaxText baseVelocity={20}>Working</ParallaxText>
    </div>
    </PageLoader>
  )
}

