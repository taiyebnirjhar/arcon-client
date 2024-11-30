import { Inter as FontSans, Libre_Franklin, Roboto } from "next/font/google";
import localFont from "next/font/local";

export const bigilla = localFont({
  src: [
    {
      path: "./bigilla/Bigilla.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./bigilla/Bigilla-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-bigilla",
});

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  variable: "--font-libre-franklin",
});

export const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});
