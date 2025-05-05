import Image from "next/image";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineSafety } from "react-icons/ai";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { TfiWorld } from "react-icons/tfi";

const Advantages = () => {
  return (
    <div className="relative h-[700px]">
      <Image
        src="/advantages.png"
        alt="Hero background"
        fill
        className="object-cover w-full h-full"
        priority
      />
      <div className="container absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
        <div className="flex flex-col gap-25 items-center">
          <div className="flex flex-col gap-2 size-full">
            <span className="text-primary-600 font-semibold text-xl">
              Преимущества
            </span>
            <h1 className="text-4xl font-bold">
              Комплексный подход "под ключ"
            </h1>
          </div>
          <div className="flex gap-35 justify-between items-center text-center size-min">
            <div className="flex flex-col gap-2 items-center">
              <IoSettingsOutline
                size={140}
                className="text-primary-600 border border-white/50 rounded-full p-8"
              />
              <span className="font-normal text-lg">
                Всe в одном месте
              </span>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <AiOutlineSafety
                size={140}
                className="text-primary-600 border border-white/50 rounded-full p-8"
              />
              <span className="font-normal text-lg">
                Надeжное оборудование
              </span>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <IoCheckmarkDoneSharp
                size={140}
                className="text-primary-600 border border-white/50 rounded-full p-8"
              />
              <span className="font-normal text-base">
                Гарантия качества решений
              </span>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <TfiWorld
                size={140}
                className="text-primary-600 border border-white/50 rounded-full p-8"
              />
              <span className="font-normal text-lg">
                Сервис по всей стране
              </span>
            </div>
          </div>
          <button className="px-8 py-3 rounded-4xl bg-primary-600 font-medium size-max">
            Получить консультацию
          </button>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
