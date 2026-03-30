
"use client";
import Image from "next/image";
import Link from "next/link";
import { navItems } from "../data/navbarData";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#F5F3F0]">
      <nav>

        
        <div className="hidden xl:flex max-w-[1440px] mx-auto px-10 items-center justify-between py-6 gap-[10px]">

          <div className="pr-[114px]">
            <Link href="/">
              <Image
                src="/images/main-logo.svg"
                alt="logo"
                width={156}
                height={39}
              />
            </Link>
          </div>

          <div className="flex items-center justify-center gap-[15px]">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-[10px] py-[13.5px] px-[16px]"
              >
                <Link
                  href={item.link}
                  className=" text-[16px] font-semibold whitespace-nowrap"
                >
                  {item.name}
                </Link>
                <Image
                  src="/images/down-arrow.svg"
                  alt="arrow"
                  width={12}
                  height={6}
                  className="pt-[9px] pb-[6px]"
                />
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="px-[24px] py-[12px] bg-white border border-[#E5E5EC] rounded-full text-[16px] font-semibold whitespace-nowrap">
              For ventures
            </button>
            <button className="px-[24px] py-[12px] border border-[#0C0D1A] rounded-full text-[16px] font-semibold">
              Login
            </button>
            <Image src="/images/globe.svg" alt="globe" width={24} height={24} />
          </div>
        </div>

      
        <div className="hidden md:flex xl:hidden w-full px-6 items-center justify-between py-4">

          
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/main-logo.svg"
              alt="logo"
              width={120}
              height={30}
            />
          </Link>

          <div className="flex items-center gap-1">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-1 py-2 px-2 lg:px-3"
              >
                <Link
                  href={item.link}
                  className="font-[Hanken_Grotesk] text-[13px] lg:text-[14px] font-semibold whitespace-nowrap text-[#0C0D1A]"
                >
                  {item.name}
                </Link>
                <Image
                  src="/images/down-arrow.svg"
                  alt="arrow"
                  width={10}
                  height={5}
                />
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button className="px-[12px] py-[8px] lg:px-[16px] lg:py-[10px] bg-white border border-[#E5E5EC] rounded-full text-[12px] lg:text-[13px] font-semibold whitespace-nowrap">
              For ventures
            </button>
            <button className="px-[12px] py-[8px] lg:px-[16px] lg:py-[10px] border border-[#0C0D1A] rounded-full text-[12px] lg:text-[13px] font-semibold whitespace-nowrap">
              Login
            </button>
            <Image src="/images/globe.svg" alt="globe" width={20} height={20} />
          </div>
        </div>

   
        <div className="md:hidden px-[12px] py-[12px]">
          <div className="bg-white rounded-2xl px-[12px] py-[12px] flex items-center justify-between">
            <Link href="/">
              <Image
                src="/images/main-logo.svg"
                alt="logo"
                width={156}
                height={39}
                className="w-[120px] h-auto"
              />
            </Link>
            <div className="flex items-center gap-6">
              <Image src="/images/globe.svg" alt="globe" width={24} height={24} />
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
                className="flex flex-col justify-center gap-[5px] w-6 h-6"
              >
                <span className={`block w-6 h-[2px] bg-[#0C0D1A] transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
                <span className={`block w-6 h-[2px] bg-[#0C0D1A] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`block w-6 h-[2px] bg-[#0C0D1A] transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
              </button>
            </div>
          </div>

          {menuOpen && (
            <div className="bg-white rounded-2xl mt-2 px-[12px] flex flex-col">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-4 border-b border-[#E5E5EC]"
                >
                  <Link
                    href={item.link}
                    className="font-[Hanken_Grotesk] text-[15px] font-semibold text-[#0C0D1A]"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  <Image src="/images/down-arrow.svg" alt="arrow" width={10} height={5} />
                </div>
              ))}
              <div className="flex flex-col gap-3 py-5">
                <button className="w-full py-[13px] bg-[#0C0D1A] text-white rounded-full text-[15px] font-semibold">
                  For ventures
                </button>
                <button className="w-full py-[13px] bg-white border border-[#E5E5EC] rounded-full text-[15px] font-semibold">
                  Login
                </button>
              </div>
            </div>
          )}
        </div>

      </nav>
    </div>
  );
} 