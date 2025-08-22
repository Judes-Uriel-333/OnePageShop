// src/components/store/ProductList.tsx

import ProductCard from "./ProductCard";

interface Product {
  name: string;
  price: string;
  description?: string;
  image?: string;
}

interface ProductListProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export default function ProductList({ products, onAddToCart }: ProductListProps) {
  return (
    <section className="py-10 px-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Nos Produits</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            onAddToCart={() => onAddToCart(product)}
          />
        ))}
      </div>
    </section>
  );
}
