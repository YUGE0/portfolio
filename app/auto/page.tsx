import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import SoudPlayer from '../compo/soud'
import RenderImg from './RenderImg'

export default function Page() {
  return (
    <div className="font-work">
      <div className="px-10 flex items-baseline justify-between">
        <Link className="text-5xl font-semibold" href="https://autosshow.vercel.app/">Auto</Link>
        <Link className="p-2 px-10 text-3xl font-semibold rounded-xl shadow-md shadow-blue-500 hover:bg-blue-500/70 animate-pulse" href="https://autosshow.vercel.app/">Visit</Link>
      </div>
      <RenderImg/>
      <div className="p-16">      
        <h1 className="text-5xl font-work">About</h1>
        <div className="p-10 flex justify-around items-center">
          <Image className="" src={"/AutoCard.png"} width={600} height={800} alt="Hours" />
          <div className="ml-8 p-10 rounded-[3rem] bg-[#2A4064] text-white w-[80rem]">
            <h1 className="mt-10 text-3xl font-medium font-inter">Card</h1>
            <p className="text-xl font-inter font-light text-balance">
              It displayes all the information about the car like: Car Image,Brand Logo, Brand Name,
              Brif description about the product(for this about car), Model Name and Price.
              All this information is directly fetched from supabase at time of server side rendering.
            </p>
            <h1 className="mt-10 text-3xl font-medium font-inter">Learnings</h1>
            <p className="text-xl font-inter font-light text-balance">
            </p>
          </div>
        </div>
      </div>
      <div className="p-[6.5rem] flex justify-around items-center">
        <div className="w-1/2">
          <SoudPlayer/>
        </div>
        <div className="ml-8 p-10 rounded-[3rem] bg-[#2A4064] text-white w-[80rem]">
          <h1 className="mt-10 text-3xl font-medium font-inter">Use Audio</h1>
          <p className="text-xl font-inter font-light text-balance">
            With react we have so many libraries that can help us to execute all idea in reality.
          </p>
          <h1 className="mt-10 text-3xl font-medium font-inter">Learnings</h1>
          <p className="text-xl font-inter font-light text-balance">
          </p>
        </div>
      </div>
      <div className="m-16 flex flex-wrap justify-around">
        <Link className="px-10 p-5 rounded-xl shadow-lg shadow-black text-2xl font-work font-semibold hover:bg-black/70 hover:text-white" href="https://github.com/YUGE0/Autos">Github Repository</Link>
        <Link className="px-10 p-5 rounded-xl shadow-lg shadow-black text-2xl font-work font-semibold hover:bg-blue-800/80 hover:text-white" href="https://autosshow.vercel.app/">Deployed site</Link>
      </div>
    </div>
  )
}
