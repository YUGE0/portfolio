import Link from 'next/link'
import React from 'react'

export default function Nav() {
  return (
    <div className="p-4 md:p-10 flex flex-wrap lg:flex-nowrap justify-between items-center">
        <h1 className="text-6xl font-work font-bold uppercase">Yug Prajapati</h1>
        <Link className="text-xl lg:text-3xl font-inter font-semibold hover:border-b-4 hover:border-fcolor uppercase" href="/work">Work</Link>
    </div>
  )
}
