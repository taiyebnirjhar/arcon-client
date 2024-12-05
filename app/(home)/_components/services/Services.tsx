import Image from "next/image";

const services = [
  {
    name: "2D/3D MODELING",
    icon: "/assets/icons/modeling.svg",
  },
  {
    name: "CORPORATE",
    icon: "/assets/icons/corporate.svg",
  },
  {
    name: "DUPLEX",
    icon: "/assets/icons/duplex.svg",
  },
  {
    name: "EXTERIOR",
    icon: "/assets/icons/exterior.svg",
  },
  {
    name: "FURNITURE DESIGN",
    icon: "/assets/icons/furniture.svg",
  },
  {
    name: "HOME INTERIOR",
    icon: "/assets/icons/interior.svg",
  },
  {
    name: "LANDSCAPE",
    icon: "/assets/icons/landscape.svg",
  },
  {
    name: "RESTAURANT",
    icon: "/assets/icons/restaurant.svg",
  },
];

export default function Services() {
  return (
    <div className="w-full bg-[#3D482E]">
      <div className="container mx-auto px-4 py-24 bg-[#3D482E]">
        <h2 className="text-4xl md:text-7xl font-bigilla font-bold text-white text-center mb-20">
          AT YOUR SERVICE
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16">
          {services.map((service) => (
            <div key={service.name} className="text-center group">
              <div className="relative w-full aspect-[4/3] mb-6">
                <div className="absolute inset-0 border border-white/20 rounded-sm group-hover:border-white/40 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src={service.icon}
                    alt={service.name}
                    width={64}
                    height={64}
                    className="w-24 h-24 text-white"
                  />
                </div>
              </div>
              <p className="text-white text-sm font-libreFranklin font-medium">
                {service.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
