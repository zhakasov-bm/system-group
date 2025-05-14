import Image from "next/image";

const vendors = [
  { src: "/vendors/zebra.svg", alt: "zebra" },
  { src: "/vendors/Dell_Logo.svg", alt: "Dell" },
  { src: "/vendors/cisco.svg", alt: "cisco" },
  { src: "/vendors/hp.svg", alt: "hp" },
  { src: "/vendors/huawei.svg", alt: "huawei" },
  { src: "/vendors/mpi.svg", alt: "mpi" },
  { src: "/vendors/dn.svg", alt: "dn" },
  { src: "/vendors/ncr.svg", alt: "ncr" },
  { src: "/vendors/fortinet.svg", alt: "fortinet" },
  { src: "/vendors/42g.svg", alt: "42g" },
  { src: "/vendors/axelot.svg", alt: "axelot" },
  { src: "/vendors/cas.svg", alt: "cas" },
  { src: "/vendors/soti.svg", alt: "soti" },
  { src: "/vendors/sato.svg", alt: "sato" },
  { src: "/vendors/digi.png", alt: "digi" },
];

const Vendors = () => {
  return (
    <section className="container mx-auto my-20">
      <h1 className="text-4xl font-bold text-black text-center py-12">
        Kлючевые вендоры
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-16 items-center justify-center p-4">
        {vendors.map((vendor, index) => (
          <div key={index} className="flex items-center justify-center">
            <Image src={vendor.src} alt={vendor.alt} width={100} height={100} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Vendors;
