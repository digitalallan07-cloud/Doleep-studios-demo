import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Doleep Studios - Award-Winning Creative Agency in Dubai",
  description: "Dubai's #1 Video Production, Film Production & Digital Marketing Agency. Award-winning creative solutions since 2007.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
