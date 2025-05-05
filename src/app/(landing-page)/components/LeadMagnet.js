import ButtonWA from "./ButtonWA";

const LeadMagnet = () => {
  return (
    <section className="container mx-auto my-20">
      <div className="flex flex-col gap-4 rounded-3xl p-10 justify-center items-center bg-white">
        <h1 className="text-4xl font-bold text-center p-5">
          Бесплатный расчёт стоимости <br />
          автоматизации за 1 день
        </h1>
        <p className="text-lg font-normal text-center px-50">
          Анализируем процессы, выявим слабые места <br /> и предложим
          оптимальное решение — бесплатно.
        </p>
        <div className="flex gap-4 py-10">
          <ButtonWA>Заказать консультацию</ButtonWA>
          <button className="px-8 py-3 rounded-4xl bg-primary-600 text-white font-medium">
            Оставить заявку
          </button>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;
