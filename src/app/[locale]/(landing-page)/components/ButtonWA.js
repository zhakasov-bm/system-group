// components/ButtonWA.jsx
import React from "react";
import { RiWhatsappFill } from "react-icons/ri";
import Link from "next/link";
import { WHATSAPP_LINK } from "../data/constants";
import { useTranslations } from "next-intl";

const ButtonWA = ({ className = "" }) => {
  const t = useTranslations("Button");

  return (
    <Link
      href={WHATSAPP_LINK}
      target="_blank"
      className={`flex w-full md:w-auto items-center justify-center gap-3 rounded-4xl border border-gray-300 px-8 py-3 font-semibold cursor-pointer hover:border-gray-800 transition-colors duration-300 ${className}`}
    >
      <RiWhatsappFill size={20} className="text-green-500" />
      <span className="text-center">{t("wa")}</span>
    </Link>
  );
};

export default ButtonWA;
