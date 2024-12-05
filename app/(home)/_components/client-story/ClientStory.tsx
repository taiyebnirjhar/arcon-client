import { Button } from "@/components/ui/button";
import Image from "next/image";

const videos = [
  {
    thumbnail: "/assets/images/yt-placeholder.png",
    title: "Hani's Residence",
    quote:
      "We chose Mirpur because of their Professionalism, Time commitment & Design",
    location: "4000sft, Mirpur DOHS",
    project: "White Castle Dhaka",
  },
  {
    thumbnail: "/assets/images/yt-placeholder.png",
    title: "Modern Interior",
    quote:
      "We chose Mirpur because of their Professionalism, Time commitment & Design",
    location: "4000sft, Mirpur DOHS",
    project: "White Castle Dhaka",
  },
  {
    thumbnail: "/assets/images/yt-placeholder.png",
    title: "Office Space",
    quote:
      "We chose Mirpur because of their Professionalism, Time commitment & Design",
    location: "4000sft, Mirpur DOHS",
    project: "White Castle Dhaka",
  },
  // Duplicate entries for the second row
  {
    thumbnail: "/assets/images/yt-placeholder.png",
    title: "Hani's Residence",
    quote:
      "We chose Mirpur because of their Professionalism, Time commitment & Design",
    location: "4000sft, Mirpur DOHS",
    project: "White Castle Dhaka",
  },
  {
    thumbnail: "/assets/images/yt-placeholder.png",
    title: "Modern Interior",
    quote:
      "We chose Mirpur because of their Professionalism, Time commitment & Design",
    location: "4000sft, Mirpur DOHS",
    project: "White Castle Dhaka",
  },
  {
    thumbnail: "/assets/images/yt-placeholder.png",
    title: "Office Space",
    quote:
      "We chose Mirpur because of their Professionalism, Time commitment & Design",
    location: "4000sft, Mirpur DOHS",
    project: "White Castle Dhaka",
  },
];

export default function ClientStory() {
  return (
    <div className="bg-[#596548] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center font-bigilla font-bold text-6xl mb-16 tracking-wider text-white">
          CLIENT STORIES COME TO LIFE
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {videos.map((video, index) => (
            <div key={index} className="relative group">
              <div className="relative aspect-video">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover"
                />
                {/* <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
                      <Play className="w-6 h-6 text-white fill-current" />
                    </div>
                  </div>
                </div> */}
              </div>

              <div className="mt-4 text-white space-y-2">
                <p className="text-sm italic opacity-90 font-libreFranklin">
                  &quot;{video.quote}&quot;
                </p>
                <div className="text-xs opacity-80 font-libreFranklin ">
                  <p className="font-semibold">{video.location}</p>
                  <p>{video.project}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            className="bg-[#FFD700] hover:bg-[#E6C200] text-black border-0 rounded-none px-8 py-2 text-sm tracking-wider"
          >
            View More
          </Button>
        </div>
      </div>
    </div>
  );
}
