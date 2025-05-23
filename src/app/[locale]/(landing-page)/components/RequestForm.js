import PrimaryButton from "./PrimaryButton";
import { useTranslations } from "next-intl";

const RequestForm = () => {
  const t = useTranslations("Request");
  const tBtn = useTranslations("Button");

  return (
    <section className="container mx-auto my-20 px-4">
      <div
        className="bg-primary-600 rounded-2xl p-5 lg:p-20 flex flex-col lg:flex-row justify-between items-center"
        style={{
          backgroundImage: 'url("/logo2.svg")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top right",
          backgroundSize: "contain",
        }}
      >
        <div className="flex flex-col gap-4 max-w-3xl">
          <h2 className="text-3xl lg:text-5xl text-white font-bold">
            {t("title")}
          </h2>
          <p className="text-xl text-white/80 max-w-lg">{t("subtitle")}</p>
        </div>
        <PrimaryButton
          variant="secondary"
          className="h-max w-full lg:w-fit mt-8"
        >
          {tBtn("title")}
        </PrimaryButton>
      </div>
    </section>
  );
};

export default RequestForm;
