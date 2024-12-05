import { useEffect, useState } from "react";

export function useScroll(threshold = 100) {
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if we've scrolled past threshold
      setScrolled(currentScrollY > threshold);

      // Show button when scrolling down and past threshold
      // Hide button when scrolling up and near top
      setShowButton(currentScrollY > threshold && currentScrollY > lastScrollY);

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold, lastScrollY]);

  return { scrolled, showButton };
}
