import ButtonWA from "./ButtonWA";
import PrimaryButton from "./PrimaryButton";

const LeadMagnet = () => {
  return (
    <section className="container mx-auto my-20 px-4">
      <div className="flex flex-col gap-4 rounded-3xl p-8 md:p-10 justify-center items-center bg-white">
        <h1 className="text-2xl md:text-4xl font-bold text-center md:px-60">
          Бесплатный расчёт стоимости автоматизации за 1 день
        </h1>
        <p className="text-lg font-normal text-center md:px-50">
          Анализируем процессы, выявим слабые места <br /> и предложим
          оптимальное решение.
        </p>
        <div className="flex flex-col md:flex-row gap-4 pt-10 justify-center items-center w-full">
          <ButtonWA>Заказать консультацию</ButtonWA>
          <PrimaryButton variant="primary">Оставить заявку</PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;
