"use client"
import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Image, { StaticImageData } from 'next/image';

// A helper hook to create the parallax effect using Framer Motion
function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

interface ParallaxImageProps {
  src: StaticImageData; // Assuming you're using a Next.js image
  alt: string;
  cap: string;
}

export default function ParallaxImage({src, alt, cap }: ParallaxImageProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section className="h-screen flex justify-center items-center relative snap-center">
      <div ref={ref} className="rounded-xl shadow-slate-500 shadow-xl w-[80%] h-[20%] xl:w-[80%] xl:h-[68%] ml-10 relative bg-white overflow-hidden">
        <Image src={src} alt={alt} className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover"/>
      </div>
      <motion.h1 className="absolute text-accent left-0 text-4xl font-bold leading-[1.2] tracking-[-0.05em]" style={{ y }}>
        # {cap}
      </motion.h1>
    </section>
  );
}
