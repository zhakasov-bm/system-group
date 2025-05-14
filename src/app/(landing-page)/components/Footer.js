"use client";

import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const socialLinks = [
  {
    icon: <AiFillInstagram className="w-5 h-5" />,
    link: "https://www.instagram.com/",
    label: "Instagram",
  },
  {
    icon: <FaLinkedin className="w-5 h-5" />,
    link: "https://www.linkedin.com/",
    label: "LinkedIn",
  },
  {
    icon: <FaYoutube className="w-5 h-5" />,
    link: "https://www.youtube.com/",
    label: "YouTube",
  },
];

const SocialLink = ({ icon, link, label }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white rounded-lg p-2 text-black hover:bg-black hover:text-white transition-colors duration-300"
    aria-label={label}
  >
    {icon}
  </a>
);

const FooterLink = ({ href, children }) => (
  <Link
    href={href}
    className="hover:text-white transition-colors text-white/80"
  >
    {children}
  </Link>
);

const Footer = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch(
          "/api/posts?where[includedInBlog][equals]=true"
        );
        const data = await response.json();
        setMenuItems(data.docs || []);
      } catch (error) {
        console.error("Error fetching menu items:", error);
      }
    };

    fetchMenuItems();
  }, []);

  return (
    <footer className="bg-zinc-950 text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Logo and Social */}
          <div className="flex flex-col gap-6">
            <Image
              src="/logo.svg"
              alt="SystemGroup Logo"
              width={220}
              height={100}
              priority
              className="w-auto h-auto"
            />
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <SocialLink key={link.label} {...link} />
              ))}
            </div>
          </div>

          {/* Main */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg md:text-xl font-bold">Главная</h3>
            <ul className="flex flex-col gap-2 text-lg md:text-base">
              <li>
                <FooterLink href="#about">О компании</FooterLink>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg md:text-xl font-bold">Решения</h3>
            <ul className="flex flex-col gap-2 text-lg md:text-base">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <FooterLink href={`/posts/${item.id}`}>
                    {item.title}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg md:text-xl font-bold">Контакты</h3>
            <ul className="flex flex-col gap-2 text-lg md:text-base">
              <li className="flex flex-col gap-1">
                <span className="font-medium text-white">Адрес:</span>
                <span className="text-white/80">
                  г.Алматы, ул. Толе би 101, блок А, 3й этаж
                </span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="font-medium text-white">Тел:</span>
                <FooterLink href="tel:+77273398632">
                  +7 (727) 339 86 32
                </FooterLink>
                <FooterLink href="tel:+77066418159">
                  +7 (706) 641-81-59
                </FooterLink>
              </li>
              <li className="flex flex-col gap-1">
                <span className="font-medium text-white">Email:</span>
                <FooterLink href="mailto:info@sga.kz">info@sga.kz</FooterLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 mt-8 md:mt-8 text-white/50 text-xs">
          <p className="">
            Copyright © SystemGroup {new Date().getFullYear()}. All rights
            reserved.
          </p>
          <p>
            Данные на сайте носят информационный характер и не являются
            публичной офертой
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
