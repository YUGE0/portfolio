import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import ParallaxText from '../compo/ParallaxText'

export default function Page() {
  return (
    <div className="mx-10 mb-10 rounded-[3rem] border-2 border-[#2A4064] font-work">
      <div className="p-10 items-baseline justify-between">
        <Link className="text-5xl font-semibold" href="">Mitreisen</Link>
        <ParallaxText baseVelocity={-3}>This page is in development</ParallaxText>
      </div>
    </div>
  )
}
