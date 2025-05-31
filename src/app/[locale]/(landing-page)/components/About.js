import Image from "next/image";
import ButtonWA from "./ButtonWA";
import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("About");

  return (
    <section id="about" className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row gap-20 py-20">
        <div className="w-full md:w-1/2 flex gap-2 flex-col">
          <h3 className="text-xl font-semibold text-primary-600">
            {t("name")}
          </h3>
          <h1 className="text-4xl font-bold text-black max-w-[550px]">
            {t("title")}
          </h1>
          <p
            className="text-lg font-normal text-black/80"
            dangerouslySetInnerHTML={{ __html: t("text") }}
          />

          <div className="mt-8">
            <ButtonWA className="w-full md:w-fit"></ButtonWA>
          </div>
        </div>
        <div className="hidden md:block md:w-1/2">
          <Image src="/about.svg" alt="About" width={500} height={500} />
        </div>
      </div>
    </section>
  );
};

export default About;
