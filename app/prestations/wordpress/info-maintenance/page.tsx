"use client";

import { Button } from "@/src/components/ui/button";
import Link from "next/link";

export default function InfoMaintenance() {
  return (
    <main className="pt-30 flex flex-col items-center m-6">
      <h1 className="text-4xl font-bold text-center uppercase mb-10">
        🛠️ Maintenance WordPress — 20 €/mois
      </h1>

      <div className="mt-16 max-w-4xl w-full space-y-12 text-gray-700 dark:text-gray-300">
        {/* Pourquoi cette option */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">💼 Pourquoi cette option ?</h2>
          <p>
            Cette option assure à votre site WordPress une stabilité durable.
            Les mises à jour régulières, les sauvegardes et les corrections
            permettent {"d’éviter"} les bugs, les failles de sécurité et les
            ralentissements. Idéal pour garder un site propre, sécurisé et
            fiable.
          </p>
        </section>

        {/* Contenu */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">📄 Contenu de {"l’option"}</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>Mises à jour WordPress, thèmes et plugins</li>
            <li>Sauvegardes régulières et vérifiées</li>
            <li>Vérification des formulaires et fonctionnalités</li>
            <li>Corrections et ajustements mineurs</li>
            <li>Surveillance basique de sécurité</li>
          </ul>
        </section>

        {/* Bénéfices */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">🎯 Bénéfices pour vous</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>Site toujours à jour et sécurisé</li>
            <li>Moins de risques de bugs ou piratage</li>
            <li>Aucune perte de temps : je {"m’occupe"} de tout</li>
            <li>Maintien de la performance générale</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">❓ FAQ</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>
              <strong>
                Est-ce que les grosses modifications sont incluses ?
              </strong>
              → Non, uniquement les ajustements mineurs (textes, images, fix).
            </li>
            <li>
              <strong>Y'a-t-il un engagement ?</strong>→ Aucun, résiliation
              possible à tout moment.
            </li>
            <li>
              <strong>Est-ce compatible e-commerce ?</strong>→ Oui, mais
              WooCommerce demande parfois plus de mises à jour.
            </li>
          </ul>
        </section>

        {/* CTA */}
        <section className="mt-10 text-center">
          <p className="mb-6">
            📩 Vous souhaitez sécuriser et maintenir votre site WordPress ?
            Contactez-moi.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Discuter de mon projet</Link>
          </Button>
        </section>
      </div>
    </main>
  );
}
