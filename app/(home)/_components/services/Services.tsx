import Image from "next/image";

const services = [
  {
    name: "2D/3D Modeling",
    icon: "/placeholder.svg?height=64&width=64",
  },
  {
    name: "Corporate",
    icon: "/placeholder.svg?height=64&width=64",
  },
  {
    name: "Duplex",
    icon: "/placeholder.svg?height=64&width=64",
  },
  {
    name: "Exterior",
    icon: "/placeholder.svg?height=64&width=64",
  },
  {
    name: "Furniture Design",
    icon: "/placeholder.svg?height=64&width=64",
  },
  {
    name: "Home",
    icon: "/placeholder.svg?height=64&width=64",
  },
  {
    name: "Landscape",
    icon: "/placeholder.svg?height=64&width=64",
  },
  {
    name: "Restaurant",
    icon: "/placeholder.svg?height=64&width=64",
  },
];

export default function Services() {
  return (
    <div className="w-full bg-[#3D482E]">
      <div className="container mx-auto px-4 pb-32 bg-[#3D482E]">
        <h2 className="text-4xl md:text-8xl font-bigilla text-white text-center mb-16 ">
          AT YOUR SERVICE
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.name} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4">
                <Image
                  src={service.icon}
                  alt={service.name}
                  width={64}
                  height={64}
                />
              </div>
              <p className="text-white uppercase tracking-wide text-sm font-libreFranklin">
                {service.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
