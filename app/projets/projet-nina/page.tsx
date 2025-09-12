import Image from "next/image";

export default function ProjetNina() {
  return (
    <main className="pt-30">
      <div className="flex flex-col items-center m-6">
        <h1 className="text-4xl font-bold text-center uppercase mb-10">
          Optimisation {"d'un"} site de photographe
        </h1>
        <Image
          src="/nina.jpg"
          alt="site photographe Nina"
          width={1000}
          height={1000}
          className="rounded-lg max-w-full h-auto mb-6"
        />
        <p className="text-xl mb-4 max-w-4xl text-center">
          Débuggage et optimisation des performances pour améliorer le
          référencement naturel (SEO) et {"l'accessibilité"}. Utilisation des
          Chrome DevTools pour identifier les problèmes et proposer des
          solutions adaptées.
        </p>
        <section className="max-w-4xl w-full">
          <h2 className="text-2xl font-bold mb-4">Description du projet</h2>
          <p className="mb-6">
            Ce projet vise à optimiser le site web de la photographe Nina
            Carducci pour améliorer ses performances, son référencement naturel
            (SEO), et son accessibilité. {"L'objectif"} est de rendre le site
            plus rapide, mieux référencé, et accessible à tous les utilisateurs,
            y compris ceux utilisant des technologies {"d'assistance"}. En
            parallèle, des bugs identifiés dans la navigation de la galerie et
            les filtres
            {"d'images"} doivent être corrigés.
          </p>
          <h2 className="text-2xl font-bold mb-4">Technologies utilisées</h2>
          <ul className="list-disc list-inside mb-6">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>SEO (Search Engine Optimization)</li>
            <li>Performance web</li>
            <li>Accessibilité web (WCAG)</li>
            <li>Outils : Chrome DevTools, Lighthouse</li>
            <li>Versioning : Git, GitHub</li>
          </ul>
          <h2 className="text-2xl font-bold mb-4">Défis relevés</h2>
          <ul className="list-disc list-inside mb-6">
            <li>
              Amélioration des performances : Réduction du temps de chargement
              en optimisant les images, le code (HTML, CSS, JS), et en
              appliquant les bonnes pratiques techniques.
            </li>
            <li>
              Optimisation SEO : Mise en place de balises meta adaptées, ajout
              de données structurées (Schema.org) pour le référencement local,
              et intégration des métadonnées pour les réseaux sociaux
              (OpenGraph, Twitter Cards).
            </li>
            <li>
              Accessibilité : Correction des erreurs d’accessibilité identifiées
              via WAVE et amélioration du code pour respecter les normes WCAG.
            </li>
            <li>
              Correction des bugs : Résolution des problèmes liés à la
              navigation dans la galerie (modale) et à {"l'indication"} de la
              catégorie sélectionnée dans les filtres.
            </li>
            <li>
              Rapport détaillé : Fourniture {"d’un"} rapport {"d’intervention"}{" "}
              incluant les analyses avant/après, les modifications effectuées,
              et un cahier de recette.
            </li>
          </ul>
          <h2 className="text-2xl font-bold mb-4">Lien vers le projet</h2>
          <a
            href="https://mickael13800.github.io/p4-Nina/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Voir le site Nina
          </a>
        </section>
      </div>
    </main>
  );
}
