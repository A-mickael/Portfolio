import { ThemeProvider } from "@/src/components/theme-provider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio - Mikaël AGNIEL",
  description:
    "Bienvenue sur mon portfolio ! Je suis Mickaël, développeur web spécialisé dans la création de sites vitrines modernes et performants.",
  keywords: ["Next.js", "Portfolio", "Vitrine", "Tailwind", "shadcn/ui"],
  authors: [{ name: "Mika", url: "https://github.com/A-mickael" }],
  creator: "Mika",
  metadataBase: new URL("https://tonsite.com"), // remplace plus tard par ton vrai domaine
  openGraph: {
    title: "Portfolio - Mikaël AGNIEL",
    description:
      "Bienvenue sur mon portfolio ! Je suis Mickaël, développeur web spécialisé dans la création de sites vitrines modernes et performants.",
    url: "https://tonsite.com",
    siteName: "Portfolio",
    images: [
      {
        url: "/og-image.jpg", // ajoute ce fichier plus tard dans /public
        width: 1200,
        height: 630,
        alt: "Aperçu du site",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
