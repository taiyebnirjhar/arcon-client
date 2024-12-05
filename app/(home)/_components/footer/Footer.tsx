import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className=" text-white px-8 py-12 font-light"
      style={{
        background:
          "linear-gradient(120.93deg, #2A3121 -2.77%, #677655 26.58%, #819766 48.57%, #677655 74.9%, #2A3121 97%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl font-serif text-center tracking-wider mb-1">
            ARCON INTERIOR
          </h2>
          <p className="text-center text-sm tracking-wider">Since 2023</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-medium mb-4">Quick Access</h3>
            <div className="space-y-2 text-sm">
              <p>contact@arconinterior.com</p>
              <p>855/235/5353</p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-4">Explore</h3>
            <div className="space-y-2 text-sm">
              <Link href="/services" className="block hover:underline">
                Services
              </Link>
              <Link href="/projects" className="block hover:underline">
                Projects
              </Link>
              <Link href="/about" className="block hover:underline">
                About Us
              </Link>
              <Link href="/locations" className="block hover:underline">
                Locations
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-4">Company</h3>
            <div className="space-y-2 text-sm">
              <Link href="/about-us" className="block hover:underline">
                About Us
              </Link>
              <Link href="/privacy" className="block hover:underline">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block hover:underline">
                Terms of Use
              </Link>
              <Link href="/contact" className="block hover:underline">
                Contact Us
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-4">Join Our Mailing List</h3>
            <Input
              type="email"
              placeholder="Your email..."
              className="bg-transparent border-white/30 text-white placeholder:text-white/70 focus-visible:ring-white"
            />
            <div className="flex gap-4 mt-6">
              <Link href="#" className="hover:opacity-70">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="hover:opacity-70">
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:opacity-70">
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:opacity-70">
                {/* <Tiktok className="w-5 h-5" /> */}
                <span className="sr-only">TikTok</span>
              </Link>
              <Link href="#" className="hover:opacity-70">
                <Youtube className="w-5 h-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-sm">
          <p>© Arcon Interior 2024</p>
        </div>
      </div>
    </footer>
  );
}
