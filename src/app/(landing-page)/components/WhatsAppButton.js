import Link from 'next/link';
import Image from 'next/image';
import { RiWhatsappFill } from 'react-icons/ri';

const WhatsAppButton = () => {
  return (
    <Link 
      href="https://wa.me/your-number" 
      target="_blank"
      className="fixed bottom-32 right-20 z-50 group"
    >
      <div className="relative">
        <div className="absolute right-16 bg-black text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Write to WhatsApp
        </div>
        <RiWhatsappFill size={60} className='text-green-500 bg-white rounded-xl p-1'/>
        {/* <Image
          src="/whatsapp.svg"
          alt="WhatsApp"
          width={60}
          height={60}
          className="hover:scale-110 transition-transform duration-300"
        /> */}
      </div>
    </Link>
  );
};

export default WhatsAppButton; 