export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
        {/* Section Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <p>Email : <a href="mailto:judesuriel33@gmail.com" className="hover:underline">judesuriel33@gmail.com</a></p>
          <p className="mt-2">Support disponible 7j/7</p>
        </div>

        {/* Liens utiles */}
        <div>
          <h3 className="text-white font-semibold mb-4">Liens utiles</h3>
          <ul className="space-y-2">
            <li><a href="#features" className="hover:underline">Fonctionnalités</a></li>
            <li><a href="#products" className="hover:underline">Produits</a></li>
            <li><a href="#faq" className="hover:underline">FAQ</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Mentions */}
        <div>
          <h3 className="text-white font-semibold mb-4">Mentions</h3>
          <p><a href="/legal" className="hover:underline">Mentions légales</a></p>
          <p><a href="/terms" className="hover:underline">Termes & Conditions</a></p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-xs mt-10 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} OnePageShop. Tous droits réservés.
      </div>
    </footer>
  );
}
