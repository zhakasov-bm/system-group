import Image from "next/image";
import PrimaryButton from "./PrimaryButton";
import statistics from "../data/statistics";

const partners = [
  { src: "/e6.svg", alt: "partner 6" },
  { src: "/e1.svg", alt: "partner 1" },
  { src: "/e2.svg", alt: "partner 2" },
  { src: "/e3.svg", alt: "partner 3" },
  { src: "/e4.svg", alt: "partner 4" },
  { src: "/e5.svg", alt: "partner 5" },
];

const Statistic = () => {
  return (
    <section className="container mx-auto px-4">
      <h1 className="text-4xl max-w-sm md:max-w-none md:text-4xl font-bold text-black text-center py-8 md:py-12">
        Мы помогаем бизнесу расти
      </h1>

      <div className="flex flex-col gap-4 md:grid md:grid-cols-3">
        {statistics.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 flex flex-col gap-2 relative pb-24"
            style={
              stat.bgImage
                ? {
                    backgroundImage: `url("${stat.bgImage}")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "left top",
                    backgroundSize: "cover",
                  }
                : {}
            }
          >
            <h2 className="text-5xl md:text-6xl text-black font-bold">
              {stat.value}
            </h2>
            <span className="text-lg md:text-xl text-black/80 max-w-3xs">
              {Array.isArray(stat.description) 
                ? stat.description.map((line, i) => (
                    <span key={i} className="block">{line}</span>
                  ))
                : stat.description}
            </span>
            {stat.icons?.map((icon, idx) => (
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
        ))}

        {/* Bottom Section */}
        <div className="bg-primary-600 rounded-2xl p-6 sm:p-10 flex flex-col relative md:col-span-3">
          <div className="flex flex-col gap-4 max-w-full md:max-w-3xl">
            <h2 className="text-3xl md:text-5xl text-white font-bold">
              Нам доверяют лидеры рынка
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-full md:max-w-xl">
              Мы автоматизировали бизнес-процессы для самых узнаваемых компаний
              в СНГ и за его пределами
            </p>
            <PrimaryButton variant="secondary" className="hidden md:block mt-2">
              Получить консультацию
            </PrimaryButton>
          </div>

          <div className="flex flex-wrap justify-start md:justify-end items-end -space-x-5 mt-10 md:mt-0">
            {partners.map((partner, index) => (
              <div key={index} className="relative w-16 h-16 sm:w-20 sm:h-20">
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
          <PrimaryButton variant="secondary" className="mt-10 md:hidden">
            Получить консультацию
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default Statistic;
