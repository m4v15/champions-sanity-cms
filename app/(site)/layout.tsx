import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";

import { Footer, Navbar } from "@/components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const NavLinks = [
  {
    route: "/about",
    display: "about",
  },
  {
    route: "/volunteer",
    display: "volunteer",
  },
  {
    route: "/funds",
    display: "funds",
  },
  {
    route: "/links",
    display: "links",
  },
];

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gaza Champions",
  description:
    "Initiative to find individuals to champion fundraising efforts from Gaza",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen grid grid-rows-layout bg-gray-50`}
      >
        <Navbar links={NavLinks} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
