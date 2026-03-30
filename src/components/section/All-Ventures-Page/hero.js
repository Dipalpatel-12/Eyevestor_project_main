import Button from "../../ui/button";
import Image from "next/image";

function VenturesPage() {
  return (
    <section className="w-full max-w-[1440px] mx-auto pl-[47px] pt-[18px] pb-[120px]  bg-[#F5F3F0]">
      <div className="  flex max-w-[1393px] justify-between ">
        <div className=" flex flex-col gap-[19px] max-w-[536px] items-start justify-center">
          <h2 className="text-[48px] font-semibold leading-[110%] tracking-[-4%] text-[#212234]">
            Explore all ventures
          </h2>
          <p className=" lg:text-[18px] md:text-[16px] leading-[140%] text-[#15162ACC]">
            Connect with a broad investor community and raise growth capital in
            a transparent way.
          </p>
          <Button className="px-[24px] py-[12px] bg-black text-white ">
            Sign up as investor
          </Button>
        </div>

        <div className="relative">
          <div className="flex right-0">
            <Image src="/images/venture1.svg" alt="" width={257} height={257} />
            <Image src="/images/venture3.svg" alt="" width={304} height={257} />
            <Image src="/images/venture2.svg" alt="" width={200} height={257} />
          </div>
          <div className="absolute flex flex-col top-[60px] left-[80px] bg-[#FFFFFF] border border-[#F5F3F0] p-[24px] rounded-[24px] gap-[10px]">
            <div className=" text-[18px] leading-[140%] text-[#0C0D1A]">
              <p>
                {" "}
                <span className=" font-bold">€127,399,137</span> already
                sharefunded by
              </p>
            </div>
            <div className=" flex gap-[27px] justify-center items-center">
              <div className="flex max-w-[407px]">
                <Image
                  src="/images/ellipse 61.svg"
                  alt="community"
                  width={58}
                  height={58}
                  className="rounded-full border-solid-3 border-white "
                />
                <Image
                  src="/images/ellipse 16.svg"
                  alt="community"
                  width={58}
                  height={58}
                  className="rounded-full border-solid-3 border-white -translate-x-2"
                />
                <Image
                  src="/images/ellipse 17.svg"
                  alt="community"
                  width={58}
                  height={58}
                  className="rounded-full border-solid-3 border-white -translate-x-4"
                />
                <Image
                  src="/images/ellipse 18.svg"
                  alt="community"
                  width={58}
                  height={58}
                  className="rounded-full border-solid-3 border-white -translate-x-6"
                />
                <Image  
                  src="/images/ellipse 19.svg"
                  alt="community"
                  width={58}
                  height={58}
                  className="rounded-full border-solid-3 border-white -translate-x-8"
                />
                <Image
                  src="/images/ellipse 20.svg"
                  alt="community"
                  width={58}
                  height={58}
                  className="rounded-full border-solid-3 border-white -translate-x-10"
                />
                <Image
                  src="/images/ellipse 62.svg"
                  alt="community"
                  width={58}
                  height={58}
                  className="rounded-full border-solid-3 border-white -translate-x-12"
                />
                <Image
                  src="/images/ellipse22.jpg"
                  alt="community"
                  width={58}
                  height={58}
                  className="rounded-full border-solid-3 border-white -translate-x-14"
                />
              </div>
              <div>
                <Button className=" px-[24px] py-[12px] bg-[#F5F3F0] text-[#0C0D1A] text-[16px] rounded-[100px]">
                  +42.7K investors
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VenturesPage;
