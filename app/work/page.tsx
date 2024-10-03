import React from 'react'
import WorkCom from '../compo/work';
const projects: string[] = ["mitreisen", "clocko"];
const Onprojects: string[] = ["auto"];
const index = 1
export default function page() {
  return (
    <div className="p-2 md:p-12 mb-10">
      <h1 className="md:p-10 px-6 font-work font-semibold text-5xl md:text-8xl mb-20">Developing websites with morden technologies.</h1>
      <h1 className="md:px-20 px-10 text-3xl md:text-5xl font-work font-light-">Ongoing Projects</h1>
      {Onprojects.map((project) => (<WorkCom key={index} project={project} />))}
      <h1 className="md:px-20 px-10 text-3xl md:text-5xl font-work font-light-">Projects</h1>
      {projects.map((project) => (<WorkCom key={index} project={project} />))}
    </div>
  )
}
