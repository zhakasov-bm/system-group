import Image from "next/image";
import ButtonWA from "./ButtonWA";
const About = () => {
  return (
    <section className="container mx-auto">
      <div className="flex gap-20 py-20">
        <div className="w-1/2 flex gap-2 flex-col">
          <h3 className="text-xl font-semibold text-primary-600">О компании</h3>
          <h1 className="text-4xl font-bold text-black max-w-lg">
            Автоматизация под ключ для любого бизнеса
          </h1>
          <p className="text-lg font-normal text-black/80">
            SystemGroup Казахстан - крупный системный интегратор, который
            специализируется на автоматизации бизнеса в сфере торговли,
            складской и транспортной логистики, производства и пр. <br /> <br />{" "}
            Как официальный партнер и дистрибьютор, мы помогаем компаниям
            внедрять передовые технологии для повышения эффективности и
            оптимизации бизнес-процессов
          </p>

          <div className="mt-8">
            <ButtonWA></ButtonWA>
          </div>
        </div>
        <div className="w-1/2">
          <Image src="/about.svg" alt="About" width={400} height={400} />
        </div>
      </div>
    </section>
  );
};

export default About;
