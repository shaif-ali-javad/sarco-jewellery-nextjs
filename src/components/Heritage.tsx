'use client'
import Image from "next/image";
import React from "react";
import courseData from "@/data/feature.json"

function page() {
  return (
    <div className="min-h-screen bg-black pt-20 Heritage">
      <div className="py-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://cdn.apmintldmcc.com/wp-content/uploads/heritage.jpg"
            className="w-auto rounded-lg shadow-2xl" />
          <div>
            <h3 className="text-3xl font-bold text-neutral-500 pb-4 ">Our Heritage</h3>
            <h1 className="text-5xl font-bold darktext-white">WE HAVE A LONG STANDING HISTORY</h1>
            <p className="py-6 text-neutral-600">
            Sarco Jewellery is built on the proud heritage of its pioneering forefathers. We have been dealing with gold products for the last 4 generations, leading the industry from front.
            </p>
            <button className="btn btnprimary">Discover More</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page