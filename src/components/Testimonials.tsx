// src/components/Testimonials.tsx
const testimonials = [
  {
    name: "Sophie Martin",
    role: "Graphiste freelance",
    message:
      "Cette boutique m’a permis de trouver tout ce qu’il me fallait pour améliorer mon espace de travail. Je recommande à 100% !",
  },
  {
    name: "Kevin Diallo",
    role: "Développeur Web",
    message:
      "Des produits au top et un service client très réactif. Interface fluide et agréable. Bravo !",
  },
  {
    name: "Julie Lemoine",
    role: "Étudiante à distance",
    message:
      "Grâce à cette boutique, j’ai pu me créer un coin d’étude parfaitement adapté à mes besoins. Merci !",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-10">
          Ce que disent nos utilisateurs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <p className="text-gray-700 italic mb-4">"{t.message}"</p>
              <h4 className="text-lg font-semibold text-gray-900">
                {t.name}
              </h4>
              <span className="text-sm text-gray-500">{t.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
