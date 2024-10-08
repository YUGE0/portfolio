import type { Metadata } from "next";
import "./globals.css";
import Nav from "./compo/nav";
import Scro from "./compo/Scro";
import Footer from "./compo/footer";

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
        <Footer/>
      </body>
    </html>
  );
}
