import type { Metadata } from "next";
import "./globals.css";
import Nav from "./compo/nav";
import TopNav from "./compo/TopNav";
import Scro from "./compo/Scro";
import Footer from "./compo/footer";
import AppLoader from "./compo/Apploader";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { inter, satoshi } from "./fonts";
import { DEFAULT_TITLE as defaultTitle, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "./site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultTitle,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: `${SITE_NAME} Portfolio`,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: SITE_NAME,
    title: defaultTitle,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${satoshi.variable}`}>
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
