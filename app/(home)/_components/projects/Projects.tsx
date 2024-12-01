import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="bg-white w-full font-libreFranklin">
      <div className="max-w-[1200px] mx-auto px-8 py-24">
        <h1 className="text-center mb-16 text-[80px] leading-none font-serif">
          PROJECTS
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr,1fr] gap-8 font-libreFranklin">
          {/* White Castle Project */}
          <div className="relative group">
            <div className="absolute top-0 right-0 z-10">
              <span className="text-xs tracking-wider text-[#353D2B] underline cursor-pointer">
                Explore Project
              </span>
            </div>
            <Link href="#" className="block">
              <div className="space-y-3">
                <h2 className="text-[#353D2B] text-sm tracking-[0.2em]">
                  WHITE CASTLE
                </h2>
                <Image
                  src="/assets/images/white-castle.jpeg"
                  alt="White Castle interior showing modern living room with dark furniture"
                  width={800}
                  height={1000}
                  className="w-full object-cover aspect-[12/12] grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </Link>
          </div>

          {/* Right column projects */}
          <div className="space-y-8 flex flex-col  justify-center">
            {/* Build A Pair Project */}
            <div className="relative group ">
              <div className="absolute top-0 right-0 z-10">
                <span className="text-xs tracking-wider text-[#353D2B] underline cursor-pointer">
                  Explore Project
                </span>
              </div>
              <Link href="#" className="block">
                <div className="space-y-3">
                  <h2 className="text-[#353D2B] text-sm tracking-[0.2em]">
                    BUILD A PAIR
                  </h2>
                  <Image
                    src="/assets/images/build-a-pair.jpeg"
                    alt="Build A Pair interior showing bright living room with white furniture"
                    width={600}
                    height={400}
                    className="w-full object-cover aspect-[3/2] grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </Link>
            </div>

            {/* Digital Stylist Project */}
            <div className="relative group ">
              <div className="absolute top-0 right-0 z-10">
                <span className="text-xs tracking-wider text-[#353D2B] underline cursor-pointer">
                  Explore Project
                </span>
              </div>
              <Link href="#" className="block">
                <div className="space-y-3">
                  <h2 className="text-[#353D2B] text-sm tracking-[0.2em]">
                    DIGITAL STYLIST
                  </h2>
                  <Image
                    src="/assets/images/digital-stylist.jpeg"
                    alt="Digital Stylist interior showing minimalist white and grey living room"
                    width={600}
                    height={400}
                    className="w-full object-cover aspect-[3/2] grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-16">
          <Button
            variant="outline"
            className="bg-[#4A4F41] hover:bg-[#353D2B] text-white hover:text-white border-0 rounded-lg px-12 py-6 text-sm  transition-colors duration-300"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </div>
  );
}
