"use client";

import { Button } from "@/src/components/ui/button";
import Link from "next/link";

export default function InfoMaintenanceComplete() {
  return (
    <main className="pt-30 flex flex-col items-center m-6">
      <h1 className="text-4xl font-bold text-center uppercase mb-10">
        🔧 Maintenance Complète — 50 €/mois
      </h1>

      <div className="mt-16 max-w-4xl w-full space-y-12 text-gray-700 dark:text-gray-300">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">💼 Pourquoi cette option ?</h2>
          <p>
            La Maintenance Complète inclut toutes les prestations de la
            maintenance basique, plus le suivi SEO et des modifications à la
            demande.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">📄 Contenu de l’option</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>Maintenance Basique complète</li>
            <li>Suivi SEO pour améliorer le positionnement Google</li>
            <li>Petites modifications de contenu sur demande</li>
            <li>Renforcement de la sécurité du site</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">🎯 Bénéfices pour vous</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>Site optimisé et sécurisé en continu</li>
            <li>Amélioration progressive du référencement</li>
            <li>Support pour ajustements rapides</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">❓ FAQ</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>
              <strong>
                Combien de temps pour voir des améliorations SEO ?
              </strong>{" "}
              → Généralement quelques semaines.
            </li>
            <li>
              <strong>Puis-je demander des modifications spécifiques ?</strong>{" "}
              → Oui, dans le cadre du forfait.
            </li>
          </ul>
        </section>

        <section className="mt-10 text-center">
          <p className="mb-6">
            📩 Intéressé par cette option ? Contactez-moi pour un devis
            personnalisé.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Discuter de mon projet</Link>
          </Button>
        </section>
      </div>
    </main>
  );
}
