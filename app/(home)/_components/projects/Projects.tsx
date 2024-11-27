import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Projects() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-center mb-12 text-3xl tracking-widest font-serif">
        PROJECTS
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* White Castle Project - Spans full width on mobile, left column on desktop */}
        <div className="md:row-span-2">
          <div className="space-y-2">
            <div className="text-xs tracking-wider mb-1">Interior Project</div>
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="White Castle interior showing modern living room with dark furniture"
              width={800}
              height={600}
              className="w-full object-cover aspect-[4/3]"
            />
            <h2 className="font-serif text-sm tracking-wider mt-2">
              WHITE CASTLE
            </h2>
          </div>
        </div>

        {/* Right column projects */}
        <div className="space-y-6">
          {/* Build A Pair Project */}
          <div className="space-y-2">
            <div className="text-xs tracking-wider mb-1">Interior Project</div>
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Build A Pair interior showing bright living room with white furniture"
              width={600}
              height={400}
              className="w-full object-cover aspect-[3/2]"
            />
            <h2 className="font-serif text-sm tracking-wider mt-2">
              BUILD A PAIR
            </h2>
          </div>

          {/* Digital Stylist Project */}
          <div className="space-y-2">
            <div className="text-xs tracking-wider mb-1">Interior Project</div>
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Digital Stylist interior showing minimalist white and grey living room"
              width={600}
              height={400}
              className="w-full object-cover aspect-[3/2]"
            />
            <h2 className="font-serif text-sm tracking-wider mt-2">
              DIGITAL STYLIST
            </h2>
          </div>
        </div>
      </div>

      {/* View All Projects Button */}
      <div className="text-center">
        <Button
          variant="outline"
          className="bg-[#4A4F41] hover:bg-[#3A3F31] text-white border-0 rounded-none px-8 py-2 text-sm tracking-wider"
        >
          View All Projects
        </Button>
      </div>
    </div>
  );
}
