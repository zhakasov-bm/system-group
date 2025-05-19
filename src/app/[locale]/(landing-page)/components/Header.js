"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import LanguageSwitcher from "./LanguageSwitcher";
// import { useTranslations } from "next-intl";


const Navbar = ({ locale }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuItems, setMenuItems] = useState([]);
  const dropdownRef = useRef(null);

  // const t = useTranslations("NavBar");
  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch("/api/posts");
        const data = await response.json();
        setMenuItems(data.docs || []);
      } catch (error) {
        console.error("Error fetching menu items:", error);
      }
    };

    fetchMenuItems();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent body scroll when menu is open
    document.body.style.overflow = !isMenuOpen ? "hidden" : "unset";
  };

  return (
    <nav className="absolute w-full top-0 left-0 right-0 z-20">
      <div className="flex container p-4 lg:py-4 items-center justify-between mx-auto mt-4">
        <Link
          href={"/"}
          className="text-2xl md:text-3xl text-white font-normal"
        >
          <Image
            src="/logo.svg"
            alt="logo"
            width={220}
            height={100}
            className="w-[150px] md:w-[220px] h-auto"
          />
        </Link>

        {/* Burger Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <LanguageSwitcher locale={locale} />
          <button
            className="text-white"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-white transform transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`w-full h-0.5 bg-white transform transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 text-white justify-between items-center">
            <li key="about">
              <Link href="/#about" className="hover:text-slate-200">
                О компании
              </Link>
            </li>
            <li key="projects" className="relative group" ref={dropdownRef}>
              <button
                className="hover:text-slate-200 flex items-center gap-1"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                Решения
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 ${isDropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <div className="py-1">
                  {menuItems.map((item) => (
                    <Link
                      key={item.id}
                      href={`/posts/${item.id}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </li>
            <li key="contact">
              <Link href={`/contact`} className="hover:text-slate-200">
                Контакты
              </Link>
            </li>
            <div className="hover:text-primary-600 transition-colors text-white hidden lg:block">
              <Link
                href="tel:+77066418159"
                className="font-bold flex items-center gap-2 hover:underline"
              >
                <FaPhoneAlt size={20} />
                +7 (706) 641-81-59
              </Link>
            </div>
            <li>
              <LanguageSwitcher locale={locale} />
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-gray-950 z-50 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="flex justify-end p-4">
              <button
                onClick={toggleMenu}
                className="text-white p-2"
                aria-label="Close menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="flex-1 flex flex-col items-start justify-start p-8">
              <ul className="flex flex-col items-start gap-8 text-white text-xl">
                <li>
                  <Link
                    href="#about"
                    className="hover:text-slate-200 transition-colors"
                    onClick={toggleMenu}
                  >
                    О компании
                  </Link>
                </li>
                <li className="flex flex-col gap-4">
                  <span className="font-medium">Решения</span>
                  <div className="flex flex-col gap-4">
                    {menuItems.map((item) => (
                      <Link
                        key={item.id}
                        href={`/posts/${item.id}`}
                        className="text-lg hover:text-slate-200 transition-colors"
                        onClick={toggleMenu}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-slate-200 transition-colors"
                    onClick={toggleMenu}
                  >
                    Контакты
                  </Link>
                </li>
                <li>
                  <Link
                    href="tel:+77066418159"
                    className="text-lg hover:text-slate-200 transition-colors underline"
                    onClick={toggleMenu}
                  >
                    +7 (706) 641-81-59
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
