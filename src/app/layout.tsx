import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
const plausibleHost =
  process.env.NEXT_PUBLIC_PLAUSIBLE_HOST ?? "https://plausible.io";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nexus - AI-Powered Business Automation",
  description:
    "Deploy AI agent teams that automate your business operations. The agentic digital business-in-a-box for SMEs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        {plausibleDomain && (
          <Script
            defer
            data-domain={plausibleDomain}
            src={`${plausibleHost}/js/script.tagged-events.js`}
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
