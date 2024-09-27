import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import SoudPlayer from '../compo/soud'
import RenderImg from './RenderImg'

export default function Page() {
  return (
    <div className="mx-10 mb-10 rounded-[3rem] border-2 border-[#2A4064] font-work">
      <div className="p-10 flex items-baseline justify-between">
        <Link className="text-5xl font-semibold" href="https://autosshow.vercel.app/">Auto</Link>
        <Link className="p-2 px-10 text-3xl font-semibold rounded-xl shadow-md shadow-blue-500 hover:bg-blue-500/70 animate-pulse" href="https://autosshow.vercel.app/">Visit</Link>
      </div>
      <RenderImg/>
      <div className="p-16">      
        <h1 className="text-5xl font-work">About</h1>
        <div className="p-10 flex justify-around items-center">
          <Image className="" src={"/AutoCard.png"} width={600} height={800} alt="Hours" />
          <div className="ml-8 p-10 rounded-[3rem] bg-[#2A4064] text-white w-[80rem]">
            <h1 className="text-3xl font-medium font-inter">Card</h1>
            <p className="text-xl font-inter font-light text-balance">
            The content passes comprehensive details for to the vehicle, 
            including the car's image, brand logo, brand name, 
            a sort product description (in this context, for the car), 
            model, and pricing. All this data is retrieved directly from Supabase 
            during server-side rendering. Utilizing ".map," all the cards are dynamically 
            generated with information. When user clicks on a card, they will be directed 
            to the specific page of that car.
            </p>
            <h1 className="mt-10 text-3xl font-medium font-inter">Learnings</h1>
            <p className="text-xl font-inter font-light text-balance">
              In next js we use slug to dynamically render the page. 
              So if we have similar type of page layout for every product we can utilize this and dynamically precent that page. 
            </p>
          </div>
        </div>
      </div>
      <div className="p-[6.5rem] flex justify-around items-center">
        <div className="w-1/2">
          <SoudPlayer/>
        </div>
        <div className="ml-8 p-10 rounded-[3rem] bg-[#2A4064] text-white w-[80rem]">
          <h1 className="text-3xl font-medium font-inter">Use Audio</h1>
          <p className="text-xl font-inter font-light text-balance">
            With react we have so many libraries that can help us to execute all idea in reality.
          </p>
          <h1 className="mt-10 text-3xl font-medium font-inter">Learnings</h1>
          <p className="text-xl font-inter font-light text-balance">
          </p>
        </div>
      </div>
      <div className="p-10 flex items-baseline flex-wrap justify-around rounded-b-[3rem] bg-[#2A4064]">
        <h1 className="text-3xl font-medium font-inter text-white">Explore by your own:</h1>
        <Link className="px-10 p-5 rounded-xl shadow-md text-2xl font-work font-semibold bg-white hover:bg-black/70 hover:text-white" href="https://github.com/YUGE0/Autos">Github Repository</Link>
        <Link className="px-10 p-5 rounded-xl shadow-md text-2xl font-work font-semibold bg-white hover:bg-black/70 hover:text-white" href="https://autosshow.vercel.app/">Deployed site</Link>
      </div>
    </div>
  )
}
