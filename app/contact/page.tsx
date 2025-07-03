import { Navbar } from "../components/navigation-menu";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center p-8">
        <h1 className="text-3xl font-bold mb-6">Contactez-moi</h1>
        <p className="mb-4">
          Pour toute demande, {"n'hésitez"} pas à me contacter :
        </p>
        <a
          href="mailto:agniel.mickael@gmail.com"
          className="text-2xl hover:underline text-blue-600"
        >
          ✉️ agniel.mickael@gmail.com
        </a>
        <p className="m-4">Ou appelez moi</p>
        <a
          href="tel:+33782278289"
          className="text-2xl hover:underline text-blue-600"
        >
          📞 +33 7 82 27 82 89
        </a>
      </div>
    </div>
  );
}
