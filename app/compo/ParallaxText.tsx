"use client";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  wrap
} from "framer-motion";

interface ParallaxProps {
  children: string;
  baseVelocity: number;
}

export default function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden whitespace-nowrap hover:cursor-&">
      <motion.div className="inline-flex will-change-transform" style={{ x }}>
        <span className="px-5 md:px-20 text-[3rem] sm:text-[5rem] md:text-[12rem] uppercase font-black font-work">{children} </span>
        <span className="px-5 md:px-20 text-[3rem] sm:text-[5rem] md:text-[12rem] uppercase font-black font-work">{children} </span>
        <span className="px-5 md:px-20 text-[3rem] sm:text-[5rem] md:text-[12rem] uppercase font-black font-work">{children} </span>
        <span className="px-5 md:px-20 text-[3rem] sm:text-[5rem] md:text-[12rem] uppercase font-black font-work">{children} </span>
      </motion.div>
    </div>
  );
}
