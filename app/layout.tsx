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

const ASSET_VERSION = "2026-03-24-5";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Uzm. Dr. Mümtaz Aktaş - Çocuk Sağlığı ve Hastalıkları Uzmanı - Antalya/Kemer",
  description:
    "Uzm. Dr. Mümtaz Aktaş'ın Antalya Kemer'deki çocuk sağlığı ve hastalıkları uzmanı kliniği. İletişim, randevu ve klinik bilgilerine ulaşabilirsiniz.",
  verification: {
    google: "Q3V1BBrjnqxmvxc4BYSJu3Qdjs86ObzXKuMlCcc3kpo",
  },
  icons: {
    icon: [
      { url: `/favicon.ico?v=${ASSET_VERSION}`, sizes: "any" },
    ],
    shortcut: `/favicon.ico?v=${ASSET_VERSION}`,
    apple: `/favicon.ico?v=${ASSET_VERSION}`,
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
