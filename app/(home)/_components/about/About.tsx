import useDeviceSize from "@/hooks/use-device-size/useDeviceSize";
import Image from "next/image";

export default function About() {
  const device = useDeviceSize();

  return (
    <div className="w-full">
      <div className="bg-[#F5F5DC] ">
        <div className="grid grid-cols-[1fr_auto] gap-16 text-[#353D2B] font-libreFranklin">
          <div className="space-y-8 px-16 py-20">
            <h2 className="2xl:text-8xl text-7xl font-bold font-bigilla text-[#353D2B] mb-12 lg:min-w-max">
              ABOUT ARCON
            </h2>
            <p className="2xl:text-2xl text-xl opacity/90 font-light leading-relaxed max-w-3xl">
              Arcon Interior is a Top-Ranked Interior & Exterior design firm in
              Bangladesh Established in 2012.
            </p>

            <div className="space-y-3  opacity/90 2xl:text-3xl text-2xl">
              <p className=" font-light mb-2">
                We work in areas as diverse as:
              </p>
              <ul className="space-y-2  font-light">
                <li className="flex items-center gap-2">
                  <span className=" leading-none">•</span>
                  Luxurious Duplex
                </li>
                <li className="flex items-center gap-2">
                  <span className=" leading-none">•</span>
                  Modern Luxury Residential
                </li>
                <li className="flex items-center gap-2">
                  <span className=" leading-none">•</span>
                  Corporate Office
                </li>
                <li className="flex items-center gap-2">
                  <span className=" leading-none">•</span>
                  Healthcare
                </li>
                <li className="flex items-center gap-2">
                  <span className=" leading-none">•</span>
                  Swimming Pool
                </li>
                <li className="flex items-center gap-2">
                  <span className=" leading-none">•</span>
                  Furniture
                </li>
                <li className="flex items-center gap-2">
                  <span className=" leading-none">•</span>
                  Landscape
                </li>
                <li className="flex items-center gap-2">
                  <span className="leading-none">•</span>
                  Exterior
                </li>
              </ul>
            </div>
          </div>

          <div className="relative w-full h-full -mt-1 hidden lg:block">
            <Image
              src="/assets/people-images/eng-osman-goni.svg"
              alt="Chief Engineer"
              width={400}
              height={400}
              className="object-cover  w-full   h-[90%]"
            />
            <div className="text-center pt-8">
              <h3 className="font-bold font-bigilla  2xl:text-6xl text-5xl  mb-1">
                ENG. OSMAN GONI
              </h3>
              <p className="font-libreFranklin font-light tracking-wider 2xl:text-xl text-lg">
                CHIEF ENGINEER
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 p-4 lg:p-0 lg:grid-cols-2 gap-16 2xl:-mt-80 xl:-mt-64 lg:-mt-10 text-[#353D2B] font-libreFranklin bg-[#F5F5DC]">
          <div className=" hidden lg:block">
            <div className="text-center pb-8">
              <h3 className="font-bold font-bigilla text-6xl  mb-1">
                ARIF MAHMUD
              </h3>
              <p className="font-libreFranklin font-light tracking-wider text-xl">
                CHIEF ARCHITECT
              </p>
            </div>
            <div className="relative w-full h-full bg-[#F5F5DC] ">
              <Image
                src="/assets/people-images/arif-mahmud.svg"
                alt="Chief Architect"
                width={400}
                height={400}
                className="object-cover  w-full h-[90%]"
              />
            </div>
          </div>

          <div className="space-y-12 w-full h-full flex items-center justify-center lg:justify-end">
            <div className="space-y-16  font-light leading-relaxed 2xl:text-3xl text-2xl">
              <p>
                We like to keep our clients close so that we can accept their
                social, economic and sustainability goals with all our hearts.
              </p>
              <p>
                It is our aim to create a smart place for our client&apos;s
                places that are easy, cost-effective & innovative yet stands out
                in the crowd for its appeal.
              </p>
              <p>
                We collaborate closely with all design and construction teams to
                ensure efficient and effective implementation of the project
                brief.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
