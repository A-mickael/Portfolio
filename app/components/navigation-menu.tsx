"use client";

import { Button } from "@/src/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <nav className="w-full p-4 border-b bg-white dark:bg-zinc-900 dark:border-zinc-700">
      <div className="mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="/photo2.jpg" // Assure-toi d'avoir une image dans le dossier public
            width={50}
            height={50}
            alt="photo de Mikaël"
            className="rounded-full  w-13 h-13"
          />
          <Link href="/" className="text-xl font-bold">
            AGNIEL Mikaël
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/projets">Projets</Link>
          <Link href="/contact">Contact</Link>

          <Button
            aria-label="Changer le thème"
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            className="p-2 rounded hover:bg-black/10 dark:hover:bg-white/10 suppressHydrationWarning"
            variant={"outline"}
          >
            {resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </Button>
        </div>
      </div>
    </nav>
  );
}
