import Image from "next/image";
import Button from "@/components/ui/button";

function SharefundingInfo() {
  return (
    <section
      className="
      w-full flex justify-center
      py-[48px] sm:py-[64px] md:py-[80px] xl:py-[96px]
    "
    >
      <div className="w-full max-w-[1440px] flex justify-center px-[16px] sm:px-[24px] md:px-[32px] xl:px-0">
        <div
          className="
            w-full max-w-[1127px] flex flex-col items-center justify-center

            gap-[16px] sm:gap-[20px] md:gap-[24px]

            px-[16px] sm:px-[24px] md:px-[60px] lg:px-[100px] xl:px-[187px]

            pt-[60px] sm:pt-[70px] md:pt-[90px] xl:pt-[111px]
            pb-[50px] sm:pb-[60px] md:pb-[70px] xl:pb-[87px]

            rounded-[16px] sm:rounded-[20px] xl:rounded-[24px]
          "
          style={{
            backgroundImage: "url('/images/fund-bg-img.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex items-center">
            <Image
              src="/images/Ellipse 61.svg"
              alt="user"
              width={64}
              height={64}
              className="w-[40px] sm:w-[48px] md:w-[56px] xl:w-[64px] h-auto"
            />

            <Image
              src="/images/Ellipse 62.svg"
              alt="user"
              width={64}
              height={64}
              className="
                w-[40px] sm:w-[48px] md:w-[56px] xl:w-[64px] h-auto
                -translate-x-[8px] sm:-translate-x-[10px] md:-translate-x-[12px]
              "
            />

            <Image
              src="/images/Ellipse 63.svg"
              alt="user"
              width={64}
              height={64}
              className="
                w-[40px] sm:w-[48px] md:w-[56px] xl:w-[64px] h-auto
                -translate-x-[16px] sm:-translate-x-[20px] md:-translate-x-[24px]
              "
            />
          </div>

          {/* TEXT */}
          <div className="flex flex-col items-center gap-[16px] sm:gap-[20px] md:gap-[24px] text-center max-w-[753px]">
            <h3
              className="
              text-[22px] sm:text-[26px] md:text-[34px] lg:text-[40px] xl:text-[48px]
              font-semibold leading-[120%] xl:leading-[110%]
              tracking-normal xl:tracking-[-0.04em]
              text-white
            "
            >
              <span className="text-[#F15B54]">Sharefunding®</span> is more than
              crowdfunding or traditional financing.
            </h3>

            <p
              className="
              text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px]
              leading-[140%] text-white
            "
            >
              It is an accessible, all-in-one solution for equity funding and
              community engagement, built for both entrepreneurs and investors
            </p>
          </div>

          <Button
            className="
            flex items-center justify-center

            px-[16px] py-[10px]
            sm:px-[18px] sm:py-[11px]
            md:px-[20px] md:py-[11px]
            xl:px-[24px] xl:py-[12px]

            text-[13px] sm:text-[14px] md:text-[15px] xl:text-[16px]
            font-semibold

            text-[#0C0D1A] bg-white border border-[#E5E5EC]
            rounded-full cursor-pointer
          "
          >
            Read more about Sharefunding
          </Button>
        </div>
      </div>
    </section>
  );
}

export default SharefundingInfo;
