import Image from "next/image";

export default function ProjetBooki() {
  return (
    <main className="pt-30">
      <div className="flex flex-col items-center m-6">
        <h1 className="text-4xl font-bold text-center uppercase mb-10">
          Site vitrine Booki
        </h1>
        <Image
          src="/booki.jpg"
          alt="site vitrine booki"
          width={1000}
          height={1000}
          className="rounded-lg max-w-full h-auto mb-6"
        />
        <p className="text-xl mb-4 max-w-4xl text-center">
          Création de la page {"d'accueil"} {"d'une"} agence de voyage avec une
          interface responsive. Ce projet se concentre sur {"l'intégration"}{" "}
          fidèle {"d'une"} maquette et {"l'optimisation"} pour différents
          écrans.
        </p>
        <section className="max-w-4xl w-full">
          <h2 className="text-2xl font-bold mb-4">Description du projet</h2>
          <p className="mb-6">
            Le projet Booki consiste à développer la page {"d'accueil"}{" "}
            {"d'une"} agence de voyage fictive. {"L'objectif"} principal était
            de créer une interface utilisateur attrayante et fonctionnelle, en
            respectant fidèlement la maquette fournie. Le site devait être
            entièrement responsive, offrant une expérience utilisateur optimale
            sur tous les types
            {"d'appareils"}, des smartphones aux ordinateurs de bureau.
          </p>
          <h2 className="text-2xl font-bold mb-4">Technologies utilisées</h2>
          <ul className="list-disc list-inside mb-6">
            <li>HTML5</li>
            <li>CSS3 avec Flexbox et Grid</li>
            <li>Responsive Design</li>
            <li>Figma</li>
            <li>Outils : VSCode, Git, GitHub</li>
          </ul>
          <h2 className="text-2xl font-bold mb-4">Défis relevés</h2>
          <ul className="list-disc list-inside mb-6">
            <li>
              Intégrer une interface fidèle aux maquettes pour offrir une
              expérience utilisateur fluide et esthétique.
            </li>
            <li>
              Mettre en œuvre des fonctionnalités comme un formulaire de
              recherche, des cartes {"d'hébergement"} et {"d'activités"}, et un
              menu de navigation interactif.
            </li>
            <li>
              Assurer une compatibilité multi-écran grâce à {"l’utilisation"} de
              media queries.
            </li>
            <li>
              Respecter les standards du web en suivant les bonnes pratiques en
              matière de développement, de sémantique HTML et de responsive
              design.
            </li>
          </ul>
          <h2 className="text-2xl font-bold mb-4">Lien vers le projet</h2>
          <a
            href="https://mickael13800.github.io/p2-booki/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Voir le site Booki
          </a>
        </section>
      </div>
    </main>
  );
}
