import type { Metadata } from "next";
import "@/app/globals.css";

import { Footer, Navbar } from "@/components";

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
        className='antialiased min-h-screen grid grid-rows-layout bg-gray-50 font-sans'
      >
        <Navbar links={NavLinks} />
        {children}
        <Footer />
      </body>
    </html >
  );
}
