import { useEffect, useState } from "react";
import StoreHeader from "@/components/store/StoreHeader";
import ProductList from "@/components/store/ProductList";
import Cart from "@/components/store/Cart";
import StoreFooter from "@/components/store/StoreFooter";

interface Product {
  name: string;
  price: string;
  description?: string;
  imagePreview?: string; // important
}

interface CartItem extends Product {
  quantity: number;
}

export default function MyStorePage() {
  const [storeName, setStoreName] = useState("Ma Boutique");
  const [products, setProducts] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedData = sessionStorage.getItem("storeData");
    if (storedData) {
      const parsed = JSON.parse(storedData);
      setStoreName(parsed.storeName || "Ma Boutique");

      const productData: Product[] = (parsed.products || []).map((p: any) => ({
        name: p.name,
        price: p.price,
        description: p.description,
        imagePreview: p.imagePreview || "",
      }));

      setProducts(productData);
    }
  }, []);

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.name === product.name);
      if (exists) {
        return prev.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const handleCheckout = () => {
    alert("Merci pour votre commande !");
    setCartItems([]);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 pt-20">
      <StoreHeader
        storeName={storeName}
        cartItemCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        onCheckout={handleCheckout}
      />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-8 px-4 py-10">
          <ProductList products={products} onAddToCart={handleAddToCart} />
          <Cart items={cartItems} onCheckout={handleCheckout} />
        </div>
      </main>

      <StoreFooter />
    </div>
  );
}
