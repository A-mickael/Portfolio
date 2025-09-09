"use client";

import { Button } from "@/src/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 z-50 w-full p-4 border-b bg-white border-zinc-300 dark:bg-zinc-900 dark:border-zinc-700">
      <div className="mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="/photo2.jpg" // Assure-toi d'avoir une image dans le dossier public
            width={52}
            height={52}
            alt="photo de Mikaël"
            className="rounded-full  "
          />
          <Link href="/" className="text-xl font-bold">
            AGNIEL Mickaël
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/prestations">Prestations</Link>
          <Link href="/contact">Contact</Link>

          <Button
            aria-label="Changer le thème"
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            className="p-2 rounded hover:bg-black/10 dark:hover:bg-white/10"
            suppressHydrationWarning
            variant={"outline"}
          >
            {resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </Button>
        </div>
      </div>
    </nav>
  );
}
