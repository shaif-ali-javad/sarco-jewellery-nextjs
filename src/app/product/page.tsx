'use client'
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

import img0 from "../../../public/10aa7fef-6a0d-4363-9266-9cfd95fb134c.png";
import img1 from "../../../public/215d1436-74b5-4a3c-88e0-dcacc607b16b.png";
import img2 from "../../../public/68d6c5eb-0c68-422b-acd3-d4f6682fce40.png";
import img3 from "../../../public/c8407b94-6699-4741-a3f9-59c167e4b84d.png";
import img4 from "../../../public/d0afe47e-278e-4dbd-9edc-42bc7d2eada7.png";

const courseData = [
  {
    "id": 1,
    "title": "TT BAR",
    "slug": "guitar-fundamentals",
    "description": "Gold ten tola bars, weighing about 116.6 grams, are a popular investment option known for their high purity.",
    "price": 99.99,
    "instructor": "John Doe",
    "isFeatured": true,
    "image": img0 
  },
  {
    "id": 2,
    "title": "Kilo Bar",
    "slug": "piano-for-beginners",
    "description": "Gold kilo bars are a favored investment for their high purity, substantial weight, and global liquidity.",
    "price": 109.99,
    "instructor": "Jane Smith",
    "isFeatured": false,
    "image": img3 
  },
  {
    "id": 3,
    "title": "Gold Coins",
    "slug": "advanced-vocal-techniques",
    "description": "Gold coins are a sought-after investment and collectible, valued for their high purity, intrinsic metal content, and historical significance.",
    "price": 119.99,
    "instructor": "Emily Johnson",
    "isFeatured": true,
    "image": img4
  },
  {
    "id": 4,
    "title": "PAMP Bar",
    "slug": "drumming-mastery",
    "description": "PAMP bars are high-purity (99.99%) gold bullion produced by PAMP Suisse, celebrated for their quality and distinctive designs.",
    "price": 129.99,
    "instructor": "Mike Brown",
    "isFeatured": false,
    "image": img1
  },
  {
    "id": 5,
    "title": "Gold Scrap",
    "slug": "jazz-improvisation",
    "description": "Gold scrap refers to any unwanted or discarded gold items, such as jewelry, coins, or industrial materials, that can be recycled and refined to extract pure gold.",
    "price": 139.99,
    "instructor": "Chris Davis",
    "isFeatured": false,
    "image": img2
  }
];


function page() {
  return (
    <div>
    
    <div className="img-container-product">
      <h1 className="text-center text-5xl font-black text-wite">
        Product
      </h1>
    </div>

    <div className="min-h-screen bg-black py-12 pt-36">
  
        <div className="flex flex-wrap justify-center">
            {courseData.map((course) => (
                <CardContainer className="inter-var m-4" key={course.id}>
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 darktext-white"
                  >
                    {course.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 darktext-neutral-300"
                  >
                    {course.description}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src={course.image}
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt={course.title}
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-20">
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl text-xs font-normal darktext-white"
                    >
                      Try now →
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      Sign up
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            ))}
        </div>  
    </div>
  </div>
  )
}

export default page