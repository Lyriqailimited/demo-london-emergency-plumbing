import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import VoiceWidget from "@/components/VoiceWidget";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "London Emergency Plumbing | AI Receptionist Demo",
  description: "London's trusted 24/7 emergency plumbers — now with an AI receptionist that handles every call, books appointments, and never misses a lead.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(syne.variable, inter.variable)}>
      <body className={cn("antialiased font-body", inter.className)}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <VoiceWidget />
      </body>
    </html>
  );
}
