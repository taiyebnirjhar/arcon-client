import { cn } from "@/lib/utils";
import Image from "next/image";
interface PlayVideoButtonProps {
  className?: string;
  iconSize?: number;
}

export default function PlayVideoButton({
  className = "",
  iconSize = 32,
}: PlayVideoButtonProps) {
  return (
    <div className={cn("relative block w-[100px] h-[100px]", className)}>
      <div className="absolute inset-0 bg-[#6F7F5C] hover:bg-[#6F7F5C]/80 rounded-full flex items-center justify-center">
        <Image
          src="/assets/icons/play.svg"
          alt="Play Video"
          width={iconSize}
          height={iconSize}
          className="text-white"
        />
      </div>
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full animate-spin-slow"
        style={{ animationDuration: "12s" }}
      >
        <defs>
          <path
            id="circle"
            d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
          />
        </defs>
        <text className="text-[12px] fill-white uppercase">
          <textPath href="#circle" startOffset="0%">
            • Play Video • Play Video • Play Video •
          </textPath>
        </text>
      </svg>
    </div>
  );
}