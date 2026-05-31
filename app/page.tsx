import Image from "next/image";
import ParallaxText from "./compo/ParallaxText";
import WorkCom from "./compo/work";
import Link from "next/link";
import Skills from "./compo/skills";
import PageLoader from "./compo/PageLoader";

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
const skills: string[] = ["Nextjs","Reactjs","TailwindCSS","TypeScript","JavaScript"];

export default function Home() {
  return (
    <PageLoader page="Home" speed={400}>
    <div className="mt-8">
    <div className="p-2 my-10 sm:p-10 hover:cursor-&">
      <ParallaxText baseVelocity={-5}>DESIGN</ParallaxText>
      <ParallaxText baseVelocity={5}>Develope</ParallaxText>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 px-2 sm:px-10 items-end">
        <Image className="animate-slide-in mb-10" loading="lazy" height={0} width={1200} src="/Profile.webp" alt="image"/>
        <div className="py-4 sm:p-4 2xl:px-32">
          <h2>Hello</h2>
          <h2 className="uppercase">It&#39;s me Yug</h2>
          <h2 className="text-2xl sm:text-5xl font-normal font-work uppercase">Front-end Developer</h2>
        </div>
      </div>
      <div className="mt-10 p-2 sm:p-10">
        <Image className="w-full my-20 sm:w-4/6 md:w-3/6 xl:w-2/6" src="/mw.svg" width={100} height={0} alt="My Work"/>
        <div className="flex flex-col lg:flex-row gap-20  md:px-20 py-2 mb-20">
          {projects.map((project) => (<WorkCom key={project.project} {...project} />))}
        </div>
        <Link className="md:ml-16 text-2xl md:text-3xl font-work font-semibold p-4 rounded-full border border-fcolor hover:bg-fcolor hover:text-white" href={"/work"}>More Work</Link>
      </div>
      <div className="p-2 sm:p-10 mb-8">
        <Image className="w-full mt-20 sm:w-4/6 md:w-3/6 xl:w-2/6" src="/ms.svg" width={100} height={0} alt="My Work"/>
        <div className="mt-3 md:mt-5 flex flex-wrap justify-center">
          <div className="px-2 w-full">
            <Skills skills={skills} baseVelocity={-12}/>
          </div>  
        </div>
      </div>
    </div>
    </PageLoader>
  );
}
