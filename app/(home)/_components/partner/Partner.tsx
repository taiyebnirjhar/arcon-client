import Image from "next/image";

const partners = [
  {
    name: "Club Logo",
    logo: "/assets/images/ctg-club.png",
  },
  {
    name: "Chevron",
    logo: "/assets/images/chevron.png",
  },
  {
    name: "Social Islami Bank Limited",
    logo: "/assets/images/social-islami-bank.png",
  },
  {
    name: "Eastern Bank Ltd",
    logo: "/assets/images/eastern-bank.png",
  },
  {
    name: "SA Group",
    logo: "/assets/images/salam.png",
  },
  {
    name: "Port Authority",
    logo: "/assets/images/port-authority.png",
  },
];

export default function Partner() {
  return (
    <div className="bg-[#E9D21E]">
      <div className="max-w-[90%] mx-auto px-4 py-6 sm:py-8 md:py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 justify-between items-center">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="relative flex items-center justify-center"
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={80}
                height={80}
                className="object-cover w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
