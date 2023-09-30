import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "itsMeDantheman",
  description: "Welcome to my site.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">{children}</body>
    </html>
  );
}
