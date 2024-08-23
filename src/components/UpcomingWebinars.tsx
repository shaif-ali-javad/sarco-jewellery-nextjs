"use client"
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

function CardHoverEffectDemo() {
  
  const featuredWebinars = [
    {
      title: 'WHOLESALE',
      description:
        'Sarco Jewellery offers a wide range of wholesale services to support the need of jewelry companies and retailers for large amounts of precious metals in the form of large bars, kilobars, and coins.',
      slug: 'music-production-essentials',
      isFeatured: true,
    },
    // Added two more webinars
    {
      title: 'TRADING PHYSICAL GOLD',
      description:
        'Sarco Jewellery is amongst the best destinations for buying and selling gold bars, gold coins and gold bullion in Dubai.',
      slug: 'live-performance-techniques',
      isFeatured: true,
    },
    {
      title: 'REFINED GOLD',
      description:
        'Our experienced team oversees the refining of scrap gold and silver into high-quality bullion, crafted according to the internationally-set standards.',
      slug: 'digital-music-marketing',
      isFeatured: true,
    },
  ];

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Musical Journey</p>
        </div> */}
        <div className="mt-10">
          <HoverEffect items={featuredWebinars.map(webinar => (
            {
              title: webinar.title,
              description: webinar.description,
              link: '/'
            }
          ))} />
        </div>
        {/* <div className="mt-10 text-center">
          <Link href={"/"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All webinars
          </Link>
        </div> */}
      </div>
    </div>
  );
}

export default CardHoverEffectDemo