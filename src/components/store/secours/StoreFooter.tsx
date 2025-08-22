// src/components/store/StoreFooter.tsx

export default function StoreFooter() {
  return (
    <footer className="w-full bg-gray-100 py-6 mt-10 border-t border-gray-200">
      <div className="max-w-5xl mx-auto px-4 text-center text-sm text-gray-500 space-y-2">
        <p>© {new Date().getFullYear()} OnePageShop. Tous droits réservés.</p>
        <div className="flex justify-center gap-4 text-gray-400 text-xs">
          <a href="#" className="hover:underline">
            Conditions d’utilisation
          </a>
          <a href="#" className="hover:underline">
            Politique de confidentialité
          </a>
        </div>
      </div>
    </footer>
  );
}
