import React from 'react'
import PageLoader from '../compo/PageLoader'
import ParallaxText from '../compo/ParallaxText'
import Image from 'next/image'
import WorkCom from '../compo/work';
import Link from 'next/link';

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
    type: "widget",
    pageurl:"clocko",
    des: "A dynamic world clock web app showing real-time timezones across cities with smooth transitions, built using React and TailwindCSS.",
    imgurl: "/ClockoApp.webp",
  },
  {
    project: "Mitreisen",
    type: "widget",
    pageurl:"mitreisen",
    des: "A multi-modal travel booking system created during my internship, allowing users to search and book flights, hotels, and tours seamlessly.",
    imgurl: "/MitreisenApp.webp",
  },
  {
    project: "Auto",
    type: "widget",
    pageurl:"auto",
    des: "A dynamic car showcase platform built with Next.js, featuring individual car pages rendered dynamically and an immersive car engine sound playback feature.",
    imgurl: "/AutosApp.webp",
  },
];

export default function page() {
  return (
    <PageLoader page='About me' speed={1200}>
      <Image className="w-full" src="/aboutmep.svg" width={1200} height={0} alt="Ongoing Projects"/>
      <div className="lg:p-10 grid lg:grid-cols-3 gap-10">
        <div className="grid lg:grid-rows-3 place-items-start gap-10">
          <div className="border p-5 lg:p-10 bg-fcolor lg:rounded-5xl border-fcolor text-white text-2xl font-work font-normal">Greetings, my name is Yug. I would like to provide a brief introduction. I am a frontend developer with substantial experience in working with technologies like React and Next.js. My passion lies in creating meticulously crafted designs utilizing Tailwind CSS. I am committed to continuous improvement and skill development in my field. At present, I am working on the Food House project.</div>
          <div className="row-span-2 lg:rounded-5xl lg:shadow-md lg:shadow-fcolor text-2xl font-inter">
            <h5 className="text-4xl pt-5 px-5 lg:px-10 text-start font-inter font-semibold">Key Skills I Contribute</h5>
            <h5 className="text-4xl py-5 px-5 lg:px-10 text-start font-work font-light">My Development Toolbox</h5>
            <div className="grid grid-cols-3 place-content-center justify-items-center gap-10 py-2">
              <span className="text-center text-transparent hover:text-fcolor w-1/2"><Image className="" src="/figmaSkill.svg" width={800} height={0} alt="figma"/><p>Figma</p></span>
              <span className="text-center text-transparent hover:text-fcolor w-1/2"><Image className="" src="/reactSkill.svg" width={800} height={0} alt="react"/><p>ReactJS</p></span>
              <span className="text-center text-transparent hover:text-fcolor w-1/2"><Image className="" src="/nextjsSkill.svg" width={800} height={0} alt="next"/><p>NextJS</p></span>
              <span className="text-center text-transparent hover:text-fcolor w-1/2"><Image className="" src="/vercelSkill.svg" width={800} height={0} alt="vercel"/><p>Vercel</p></span>
              <span className="text-center text-transparent hover:text-fcolor w-1/2"><Image className="" src="/vitejsSkill.svg" width={800} height={0} alt="vite"/><p>ViteJS</p></span>
              <span className="text-center text-transparent hover:text-fcolor w-1/2"><Image className="" src="/tailwindcssSkill.svg" width={800} height={0} alt="tailwind"/><p>TailwindCSS</p></span>
              <span className="text-center text-transparent hover:text-fcolor w-1/2"><Image className="" src="/jsSkill.svg" width={800} height={0} alt="js"/><p>JavaScript</p></span>
              <span className="text-center text-transparent hover:text-fcolor w-1/2"><Image className="" src="/tsSkill.svg" width={800} height={0} alt="ts"/><p>TypeScript</p></span>
              <span className="text-center text-transparent hover:text-fcolor w-1/2"><Image className="" src="/supabaseSkill.svg" width={800} height={0} alt="supabase"/><p>Supabase</p></span>
              <span className="text-center text-transparent hover:text-fcolor w-1/2"><Image className="" src="/mongodbSkill.svg" width={800} height={0} alt="mongo"/><p>MongoDB</p></span>
              <span className="text-center text-transparent hover:text-fcolor w-1/2"><Image className="" src="/githubSkill.svg" width={800} height={0} alt="github"/><p>Github</p></span>
              <span className="text-center text-transparent hover:text-fcolor w-1/2"><Image className="" src="/nodejsSkill.svg" width={800} height={0} alt="node"/><p>NodeJS</p></span>
            </div>
            <h5 className="text-4xl pb-3 px-5 lg:px-10 text-start font-work font-light">Linguistic Toolbox</h5>
            <div className="grid grid-cols-2 pb-5 justify-items-center">
              <span className="flex rounded-2xl w-fit gap-5 p-3 items-center"><Image className="w-12" src="/US.svg" width={800} height={0} alt="English"/><p className="text-3xl font-open font-bold">English</p></span>
              <span className="flex rounded-2xl w-fit gap-5 p-3 items-center"><Image className="w-12" src="/DE.svg" width={800} height={0} alt="Deutsch"/><p className="text-3xl font-open font-bold">Deutsch</p></span>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 space-y-10">
          <div className="p-5 lg:p-10 text-xl font-work lg:rounded-5xl shadow-md shadow-fcolor"><h3 className='pb-2'>Building from the ground up</h3>I have had the privilege of collaborating with small and emerging startups, which has provided a robust foundation for my personal and professional development. At my initial organization, my dedication and performance were duly recognized, enabling me to accomplish significant milestones early in my career. I am particularly grateful to the mentors who dedicated their time to assist me in cultivating strong technical skills. Building upon that experience, I was honored to receive the Employee of the Month award during my first month at my subsequent company. By leveraging the knowledge I had acquired, I was able to make meaningful contributions through efficient and high-impact work. However, I ultimately decided to pursue other opportunities, as I hold a strong belief in the importance of working in environments where efforts are genuinely acknowledged and valued an aspect that I found to be lacking in that role.</div>
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 lg:rounded-5xl grid grid-rows-3 gap-10">
              <div className="grid lg:grid-cols-3 gap-10 row-span-2">
                <div className="w-screen lg:w-full relative lg:col-span-2 rounded-5xl">
                  <div className="text-fcolor blur-sm overflow-hidden pt-10">
                    <ParallaxText baseVelocity={10}>Design</ParallaxText>
                    <ParallaxText baseVelocity={10}>Develope</ParallaxText>
                  </div>
                  <Image className="hidden lg:block absolute top-0 w-full h-full object-contain p-10 rounded-5xl" src="/ProfileT.webp" width={800} height={800} alt="profile"/>
                </div>
                <div className="p-10 bg-fcolor lg:rounded-5xl grid grid-cols-2 lg:grid-cols-1 gap-3 place-items-center">
                  <Link href="/" className="text-transparent hover:text-white">
                    <Image className="" src="/portfolioweb.svg" width={800} height={0} alt="profile"/>
                    <p className="">Portfolio website</p>  
                  </Link>
                  <div className="grid grid-cols-2 gap-5">
                    <Link href="" className="text-transparent hover:text-white text-center"><Image className="" src="/FigmaIcon.svg" width={800} height={0} alt="figma"/><p>Figma</p></Link>
                    <Link href="" className="text-transparent hover:text-white text-center"><Image className="" src="/LinkdinIcon.svg" width={800} height={0} alt="linkdin"/><p>Linkdin</p></Link>
                    <Link href="" className="text-transparent hover:text-white text-center"><Image className="" src="/GithubIcon.svg" width={800} height={0} alt="github"/><p>Github</p></Link>
                    <Link href="" className="text-transparent hover:text-white text-center"><Image className="" src="/EmailIcon.svg" width={800} height={0} alt="email"/><p>Email</p></Link>
                  </div>
                </div>
              </div>
              <div className="p-5 lg:p-0 text-pretty">
                <h1>The best way to predict the future is to create it.</h1>
                <h5 className="text-3xl px-8 text-end font-work font-light">- Peter Drucker</h5>
              </div>
            </div>
            <div className="max-h-[53rem] w-full p-3 pt-0 noScrollBar rounded-5xl flex flex-col gap-5 overflow-y-scroll">
              <h5 className="text-4xl text-center font-inter font-semibold">The Code Gallery</h5>
              {projects.map((project) => (<WorkCom key={project.project} {...project} />))}
            </div>
          </div>
        </div>
      </div>
    </PageLoader>
  )
}
