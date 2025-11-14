import type { Metadata } from "next";
import "@/app/globals.css";

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
      <body className={"antialiased"}>{children}</body>
    </html>
  );
}
