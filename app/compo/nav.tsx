import Link from 'next/link'
import React from 'react'

export default function Nav() {
  return (
    <div className="p-5 flex justify-between">
        <h1 className="text-5xl font-work font-bold uppercase">Yug Prajapati</h1>
        <div className="px-10 space-x-20">
            <Link className="text-3xl font-inter font-semibold hover:border-b-2 hover:border-black uppercase" href={""}>Work</Link>
            <Link className="text-3xl font-inter font-semibold hover:border-b-2 hover:border-black uppercase" href={""}>Contact</Link>
        </div>
    </div>
  )
}
