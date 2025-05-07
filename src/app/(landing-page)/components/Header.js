'use client'

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import PrimaryButton from "./PrimaryButton";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent body scroll when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'unset';
  };

  return (
    <nav className="absolute w-full top-0 left-0 right-0 z-20">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto mt-4">
        <Link href={"/"} className="text-2xl md:text-3xl text-white font-normal">
          <Image src="/logo.svg" alt="logo" width={220} height={100} />
        </Link>

        {/* Burger Menu Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-white transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-full h-0.5 bg-white transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 text-white justify-between items-center">
            <li key="about">
              <Link href="#about" className="hover:text-slate-200">
                О компании
              </Link>
            </li>
            <li key="projects" className="relative group">
              <button 
                className="hover:text-slate-200 flex items-center gap-1"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Решения
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 ${isDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className="py-1">
                  <Link href="#retail" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Автоматизация торговли
                  </Link>
                  <Link href="#logistics" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Складская логистика
                  </Link>
                  <Link href="#marking" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Маркировка продукции
                  </Link>
                  <Link href="#production" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Производства
                  </Link>
                </div>
              </div>
            </li>
            <li key="contact">
              <Link href="/contact" className="hover:text-slate-200">Контакты</Link>
            </li>
            <PrimaryButton className="[backdrop-filter:blur(20px)] [background:linear-gradient(91.15deg,_rgba(255,_255,_255,_0.15),_rgba(153,_153,_153,_0.15))] border-white border-solid border-[1px]">Связаться</PrimaryButton>
          </ul>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`fixed inset-0 bg-black/90 z-50 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="flex justify-end p-4">
              <button 
                onClick={toggleMenu}
                className="text-white p-2"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="flex-1 flex flex-col items-center justify-center px-4">
              <ul className="flex flex-col items-center gap-8 text-white text-xl">
                <li>
                  <Link 
                    href="#about" 
                    className="hover:text-slate-200 transition-colors"
                    onClick={toggleMenu}
                  >
                    О компании
                  </Link>
                </li>
                <li className="flex flex-col items-center gap-4">
                  <span className="font-medium">Решения</span>
                  <div className="flex flex-col items-center gap-4">
                    <Link 
                      href="#retail" 
                      className="text-lg hover:text-slate-200 transition-colors"
                      onClick={toggleMenu}
                    >
                      Автоматизация торговли
                    </Link>
                    <Link 
                      href="#logistics" 
                      className="text-lg hover:text-slate-200 transition-colors"
                      onClick={toggleMenu}
                    >
                      Складская логистика
                    </Link>
                    <Link 
                      href="#marking" 
                      className="text-lg hover:text-slate-200 transition-colors"
                      onClick={toggleMenu}
                    >
                      Маркировка продукции
                    </Link>
                    <Link 
                      href="#production" 
                      className="text-lg hover:text-slate-200 transition-colors"
                      onClick={toggleMenu}
                    >
                      Производства
                    </Link>
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
                <li className="mt-4">
                  <PrimaryButton 
                    className="[backdrop-filter:blur(20px)] [background:linear-gradient(91.15deg,_rgba(255,_255,_255,_0.15),_rgba(153,_153,_153,_0.15))] border-white border-solid border-[1px]"
                    onClick={toggleMenu}
                  >
                    Связаться
                  </PrimaryButton>
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
