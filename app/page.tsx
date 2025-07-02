import Image from "next/image";
import ParallaxText from "./compo/ParallaxText";
import WorkCom from "./compo/work";
import Link from "next/link";
import Skills from "./compo/skills";

const projects: string[] = ["auto", "mitreisen", "clocko"];
const skills: string[] = ["Nextjs","Reactjs","TailwindCSS","TypeScript","JavaScript"];

export default function Home() {
  return (
    <div className="mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 px-2 sm:px-10 items-end">
        <Image className="animate-slide-in mb-10" height={0} width={1200} src="/Profile.webp" alt="image"/>
        <div className="py-4 sm:p-4 2xl:px-32">
          <h2>Hello</h2>
          <h2 className="uppercase">It&#39;s me Yug</h2>
          <h2 className="text-2xl sm:text-5xl font-normal font-work uppercase">Front-end Developer</h2>
        </div>
      </div>
      <div className="p-2 my-10 sm:p-10">
      <ParallaxText baseVelocity={-5}>DESIGN</ParallaxText>
      <ParallaxText baseVelocity={5}>Develope</ParallaxText>
      </div>
      <div className="mt-10 p-2 sm:p-10">
        <Image className="w-full mt-20 sm:w-4/6 md:w-3/6 xl:w-2/6" src="/mw.svg" width={100} height={0} alt="My Work"/>
        {projects.map((project) => (<WorkCom key={project} project={project} />))}
        <Link className="mt-10 md:ml-16 text-2xl md:text-3xl font-work font-semibold p-4 rounded-full border border-fcolor hover:bg-fcolor hover:text-white" href={"/work"}>More Work</Link>
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
  );
}
