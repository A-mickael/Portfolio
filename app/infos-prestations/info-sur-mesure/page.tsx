"use client";

import { Button } from "@/src/components/ui/button";
import Link from "next/link";

export default function InfoSurMesure() {
  return (
    <main className="pt-30 flex flex-col items-center m-6">
      <h1 className="text-4xl font-bold text-center uppercase mb-10">
        💡 Pack Sur-Mesure — Sur devis
      </h1>

      <div className="mt-16 max-w-4xl w-full space-y-12 text-gray-700 dark:text-gray-300">
        {/* Présentation générale */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">💼 Pourquoi ce pack ?</h2>
          <p>
            Le Pack Sur-Mesure est destiné aux projets plus complexes ou
            spécifiques, comme un site e-commerce, une application web ou
            l’intégration d’API. Chaque projet est unique et adapté à vos
            besoins précis.
          </p>
        </section>

        {/* Contenu du pack */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">📄 Ce que comprend le pack</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>Sites e-commerce avec panier et paiement en ligne</li>
            <li>
              Applications web personnalisées (gestion, réservation, etc.)
            </li>
            <li>Intégration d’API externes (Google Maps, CRM, etc.)</li>
            <li>Nombre de pages illimité selon vos besoins</li>
          </ul>
        </section>

        {/* Méthodologie */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">🛠️ Comment ça se passe ?</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>Entretien initial pour comprendre vos besoins et objectifs</li>
            <li>Wireframe et maquette validés avant développement</li>
            <li>Développement, tests et optimisation avant livraison</li>
            <li>Option de maintenance et suivi après mise en ligne</li>
          </ul>
        </section>

        {/* Bénéfices */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">🎯 Bénéfices pour vous</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>Projet entièrement personnalisé selon vos besoins</li>
            <li>Possibilité d’évoluer et d’ajouter des fonctionnalités</li>
            <li>Intégration complète et optimisée</li>
            <li>Accompagnement et support après livraison</li>
          </ul>
        </section>

        {/* FAQ rapide */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">❓ FAQ</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>
              <strong>Combien de temps pour un projet sur-mesure ?</strong> →
              Selon la complexité, généralement 2 à 6 semaines.
            </li>
            <li>
              <strong>Puis-je ajouter des fonctionnalités plus tard ?</strong> →
              Oui, le pack sur-mesure est évolutif.
            </li>
            <li>
              <strong>Comment obtenir un devis ?</strong> → Contactez-moi pour
              discuter de vos besoins et recevoir un devis gratuit et détaillé.
            </li>
          </ul>
        </section>

        {/* CTA */}
        <section className="mt-10 text-center">
          <p className="mb-6">
            📩 Intéressé par ce pack sur-mesure ? Contactez-moi dès
            aujourd&rsquo;hui pour un devis personnalisé.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Discuter de mon projet</Link>
          </Button>
        </section>
      </div>
    </main>
  );
}
