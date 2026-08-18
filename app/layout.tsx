import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "VORTO — Complexidade em clareza.",
  description:
    "Software & Technology Studio. Construímos produtos de precisão que transformam processos complexos em sistemas simples de operar.",
  openGraph: {
    title: "VORTO — Complexidade em clareza.",
    description: "Software & Technology Studio",
    url: "https://vorto.studio",
    siteName: "VORTO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-vorto-bg text-vorto-text`}>
        {children}
      </body>
    </html>
  );
}