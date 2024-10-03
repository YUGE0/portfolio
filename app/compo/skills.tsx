import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Skills(prop:{skill:string}) {
  return (
    <div className="w-64 flex justify-between items-baseline">
        <h1 className="text-5xl pb-10 font-normal uppercase mr-4">{prop.skill}</h1>
        <Image alt={prop.skill} width={40} height={40} src={`/${prop.skill}.svg`}/>
    </div>
  )
}
