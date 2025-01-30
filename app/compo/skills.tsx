import Image from 'next/image'
import React from 'react'

export default function Skills(prop:{skill:string}) {
  return (
    <div className="w-fit m-2 p-2 px-4 shadow-md shadow-fcolor/30 rounded-2xl flex justify-around items-center">
        <h1 className="text-3xl font-semibold uppercase mr-4 p-2">{prop.skill}</h1>
        <Image alt={prop.skill} width={40} height={40} src={`/${prop.skill}.svg`}/>
    </div>
  )
}
