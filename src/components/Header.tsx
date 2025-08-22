import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full py-4 px-6 flex items-center justify-between bg-white shadow-md fixed top-0 z-50">
      <div className="text-xl font-bold text-gray-800">
        OnePageShop
      </div>
      <Link
        href="/create-store"
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl text-sm"
      >
        Créer ma boutique
      </Link>
    </header>
  );
}
