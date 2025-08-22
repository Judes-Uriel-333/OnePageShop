"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Comment puis-je ajouter un produit à ma boutique ?",
    answer: "Une fois connecté, utilisez le tableau de bord pour ajouter des produits en quelques clics. Les produits s'afficheront automatiquement sur votre boutique.",
  },
  {
    question: "Puis-je personnaliser l’apparence de ma boutique ?",
    answer: "Oui, vous pouvez choisir un thème, ajouter votre logo, et modifier les couleurs via l’interface de personnalisation.",
  },
  {
    question: "Quels moyens de paiement sont pris en charge ?",
    answer: "Nous supportons Stripe, PayPal et les paiements par carte bancaire.",
  },
  {
    question: "Puis-je tester la plateforme gratuitement ?",
    answer: "Oui, une version gratuite est disponible avec des fonctionnalités limitées. Vous pouvez passer à une offre premium à tout moment.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-16 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
          Questions fréquentes
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-4 transition hover:shadow"
            >
              <button
                className="w-full text-left text-lg font-medium text-gray-800"
                onClick={() => toggle(index)}
              >
                {faq.question}
              </button>
              {openIndex === index && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
