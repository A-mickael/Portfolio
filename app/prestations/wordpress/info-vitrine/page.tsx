"use client";

import { Button } from "@/src/components/ui/button";
import Link from "next/link";

export default function InfoVitrineWP() {
  return (
    <main className="pt-30 flex flex-col items-center m-6">
      <h1 className="text-4xl font-bold text-center uppercase mb-10">
        🌐 Pack Vitrine — À partir de 250 €
      </h1>

      <div className="mt-16 max-w-4xl w-full space-y-12 text-gray-700 dark:text-gray-300">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">💼 Pourquoi ce pack ?</h2>
          <p>
            Le Pack Vitrine convient aux petites et moyennes structures qui
            veulent un site complet : pages structurées, contenu facile à mettre
            à jour et visibilité professionnelle.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">📄 Contenu du pack</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>
              <strong>Pages :</strong> Accueil, À propos, Services, Contact,
              (optionnel) Blog.
            </li>
            <li>
              <strong>Design :</strong> Personnalisation du thème et ajustements
              graphiques.
            </li>
            <li>
              <strong>Fonctionnalités :</strong> Formulaire, Google Maps,
              intégration réseaux.
            </li>
            <li>
              <strong>SEO :</strong> Optimisation de base et performance.
            </li>
            <li>
              <strong>Livraison :</strong> 7 jours selon contenu fourni.
            </li>
          </ul>
        </section>
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">🎯 Bénéfices pour vous</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>Site professionnel et crédible</li>
            <li>Contrôle total du contenu</li>
            <li>Formation pour prendre en main le site</li>
          </ul>
        </section>

        <section className="mt-10 text-center">
          <p className="mb-6">
            📩 Prêt à démarrer ? Contactez-moi pour un devis.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Demander un devis</Link>
          </Button>
        </section>
      </div>
    </main>
  );
}
