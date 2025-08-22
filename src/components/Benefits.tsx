// src/components/Benefits.tsx

import { ShoppingCart, Zap, ShieldCheck } from "lucide-react";

const benefits = [
  {
    icon: <ShoppingCart className="w-8 h-8 text-white" />,
    title: "Prêt à vendre",
    description: "Une page complète avec tout ce qu'il faut pour vendre en ligne immédiatement.",
  },
  {
    icon: <Zap className="w-8 h-8 text-white" />,
    title: "Ultra rapide",
    description: "Ta boutique est optimisée pour les performances et le SEO, sans effort de ta part.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-white" />,
    title: "Sécurisé",
    description: "Hébergé sur des serveurs fiables avec HTTPS, ton contenu est toujours protégé.",
  },
];

export default function Benefits() {
  return (
    <section className="py-20 px-6 bg-indigo-600 text-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Pourquoi choisir OnePageShop ?
      </h2>
      <p className="text-indigo-100 max-w-2xl mx-auto mb-12">
        Pensé pour les indépendants, créateurs et petites entreprises qui veulent vendre sans se prendre la tête.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-indigo-500/30 p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <div className="flex justify-center mb-4">{benefit.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
            <p className="text-indigo-100">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
