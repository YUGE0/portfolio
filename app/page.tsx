import Image from "next/image";
import ParallaxText from "./compo/ParallaxText";
import WorkCom from "./compo/work";

const projects: string[] = ["auto", "mitreisen", "clocko"];
let index = 1

export default function Home() {
  return (
    <div className="">
      <div className="p-10">
      <ParallaxText baseVelocity={-3}>DESIGN</ParallaxText>
      <ParallaxText baseVelocity={3}>Develope</ParallaxText>
      </div>
      <div className="flex flex-wrap place-items-end">
        <Image height={0} width={800} src="/Profile.png" alt="image"/>
        <div className="px-20">
          <h1 className="text-9xl font-work">Hello</h1>
          <h1 className="text-9xl font-work uppercase">It's me Yug</h1>
        </div>
      </div>
      <div className="p-20">
        <h1 className="text-5xl font-work">My Work</h1>
        {projects.map((project) => (<WorkCom key={index} project={project} />))}
      </div>
      <div className="p-20">
        <h1 className="text-5xl font-work">My Skills</h1>
      </div>
    </div>
  );
}
