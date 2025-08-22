// src/components/store/ProductCard.tsx

interface Product {
  name: string;
  price: string;
  description?: string;
  image?: string; // image = URL.createObjectURL(file) ou null
}

interface ProductCardProps {
  product: Product;
  onAddToCart: () => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col justify-between">
      {product.image ? (
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-contain mb-4 rounded"
        />
      ) : (
        <div className="w-full h-48 bg-gray-100 flex items-center justify-center text-gray-400 mb-4 rounded">
          Aucune image
        </div>
      )}

      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-gray-600 text-sm mt-1">
          {product.description || "Pas de description"}
        </p>
        <p className="text-indigo-600 font-bold text-lg mt-2">{product.price} €</p>
      </div>

      <button
        onClick={onAddToCart}
        className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg font-semibold"
      >
        Ajouter au panier
      </button>
    </div>
  );
}
