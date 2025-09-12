"use client";

import { Button } from "@/src/components/ui/button";
import { useMounted } from "@/src/hooks/use-mounted";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full p-4 border-b bg-white border-zinc-300 dark:bg-zinc-900 dark:border-zinc-700">
      <div className="mx-auto flex items-center justify-between">
        {/* Logo + Nom */}
        <div className="flex items-center gap-4">
          <Image
            src="/photo2.jpg"
            width={52}
            height={52}
            alt="photo de Mikaël"
            className="rounded-full"
          />
          <Link href="/" className="text-xl font-bold">
            AGNIEL Mickaël
          </Link>
        </div>

        {/* Liens desktop */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/">Accueil</Link>
          <Link href="/projets">Projets</Link>
          <Link href="/prestations">Prestations</Link>
          <Link href="/contact">Contact</Link>

          {mounted && (
            <Button
              aria-label="Changer le thème"
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
              className="p-2 rounded hover:bg-black/10 dark:hover:bg-white/10"
              variant={"outline"}
            >
              {resolvedTheme === "dark" ? (
                <Sun size={18} />
              ) : (
                <Moon size={18} />
              )}
            </Button>
          )}
        </div>

        {/* Bouton burger en mobile */}
        <div className="flex md:hidden items-center gap-2">
          {mounted && (
            <Button
              aria-label="Changer le thème"
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
              className="p-2 rounded hover:bg-black/10 dark:hover:bg-white/10"
              variant={"outline"}
            >
              {resolvedTheme === "dark" ? (
                <Sun size={18} />
              ) : (
                <Moon size={18} />
              )}
            </Button>
          )}
          <Button
            aria-label="Ouvrir le menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2"
            variant={"outline"}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </Button>
        </div>
      </div>

      {/* Menu déroulant mobile avec animation */}
      <div
        className={`md:hidden mt-2 overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-3 border-t pt-4">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            Accueil
          </Link>
          <Link href="/projets" onClick={() => setMenuOpen(false)}>
            Projets
          </Link>
          <Link href="/prestations" onClick={() => setMenuOpen(false)}>
            Prestations
          </Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
