// src/pages/create-store/index.tsx
import { useState } from "react";
import { useRouter } from "next/router";

export default function CreateStorePage() {
  const router = useRouter();

  const [storeName, setStoreName] = useState("");
  const [logo, setLogo] = useState<File | null>(null);
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [products, setProducts] = useState([
    { name: "", price: "", description: "", image: null as File | null, preview: "" },
  ]);

  const addProduct = () => {
    setProducts([
      ...products,
      { name: "", price: "", description: "", image: null, preview: "" },
    ]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const storeData = {
      storeName,
      logo: logo ? URL.createObjectURL(logo) : null,
      lastName,
      firstName,
      phone,
      email,
      products: products.map((product) => ({
        ...product,
        image: product.image ? URL.createObjectURL(product.image) : null,
      })),
    };

    localStorage.setItem("storeData", JSON.stringify(storeData));
    router.push("/my-store");
  };

  return (
    <main className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Créer ma boutique</h1>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <label className="block font-semibold mb-2">Nom de la boutique</label>
          <input
            type="text"
            value={storeName}
            onChange={(e) => setStoreName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2"
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-2">Logo (optionnel)</label>
          <label className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-lg border border-gray-300 cursor-pointer hover:bg-gray-200 transition">
            Choisir un fichier
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setLogo(e.target.files?.[0] ?? null)}
              className="hidden"
            />
          </label>
          {logo && (
            <div className="mt-2">
              <span className="text-sm text-gray-500">{logo.name}</span>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold mb-2">Nom</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2"
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-2">Prénom</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2"
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-2">Téléphone</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2"
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2"
              required
            />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Produits</h2>
          {products.map((product, index) => (
            <div key={index} className="border border-gray-200 p-4 rounded-lg mb-4">
              <div className="mb-2">
                <label className="block font-semibold mb-1">Nom du produit</label>
                <input
                  type="text"
                  value={product.name}
                  onChange={(e) => {
                    const newProducts = [...products];
                    newProducts[index].name = e.target.value;
                    setProducts(newProducts);
                  }}
                  className="w-full border border-gray-300 rounded-lg p-2"
                  required
                />
              </div>

              <div className="mb-2">
                <label className="block font-semibold mb-1">Prix (€)</label>
                <input
                  type="number"
                  step="0.01"
                  value={product.price}
                  onChange={(e) => {
                    const newProducts = [...products];
                    newProducts[index].price = e.target.value;
                    setProducts(newProducts);
                  }}
                  className="w-full border border-gray-300 rounded-lg p-2"
                  required
                />
              </div>

              <div className="mb-2">
                <label className="block font-semibold mb-1">Description (optionnel)</label>
                <textarea
                  value={product.description}
                  onChange={(e) => {
                    const newProducts = [...products];
                    newProducts[index].description = e.target.value;
                    setProducts(newProducts);
                  }}
                  className="w-full border border-gray-300 rounded-lg p-2"
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">Image</label>
                <label className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-lg border border-gray-300 cursor-pointer hover:bg-gray-200 transition">
                  Choisir un fichier
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0] ?? null;
                      const newProducts = [...products];
                      newProducts[index].image = file;
                      newProducts[index].preview = file ? URL.createObjectURL(file) : "";
                      setProducts(newProducts);
                    }}
                    className="hidden"
                  />
                </label>
                {product.preview && (
                  <img
                    src={product.preview}
                    alt="Aperçu"
                    className="mt-2 h-24 w-24 object-cover rounded"
                  />
                )}
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={addProduct}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
          >
            Ajouter un produit
          </button>
        </div>

        <div>
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Créer ma boutique
          </button>
        </div>
      </form>
    </main>
  );
}
