import { ChatvexioButton } from "@/components/ui/chatvexio-button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Start",
    price: "R$ 197",
    period: "/mês",
    ideal: "Equipes iniciando a operação.",
    features: [
      "Até 3 Usuários",
      "WhatsApp API Oficial",
      "Instagram e Facebook",
      "Chat para Site e Telegram",
      "App para Celular (iOS/Android)",
      "Automação Básica"
    ],
    buttonText: "Começar com o Start",
    buttonVariant: "secondary" as const,
    featured: false
  },
  {
    name: "Business",
    price: "R$ 397",
    period: "/mês",
    ideal: "Empresas que buscam escalar.",
    features: [
      "Tudo do Start",
      "Até 10 Usuários",
      "Relatórios Completos",
      "API e Webhooks para Integrações",
      "Atendente Virtual (IA)"
    ],
    buttonText: "Quero o Plano Business",
    buttonVariant: "primary" as const,
    featured: true,
    badge: "MAIS POPULAR"
  },
  {
    name: "Enterprise",
    price: "Personalizado",
    period: "",
    ideal: "Grandes operações e necessidades customizadas.",
    features: [
      "Tudo do Business",
      "Usuários Ilimitados",
      "Gerente de Conta Dedicado",
      "Suporte Prioritário e SLA",
      "Onboarding e Treinamento"
    ],
    buttonText: "Falar com um Especialista",
    buttonVariant: "secondary" as const,
    featured: false
  }
]

export const PricingSection = () => {
  return (
    <section className="py-20 px-6 bg-gray-50/50">
      <div className="container mx-auto max-w-7xl">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Planos <span className="text-chatvexio-orange">transparentes</span>, sem surpresas no final do mês.
          </h2>
        </div>
        
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative ${plan.featured ? 'card-chatvexio-featured' : 'card-chatvexio'} ${plan.featured ? 'transform scale-105' : ''}`}
            >
              {/* Featured Badge */}
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                    {plan.badge}
                  </span>
                </div>
              )}
              
              {/* Plan Header */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-text-primary mb-2">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-chatvexio-orange">
                    {plan.price}
                  </span>
                  <span className="text-text-secondary text-lg">
                    {plan.period}
                  </span>
                </div>
                <p className="text-text-secondary text-sm">
                  Ideal para: {plan.ideal}
                </p>
              </div>
              
              {/* Features List */}
              <div className="mb-8">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-chatvexio-orange flex-shrink-0 mt-0.5" />
                      <span className="text-text-secondary text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* CTA Button */}
              <ChatvexioButton 
                variant={plan.buttonVariant}
                size="lg"
                className="w-full"
              >
                {plan.buttonText}
              </ChatvexioButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}