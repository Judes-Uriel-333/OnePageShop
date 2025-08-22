// src/components/PopularProducts.tsx
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Casque sans fil",
    price: "89,99 €",
    image: "/images/headphones.jpg",
  },
  {
    id: 2,
    name: "Souris ergonomique",
    price: "49,90 €",
    image: "/images/mouse.jpg",
  },
  {
    id: 3,
    name: "Lampe LED de bureau",
    price: "35,00 €",
    image: "/images/lamp.jpg",
  },
  {
    id: 4,
    name: "Clavier mécanique RGB",
    price: "69,90 €",
    image: "/images/keyboard.jpg",
  },
];

export default function PopularProducts() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-10">
          Produits populaires
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-50 rounded-2xl shadow-lg p-5 hover:shadow-xl transition duration-300"
            >
              <div className="w-full h-48 relative mb-4 rounded-lg overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-indigo-600 text-md font-bold mt-2">
                {product.price}
              </p>
              <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
                Ajouter au panier
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
