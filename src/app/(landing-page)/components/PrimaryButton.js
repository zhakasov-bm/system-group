"use client";

import { useState } from "react";
import Modal from "./Modal";

const VARIANT_CLASSES = {
  primary: {
    base: "bg-primary-600 text-white",
    hover: "hover:bg-primary-700",
  },
  secondary: {
    base: "bg-white text-black",
    hover: "hover:bg-black hover:text-white",
  },
};

const PrimaryButton = ({ children, className = "", variant = "primary" }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const variantClass = VARIANT_CLASSES[variant] || VARIANT_CLASSES.primary;

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className={`w-full md:max-w-fit rounded-4xl px-8 py-3 font-semibold cursor-pointer transition-colors duration-300 
          ${variantClass.base} ${variantClass.hover} ${className}`}
      >
        {children}
      </button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default PrimaryButton;