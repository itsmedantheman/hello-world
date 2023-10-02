import "./globals.css";
import type { Metadata } from "next";
import { getTheme } from "../lib/getTheme";
import Script from "next/script";

export const metadata: Metadata = {
  title: "itsmeDantheman",
  description: "Welcome to my site.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script id="theme" dangerouslySetInnerHTML={{ __html: getTheme }} />
      <body className="relative">{children}</body>
    </html>
  );
}
