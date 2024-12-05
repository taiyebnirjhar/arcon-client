import Image from "next/image";

export default function OfficeLocation() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 bg-[#505B41] text-white">
      {/* Dhaka Section */}
      <div className="relative p-12 border-r border-[#5A5F51]">
        <div className="absolute text-9xl font-bigilla font-bold opacity-10 top-4 left-8">
          DHAKA
        </div>
        <div className="relative z-10">
          <Image
            src="/assets/icons/castle.svg"
            alt="Address icon"
            width={48}
            height={48}
            className="mb-6 h-28 w-28"
          />
          <address className="space-y-1 font-libreFranklin underline">
            <p className="text-sm hover:underline cursor-pointer">
              1st Floor, House No. 167, Road No. 03
            </p>
            <p className="text-sm hover:underline cursor-pointer">
              New Mohakhali DOHS, Dhaka, 1206
            </p>
          </address>
        </div>
      </div>

      {/* Chittagong Section */}
      <div className="relative p-12">
        <div className="absolute text-9xl font-bigilla font-bold opacity-10 top-4 left-8">
          CHITTAGONG
        </div>
        <div className="relative z-10">
          <Image
            src="/assets/icons/boat.svg"
            alt="Address icon"
            width={48}
            height={48}
            className="mb-6 h-28 w-28"
          />
          <address className="space-y-1 font-libreFranklin underline">
            <p className="text-sm hover:underline cursor-pointer">
              Flat 01, Nasirabad Housing Society, Zakir Hossain
            </p>
            <p className="text-sm hover:underline cursor-pointer">
              Road, Rose valley, Khulshi (Infront of BTV Center),
            </p>
            <p className="text-sm hover:underline cursor-pointer">Chittagong</p>
          </address>
        </div>
      </div>
    </div>
  );
}
