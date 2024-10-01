"use client"
import React, { useState } from 'react'
import Image from 'next/image'

export default function RenderImg() {
    const[render,setRender] = useState("Home Page");
    console.log(render);
    
  return (
    <div>
        <div className="flex gap-10 justify-around">
          <h1 className="p-1 text-2xl font-inter">Click to check out pages</h1>
            {render==="Home Page"?<h1 className="p-1 text-3xl font-inter font-semibold border-b-2 border-black/50" onClick={()=>{setRender("Home Page")}}>Home Page</h1>:<h1 className="p-2 text-3xl font-inter font-semibold rounded-xl bg-fcolor text-white" onClick={()=>{setRender("Home Page")}}>Home Page</h1>}
            {render==="GT3RS"?<h1 className="p-1 text-3xl font-inter font-semibold border-b-2 border-black/50" onClick={()=>{setRender("GT3RS")}}>GT3RS</h1>:<h1 className="p-2 text-3xl font-inter font-semibold rounded-xl bg-fcolor text-white" onClick={()=>{setRender("GT3RS")}}>GT3RS</h1>}
            {render==="Revuelto"?<h1 className="p-1 text-3xl font-inter font-semibold border-b-2 border-black/50" onClick={()=>{setRender("Revuelto")}}>Revuelto</h1>:<h1 className="p-2 text-3xl font-inter font-semibold rounded-xl bg-fcolor text-white" onClick={()=>{setRender("Revuelto")}}>Revuelto</h1>}
        </div>
        {render==="Home Page"&&
        <div className="flex flex-col place-items-center">
        <Image className="rounded-xl shadow-md" alt="home page" width={1500} height={500} src="/AutoHomePage.png"/>
        </div>}
        {render==="GT3RS"&&
        <div className="flex flex-col place-items-center">
            <Image alt="GT3RS" width={1500} height={500} src="/AutoGT3RSUP.png"/>
            <div className="px-[1%] 2xl:px-[8%]  overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">
              <div className="inline-block">
                <Image alt="GT3RS Aero" width={1500} height={500} src="/AutoGT3RSAero.png"/>
              </div>
              <div className="inline-block">
                <Image alt="GT3RS Aero" width={1500} height={500} src="/AutoGT3RSPer.png"/>
              </div>
              <div className="inline-block">
                <Image alt="GT3RS Aero" width={1500} height={500} src="/AutoGT3RSCon.png"/>
              </div>
            </div>
            <Image className="rounded-b-xl" alt="GT3RS" width={1500} height={500} src="/AutoGT3RSDown.png"/>
        </div>
        }
        {render==="Revuelto"&&
        <div className="flex flex-col place-items-center">           
            <Image className="rounded-xl shadow-md" alt="home page" width={1500} height={500} src="/AutoRevuelto.png"/>
            <p className="text-3xl font-inter font-normal text-left">
              Some of the model has the sound feature with help of it you can hear the sound of the engine.
            </p>
        </div>}
    </div>
  )
}
