import { Card } from "@/src/components/ui/card";

export default function Home() {
  return (
    <main className="pt-30">
      <div className="flex flex-col  items-center m-6 max-w-full">
        <div className="mb-8 text-center space-y-4">
          <h1 className="text-4xl font-bold text-center uppercase">
            mickaël agniel <br />
            développeur web
          </h1>
          <p className="text-2xl">
            Transformez vos idées en expériences numériques dynamiques.
          </p>
        </div>

        <div className="mt-6 w-full max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold uppercase underline text-center mb-6">
            CMS (WordPress, Joomla, Wix...) vs Développeur Web
          </h2>
          <p className="text-center max-w-3xl mx-auto mb-6 text-lg">
            Un site web peut être créé avec un CMS comme WordPress, Joomla ou
            Wix, ou bien être développé sur mesure par un professionnel. Les CMS
            sont gratuits au départ, mais nécessitent souvent des thèmes et
            plugins payants, en plus {"d’une"} configuration technique qui peut
            vite limiter vos possibilités. Avec un développement sur mesure,
            vous bénéficiez {"d’un"} site unique, sécurisé, rapide et
            parfaitement adapté à vos besoins, sans dépendre de solutions toutes
            faites. Voici un comparatif pour vous aider à bien comprendre les
            différences.
          </p>
          <div className="w-full overflow-x-auto ">
            <table className="min-w-[600px] md:min-w-full border border-gray-300 dark:border-gray-700 rounded-none sm:rounded-lg overflow-hidden mx-auto">
              <thead>
                <tr className="bg-zinc-300 dark:bg-zinc-800 text-left">
                  <th className="p-3">Critères</th>
                  <th className="p-3">CMS (WordPress, Joomla, Wix...)</th>
                  <th className="p-3">Développeur Web (sur mesure)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-300 dark:divide-gray-700">
                <tr>
                  <td className="p-3 font-semibold">Coût initial</td>
                  <td className="p-3">
                    Moins cher au départ (thèmes & plugins)
                  </td>
                  <td className="p-3">Investissement plus élevé mais adapté</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Personnalisation</td>
                  <td className="p-3">
                    Limitée aux thèmes & plugins disponibles
                  </td>
                  <td className="p-3">100% sur mesure, adapté à vos besoins</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Sécurité</td>
                  <td className="p-3">Dépend des mises à jour des plugins</td>
                  <td className="p-3">Code maîtrisé, sécurité renforcée</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Performances</td>
                  <td className="p-3">Peut être ralenti par trop de plugins</td>
                  <td className="p-3">Optimisé et rapide</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Évolutivité</td>
                  <td className="p-3">Limité aux options du CMS</td>
                  <td className="p-3">
                    Facile à faire évoluer selon vos projets
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Maintenance</td>
                  <td className="p-3">
                    Mises à jour fréquentes, risque {"d’incompatibilité"}
                  </td>
                  <td className="p-3">Maintenance adaptée et suivie par moi</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Prix moyen</td>
                  <td className="p-3">À partir de 200€</td>
                  <td className="p-3">À partir de 500€</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-center mt-2 text-gray-500 dark:text-gray-400">
            *Les prix indiqués sont des tarifs de départ et peuvent varier selon
            la complexité du projet.
          </p>
        </div>
        <div className="mt-10 max-w-2xl text-center space-y-4">
          <h2 className="text-2xl font-bold uppercase underline">
            à propos de moi
          </h2>
          <p>
            Je suis Mickaël, développeur web passionné par la création de sites
            vitrines modernes et performants. Avec une expertise en Next.js,
            Tailwind CSS et shadcn/ui, je construis des expériences utilisateur
            fluides et esthétiques.
          </p>
          <p>
            Développeur web diplômé du parcours OpenClassrooms, {`j'ai`} suivi
            une formation intensive alliant théorie et pratique pour maîtriser
            les technologies modernes comme HTML, CSS, JavaScript, React, et
            Node.js. Grâce à des projets concrets, {`j'ai`} appris à concevoir
            des sites dynamiques, performants et optimisés.
            <br /> Mon parcours, enrichi par un mentorat professionnel, {`m'a `}
            permis de développer des compétences solides pour répondre aux
            besoins uniques de chaque projet. {`Aujourd'hui`}, je mets cette
            expertise au service de vos idées pour créer des solutions web
            innovantes.
          </p>
          <div className="mt-10 max-w-2xl text-center space-y-4">
            <h2 className="text-2xl font-bold uppercase underline">
              mes compétences
            </h2>
            <div className="flex flex-wrap justify-center gap-2">
              <Card className=" p-3 bg-zinc-300 dark:bg-zinc-800">HTML</Card>
              <Card className=" p-3 bg-zinc-300 dark:bg-zinc-800">CSS</Card>
              <Card className=" p-3 bg-zinc-300 dark:bg-zinc-800">
                JavaScript
              </Card>
              <Card className=" p-3 bg-zinc-300 dark:bg-zinc-800">SASS</Card>
              <Card className=" p-3 bg-zinc-300 dark:bg-zinc-800">
                GIT/GitHub
              </Card>
              <Card className=" p-3 bg-zinc-300 dark:bg-zinc-800">Node.js</Card>
              <Card className=" p-3 bg-zinc-300 dark:bg-zinc-800">
                API REST
              </Card>
              <Card className=" p-3 bg-zinc-300 dark:bg-zinc-800">MongoDB</Card>
              <Card className=" p-3 bg-zinc-300 dark:bg-zinc-800">
                Agile (SCRUM)
              </Card>
              <Card className=" p-3 bg-zinc-300 dark:bg-zinc-800">Figma</Card>
              <Card className=" p-3 bg-zinc-300 dark:bg-zinc-800">JWT</Card>
              <Card className=" p-3 bg-zinc-300 dark:bg-zinc-800">Next.js</Card>
              <Card className=" p-3 bg-zinc-300 dark:bg-zinc-800">Prisma</Card>
              <Card className=" p-3 bg-zinc-300 dark:bg-zinc-800">
                BetterAuth
              </Card>
              <Card className=" p-3 bg-zinc-300 dark:bg-zinc-800">
                TailwindCSS
              </Card>
              <Card className=" p-3 bg-zinc-300 dark:bg-zinc-800">
                Shadcn/ui
              </Card>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
