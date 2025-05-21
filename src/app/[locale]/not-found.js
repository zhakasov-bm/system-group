'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function NotFound() {
  const t = useTranslations('NotFound');

  console.log("hello from 404");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
      <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
      <p className="text-lg mb-6">{t('message')}</p>
      <Link href="/" className="text-blue-600 underline">
        {t('link')}
      </Link>
    </div>
  );
}

