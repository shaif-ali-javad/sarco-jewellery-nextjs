'use client'
import Image from "next/image";
import React from "react";
import courseData from "@/data/feature.json"

function page() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="py-10">
        <div className="p-5">
          <h3 className="text-7xl font-bold darktext-white mb-16 ">WHY GOLD</h3>
          <div>
            <h3 className="text-5xl font-bold darktext-white">A HISTORY OF HOLDING VALUE</h3>
            <p className="py-6 text-neutral-600">
            Gold has maintained its value throughout the ages and is less susceptible to fluctuations and market turbulences than other investment assets. Being physically attractive, gold has always been seen as a way to pass on and preserve families’ wealth from one generation to another.
            </p>
          </div>
          <div>
            <h3 className="text-5xl font-bold darktext-white">PORTFOLIO DIVERSIFICATION</h3>
            <p className="py-6 text-neutral-600">
            Properly diversified investment portfolios combine gold with stocks and bonds to reduce the overall volatility and risks.
            </p>
          </div>
          <div>
            <h3 className="text-5xl font-bold darktext-white">LONG-TERM VALUE</h3>
            <p className="py-6 text-neutral-600">
            Gold’s prices tend to increase over time in response to events that usually cause the value of other investment assets, such as stocks and bonds, to decline. Although the price of gold can be volatile in the short term, it maintains its value over the long term. Through the years, it has served as a hedge against inflation and the erosion of major currencies and is a smart investment.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page