import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import SoudPlayer from '../compo/soud'
import RenderImg from './RenderImg'

export default function Page() {
  return (
    <div className="mx-1 md:mx-10 mb-10 rounded-[3rem] border-2 border-[#2A4064] font-work">
      <div className="p-10 flex items-center justify-between">
        <Link className="text-3xl md:text-6xl font-semibold" href="https://autosshow.vercel.app/">Auto</Link>
        <Link className="p-2 px-10 text-xl md:text-3xl font-work font-semibold rounded-xl bg-fcolor/90 text-white shadow-md hover:bg-white hover:shadow-fcolor hover:text-fcolor" href="https://autosshow.vercel.app/">Visit</Link>
      </div>
      <p className="p-4 md:p-10 text-xl md:text-2xl font-medium">
      Next.js is a framework for developing React.js applications. 
      It performs server-side rendering to make websites load faster. 
      With server-side actions, we can perform backend tasks. Since it&#39;s a framework, 
      we need to follow a set of rules to develop any application. During the development of this application, 
      I took the challenge to learn both TypeScript and Nextjs at the same time. That seems easy. In simple terms, 
      TypeScript provides type safety to offer additional protection to our application. 
      With Next.js, a new realm of modern development opens up. 
      Just keep in mind that there is a structure to follow and many new features like server-side rendering,
      &quot;use client&quot; to perform user interaction, dynamic paths, and many more to explore.
      </p>
      <RenderImg/>
      <div className="md:p-16">      
        <h1 className="mt-2 p-4 text-2xl md:text-5xl font-work font-semibold">About</h1>
        <div className="flex flex-wrap 2xl:flex-nowrap justify-around items-center">
          <Image className="md:w-1/2 md:p-10" src={"/AutoCard.png"} width={500} height={800} alt="Hours" />
          <div className="p-10 rounded-[3rem] bg-[#2A4064] text-white w-[80rem]">
            <h1 className="text-3xl font-medium font-inter">Card</h1>
            <p className="text-md md:text-xl font-inter font-light text-balance">
            It provides detailed information about the vehicle, 
            including the car&#39;s image, brand logo, brand name, 
            a brief product description (in this case, for the car), model, and pricing. 
            All this data is fetched directly from Supabase during server-side rendering. 
            Using .map, all the cards are dynamically generated with information. 
            When a user clicks on a card, they will be directed to the specific page for that car.
            </p>
            <h1 className="mt-10 text-3xl font-medium font-inter">Learnings</h1>
            <p className="text-md md:text-xl font-inter font-light text-balance">
            In Next.js, we use a slug to dynamically render the page. 
            So, if we have a similar type of page layout for every product, 
            we can utilize this and dynamically present that page. 
            This way of presenting a product can help users to get necessary information, 
            and if they want to know more, they can go to the page. 
            </p>
          </div>
        </div>
      </div>
      <div className="md:p-16 flex flex-wrap 2xl:flex-nowrap justify-around items-center">
        <div className="p-10 md:w-1/2">
          <SoudPlayer/>
          <p className="text-xl font-inter font-normal text-center">Click Here</p>
        </div>
        <div className="p-10 rounded-[3rem] bg-[#2A4064] text-white w-[80rem]">
          <h1 className="text-3xl font-medium font-inter">Use Audio</h1>
          <p className="text-md md:text-xl font-inter font-light text-balance">
          With React, we have access to various libraries that can help us accomplish more complex tasks in a simpler way. 
          For example, users can listen to the sound of a car, which enhances their overall experience. 
          Implementing this is quite simple - we just need to add use-sound, 
          which will allow us to add or use the audio with a specified URL. 
          By using state, we can enable users to play and pause actions.
          </p>
          <h1 className="mt-10 text-3xl font-medium font-inter">Learnings</h1>
          <p className="text-md md:text-xl font-inter font-light text-balance">
          This was a new challenge for me because I had never worked with audio for any website. 
          It was exciting to implement this, including features like this can enhance the user 
          experience and make your website stand out.
          </p>
        </div>
      </div>
      <div className="mt-10 p-10 flex items-baseline flex-wrap justify-around rounded-b-[3rem] bg-[#2A4064]">
        <h1 className="pb-4 text-3xl font-medium font-inter text-white">Explore by your own:</h1>
        <div className="flex flex-wrap gap-10">
          <Link className="px-10 p-5 rounded-xl shadow-md text-lg font-work font-semibold bg-white hover:bg-black/70 hover:text-white" href="https://github.com/YUGE0/Autos">Github Repository</Link>
          <Link className="px-10 p-5 rounded-xl shadow-md text-lg font-work font-semibold bg-white hover:bg-black/70 hover:text-white" href="https://autosshow.vercel.app/">Deployed site</Link>
        </div>
      </div>
    </div>
  )
}
