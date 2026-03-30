import Image from "next/image";

function AppSection() {
  return (
    <section
      className="
        mx-auto max-w-[1440px] flex justify-center
        py-[60px] md:py-[80px] xl:py-[100px]
        px-[16px] sm:px-[20px] md:px-[32px] lg:px-[40px] xl:px-0
      "
    >
      <div
        className="
          w-full max-w-[1122px]
          flex flex-col md:flex-row  
          items-stretch
        "
      >
     
        <div
          className="
            flex items-center bg-[#F5F3F0]
            w-full md:max-w-[545px]
            rounded-t-[16px] md:rounded-none md:rounded-l-[24px] xl:rounded-[24px]
          "
        >
          <div
            className="
              flex flex-col
              gap-[16px] md:gap-[24px]
              px-[16px] sm:px-[24px] md:px-[32px] xl:px-[40px]
              py-[24px] md:py-0
            "
          >
            <h3
              className="
                text-[22px] sm:text-[26px] md:text-[32px] lg:text-[40px] xl:text-[48px]
                font-semibold leading-[120%] xl:leading-[110%]
                text-[#0C0D1A]
              "
            >
              Follow your favorite companies via our app
            </h3>

            <p
              className="
                text-[14px] sm:text-[15px] md:text-[16px] xl:text-[18px]
                leading-[140%] text-[#15162ACC]
              "
            >
              As a co-owner, you have a personal dashboard with all your
              investments in one place. You can follow updates, access
              documents, participate in online voting, and use tools.
            </p>

            <div className="flex items-center gap-[12px] md:gap-[16px]">
              <Image
                src="/images/ios-img.svg"
                alt="app store"
                width={162}
                height={48}
                className="w-[120px] md:w-[150px] xl:w-[162px] h-auto"
              />
              <Image
                src="/images/google-img.png"
                alt="google play"
                width={162}
                height={48}
                className="w-[120px] md:w-[150px] xl:w-[162px] h-auto"
              />
            </div>
          </div>
        </div>

        <div
          className="
            relative flex justify-center items-end overflow-hidden
            w-full md:w-[578px]
            h-[300px] sm:h-[340px] md:h-[464px]
            rounded-b-[16px] md:rounded-none md:rounded-r-[24px] xl:rounded-[24px]
          "
          style={{
            backgroundImage: "url('/images/phone-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "right",
          }}
        >
          <Image
            src="/images/phone-img.png"
            alt="app preview"
            width={243}
            height={389}
            className="
              absolute
              translate-y-[60px] md:translate-y-[136px]
              w-[140px] md:w-[220px] xl:w-[243px]
              border border-b-0 border-[#E5E5EC]
              rounded-t-3xl
            "
          />
        </div>
      </div>
    </section>
  );
}

export default AppSection;