import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import Navber from "./components/Navber";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://sun-cart-plum.vercel.app"),
  title: "SunCart | Summer Essentials Store",
  description:
    "Refresh your collection with top summer picks at unbeatable prices. Shop electronics, beauty, kitchen and more with up to 50% off.",
  openGraph: {
    title: "SunCart | Summer Essentials Store",
    description:
      "Refresh your collection with top summer picks at unbeatable prices.",
    url: "https://sun-cart-plum.vercel.app",
    siteName: "SunCart",
    images: [
      {
        url: "/sun-cart.png",
        width: 1200,
        height: 630,
        alt: "SunCart - Summer Essentials Store",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SunCart | Summer Essentials Store",
    description:
      "Refresh your collection with top summer picks at unbeatable prices.",
    images: ["/sun-cart.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navber />
        {children}
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}