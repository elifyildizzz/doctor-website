import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import { SITE_URL } from "@/data/site";
import { contactEmail, contactPhoneE164 } from "@/data/localizedContent";
import {
  ASSET_VERSION,
  HOME_DESCRIPTION,
  HOME_TITLE,
  OG_IMAGE_URL,
  SITE_NAME,
  buildPageMetadata,
} from "@/data/seo";
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

const PHYSICIAN_STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: SITE_NAME,
  description: HOME_DESCRIPTION,
  url: SITE_URL,
  image: OG_IMAGE_URL,
  telephone: `+${contactPhoneE164}`,
  email: contactEmail,
  medicalSpecialty: "Pediatrics",
  availableLanguage: ["tr", "en", "ru"],
  areaServed: [
    {
      "@type": "City",
      name: "Kemer",
    },
    {
      "@type": "AdministrativeArea",
      name: "Antalya",
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Yeni Mahalle, Akdeniz Caddesi 15C",
    addressLocality: "Kemer",
    addressRegion: "Antalya",
    addressCountry: "TR",
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...buildPageMetadata({
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    path: "/",
  }),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "Q3V1BBrjnqxmvxc4BYSJu3Qdjs86ObzXKuMlCcc3kpo",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(PHYSICIAN_STRUCTURED_DATA),
          }}
        />
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
