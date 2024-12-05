import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Hero({ className }: { className?: string }) {
  return (
    <div className={cn("", className)}>
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
          <div className="flex flex-wrap gap-4 font-libreFranklin">
            <Link
              href="#"
              className="px-6 py-3 bg-[#FFE500]  text-black font-medium hover:bg-[#FFE500]/80 transition-colors"
            >
              Schedule a Meeting
            </Link>
            <Link
              href="#"
              className="px-14 py-3 border border-white text-white font-medium hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Geometric Shape Image */}
      <div className="w-full h-full flex justify-center">
        <Image
          src="/assets/background-images/hero-bg.png"
          alt="Geometric Shape"
          className="w-full object-cover"
          width={1280}
          height={500}
        />
      </div>
    </div>
  );
}

export function HeroV2({ className }: { className?: string }) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Geometric Shape Image */}
      <div className="absolute inset-0 z-0 top-24">
        <Image
          src="/assets/background-images/hero-bg.png"
          alt="Geometric Shape"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
          priority
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32">
        <div className="max-w-7xl text-white">
          <p className="font-libreFranklin text-xs sm:text-sm tracking-[2.1px] font-normal mb-2 sm:mb-4">
            Transforming visions into reality through
          </p>

          <h1 className="font-bigilla text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-4 sm:mb-6 md:mb-8 tracking-wide font-bold w-full">
            “COLLABORATION
            <br />& TIMELESS DESIGNS”
          </h1>
          <div className="flex flex-wrap gap-3 sm:gap-4 font-libreFranklin">
            <Link
              href="#"
              className="px-4 sm:px-6 py-2 sm:py-3 bg-[#FFE500] text-black text-sm sm:text-base font-medium hover:bg-[#FFE500]/80 transition-colors"
            >
              Schedule a Meeting
            </Link>
            <Link
              href="#"
              className="px-8 sm:px-14 py-2 sm:py-3 border border-white text-white text-sm sm:text-base font-medium hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
