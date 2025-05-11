import steps from "../data/steps";


const StepCard = ({ Icon, title, description }) => (
  <div className="bg-white flex flex-col justify-start gap-2 p-6 w-full h-full rounded-2xl">
    <Icon
      size={40}
      className="bg-primary-600 text-white rounded-full p-2 mb-2"
    />
    <h3 className="text-xl font-bold text-black">{title}</h3>
    <p className="text-base font-normal text-black/80 whitespace-pre-line">
      {description}
    </p>
  </div>
);

const WorkFlow = () => {
  return (
    <section className="container mx-auto my-16 md:my-24 custom-bg px-4">
      <div className="text-4xl font-bold text-left md:text-right text-black md:py-10">
        Как работает продукт
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 pt-10 auto-rows-fr">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`${index === 0 ? "md:col-start-2" : ""} h-full`}
          >
            <StepCard
              Icon={step.icon}
              title={step.title}
              description={step.description}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkFlow;