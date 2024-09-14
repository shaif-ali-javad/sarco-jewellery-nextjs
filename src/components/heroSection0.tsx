  "use client";
import { motion } from "framer-motion";
import React from "react";
// import { ImagesSlider } from "@/components/ui/images-slider";
import img0 from "../../public/wall-paper-1.jpg"
import Link from "next/link"
// import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border"

function HeroSection() {

  // const images = [
  //   'https://shaif-ali-javad.github.io/image-storage/wall-paper-1.jpg',
  //   "https://shaif-ali-javad.github.io/image-storage/wall-paper-1.jpg",
  //   "https://shaif-ali-javad.github.io/image-storage/wall-paper-1.jpg",
  // ];

  return (
    <div className=" h-full w-full rounded-md items-center justify-center relative mx-auto pb-30 md:py-0 mb-20"
    >


    <img className="h-full mt-yo" src="https://shaif-ali-javad.github.io/image-storage/wall-paper-1.jpg"/>
    <img className="h-full mt-yo-mobile" src="https://shaif-ali-javad.github.io/image-storage/wall-paper-1(mobile).jpg"/>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-start items-left img0 p-4"
      >
        
        <motion.h1 className="font-bold text-2xl md:text-4xl text-left text-white pt-10">
        Premium <span className="text-black-0">Gold Bullion:</span> Crafted to <span className="text-black-0">Perfection</span>
        </motion.h1>
        <motion.p className="font-medium text-xl md:text-2xl text-left bg-clip-text text-transparent bg-gradient-to-b text-black pt-4 w-3/5">
        Unveil our exquisite collection of gold bullion, meticulously crafted locally to the highest international standards.
        </motion.p>0
        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-black-0 mx-auto text-center rounded-full relative mt-4 button-0 mdcs">
          <span>explore now →</span>
          <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </div>
  )
}

export default HeroSection
