import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://techkingishere.github.io/youralgowebsite";

export const metadata: Metadata = {
  title: "YOURALGO — AI-Native Social Media",
  description: "Official YOURALGO website: privacy policy, terms, contact, and data deletion.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "YOURALGO — AI-Native Social Media",
    description: "Official YOURALGO website: privacy policy, terms, contact, and data deletion.",
    url: siteUrl,
    siteName: "YOURALGO",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {process.env.NEXT_PUBLIC_FACEBOOK_DOMAIN_VERIFICATION_TOKEN ? (
          <meta
            name="facebook-domain-verification"
            content={process.env.NEXT_PUBLIC_FACEBOOK_DOMAIN_VERIFICATION_TOKEN}
          />
        ) : null}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="w-full border-b border-black/[.08] dark:border-white/[.145]">
          <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
            <div className="font-semibold text-base">YOURALGO</div>
            <nav className="flex items-center gap-4 text-sm">
              <Link href="/">Home</Link>
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
              <Link href="/data-deletion">Data Deletion</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
        </header>
        <main className="max-w-5xl mx-auto p-6">{children}</main>
        <footer className="w-full border-t border-black/[.08] dark:border-white/[.145] mt-12">
          <div className="max-w-5xl mx-auto p-4 text-xs text-center opacity-80">
            © {new Date().getFullYear()} YOURALGO. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
