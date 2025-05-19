import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import LanguageSwitcher from "./components/LanguageSwitcher";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "System Group Kazakhstan",
  description: "Надёжный партнёр в автоматизации торговли, логистики и производств",
};

export default function RootLayout({ children, params }) {
  const { locale } = params;
  
  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar locale={locale} />
        <div>{children}</div>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
