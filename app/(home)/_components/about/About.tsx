import Image from "next/image";

export default function About() {
  return (
    <div className="w-full">
      <div className="bg-[#F5F5DC]  p-8 md:p-16">
        <h2 className="text-4xl md:text-5xl font-serif text-[#2A3121] mb-8">
          ABOUT ARCON
        </h2>

        <div className="flex justify-between">
          <div className="space-y-6">
            <p className="text-[#2A3121]">
              Arcon Interior is a Top Ranked Interior & Exterior design firm in
              Bangladesh Established in 2012.
            </p>

            <div>
              <p className="text-[#2A3121] mb-2">
                We work in areas as diverse as:
              </p>
              <ul className="space-y-2 text-[#2A3121]">
                <li>• Luxurious Duplex</li>
                <li>• Modern Luxury Residential</li>
                <li>• Corporate Office</li>
                <li>• Healthcare</li>
                <li>• Swimming Pool</li>
                <li>• Furniture</li>
                <li>• Landscape</li>
                <li>• Exterior</li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Chief Engineer"
              width={400}
              height={400}
              className="rounded-full"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mt-16">
          <div className="relative">
            <div className="mt-4 text-center">
              <h3 className="font-serif text-2xl text-[#2A3121]">
                ARIF MAHMUD
              </h3>
              <p className="text-[#2A3121]">CHIEF ARCHITECT</p>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Chief Engineer"
                width={400}
                height={400}
                className="rounded-full"
              />
            </div>
          </div>

          <div className="space-y-8 flex flex-col justify-center">
            <div className="text-center md:text-right">
              <h3 className="font-serif text-2xl text-[#2A3121] mb-2">
                ENG. OSMAN GONI
              </h3>
              <p className="text-[#2A3121]">CHIEF ENGINEER</p>
            </div>

            <div className="space-y-6 text-[#2A3121]">
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
