import "@/app/globals.css";
import HomeContextProvider from "@/context/home.context";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background font-sans antialiased")}>
        <HomeContextProvider>{children}</HomeContextProvider>
      </body>
    </html>
  );
}
