import { BiBarChartSquare } from "react-icons/bi";
import { LuSearchCode } from "react-icons/lu";
import { PiChalkboardTeacher } from "react-icons/pi";
import { LuMonitorCog } from "react-icons/lu";
import { BiSupport } from "react-icons/bi";

const WorkFlow = () => {
  return (
    <section
      className="container mx-auto my-40"
      style={{
        backgroundImage: 'url("/workFlow.png")',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top left",
        backgroundSize: "600px auto",
      }}
    >
      <div className="text-4xl font-bold text-right text-black py-10">
        Как работает продукт
      </div>
      <div className="grid grid-cols-3 grid-rows-2 w-full gap-4 pt-10">
        {/* Row 1 */}
        <div className="col-start-2 bg-white flex flex-col gap-2 p-6 w-full rounded-2xl">
          <BiBarChartSquare
            size={40}
            className="bg-primary-600 text-white rounded-full p-2 mb-2"
          />
          <h3 className="text-xl font-bold text-black">
            Анализ и аудит бизнес-процессов клиента
          </h3>
          <p className="text-base font-normal text-black/80">
            Наши специалисты изучают, как устроены процессы на текущий момент:
            учёт, торговля, склад, логистика.Определяем слабые места и точки
            роста.
          </p>
        </div>
        <div className=" bg-white flex flex-col gap-2 p-6 w-full rounded-2xl">
          <LuSearchCode
            size={40}
            className="bg-primary-600 text-white rounded-full p-2 mb-2"
          />
          <h3 className="text-xl font-bold text-black">
            Подбор оптимального решения
          </h3>
          <p className="text-base font-normal text-black/80">
            Исходя из задач бизнеса, мы подбираем:
            <br />
            • Программное обеспечение (автоматизация, аналитика, учёт)
            <br />
            • Оборудование (кассы, терминалы, сканеры, ТСД, весы и др.)
            <br />• Интеграции с 1С, ERP, CRM.
          </p>
        </div>

        {/* Row 2 */}
        <div className=" bg-white flex flex-col gap-2 p-6 w-full rounded-2xl">
          <LuMonitorCog
            size={40}
            className="bg-primary-600 text-white rounded-full p-2 mb-2"
          />
          <h3 className="text-xl font-bold text-black">Внедрение системы</h3>
          <p className="text-base font-normal text-black/80">
            Устанавливаем и настраиваем оборудование и ПО.Настраиваем учёт
            (торговля, инвентаризация, склад).Интегрируем с существующими
            программами клиента.
          </p>
        </div>
        <div className=" bg-white flex flex-col gap-2 p-6 w-full rounded-2xl">
          <PiChalkboardTeacher
            size={40}
            className="bg-primary-600 text-white rounded-full p-2 mb-2"
          />
          <h3 className="text-xl font-bold text-black">Обучение персонала</h3>
          <p className="text-base font-normal text-black/80">
            Обучаем сотрудников клиента работать с новой системой, чтобы все
            процессы шли гладко.
          </p>
        </div>
        <div className=" bg-white flex flex-col gap-2 p-6 w-full rounded-2xl">
          <BiSupport
            size={40}
            className="bg-primary-600 text-white rounded-full p-2 mb-2"
          />
          <h3 className="text-xl font-bold text-black">
            Поддержка и сопровождение
          </h3>
          <p className="text-base font-normal text-black/80">
            После внедрения мы обеспечиваем техническую поддержку и
            сопровождение.Обновляем ПО, помогаем масштабировать систему при
            росте бизнеса.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkFlow;
