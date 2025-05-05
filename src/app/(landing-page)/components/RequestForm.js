const RequestForm = () => {
  return (
    <section className="container mx-auto my-20">
      <div
        className="bg-primary-600 rounded-2xl p-20 flex justify-between items-center"
        style={{
          backgroundImage: 'url("/logo2.svg")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top right",
          backgroundSize: "contain",
        }}
      >
        <div className="flex flex-col gap-4 max-w-3xl">
          <h2 className="text-5xl text-white font-bold">Остались вопросы?</h2>
          <p className="text-xl text-white/80 max-w-lg">
            Оставьте заявку и с вами свяжется наш менеджер для бесплатной
            консультации
          </p>
        </div>
        <button className="px-8 py-3 rounded-full bg-white text-black font-medium hover:bg-black hover:text-white transition-colors duration-300 h-max w-fit mt-4">
          Получить консультацию
        </button>
      </div>
    </section>
  );
};

export default RequestForm;
