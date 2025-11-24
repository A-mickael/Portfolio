import { Card } from "@/src/components/ui/card";
import Link from "next/link";

export default function Prestations() {
  return (
    <main className="pt-30">
      <div className="flex flex-col items-center m-6">
        <h1 className="text-4xl font-bold text-center uppercase mb-10">
          Mes prestations
        </h1>

        <div className="grid gap-6 md:grid-cols-2 max-w-4xl w-full">
          <Card className="p-8 rounded-2xl shadow-md hover:shadow-xl transition text-center">
            <h2 className="text-2xl font-bold mb-4">
              💻 Prestations Développeur
            </h2>
            <p className="mb-4">Sites sur-mesure, Next.js, applications web…</p>
            <Link
              href="/prestations/developpeur"
              className="underline font-semibold"
            >
              Découvrir →
            </Link>
          </Card>

          <Card className="p-8 rounded-2xl shadow-md hover:shadow-xl transition text-center">
            <h2 className="text-2xl font-bold mb-4">
              🌐 Prestations WordPress
            </h2>
            <p className="mb-4">One Page, Vitrine, Refonte, Maintenance…</p>
            <Link
              href="/prestations/wordpress"
              className="underline font-semibold"
            >
              Découvrir →
            </Link>
          </Card>
        </div>
      </div>
    </main>
  );
}
