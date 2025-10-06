"use client";

import { Button } from "@/src/components/ui/button";
import Link from "next/link";

export default function InfoOnePage() {
  return (
    <main className="pt-30 flex flex-col items-center m-6">
      <h1 className="text-4xl font-bold text-center uppercase mb-10">
        🌟 Pack One Page — 300 €
      </h1>

      <div className="mt-16 max-w-4xl w-full space-y-12 text-gray-700 dark:text-gray-300">
        {/* Présentation générale */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">💼 Pourquoi ce pack ?</h2>
          <p>
            Le Pack One Page est parfait pour les entrepreneurs ou petites
            structures qui veulent une présence en ligne rapide et efficace.
            Votre site sera moderne, responsive et prêt à attirer vos premiers
            clients rapidement.
          </p>
        </section>

        {/* Contenu du pack */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">📄 Contenu du pack</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>
              <strong>1 page unique :</strong> Accueil avec présentation de
              votre activité, services et contact.
            </li>
            <li>
              <strong>Design moderne et responsive :</strong> Adapté aux
              mobiles, tablettes et ordinateurs.
            </li>
            <li>
              <strong>Formulaire de contact fonctionnel :</strong> Permet aux
              clients de vous contacter directement.
            </li>
            <li>
              <strong>Intégration des réseaux sociaux :</strong> Liens vers vos
              pages Facebook, Instagram, LinkedIn, etc.
            </li>
            <li>
              <strong>SEO de base :</strong> Titres, meta, sitemap, robots.txt
              pour être visible dès le départ.
            </li>
            <li>
              <strong>Livraison rapide :</strong> Votre site prêt en 3 à 5
              jours.
            </li>
          </ul>
        </section>

        {/* Bonus gratuit */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">🎁 Bonus gratuit</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>
              Création {"d’une"} adresse mail professionnelle :{" "}
              <strong>contact@votresite.fr</strong>
            </li>
            <li>Ou création {"d’un"} Google Business Profile</li>
          </ul>
        </section>

        {/* Bénéfices */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">🎯 Bénéfices pour vous</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>Site simple mais professionnel, clé en main</li>
            <li>Présence en ligne rapide pour vos clients</li>
            <li>Optimisé pour les performances et le référencement</li>
            <li>Prêt à accueillir vos premiers clients</li>
          </ul>
        </section>

        {/* FAQ rapide */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">❓ FAQ</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>
              <strong>Combien de temps pour la mise en ligne ?</strong> → 3 à 5
              jours après validation.
            </li>
            <li>
              <strong>Puis-je ajouter {"d’autres"} pages plus tard ?</strong> →
              Oui, via le pack Vitrine ou Sur-mesure.
            </li>
            <li>
              <strong>Le site est-il vraiment personnalisé ?</strong> → Oui,
              design et contenus adaptés à votre activité.
            </li>
          </ul>
        </section>

        {/* CTA */}
        <section className="mt-10 text-center">
          <p className="mb-6">
            📩 Intéressé par ce pack ou souhaitez un devis personnalisé ?
            Contactez-moi dès {"aujourd’hui"}.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Discuter de mon projet</Link>
          </Button>
        </section>
      </div>
    </main>
  );
}
