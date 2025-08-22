// src/components/store/StoreHeader.tsx

import { ShoppingCart } from "lucide-react";

interface StoreHeaderProps {
  storeName: string;
  cartItemCount: number;
  onCheckout: () => void;
  logo?: string;
}

export default function StoreHeader({
  storeName,
  cartItemCount,
  onCheckout,
  logo,
}: StoreHeaderProps) {
  return (
    <header className="w-full flex justify-between items-center px-6 py-4 bg-white shadow-md fixed top-0 z-50">
      <div className="flex items-center gap-3">
        {logo && (
          <img
            src={logo}
            alt="Logo de la boutique"
            className="h-10 w-10 object-contain rounded-full"
          />
        )}
        <h1 className="text-2xl font-bold text-gray-800">{storeName}</h1>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <ShoppingCart className="w-6 h-6 text-gray-700" />
          {cartItemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
              {cartItemCount}
            </span>
          )}
        </div>

        <button
          onClick={onCheckout}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-semibold text-sm"
        >
          Commander
        </button>
      </div>
    </header>
  );
}
