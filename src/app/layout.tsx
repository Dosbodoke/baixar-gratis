import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Baixar Gratis - Baixe vídeos ilimitados",
  description: `Com baixar grátis você pode baixar vídeos e aúdios de forma ilimitada e sem propaganda.`,
  creator: "Juan Andrade",
  keywords:
    "baixar vídeo, baixar aúdio, baixar mp3, baixar tiktok, baixar youtube, baixar grátis",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`w-screen h-screen ${inter.className}`}>{children}</body>
    </html>
  );
}
