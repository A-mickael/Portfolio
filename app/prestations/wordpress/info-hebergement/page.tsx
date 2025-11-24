"use client";

import { Button } from "@/src/components/ui/button";
import Link from "next/link";

export default function InfoMaintenanceBasique() {
  return (
    <main className="pt-30 flex flex-col items-center m-6">
      <h1 className="text-4xl font-bold text-center uppercase mb-10">
        🔧 Maintenance Basique — 20 €/mois
      </h1>

      <div className="mt-16 max-w-4xl w-full space-y-12 text-gray-700 dark:text-gray-300">
        {/* Pourquoi cette option */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">💼 Pourquoi cette option ?</h2>
          <p>
            La Maintenance Basique garantit que votre site reste à jour,
            sécurisé et fonctionnel. Idéal pour les sites vitrines ou les
            projets nécessitant un minimum de suivi technique.
          </p>
        </section>

        {/* Contenu */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">📄 Contenu de l’option</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>Mises à jour WordPress, thèmes et extensions</li>
            <li>Sauvegardes régulières</li>
            <li>Corrections de bugs mineurs</li>
            <li>Surveillance basique de la sécurité</li>
          </ul>
        </section>

        {/* Bénéfices */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">🎯 Bénéfices pour vous</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>Un site toujours fonctionnel</li>
            <li>Protection contre les bugs courants</li>
            <li>Moins de stress technique au quotidien</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">❓ FAQ</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>
              <strong>Le support inclut-il les modifications ?</strong> → Non,
              seulement les corrections mineures. Les modifications seront
              facturées à part.
            </li>
            <li>
              <strong>Les sauvegardes sont automatiques ?</strong> → Oui,
              effectuées régulièrement pour garantir la sécurité.
            </li>
          </ul>
        </section>

        {/* CTA */}
        <section className="mt-10 text-center">
          <p className="mb-6">
            📩 Vous souhaitez sécuriser votre site ? Contactez-moi.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Discuter de mon projet</Link>
          </Button>
        </section>
      </div>
    </main>
  );
}
