import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./switch.css";
import "./refinements.css";
import "./contract.css";

const geist = localFont({ src: "../fonts/geist-latin.woff2", variable: "--font-geist", display: "swap", weight: "100 900" });
const geistMono = localFont({ src: "../fonts/geist-mono-latin.woff2", variable: "--font-geist-mono", display: "swap", weight: "100 900" });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: "BlackX | One Switch OFF. Another Switch ON.",
  description: "BlackX is the blackout moment and the XRP community switch legend. One switch OFF. Another switch ON.",
  applicationName: "BlackX",
  icons: {
    icon: [{ url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" }, { url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  appleWebApp: { title: "BlackX", capable: true, statusBarStyle: "black-translucent" },
  openGraph: { title: "BlackX | One Switch OFF. Another Switch ON.", description: "The blackout moment and the XRP community switch legend.", images: siteUrl ? ["/hero-desktop.webp"] : undefined, type: "website" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#0b0d10" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body suppressHydrationWarning className={`${geist.variable} ${geistMono.variable}`}>{children}</body></html>;
}
