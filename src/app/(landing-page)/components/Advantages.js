import Image from "next/image";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineSafety } from "react-icons/ai";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { TfiWorld } from "react-icons/tfi";
import PrimaryButton from "./PrimaryButton";

const AdvantageCard = ({ Icon, title }) => (
  <div className="flex flex-col gap-4 items-center">
    <Icon
      size={80}
      className="text-primary-600 border border-white/50 rounded-full p-6 md:p-8 md:size-[140px] transition-transform hover:scale-105"
    />
    <span className="font-normal text-base md:text-lg text-center max-w-[200px]">
      {title}
    </span>
  </div>
);

const Advantages = () => {
  return (
    <div className="relative min-h-[600px] md:h-[700px]">
      <Image
        src="/advantages.png"
        alt="Advantages background"
        fill
        className="object-cover w-full h-full"
        priority
        sizes="(max-width: 768px) 100vw, 100vw"
        quality={90}
      />
      <div className="absolute inset-0 bg-black/40" />{" "}
      {/* Overlay for better text readability */}
      <div className="container relative z-10 mx-auto px-4 py-16 md:py-0 md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 text-white">
        <div className="flex flex-col gap-8 md:gap-16 items-center">
          <div className="flex flex-col gap-2 text-center">
            <span className="text-primary-600 font-semibold text-lg md:text-xl">
              Преимущества
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Комплексный подход &quot;под ключ&quot;
            </h2>
          </div>

          <div className="grid grid-cols-2 md:flex md:flex-row gap-8 md:gap-12 lg:gap-16 justify-between items-center w-full max-w-6xl">
            <AdvantageCard Icon={IoSettingsOutline} title="Всe в одном месте" />
            <AdvantageCard
              Icon={AiOutlineSafety}
              title="Надeжное оборудование"
            />
            <AdvantageCard
              Icon={IoCheckmarkDoneSharp}
              title="Гарантия качества решений"
            />
            <AdvantageCard Icon={TfiWorld} title="Сервис по всей стране" />
          </div>

          <div className="mt-8 md:mt-12">
            <PrimaryButton variant="primary">
              Получить консультацию
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
