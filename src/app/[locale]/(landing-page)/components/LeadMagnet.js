import ButtonWA from "./ButtonWA";
import PrimaryButton from "./PrimaryButton";
import { useTranslations } from "next-intl";

const LeadMagnet = () => {
  const t = useTranslations("LeadMagnet");
  const tBtn = useTranslations("Button");

  return (
    <section className="container mx-auto my-20 px-2">
      <div className="flex flex-col gap-4 rounded-3xl p-8 md:p-10 justify-center items-center bg-white">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center sm:px-2 lg:px-50">
          {t("title")}
        </h1>
        <p className="text-base md:text-lg font-normal text-center sm:px-24 lg:px-50">
          {t("subtitle")}
        </p>
        <div className="flex flex-col md:flex-row gap-4 pt-8 justify-center items-center w-full">
          <ButtonWA className="w-full md:w-auto" />
          <PrimaryButton variant="primary">{tBtn("form")}</PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;
