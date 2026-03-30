import CommonSection from "../common-hero";
import Button from "@/components/ui/button";
import Link from "next/link";

function Hero() {
  return (
    <CommonSection
      badge="For investors"         
      className="bg-[#F5F3F0] pt-8 sm:pt-10 lg:pt-[48px] pb-[80px] md:pb-[40px]"
      title={
        <>
          <span className="text-[#F15B54]">Invest</span> in businesses <br/> you
          believe in
        </>
        
      }
   titleClass="text-[24px] sm:text-[42px] md:text-[52px] xl:text-[84px]"
      description="Discover opportunities, become a co-owner, and follow the journey beyond the investment."
    >
      <div className="flex flex-col gap-3 w-full sm:flex-row sm:justify-center sm:gap-4 sm:w-auto">
          <Link href="/allventures" className="w-full md:w-auto">
        <Button
          size="md"
          className="bg-black text-white cursor-pointer w-full sm:w-auto"
        >
       Explore ventures   
        </Button>
        </Link>
        <Button
          size="md"
          className="bg-white text-black border border-gray-300 cursor-pointer w-full sm:w-auto"
        >
          Sign up
        </Button>
      </div>
    </CommonSection>
  );
}

export default Hero;
