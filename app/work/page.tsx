import React from 'react'
import WorkCom from '../compo/work';
import StaggeredFade from '../compo/StaggeredFade';
import Image from 'next/image';
import PageLoader from '../compo/PageLoader';

interface WorkProps {
  project:string;
  pageurl:string;
  type:string;
  des:string;
  imgurl:string;
}

const projects: WorkProps[] = [
  {
    project: "Clocko",
    type: "",
    pageurl:"clocko",
    des: "A dynamic world clock web app showing real-time timezones across cities with smooth transitions, built using React and TailwindCSS.",
    imgurl: "/ClockoApp.webp",
  },
  {
    project: "Mitreisen",
    type: "",
    pageurl:"mitreisen",
    des: "A multi-modal travel booking system created during my internship, allowing users to search and book flights, hotels, and tours seamlessly.",
    imgurl: "/MitreisenApp.webp",
  },
  {
    project: "Auto",
    type: "",
    pageurl:"auto",
    des: "A dynamic car showcase platform built with Next.js, featuring individual car pages rendered dynamically and an immersive car engine sound playback feature.",
    imgurl: "/AutosApp.webp",
  },
];

const Onprojects: WorkProps[] = [
  {
    project: "Food House",
    type: "",
    pageurl:"foodHouse",
    des: "It is a sleek food ordering web app powered by Next.js, offering dynamic menu browsing, seamless cart management, and a robust admin panel for order and item control.",
    imgurl: "/FoodhouseApp.webp",
  }
];
export default function page() {
  return (
    <PageLoader page='My Work' speed={1200}>
      <Image className="w-full" src="/workp.svg" width={1200} height={0} alt="Ongoing Projects"/>
    <div className="p-2 md:p-12 mb-20">
      <StaggeredFade text="Developing websites with morden technologies."/>
      <Image className="w-full my-10 sm:w-4/6 md:w-3/6 xl:w-2/6" src="/opbg.svg" width={100} height={0} alt="Ongoing Projects"/>
      {Onprojects.map((project) => (<WorkCom key={project.project} {...project} />))}
      <Image className="w-full my-10 sm:w-4/6 md:w-3/6 xl:w-2/6" src="/pbg.svg" width={100} height={0} alt="Projects"/>
      <div className="grid gap-10">
        {projects.map((project) => (<WorkCom key={project.project} {...project} />))}
      </div>
    </div>
    </PageLoader>
  )
}
