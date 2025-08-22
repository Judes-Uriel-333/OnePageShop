import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Link from "next/link";

function CallToAction() {
  return (
    <section className="bg-indigo-600 py-16 text-center text-white">
      <h2 className="text-3xl font-bold mb-4">
        Prêt à lancer votre boutique en ligne ?
      </h2>
      <p className="mb-6 text-lg">
        Remplissez notre formulaire simple et obtenez votre boutique en quelques minutes.
      </p>
      <Link
        href="/create-store"
        className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
      >
        Créer ma boutique
      </Link>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <HowItWorks />
      <Benefits />
      <CallToAction />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
