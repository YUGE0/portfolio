import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface WorkProps {
  project:string;
  pageurl:string;
  type:string;
  des:string;
  imgurl:string;
}

export default function WorkCom({project,pageurl,type,des,imgurl}:WorkProps) {
  return (
    <Link className="" href={`/${pageurl}`}>
      {type=="widget"?
      <div className="rounded-2xl sm:rounded-[2rem] animate-fade-in shadow-md border border-black/5 hover:shadow-fcolor/50 hover:shadow-lg">
        <Image className="w-full rounded-t-2xl sm:rounded-t-[2rem]" src={imgurl} width={1440} height={720} alt="Ongoing Projects"/>
        <span className="-translate-y-8 sm:-translate-y-14 h-10 sm:h-16 w-full block bg-gradient-to-b from-white/0 via-white to-white"></span>
        <div className="mx-4 sm:mx-10 -mt-6 sm:-mt-10 flex justify-between items-baseline mb-3 sm:mb-5 sm:hover:px-10 border-b-2 border-black gap-2">
          <h4 className="pb-3 sm:pb-5 font-bold uppercase">{project}</h4>
          <svg className="shrink-0 w-8 sm:w-[45px] h-auto" viewBox="0 0 45 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 21L30.2013 21C30.3962 21 30.5868 20.9431 30.7497 20.8362L41.9232 13.5087C43.7296 12.324 43.7296 9.67598 41.9232 8.49133L31.2492 1.49134C30.7604 1.17078 30.1886 1 29.604 1L1 1" stroke="black" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
        <p className="px-4 pb-6 sm:p-10 sm:pt-0 text-base sm:text-xl">{des}</p>
      </div>:
      <div className="rounded-2xl grid lg:grid-cols-2 shadow-md border border-black/10 hover:shadow-fcolor/50 hover:shadow-lg">
        <Image className="w-full rounded-t-2xl lg:rounded-l-2xl" src={imgurl} width={1440} height={720} alt="Ongoing Projects"/>  
        <div className="lg:-translate-x-20 lg:pl-28 pt-4 sm:pt-8 lg:pt-32 bg-gradient-to-r from-white/0 from-0% via-[7%] via-white to-white">
        <div className="mx-4 sm:mx-10 flex justify-between items-baseline mb-3 sm:mb-5 sm:hover:px-10 border-b-2 border-black gap-2">
          <h4 className="pb-3 sm:pb-5 font-bold uppercase">{project}</h4>
          <svg className="shrink-0 w-8 sm:w-[45px] h-auto" viewBox="0 0 45 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 21L30.2013 21C30.3962 21 30.5868 20.9431 30.7497 20.8362L41.9232 13.5087C43.7296 12.324 43.7296 9.67598 41.9232 8.49133L31.2492 1.49134C30.7604 1.17078 30.1886 1 29.604 1L1 1" stroke="black" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
        <p className="px-4 pb-6 sm:p-10 sm:pt-0 text-base sm:text-xl">{des}</p>
        </div>
      </div>
      }  
    </Link>
  )
}
