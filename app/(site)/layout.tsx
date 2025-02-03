import type { Metadata } from "next";
import "@/app/globals.css";

import { Footer, Navbar } from "@/components";

import { NavLinks } from "@/utils/AppConfig";

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
        className='antialiased min-h-screen grid grid-rows-layout bg-background font-sans text-dark'
      >
        <Navbar links={NavLinks} />
        {children}
        <Footer />
      </body>
    </html >
  );
}
