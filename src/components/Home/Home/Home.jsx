import HomePageBanner from "../banner/HomePageBanner"
import Core from "../components/core/Core"
import PricingPageCTA from "../components/cta/PricingPageCTA"
import Enhance from "../enhance/Enhance"



const Home = () => {
  return (
    <>
        <HomePageBanner/>
        <Core/>
        <Enhance/>
        <PricingPageCTA/>
    </>
  )
}

export default Home