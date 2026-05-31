"use client"
import React from 'react'
import { motion, useScroll } from "framer-motion";


export default function Scro() {
    const { scrollYProgress } = useScroll();
  return (
    <motion.div className="bg-fcolor/95 fixed left-0 right-0 bottom-0 h-[0.50rem] origin-left" style={{ scaleX: scrollYProgress }}/>
  )
}
