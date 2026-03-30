"use client";

import Image from "next/image";
import { useState } from "react";
import VentureCard from "../common-VentureCard";

const tabs = ["All ventures", "Shares", "Bonds", "Convertable", "Non-funding"];

const cards = [
  {
    id: 0,
    title: "Company name bv.",
    subtitle: "Subheading",
    description:
      "We fight overconsumption with smart and sustainable apparel. Invest today and get a 7% return & special investor perks.",
    raised: 224567,
    target: 600000,
    investors: 644,
    image: "/images/card-img1.svg",
    logo: "/images/card-logo1.svg",
    overfunding: false,
  },
  {
    id: 1,
    title: "Company name bv.",
    subtitle: "Subheading",
    description:
      "We fight overconsumption with smart and sustainable apparel. Invest today and get a 7% return & special investor perks.",
    raised: 660000,
    target: 600000,
    investors: 644,
    image: "/images/card-img2.svg",
    logo: "/images/card-logo1.svg",
    overfunding: false,
  },
  {
    id: 2,
    title: "Company name bv.",
    subtitle: "Subheading",
    description:
      "We fight overconsumption with smart and sustainable apparel. Invest today and get a 7% return & special investor perks.",
    raised: 224567,
    target: 600000,
    investors: 644,
    image: "/images/card-img3.svg",
    logo: "/images/card-logo1.svg",
    overfunding: false,
  },
  {
    id: 3,
    title: "Company name bv.",
    subtitle: "Subheading",
    description:
      "We fight overconsumption with smart and sustainable apparel. Invest today and get a 7% return & special investor perks.",
    raised: 224567,
    target: 600000,
    investors: 644,
    image: "/images/card-img3.svg",
    logo: "/images/card-logo.svg",
    overfunding: true,
  },
  { 
    id: 4,
    title: "Company name bv.",
    subtitle: "Subheading",
    description:
      "We fight overconsumption with smart and sustainable apparel. Invest today and get a 7% return & special investor perks.",
    raised: 224567,
    target: 600000,
    investors: 644,
    image: "/images/card-img2.svg",
    logo: "/images/card-logo1.svg",
    overfunding: false,
  },
  {
    id: 5,
    title: "Company name bv.",
    subtitle: "Subheading",
    description:
      "We fight overconsumption with smart and sustainable apparel. Invest today and get a 7% return & special investor perks.",
    raised: 224567,
    target: 600000,
    investors: 644,
    image: "/images/card-img3.svg",
    logo: "/images/card-logo1.svg",
    overfunding: false,
  },
  {
    id: 6,
    title: "Company name bv.",
    subtitle: "Subheading",
    description:
      "We fight overconsumption with smart and sustainable apparel. Invest today and get a 7% return & special investor perks.",
    raised: 224567,
    target: 600000,
    investors: 644,
    image: "/images/card-img3.svg",
    logo: "/images/card-logo1.svg",
    overfunding: false,
  },
  {
    id: 7,
    title: "Company name bv.",
    subtitle: "Subheading",
    description:
      "We fight overconsumption with smart and sustainable apparel. Invest today and get a 7% return & special investor perks.",
    raised: 660000,
    target: 600000,
    investors: 644,
    image: "/images/card-img4.svg",
    logo: "/images/card-logo.svg",
    overfunding: true,
  },
];

export default function VenturesGrid() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="w-full max-w-[1440px] mx-auto px-10 py-10 flex flex-col gap-12">
      {/* Top Bar */}
      <div className="flex justify-between items-center">
        {/* Tabs */}
        <div className="flex items-center p-1 bg-white border border-[#E5E5EC] rounded-full">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-4 py-2 rounded-full text-[14px] leading-5 transition-colors duration-150
                ${activeTab === i ? "bg-[#0C0D1A] text-white font-medium" : "text-[#6B6C7E] font-normal hover:bg-[#F5F3F0]"}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Search + Filters */}
        <div className="flex items-center gap-3">
          {/* Search */}
          <button className="w-11 h-11 flex items-center justify-center rounded-full bg-white border border-[#E5E5EC]">
            <Image
              src="/images/search.svg"
              alt="search"
              width={18}
              height={18}
            />
          </button>

          {/* Filters */}
          <button className="flex items-center gap-2 h-11 px-4 bg-white border border-[#E5E5EC] rounded-full text-[14px] text-[#212234]">
            <Image
              src="/images/filter.svg"
              alt="filter"
              width={16}
              height={16}
            />
            Filters
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-x-6 gap-y-12">
        {cards.map((card) => (
          <VentureCard key={card.id} data={card} />
        ))}
      </div>
    </section>
  );
}
