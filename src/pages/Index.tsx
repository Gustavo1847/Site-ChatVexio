import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Sobre from "@/components/Sobre"
import Beneficios from "@/components/Beneficios"
import Bonus from "@/components/Bonus"
import Preco from "@/components/Preco"
import FAQ from "@/components/FAQ"
import Footer from "@/components/Footer"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"

const Index = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.slice(1);

    const scroll = () => {
      const el = document.getElementById(id);
      if (!el) return;
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    // 2 RAFs + pequeno delay para header/imagens estabilizarem
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setTimeout(scroll, 30);
      });
    });
  }, [hash]);

  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <Sobre />
      <Beneficios />
      <Bonus />
      <Preco />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Index;