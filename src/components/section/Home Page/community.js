import Button from "../../ui/button";
import Image from "next/image";

function CommunitySection() {
  return (
    <section
      className="
        max-w-[1440px] flex justify-center mx-auto
        py-[60px] sm:py-[70px] md:py-[80px] xl:py-[96px]
        px-[16px] sm:px-[20px] md:px-[32px] lg:px-[40px] xl:px-0
      "
    >
      <div
        className="
          w-full max-w-[1122px]
          flex flex-col items-center
          border border-[#C4C4C4]
          rounded-[16px] sm:rounded-[20px] xl:rounded-[24px]

          py-[40px] sm:py-[60px] md:py-[70px] xl:py-[80px]
          gap-[20px] md:gap-[24px]
        "
      >
       
        <div className="flex flex-col items-center text-center gap-[16px] md:gap-[22px] max-w-[893px]">

          <Button
            className="text-black bg-[#F9F8F7] px-[12px] py-[4px] text-[12px] md:text-[14px] rounded-full"
          >
            Our community
          </Button>

          <div className="flex items-center">
            
            <Image
              src="/images/Ellipse-61.svg"
              alt=""
              width={58}
              height={58}
              className="w-[40px] md:w-[58px] h-auto rounded-full border-2 border-white"
            />
            <Image
              src="/images/Ellipse-16.svg"
              alt=""
              width={58}
              height={58}
              className="w-[40px] md:w-[58px] h-auto rounded-full border-2 border-white -translate-x-2"
            />
            <Image
              src="/images/Ellipse-17.svg"
              alt=""
              width={58}
              height={58}
              className="w-[40px] md:w-[58px] h-auto rounded-full border-2 border-white -translate-x-4"
            />

         
            <Image
              src="/images/Ellipse-18.svg"
              alt=""
              width={58}
              height={58}
              className="hidden md:block w-[58px] h-auto rounded-full border-2 border-white -translate-x-6"
            />
            <Image
              src="/images/Ellipse-19.svg"
              alt=""
              width={58}
              height={58}
              className="hidden md:block w-[58px] h-auto rounded-full border-2 border-white -translate-x-8"
            />
            <Image
              src="/images/Ellipse-20.svg"
              alt=""
              width={58}
              height={58}
              className="hidden md:block w-[58px] h-auto rounded-full border-2 border-white -translate-x-10"
            />
            <Image
              src="/images/Ellipse-62.svg"
              alt=""
              width={58}
              height={58}
              className="hidden md:block w-[58px] h-auto rounded-full border-2 border-white -translate-x-12"
            />
          </div>

         
          <h3
            className="
              max-w-[665px]
              text-[26px] sm:text-[32px] md:text-[44px] xl:text-[56px]
              leading-[120%] xl:leading-[110%]
              font-semibold
              text-[#0C0D1A]
            "
          >
            Join a growing community
          </h3>

          <p
            className="
              text-[14px] sm:text-[15px] md:text-[16px] xl:text-[18px]
              leading-[140%] text-[#15162ACC]
            "
          >
            A growing network of private investors actively investing in
            ventures through Eyevestor.
          </p>
        </div>

   
        <Button
          className="
            bg-[#0C0D1A] text-white
            px-[18px] py-[10px]
            md:px-[22px] md:py-[11px]
            xl:px-[24px] xl:py-[12px]
            text-[13px] md:text-[14px] xl:text-[16px]
            rounded-full
          "
        >
          Create an account
        </Button>
      </div>
    </section>
  );
}

export default CommunitySection;
