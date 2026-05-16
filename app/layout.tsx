import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWA from "@/components/FloatingWA";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Salih Flower — Premium Paper Flower & Custom Board Klaten",
    template: "%s | Salih Flower",
  },
  description:
    "Custom congratulation board dan paper flower decor premium handmade dari Klaten. Cocok untuk corporate event, wisuda, ulang tahun, dan pernikahan.",
  keywords: [
    "congratulation board",
    "paper flower",
    "custom board",
    "dekorasi bunga kertas",
    "Klaten",
    "Solo",
    "Jogja",
    "corporate event",
  ],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://salihflower.com",
    siteName: "Salih Flower",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWA />
      </body>
    </html>
  );
}
