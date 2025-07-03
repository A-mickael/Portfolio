import { Card } from "@/src/components/ui/card";
import { Navbar } from "./components/navigation-menu";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col  items-center mt-6">
        <div className="mb-8 text-center space-y-4">
          <h1 className="text-4xl font-bold text-center uppercase">
            mickaël agniel <br />
            développeur web
          </h1>
          <p className="text-2xl">
            Transformez vos idées en expériences numériques dynamiques.
          </p>
        </div>
        <div className="mt-4 max-w-2xl text-center space-y-4">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
