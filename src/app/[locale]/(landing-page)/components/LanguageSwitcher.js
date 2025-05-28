"use client";

import { useRouter, usePathname } from 'next/navigation';

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();

  const segments = pathname.split('/');
  const currentLocale = segments[1]; 

  const handleChange = (event) => {
    const selectedLocale = event.target.value;

    segments[1] = selectedLocale;
    const newPath = segments.join('/');

    router.push(newPath);
  };

  return (
    <div>
      <select
        value={currentLocale}
        onChange={handleChange}
        className="text-white border border-white/50 border-solid rounded-full py-1 px-3 flex items-center gap-1 [backdrop-filter:blur(20px)] [background:linear-gradient(91.15deg,_rgba(255,_255,_255,_0.15),_rgba(153,_153,_153,_0.15))]"
      >
        {['kz', 'ru'].map((loc) => (
          <option key={loc} value={loc}>
            {loc.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitcher;
