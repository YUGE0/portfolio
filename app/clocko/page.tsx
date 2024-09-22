//Clocko page
import Image,{ StaticImageData } from 'next/image'
import React from 'react'
import cw from './ClockWhite.png'
import cd from './ClockDark.png'
import ParallaxImage from '../compo/ParallaxImage'
import Link from 'next/link'

export default function Page() {
  return (
    <div>
      <div className="px-10 flex items-baseline justify-between">
        <Link className="text-5xl font-work font-semibold" href="https://cl0cko.vercel.app/">Clocko</Link>
        <Link className="p-2 px-10 text-3xl font-work font-semibold rounded-xl shadow-md shadow-blue-300 hover:bg-blue-500" href="https://cl0cko.vercel.app/">Visit</Link>
      </div>
      <div className="px-10">
       <ParallaxImage src={cw} alt="Clock Light" cap="Light"/>
       <ParallaxImage src={cd} alt="Clock Dark" cap="Dark"/>
      </div>
      <div className="">
        <h1 className="text-5xl font-work">Process</h1>
        <div className="p-10 flex items-center">
          <Image className="p-10" src={"/Hours.png"} width={800} height={500} alt="Hours" />
          <div className="">
            <h1 className="text-3xl font-medium font-inter">Hours</h1>
            <p className="text-xl font-inter font-light">about hour</p>
            <h1 className="text-3xl font-medium font-inter">Seconds</h1>
            <p className="text-xl font-inter font-light">about hour</p>
            <h1 className="text-3xl font-medium font-inter">AM/PM</h1>
            <p className="text-xl font-inter font-light">about hour</p>
          </div>
        </div>
        <div className="p-10 flex">
          <Image className="p-10" src={"/Minutes.png"} width={800} height={500} alt="Hours" />
          <div className="">
            <h1 className="">Minutes</h1>
            <p className="">about hour</p>
            <h1 className="">Day</h1>
            <p className="">about hour</p>
            <h1 className="">Date</h1>
            <p className="">about hour</p>
          </div>
        </div>
        <div className="p-10 flex">
          <Image className="p-10" src={"/City.png"} width={800} height={500} alt="Hours" />
          <div className="p-10">
            <h1 className="">City Name</h1>
            <p className="">about hour</p>
            <h1 className="">Time</h1>
            <p className="">about hour</p>
            <h1 className="">AM/PM</h1>
            <p className="">about hour</p>
          </div>
        </div>
      </div>
      <div className="">
        <h1 className="text-5xl font-work">How</h1>
      </div>
      <div className="">
        <h1 className="text-5xl font-work">Learnt</h1>
      </div>
    </div>
  )
}
