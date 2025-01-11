import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const NavLinks = [
  {
    root: '/about',
    display: 'about'
  },
  {
    root: '/volunteer',
    display: 'volunteer'
  },
  {
    root: '/funds',
    display: 'funds'
  },
  {
    root: '/links',
    display: 'links'
  }
]

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gaza Champions",
  description:
    'Initiative to find individuals to champion fundraising efforts from Gaza',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar links={NavLinks} />
        {children}
      </body>
    </html>
  );
}
