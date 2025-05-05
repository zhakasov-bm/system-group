"use client";

import Image from "next/image";

const partners = [
  "/partners/magnum.png",
  "/partners/small.png",
  "/partners/zara.png",
  "/partners/adidas.png",
  "/partners/goldApple.png",
  "/partners/starbucks.png",
  "/partners/hm.png",
];

const PartnerSlider = () => {
  // Duplicate the array for seamless looping
  const logos = [...partners, ...partners];

  return (
    <div className="w-full overflow-hidden py-8">
      <div className="relative">
        <div className="flex gap-12 animate-carousel">
          {logos.map((src, idx) => (
            <div key={idx} className="flex-shrink-0 w-40 h-20 flex items-center justify-center relative">
              <Image
                src={src}
                alt={`Partner ${idx + 1}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes carousel {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-carousel {
          animation: carousel 20s linear infinite;
          width: 200%;
        }
      `}</style>
    </div>
  );
};

export default PartnerSlider;