"use client";

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function Contact() {
  // ✅ on précise bien le type du formulaire
  const form = useRef<HTMLFormElement | null>(null);
  // ✅ on précise que success est une string
  const [success, setSuccess] = useState<string>("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_lhrhm59", // Service ID
        "template_4tpq23j", // Template ID
        form.current,
        "G8kTKJKPqbBNgGI5w" // Public Key (User ID)
      )
      .then(
        () => {
          setSuccess("✅ Message envoyé avec succès !");
          form.current?.reset(); // ✅ reset proprement le formulaire
        },
        () => {
          setSuccess("❌ Erreur lors de l'envoi, veuillez réessayer.");
        }
      );
  };

  return (
    <main className="flex flex-col pt-30">
      <div className="flex-1 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6">Contactez-moi</h1>
        <p className="mb-4">
          Vous avez un projet de site web ? Remplissez le formulaire :
        </p>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col w-full max-w-md gap-4"
        >
          <input
            type="text"
            name="from_name"
            placeholder="Votre nom"
            required
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="email"
            name="from_email"
            placeholder="Votre email"
            required
            className="p-2 border border-gray-300 rounded"
          />

          {/* Select pour l’objet */}
          <select
            name="subject"
            required
            className="p-2 border border-gray-300 rounded dark:bg-zinc-900 dark:text-white"
          >
            <option value="">-- Sélectionnez votre demande --</option>
            <option value="one-page">🌟 One Page</option>
            <option value="site-vitrine">🌐 Site Vitrine</option>
            <option value="sur-mesure">💡 Projet Sur-mesure</option>
            <option value="hebergement">⚙️ Hébergement & Domaine</option>
            <option value="maintenance">🔧 Maintenance</option>
            <option value="refonte">♻️ Refonte de site</option>
            <option value="seo">🔍 SEO Renforcé</option>
            <option value="autre">❓ Autre demande</option>
          </select>

          <textarea
            name="message"
            placeholder="Votre message"
            required
            rows={5}
            className="p-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Envoyer
          </button>
        </form>

        {success && <p className="mt-4 text-green-600">{success}</p>}
      </div>
    </main>
  );
}
