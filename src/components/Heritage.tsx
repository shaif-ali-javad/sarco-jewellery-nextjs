'use client'
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className=" bg-black pt-20 Heritage">
      <div className="min-h py-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://cdn.apmintldmcc.com/wp-content/uploads/heritage.jpg"
            className="w-auto rounded-lg shadow-2xl" />
          <div className="text-right">
            <h3 className="text-2xl text-black pb-3 italic">Our Heritage</h3>
            <h1 className="text-3xl font-bold text-neutral-600">WE HAVE A LONG STANDING HISTORY</h1>
            <p className="pb-6 pt-4 text-neutral-500">
           <span className="text-black">Noha gold</span> is built on the proud heritage of its pioneering forefathers. We have been dealing with gold products for the last 4 generations, leading the industry from front.
            </p>
            <Link href={"/about"}>
            <button  className="btn btnprimary italic">Discover More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page