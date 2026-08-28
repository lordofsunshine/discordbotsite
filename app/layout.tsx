import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  preload: false,
});

const jetBrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Advertisting",
  title: {
    default: "Advertisting | Music and moderation for Discord",
    template: "%s | Advertisting",
  },
  description:
    "Advertisting handles music, moderation, and the small jobs that keep a Discord server moving.",
  keywords: [
    "Advertisting",
    "Discord bot",
    "Discord music bot",
    "Discord moderation bot",
    "Discord commands",
  ],
  authors: [{ name: "lordofsunshine", url: "https://github.com/lordofsunshine" }],
  creator: "lordofsunshine",
  publisher: "lordofsunshine",
  alternates: {
    canonical: "/",
  },
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
  openGraph: {
    title: "Advertisting | Music and moderation for Discord",
    description:
      "Music, moderation, and the small jobs that keep your Discord server moving.",
    url: "/",
    siteName: "Advertisting",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Advertisting | Music and moderation for Discord",
    description:
      "Music, moderation, and the small jobs that keep your Discord server moving.",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f8f3df",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${jetBrains.variable}`}>
      <body>{children}</body>
    </html>
  );
}
