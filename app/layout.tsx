import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "./compo/nav";
import Scro from "./compo/Scro";

export const metadata: Metadata = {
  title: "Yug Prajapati",
  description: "Personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <Scro/>
        <Nav/>
        {children}
      </body>
    </html>
  );
}
