const statistics = [
  {
    value: tu.Statistics.yearsOfService.value,
    description: tu.Statistics.yearsOfService.title,
  },
  {
    value: tu.Statistics.partners.value,
    description: tu.Statistics.partners.title,
    bgImage: "/bg-logo.png",
  },
  {
    value: tu.Statistics.happyClients.value,
    description: tu.Statistics.happyClients.title.split(" "), // if you want an array like ["отраслей", "автоматизировано"]
    icons: [
      { src: "/s1.svg", alt: "icon 1", width: 80, height: 80, className: "absolute top-40 right-32 lg:top-6 lg:right-24" },
      { src: "/s2.svg", alt: "icon 2", width: 100, height: 100, className: "absolute bottom-10 sm:right-3 right-6" },
      { src: "/s3.svg", alt: "icon 3", width: 70, height: 70, className: "absolute bottom-4 sm:right-32 right-40" },
    ],
  },
];

export default statistics;
