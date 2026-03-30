"use client";
import { useState } from "react";
import Image from "next/image";

function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is sharefunding?",
      answer: "Sharefunding allows you to invest in companies and become a co-owner.",
    },
    {
      question: "How do I start investing?",
      answer: "Create an account, choose a company, and invest easily.",
    },
    {
      question: "How much can I invest?",
      answer: "You can start with a small amount depending on the company.",
    },
    {
      question: "What happens after I invest?",
      answer: "You become a co-owner and can track your investment.",
    },
    {
      question: "What are the risks?",
      answer: "All investments carry risks. Always research before investing.",
    },
    {
      question: "What does it cost to invest?",
      answer: "There may be platform or transaction fees.",
    },
  ];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-0 py-12 md:py-16 lg:py-[100px]">      
   
      <div className="flex flex-col xl:justify-center lg:px-[40px] xl:px-[0] lg:flex-row gap-10 md:gap-14 lg:gap-[53px]">
        
        <div className="flex flex-col max-w-full lg:max-w-[371px] gap-3 md:gap-4">
          
          <Image 
            src="/images/msg-logo.svg"
            alt="msg logo"
            width={43}
            height={43}
            className="p-[8px] md:p-[9px] bg-[#F5F3F0] rounded-[10px] md:rounded-[12px]"
          />

          <h2 className="text-[26px] sm:text-[30px] md:text-[36px] lg:text-[48px] leading-[120%] lg:leading-[110%] tracking-[-2%] lg:tracking-[-4%] text-[#0C0D1A] font-semibold">
            Frequently asked questions
          </h2>

          <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] leading-[140%] text-[#15162ACC]">
            For more questions visit the{" "}
            <span className="text-red-500 underline cursor-pointer">
              Help Center.
            </span>
          </p>
        </div>

     <div className="flex flex-col w-full max-w-full lg:max-w-[696px] gap-[6px] md:gap-[8px]">
          
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-[#BFBFCF]">
              
    
              <div
                onClick={() => toggleFaq(index)}
                className="flex justify-between items-center py-3 md:py-4 cursor-pointer"
              >
                <p className="text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-bold leading-[120%] text-[#0C0D1A]">
                  {faq.question}
                </p>

                <div className="w-[32px] h-[32px] md:w-[36px] md:h-[36px] lg:w-[40px] lg:h-[40px] p-[6px] md:p-[8px] rounded-full bg-[#F2F2F2] flex items-center justify-center">
                  <span className="text-[16px] md:text-[18px] lg:text-[20px]">
                    {activeIndex === index ? "-" : "+"}
                  </span>
                </div>
              </div>

           
              {activeIndex === index && (
                <div className="pb-4 md:pb-5 text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-[#15162ACC]">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default FaqSection;
