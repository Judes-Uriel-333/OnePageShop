// src/components/store/Cart.tsx

interface Product {
  name: string;
  price: string;
  quantity: number;
}

interface CartProps {
  items: Product[];
  onCheckout: () => void;
}

export default function Cart({ items, onCheckout }: CartProps) {
  const total = items.reduce((sum, item) => {
    const price = parseFloat(item.price);
    return sum + price * item.quantity;
  }, 0);

  return (
    <aside className="w-full max-w-sm bg-white shadow-lg p-4 rounded-lg sticky top-24">
      <h2 className="text-lg font-bold mb-4">🛒 Panier</h2>

      {items.length === 0 ? (
        <p className="text-gray-500">Votre panier est vide.</p>
      ) : (
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li key={index} className="flex justify-between items-center border-b pb-2">
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-600">
                  {item.quantity} × {item.price} €
                </p>
              </div>
              <p className="font-bold">{(parseFloat(item.price) * item.quantity).toFixed(2)} €</p>
            </li>
          ))}
        </ul>
      )}

      {items.length > 0 && (
        <div className="mt-4">
          <p className="text-right font-bold text-lg mb-2">
            Total : {total.toFixed(2)} €
          </p>
          <button
            onClick={onCheckout}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md font-semibold"
          >
            Valider la commande
          </button>
        </div>
      )}
    </aside>
  );
}
