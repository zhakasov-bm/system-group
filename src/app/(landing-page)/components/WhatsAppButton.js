import Link from "next/link";
import Image from "next/image";

const WhatsAppButton = () => {
  return (
    <Link
      href="https://wa.me/77769771303"
      target="_blank"
      className="fixed md:bottom-24 bottom-16 md:right-16 right-8 z-50 group"
    >
      <div className="relative">
        <div className="absolute font-medium right-16 bg-green-500 text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Написать в WhatsApp
        </div>
        <Image
          src="/whatsapp-icon.svg"
          alt="WhatsApp"
          width={50}
          height={50}
          className="hover:scale-110 transition-transform duration-300"
        />
      </div>
    </Link>
  );
};

export default WhatsAppButton;
