"use client";

import { Button } from "@/src/components/ui/button";
import Link from "next/link";

export default function InfoProWP() {
  return (
    <main className="pt-30 flex flex-col items-center m-6">
      <h1 className="text-4xl font-bold text-center uppercase mb-10">
        💼 Pack WordPress Pro — À partir de 450 €
      </h1>

      <div className="mt-16 max-w-4xl w-full space-y-12 text-gray-700 dark:text-gray-300">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">💼 Pourquoi ce pack ?</h2>
          <p>
            Pour les entreprises ou projets qui exigent un site personnalisé,
            optimisé pour la performance, la SEO et la sécurité. Idéal pour
            e-commerce léger, portfolios avancés ou sites à forte visibilité.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">📄 Contenu du pack</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>
              <strong>Design :</strong> 100% personnalisé selon brief.
            </li>
            <li>
              <strong>Fonctionnalités avancées :</strong> extensions premium,
              formulaires avancés, intégrations API.
            </li>
            <li>
              <strong>Performance :</strong> optimisation vitesse, mise en
              cache, CDN selon besoin.
            </li>
            <li>
              <strong>Sécurité :</strong> hardening, sauvegardes automatiques,
              configurations serveur.
            </li>
            <li>
              <strong>Support :</strong> période de support post-livraison
              incluse.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">🎯 Bénéfices pour vous</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>Solution complète, prête à évoluer</li>
            <li>Performance et sécurité garanties</li>
            <li>Accompagnement technique et stratégique</li>
          </ul>
        </section>

        <section className="mt-10 text-center">
          <p className="mb-6">📩 Intéressé ? Parlons de votre projet.</p>
          <Button size="lg" asChild>
            <Link href="/contact">Obtenir un devis</Link>
          </Button>
        </section>
      </div>
    </main>
  );
}
