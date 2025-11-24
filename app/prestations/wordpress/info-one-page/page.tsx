"use client";

import { Button } from "@/src/components/ui/button";
import Link from "next/link";

export default function InfoOnePageWP() {
  return (
    <main className="pt-30 flex flex-col items-center m-6">
      <h1 className="text-4xl font-bold text-center uppercase mb-10">
        🌟 Pack One Page — 150 €
      </h1>

      <div className="mt-16 max-w-4xl w-full space-y-12 text-gray-700 dark:text-gray-300">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">💼 Pourquoi ce pack ?</h2>
          <p>
            Le Pack One Page WordPress est parfait pour les entrepreneurs ou
            petites structures qui veulent une présence en ligne rapide et
            efficace. Votre site sera moderne, responsive et prêt à attirer vos
            premiers clients.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">📄 Contenu du pack</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>
              <strong>1 page unique :</strong> Accueil avec présentation de
              votre activité, services et contact.
            </li>
            <li>
              <strong>Design :</strong> Thème pro adapté et personnalisations
              légères.
            </li>
            <li>
              <strong>Formulaire :</strong> Contact fonctionnel et sécurisé.
            </li>
            <li>
              <strong>SEO de base :</strong> Titres, meta, sitemap.
            </li>
            <li>
              <strong>Livraison :</strong> Mise en ligne en 3 à 5 jours.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">🎯 Bénéfices pour vous</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>Site clé en main, simple à gérer</li>
            <li>Visibilité rapide sur Google</li>
            <li>Coût maîtrisé</li>
          </ul>
        </section>

        <section className="mt-10 text-center">
          <p className="mb-6">
            📩 Intéressé ? Contactez-moi pour un devis personnalisé.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Discuter de mon projet</Link>
          </Button>
        </section>
      </div>
    </main>
  );
}
