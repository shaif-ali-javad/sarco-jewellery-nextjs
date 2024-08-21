'use client';
import Image from "next/image";
import React from "react";
import courseData from "@/data/features.json";

function Page() {
  return (
    <div className="min-h-screen bg-black py-20 pt-1 p-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
        {courseData.courses.map((course) => (
          <div className="inter-var" key={course.id}> 
            <div className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black w-auto h-auto rounded-xl p-6">
              <div className="w-full mt-4">
                <div className="text-6xl font-bold text-neutral-600 darktext-white mt-9 text-center">
                  {course.title}
                </div>
                <div className="text-neutral-500 text-sm max-w-sm mt-2 darktext-neutral-300 text-center">
                  {course.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>  
    </div>
  );
}

export default Page;
