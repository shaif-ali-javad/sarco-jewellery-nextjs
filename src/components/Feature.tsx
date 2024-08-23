'use client'
import Image from "next/image";
import React from "react";
import courseData from "@/data/feature.json"

function page() {
  return (
    <div className="min-h-screen bg-black py-20 px-5 max-w-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
            {courseData.courses.map((course) => (
                <div className="inter-var m-4" key={course.id}> 
                <div className="relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border width ">
                  <div className="w-full mt-4">
                    <Image
                      src={course.image}
                      height="300"
                      width="100"
                      className="m-auto rounded-xl"
                      alt={course.title}
                    />
                  <div
                    className="text-xl text-center text-neutral-600 darktext-white mt-9 width"
                  >
                    {course.title}
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