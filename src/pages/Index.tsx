import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection"
import PricingSection from "@/components/PricingSection"
import FAQSection from "@/components/FAQSection"
import FinalCTASection from "@/components/FinalCTASection"

const Index = () => {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />
    </main>
  );
};

export default Index;