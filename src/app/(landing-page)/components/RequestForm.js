import PrimaryButton from "./PrimaryButton";

const RequestForm = () => {
  return (
    <section className="container mx-auto my-20 px-4">
      <div
        className="bg-primary-600 rounded-2xl p-5 md:p-20 flex flex-col md:flex-row justify-between items-center"
        style={{
          backgroundImage: 'url("/logo2.svg")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top right",
          backgroundSize: "contain",
        }}
      >
        <div className="flex flex-col gap-4 max-w-3xl">
          <h2 className="text-3xl md:text-5xl text-white font-bold">Остались вопросы?</h2>
          <p className="text-xl text-white/80 max-w-lg">
            Оставьте заявку и с вами свяжется наш менеджер для бесплатной
            консультации
          </p>
        </div>
        <PrimaryButton variant="secondary" className="h-max w-full md:w-fit mt-8">
          Получить консультацию
        </PrimaryButton>
      </div>
    </section>
  );
};

export default RequestForm;
