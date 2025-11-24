"use client";

import { Button } from "@/src/components/ui/button";
import Link from "next/link";

export default function InfoSeo() {
  return (
    <main className="pt-30 flex flex-col items-center m-6">
      <h1 className="text-4xl font-bold text-center uppercase mb-10">
        🔍 SEO Renforcé — 200 €
      </h1>

      <div className="mt-16 max-w-4xl w-full space-y-12 text-gray-700 dark:text-gray-300">
        {/* Pourquoi cette option */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">🎯 Pourquoi cette option ?</h2>
          <p>
            Votre site doit être visible. Cette option vous aide à{" "}
            <strong>remonter dans Google</strong>, attirer plus de visiteurs et
            optimiser votre présence en ligne grâce à un audit complet et des
            améliorations ciblées.
          </p>
        </section>

        {/* Contenu de l’option */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">📄 Contenu de {"l’option"}</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>Audit SEO complet (technique + contenu)</li>
            <li>Analyse des mots-clés pertinents selon votre activité</li>
            <li>Optimisation des balises (title, meta-description, Hn…)</li>
            <li>Structure SEO améliorée pour favoriser le référencement</li>
            <li>Suggestions de contenus optimisés</li>
            <li>
              Correction des erreurs courantes (404, liens cassés, indexation)
            </li>
          </ul>
        </section>

        {/* Bénéfices */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">🚀 Bénéfices pour vous</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>Meilleure visibilité sur Google</li>
            <li>Plus de visiteurs qualifiés → plus de clients</li>
            <li>Site mieux structuré, plus clair et plus performant</li>
            <li>
              Stratégie SEO durable, pas juste des “petites optimisations”
            </li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">❓ FAQ</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>
              <strong>En combien de temps voit-on les résultats ?</strong> →
              Généralement entre 1 et 3 mois selon votre activité et votre
              marché.
            </li>
            <li>
              <strong>Est-ce que je serai premier sur Google ?</strong> → Aucun
              prestataire ne peut le garantir, mais cette option améliore
              fortement votre positionnement.
            </li>
            <li>
              <strong>Faut-il publier du contenu régulièrement ?</strong> → Oui,
              {"c’est"} un atout majeur pour maintenir et améliorer votre SEO.
            </li>
          </ul>
        </section>

        {/* CTA */}
        <section className="mt-10 text-center">
          <p className="mb-6">📈 Vous voulez améliorer votre visibilité ?</p>
          <Button size="lg" asChild>
            <Link href="/contact">Discuter de mon projet</Link>
          </Button>
        </section>
      </div>
    </main>
  );
}
