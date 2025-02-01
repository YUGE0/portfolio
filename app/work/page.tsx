import React from 'react'
import WorkCom from '../compo/work';
import StaggeredFade from '../compo/StaggeredFade';
const projects: string[] = ["mitreisen", "clocko","auto"];
const Onprojects: string[] = ["foodHouse"];
const index = 1
export default function page() {
  return (
    <div className="p-2 md:p-12 mb-10">
      <StaggeredFade text="Developing websites with morden technologies."/>
      <h1 className="mx-6 rounded-xl border border-fcolor shadow-black shadow-md bg-fcolor text-white p-2 md:px-20 px-10 text-3xl md:text-5xl font-work font-semibold">Ongoing Projects</h1>
      {Onprojects.map((project) => (<WorkCom key={index} project={project} />))}
      <h1 className="mx-6 rounded-xl border border-fcolor shadow-black shadow-md bg-fcolor text-white p-2 md:px-20 px-10 text-3xl md:text-5xl font-work font-semibold">Projects</h1>
      {projects.map((project) => (<WorkCom key={index} project={project} />))}
    </div>
  )
}
