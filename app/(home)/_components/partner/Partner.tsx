import Image from "next/image";

const partners = [
  {
    name: "Club Logo",
    logo: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Chevron",
    logo: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Social Islami Bank Limited",
    logo: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Eastern Bank Ltd",
    logo: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "FA Group",
    logo: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Institution Logo",
    logo: "/placeholder.svg?height=80&width=80",
  },
];

export default function Partner() {
  return (
    <div className="bg-[#FFD700] py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="w-[120px] h-[60px] relative flex items-center justify-center"
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={80}
                height={80}
                className="max-w-full max-h-full object-contain brightness-0"
                style={{
                  filter: "brightness(0)",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
