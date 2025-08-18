import type { Metadata } from "next";
import "./globals.css";
import Nav from "./compo/nav";
import Scro from "./compo/Scro";
import Footer from "./compo/footer";
import AppLoader from "./compo/Apploader";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
    <html lang="en">
      <body>
      <AppLoader>
        <Scro/>
        <Nav/>
        {children}
        <SpeedInsights/>
        <Footer/>
      </AppLoader>
      </body>
    </html>
  );
}
