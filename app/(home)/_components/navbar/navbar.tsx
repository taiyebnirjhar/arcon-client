import { ChevronDown, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/assets/logo/ARCON-Interior-Logo-white.png"
              alt="Arcon Interior Logo"
              width={40}
              height={40}
              className="h-[70%] w-[70%] object-contain"
            />
          </Link>

          <div className="hidden lg:flex items-center space-x-10 font-libreFranklin text-sm">
            <Link
              href="#"
              className="text-white/90 hover:text-white tracking-wider min-w-max"
            >
              <MapPin className="mr-0.5 -mt-1 w-5 h-5 inline-flex" /> CHITTAGONG
            </Link>
            <Link
              href="#"
              className="text-white/90 hover:text-white tracking-wider min-w-max"
            >
              <MapPin className="mr-0.5 -mt-1 w-5 h-5 inline-flex" /> DHAKA
            </Link>
            <Link
              href="#"
              className="text-white/90 hover:text-white tracking-wider min-w-max"
            >
              SERVICES{" "}
              <ChevronDown className="ml-0.5 -mt-1 w-5 h-5 inline-flex" />
            </Link>
            <Link
              href="/projects"
              className="text-white/90 hover:text-white tracking-wider"
            >
              PROJECTS
            </Link>
            <Link
              href="#"
              className="text-white/90 hover:text-white tracking-wider"
            >
              REVIEWS
            </Link>
            <Link
              href="#"
              className="text-white/90 hover:text-white tracking-wider"
            >
              ABOUT
            </Link>
            <Link
              href="#"
              className="text-white/90 hover:text-white tracking-wider"
            >
              CONTACTS
            </Link>
          </div>

          {/* <div className="hidden md:flex items-center justify-center ">
            <WhatsAppButton className="w-16 h-16 " iconSize={24} />

          </div> */}
        </div>
      </div>
    </nav>
  );
}
