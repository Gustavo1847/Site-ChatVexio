import { ChatvexioButton } from "@/components/ui/chatvexio-button"
import heroImage from "@/assets/chatvexio-dashboard-hero.png"
import logoChat from "@/assets/logo-laranja-preto.png"

export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50/50 pt-5 pb-16 px-5 max-h-screen">
      <div className="container mx-auto max-w-7xl">
        <div className="relative max-w-lg mx-auto">
          <div className="relative">
            <img 
              src={logoChat} 
              alt="Logo da Chatvexio"
              className="w-full h-auto rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent rounded-2xl"></div>
          </div>
        </div>
        <div className="text-center mb-12">
          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight">
            Menos caos, mais vendas.{" "}
            <span className="text-chatvexio-orange">
              O atendimento omnichannel
            </span>{" "}
            que sua equipe vai amar.
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-text-secondary mb-6 max-w-3xl mx-auto leading-relaxed">
            Centralize WhatsApp, Instagram, Site e mais. Organize sua equipe com uma caixa de entrada inteligente e transforme cada conversa em uma oportunidade de negócio.
          </p>
          
          {/* Social Proof */}
          <p className="text-sm text-text-muted mb-8">
            Junte-se a mais de 500 empresas que já estão revolucionando seu atendimento.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <ChatvexioButton size="lg" className="w-full sm:w-auto">
              Iniciar Teste Grátis de 7 Dias
            </ChatvexioButton>
            <ChatvexioButton variant="secondary" size="lg" className="w-full sm:w-auto">
              Agendar Demonstração
            </ChatvexioButton>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative">
            <img 
              src={heroImage} 
              alt="Dashboard da Chatvexio mostrando caixa de entrada unificada com WhatsApp, Instagram e outros canais"
              className="w-full h-auto rounded-2xl shadow-2xl animate-float"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}