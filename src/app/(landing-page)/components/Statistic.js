import Image from "next/image";

const statistics = [
  {
    value: "30+ лет",
    description: "опыта на рынках СНГ и международного B2B"
  },
  {
    value: "5000+",
    description: "Проектов успешно реализовано",
    bgImage: "/bg-logo.png"
  },
  {
    value: "10+",
    description: "отраслей автоматизировано",
    icons: [
      { src: "/s1.svg", alt: "icon 1", width: 80, height: 80, className: "absolute top-8 right-30" },
      { src: "/s2.svg", alt: "icon 2", width: 100, height: 100, className: "absolute bottom-10 right-6" },
      { src: "/s3.svg", alt: "icon 3", width: 70, height: 70, className: "absolute bottom-4 right-40" }
    ]
  }
];

const partners = [
  { src: "/e6.svg", alt: "partner 6" },
  { src: "/e1.svg", alt: "partner 1" },
  { src: "/e2.svg", alt: "partner 2" },
  { src: "/e3.svg", alt: "partner 3" },
  { src: "/e4.svg", alt: "partner 4" },
  { src: "/e5.svg", alt: "partner 5" }
];

const Statistic = () => {
  return (
    <section className="container mx-auto">
      <h1 className="text-4xl font-bold text-black text-center py-12">
        Мы помогаем бизнесу расти
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {statistics.map((stat, index) => (
          <div 
            key={index}
            className="bg-white rounded-2xl p-6 flex flex-col gap-2 relative pb-24"
            style={stat.bgImage ? {
              backgroundImage: `url("${stat.bgImage}")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "left top",
              backgroundSize: "cover",
            } : {}}
          >
            <h2 className="text-6xl text-black font-bold">{stat.value}</h2>
            <span className="text-xl text-black/80 max-w-3xs">
              {stat.description}
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
        <div className="bg-primary-600 rounded-2xl col-span-1 md:col-span-3 p-10 flex flex-col relative">
          <div className="flex flex-col gap-4 max-w-3xl">
            <h2 className="text-5xl text-white font-bold">
              Нам доверяют лидеры рынка
            </h2>
            <p className="text-xl text-white/80 max-w-xl">
              Мы автоматизировали бизнес-процессы для самых узнаваемых
              компаний в СНГ и за его пределами
            </p>
            <button className="px-8 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-100 transition-colors duration-300 w-fit mt-4">
              Получить консультацию
            </button>
          </div>

          <div className="flex flex-wrap justify-end items-end -space-x-5">
            {partners.map((partner, index) => (
              <div key={index} className="relative w-24 h-24">
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistic;
