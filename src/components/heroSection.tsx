  "use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/components/ui/images-slider";

import Link from "next/link"
// import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border"
import img0 from "../../public/10aa7fef-6a0d-4363-9266-9cfd95fb134c.png"

function HeroSection() {

  const images = [
    'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fs1.picswalls.com%2Fwallpapers%2F2014%2F08%2F16%2Fgold-high-definition-wallpaper_072507547_204.jpg&f=1&nofb=1&ipt=9bee952d9a1c28e11827226f8586470b85e26c4d046133f962df29dfafccb640&ipo=images',
    "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fhintergrundbild.org%2Fwallpaper%2Ffull%2Fe%2F0%2F9%2F35094-goldene-hintergrundbilder-2880x1800-retina.jpg&f=1&nofb=1&ipt=9086292fa99f8d6166caa71f3f6b4663d3bea15fe286c4cc61e491e08d132110&ipo=images",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F87%2F99%2Fa1%2F8799a1a22f96ea1e5c00f1a6d42fb34f.jpg&f=1&nofb=1&ipt=5ccbd74b774968ff51c9f8c310e24fb2a5362d7ebcfbad4a7aa9b70bfd2b4db6&ipo=images",
  ];

  return (
    <div className=" h-[30rem] w-full rounded-md items-center justify-center relative overflow-hidden mx-auto pb-10 md:py-0 mb-20"
    >


    <ImagesSlider className="h-[40rem]" images={images}>
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
        <motion.h1 className="font-bold text-5xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 pt-4">
        Noha gold
        </motion.h1>
        <motion.p className="font-bold text-xl md:text-4xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 pt-4">
        Explore our broad range of gold bullion products. <br className="mt-50"/><div className="mt-2"></div> manufactured locally as per international standards.
        </motion.p>
        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>explor now →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
    </div>
  )
}

export default HeroSection
