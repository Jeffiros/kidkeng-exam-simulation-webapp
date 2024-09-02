import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const inter = Noto_Sans_Thai({ subsets: ["thai"] });

export const metadata: Metadata = {
  title: "Kidkeng Exams Simulation",
  description: "Get ready and simulate your test!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
