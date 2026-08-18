import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gading Paradise Kebumen | Oase Kemewahan di Jantung Kebumen",
  description:
    "Nikmati perpaduan sempurna rekreasi modern dan keanggunan budaya di Gading Paradise Kebumen. Waterpark, wahana berkuda, fitness modern, dan akomodasi berkelas.",
  keywords: [
    "Gading Paradise Kebumen",
    "Wisata Kebumen",
    "Waterpark Kebumen",
    "Villa Kebumen",
    "Glamping Kebumen",
    "Resort Kebumen",
    "Pacuan Kuda Kebumen",
    "Wedding Venue Kebumen",
  ],
  openGraph: {
    title: "Gading Paradise Kebumen - Oase Kemewahan di Jantung Kebumen",
    description: "Destinasi wisata & resort bernuansa Mediterania-Jawa terlengkap di Kebumen.",
    url: "https://gadingparadise.id",
    siteName: "Gading Paradise Kebumen",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${playfair.variable} ${plusJakarta.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[#F7F4EE] text-[#1C2B21]">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
