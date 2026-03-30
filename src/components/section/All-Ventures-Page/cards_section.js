// "use client";
// import Image from "next/image";
// import Button from "@/components/ui/button";
// import { useState } from "react";

// // ── Tabs ──────────────────────────────────────────────────────────────────────
// const tabs = ["All ventures", "Shares", "Bonds", "Convertable", "Non-funding"];

// // ── Cards Data ────────────────────────────────────────────────────────────────
// const cards = [
//   {
//     id: 0,
//     title: "Company name bv.",
//     subtitle: "Subheading",
//     description:
//       "We fight overconsumption with smart and sustainable apparel. Invest today and get a 7% return & special investor perks.",
//     raised: 224567,
//     target: 600000,
//     investors: 644,
//     image: "/images/venture1.svg",
//     logo: "/images/ellipse 61.svg",
//     overfunding: false,
//   },
//   {
//     id: 1,
//     title: "Company name bv.",
//     subtitle: "Subheading",
//     description:
//       "We fight overconsumption with smart and sustainable apparel. Invest today and get a 7% return & special investor perks.",
//     raised: 224567,
//     target: 600000,
//     investors: 644,
//     image: "/images/venture3.svg",
//     logo: "/images/ellipse 16.svg",
//     overfunding: false,
//   },
//   {
//     id: 2,
//     title: "Company name bv.",
//     subtitle: "Subheading",
//     description:
//       "We fight overconsumption with smart and sustainable apparel. Invest today and get a 7% return & special investor perks.",
//     raised: 224567,
//     target: 600000,
//     investors: 644,
//     image: "/images/venture2.svg",
//     logo: "/images/ellipse 17.svg",
//     overfunding: false,
//   },
//   {
//     id: 3,
//     title: "Company name bv.",
//     subtitle: "Subheading",
//     description:
//       "We fight overconsumption with smart and sustainable apparel. Invest today and get a 7% return & special investor perks.",
//     raised: 660000,
//     target: 600000,
//     investors: 644,
//     image: "/images/venture1.svg",
//     logo: "/images/ellipse 18.svg",
//     overfunding: true,
//   },
//   {
//     id: 4,
//     title: "Company name bv.",
//     subtitle: "Subheading",
//     description:
//       "We fight overconsumption with smart and sustainable apparel. Invest today and get a 7% return & special investor perks.",
//     raised: 224567,
//     target: 600000,
//     investors: 644,
//     image: "/images/venture3.svg",
//     logo: "/images/ellipse 19.svg",
//     overfunding: false,
//   },
//   {
//     id: 5,
//     title: "Company name bv.",
//     subtitle: "Subheading",
//     description:
//       "We fight overconsumption with smart and sustainable apparel. Invest today and get a 7% return & special investor perks.",
//     raised: 224567,
//     target: 600000,
//     investors: 644,
//     image: "/images/venture2.svg",
//     logo: "/images/ellipse 20.svg",
//     overfunding: false,
//   },
//   {
//     id: 6,
//     title: "Company name bv.",
//     subtitle: "Subheading",
//     description:
//       "We fight overconsumption with smart and sustainable apparel. Invest today and get a 7% return & special investor perks.",
//     raised: 224567,
//     target: 600000,
//     investors: 644,
//     image: "/images/venture1.svg",
//     logo: "/images/ellipse 62.svg",
//     overfunding: false,
//   },
//   {
//     id: 7,
//     title: "Company name bv.",
//     subtitle: "Subheading",
//     description:
//       "We fight overconsumption with smart and sustainable apparel. Invest today and get a 7% return & special investor perks.",
//     raised: 660000,
//     target: 600000,
//     investors: 644,
//     image: "/images/venture3.svg",
//     logo: "/images/ellipse22.jpg",
//     overfunding: true,
//   },
// ];

// // Progress Bar
// function ProgressBar({ value, max, overfunding }) {
//   const percent = Math.min((value / max) * 100, 100);
//   return (
//     <div className="w-full h-[5px] bg-[#E5E5EC] rounded-full overflow-hidden">
//       <div
//         className="h-full rounded-full"
//         style={{
//           width: `${percent}%`,
//           backgroundColor: overfunding ? "#E8390E" : "#E8390E",
//         }}
//       />
//     </div>
//   );
// }

