import Image from "next/image";

export default function ProjetKasa() {
  return (
    <main className="pt-30">
      <div className="flex flex-col items-center m-6">
        <h1 className="text-4xl font-bold text-center uppercase mb-10">
          Site vitrine Kasa
        </h1>
        <Image
          src="/kasa.jpg"
          alt="site vitrine kasa"
          width={1000}
          height={1000}
          className="rounded-lg max-w-full h-auto mb-6"
        />
        <p className="text-xl mb-4 max-w-4xl text-center">
          Développement d'une application web de location immobilière avec des
          composants dynamiques et une navigation fluide entre les pages.
          Animation des éléments pour enrichir l'expérience utilisateur.
        </p>
        <section className="max-w-4xl w-full">
          <h2 className="text-2xl font-bold mb-4">Description du projet</h2>
          <p className="mb-6">
            Le projet consiste en une refonte complète du site web de Kasa, une
            plateforme de location d’appartements entre particuliers, pour le
            moderniser avec une stack JavaScript. La mission implique développer
            un front-end entièrement en React, avec une architecture basée sur
            des composants réutilisables, tout en respectant des maquettes
            responsives fournies via Figma. L'accent est mis sur la qualité du
            code, le respect des bonnes pratiques, et la compatibilité
            multi-écrans.
          </p>
          <h2 className="text-2xl font-bold mb-4">Technologies utilisées</h2>
          <ul className="list-disc list-inside mb-6">
            <li>HTML5</li>
            <li>CSS3 avec Flexbox et Grid</li>
            <li>React</li>
            <li>React Router</li>
            <li>SASS</li>
            <li>Animation avec Framer Motion</li>
            <li>Outils : VSCode, Git, GitHub</li>
            <li>Design : Figma</li>
          </ul>
          <h2 className="text-2xl font-bold mb-4">Défis relevés</h2>
          <ul className="list-disc list-inside mb-6">
            <li>
              Initialisation du projet avec create-react-app : Création d’une
              application React performante et robuste.
            </li>
            <li>
              Création de composants dynamiques :
              <li className="list-none ml-4">
                - Galerie d’images avec gestion des boutons de navigation et des
                états spécifiques.
              </li>
              <li className="list-none ml-4">
                - Menu déroulant (Collapse) avec animations CSS.{" "}
              </li>
              <li className="list-none ml-4">
                - Composants génériques comme les cartes d’annonces et la
                bannière.
              </li>
            </li>
            <li>
              Mise en place du routage avec React Router :
              <li className="list-none ml-4">
                - Gestion des routes dynamiques pour afficher les propriétés.
              </li>
              <li className="list-none ml-4">
                - Page d'erreur 404 pour les routes inexistantes.
              </li>
            </li>
            <li>
              Respect du responsive design : Suivi des maquettes Figma pour une
              compatibilité sur mobile, tablette et desktop.
            </li>
            <li>
              Gestion des états : Implémentation d’une navigation fluide et
              dynamique dans les composants comme la galerie et les collapses.
            </li>
            <li>
              Validation et débogage : Test et gestion des erreurs pour garantir
              une expérience utilisateur fluide.
            </li>
          </ul>
          <h2 className="text-2xl font-bold mb-4">Lien vers le projet</h2>
          <a
            href="https://p5-kasa-sigma.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Voir le site Kasa
          </a>
        </section>
      </div>
    </main>
  );
}
