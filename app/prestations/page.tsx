import { Card } from "@/src/components/ui/card";

export default function Prestations() {
  return (
    <main className="pt-30 px-4 max-w-6xl mx-auto flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-10 text-center uppercase">
        Mes Prestations
      </h1>
      <p className="text-center mb-12 text-gray-700 dark:text-gray-300">
        Choisissez l’offre adaptée à vos besoins. Comparez rapidement nos packs
        ci-dessous ou découvrez les détails de chaque formule.
      </p>

      {/* Cartes comparatives */}
      <div className="grid gap-8 md:grid-cols-3 w-full mb-16">
        {/* Starter */}
        <Card className="flex flex-col p-6 bg-white text-gray-800 border rounded-2xl shadow dark:bg-zinc-800 dark:text-gray-200 dark:border-zinc-700">
          <h2 className="text-xl font-bold mb-2 text-center">⭐ Starter</h2>
          <p className="text-2xl font-semibold mb-4 text-center">690€</p>
          <ul className="flex-1 space-y-2 mb-4">
            <li>✅ Jusqu&apos;à 3 pages personnalisées</li>
            <li>✅ Design responsive</li>
            <li>✅ SEO de base</li>
            <li>✅ Formulaire de contact</li>
            <li>✅ Livraison rapide (7 jours)</li>
          </ul>
          <a
            href="/contact"
            className="mt-auto text-center bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            Demander un devis
          </a>
        </Card>

        {/* Pro */}
        <Card className="flex flex-col p-6 border-2 border-blue-600 shadow-lg bg-blue-50 dark:bg-zinc-800 dark:text-gray-200 rounded-2xl">
          <h2 className="text-xl font-bold mb-2 text-center">🚀 Pro</h2>
          <p className="text-2xl font-semibold mb-4 text-center">1200€</p>
          <ul className="flex-1 space-y-2 mb-4">
            <li>✅ 5 à 7 pages personnalisées</li>
            <li>✅ Design avancé avec animations</li>
            <li>✅ SEO renforcé</li>
            <li>✅ Blog / section actualités</li>
            <li>✅ 1 mois de maintenance incluse</li>
            <li>✅ Formulaire + intégration réseaux sociaux</li>
          </ul>
          <a
            href="/contact"
            className="mt-auto text-center bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            Demander un devis
          </a>
        </Card>

        {/* Premium */}
        <Card className="flex flex-col p-6 bg-white text-gray-800 border rounded-2xl shadow dark:bg-zinc-800 dark:text-gray-200 dark:border-zinc-700">
          <h2 className="text-xl font-bold mb-2 text-center">💡 Premium</h2>
          <p className="text-2xl font-semibold mb-4 text-center">Sur devis</p>
          <ul className="flex-1 space-y-2 mb-4">
            <li>
              ✅ Fonctionnalités avancées (e-commerce, réservation, espace
              client)
            </li>
            <li>✅ Design 100% sur-mesure</li>
            <li>✅ Suivi SEO stratégique</li>
            <li>✅ Hébergement + nom de domaine inclus</li>
            <li>✅ Maintenance longue durée</li>
            <li>✅ Développement d’intégrations spécifiques</li>
          </ul>
          <a
            href="/contact"
            className="mt-auto text-center bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            Demander un devis
          </a>
        </Card>
      </div>

      {/* Packs détaillés */}
      <div className="w-full flex flex-col gap-16">
        {/* Starter détaillé */}
        <div>
          <h2 className="text-2xl font-bold mb-4">⭐ Starter – 690€</h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Pour les indépendants, artisans ou petites entreprises qui veulent
            une présence en ligne simple et efficace.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li>Création de 3 pages maximum (Accueil, Services, Contact)</li>
            <li>Design responsive (ordinateur, tablette, mobile)</li>
            <li>SEO de base (titres, meta, structure HTML)</li>
            <li>Formulaire de contact fonctionnel</li>
            <li>Livraison rapide en 7 jours</li>
          </ul>
        </div>

        {/* Pro détaillé */}
        <div>
          <h2 className="text-2xl font-bold mb-4">🚀 Pro – 1200€</h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            La formule la plus choisie : un site moderne, optimisé et pensé pour
            convertir vos visiteurs en clients.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li>Création de 5 à 7 pages personnalisées</li>
            <li>Design avancé avec animations et transitions</li>
            <li>
              SEO renforcé : optimisation des balises, vitesse, images et
              mots-clés
            </li>
            <li>Blog ou section actualités intégrée</li>
            <li>1 mois de maintenance inclus</li>
            <li>Intégration formulaire + réseaux sociaux</li>
          </ul>
        </div>

        {/* Premium détaillé */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4">💡 Premium – Sur devis</h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Pour les projets sur-mesure et les entreprises qui veulent un site
            évolutif avec des fonctionnalités spécifiques.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              Fonctionnalités avancées (réservation, espace client, e-commerce…)
            </li>
            <li>Design 100% sur-mesure validé par le client</li>
            <li>Suivi SEO stratégique et recommandations régulières</li>
            <li>Hébergement et nom de domaine inclus</li>
            <li>Maintenance longue durée</li>
            <li>Développement d’intégrations spécifiques selon besoins</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
