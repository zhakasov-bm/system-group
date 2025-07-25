// components/WhatsAppButton.jsx
import Link from "next/link";
import Image from "next/image";
import { WHATSAPP_LINK } from "../data/constants";
import { useTranslations } from "next-intl";

const WhatsAppButton = () => {
  const t = useTranslations("WhatsApp");

  return (
    <Link
      href={WHATSAPP_LINK}
      target="_blank"
      className="fixed md:bottom-24 bottom-16 md:right-16 right-8 z-50 group"
    >
      <div className="relative flex items-center gap-3">
        <span className="absolute right-16 bg-green-500 text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          {t("title")}
        </span>
        <div className="flex items-center gap-3 bg-green-500/80 rounded-full p-2 animate-bounce md:animate-bounce overflow-hidden">
          <div className="md:hidden flex items-center">
            <div className="animate-[slide_3s_ease-in-out_infinite] whitespace-nowrap">
              <span className="text-white/80 font-bold">{t("title")}</span>
            </div>
          </div>
          <Image
            src="/whatsapp-icon.svg"
            alt="WhatsApp"
            width={30}
            height={30}
            className="hover:scale-110 transition-transform duration-300"
          />
        </div>
      </div>
    </Link>
  );
};

export default WhatsAppButton;
