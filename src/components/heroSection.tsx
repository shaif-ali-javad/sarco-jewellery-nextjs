import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border"

function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0"
    >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="gold"
      />
        <div className="p-4 ralative z-10 w-full text-center">
            <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">A Trusted Gold</h1>
            <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">We believe delivery on time and transparent trade policies made possible to achieve the important place in the business within the short span of time. In the competitive arena Sarco Jewellery obliged to satisfy its customer and suppliers.</p>
            {/* <div className="mt-4">
                <Link href={"/service"}>
                <Button
                    borderRadius="1.75rem"
                    className="bg-black dark:bg-black text-black text-white border-neutral-800 dark:border-slate-800"
                >
                    Explore Services
                </Button>
                </Link>
            </div> */}
        </div>
    </div>
  )
}

export default HeroSection
