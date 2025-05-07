import Image from "next/image";
import PrimaryButton from "./PrimaryButton";

const StatCard = ({ value, description }) => (
  <div className="text-left">
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">{value}</h2>
    <p className="text-base md:text-lg font-normal mt-2">{description}</p>
  </div>
);

const HeroSection = () => {
  return (
    <div className="relative min-h-[600px] md:h-[800px]">
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
      <div className="container relative mx-auto px-4 py-24 md:pt-50 text-white text-left z-10">
        <div className="flex flex-col gap-4 md:max-w-[720px]">
          <h1 className="text-3xl md:text-5xl font-bold text-transparent !bg-clip-text [background:linear-gradient(91.15deg,_#fff,_#999)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            Современные технологии для автоматизации бизнеса
          </h1>
          <p className="text-xl max-w-[520px] md:px-0">
            System Group Kazakhstan — надёжный партнёр в автоматизации торговли,
            логистики и производств
          </p>
        </div>

        <div className="w-[400px] ml-0 md:hidden">
          <Image src="/robot.svg" alt="Robot" width={500} height={500} />
        </div>

        {/* Button for desktop - hidden on mobile */}
        <div className="justify-center md:block md:mt-12">
          <PrimaryButton variant="primary">
            Получить консультацию
          </PrimaryButton>
        </div>


        <div className="hidden text-white md:flex md:flex-row text-center md:text-left gap-10 md:gap-40 mt-12 md:mt-24">
          <div>
            <h1 className="text-5xl font-bold">30+ лет</h1>
            <p className="text-lg font-normal">Опыта на рынках</p>
          </div>
          <div>
            <h1 className="text-5xl font-bold">5000+</h1>
            <p className="text-lg font-normal">
              Проектов успешно <br />
              реализовано
            </p>
          </div>
          <div>
            <h1 className="text-5xl font-bold">99%</h1>
            <p className="text-base font-normal">
              Клиентов остаются <br />с нами надолго
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
