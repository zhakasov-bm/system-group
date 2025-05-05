import Image from "next/image";

const Solutions = () => {
  return (
    <section className="container mx-auto my-20">
      <div className="text-4xl font-bold text-center text-black px-90 py-12">
        Комплексные решения для вашего бизнеса
      </div>
      <div className="flex flex-col gap-4 md:gap-4 mb-10 md:mb-14">
        {/* First row */}
        <div className="flex gap-4">
          <div
            className="bg-white rounded-[24px] flex flex-col-reverse items-end justify-between w-6/12"
            style={{
              backgroundImage: 'url("/bg-2.png")',
              backgroundRepeat: "no-repeat",
              backgroundPosition: "bottom center",
              backgroundSize: "contain",
            }}
          >
            <Image
              className=""
              src="/woman.svg"
              alt="Female"
              width={400}
              height={400}
            />
            <div className="flex flex-col gap-2 px-10 w-full">
              <h3 className="text-3xl font-bold text-black pt-10">
                Автоматизация торговли
              </h3>
              <p className="text-xl font-normal text-black/80 max-w-110">
                Комплексное оснащение розничных сетей, минимаркетов и сферы
                услуг
              </p>
            </div>
          </div>

          <div className=" bg-primary-600 rounded-[24px] flex flex-col justify-between items-center w-6/12">
            <Image
              className=""
              src="/logistic.svg"
              alt="Logistics"
              width={300}
              height={300}
            />

            <div className="flex flex-col gap-2 px-10">
              <h3 className="text-3xl font-bold text-white">
                Складская логистика
              </h3>
              <p className="text-xl font-normal text-white/80 pb-10">
                Комплексное оснащение складов и организации деятельности
                складских комплексов
              </p>
            </div>
          </div>
        </div>

        {/* Second row */}
        <div className="flex gap-4">
          <div
            className="p-10 bg-primary-600 rounded-[24px] flex flex-col-reverse items-start w-5/12"
            style={{
              backgroundImage: 'url("/product-marking.svg")',
              backgroundRepeat: "no-repeat",
              backgroundPosition: "bottom center",
              backgroundSize: "contain",
            }}
          >
            {/* <div>
              <Image
                className=""
                src="/product-marking.png"
                alt="product-marking"
                width={200}
                height={200}
              />
            </div> */}
            <div className="flex flex-col gap-2 mb-60">
              <h3 className="text-3xl font-bold text-white">
                Маркировка продукции
              </h3>
              <p className="text-lg font-normal text-white/80">
                Оборудование и решения для производителей, дистрибуторов и
                ритейлеров, принимающих участие в реализации Национальной
                системы маркировки
              </p>
            </div>
          </div>
          <div
            className="bg-white rounded-[24px] flex flex-col-reverse justify-between items-start w-7/12"
            style={{
              backgroundImage: 'url("/bg-logo.png")',
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center right",
              backgroundSize: "cover",
            }}
          >
            <div className="flex gap-4">
              <Image
                className=""
                src="/kit.svg"
                alt="Kit"
                width={250}
                height={250}
              />
              <Image
                className=""
                src="/printer.svg"
                alt="Printer"
                width={200}
                height={200}
              />
              <Image
                className=""
                src="/pos.svg"
                alt="POS"
                width={200}
                height={200}
              />
            </div>

            <div className="flex flex-col gap-2 px-10">
              <h3 className="text-3xl font-bold text-black pt-10">Производства</h3>
              <p className="text-xl font-normal text-black/80">
                Поставляем и внедряем оборудование: весы, POS-системы, ТСД,
                RFID, сканеры, промышленную визуализацию и софт — WMS, TMS, BI.
                Всё — под ключ.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
