"use client";

import { Button } from "@/src/components/ui/button";
import Link from "next/link";

export default function InfoHebergement() {
  return (
    <main className="pt-30 flex flex-col items-center m-6">
      <h1 className="text-4xl font-bold text-center uppercase mb-10">
        🌐 Hébergement & Domaine — 80 €/an
      </h1>

      <div className="mt-16 max-w-4xl w-full space-y-12 text-gray-700 dark:text-gray-300">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">💼 Pourquoi cette option ?</h2>
          <p>
            Réservez votre nom de domaine et bénéficiez d’un hébergement
            performant, sécurisé et optimisé pour votre site. Parfait pour
            démarrer ou sécuriser votre présence en ligne.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">📄 Contenu de l’option</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>Réservation de votre nom de domaine (ex. www.monsite.fr)</li>
            <li>Hébergement rapide et sécurisé</li>
            <li>Paramétrage complet et mise en ligne du site</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">🎯 Bénéfices pour vous</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>Nom de domaine unique pour votre marque</li>
            <li>Site sécurisé et performant</li>
            <li>Mise en ligne simple et rapide</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">❓ FAQ</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>
              <strong>Est-ce que le domaine m’appartient ?</strong> → Oui, vous
              êtes propriétaire du domaine.
            </li>
            <li>
              <strong>Puis-je changer d’hébergeur plus tard ?</strong> → Oui,
              vous pouvez migrer le site si nécessaire.
            </li>
          </ul>
        </section>

        <section className="mt-10 text-center">
          <p className="mb-6">
            📩 Intéressé par cette option ? Contactez-moi pour en discuter.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Discuter de mon projet</Link>
          </Button>
        </section>
      </div>
    </main>
  );
}
