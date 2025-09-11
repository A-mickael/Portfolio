"use client";

import { Button } from "@/src/components/ui/button";
import Link from "next/link";

export default function InfoSEO() {
  return (
    <main className="pt-30 flex flex-col items-center m-6">
      <h1 className="text-4xl font-bold text-center uppercase mb-10">
        🔍 Option SEO Renforcé — +200 €
      </h1>

      <div className="mt-16 max-w-4xl w-full space-y-12 text-gray-700 dark:text-gray-300">
        {/* Présentation générale */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">💼 Pourquoi cette option ?</h2>
          <p>
            L’option SEO Renforcé est conçue pour améliorer la visibilité de
            votre site sur Google. Elle complète le Pack Site Vitrine et vous
            aide à attirer davantage de prospects grâce à un référencement
            optimisé.
          </p>
        </section>

        {/* Contenu de l’option */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">📄 Ce que comprend l’option</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>
              <strong>Recherche de mots-clés :</strong> Analyse de votre secteur
              et choix des mots-clés les plus pertinents pour votre audience.
            </li>
            <li>
              <strong>Optimisation des contenus :</strong> Titres, textes et
              balises ALT retravaillés pour le SEO.
            </li>
            <li>
              <strong>Audit technique :</strong> Vérification du temps de
              chargement, des balises, du sitemap et du robots.txt.
            </li>
            <li>
              <strong>Rapport PDF détaillé :</strong> Un document complet avec
              conseils et axes d’amélioration pour votre site.
            </li>
          </ul>
        </section>

        {/* Bénéfices */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">🎯 Bénéfices pour vous</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>Meilleure visibilité sur Google et augmentation du trafic</li>
            <li>
              Optimisation des contenus pour attirer des clients qualifiés
            </li>
            <li>Suivi précis des performances SEO</li>
            <li>Rapport clair pour comprendre les améliorations apportées</li>
          </ul>
        </section>

        {/* FAQ rapide */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">❓ FAQ</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>
              <strong>Dois-je avoir un site existant ?</strong> → Oui, l’option
              SEO s’ajoute au Pack Site Vitrine ou un site déjà en ligne.
            </li>
            <li>
              <strong>Quand puis-je voir les résultats ?</strong> → Les effets
              SEO se voient généralement après quelques semaines, selon la
              concurrence.
            </li>
            <li>
              <strong>Peut-on combiner avec d’autres options ?</strong> → Oui,
              vous pouvez ajouter l’hébergement, maintenance ou refonte à tout
              moment.
            </li>
          </ul>
        </section>

        {/* CTA */}
        <section className="mt-10 text-center">
          <p className="mb-6">
            📩 Intéressé par cette option ? Contactez-moi dès aujourd&rsquo;hui
            pour en discuter et obtenir un devis.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Discuter de mon projet</Link>
          </Button>
        </section>
      </div>
    </main>
  );
}
