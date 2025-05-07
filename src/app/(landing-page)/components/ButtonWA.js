// components/Button.jsx
import React from "react";
import { RiWhatsappFill } from "react-icons/ri";

const ButtonWA = ({ onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`flex w-full md:w-auto items-center justify-center gap-3 rounded-4xl border border-gray-300 px-8 py-3 font-semibold cursor-pointer hover:border-gray-800 transition-colors duration-300 ${className}`}
    >
      <RiWhatsappFill size={20} className="text-green-500" />
      <span className="text-center">Написать на WhatsApp</span>
    </button>
  );
};

export default ButtonWA;
