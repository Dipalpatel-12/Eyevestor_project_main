import Discover from "@/components/section/Home Page/discover";
import Hero from "../components/section/Home Page/hero";
import Portfolio from "../components/section/Home Page/portfolio";
import HowItWorksSection from "../components/section/Home Page/howitworks";
import SharefundingInfo from "../components/section/Home Page/sharefund";
import AppSection from "../components/section/Home Page/app-section";
import CommunitySection from "../components/section/Home Page/community";
import SafteySection from "../components/section/Home Page/saftey";
import FaqSection from "../components/section/Home Page/faqsection";

export default function Home() {
  return (
    <>
      <Hero />
      <Portfolio/>
      <Discover/>
      <HowItWorksSection/>
      <SharefundingInfo/>
      <AppSection/> 
      <CommunitySection/>
      <SafteySection/>
      <FaqSection/>
    </>
  );
}