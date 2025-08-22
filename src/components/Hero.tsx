import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-24 pb-16 px-6 text-center bg-gradient-to-b from-indigo-50 to-white">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
        Crée ta boutique <span className="text-indigo-600">OnePage</span> en quelques clics
      </h1>
      <p className="text-lg text-gray-600 max-w-xl mx-auto mb-8">
        Sans coder, sans serveur, sans prise de tête. Génère une page de vente en quelques secondes.
      </p>
      <Link
        href="/create-store"
        className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition"
      >
        Générer ma boutique
      </Link>
    </section>
  );
}
