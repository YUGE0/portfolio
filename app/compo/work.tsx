import Link from 'next/link'
import React from 'react'

export default function Work(prop:{project:string}) {
  return (
    <Link href={`/${prop.project}`} className="flex justify-between items-center m-20 hover:px-10 border-b-2 border-black">
        <h1 className="text-5xl p-2 font-bold uppercase">{prop.project}</h1>
        <svg width="45" height="22" viewBox="0 0 45 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 21L30.2013 21C30.3962 21 30.5868 20.9431 30.7497 20.8362L41.9232 13.5087C43.7296 12.324 43.7296 9.67598 41.9232 8.49133L31.2492 1.49134C30.7604 1.17078 30.1886 1 29.604 1L1 1" stroke="black" stroke-width="2" stroke-linecap="round"/>
        </svg>
    </Link>
  )
}
