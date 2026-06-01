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
} from "framer-motion";
import Image from "next/image";

interface ParallaxSkillsProps {
  skills: string[];
  baseVelocity?: number;
}

export default function ParallaxSkills({ skills, baseVelocity = 5 }: ParallaxSkillsProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${v}%`);
  const directionFactor = useRef<number>(1);

  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    const newX = baseX.get() + moveBy;
    baseX.set(newX <= -100 ? 0 : newX);
  });

  return (
    <div className="overflow-hidden whitespace-nowrap w-full py-6 sm:py-10">
      <motion.div className="flex will-change-transform gap-6 sm:gap-10" style={{ x }}>
        {[...Array(100)].map((_, i) => (
          <div key={i} className="flex space-x-6 sm:space-x-10 gap-2">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="w-36 sm:w-52 xl:w-80 m-1 sm:m-2 p-2 px-3 sm:px-4 shadow-md shadow-fcolor/30 rounded-xl sm:rounded-2xl flex justify-between items-center"
              >
                <h1 className="text-base sm:text-xl xl:text-3xl font-semibold uppercase mr-2 sm:mr-4 p-1 sm:p-2">{skill}</h1>
                <Image alt={skill} width={40} height={40} className="w-7 h-7 sm:w-10 sm:h-10 shrink-0" src={`/${skill}.svg`} />
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
