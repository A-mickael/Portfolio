"use client";

import { Button } from "@/src/components/ui/button";
import Link from "next/link";

export default function InfoPerformance() {
  return (
    <main className="pt-30 flex flex-col items-center m-6">
      <h1 className="text-4xl font-bold text-center uppercase mb-10">
        ⚡ Performance & Sécurité — 150 €
      </h1>

      <div className="mt-16 max-w-4xl w-full space-y-12 text-gray-700 dark:text-gray-300">
        {/* Pourquoi cette option */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">🎯 Pourquoi cette option ?</h2>
          <p>
            Votre site doit être <strong>rapide, stable et sécurisé</strong>.
            Cette option combine une optimisation technique complète + un
            renforcement de la sécurité pour garantir une performance durable.
          </p>
        </section>

        {/* Contenu de l’option */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">📄 Contenu de {"l’option"}</h2>

          <ul className="list-disc ml-5 space-y-2">
            <li>
              Optimisation complète de la vitesse (cache, compression, etc.)
            </li>
            <li>Configuration {"d’un"} système de cache performant</li>
            <li>Optimisation des images et des ressources</li>
            <li>Nettoyage des extensions inutiles</li>
            <li>
              Renforcement de la sécurité (firewall, anti-spam, hardening
              WordPress)
            </li>
            <li>Mise en place de protections contre les attaques courantes</li>
          </ul>
        </section>

        {/* Bénéfices */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">🚀 Bénéfices pour vous</h2>

          <ul className="list-disc ml-5 space-y-2">
            <li>
              Un site plus rapide → meilleur SEO & meilleure expérience
              utilisateur
            </li>
            <li>Protection renforcée contre pirates, bots et failles WP</li>
            <li>Moins de bugs, moins de risques, plus de fiabilité</li>
            <li>Performances long terme sans perte de vitesse</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">❓ FAQ</h2>

          <ul className="list-disc ml-5 space-y-2">
            <li>
              <strong>Est-ce que ça améliore le SEO ?</strong> → Oui, la vitesse
              est un critère important pour Google.
            </li>
            <li>
              <strong>Est-ce que cela protège totalement mon site ?</strong> →
              Rien {"n’est"} infaillible, mais cette option couvre 95% des
              risques courants.
            </li>
            <li>
              <strong>Est-ce compatible avec {"n’importe"} quel thème ?</strong>{" "}
              → Oui, optimisation universelle.
            </li>
          </ul>
        </section>

        {/* CTA */}
        <section className="mt-10 text-center">
          <p className="mb-6">
            ⚡ Prêt à booster les performances de votre site WordPress ?
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Discuter de mon projet</Link>
          </Button>
        </section>
      </div>
    </main>
  );
}
