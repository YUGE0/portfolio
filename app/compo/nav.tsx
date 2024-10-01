import Link from 'next/link'
import React from 'react'

export default function Nav() {
  return (
    <div className="p-5 flex justify-around">
        <h1 className="text-5xl font-work font-bold uppercase">Yug Prajapati</h1>
        <div className="px-10 flex flex-wrap gap-2">
          <Link className="px-2 text-3xl font-inter font-semibold hover:border-b-4 hover:border-fcolor uppercase" href="/work">Work</Link>
          <Link className="px-2 text-3xl font-inter font-semibold hover:border-b-4 hover:border-fcolor uppercase" href={""}>Contact</Link>
        </div>
    </div>
  )
}
