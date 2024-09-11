'use client'
import Image from "next/image";
import React from "react";
import courseData from "@/data/feature.json"

function page() {
  return (
    <div className="min-h-screen bg-black py-20 px-5 max-w-screen">
      <h2 className="text-2xl md:text-5xl text-white mt-9 m-auto text-center font-bold">
      Why Choose Us
      </h2>
      <p className=" text-black mt-7 ">
      At Noha Gold, we offer unparalleled quality in gold bullion, ensuring each product meets rigorous international standards. Our competitive pricing provides exceptional value without compromising on excellence. With years of industry expertise, we deliver reliable and transparent transactions, backed by a dedicated team committed to outstanding customer service. Our gold bullion adheres to global standards, making it a trusted choice both locally and internationally. Choose Noha Gold for a superior experience where quality, service, and reliability come together seamlessly.
      </p>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
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
                    className="text-xl text-center text-white mt-9 width m-auto safe"
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