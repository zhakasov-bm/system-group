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
            style={{ height: "50px", marginRight: "60px" }} // Fixed height
          >
            <img
              src={src}
              alt={`Partner ${idx + 1}`}
              style={{ height: "100%", width: "auto" }} // Keep height, adjust width
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default PartnerSlider;
