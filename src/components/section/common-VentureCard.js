// import Image from "next/image";

// // Progress Bar (INSIDE SAME FILE)
// function ProgressBar({ value, max }) {
//   const percent = Math.min((value / max) * 100, 100);

//   return (
//     <div className="w-full h-[5px] bg-[#E5E5EC] rounded-full overflow-hidden">
//       <div
//         className="h-full rounded-full bg-[#E8390E]"
//         style={{ width: `${percent}%` }}
//       />
//     </div>
//   );
// }

// export default function VentureCard({ data }) {
//   const isOverfunding = data.overfunding;

//   return (
//     <div
//       className="flex-1 min-w-[320px] max-w-[640px] bg-white border border-[#E5E5EC] rounded-[24px] flex flex-col overflow-visible"
//       style={{
//         height: "467.25px",
//         boxShadow: "0px 1px 2px rgba(33,34,51,0.05)",
//       }}
//     >
    
//       <div className="relative w-full h-[192px] rounded-t-[24px] overflow-hidden">
//         <Image src={data.image} alt="venture" fill className="object-cover" />
//       </div>

     
//       <div className="relative w-full h-0">
      
//         <div className="absolute left-[16px] -top-[24px] w-[64px] h-[64px] rounded-[12px] flex items-center justify-center shadow-sm">
//           <Image src={data.logo} alt="logo" width={64} height={64} />
//         </div>

        
//         {isOverfunding && (
//           <div className="absolute right-[16px] -top-[16px] flex items-center gap-[6px] bg-white border border-[#E5E5EC] rounded-[100px] px-[10px] py-[5px]">
//             <span className="w-[6px] h-[6px] rounded-full bg-[#E8390E]" />
//             <span className="text-[12px] font-medium text-[#0C0D1A]">
//               Overfunding
//             </span>
//           </div>
//         )}
//       </div>

      
//       <div className="flex flex-col flex-1 px-[16px] pt-[32px] pb-[20px] gap-[8px]">
//         <h3 className="text-[16px] font-semibold text-[#212234]">
//           {data.title}
//         </h3>

//         <p className="text-[14px] text-[#6B6C7E]">{data.subtitle}</p>

//         <p className="text-[13px] text-[#6B6C7E] line-clamp-3">
//           {data.description}
//         </p>

//         <div className="flex-1" />

//         <div className="flex flex-col gap-[6px]">
//           <div className="flex justify-between items-center">
//             {isOverfunding ? (
//               <span className="text-[12px] text-[#E8390E] flex items-center gap-[4px]">
//                 <span className="w-[5px] h-[5px] bg-[#E8390E] rounded-full" />
//                 Overfunding
//               </span>
//             ) : (
//               <span className="text-[12px] text-[#6B6C7E]">
//                 Already raised
//               </span>
//             )}

//             <span
//               className={`text-[13px] font-semibold ${
//                 isOverfunding ? "text-[#E8390E]" : "text-[#212234]"
//               }`}
//             >
//               €
//               {(isOverfunding ? data.target : data.raised).toLocaleString(
//                 "nl-NL"
//               )}
//               ,-
//             </span>
//           </div>

//           {isOverfunding ? (
//             <div className="w-full h-[5px] bg-[#E8390E] rounded-full" />
//           ) : (
//             <ProgressBar value={data.raised} max={data.target} />
//           )}

//           <span className="text-[12px] text-[#6B6C7E]">
//             {data.investors} Vestors
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }




import Image from "next/image";

function ProgressBar({ value, max }) {
  const percent = Math.min((value / max) * 100, 100);
  return (
    <div className="w-full h-[5px] bg-[#E5E5EC] rounded-full overflow-hidden">
      <div className="h-full bg-[#E8390E] rounded-full" style={{ width: `${percent}%` }} />
    </div>
  );
}

function OverfundingBar() {
  return (
    <div className="w-full h-[5px] rounded-full overflow-hidden flex">
      <div className="h-full bg-[#E8390E] rounded-l-full" style={{ width: "75%" }} />
      <div className="h-full bg-[#8B1A10] rounded-r-full" style={{ width: "25%" }} />
    </div>
  );
}

export default function VentureCard({ data }) {
  const isOverfunding = data.overfunding;

  return (
    <div className="flex flex-col w-[322px] min-w-[320px] max-w-[640px] h-[467px] bg-white border border-[#E5E5EC] rounded-[24px] overflow-hidden shadow-[0px_1px_2px_rgba(33,34,51,0.05)] flex-grow">

      {/* Header Image */}
      <div className="relative w-full h-[201px] shrink-0 rounded-t-[16px] overflow-hidden">
        <Image src={data.image} alt="venture" fill className="object-cover" />
      </div>

      {/* Logo overlap */}
      <div className="relative w-full h-0">
        <div className="absolute left-4 -top-8 w-16 h-16 rounded-[12px] overflow-hidden shadow-sm bg-white z-10">
          <Image src={data.logo} alt="logo" width={64} height={64} />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 px-4 pt-10 pb-5 gap-2">

        <h3 className="text-[16px] font-bold text-[#212234] leading-[22px]">{data.title}</h3>
        <p className="text-[13px] text-[#6B6C7E] leading-[18px]">{data.subtitle}</p>
        <p className="text-[14px] text-[#4E5067] leading-[20px] line-clamp-3 w-[274px]">{data.description}</p>

        <div className="flex-1" />

        {/* CTA */}
        <div className="flex flex-col gap-2">

          {/* Label + Amount */}
          <div className="flex justify-between items-center">
            {isOverfunding ? (
              <div className="flex items-center gap-1 px-[6px] py-[2px] bg-[#FFF3F2] border border-[#FFCCC9] rounded-[6px]">
                <span className="text-[12px] font-medium text-[#B2201B] leading-[18px]">Overfunding</span>
                <Image src="/images/question-img.svg" alt="info" width={12} height={12} />
              </div>
            ) : (
              <span className="text-[12px] text-[#6B6C7E] leading-[18px]">Already raised</span>
            )}
            <span className={`text-[13px] font-semibold leading-[18px] ${isOverfunding ? "text-[#E8390E]" : "text-[#212234]"}`}>
              €{(isOverfunding ? data.target : data.raised).toLocaleString("nl-NL")},-
            </span>
          </div>

          {/* Bar */}
          {isOverfunding ? <OverfundingBar /> : <ProgressBar value={data.raised} max={data.target} />}

          {/* Vestors */}
          <span className="text-[12px] text-[#6B6C7E] leading-[18px]">{data.investors} Vestors</span>
        </div>
      </div>
    </div>
  );
}