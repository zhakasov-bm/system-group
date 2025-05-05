import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Image from "next/image";

const socialLinks = [
  {
    icon: <AiFillInstagram />,
    link: "https://www.instagram.com/",
  },
  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/",
  },
  {
    icon: <FaYoutube />,
    link: "https://www.youtube.com/",
  },
];

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-white py-20">
      <div className="container mx-auto flex justify-between">
        {/* Logo */}
        <div className="flex flex-col gap-8">
          <Image src="/logo.svg" alt="logo" width={220} height={100} />
          <div className="flex gap-2 text-2xl">
            {socialLinks.map((link) => (
              <a
                href={link.link}
                key={link.link}
                className="bg-white rounded-lg p-1 text-black"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        {/* Main */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold">Главная</h3>
          <ul className="flex flex-col gap-2">
            <li>О компании</li>
            <li>Кейсы</li>
          </ul>
        </div>
        {/* Solutions */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold">Решения</h3>
          <ul className="flex flex-col gap-2">
            <li>Автоматизация торговли</li>
            <li>Складская логистика</li>
            <li>Маркировка продукции</li>
            <li>Системы самообслуживания</li>
            <li>Автоматизация производства</li>
          </ul>
        </div>
        {/* Contacts */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold">Контакты</h3>
          <ul className="flex flex-col gap-2">
            <li>г.Алматы, ул. Толе би 101, блок А, 3й этаж</li>
            Тел:{" "}
            <div className="flex flex-col gap-2">
              <li>+7 (727) 339 86 32 </li>
              <li>+7 (706) 641-81-59</li>
            </div>
            <li>info@sga.kz</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto border-t border-white/20 pt-4 mt-8">
        <p className="text-white/50">
          Copyright © SystemGroup 2025. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
