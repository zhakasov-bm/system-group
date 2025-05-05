// components/Button.jsx
import React from 'react';
import { RiWhatsappFill } from 'react-icons/ri';

const ButtonWA = ({ onClick, className = '' }) => {
    return (
      <button
        onClick={onClick}
        className={`flex items-center gap-3 px-8 py-2 border border-gray-300 text-gray-800 rounded-full transition ${className}`}
      >
        <RiWhatsappFill size={20} className='text-green-500'/>
        <span className='font-medium'>Написать на WhatsApp</span>
      </button>
    );
  }

export default ButtonWA;