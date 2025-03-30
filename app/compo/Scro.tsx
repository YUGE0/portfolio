"use client"
import React from 'react'
import { motion, useScroll } from "framer-motion";


export default function Scro() {
    const { scrollYProgress } = useScroll();
  return (
    <motion.div className="bg-[#2a4064]/95 fixed left-0 right-0 top-0 h-[0.50rem] origin-left" style={{ scaleX: scrollYProgress }}/>
  )
}
