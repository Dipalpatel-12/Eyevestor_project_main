import Image from "next/image";
import Button from "../../ui/button";
import CommonSection from "../common-hero";

const companies = [
  { name: "Company name bv.", sub: "Sustainability", img: "/images/company1.svg" },
  { name: "Company name bv.", sub: "Sustainability", img: "/images/company2.svg" },
  { name: "Company name bv.", sub: "Sustainability", img: "/images/company3.svg" },
  { name: "Company name bv.", sub: "Sustainability", img: "/images/company4.svg" },
  { name: "Company name bv.", sub: "Sustainability", img: "/images/company6.svg" },
  { name: "Company name bv.", sub: "Sustainability", img: "/images/company3.svg" },
  { name: "Company name bv.", sub: "Sustainability", img: "/images/company4.svg" },
  { name: "Company name bv.", sub: "Sustainability", img: "/images/company2.svg" },
  { name: "Company name bv.", sub: "Sustainability", img: "/images/company1.svg" },
  { name: "Company name bv.", sub: "Sustainability", img: "/images/company5.svg" },
  { name: "Company name bv.", sub: "Sustainability", img: "/images/company6.svg" },
  { name: "Company name bv.", sub: "Sustainability", img: "/images/company4.svg" },
  { name: "Company name bv.", sub: "Sustainability", img: "/images/company1.svg" },
  { name: "Company name bv.", sub: "Sustainability", img: "/images/company4.svg" },
  { name: "Company name bv.", sub: "Sustainability", img: "/images/company2.svg" },
  { name: "Company name bv.", sub: "Sustainability", img: "/images/company3.svg" },
  { name: "Company name bv.", sub: "Sustainability", img: "/images/company5.svg" },
  { name: "Company name bv.", sub: "Sustainability", img: "/images/company6.svg" },
];

function CompanyCard({ name, sub, img }) {
  return (
    <div
      className="
      flex items-center
      gap-2 sm:gap-3 lg:gap-4
      w-[240px] sm:w-[300px] md:w-[340px] lg:w-[404px]
      p-[10px] sm:p-[12px] md:p-[14px] lg:p-[16px]
      bg-white rounded-[12px] lg:rounded-[16px]
      shadow-lg
      flex-shrink-0
    "
    >
      <div className="rounded-[10px] lg:rounded-[16px] bg-[#0B0B1A] flex items-center justify-center flex-shrink-0">
        <Image
          src={img}
          alt="company-logo"
          width={66}
          height={66}
          className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[56px] md:h-[56px] lg:w-[66px] lg:h-[66px]"
        />
      </div>

      <div className="flex flex-col min-w-0">
        <div
          className="
          font-semibold text-[#0C0D1A] leading-[120%]
          text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]
          truncate
        "
        >
          {name}
        </div>
        <div
          className="
          text-[#6B7280] leading-[140%]
          text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px]
        "
        >
          {sub}
        </div>
      </div>
    </div>
  );
}

function DiscoverSection() {
  return (
    <section className="w-full bg-white py-[40px] lg:py-[60px] flex flex-col items-center justify-center gap-[30px] lg:gap-[40px] overflow-x-hidden">
      <CommonSection
        title={
          <>
            Discover over <span className="text-[#F15B54]">300</span>
            <br />
            companies sharefunding
          </>
        }
        description="Explore a curated selection of ventures currently raising capital."
        titleClass="text-[24px] sm:text-[42px] md:text-[52px] xl:text-[56px]"
      >
        <Button size="md">Explore all ventures</Button>
      </CommonSection>

      <div className="w-full flex flex-col gap-[24px] sm:gap-[30px] lg:gap-[40px]">

        <div className="w-full overflow-hidden py-[16px] sm:py-[20px] lg:py-[30px]">
          <div className="flex w-max animate-scroll-left gap-[16px] sm:gap-[24px] md:gap-[32px] lg:gap-[40px]">
            {[...companies, ...companies].map((c, i) => (
              <CompanyCard key={i} name={c.name} sub={c.sub} img={c.img} />
            ))}
          </div>
        </div>

        <div
          className="w-full overflow-x-auto py-[16px] sm:py-[20px] lg:py-[30px]"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          <div className="w-full overflow-hidden py-[16px] sm:py-[20px] lg:py-[30px]">
            <div className="flex w-max animate-scroll-right gap-[16px] sm:gap-[24px] md:gap-[32px] lg:gap-[40px]">
              {[...companies, ...companies].map((c, i) => (
                <CompanyCard key={i} name={c.name} sub={c.sub} img={c.img} />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default DiscoverSection;