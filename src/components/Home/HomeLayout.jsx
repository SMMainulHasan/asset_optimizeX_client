
import EmbraceSection from "./EmbraceSection";
import FeatureSection from "./Feature/FeatureSection";
import Hero from "./Hero";
import Feature from "./Feature/Feature";

import HeroSection from "./HeroSection";
import Testimonials from "./Testimonials";
import { Team } from "./Team";




const HomeLayout = () => {
  return (
    <>
    <Hero/>
    <Feature/>
        {/* <HeroSection/> */}
        {/* <FeatureSection/> */}
        {/* <EmbraceSection/> */}
        <div className="bg-gradient-to-r from-gray-300 w-full overflow-hidden">
    <div className={`container mx-auto`}>
      <div className={`xl:max-w-[1280px] w-full`}>
        <Testimonials />
      </div>
    </div>
  </div>
  <Team/>
    </>
  )
}

export default HomeLayout