// // Normal Card
// function NormalCard({ data }) {
//   return (
//     <div
//       className="flex-1 min-w-[320px] max-w-[640px] bg-white border border-[#E5E5EC] rounded-[24px] flex flex-col overflow-visible"
//       style={{
//         height: "467.25px",
//         boxShadow: "0px 1px 2px rgba(33,34,51,0.05)",
//       }}
//     >
//       {/* IMAGE — with logo half-overlapping bottom edge */}
//       <div className="relative w-full rounded-t-[24px] overflow-hidden" style={{ height: "192px", flexShrink: 0 }}>
//         <Image src={data.image} alt="venture" fill className="object-cover" />
//       </div>

//       {/* LOGO — sits between image and content, half/half */}
//       <div className="relative w-full" style={{ height: 0 }}>
//         <div
//           className="absolute left-[16px] w-[48px] h-[48px] rounded-[12px] bg-white border border-[#E5E5EC] overflow-hidden flex items-center justify-center"
//           style={{ top: "-24px", zIndex: 10, boxShadow: "0px 1px 4px rgba(33,34,51,0.10)" }}
//         >
//           <Image src={data.logo} alt="logo" width={36} height={36} className="object-contain" />
//         </div>
//       </div>

//       {/* CONTENT */}
//       <div className="flex flex-col flex-1 px-[16px] pt-[32px] pb-[20px] gap-[8px]">
//         <h3 className="text-[16px] font-semibold leading-[140%] text-[#212234]">
//           {data.title}
//         </h3>
//         <p className="text-[14px] font-medium leading-[140%] text-[#6B6C7E]">
//           {data.subtitle}
//         </p>
//         <p className="text-[13px] leading-[150%] text-[#6B6C7E] line-clamp-3">
//           {data.description}
//         </p>

//         {/* spacer */}
//         <div className="flex-1" />

//         {/* PROGRESS SECTION */}
//         <div className="flex flex-col gap-[6px]">
//           <div className="flex justify-between items-center">
//             <span className="text-[12px] text-[#6B6C7E]">Already raised</span>
//             <span className="text-[13px] font-semibold text-[#212234]">
//               €{data.raised.toLocaleString("nl-NL")},-
//             </span>
//           </div>
//           <ProgressBar value={data.raised} max={data.target} overfunding={false} />
//           <span className="text-[12px] text-[#6B6C7E]">
//             {data.investors} Vestors
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ── Overfunding Card ──────────────────────────────────────────────────────────
// function OverfundingCard({ data }) {
//   return (
//     <div
//       className="flex-1 min-w-[320px] max-w-[640px] bg-white border border-[#E5E5EC] rounded-[24px] flex flex-col overflow-visible"
//       style={{
//         height: "467.25px",
//         boxShadow: "0px 1px 2px rgba(33,34,51,0.05)",
//       }}
//     >
//       {/* IMAGE */}
//       <div className="relative w-full rounded-t-[24px] overflow-hidden" style={{ height: "192px", flexShrink: 0 }}>
//         <Image src={data.image} alt="venture" fill className="object-cover" />
//       </div>

//       {/* LOGO — half on image, half on white */}
//       <div className="relative w-full" style={{ height: 0 }}>
//         <div
//           className="absolute left-[16px] w-[48px] h-[48px] rounded-[12px] bg-white border border-[#E5E5EC] overflow-hidden flex items-center justify-center"
//           style={{ top: "-24px", zIndex: 10, boxShadow: "0px 1px 4px rgba(33,34,51,0.10)" }}
//         >
//           <Image src={data.logo} alt="logo" width={36} height={36} className="object-contain" />
//         </div>

//         {/* Overfunding badge — top right of logo row */}
//         <div
//           className="absolute right-[16px] flex items-center gap-[6px] bg-white border border-[#E5E5EC] rounded-[100px] px-[10px] py-[5px]"
//           style={{ top: "-16px", zIndex: 10 }}
//         >
//           <span className="w-[6px] h-[6px] rounded-full bg-[#E8390E] inline-block" />
//           <span className="text-[12px] font-medium text-[#0C0D1A]">Overfunding</span>
//         </div>
//       </div>

//       {/* CONTENT */}
//       <div className="flex flex-col flex-1 px-[16px] pt-[32px] pb-[20px] gap-[8px]">
//         <h3 className="text-[16px] font-semibold leading-[140%] text-[#212234]">
//           {data.title}
//         </h3>
//         <p className="text-[14px] font-medium leading-[140%] text-[#6B6C7E]">
//           {data.subtitle}
//         </p>
//         <p className="text-[13px] leading-[150%] text-[#6B6C7E] line-clamp-3">
//           {data.description}
//         </p>

