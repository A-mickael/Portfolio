import { ThemeProvider } from "@/src/components/theme-provider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "./components/footer";
import { Navbar } from "./components/navigation-menu";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio - Mickaël AGNIEL",
  description:
    "Bienvenue sur mon portfolio ! Je suis Mickaël, développeur web spécialisé dans la création de sites vitrines modernes et performants.",
  keywords: ["Next.js", "Portfolio", "Vitrine", "Tailwind", "shadcn/ui"],
  authors: [{ name: "Mika", url: "https://github.com/A-mickael" }],
  creator: "Mika",
  metadataBase: new URL("https://a-mickael.vercel.app/"), // remplace plus tard par ton vrai domaine
  openGraph: {
    title: "Portfolio - Mickaël AGNIEL",
    description:
      "Bienvenue sur mon portfolio ! Je suis Mickaël, développeur web spécialisé dans la création de sites vitrines modernes et performants.",
    url: "https://a-mickael.vercel.app/",
    siteName: "Portfolio",
    images: [
      {
        url: "/portfolio.png", // ajoute ce fichier plus tard dans /public
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
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans min-h-screen flex flex-col`}
      >
        <ThemeProvider>
          <Navbar />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
