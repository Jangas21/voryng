import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import BackgroundLiquidEther from "@/components/BackgroundLiquidEther";
import PageTransition from "@/components/PageTransition";
import { AuthProvider } from "@/contexts/AuthProvider";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

type RootLayoutProps = { children: ReactNode };

export const metadata: Metadata = {
  title: "Voryng",
  description: "Voryng – innovación, automatización y diseño técnico.",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AuthProvider>
          <BackgroundLiquidEther />
          <PageTransition>{children}</PageTransition>
        </AuthProvider>
      </body>
    </html>
  );
}
