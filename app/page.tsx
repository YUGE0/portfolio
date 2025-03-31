import Image from "next/image";
import ParallaxText from "./compo/ParallaxText";
import WorkCom from "./compo/work";
import Link from "next/link";
import Skills from "./compo/skills";

const projects: string[] = ["auto", "mitreisen", "clocko"];
const skills: string[] = ["Nextjs","Reactjs","TailwindCSS","TypeScript","JavaScript"];
const index = 1

export default function Home() {
  return (
    <div className="">
      <div className="p-2 sm:p-10">
      <ParallaxText baseVelocity={-5}>DESIGN</ParallaxText>
      <ParallaxText baseVelocity={5}>Develope</ParallaxText>
      </div>
      <div className="flex px-2 sm:px-10 flex-wrap place-items-end">
        <Image height={0} width={800} src="/WebsiteProfile.webp" alt="image"/>
        <div className="p-4 2xl:px-32">
          <h1 className="text-6xl sm:text-8xl font-work">Hello</h1>
          <h1 className="text-6xl sm:text-8xl font-work uppercase">It&#39;s me Yug</h1>
          <h1 className="text-3xl sm:text-5xl font-work uppercase">Front-end Developer</h1>
        </div>
      </div>
      <div className="sm:p-10">
        <h1 className="p-4 md:p-0 text-5xl md:text-7xl font-bold font-work text-fcolor">My Work</h1>
        {projects.map((project) => (<WorkCom key={index} project={project} />))}
        <Link className="md:ml-16 ml-6 text-2xl md:text-3 xl font-work font-semibold p-4 rounded-full border border-fcolor hover:bg-fcolor hover:text-white" href={"/work"}>More Work</Link>
      </div>
      <div className="p-4 sm:p-10 mb-8">
        <h1 className="p-4 md:p-0 text-5xl md:text-7xl font-bold font-work text-fcolor mt-10 md:mt-0">My Skills</h1>
        <div className="flex flex-wrap justify-between">
          <div className="px-2">
            <Skills skills={skills} baseVelocity={-12}/>
          </div>  
        </div>
      </div>
    </div>
  );
}
