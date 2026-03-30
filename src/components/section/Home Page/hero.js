import CommonSection from "../common-hero";
import Button from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

function Hero() {
  return (
    <>
    
      <CommonSection
        badge="For investors"
        badgeClass="text-[#F15B54] bg-[#F15B541A]"
        className="bg-[#F5F3F0] pt-8 sm:pt-10 md:h-[600px] lg:h-[650px] xl:h-[790px] lg:pt-[48px] pb-[80px] md:pb-[100px]"
        title={
          <>
            <span className="text-[#F15B54]">Invest</span> in businesses <br />
            you believe in
          </>
        }
        titleClass="text-[24px] sm:text-[42px] md:text-[52px] xl:text-[84px]"
        description="Discover opportunities, become a co-owner, and follow the journey beyond the investment."
      >
        <div className="flex flex-col gap-3 w-full sm:flex-row sm:justify-center sm:gap-4 sm:w-auto">
          {/* <Link href="/allventures" className="w-full md:w-auto"> */}
            <Button size="md" className="bg-black text-white cursor-pointer w-full sm:w-auto">
              Explore ventures
            </Button>
          {/* </Link> */}
          <Button size="md" className="bg-white text-black border border-gray-300 cursor-pointer w-full sm:w-auto">
            Sign up
          </Button>
        </div>
      </CommonSection>

      <div className="md:-mt-[200px] lg:-mt-[250px] xl:-mt-[300px]">
        <section className="w-full flex justify-center px-[0px] md:px-[30px] relative">
          <div className="relative w-full xl:max-w-[1380px] flex flex-col items-center">
            <div className="absolute left-0 right-0 top-[-10px] h-[284px] sm:h-[340px] md:h-full flex justify-center items-center overflow-hidden">
              <Image
                src="/images/red-bg.svg"
                alt="background"
                width={1380}
                height={631}
                className="w-full h-full md:h-auto object-cover"
              />
            </div>

            <div className="relative w-full hidden md:block md:max-w-[580px] lg:max-w-[800px] xl:max-w-[999px] md:pt-[40px] lg:pt-[60px]">
              <Image
                src="/images/portfolio-card.svg"
                alt="portfolio"
                width={999}
                height={400}
              />
            </div>

            <div className="relative block md:hidden top-[-85px] max-w-[214px] pt-[20px]">
              <Image
                src="/images/mobile-img.svg"
                alt="portfolio"
                width={214}
                height={333}
            className="h-[365px] object-cover w-[214px]"
              />
            </div>
          </div>
        </section>

        <p className="relative z-10 text-[14px] sm:text-[18px] leading-[140%] text-[#15162ACC] opacity-80 pt-[15px] pb-[15px] sm:pt-[170px] md:py-[32px] md:px-[200px] lg:py-[48px] lg:px-[300px] xl:py-[64px] xl:px-[389px] text-center">
          Eyevestor is geregistreerd bij de AFM
        </p>
      </div>
    </>
  );
}

export default Hero;