//         {/* spacer */}
//         <div className="flex-1" />

//         {/* PROGRESS SECTION */}
//         <div className="flex flex-col gap-[6px]">
//           <div className="flex justify-between items-center">
//             <div className="flex items-center gap-[6px]">
//               {/* overfunding label inline */}
//               <span className="text-[12px] text-[#E8390E] font-medium flex items-center gap-[4px]">
//                 <span className="w-[5px] h-[5px] rounded-full bg-[#E8390E] inline-block" />
//                 Overfunding
//               </span>
//             </div>
//             <span className="text-[13px] font-semibold text-[#E8390E]">
//               €{data.target.toLocaleString("nl-NL")},-
//             </span>
//           </div>
//           {/* Full red bar for overfunding */}
//           <div className="w-full h-[5px] bg-[#E8390E] rounded-full" />
//           <span className="text-[12px] text-[#6B6C7E]">
//             {data.investors} Vestors
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ── Main Section ──────────────────────────────────────────────────────────────
// export default function VenturesGrid() {
//   const [activeTab, setActiveTab] = useState(0);

//   return (
//     <section className="w-full max-w-[1440px] mx-auto px-[40px] py-[40px] flex flex-col gap-[48px] bg-[#F5F3F0]">

//       {/* TOP BAR */}
//       <div className="flex justify-between items-center w-full">

//         {/* TABS — no gap, grouped in one pill container */}
//         <div className="flex items-center bg-white border border-[#E5E5EC] rounded-[100px] p-[4px]">
//           {tabs.map((tab, i) => (
//             <button
//               key={i}
//               onClick={() => setActiveTab(i)}
//               className={`px-[16px] py-[8px] rounded-[100px] text-[14px] font-medium leading-[140%] transition-all duration-200 whitespace-nowrap
//                 ${
//                   activeTab === i
//                     ? "bg-[#0C0D1A] text-white"
//                     : "text-[#6B6C7E] hover:bg-[#F5F3F0] hover:text-[#0C0D1A]"
//                 }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>

//         {/* RIGHT SIDE — search icon + filter button */}
//         <div className="flex items-center gap-[12px]">
//           {/* Search icon */}
//           <button className="w-[44px] h-[44px] flex items-center justify-center rounded-full bg-white border border-[#E5E5EC] hover:bg-[#F5F3F0] transition-colors duration-200">
//             <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <circle cx="8" cy="8" r="5.5" stroke="#6B6C80" strokeWidth="1.5" />
//               <path d="M12.5 12.5L16 16" stroke="#6B6C80" strokeWidth="1.5" strokeLinecap="round" />
//             </svg>
//           </button>

//           {/* Filter button */}
//           <Button className="flex items-center gap-[8px] px-[16px] py-[10px] border border-[#E5E5EC] rounded-[100px] bg-white text-[#0C0D1A] text-[14px] font-medium hover:bg-[#F5F3F0] transition-colors duration-200">
//             <Image src="/images/filter.svg" alt="filter" width={16} height={16} />
//             Filters
//           </Button>
//         </div>
//       </div>

//       {/* CARD GRID */}
//       <div className="flex flex-wrap gap-x-[24px] gap-y-[48px] w-full">
//         {cards.map((card) =>
//           card.overfunding ? (
//             <OverfundingCard key={card.id} data={card} />
//           ) : (
//             <NormalCard key={card.id} data={card} />
//           )
//         )}
//       </div>

//     </section>
//   );
// }

// "use client";

// import Image from "next/image";
// import Button from "@/components/ui/button";
// import { useState } from "react";
// import VentureCard from "../common-VentureCard";

// const tabs = ["All ventures", "Shares", "Bonds", "Convertable", "Non-funding"];

