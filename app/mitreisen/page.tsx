import Link from 'next/link'
import React from 'react'
import RenderImg from './RenderImg'

export default function Page() {
  return (
    <div className="mx-1 md:mx-10 mb-10 rounded-[3rem] border-2 border-b-0 border-[#2A4064] font-work">
      <div className="p-10 flex items-baseline justify-between">
        <Link className="text-5xl font-semibold" href="">Mitreisen</Link>
      </div>
      <p className="p-4 md:p-10 text-2xl font-medium">
      </p>
      <RenderImg/>
      <div className="md:p-16">
        <div className="mt-10 p-10 rounded-[2rem] bg-[#2A4064] text-white w-full">
          <h1 className="text-3xl font-medium font-inter">More</h1>
          <p className="text-xl font-inter font-light text-balance">
          </p>
          <h1 className="mt-10 text-3xl font-medium font-inter">Learnings</h1>
          <p className="text-xl font-inter font-light text-balance">
          </p>
        </div>
      </div>
      <div className="mt-10 p-10 flex items-baseline flex-wrap justify-around rounded-b-[3rem] bg-[#2A4064]">
        <h1 className="pb-4 text-3xl font-medium font-inter text-white">Explore by your own:</h1>
        <div className="flex flex-wrap gap-10">
          <Link className="px-10 p-5 rounded-xl shadow-md text-lg font-work font-semibold bg-white hover:bg-black/70 hover:text-white" href="https://github.com/YUGE0/Mitreisen">Github Repository</Link>
        </div>
      </div>
    </div>
  )
}
