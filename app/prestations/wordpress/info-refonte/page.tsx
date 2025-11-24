"use client";

import { Button } from "@/src/components/ui/button";
import Link from "next/link";

export default function InfoRefonte() {
  return (
    <main className="pt-30 flex flex-col items-center m-6">
      <h1 className="text-4xl font-bold text-center uppercase mb-10">
        🔄 Refonte de Site — À partir de 300 €
      </h1>

      <div className="mt-16 max-w-4xl w-full space-y-12 text-gray-700 dark:text-gray-300">
        {/* Pourquoi */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">💼 Pourquoi une refonte ?</h2>
          <p>
            Votre site actuel est dépassé, lent, mal structuré ou difficile à
            gérer ? Une refonte permet {"d’améliorer"} le design, la
            performance, la sécurité et {"l’efficacité"} globale de votre
            présence en ligne.
          </p>
        </section>

        {/* Contenu */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">📄 Contenu de la prestation</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>Audit complet du site existant</li>
            <li>Refonte graphique moderne et responsive</li>
            <li>Optimisation des pages, menus, structure, navigation</li>
            <li>Nettoyage / optimisation des plugins</li>
            <li>
              Amélioration de la performance (mise en cache, optimisation
              images…)
            </li>
            <li>Sécurisation renforcée du site</li>
            <li>SEO technique amélioré</li>
          </ul>
        </section>

        {/* Bénéfices */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">🎯 Bénéfices pour vous</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>Un site moderne, plus professionnel et performant</li>
            <li>Une meilleure expérience utilisateur</li>
            <li>Un meilleur référencement naturel</li>
            <li>Moins de bugs, un site plus stable</li>
          </ul>
        </section>

        {/* Durée */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">⏳ Durée estimée</h2>
          <p>
            La durée dépend de {"l’état"} du site actuel et de {"l’ampleur"} de
            la refonte.
          </p>
          <p className="font-bold">
            ⌛ **Entre 1 et 3 semaines** selon la taille du site et vos besoins.
          </p>
        </section>

        {/* FAQ */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">❓ FAQ</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>
              <strong>
                La refonte inclut-elle un changement complet du design ?
              </strong>{" "}
              → Oui, si nécessaire.
            </li>
            <li>
              <strong>Est-ce que le contenu change aussi ?</strong> → Oui, je
              peux le mettre en forme — la rédaction complète est en option.
            </li>
          </ul>
        </section>

        {/* Call to action */}
        <section className="mt-10 text-center">
          <p className="mb-6">
            📩 Besoin {"d’améliorer"} votre site ? Parlons de votre refonte.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Discuter de mon projet</Link>
          </Button>
        </section>
      </div>
    </main>
  );
}
