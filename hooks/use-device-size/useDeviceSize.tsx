import { useEffect, useState } from "react";

// Define the device size type
type DeviceSize = "2xl" | "xl" | "lg" | "md" | "sm" | "xs";

// Define the breakpoints object
const breakpoints: Record<DeviceSize, number> = {
  "2xl": 1536,
  xl: 1280,
  lg: 1024,
  md: 768,
  sm: 640,
  xs: 639, // Anything smaller than sm
};

// Function to get device size based on window width
const getDeviceSize = (width: number): DeviceSize => {
  if (width >= breakpoints["2xl"]) return "2xl";
  if (width >= breakpoints["xl"]) return "xl";
  if (width >= breakpoints["lg"]) return "lg";
  if (width >= breakpoints["md"]) return "md";
  if (width >= breakpoints["sm"]) return "sm";
  return "xs"; // Below 640px
};

// Custom hook to track the device size
const useDeviceSize = (): DeviceSize => {
  const [deviceSize, setDeviceSize] = useState<DeviceSize>(
    getDeviceSize(window.innerWidth)
  );

  useEffect(() => {
    const handleResize = () => {
      setDeviceSize(getDeviceSize(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);

    // Clean up event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return deviceSize;
};

export default useDeviceSize;
