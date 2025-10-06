"use client";

import { Button } from "@/src/components/ui/button";
import Link from "next/link";

export default function InfoVitrine() {
  return (
    <main className="pt-30 flex flex-col items-center m-6">
      <h1 className="text-4xl font-bold text-center uppercase mb-10">
        🌐 Pack Site Vitrine — À partir de 490 €
      </h1>

      <div className="mt-16 max-w-4xl w-full space-y-12 text-gray-700 dark:text-gray-300">
        {/* Présentation générale */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">💼 Pourquoi ce pack ?</h2>
          <p>
            Le Pack Site Vitrine est idéal pour les entrepreneurs, artisans ou
            petites entreprises qui souhaitent une présence en ligne
            professionnelle rapidement et sans complications. Votre site sera
            moderne, responsive et prêt à attirer vos premiers clients.
          </p>
        </section>

        {/* Contenu du pack */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">📄 Contenu du pack</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>
              <strong>3 à 5 pages personnalisées :</strong> Accueil présentant
              votre activité, Services détaillant vos offres, Contact avec
              formulaire et et éventuellement À propos ou Galerie.
            </li>
            <li>
              <strong>Design moderne et responsive :</strong> Adapté aux
              mobiles, tablettes et ordinateurs.
            </li>
            <li>
              <strong>Formulaire de contact fonctionnel :</strong> Permet à vos
              clients de vous contacter directement depuis le site.
            </li>
            <li>
              <strong>Intégration des réseaux sociaux :</strong> Liens vers vos
              pages Facebook, Instagram, LinkedIn, etc.
            </li>
            <li>
              <strong>Optimisation des performances :</strong> Chargement
              rapide, images compressées et code léger.
            </li>
            <li>
              <strong>SEO de base :</strong> Titres, balises meta, sitemap et
              robots.txt pour que votre site soit visible dès le départ.
            </li>
            <li>
              <strong>Livraison rapide :</strong> Votre site prêt en 7 jours.
            </li>
          </ul>
        </section>

        {/* Bonus gratuit */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">🎁 Bonus gratuit</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>
              Création d’une adresse mail professionnelle :{" "}
              <strong>contact@votresite.fr</strong>
            </li>
            <li>Ou création d’un Google Business Profile</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">❗ Tarification</h2>
          <p>
            Le pack débute à 490 € pour 3 pages. Chaque page supplémentaire
            {"jusqu'à"} 5 pages peut être ajoutée avec un ajustement de prix.
            Pour plus de 5 pages, il faudra passer au pack sur-mesure.
          </p>
        </section>

        {/* Bénéfices */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">🎯 Bénéfices pour vous</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>Site clé en main, facile à gérer et professionnel</li>
            <li>Améliore votre visibilité et crédibilité en ligne</li>
            <li>Optimisé pour le référencement et les performances</li>
            <li>Prêt à accueillir vos premiers clients</li>
          </ul>
        </section>

        {/* FAQ rapide */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">❓ FAQ</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>
              <strong>Combien de temps pour la mise en ligne ?</strong> → 7
              jours après validation.
            </li>
            <li>
              <strong>Puis-je modifier le design plus tard ?</strong> → Oui,
              options de maintenance et refonte disponibles.
            </li>
            <li>
              <strong>Que se passe-t-il si je veux plus de pages ?</strong> →
              Vous pouvez ajouter des pages via l’option sur-mesure.
            </li>
          </ul>
        </section>

        {/* CTA */}
        <section className="mt-10 text-center">
          <p className="mb-6">
            📩 Intéressé par ce pack ou souhaitez un devis personnalisé ?
            Contactez-moi dès aujourd&rsquo;hui.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Discuter de mon projet</Link>
          </Button>
        </section>
      </div>
    </main>
  );
}
