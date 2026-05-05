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
  title: "Dory - Property management for landlords who want better tenants",
  description:
    "Manage your rentals. Collect rent, track every door, and help your tenants build toward their future.",
  metadataBase: new URL("https://joindory.com"),
  openGraph: {
    title: "Dory - Property management for landlords who want better tenants",
    description:
      "Manage your rentals. Collect rent, track every door, and help your tenants build toward their future.",
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
    title: "Dory - Property management for landlords who want better tenants",
    description:
      "Manage your rentals. Collect rent, track every door, and help your tenants build toward their future.",
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
