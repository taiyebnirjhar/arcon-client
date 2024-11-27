export default function OfficeLocation() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 bg-[#4A4F41] text-white">
      {/* Dhaka Section */}
      <div className="relative p-12 border-r border-[#5A5F51]">
        <div className="absolute text-[120px] font-serif opacity-10 -top-2 left-8">
          DHAKA
        </div>
        <div className="relative z-10">
          <svg
            className="w-12 h-12 mb-6 stroke-current"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="1"
          >
            <path
              d="M12 2L3 8V20H21V8L12 2Z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M9 14H15" strokeLinecap="round" />
            <path d="M12 10V18" strokeLinecap="round" />
            <path d="M7 8H17" strokeLinecap="round" />
          </svg>
          <div className="space-y-1">
            <p className="text-sm hover:underline cursor-pointer">
              1st Floor, House No. 167, Road No. 03
            </p>
            <p className="text-sm hover:underline cursor-pointer">
              New Mohakhali DOHS, Dhaka, 1206
            </p>
          </div>
        </div>
      </div>

      {/* Chittagong Section */}
      <div className="relative p-12">
        <div className="absolute text-[120px] font-serif opacity-10 -top-2 left-8">
          CHITTAGONG
        </div>
        <div className="relative z-10">
          <svg
            className="w-12 h-12 mb-6 stroke-current"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="1"
          >
            <path d="M3 17H21" strokeLinecap="round" />
            <path
              d="M3 12H8L10 14H14L16 12H21"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18 6L21 12V17H3V12L6 6H18Z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="space-y-1">
            <p className="text-sm hover:underline cursor-pointer">
              Flat 01, Nasirabad Housing Society, Zakir Hossain
            </p>
            <p className="text-sm hover:underline cursor-pointer">
              Road, Rose valley, Khulshi (Infront of BTV Center),
            </p>
            <p className="text-sm hover:underline cursor-pointer">Chittagong</p>
          </div>
        </div>
      </div>
    </div>
  );
}
