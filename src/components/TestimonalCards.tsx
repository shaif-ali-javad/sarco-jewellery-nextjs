"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[18rem] w-full dark:bg-black relative flex flex-col items-center justify-center overflow-hidden">
    {/* <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our Harmony: Voices of success</h2> */}
    <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
      </div>
      </div>
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Top-Quality Bullion! The gold bullion from Noha Gold is excellent. The consistency and quality of their products make them a top choice for our bulk purchases. Their professional approach and reliability are much appreciated.",
    name: "Fatou S., Senegal",
    // title: "A Tale of Two Cities",
  },
  {
    quote:
      "Trusted Bullion Supplier! Noha Gold offers premium bullion products that meet our high standards. Their service is both professional and dependable. We value their commitment to quality and their excellent customer support.",
    name: "— Ramesh P.",
    // title: "Hamlet",
  },
  {
    quote: "Personalized Attention and High Standards! At Noha Gold, I received personalized attention that made my shopping experience special. The gold pieces are crafted to perfection, and the staff ensures you find exactly what you're looking for. A great place to shop!",
    name: "Ayesha KM.",
    // title: "A Dream Within a Dream",
  },
  {
    quote:
      "A Trusted Name in Gold! I've been a customer of Noha Gold for years, and they have never disappointed. The selection is always fantastic, and the gold is of the highest quality. I wouldn't shop anywhere else!",
    name: "Meera Swaminathan.",
    // title: "Pride and Prejudice",
  },
  {
    quote:
      "Reliable and Superior Gold! The gold bullion from Noha Gold is always of excellent quality. Their professional service and fair pricing make them our preferred supplier for all our bulk needs.",
    name: "Sophie Keller, Switzerland",
    // title: "Moby-Dick",
  },
];
