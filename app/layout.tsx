import { bigilla, fontSans, libreFranklin, roboto } from "@/fonts/fonts";
import { cn } from "@/lib/utils";
import { Providers } from "@/redux/provider";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arcon",
  description: "Official Web App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          libreFranklin.variable,
          bigilla.variable,
          roboto.variable
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
