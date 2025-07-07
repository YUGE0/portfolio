"use client"
import React, { useState } from 'react'
import Image from 'next/image'

export default function RenderImg() {
    const[render,setRender] = useState("Home Page");
    console.log(render);
    
  return (
    <div>
        <div className="flex flex-wrap gap-3 md:gap-10 justify-around">
            {render==="Home Page" ? <Image className="w-1/6" src="/homeautoh.svg" width={100} height={0} onClick={()=>{setRender("Home Page")}} alt="home"/> : <Image className="w-1/6" src="/homeauto.svg" width={100} height={0} onClick={()=>{setRender("Home Page")}} alt="home"/>}
            {render==="GT3RS" ? <Image className="w-1/6" src="/gt3rsh.svg" width={100} height={0} onClick={()=>{setRender("GT3RS")}} alt="GT3RS"/> : <Image className="w-1/6" src="/gt3rs.svg" width={100} height={0} onClick={()=>{setRender("GT3RS")}} alt="GT3RS"/>}
            {render==="Revuelto" ? <Image className="w-1/6" src="/revueltoh.svg" width={100} height={0} onClick={()=>{setRender("Revuelto")}} alt="Revuelto"/> : <Image className="w-1/6" src="/revuelto.svg" width={100} height={0} onClick={()=>{setRender("Revuelto")}} alt="Revuelto"/>}
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
            <p className="text-md font-inter font-normal text-left">
              Some of the model has the sound feature with help of it you can hear the sound of the engine.
            </p>
        </div>}
    </div>
  )
}
