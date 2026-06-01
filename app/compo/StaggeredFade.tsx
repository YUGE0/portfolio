"use client"
import React from "react";
import { motion } from "framer-motion";

interface StaggeredFadeProps {
  text: string;
}

export default function StaggeredFade({ text }: StaggeredFadeProps) {
  const wordVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.3 },
    }),
  };

  const words = text.split(" ");

  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      className="text-center mt-4 sm:mt-8 md:p-10 px-4 sm:px-6 font-work font-semibold text-2xl sm:text-5xl md:text-8xl mb-10 sm:mb-20"
    >
      {words.map((word, i) => (
        <motion.span key={word + i} variants={wordVariants} custom={i}>
          {word} {" "}
        </motion.span>
      ))}
    </motion.h1>
  );
}
