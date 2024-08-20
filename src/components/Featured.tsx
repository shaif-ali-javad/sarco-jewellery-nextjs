'use client'
import Image from "next/image";
import React from "react";
import courseData from "@/data/features.json"

function page() {
  return (
    <div className="min-h-screen bg-black py-20 pt-1">
      <p className="text-white text-center text-3xl pb-10">FEATURED PRODUCTS</p>
        <div className="flex flex-wrap justify-center">
            {courseData.courses.map((course) => (
                <div className="inter-var m-4" key={course.id}> 
                <div className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                  <div className="w-full mt-4">
                    <Image
                      src={course.image}
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt={course.title}
                    />
                  <div
                    className="text-xl font-bold text-neutral-600 darktext-white mt-9"
                  >
                    {course.title}
                  </div>
                  <div
                    className="text-neutral-500 text-sm max-w-sm mt-2 darktext-neutral-300"
                  >
                    {course.description}
                  </div>
                  <div
                      className="px-4 py-2 mt-3 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold text-center"
                    >
                      Add to Cart
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>  
    </div>
  )
}

export default page