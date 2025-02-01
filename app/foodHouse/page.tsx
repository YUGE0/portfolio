import React from 'react'
import ParallaxText from '../compo/ParallaxText'
import Image from 'next/image'

export default function Page() {
  return (
    <div className="h-screen text-fcolor content-center">
        <ParallaxText baseVelocity={10}>FOOD HOUSE</ParallaxText>
        <ParallaxText baseVelocity={8}>Working</ParallaxText>
        <ParallaxText baseVelocity={-3}>Wait for it</ParallaxText>
    </div>
  )
}
