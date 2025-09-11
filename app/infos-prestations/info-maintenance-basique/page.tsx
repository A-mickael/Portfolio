"use client";

import { Button } from "@/src/components/ui/button";

export default function InfoMaintenanceBasique() {
  return (
    <main className="pt-30 flex flex-col items-center m-6">
      <h1 className="text-4xl font-bold text-center uppercase mb-10">
        🛠️ Maintenance Basique — 20 €/mois
      </h1>

      <div className="mt-16 max-w-4xl w-full space-y-12 text-gray-700 dark:text-gray-300">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">💼 Pourquoi cette option ?</h2>
          <p>
            La Maintenance Basique assure que votre site reste fonctionnel et à
            jour sans que vous ayez à intervenir.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">📄 Contenu de l’option</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>Mises à jour techniques régulières</li>
            <li>Sauvegardes mensuelles du site</li>
            <li>Correction des bugs mineurs</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">🎯 Bénéfices pour vous</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>Site stable et sécurisé</li>
            <li>Tranquillité d’esprit sans intervention technique</li>
            <li>Maintenance simple mais efficace</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">❓ FAQ</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>
              <strong>Que se passe-t-il si un bug survient ?</strong> → Je
              corrige les problèmes mineurs inclus dans le forfait.
            </li>
            <li>
              <strong>Puis-je changer d’option plus tard ?</strong> → Oui, vous
              pouvez passer à la maintenance complète à tout moment.
            </li>
          </ul>
        </section>

        <section className="mt-10 text-center">
          <p className="mb-6">
            📩 Intéressé par cette option ? Contactez-moi pour un devis.
          </p>
          <Button size="lg" asChild>
            <a href="mailto:agniel.mickael@gmail.com">Discuter de mon projet</a>
          </Button>
        </section>
      </div>
    </main>
  );
}
