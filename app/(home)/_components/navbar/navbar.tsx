import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="Arcon Interior Logo"
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <span className="text-white font-medium tracking-wide">
              Arcon Interior
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-10">
            <Link
              href="#"
              className="text-white/90 hover:text-white text-sm tracking-wider"
            >
              CHITTAGONG
            </Link>
            <Link
              href="#"
              className="text-white/90 hover:text-white text-sm tracking-wider"
            >
              DHAKA
            </Link>
            <Link
              href="#"
              className="text-white/90 hover:text-white text-sm tracking-wider"
            >
              SERVICES
            </Link>
            <Link
              href="#"
              className="text-white/90 hover:text-white text-sm tracking-wider"
            >
              PROJECTS
            </Link>
            <Link
              href="#"
              className="text-white/90 hover:text-white text-sm tracking-wider"
            >
              REVIEWS
            </Link>
            <Link
              href="#"
              className="text-white/90 hover:text-white text-sm tracking-wider"
            >
              ABOUT
            </Link>
            <Link
              href="#"
              className="text-white/90 hover:text-white text-sm tracking-wider"
            >
              CONTACTS
            </Link>
          </div>

          <Link
            href="#"
            className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <Phone className="w-5 h-5 text-white" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
