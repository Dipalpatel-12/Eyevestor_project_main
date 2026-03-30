function CommonSection({
  badge,
  title,
  description,
  children,
  className = "",
  badgeClass = "",
  titleClass = "",
  descriptionClass = "",
}) {
  return (
    <section className={`w-full flex justify-center ${className}`}>
      <div
        className="
        w-full
        flex flex-col items-center text-center

        {/* mobile — Figma 393 spec: px-16px, gap-16px */}
        px-4 gap-4 

        {/* tablet 768 */}
        md:px-16 md:gap-[22px]

        {/* desktop — your original untouched */}
        xl:max-w-[1440px] xl:px-[273.5px] xl:gap-[22px]
      "
      >
        {badge && (
          <div
            className={`px-[12px] py-[4px] font-semibold rounded-full
            text-[14px] md:text-[16px]
            ${badgeClass || "bg-white text-[#212234]"}`}
          >
            {badge}
          </div>
        )}

        <div className="flex flex-col items-center gap-6 md:gap-[24px] w-full">
          {title && (
            <h2
              className={`font-semibold text-[#0C0D1A] leading-[110%] tracking-[-0.04em] w-full
    xl:max-w-[893px]
    ${titleClass || "text-[32px] md:text-[56px] xl:text-[84px]"}
  `}
            >
              {title}
            </h2>
          )}
          
          {description && (
            <p
              className={`leading-[140%] text-[#15162ACC] w-full
              text-[16px] md:text-[16px] xl:text-[18px] xl:max-w-[780px]
              ${descriptionClass}`}
            >
              {description}
            </p>
          )}
        </div>

        {children}
      </div>
    </section>
  );
}

export default CommonSection;
