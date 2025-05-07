import { BiBarChartSquare, BiSupport } from "react-icons/bi";
import { LuSearchCode, LuMonitorCog } from "react-icons/lu";
import { PiChalkboardTeacher } from "react-icons/pi";

const steps = [
  {
    icon: BiBarChartSquare,
    title: "Анализ и аудит бизнес-процессов клиента",
    description:
      "Наши специалисты изучают, как устроены процессы на текущий момент: учёт, торговля, склад, логистика. Определяем слабые места и точки роста.",
    position: "middle",
  },
  {
    icon: LuSearchCode,
    title: "Подбор оптимального решения",
    description:
      "Исходя из задач бизнеса, мы подбираем:\n• Программное обеспечение (автоматизация, аналитика, учёт)\n• Оборудование (кассы, терминалы, сканеры, ТСД, весы и др.)\n• Интеграции с 1С, ERP, CRM.",
  },
  {
    icon: LuMonitorCog,
    title: "Внедрение системы",
    description:
      "Устанавливаем и настраиваем оборудование и ПО. Настраиваем учёт (торговля, инвентаризация, склад). Интегрируем с существующими программами клиента.",
  },
  {
    icon: PiChalkboardTeacher,
    title: "Обучение персонала",
    description:
      "Обучаем сотрудников клиента работать с новой системой, чтобы все процессы шли гладко.",
  },
  {
    icon: BiSupport,
    title: "Поддержка и сопровождение",
    description:
      "После внедрения мы обеспечиваем техническую поддержку и сопровождение. Обновляем ПО, помогаем масштабировать систему при росте бизнеса.",
  },
];

export default steps;