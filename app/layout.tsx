import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import { SITE_URL } from "@/data/site";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lumiosMarker = Inter({
  variable: "--font-lumios-marker",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ASSET_VERSION = "2026-03-24-7";
const SEO_TITLE = "Antalya Çocuk Doktoru | Uzm. Dr. Mümtaz Aktaş | Kemer";
const SEO_DESCRIPTION =
  "Antalya Kemer çocuk doktoru Uzm. Dr. Mümtaz Aktaş ile bebek, çocuk ve ergen sağlığı takibi, aşı danışmanlığı, muayene ve randevu bilgileri.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SEO_TITLE,
  description: SEO_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Antalya çocuk doktoru",
    "Kemer çocuk doktoru",
    "Antalya çocuk sağlığı ve hastalıkları uzmanı",
    "Uzm. Dr. Mümtaz Aktaş",
    "çocuk doktoru randevu Kemer",
  ],
  openGraph: {
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    url: SITE_URL,
    siteName: "Uzm. Dr. Mümtaz Aktaş",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: `/logo2-tight.png?v=${ASSET_VERSION}`,
        width: 1200,
        height: 630,
        alt: "Uzm. Dr. Mümtaz Aktaş",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    images: [`/logo2-tight.png?v=${ASSET_VERSION}`],
  },
  verification: {
    google: "keRKy9TRLJ-ov9_AIekr5lfswWfIGsMjJhJ1hHeFjqU",
  },
  icons: {
    icon: [
      {
        url: `/favicon-32x32.png?v=${ASSET_VERSION}`,
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: `/android-chrome-192x192.png?v=${ASSET_VERSION}`,
        type: "image/png",
        sizes: "192x192",
      },
      { url: `/favicon.ico?v=${ASSET_VERSION}`, sizes: "48x48" },
    ],
    shortcut: `/favicon.ico?v=${ASSET_VERSION}`,
    apple: [
      {
        url: `/apple-touch-icon.png?v=${ASSET_VERSION}`,
        type: "image/png",
        sizes: "180x180",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lumiosMarker.variable} antialiased`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
