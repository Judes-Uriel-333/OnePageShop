// src/components/HowItWorks.tsx

const steps = [
  {
    title: "1. Personnalise",
    description: "Choisis ton style, ton logo, tes couleurs et ta description. Tu peux tout adapter à ton image.",
  },
  {
    title: "2. Génère",
    description: "En un clic, on génère une page responsive, rapide, et prête à vendre. Pas besoin de coder.",
  },
  {
    title: "3. Partage",
    description: "Partage le lien ou connecte ton domaine. Tu peux commencer à vendre dès maintenant.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 px-6 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        Comment ça fonctionne ?
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        Crée ta boutique en ligne en 3 étapes simples.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-indigo-50 p-6 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">{step.title}</h3>
            <p className="text-gray-700">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
