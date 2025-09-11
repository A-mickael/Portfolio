"use client";

import { Button } from "@/src/components/ui/button";

export default function InfoRefonte() {
  return (
    <main className="pt-30 flex flex-col items-center m-6">
      <h1 className="text-4xl font-bold text-center uppercase mb-10">
        🎨 Refonte de site — À partir de 500 €
      </h1>

      <div className="mt-16 max-w-4xl w-full space-y-12 text-gray-700 dark:text-gray-300">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">💼 Pourquoi cette option ?</h2>
          <p>
            Modernisez votre site existant avec un nouveau design, une
            optimisation du code et une meilleure expérience utilisateur.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">📄 Contenu de l’option</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>Reprise complète du site existant</li>
            <li>Conservation de vos contenus essentiels</li>
            <li>Nouveau design moderne et responsive</li>
            <li>Code optimisé pour rapidité et SEO</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">🎯 Bénéfices pour vous</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>Site attractif et moderne pour vos visiteurs</li>
            <li>Meilleures performances et référencement</li>
            <li>Crédibilité et confiance renforcées auprès de vos clients</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">❓ FAQ</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>
              <strong>Combien coûte la refonte complète ?</strong> → À partir de
              500 €, selon la taille et la complexité.
            </li>
            <li>
              <strong>
                Puis-je conserver certains éléments du site actuel ?
              </strong>{" "}
              → Oui, le contenu important est conservé.
            </li>
          </ul>
        </section>

        <section className="mt-10 text-center">
          <p className="mb-6">
            📩 Intéressé par cette option ? Contactez-moi pour un devis
            détaillé.
          </p>
          <Button size="lg" asChild>
            <a href="mailto:agniel.mickael@gmail.com">Discuter de mon projet</a>
          </Button>
        </section>
      </div>
    </main>
  );
}
