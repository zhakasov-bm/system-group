import Image from "next/image";
import PrimaryButton from "./PrimaryButton";
import { useTranslations } from "next-intl";

const partners = [
  { src: "/e6.svg", alt: "partner 6" },
  { src: "/e1.svg", alt: "partner 1" },
  { src: "/e2.svg", alt: "partner 2" },
  { src: "/e5.svg", alt: "partner 5" },
  { src: "/e3.svg", alt: "partner 3" },
  { src: "/e4.svg", alt: "partner 4" },
];

// Icons associated with each statistic block (if needed)
const statIcons = {
  happyClients: [
    { src: "/s1.svg", alt: "icon 1", width: 80, height: 80, className: "absolute top-8 sm:top-40 right-32 lg:top-6 lg:right-24" },
    { src: "/s2.svg", alt: "icon 2", width: 100, height: 100, className: "absolute bottom-10 sm:right-3 right-6" },
    { src: "/s3.svg", alt: "icon 3", width: 70, height: 70, className: "absolute bottom-4 sm:right-32 right-40" }
  ],
  // Add icons for other keys if you want
};

const keys = ["yearsOfService", "partners", "happyClients"];

const Statistic = () => {
  const t = useTranslations("Statistics");
  const tBtn = useTranslations("Button");

  return (
    <section className="container mx-auto px-4">
      <h1 className="text-4xl max-w-sm md:max-w-none md:text-4xl font-bold text-black text-center py-8 md:py-12">
        {t("name")}
      </h1>

      <div className="flex flex-col gap-4 md:grid md:grid-cols-3">
        {keys.map((key, index) => {
          const value = t(`${key}.value`);
          const description = t(`${key}.title`);
          const icons = statIcons[key] || [];

          return (
            <div
              key={key}
              className="bg-white rounded-2xl p-6 flex flex-col gap-2 relative pb-24"
            >
              <h2 className="text-5xl md:text-6xl text-black font-bold">{value}</h2>
              {index === 2 ? (
                <span
                  className="text-lg md:text-xl text-black/80 max-w-3xs"
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              ) : (
                <span className="text-lg md:text-xl text-black/80 max-w-3xs">
                  {description}
                </span>
              )}
              {icons.map((icon, idx) => (
                <Image
                  key={idx}
                  src={icon.src}
                  alt={icon.alt}
                  width={icon.width}
                  height={icon.height}
                  className={icon.className}
                />
              ))}
            </div>
          );
        })}

        {/* Bottom Section */}
        <div className="bg-primary-600 rounded-2xl p-6 sm:p-10 flex flex-col relative md:col-span-3">
          <div className="flex flex-col gap-4 max-w-full md:max-w-3xl">
            <h2 className="text-3xl md:text-5xl text-white font-bold">{t("title")}</h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-full md:max-w-xl">{t("subtitle")}</p>
            {/* Primary Button for desktop */}
            <PrimaryButton variant="secondary" className="hidden md:block mt-2">
              {tBtn("title")}
            </PrimaryButton>
          </div>

          <div className="flex flex-wrap justify-start md:justify-end items-end -space-x-5 mt-10 md:mt-0">
            {partners.map(({ src, alt }) => (
              <div key={src} className="relative w-16 h-16 sm:w-20 sm:h-20">
                <Image src={src} alt={alt} fill className="object-contain" />
              </div>
            ))}
          </div>
          {/* Primary Button for mobile */}
          <PrimaryButton variant="secondary" className="mt-10 md:hidden">
            {tBtn("title")}
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default Statistic;
