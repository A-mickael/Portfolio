"use client";

import { Card } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";

export default function Prestations() {
  return (
    <main className="pt-30">
      <div className="flex flex-col items-center m-6">
        <h1 className="text-4xl font-bold text-center uppercase mb-10">
          Mes prestations
        </h1>

        {/* Container des cartes */}
        <div className="grid gap-6 md:grid-cols-3 max-w-6xl w-full">
          {/* --- Pack Site Vitrine --- */}
          <Card className="flex flex-col border-2 rounded-2xl p-6 bg-white dark:bg-zinc-900 shadow-md hover:shadow-xl transition">
            <h2 className="text-2xl font-bold mb-4 text-center">
              🌐 Site Vitrine
            </h2>
            <p className="text-center text-3xl font-extrabold mb-4">690 €</p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>✅ Jusqu’à 3 pages personnalisées</li>
              <li>✅ Design moderne et responsive</li>
              <li>✅ Formulaire de contact</li>
              <li>✅ Intégration réseaux sociaux</li>
              <li>✅ SEO de base</li>
              <li>✅ Livraison en 7 jours</li>
            </ul>
            <Button className="mt-auto w-full">Demander ce pack</Button>
          </Card>

          {/* --- Option SEO --- */}
          <Card className="flex flex-col border-2 rounded-2xl p-6 bg-white dark:bg-zinc-900 shadow-md hover:shadow-xl transition">
            <h2 className="text-2xl font-bold mb-4 text-center">
              🔍 SEO Renforcé
            </h2>
            <p className="text-center text-3xl font-extrabold mb-4">+200 €</p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>✅ Recherche de mots-clés</li>
              <li>✅ Optimisation des contenus</li>
              <li>✅ Audit SEO complet</li>
              <li>✅ Rapport PDF détaillé</li>
            </ul>
            <Button className="mt-auto w-full">Ajouter au pack</Button>
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
              <li>✅ Site e-commerce</li>
              <li>✅ Application web personnalisée</li>
              <li>✅ API & intégrations avancées</li>
              <li>✅ Nombre de pages illimité</li>
            </ul>
            <Button className="mt-auto w-full">Demander un devis</Button>
          </Card>
        </div>

        {/* --- Options supplémentaires --- */}
        <div className="mt-16 max-w-4xl w-full">
          <h2 className="text-2xl font-bold text-center mb-8">
            ⚙️ Options supplémentaires
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="p-6 bg-white dark:bg-zinc-900">
              <h3 className="font-bold text-lg mb-2">Hébergement & Domaine</h3>
              <p className="text-2xl font-bold mb-2">80 €/an</p>
              <p>Nom de domaine + hébergement optimisé</p>
            </Card>
            <Card className="p-6 bg-white dark:bg-zinc-900">
              <h3 className="font-bold text-lg mb-2">Maintenance Basique</h3>
              <p className="text-2xl font-bold mb-2">20 €/mois</p>
              <p>Mises à jour, sauvegardes, corrections mineures</p>
            </Card>
            <Card className="p-6 bg-white dark:bg-zinc-900">
              <h3 className="font-bold text-lg mb-2">Maintenance Complète</h3>
              <p className="text-2xl font-bold mb-2">50 €/mois</p>
              <p>+ Suivi SEO, support, petites modifications</p>
            </Card>
            <Card className="p-6 bg-white dark:bg-zinc-900 md:col-span-3">
              <h3 className="font-bold text-lg mb-2">Refonte de site</h3>
              <p className="text-2xl font-bold mb-2">À partir de 500 €</p>
              <p>Modernisation et optimisation d’un site existant</p>
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
            <a href="mailto:agniel.mickael@gmail.com">Discuter de mon projet</a>
          </Button>
        </div>
      </div>
    </main>
  );
}
