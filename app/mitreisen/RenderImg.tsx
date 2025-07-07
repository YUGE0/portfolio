"use client"
import React, { useState } from 'react'
import Image from 'next/image'

export default function RenderImg() {
    const[render,setRender] = useState("Home Page");
    //console.log(render);
    
  return (
    <div>
        <div className="mb-5 flex gap-3 lg:gap-10 justify-around">
            {render==="Home Page" ? <Image className="w-1/6" src="/homeh.svg" width={100} height={0} onClick={()=>{setRender("Home Page")}} alt="home"/> : <Image className="w-1/6" src="/home.svg" width={100} height={0} onClick={()=>{setRender("Home Page")}} alt="home"/>}
            {render==="Destination Page" ? <Image className="w-1/6" src="/destinationh.svg" width={100} height={0} onClick={()=>{setRender("Destination Page")}} alt="destination"/> : <Image className="w-1/6" src="/destination.svg" width={100} height={0} onClick={()=>{setRender("Destination Page")}} alt="destination"/>}
            {render==="Admin" ? <Image className="w-1/6" src="/adminh.svg" width={100} height={0} onClick={()=>{setRender("Admin")}} alt="admin"/> : <Image className="w-1/6" src="/admin.svg" width={100} height={0} onClick={()=>{setRender("Admin")}} alt="admin"/>}
            {render==="Booking Pages" ? <Image className="w-1/6" src="/bookingh.svg" width={100} height={0} onClick={()=>{setRender("Booking Pages")}} alt="Booking Pages"/> : <Image className="w-1/6" src="/booking.svg" width={100} height={0} onClick={()=>{setRender("Booking Pages")}} alt="Booking Pages"/>}
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
