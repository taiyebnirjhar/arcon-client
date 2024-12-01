import PlayVideoButton from "@/components/shared/play-video-button/PlayVideoButton";
import Image from "next/image";

export default function VideoPreview() {
  return (
    <div className=" w-full bg-[#3D482E]">
      <VideoContainer />
      <div className="container mx-auto px-4 pb-16 w-full -mt-[700px]">
        <div className="relative aspect-video rounded-lg overflow-hidden">
          <Image
            src="/assets/images/interior-video.jpeg"
            alt="Interior Design Showcase"
            width={1280}
            height={720}
            className="object-fill w-full object-center"
          />
          <button
            className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors group"
            aria-label="Play video"
          >
            <div className=" flex items-center justify-center backdrop-blur-sm group-hover:scale-105 transition-transform">
              <PlayVideoButton iconSize={32} />
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
