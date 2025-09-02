import { ChatvexioButton } from "@/components/ui/chatvexio-button"

export const FinalCTASection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-chatvexio-orange-light to-white">
      <div className="container mx-auto max-w-5xl text-center">
        {/* Main Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6 leading-tight">
          Transforme seu atendimento em seu maior{" "}
          <span className="text-chatvexio-orange">diferencial competitivo</span>.
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
          Comece seu teste gratuito de 7 dias. Não pedimos cartão de crédito.
        </p>
        
        {/* CTA Button */}
        <ChatvexioButton size="lg" className="text-lg font-semibold px-12 py-4 h-auto">
          Criar minha conta agora
        </ChatvexioButton>
      </div>
    </section>
  )
}