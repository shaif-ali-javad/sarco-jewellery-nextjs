import BackgroundGradientDemo from "@/components/featured-services";
import HeroSection from "@/components/heroSection";
import Image from "next/image";
// import Whychoosus from "@/components/WhyChoosUs"
import { InfiniteMovingCardsDemo } from "@/components/TestimonalCards";
import CardHoverEffectDemo from "@/components/UpcomingWebinars";
import Instructors from "@/components/Experts";
import EXPLORE from "@/components/Explore";
import FEATURED from "@/components/Featured";
import FEATURE from "@/components/Feature";
import Heritage from "@/components/Heritage";
import Whygold from "@/components/Whygold";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
    <HeroSection/>
    {/* <BackgroundGradientDemo/> */}
    <EXPLORE/>
    {/* <FEATURED/> */}
    <CardHoverEffectDemo/>
    <FEATURE/>
    <InfiniteMovingCardsDemo/>
    <Heritage/>
    {/* <Whygold/> */}
    <Instructors/>
    </main>
  );
}
