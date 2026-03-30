import Image from "next/image";
import Link from "next/link";
import Button from "../ui/button";

const footerLinksMobile = {
  "For investors": ["Explore", "How it works", "Sign up"],
  "For ventures": ["Sharefunding©", "How it works", "Join as venture"],
  "About us": ["Our story", "The team", "Jobs"],
  Support: ["FAQ", "Contact us", "Legal"],
};

const footerLinksDesktop = {
  "For investors": ["Explore", "How it works", "Documents", "FAQ"],
  "For ventures": ["Sharefunding©", "How it works", "Documents", "FAQ"],
  "About us": ["Our story", "The team", "Jobs"],
  Support: ["Contact us", "Legal", "Privacy statement", "Disclaimer"],
};

const signUpLinks = ["Join as investor", "Join as venture", "Newsletter"];

export default function Footer() {
  return (
    <footer className="w-full  bg-[#0C0D1A] relative">
  
      <div className="hidden xl:flex absolute right-0 top-[91px] items-center opacity-[0.06] z-[3] gap-0">
        <Image src="/images/Ellipse-67.svg" alt="" width={222} height={222} />
        <Image src="/images/Ellipse-44.svg" alt="" width={285} height={222} />
        <Image src="/images/Ellipse-43.svg" alt="" width={159} height={218} />
      </div>

      <div className="w-full max-w-[1440px] mx-auto xl:px-[32px] px-[16px] flex flex-col">
      
        <div className="flex flex-col gap-[22px] pt-[64px] pb-[64px]">
          <h2 className="max-w-[539px] font-medium leading-[100%] tracking-[-0.04em] text-white text-[32px] md:text-[48px] xl:text-[64px]">
            <span className=" text-[#F15B54]">Invest </span>in businesses <br />
            you believe in
          </h2>
          <p className="leading-[140%] text-white opacity-70 text-[16px] md:text-[18px] xl:max-w-[541px]">
            Connect with a broad investor community and raise growth capital in
            a transparent way.
          </p>
          <Button className="px-[24px] py-[12px] bg-white border border-[#E5E5EC] rounded-full font-semibold text-[#0C0D1A] text-[16px] w-[133px] h-[45px] flex items-center justify-center cursor-pointer">
            Get started
          </Button>
        </div>


        <div className="md:hidden w-full flex flex-col gap-[32px] pb-[32px]">
          {Object.entries(footerLinksMobile).map(([category, links]) => (
            <div key={category} className="flex flex-col gap-[16px]">
              <p className="font-semibold text-[14px] leading-[140%] text-white opacity-40 uppercase tracking-wide">
                {category}
              </p>
              <ul className="flex flex-col gap-[8px]">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-[16px] leading-[140%] text-[#C4C4C4] hover:opacity-100 transition-opacity"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>


        <div className="hidden md:grid xl:hidden w-full grid-cols-4 gap-x-8 gap-y-10 pb-[32px]">
          {Object.entries(footerLinksDesktop).map(([category, links]) => (
            <div key={category} className="flex flex-col gap-[16px]">
              <p className="font-semibold text-[16px] leading-[140%] text-[#F9F9FB]">
                {category}
              </p>
              <ul className="flex flex-col gap-[16px]">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-[14px] leading-[140%] text-[#C4C4C4] hover:opacity-100 transition-opacity"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="hidden xl:flex w-full flex-row justify-between gap-[32px] pb-[32px]">
          {Object.entries(footerLinksDesktop).map(([category, links]) => (
            <div
              key={category}
              className="flex flex-col gap-[16px] min-w-[249px]"
            >
              <p className="font-semibold text-[16px] leading-[140%] text-[#F9F9FB]">
                {category}
              </p>
              <ul className="flex flex-col gap-[16px]">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-[16px] leading-[140%] text-[#C4C4C4] hover:opacity-100 transition-opacity"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="flex flex-col gap-[16px] min-w-[249px]">
            <p className="font-semibold text-[16px] leading-[140%] text-[#F9F9FB]">
              Sign up
            </p>
            <ul className="flex flex-col gap-[16px]">
              {signUpLinks.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-[16px] leading-[140%] text-[#C4C4C4] hover:opacity-100 transition-opacity"
                  >
                    {link}
                  </Link>
                </li>
              ))}
           
              <li className="pt-[8px]">
                <div className="flex flex-row items-center gap-[16px]">
                  <Link href="#" aria-label="X / Twitter">
                    <Image
                      src="/images/Social-icon.svg"
                      alt="X"
                      width={24}
                      height={24}
                    />
                  </Link>
                  <Link href="#" aria-label="LinkedIn">
                    <Image
                      src="/images/linkedin.svg"
                      alt="LinkedIn"
                      width={24}
                      height={24}
                    />
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>

       
        <div className="w-full border-t border-white/10 flex flex-col pt-[32px] pb-[54px] xl:flex-row xl:justify-between xl:items-center xl:gap-3">
      
          <p className="xl:hidden font-normal text-[14px] leading-[140%] text-[#BFBFCF]">
            © 2025 Eyevestor: is gemachtigd om crowdfundingdiensten aan te
            bieden onder de ECSP-regelgeving.
          </p>

      
          <p className="hidden xl:block font-normal text-[16px] leading-[140%] text-[#BFBFCF]">
            © 2025 Eyevestor: is gemachtigd om crowdfundingdiensten aan te
            bieden onder de ECSP-regelgeving.
          </p>

          <p className="hidden xl:block font-normal text-[16px] leading-[140%] text-[#BFBFCF] text-center">
            Eyevestor is geregistreerd bij de AFM onder nummer 32000017.
          </p>

          <div className="xl:hidden flex flex-row items-center gap-[32px] pt-[32px]">
            <span className="font-normal text-[14px] text-white opacity-70">
              Cookies
            </span>
            <Link href="#" aria-label="X / Twitter">
              <Image
                src="/images/Social-icon.svg"
                alt="X"
                width={24}
                height={24}
              />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Image
                src="/images/linkedin.svg"
                alt="LinkedIn"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
