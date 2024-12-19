import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { CookieBanner } from "@/components/cookie-banner";
import Footer from "@/components/footer/footer";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jonathan Bensadoun - Développeur Fullstack",
  description:
    "Portfolio de Jonathan Bensadoun - Développeur Fullstack spécialisé en React, React Native, Next.js et Node.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth dark">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
        <Toaster />
      </body>
    </html>
  );
}
