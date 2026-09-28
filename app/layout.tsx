import type { Metadata } from "next";
import "./globals.css";
import Nav from "./compo/nav";
import TopNav from "./compo/TopNav";
import Scro from "./compo/Scro";
import Footer from "./compo/footer";
import AppLoader from "./compo/Apploader";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { inter, satoshi } from "./fonts";

export const metadata: Metadata = {
  title: "Yug Prajapati",
  description: "Personal portfolio website of Front End Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${satoshi.variable}`}>
      <body className="overflow-x-hidden bg-[#f4f8ff] font-inter text-fcolor antialiased">
        <AppLoader>
          <Scro />
          <TopNav />
          <div className="pt-14 sm:pt-16 pb-24 sm:pb-28">
            {children}
            <SpeedInsights />
          </div>
          <Nav />
          <Footer />
        </AppLoader>
      </body>
    </html>
  );
}
