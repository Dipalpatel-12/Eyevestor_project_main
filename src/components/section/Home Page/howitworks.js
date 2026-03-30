import CommonSection from "../common-hero";
import Image from "next/image";

function HowItWorksSection() {
  return (
    <section className="w-full flex justify-center pb-[80px]  xl:py-24">
      <div className="w-full xl:w-360 flex justify-center">
        <div className="w-full xl:w-281.5 flex flex-col items-center gap-[32px] md:gap-[48px] xl:gap-16 px-[16px] md:px-[40px] xl:px-0">

          <CommonSection
            badge="How it works"
            badgeClass="bg-[#F15B541A] text-[#F15B54] py-[4px] px-[12px] rounded-[100px]"
            title={
              <>
                Make your move,
                <br /> become a co-owner
              </>
            }
            titleClass="text-[28px] sm:text-[42px] md:text-[52px] xl:text-[56px]"
            description="Once you've found a business that feels right: Invest directly in the company and become a co-owner."
          />

        
          <div className="w-full flex flex-col md:flex-row gap-[16px] md:gap-[24px] xl:gap-[40px]">

            <div className="
              w-full md:w-[50%] xl:w-[540px]
              flex flex-col-reverse md:flex-col justify-between
              bg-[#E3D0C3] rounded-[16px] md:rounded-[20px] xl:rounded-[24px]
              overflow-hidden
            ">
              <Image
                src="/images/investment-img.svg"
                alt="investment"
                width={540}
                height={481}
                className="w-full h-auto"
              />

              <div className="flex flex-col items-start p-[20px] md:p-[24px] xl:p-[32px] gap-[4px]">
                <h3 className="
                  font-semibold leading-[120%] tracking-[-0.02em] text-[#0C0D1A]
                  text-[18px] md:text-[20px] xl:text-[24px]
                ">
                  Determine your investment amount
                </h3>
                <p className="
                  leading-[140%] text-[#15162ACC]
                  text-[14px] md:text-[16px] xl:text-[18px]
                ">
                  Minimum investment starts from a friendly amount (set by each company)
                </p>
              </div>
            </div>

          
          <div className="w-full md:w-[50%] md:w-[343px] lg:w-[543px] flex flex-col gap-[16px] md:gap-[24px] xl:gap-[40px]">

              <div className="w-full flex flex-col rounded-[16px] md:rounded-[20px] xl:rounded-[24px] overflow-hidden bg-[#F2EFEC]">
                <div className="flex justify-center">
                  <Image
                    src="/images/transaction-img.svg"
                    alt="transactions"
                    width={543}
                    height={172}
                    
                  />
                </div>
                <div className="flex flex-col items-start p-[20px] md:p-[24px] xl:p-[32px] gap-[4px]">
                  <h3 className="
                    font-semibold leading-[120%] tracking-[-0.02em] text-[#0C0D1A]
                    text-[20px] md:text-[20px] xl:text-[24px]
                  ">
                    Sharefund the way you want
                  </h3>
                  <p className="
                    leading-[140%] text-[#15162ACC]
                    text-[14px] md:text-[16px] xl:text-[18px]
                  ">
                    Transactions are handled smoothly via the platform
                  </p>
                </div>
              </div>

             
              <div className="w-full flex flex-col rounded-[16px] md:rounded-[20px] xl:rounded-[24px] overflow-hidden bg-[#F2EFEC]">
                <div className="flex justify-center">
                  <Image
                    src="/images/ownership-img.svg"
                    alt="ownership"
                    width={543}
                    height={147}
                   
                  />
                </div>
                <div className="flex flex-col items-start p-[20px] md:p-[24px] xl:p-[32px] gap-[4px]">
                  <h3 className="
                    font-semibold leading-[120%] tracking-[-0.02em] text-[#0C0D1A]
                    text-[20px] md:text-[20px] xl:text-[24px]
                  ">
                    Get a digital record of your ownership
                  </h3>
                  <p className="
                    leading-[140%] text-[#15162ACC]
                    text-[14px] md:text-[16px] xl:text-[18px]
                  ">
                    You get a digital record of your ownership in your dashboard
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;





