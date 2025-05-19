"use client";

import { useRouter } from 'next/navigation';
import { routing } from '@/i18n/routing.js';

const LanguageSwitcher = ({ locale }) => {
  const router = useRouter();

  const handleChange = (event) => {
    const selectedLocale = event.target.value;
    router.push(`/${selectedLocale}`);
  };

  return (
    <div className="">
      <select
        value={locale}
        onChange={handleChange}
        className="text-white border border-white/50 border-solid rounded-full py-1 px-3 flex items-center gap-1 [backdrop-filter:blur(20px)] [background:linear-gradient(91.15deg,_rgba(255,_255,_255,_0.15),_rgba(153,_153,_153,_0.15))]"
      >
        {routing.locales.map((loc) => (
          <option key={loc} value={loc}>
            {loc.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitcher; 