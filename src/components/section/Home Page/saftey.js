import Image from "next/image";

function SafteySection() {
  return (
    <section className="max-w-[1440px] mx-auto flex flex-col items-center px-4 sm:px-6 lg:px-0">
      
    
      <div className="max-w-[1123px] flex flex-col md:flex-row gap-6 md:gap-[60px] lg:gap-[99px] py-0 md:py-12 sm:px-[10px] lg:px-[40px] xl:px-[0] lg:py-[100px]">
        
        <h2 className="text-[24px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-bold leading-[120%] tracking-[-2%] md:tracking-[-3%] lg:tracking-[-4%] text-[#0C0D1A] max-w-full md:max-w-[370px]">
          Safety & transparency
        </h2>

        <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] leading-[140%] text-[#15162ACC] max-w-full md:max-w-[654px]">
          We check the basics so you can focus on what matters: connecting with
          the business you want to support. The platform is regulated under
          European rules and legally authorised, giving you peace of mind on
          verification and process.
        </p>
      </div>

     
     <div className="w-full overflow-hidden py-10 md:py-14 lg:py-[100px] opacity-50">
  <div className="flex w-max animate-scroll gap-10 md:gap-16 lg:gap-[80px]">

    {[...Array(2)].map((_, i) => (
      <div key={i} className="flex items-center gap-10 md:gap-16 lg:gap-[80px]">

        <Image src="/images/frame-1.svg" alt="logo" width={147} height={32} />
        <Image src="/images/frame-2.svg" alt="logo" width={174} height={32} />
        <Image src="/images/frame-3.svg" alt="logo" width={43} height={32} />
        <Image src="/images/frame-4.svg" alt="logo" width={149} height={32} />

        <div className="hidden sm:block">
          <Image src="/images/frame-1.svg" alt="logo" width={174} height={32} />
        </div>

        <div className="hidden lg:block">
          <Image src="/images/frame-3.svg" alt="logo" width={43} height={32} />
        </div>

      </div>
    ))}

  </div>
</div>

    </section>
  );
}

export default SafteySection;





