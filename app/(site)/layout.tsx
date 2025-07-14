import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"

import "@/app/globals.css";

import { Navbar } from "@/components";

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
      <body className="antialiased font-sans text-dark">
        <Navbar links={NavLinks} />

        {children}
        <Analytics />
      </body>
    </html >
  );
}
