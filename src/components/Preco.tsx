import { ChatvexioButton } from "@/components/ui/chatvexio-button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Start",
    price: "R$ 47",
    period: "/mês",
    ideal: "Por usuário, ideal para pequenas equipes.",
    usuarios: "Até 3 usuários",
    features: [
      "Email",
      "Automações",
      "WhatsApp API Oficial",
      "Chat para Site e Telegram",
      "App para Celular (iOS/Android)"
    ],
    buttonLink: "",
    buttonText: "Começar com o Start",
    buttonVariant: "secondary" as const,
    featured: false
  },
  {
    name: "Business",
    price: "R$ 97",
    period: "/mês",
    ideal: "Por usuário, ideal para empresas que buscam escalar.",
    usuarios: "Até 10 usuários",
    features: [
      "Tudo do Start",
      "Instagram",
      "Facebook",
      "Messenger",
      "Relatórios Completos",
      "Integrações Externas via API",
      "Atendente Virtual com Inteligência Artificial",
    ],
    buttonLink: "",
    buttonText: "Quero o Plano Business",
    buttonVariant: "primary" as const,
    featured: true,
    badge: "MAIS POPULAR"
  },
  {
    name: "Enterprise",
    price: "Customizado",
    period: "",
    ideal: "Para grandes operações e necessidades customizadas.",
    usuarios: "Usuários Ilimitados",
    features: [
      "Tudo do Business",
      "Gerente de Conta Dedicado",
      "Suporte Prioritário e SLA",
      "Onboarding e Treinamento"
    ],
    buttonLink: "",
    buttonText: "Falar com um Especialista",
    buttonVariant: "secondary" as const,
    featured: false
  }
]

const PricingSection = () => {
  return (
    <section className="py-20 px-6 bg-gray-50/50" id="Preco">
      <div className="container mx-auto max-w-7xl">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Planos <span className="text-chatvexio-orange">transparentes</span>, sem surpresas no final do mês.
          </h2>
          <p className="my-6 text-lg leading-8 text-gray-600">
            Comece agora mesmo a sua jornada rumo a um atendimento ao cliente inesquecível. Com nossa garantia de 30 dias, você tem tudo a ganhar e nada a perder.
          </p>
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
                  {plan.ideal}
                </p>
              </div>

              {/* Usuários */}
              <div className="flex items-center space-x-4 rounded-md border p-4">
                <div className="flex-1 space-y-1">
                  <p className="text-sm leading-none font-medium">{plan.usuarios}</p>
                </div>
              </div>

              {/* Features List */}
              <div className="my-6">
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
                onClick={() => window.location.href = plan.buttonLink} // Redirect on button click
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
export default PricingSection;