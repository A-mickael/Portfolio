"use client";

import { Button } from "@/src/components/ui/button";
import { Card } from "@/src/components/ui/card";
import Link from "next/link";

export default function Prestations() {
  return (
    <main className="pt-30">
      <div className="flex flex-col items-center m-6">
        <h1 className="text-4xl font-bold text-center uppercase mb-10">
          Mes prestations
        </h1>

        {/* --- Container des cartes --- */}
        <div className="grid gap-6 md:grid-cols-3 max-w-6xl w-full">
          {/* --- Pack One Page --- */}
          <Card className="flex flex-col border-2 rounded-2xl p-6 bg-white dark:bg-zinc-900 shadow-md hover:shadow-xl transition">
            <h2 className="text-2xl font-bold mb-4 text-center">🌟 One Page</h2>
            <p className="text-center text-3xl font-extrabold mb-4">300 €</p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>✅ 1 page unique et moderne</li>
              <li>✅ Design responsive et adapté aux mobiles</li>
              <li>✅ Formulaire de contact fonctionnel</li>
              <li>✅ Intégration des réseaux sociaux</li>
              <li>✅ SEO de base</li>
              <li>✅ Livraison rapide (3-5 jours)</li>
            </ul>
            <Button asChild className="mt-auto w-full">
              <Link href="/infos-prestations/info-one-page">+ {"d'infos"}</Link>
            </Button>
          </Card>

          {/* --- Pack Site Vitrine --- */}
          <Card className="flex flex-col border-2 rounded-2xl p-6 bg-white dark:bg-zinc-900 shadow-md hover:shadow-xl transition">
            <h2 className="text-2xl font-bold mb-4 text-center">
              🌐 Site Vitrine
            </h2>
            <p className="text-center text-3xl font-extrabold mb-4">
              À partir de 490 €
            </p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>✅ 3 à 5 pages personnalisées</li>
              <li>✅ Design moderne et responsive</li>
              <li>✅ Formulaire de contact</li>
              <li>✅ Intégration réseaux sociaux</li>
              <li>✅ SEO de base</li>
              <li>✅ Livraison en 7 jours</li>
            </ul>
            <Button asChild className="mt-auto w-full">
              <Link href="/infos-prestations/info-vitrine">+ {"d'infos"}</Link>
            </Button>
          </Card>

          {/* --- Pack Sur-mesure --- */}
          <Card className="flex flex-col border-2 rounded-2xl p-6 bg-white dark:bg-zinc-900 shadow-md hover:shadow-xl transition">
            <h2 className="text-2xl font-bold mb-4 text-center">
              💡 Sur-mesure
            </h2>
            <p className="text-center text-3xl font-extrabold mb-4">
              Sur devis
            </p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>✅ Site e-commerce ou application web</li>
              <li>✅ Fonctionnalités avancées et API intégrées</li>
              <li>✅ Design 100% personnalisé</li>
              <li>✅ Nombre de pages illimité</li>
            </ul>
            <Button asChild className="mt-auto w-full">
              <Link href="/infos-prestations/info-sur-mesure">
                + {"d'infos"}
              </Link>
            </Button>
          </Card>
        </div>

        {/* --- Bonus gratuit --- */}
        <div className="mt-12 max-w-3xl mx-auto p-6 bg-zinc-100 dark:bg-zinc-800 rounded-2xl border border-zinc-300 dark:border-zinc-700 text-center">
          <h3 className="text-2xl font-bold mb-4">🎁 Bonus gratuit</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            Pour chaque pack <strong>One Page</strong> ou{" "}
            <strong>Vitrine</strong>, je vous offre un bonus pour faciliter
            votre présence en ligne et donner un aspect professionnel dès le
            départ :
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
            <li>
              📧 <strong>Création d’une adresse mail professionnelle</strong> si
              vous prenez {"l'option"} <strong>Hébergement & Domaine</strong> :{" "}
              <span className="italic">contact@votresite.fr</span>
            </li>
            <li>
              🌐 <strong>Création d’un profil Google Business</strong> pour
              votre entreprise (visibilité sur Google et Google Maps)
            </li>
          </ul>
          <p className="mt-4 font-semibold">
            Ces services sont inclus gratuitement selon le pack et les options
            choisies.
          </p>
        </div>

        {/* --- Options supplémentaires --- */}
        <div className="mt-16 max-w-4xl w-full">
          <h2 className="text-2xl font-bold text-center mb-8">
            ⚙️ Options supplémentaires
          </h2>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <Card className="p-6 bg-white dark:bg-zinc-900">
              <h3 className="font-bold text-lg mb-2">Hébergement & Domaine</h3>
              <p className="text-2xl font-bold mb-2">80 €/an</p>
              <p>
                Nom de domaine + hébergement optimisé, configuration complète
              </p>
              <Button asChild className="mt-auto w-full">
                <Link href="/infos-prestations/info-hebergement">
                  + {"d'infos"}
                </Link>
              </Button>
            </Card>
            <Card className="p-6 bg-white dark:bg-zinc-900">
              <h3 className="font-bold text-lg mb-2">Maintenance Basique</h3>
              <p className="text-2xl font-bold mb-2">20 €/mois</p>
              <p>Mises à jour, sauvegardes, corrections mineures</p>
              <Button asChild className="mt-auto w-full">
                <Link href="/infos-prestations/info-maintenance-basique">
                  + {"d'infos"}
                </Link>
              </Button>
            </Card>
            <Card className="p-6 bg-white dark:bg-zinc-900">
              <h3 className="font-bold text-lg mb-2">Maintenance Complète</h3>
              <p className="text-2xl font-bold mb-2">50 €/mois</p>
              <p>+ Suivi SEO, support, petites modifications</p>
              <Button asChild className="mt-auto w-full">
                <Link href="/infos-prestations/info-maintenance-complete">
                  + {"d'infos"}
                </Link>
              </Button>
            </Card>
            <Card className="p-6 bg-white dark:bg-zinc-900 ">
              <h3 className="font-bold text-lg mb-2">Refonte de site</h3>
              <p className="text-2xl font-bold mb-2">À partir de 500 €</p>
              <p>Modernisation et optimisation d’un site existant</p>
              <Button asChild className="mt-auto w-full">
                <Link href="/infos-prestations/info-refonte">
                  + {"d'infos"}
                </Link>
              </Button>
            </Card>
            <Card className="p-6 bg-white dark:bg-zinc-900">
              <h3 className="font-bold text-lg mb-2">🔍 SEO Renforcé</h3>
              <p className="text-2xl font-bold mb-2">+200 €</p>
              <p>
                Audit SEO complet, optimisation mots-clés et contenus, rapport
                détaillé.
              </p>
              <Button asChild className="mt-auto w-full">
                <Link href="/infos-prestations/info-seo">+ {"d'infos"}</Link>
              </Button>
            </Card>
          </div>
        </div>

        {/* --- CTA final --- */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">
            📩 Intéressé par un de mes packs ?
          </h2>
          <p className="mb-6">
            Contactez-moi dès aujourd’hui pour obtenir un devis gratuit et
            personnalisé.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Discuter de mon projet</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
