"use client"
import React, { useState } from 'react'
import Image from 'next/image'

export default function RenderImg() {
    const[render,setRender] = useState("Home Page");
    console.log(render);
    
  return (
    <div>
        <div className="mb-10 flex gap-10 justify-around">
          <h1 className="p-1 text-2xl font-inter">Click to check out pages</h1>
            {render==="Home Page"?<h1 className="p-2 text-3xl font-inter font-semibold border-b-2 border-black/50" onClick={()=>{setRender("Home Page")}}>Home Page</h1>:<h1 className="p-2 text-3xl font-inter font-semibold rounded-xl bg-fcolor text-white" onClick={()=>{setRender("Home Page")}}>Home Page</h1>}
            {render==="Destination Page"?<h1 className="p-2 text-3xl font-inter font-semibold border-b-2 border-black/50" onClick={()=>{setRender("Destination Page")}}>Destination Page</h1>:<h1 className="p-2 text-3xl font-inter font-semibold rounded-xl bg-fcolor text-white" onClick={()=>{setRender("Destination Page")}}>Destination Page</h1>}
            {render==="Admin"?<h1 className="p-2 text-3xl font-inter font-semibold border-b-2 border-black/50" onClick={()=>{setRender("Admin")}}>Admin</h1>:<h1 className="p-2 text-3xl font-inter font-semibold rounded-xl bg-fcolor text-white" onClick={()=>{setRender("Admin")}}>Admin</h1>}
            {render==="Booking Pages"?<h1 className="p-2 text-3xl font-inter font-semibold border-b-2 border-black/50" onClick={()=>{setRender("Booking Pages")}}>Booking Pages</h1>:<h1 className="p-2 text-3xl font-inter font-semibold rounded-xl bg-fcolor text-white" onClick={()=>{setRender("Booking Pages")}}>Booking Pages</h1>}
        </div>
        {render==="Home Page"&&
        <div className="flex flex-col place-items-center">
          <Image className="rounded-xl shadow-md" alt="home page" width={1500} height={500} src="/HomePage.png"/>
          <Image className="rounded-xl shadow-md mt-6" alt="home page" width={1500} height={500} src="/HomePage_Flight.png"/>
          <Image className="rounded-xl shadow-md mt-6" alt="home page" width={1500} height={500} src="/HomePage_Train.png"/>
          <Image className="rounded-xl shadow-md mt-6" alt="home page" width={1500} height={500} src="/HomePage_Hotel.png"/>
          <Image className="rounded-xl shadow-md mt-6" alt="home page" width={1500} height={500} src="/LoginPage.png"/>
          <Image className="rounded-xl shadow-md mt-6" alt="home page" width={1500} height={500} src="/SignupPage.png"/>
        </div>}
        {render==="Destination Page"&&
        <div className="flex flex-col place-items-center">
          <Image className="rounded-xl shadow-md" alt="home page" width={1500} height={500} src="/AMDDestPage.png"/>
          <Image className="rounded-xl shadow-md mt-6" alt="home page" width={1500} height={500} src="/TourBook.png"/>
        </div>
        }
        {render==="Admin"&&
        <div className="flex flex-col place-items-center">
          <Image className="rounded-xl shadow-md" alt="home page" width={1500} height={500} src="/AdminSum.png"/>
        </div>}
        {render==="Booking Pages"&&
        <div className="flex flex-col place-items-center">
          <Image className="rounded-xl shadow-md" alt="home page" width={1500} height={500} src="/FlightsPage.png"/>
          <Image className="rounded-xl shadow-md mt-6" alt="home page" width={1500} height={500} src="/FlightsBook.png"/>
          <Image className="rounded-xl shadow-md mt-10" alt="home page" width={1500} height={500} src="/TrainsPage.png"/>
          <Image className="rounded-xl shadow-md mt-6" alt="home page" width={1500} height={500} src="/TrainsBook.png"/>
          <Image className="rounded-xl shadow-md mt-10" alt="home page" width={1500} height={500} src="/HotelsPage.png"/>
          <Image className="rounded-xl shadow-md mt-6" alt="home page" width={1500} height={500} src="/HotelsBook.png"/>
        </div>        
        }
    </div>
  )
}
