import Image from "next/image";
import { useTranslations } from "next-intl";

const Solutions = () => {
  const t = useTranslations("Solution");

  return (
    <section className="container mx-auto my-20 px-4">
      <div className="text-4xl font-bold text-center text-black py-8 md:py-12">
        {t("title")}
      </div>

      <div className="flex flex-col gap-4 mb-10 md:mb-14">
        {/* First row */}
        <div className="flex flex-col md:flex-row gap-4">
          <div
            className="bg-white rounded-[24px] flex flex-col-reverse items-end justify-between w-full md:w-6/12"
            style={{
              backgroundImage: 'url("/bg-2.png")',
              backgroundRepeat: "no-repeat",
              backgroundPosition: "bottom center",
              backgroundSize: "contain",
            }}
          >
            <Image
              src="/woman.svg"
              alt="Female"
              width={500}
              height={500}
              className="w-auto max-w-full"
            />
            <div className="flex flex-col gap-2 px-7 sm:px-10 w-full">
              <h3 className="text-2xl font-bold text-black pt-7 md:pt-10">
                {t("block1.title")}
              </h3>
              <p className="text-lg font-normal text-black/80">
                {t("block1.message")}
              </p>
            </div>
          </div>

          <div className="bg-primary-600 rounded-[24px] flex flex-col justify-between items-center w-full md:w-6/12">
            <Image
              src="/logistic.svg"
              alt="Logistics"
              width={300}
              height={300}
              className="w-auto max-w-full"
            />
            <div className="flex flex-col gap-2 px-7">
              <h3 className="text-2xl font-bold text-white">
                {t("block2.title")}
              </h3>
              <p className="text-lg font-normal text-white/80 pb-7">
                {t("block2.message")}
              </p>
            </div>
          </div>
        </div>

        {/* Second row */}
        <div className="flex flex-col md:flex-row gap-4 md:max-h-[500px] overflow-hidden">
          <div className="bg-primary-600 rounded-[24px] flex flex-col-reverse justify-between items-center w-full md:w-6/12 relative overflow-hidden">
            <div className="w-full h-full flex justify-center items-center">
              <Image
                src="/box.svg"
                alt="Tech"
                className="w-full h-full object-contain"
                width={500}
                height={500}
              />
            </div>

            <div className="relative flex flex-col gap-2 p-7">
              <h3 className="text-2xl font-bold text-white ">
                {t("block3.title")}
              </h3>
              <p className="text-lg font-normal text-white/80">
                {t("block3.message")}
              </p>
            </div>
          </div>

          <div
            className="bg-white rounded-[24px] flex flex-col-reverse justify-between items-center w-full md:w-6/12 relative overflow-hidden"
            style={{
              backgroundImage: 'url("/bg-logo.png")',
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center right",
              backgroundSize: "cover",
            }}
          >
            <div className="w-full h-full flex justify-center items-center">
              <Image
                src="/tech.svg"
                alt="Tech"
                className="w-full h-full object-contain"
                width={500}
                height={500}
              />
            </div>

            <div className="relative flex flex-col gap-2 p-7">
              <h3 className="text-2xl font-bold text-black ">
                {t("block4.title")}
              </h3>
              <p className="text-lg font-normal text-black/80">
                {t("block4.message")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