// const cards = [
//   {
//     id: 0,
//     title: "Company name bv.",
//     subtitle: "Subheading",
//     description:
//       "We fight overconsumption with smart and sustainable apparel.",
//     raised: 224567,
//     target: 600000,
//     investors: 644,
//     image: "/images/card-img1.svg",
//     logo: "/images/card-logo1.svg",
//     overfunding: false,
//   },
//   {
//     id: 1,
//     title: "Company name bv.",
//     subtitle: "Subheading",
//     description:
//       "We fight overconsumption with smart and sustainable apparel.",
//     raised: 660000,
//     target: 600000,
//     investors: 644,
//     image: "/images/card-img2.svg",
//     logo: "/images/card-logo1.svg",
//     overfunding: true,
//   },
//   {
//     id: 2,
//     title: "Company name bv.",
//     subtitle: "Subheading",
//     description:
//       "We fight overconsumption with smart and sustainable apparel.",
//     raised: 224567,
//     target: 600000,
//     investors: 644,
//     image: "/images/card-img3.svg",
//     logo: "/image/card-logo.svg",
//     overfunding: false,
//   },

//   {
//     id: 2,
//     title: "Company name bv.",
//     subtitle: "Subheading",
//     description:
//       "We fight overconsumption with smart and sustainable apparel.",
//     raised: 224567,
//     target: 600000,
//     investors: 644,
//     image: "/images/card-img3.svg",
//     logo: "/images/card-logo1.svg",
//     overfunding: false,
//   },

//   {
//     id: 2,
//     title: "Company name bv.",
//     subtitle: "Subheading",
//     description:
//       "We fight overconsumption with smart and sustainable apparel.",
//     raised: 224567,
//     target: 600000,
//     investors: 644,
//     image: "/images/card-img2.svg",
//     logo: "/images/card-logo1.svg",
//     overfunding: false,
//   },

//   {
//     id: 2,
//     title: "Company name bv.",
//     subtitle: "Subheading",
//     description:
//       "We fight overconsumption with smart and sustainable apparel.",
//     raised: 224567,
//     target: 600000,
//     investors: 644,
//     image: "/images/card-img3.svg",
//     logo: "/images/card-logo1.svg",
//     overfunding: false,
//   },

//   {
//     id: 2,
//     title: "Company name bv.",
//     subtitle: "Subheading",
//     description:
//       "We fight overconsumption with smart and sustainable apparel.",
//     raised: 224567,
//     target: 600000,
//     investors: 644,
//     image: "/images/card-img3.svg",
//     logo: "/images/card-logo1.svg",
//     overfunding: false,
//   },

//   {
//     id: 2,
//     title: "Company name bv.",
//     subtitle: "Subheading",
//     description:
//       "We fight overconsumption with smart and sustainable apparel.",
//     raised: 224567,
//     target: 600000,
//     investors: 644,
//     image: "/images/card-img4.svg",
//     logo: "/images/ellipse 17.svg",
//     overfunding: false,
//   },
// ];

// export default function VenturesGrid() {
//   const [activeTab, setActiveTab] = useState(0);

//   return (
//     <section className="w-full max-w-[1440px] mx-auto px-[40px] py-[40px] flex flex-col gap-[48px]">

//       {/* TOP BAR */}
//       <div className="flex justify-between items-center">

//         {/* TABS */}
//         <div className="flex bg-white border border-[#E5E5EC] rounded-[100px] p-[4px]">
//           {tabs.map((tab, i) => (
//             <button
//               key={i}
//               onClick={() => setActiveTab(i)}
//               className={`px-[16px] py-[8px] rounded-[100px] text-[14px]
//               ${
//                 activeTab === i
//                   ? "bg-black text-white"
//                   : "text-[#6B6C7E] hover:bg-[#F5F3F0]"
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="flex items-center gap-[12px]">

//           {/* Search */}
//           <button className="w-[44px] h-[44px] flex items-center justify-center rounded-full bg-white border border-[#E5E5EC]">
//             🔍
//           </button>

//           {/* Filter */}
//           <Button className="flex items-center gap-[8px] px-[16px] py-[10px] border border-[#E5E5EC] rounded-[100px] bg-white">
//             <Image
//               src="/images/filter.svg"
//               alt="filter"
//               width={16}
//               height={16}
//             />
//             Filters
//           </Button>
//         </div>
//       </div>

//       {/* GRID */}
//       <div className="flex flex-wrap gap-x-[24px] gap-y-[48px]">
//         {cards.map((card) => (
//           <VentureCard key={card.id} data={card} />
//         ))}
//       </div>

//     </section>
//   );
// }

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

      {/* Cards Grid — gap-x: 24px, gap-y: 48px */}
      <div className="flex flex-wrap gap-x-6 gap-y-12">
        {cards.map((card) => (
          <VentureCard key={card.id} data={card} />
        ))}
      </div>
    </section>
  );
}
