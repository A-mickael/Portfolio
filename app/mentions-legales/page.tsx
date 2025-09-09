import { Footer } from "../components/footer";
import { Navbar } from "../components/navigation-menu";

export default function MentionsLegalesPage() {
  return (
    <div>
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Mentions légales</h1>

        <section className="mb-6">
          <p>
            En conformité avec les articles 6-III et 19 de la Loi n°2004-575 du
            21 juin 2004 pour la Confiance dans l&apos;Économie Numérique
            (LCEN), il est précisé aux utilisateurs du site les informations
            suivantes :
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Éditeur du site</h2>
          <p>Nom : Mickael AGNIEL</p>
          <p>Statut : Entrepreneur individuel (micro-entrepreneur)</p>
          <p>SIRET : 944 911 023 00017</p>
          <p>Adresse : 409A ronde des pioutons - 13800 ISTRES</p>
          <p>Email : agniel.mickael@gmail.com</p>
          <p>Responsable de la publication : Mickael AGNIEL</p>
          <p>TVA non applicable, art. 293 B du CGI</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Hébergement</h2>
          <p>Le site est hébergé par :</p>
          <p>Vercel Inc.</p>
          <p>440 N Barranca Ave #4133, Covina, CA 91723, USA</p>
          <p>
            Site web :{" "}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              https://vercel.com
            </a>
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            Propriété intellectuelle
          </h2>
          <p>
            Le contenu de ce site (textes, images, code, logo, etc.) est la
            propriété exclusive de Mickael AGNIEL, sauf mention contraire. Toute
            reproduction, distribution, modification, adaptation, retransmission
            ou publication, même partielle, est strictement interdite sans
            l&apos;accord écrit préalable.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            Limitation de responsabilité
          </h2>
          <p>
            Les informations fournies sur ce site sont données à titre
            indicatif. Mickael AGNIEL ne saurait être tenu responsable des
            erreurs ou omissions, ni de l&apos;utilisation qui pourrait être
            faite de ces informations.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
