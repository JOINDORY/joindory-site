import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { TrackingPixels } from "./components/TrackingPixels";
import { CookieConsent } from "./components/CookieConsent";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dory: Property management without the learning curve",
  description:
    "Collect rent, manage leases, track maintenance, and message tenants from one simple dashboard. Free to start. Built for landlords who've never used property software before.",
  metadataBase: new URL("https://joindory.com"),
  openGraph: {
    title: "Dory: Property management without the learning curve",
    description:
      "Collect rent, manage leases, track maintenance, and message tenants from one simple dashboard. Free to start. Built for landlords who've never used property software before.",
    url: "https://joindory.com",
    siteName: "Dory",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "/brand/Dory Site Logo.png",
        alt: "Dory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dory: Property management without the learning curve",
    description:
      "Collect rent, manage leases, track maintenance, and message tenants from one simple dashboard. Free to start. Built for landlords who've never used property software before.",
    images: ["/brand/Dory Site Logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <TrackingPixels />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
