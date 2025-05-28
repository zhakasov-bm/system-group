import Image from "next/image";
import PrimaryButton from "./PrimaryButton";
import { useTranslations } from "next-intl";

const StatCard = ({ value, description }) => (
  <div className="text-left">
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">{value}</h2>
    <p className="text-base md:text-lg font-normal mt-2">{description}</p>
  </div>
);

const HeroSection = () => {
  const tButton = useTranslations("Button");
  const t = useTranslations("HomePage");
  const keys = ["yearsOfService", "partners", "happyClients"];

  return (
    <div className="relative min-h-[600px] md:h-[800px] overflow-hidden">
      <Image
        src="/hero.png"
        alt="Hero background"
        fill
        className="object-cover w-full h-full z-0"
        priority
        sizes="(max-width: 768px) 100vw, 100vw"
        quality={90}
      />
      <div className="absolute inset-0 bg-black/30" />{" "}
      {/* Overlay for better text readability */}
      <div className="container relative mx-auto px-4 py-32 md:pt-50 text-white text-left z-10">
        <div className="flex flex-col items-start gap-4 md:max-w-[720px]">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent !bg-clip-text [background:linear-gradient(91.15deg,_#fff,_#999)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            {t("title")}
          </h1>
          <p className="hidden md:block md:text-xl max-w-[520px] md:px-0">
            {t("subtitle")}
          </p>

          {/* Button moved under h1 */}
          <div className="mt-4 z-50">
            <PrimaryButton
              variant="primary"
              className="w-auto font-medium md:px-8 !px-4"
            >
              {tButton("title")}
            </PrimaryButton>
          </div>
        </div>

        {/* Robot image positioned at bottom right */}
        <div className="absolute bottom-[-110px] right-[-180px] w-[450px] md:hidden">
          <Image src="/robot.svg" alt="Robot" width={500} height={500} />
        </div>

        <div className="hidden text-white md:flex md:flex-row text-center md:text-left gap-10 md:gap-40 mt-12 md:mt-24">
          {keys.map((key) => (
            <div key={key}>
              <h1 className="text-5xl font-bold">{t(`${key}.value`)}</h1>
              <p className="text-lg font-normal max-w-[180px]">{t(`${key}.title`)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
