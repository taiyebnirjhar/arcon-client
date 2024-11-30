import { Play } from "lucide-react";
import Image from "next/image";

export default function VideoPreview() {
  return (
    <div className=" w-full bg-[#3D482E]">
      <VideoContainer />
      <div className="container mx-auto px-4 pb-16 w-full -mt-[700px]">
        <div className="relative aspect-video rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=720&width=1280"
            alt="Interior Design Showcase"
            width={1280}
            height={720}
            className="object-cover w-full"
          />
          <button
            className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors group"
            aria-label="Play video"
          >
            <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
              <Play className="w-10 h-10 text-white" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

const VideoContainer = () => {
  return <div className=" bg-white h-[620px]"></div>;
};
