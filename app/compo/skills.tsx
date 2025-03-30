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

    // ✅ Correctly setting the new value
    const newX = baseX.get() + moveBy;
    baseX.set(newX <= -100 ? 0 : newX);
  });

  return (
    <div className="overflow-hidden whitespace-nowrap w-[1.1%]">
      <motion.div className="flex will-change-transform gap-10" style={{ x }}>
        {/* Duplicate skills to ensure seamless looping */}
        {[...Array(100)].map((_, i) => (
          <div key={i} className="flex space-x-10 gap-2">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="w-80 m-2 p-2 px-4 shadow-md shadow-fcolor/30 rounded-2xl flex justify-between items-center"
              >
                <h1 className="text-3xl font-semibold uppercase mr-4 p-2">{skill}</h1>
                <Image alt={skill} width={40} height={40} src={`/${skill}.svg`} />
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
