"use client";

import Image from "next/image";
import partners from "../data/partners";
import Marquee from "react-fast-marquee";

const PartnerSlider = () => {
  // Duplicate the array for seamless looping
  const logos = [...partners, ...partners];

  return (
    <div className="w-full overflow-hidden py-8">
      <Marquee speed={70} gradient={false} pauseOnHover={false}>
        {logos.map((partner, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center relative"
            style={{ height: "60px", marginRight: "60px" }}
          >
            <Image
              src={partner.src} // Access the `src` property
              alt={partner.alt} // Access the `alt` property
              width={200} // Explicit width (can be adjusted)
              height={60} // Explicit height (can be adjusted)
              style={{ objectFit: "contain" }} // Ensures the image scales nicely
              priority // Optional: faster loading
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default PartnerSlider;
