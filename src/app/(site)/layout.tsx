import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"

import "@/app/globals.css";

import { Navbar } from "@/components";

import { NavLinks } from "@/utils/AppConfig";
import { getNavbarLinks } from "@sanity/sanity.query";

export const metadata: Metadata = {
  title: "Gaza Champions",
  description:
    "Initiative to find individuals to champion fundraising efforts from Gaza",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navbarLink = await getNavbarLinks();
  
  // Merge static links with dynamic navbar link (if it exists)
  const allLinks = navbarLink?.slug && navbarLink?.title
    ? [{ route: `/blog/${navbarLink.slug}`, display: navbarLink.title }, ...NavLinks]
    : NavLinks;

  return (
    <html lang="en">
      <body className="antialiased font-sans text-dark">
        <Navbar links={allLinks} />

        {children}
        <Analytics />
      </body>
    </html >
  );
}
