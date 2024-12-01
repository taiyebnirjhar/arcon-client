import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronDown, Search } from "lucide-react";
import Link from "next/link";

export default function ProjectPage() {
  return (
    <div className="min-h-screen  relative overflow-hidden">
      <Header />
    </div>
  );
}

function Header() {
  return (
    <div className="relative bg-gradient-to-br from-[#2A3121] via-[#677655] to-[#819766] text-white min-h-[240px]">
      {/* Navigation Bar */}
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-light">Arcon</span>
            <span className="text-sm font-light -mt-3">interior</span>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-sm hover:text-gray-200">
              CHITTAGONG
            </Link>
            <Link href="#" className="text-sm hover:text-gray-200">
              DHAKA
            </Link>
            <div className="relative group">
              <Link
                href="#"
                className="text-sm hover:text-gray-200 flex items-center"
              >
                SERVICES
                <ChevronDown className="h-4 w-4 ml-1" />
              </Link>
            </div>
            <Link href="#" className="text-sm hover:text-gray-200">
              PROJECTS
            </Link>
            <Link href="#" className="text-sm hover:text-gray-200">
              REVIEWS
            </Link>
            <Link href="#" className="text-sm hover:text-gray-200">
              ABOUT
            </Link>
            <Link href="#" className="text-sm hover:text-gray-200">
              CONTACTS
            </Link>
          </nav>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="container mx-auto px-6 mt-8">
        <div className="text-sm opacity-80">
          <Link href="/" className="hover:text-gray-200">
            HOME
          </Link>
          <span className="mx-2"> &gt;</span>
          <Link href="/projects" className="hover:text-gray-200">
            PROJECTS
          </Link>
        </div>
      </div>

      {/* Projects Title and Search */}
      <div className="container mx-auto px-6 mt-4">
        <h1 className="text-5xl font-light tracking-wider mb-6">PROJECTS</h1>
        <div className="flex gap-4 items-center">
          <div className="relative flex-1">
            <Input
              type="text"
              placeholder="Search"
              className="w-full bg-white/10 border-none text-white placeholder:text-white/60 pl-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/60" />
          </div>
          <Button
            variant="ghost"
            className="text-white hover:bg-white/10 flex items-center gap-2"
          >
            FILTER
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Diagonal Shape */}
      <div
        className="absolute bottom-0 right-0 w-[200px] h-[100px]"
        style={{
          background: "linear-gradient(135deg, transparent 50%, #fff 50%)",
        }}
      />
    </div>
  );
}
