import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { siteConfig } from "@/config/site";
import { JsonLd } from "@/components/seo/JsonLd";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#090d16" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: `${siteConfig.name} Portfolio`,
  authors: [{ name: siteConfig.author.name, url: siteConfig.url }],
  generator: "Next.js",
  keywords: siteConfig.keywords,
  creator: siteConfig.author.name,
  publisher: siteConfig.author.name,
  category: "Design & Technology",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    firstName: "Shravani",
    lastName: "Sutar",
    gender: "female",
    username: "shravanisutar",
    locale: "en_US",
    url: siteConfig.url,
    siteName: `${siteConfig.name} — Portfolio`,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — Product & UI/UX Designer Portfolio OpenGraph Image`,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.twitterImage],
    creator: "@shravanisutar",
  },
  icons: {
    icon: [
      { url: "/assets/icons/favicon.ico", sizes: "32x32" },
      { url: "/assets/icons/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/assets/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/assets/icons/favicon.ico"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "IN-MH",
    "geo.placename": "Navi Mumbai, Maharashtra, India",
    "geo.position": "19.0330;73.0297",
    ICBM: "19.0330, 73.0297",
    "ai-content-declaration": "Human authored portfolio for Shravani Sutar",
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
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <head>
        <JsonLd />
      </head>
      <body className="min-h-screen bg-[#07090e] text-zinc-100 selection:bg-indigo-500 selection:text-white font-sans flex flex-col">
        {children}
      </body>
    </html>
  );
}
