import Image from "next/image";
import Link from "next/link";
import LeadMagnet from "../components/LeadMagnet";

export default function Home() {
  return (
    <div className="">
      <div className="relative h-[240px] md:h-[360px] overflow-hidden">
        <Image
          src="/hero.png"
          alt="Hero background"
          fill
          className="object-cover w-full z-0"
          priority
          sizes="(max-width: 768px) 100vw, 100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-black/30" />{" "}
        <div className="container relative mx-auto px-4 py-24 md:pt-50 text-white z-10">
          <h1 className="text-4xl text-center md:text-5xl font-bold text-transparent !bg-clip-text [background:linear-gradient(91.15deg,_#fff,_#999)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            Контакты
          </h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-10 md:py-20 text-black z-10 flex flex-col gap-8">
        <h3 className="text-2xl md:text-4xl font-bold">Свяжитесь с нами</h3>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-5/12 flex flex-col gap-8 md:p-4">
            <ul className="flex flex-col gap-4 text-lg md:text-base font-medium">
              <li className="flex flex-col gap-1">
                <span className="text-black/70">Тел:</span>
                <Link href="tel:+77273398632" className="text-xl">
                  +7 (727) 339 86 32
                </Link>
                <Link href="tel:+77066418159" className="text-xl">
                  +7 (706) 641-81-59
                </Link>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-black/70">Email:</span>
                <Link href="mailto:info@sga.kz" className="text-xl">
                  info@sga.kz
                </Link>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-black/70">Адрес:</span>
                <span className="text-xl">
                  г.Алматы, ул. Толе би 101, блок А, 3й этаж
                </span>
              </li>
            </ul>
          </div>
          <div className="md:w-7/12 md:p-4 h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.8796205164376!2d76.92209077567117!3d43.25394467112393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836eb1530564c9%3A0xcfb73b59f9a751a3!2sBe%20Educated!5e0!3m2!1sru!2skz!4v1747198429673!5m2!1sru!2skz"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0 rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </div>
      <LeadMagnet />
    </div>
  );
}
