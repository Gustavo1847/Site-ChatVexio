import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Sobre from "@/components/Sobre"
import Beneficios from "@/components/Beneficios"
import Bonus from "@/components/Bonus"
import Preco from "@/components/Preco"
import FAQ from "@/components/FAQ"
import Footer from "@/components/Footer"

const Index = () => {
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