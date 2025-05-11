import ButtonWA from "./ButtonWA";
import PrimaryButton from "./PrimaryButton";

const LeadMagnet = () => {
  return (
    <section className="container mx-auto my-20 px-2">
      <div className="flex flex-col gap-4 rounded-3xl p-8 md:p-10 justify-center items-center bg-white">
        <h1 className="text-2xl md:text-4xl font-bold text-center md:px-60">
          Бесплатный расчёт стоимости автоматизации за 1 день
        </h1>
        <p className="text-base md:text-lg font-normal text-center md:px-50">
          Анализируем процессы, выявим слабые места и предложим
          оптимальное решение.
        </p>
        <div className="flex flex-col md:flex-row gap-4 pt-8 justify-center items-center w-full">
          <ButtonWA className="w-full md:w-auto">Заказать консультацию</ButtonWA>
          <PrimaryButton variant="primary">Оставить заявку</PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;
