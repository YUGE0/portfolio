import React from 'react'
import WorkCom from '../compo/work';
import StaggeredFade from '../compo/StaggeredFade';
import Image from 'next/image';
const projects: string[] = ["mitreisen", "clocko","auto"];
const Onprojects: string[] = ["foodHouse"];
export default function page() {
  return (
    <div className="p-2 md:p-12 mb-20">
      <StaggeredFade text="Developing websites with morden technologies."/>
      <Image className="w-full mt-20 sm:w-4/6 md:w-3/6 xl:w-2/6" src="/opbg.svg" width={100} height={0} alt="Ongoing Projects"/>
      {Onprojects.map((project) => (<WorkCom key={project} project={project} />))}
      <Image className="w-full mt-20 sm:w-4/6 md:w-3/6 xl:w-2/6" src="/pbg.svg" width={100} height={0} alt="Projects"/>
      {projects.map((project) => (<WorkCom key={project} project={project} />))}
    </div>
  )
}
