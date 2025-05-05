import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative h-[800px]">
      <Image
        src="/hero.png"
        alt="Hero background"
        fill
        className="object-cover w-full h-full"
        priority
      />
      <div className="container relative mx-auto pt-50 text-white z-10">
        <div className="flex flex-col gap-4 max-w-180">
          <h1 className="text-5xl font-bold text-transparent !bg-clip-text [background:linear-gradient(91.15deg,_#fff,_#999)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            Современные технологии для автоматизации бизнеса
          </h1>
          <p className="text-xl max-w-130">
            System Group Kazakhstan — надёжный партнёр в автоматизации торговли,
            логистики и производств
          </p>
        </div>
        <button className="mt-10 px-8 py-3 rounded-4xl bg-primary-600 text-white font-medium">
          Получить консультацию
        </button>
        <div className="text-white flex gap-40 mt-24">
          <div>
            <h1 className="text-5xl font-bold">30+ лет</h1>
            <p className="text-lg font-normal">Опыта на рынках</p>
          </div>
          <div>
            <h1 className="text-5xl font-bold">5000+</h1>
            <p className="text-lg font-normal">Проектов успешно <br />реализовано</p>
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
