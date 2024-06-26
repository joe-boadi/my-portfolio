import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "joe-boadi's Portfolio",
  description: "A portfolio website for Kwadjo Boadi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"> 
      <body className={`${inter.className} items-center`}>{children}</body>
    </html>
  );
}
