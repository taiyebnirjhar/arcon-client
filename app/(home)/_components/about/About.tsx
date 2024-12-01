import Image from "next/image";

export default function About() {
  return (
    <div className="w-full">
      <div className="bg-[#F5F5DC] ">
        <div className="grid grid-cols-[1fr_auto] gap-16 text-[#353D2B] font-libreFranklin">
          <div className="space-y-8 px-16 py-20">
            <h2 className="text-9xl font-bigilla text-[#353D2B] mb-12">
              ABOUT ARCON
            </h2>
            <p className="text-3xl font-light leading-relaxed max-w-3xl">
              Arcon Interior is a Top-Ranked Interior & Exterior design firm in
              Bangladesh Established in 2012.
            </p>

            <div className="space-y-3 text-3xl">
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

          <div className="relative w-full h-full">
            <Image
              src="/assets/people-images/eng-osman-goni.svg"
              alt="Chief Engineer"
              width={400}
              height={400}
              className="object-cover  w-full  h-[80%]"
            />
            <div className="text-center pt-12">
              <h3 className="font-bold font-bigilla text-6xl  mb-1">
                ENG. OSMAN GONI
              </h3>
              <p className="font-libreFranklin font-light tracking-wider text-xl">
                CHIEF ENGINEER
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-16 mt-24 text-[#353D2B] font-libreFranklin">
          <div className="space-y-6 -mt-80">
            <div className="text-center pb-12">
              <h3 className="font-bold font-bigilla text-6xl  mb-1">
                ARIF MAHMUD
              </h3>
              <p className="font-libreFranklin font-light tracking-wider text-xl">
                CHIEF ARCHITECT
              </p>
            </div>
            <div className="relative w-full h-full">
              <Image
                src="/assets/people-images/arif-mahmud.svg"
                alt="Chief Architect"
                width={400}
                height={400}
                className="object-cover  w-full h-[90%]"
              />
            </div>
          </div>

          <div className="space-y-12 w-full h-full flex items-center justify-end">
            <div className="space-y-16 text-3xl font-light leading-relaxed">
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
