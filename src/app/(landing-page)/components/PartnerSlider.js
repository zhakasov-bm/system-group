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
        {logos.map((src, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center relative"
            style={{ height: "60px", marginRight: "60px" }}
          >
            <Image
              src={src}
              alt={`Partner ${idx + 1}`}
              width={200} // Set width explicitly (required by next/image)
              height={50} // Set height explicitly (required by next/image)
              style={{ objectFit: "contain" }} // Ensures the image is properly sized
              priority // Optional: loads images faster
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default PartnerSlider;
