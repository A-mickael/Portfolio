import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardTitle } from "@/src/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Projets() {
  return (
    <main className="pt-30">
      <div className="flex flex-col items-center m-6">
        <h1 className="text-4xl font-bold text-center uppercase mb-10">
          Mes Projets
        </h1>
        <p className="text-xl mb-10 max-w-4xl text-center">
          Découvrez quelques réalisations qui reflètent mon parcours et ma
          passion pour le développement web. Chaque projet a été une opportunité
          {"d'appliquer"} mes compétences, de relever des défis techniques, et
          de concevoir des solutions modernes et fonctionnelles. Voici une
          sélection de mes travaux :
        </p>
        <section className="grid gap-6 md:grid-cols-2 max-w-6xl w-full">
          <Card className="flex flex-col border-2 rounded-2xl p-6 bg-white dark:bg-zinc-900 shadow-md hover:shadow-xl transition">
            <CardTitle className="text-uppercase font-bold text-center text-2xl underline">
              Site vitrine Booki
            </CardTitle>
            <CardContent>
              Création de la page {"d'accueil"} {"d'une"} agence de voyage avec
              une interface responsive. Ce projet se concentre sur{" "}
              {"l'intégration"}
              fidèle {"d'une"} maquette et {"l'optimisation"} pour différents
              écrans.
            </CardContent>
            <Button asChild className="mt-auto w-full">
              <Link href="/projets/projet-booki"> + {"d'infos"}</Link>
            </Button>
          </Card>
          <Image
            src="/booki.jpg"
            alt="site vitrine booki"
            width={1000}
            height={1000}
            className="rounded-lg max-w-full h-auto"
          />
          <Card className="flex flex-col border-2 rounded-2xl p-6 bg-white dark:bg-zinc-900 shadow-md hover:shadow-xl transition">
            <CardTitle className="text-uppercase font-bold text-center text-2xl underline">
              Optimisation {"d'un"} site de photographe
            </CardTitle>
            <CardContent>
              Débuggage et optimisation des performances pour améliorer le
              référencement naturel (SEO) et {"l'accessibilité"}. Utilisation
              des Chrome DevTools pour identifier les problèmes et proposer des
              solutions adaptées.
            </CardContent>
            <Button asChild className="mt-auto w-full">
              <Link href="/projets/projet-nina"> + {"d'infos"}</Link>
            </Button>
          </Card>
          <Image
            src="/nina.jpg"
            alt="site photographe Nina"
            width={1000}
            height={1000}
            className="rounded-lg max-w-full h-auto"
          />
          <Card className="flex flex-col border-2 rounded-2xl p-6 bg-white dark:bg-zinc-900 shadow-md hover:shadow-xl transition">
            <CardTitle className="text-uppercase font-bold text-center text-2xl underline">
              Application de Location Immobilière Kasa
            </CardTitle>
            <CardContent>
              Développement {"d'une"} application web de location immobilière
              avec des composants dynamiques et une navigation fluide entre les
              pages. Animation des éléments pour enrichir {"l'expérience"}
              utilisateur.
            </CardContent>
            <Button asChild className="mt-auto w-full">
              <Link href="/projets/projet-kasa"> + {"d'infos"}</Link>
            </Button>
          </Card>
          <Image
            src="/kasa.jpg"
            alt="site vitrine Kasa"
            width={1000}
            height={1000}
            className="rounded-lg max-w-full h-auto"
          />
        </section>
      </div>
    </main>
  );
}
