import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

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
    <footer className="bg-zinc-950 text-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Logo and Social */}
          <div className="flex flex-col gap-6">
            <Image src="/logo.svg" alt="logo" width={220} height={100} />
            <div className="flex gap-3 text-2xl">
              {socialLinks.map((link) => (
                <a
                  href={link.link}
                  key={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-lg p-2 text-black hover:bg-black hover:text-white transition-colors duration-300"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Main */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg md:text-xl font-bold">Главная</h3>
            <ul className="flex flex-col gap-2 text-lg md:text-base text-white/80">
              <li>
                <Link href="#about" className="hover:text-white transition-colors">
                  О компании
                </Link>
              </li>
              <li>
                <Link href="#cases" className="hover:text-white transition-colors">
                  Кейсы
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg md:text-xl font-bold">Решения</h3>
            <ul className="flex flex-col gap-2 text-lg md:text-base text-white/80">
              <li>
                <Link href="#retail" className="hover:text-white transition-colors">
                  Автоматизация торговли
                </Link>
              </li>
              <li>
                <Link href="#logistics" className="hover:text-white transition-colors">
                  Складская логистика
                </Link>
              </li>
              <li>
                <Link href="#marking" className="hover:text-white transition-colors">
                  Маркировка продукции
                </Link>
              </li>
              <li>
                <Link href="#self-service" className="hover:text-white transition-colors">
                  Системы самообслуживания
                </Link>
              </li>
              <li>
                <Link href="#production" className="hover:text-white transition-colors">
                  Автоматизация производства
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg md:text-xl font-bold">Контакты</h3>
            <ul className="flex flex-col gap-2 text-lg md:text-base text-white/80">
              <li className="flex flex-col gap-1">
                <span className="font-medium text-white">Адрес:</span>
                г.Алматы, ул. Толе би 101, блок А, 3й этаж
              </li>
              <li className="flex flex-col gap-1">
                <span className="font-medium text-white">Тел:</span>
                <a href="tel:+77273398632" className="hover:text-white transition-colors">
                  +7 (727) 339 86 32
                </a>
                <a href="tel:+77066418159" className="hover:text-white transition-colors">
                  +7 (706) 641-81-59
                </a>
              </li>
              <li className="flex flex-col gap-1">
                <span className="font-medium text-white">Email:</span>
                <a href="mailto:info@sga.kz" className="hover:text-white transition-colors">
                  info@sga.kz
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 mt-8 md:mt-12">
          <p className="text-lg md:text-base text-white/50 text-center">
            Copyright © SystemGroup {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
