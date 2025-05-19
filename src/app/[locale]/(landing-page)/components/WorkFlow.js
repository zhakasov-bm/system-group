import { BiBarChartSquare, BiSupport } from "react-icons/bi";
import { LuSearchCode, LuMonitorCog } from "react-icons/lu";
import { PiChalkboardTeacher } from "react-icons/pi";
import { useTranslations } from "next-intl";

const stepIcons = [
  BiBarChartSquare,
  LuSearchCode,
  LuMonitorCog,
  PiChalkboardTeacher,
  BiSupport
];

const StepCard = ({ Icon, title, description }) => (
  <div className="bg-white flex flex-col justify-start gap-2 p-6 w-full h-full rounded-2xl">
    <Icon size={40} className="bg-primary-600 text-white rounded-full p-2 mb-2" />
    <h3 className="text-xl font-bold text-black">{title}</h3>
    <p className="text-base font-normal text-black/80 whitespace-pre-line">
      {description}
    </p>
  </div>
);

const WorkFlow = () => {
  const t = useTranslations("WorkFlow");

  return (
    <section className="container mx-auto my-16 md:my-24 custom-bg px-4">
      <div className="text-4xl font-bold text-left md:text-right text-black md:py-10">
        {t("title")}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 pt-10 auto-rows-fr">
        {stepIcons.map((Icon, index) => (
          <div
            key={index}
            className={`${index === 0 ? "md:col-start-2" : ""} h-full`}
          >
            <StepCard
              Icon={Icon}
              title={t(`steps.${index}.title`)}
              description={t(`steps.${index}.description`)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkFlow;
