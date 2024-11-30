import Link from "next/link";

export default function Hero() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-7xl text-white">
          <p
            className={`font-libreFranklin text-sm  tracking-[2.1px] font-normal mb-4`}
          >
            Transforming visions into reality through
          </p>

          <h1 className="font-bigilla  text-5xl md:text-6xl lg:text-8xl  mb-8 tracking-wide font-bold w-full">
            “COLLABORATION
            <br />& TIMELESS DESIGNS”
          </h1>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#"
              className="px-6 py-3 bg-[#FFE500] text-black font-medium hover:bg-yellow-300 transition-colors"
            >
              Schedule a Meeting
            </Link>
            <Link
              href="#"
              className="px-6 py-3 border border-white text-white font-medium hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Geometric Shape Image */}
      {/*
      <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Geometric Shape"
          layout="fill"
          objectFit="cover"
          objectPosition="left"
          className="opacity-90"
        />
      </div>
      */}
    </div>
  );
}
