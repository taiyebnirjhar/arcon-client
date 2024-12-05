import PlayVideoButton from "@/components/shared/play-video-button/PlayVideoButton";
import useDeviceSize from "@/hooks/use-device-size/useDeviceSize";
import Image from "next/image";

export default function VideoPreview() {
  const deviceSize = useDeviceSize();
  const getIconSize = () => {
    switch (deviceSize) {
      case "2xl":
        return 32; // Larger icon for 2xl screens
      case "xl":
        return 32; // Medium-large icon for xl screens
      case "lg":
        return 24; // Medium icon for lg screens
      case "md":
        return 20; // Standard icon for md screens
      case "sm":
        return 18; // Smaller icon for sm screens
      default:
        return 16; // Smallest icon for xs screens
    }
  };
  return (
    <div className=" w-full bg-[#3D482E]">
      <VideoContainer />
      <div className="lg:container lg:mx-auto lg:px-4 pb-16 w-full 2xl:-mt-[700px] xl:-mt-[600px] lg:-mt-[550px]">
        <div className="relative aspect-video lg:rounded-lg overflow-hidden">
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
              <PlayVideoButton
                iconSize={getIconSize()}
                className="xl:w-[100px] xl:h-[100px] lg:w-[80px] lg:h-[80px] w-[60px] h-[60px]  text-[12px] "
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

const VideoContainer = () => {
  return (
    <div className=" bg-white 2xl:h-[620px] xl:h-[500px] lg:h-[450px] "></div>
  );
};
