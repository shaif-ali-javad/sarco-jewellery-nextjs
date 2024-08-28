  "use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/components/ui/images-slider";
import img0 from "../../public/wall-paper-1.jpg"
import Link from "next/link"
// import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border"

function HeroSection() {

  const images = [
    'https://shaif-ali-javad.github.io/image-storage/wall-paper-1.jpg',
    "https://shaif-ali-javad.github.io/image-storage/wall-paper-1.jpg",
    "https://shaif-ali-javad.github.io/image-storage/wall-paper-1.jpg",
  ];

  return (
    <div className=" h-full w-full rounded-md items-center justify-center relative mx-auto pb-30 md:py-0 mb-20"
    >


    <ImagesSlider className="h-full" images={images}>
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
        className="z-50 flex flex-col justify-center items-center"
      >
        
        <motion.h1 className="font-bold text-5xl md:text-6xl text-center from-neutral-50 to-neutral-400 pt-4">
          Noha gold
        </motion.h1>
        <motion.p className="font-bold text-xl md:text-4xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 pt-4">
          Explore our broad range of gold bullion products. <br className="mt-50"/><div className="mt-2"></div> manufactured locally as per international standards.
        </motion.p>
        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>explor now →</span>
          <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
    </div>
  )
}

export default HeroSection
