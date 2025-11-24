"use client";

import { Button } from "@/src/components/ui/button";
import { Card } from "@/src/components/ui/card";
import Link from "next/link";

export default function PrestationsWordPress() {
  return (
    <main className="pt-30">
      <div className="flex flex-col items-center m-6">
        {/* TITLE */}
        <div className="mb-8 text-center space-y-4">
          <h1 className="text-4xl font-bold uppercase">
            Prestations WordPress
          </h1>
          <p className="text-xl max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
            Création et refonte de sites WordPress modernes, rapides et
            optimisés.
          </p>
        </div>

        {/* --- Container des cartes --- */}
        <div className="grid gap-6 md:grid-cols-3 max-w-6xl w-full">
          {/* --- Pack One Page --- */}
          <Card className="flex flex-col border-2 rounded-2xl p-6 bg-white dark:bg-zinc-900 shadow-md hover:shadow-xl transition">
            <h2 className="text-2xl font-bold mb-4 text-center">
              🌟 One Page WordPress
            </h2>
            <p className="text-center text-3xl font-extrabold mb-4">150 €</p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>✅ 1 page unique et moderne</li>
              <li>✅ Design responsive et adapté aux mobiles</li>
              <li>✅ Formulaire de contact fonctionnel</li>
              <li>✅ Installation des plugins essentiels</li>
              <li>✅ SEO de base</li>
              <li>✅ Livraison rapide (3-5 jours)</li>
            </ul>
            <Button asChild className="mt-auto w-full">
              <Link href="/prestations/wordpress/info-one-page">
                + {"d'infos"}
              </Link>
            </Button>
          </Card>

          {/* --- Pack Site Vitrine --- */}
          <Card className="flex flex-col border-2 rounded-2xl p-6 bg-white dark:bg-zinc-900 shadow-md hover:shadow-xl transition">
            <h2 className="text-2xl font-bold mb-4 text-center">
              🌐 Site Vitrine
            </h2>
            <p className="text-center text-3xl font-extrabold mb-4">
              À partir de 250 €
            </p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>✅ 3 à 6 pages personnalisées</li>
              <li>✅ Design moderne et responsive</li>
              <li>✅ Formulaire de contact</li>
              <li>✅ Intégration réseaux sociaux</li>
              <li>✅ SEO de base</li>
              <li>✅ Livraison en 7 jours</li>
            </ul>
            <Button asChild className="mt-auto w-full">
              <Link href="/prestations/wordpress/info-vitrine">
                + {"d'infos"}
              </Link>
            </Button>
          </Card>

          {/* --- Pack Pro --- */}
          <Card className="flex flex-col border-2 rounded-2xl p-6 bg-white dark:bg-zinc-900 shadow-md hover:shadow-xl transition">
            <h2 className="text-2xl font-bold mb-4 text-center">
              💡 WordPress Pro
            </h2>
            <p className="text-center text-3xl font-extrabold mb-4">
              À partir de 450 €
            </p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>✅ Design 100% personnalisé</li>
              <li>✅ Optimisation SEO avancée</li>
              <li>✅ Intégration {"d'extensions"} premium</li>
              <li>✅ Support & maintenance sur demande</li>
              <li>✅ Site évolutif et prêt pour la croissance</li>
            </ul>
            <Button asChild className="mt-auto w-full">
              <Link href="/prestations/wordpress/info-pro">+ {"d'infos"}</Link>
            </Button>
          </Card>
        </div>
        {/* OPTIONS WORDPRESS */}
        <section className="mt-20 max-w-6xl w-full">
          <h2 className="text-3xl font-bold text-center mb-10 uppercase">
            ⚙️ Options WordPress
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="p-6 bg-white dark:bg-zinc-900 shadow-md rounded-xl">
              <h3 className="font-bold text-lg mb-1">Hébergement & Domaine</h3>
              <p className="text-2xl font-bold mb-1">80 €/an</p>
              <p>Installation complète + configuration optimale.</p>
              <Button asChild className="mt-4 w-full">
                <Link href="/prestations/wordpress/info-hebergement">
                  + {"d'infos"}
                </Link>
              </Button>
            </Card>

            <Card className="p-6 bg-white dark:bg-zinc-900 shadow-md rounded-xl">
              <h3 className="font-bold text-lg mb-1">Maintenance WordPress</h3>
              <p className="text-2xl font-bold mb-1">20 €/mois</p>
              <p>Mises à jour, sauvegardes, corrections.</p>
              <Button asChild className="mt-10 w-full">
                <Link href="/prestations/wordpress/info-maintenance">
                  + {"d'infos"}
                </Link>
              </Button>
            </Card>

            <Card className="p-6 bg-white dark:bg-zinc-900 shadow-md rounded-xl">
              <h3 className="font-bold text-lg mb-1">Performance & Sécurité</h3>
              <p className="text-2xl font-bold mb-1">+150 €</p>
              <p>Optimisation vitesse, cache, hardening complet.</p>
              <Button asChild className="mt-4 w-full">
                <Link href="/prestations/wordpress/info-performance">
                  + {"d'infos"}
                </Link>
              </Button>
            </Card>

            <Card className="p-6 bg-white dark:bg-zinc-900 shadow-md rounded-xl">
              <h3 className="font-bold text-lg mb-1">SEO Renforcé</h3>
              <p className="text-2xl font-bold mb-1">+200 €</p>
              <p>Audit SEO complet + mots-clés + optimisation contenu.</p>
              <Button asChild className="mt-4 w-full">
                <Link href="/prestations/wordpress/info-seo">
                  + {"d'infos"}
                </Link>
              </Button>
            </Card>

            <Card className="p-6 bg-white dark:bg-zinc-900 shadow-md rounded-xl">
              <h3 className="font-bold text-lg mb-1">Refonte de site</h3>
              <p className="text-2xl font-bold mb-1">À partir de 300 €</p>
              <p>
                Modernisation ou refonte complète selon état du site existant.
              </p>
              <Button asChild className="mt-4 w-full">
                <Link href="/prestations/wordpress/info-refonte">
                  + {"d'infos"}
                </Link>
              </Button>
            </Card>
          </div>
        </section>

        {/* --- Info Paiement PayPal --- */}
        <p className="text-gray-700 dark:text-gray-300 mt-6 text-center max-w-2xl mx-auto">
          💳 Paiement sécurisé possible via PayPal, en une fois ou en plusieurs
          fois sans frais.
        </p>

        {/* --- CTA final --- */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">
            📩 Intéressé par un de mes packs ?
          </h2>
          <p className="mb-6">
            Contactez-moi dès {"aujourd’hui"} pour obtenir un devis gratuit et
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
