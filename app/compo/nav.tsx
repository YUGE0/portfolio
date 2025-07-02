import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export default function Nav() {
  return (
    <div className="p-4 md:p-10 flex flex-wrap lg:flex-nowrap justify-between items-center">
        <Link href={"/"}>
        <h1 className="uppercase">Yug Prajapati</h1>
        </Link>
        <div className="mt-5 sm:mt-0 flex gap-5">
        <Link className="w-full sm:w-4/6 md:w-3/6 xl:w-2/6" href="/work"><Image src="/work.svg" width={160} height={0} alt="My Work"/></Link>
        <Link className="w-full sm:w-4/6 md:w-3/6 xl:w-2/6" href="/about"><Image src="/about.svg" width={160} height={0} alt="My Work"/></Link>
        <Link className="w-full sm:w-4/6 md:w-3/6 xl:w-2/6" href="/blogs"><Image src="/blogs.svg" width={160} height={0} alt="My Work"/></Link>
        {/* <Link className="text-xl lg:text-3xl font-inter font-semibold border-b-2 border-fcolor uppercase" href="/work">Work</Link>
        <Link className="text-xl lg:text-3xl font-inter font-semibold border-b-2 border-fcolor uppercase" href="/about">About</Link> */}
        </div>
    </div>
  )
}
