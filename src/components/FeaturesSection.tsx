import inboxIcon from "@/assets/icon-inbox.png"
import automationIcon from "@/assets/icon-automation.png"
import reportsIcon from "@/assets/icon-reports.png"
import mobileIcon from "@/assets/icon-mobile.png"

const features = [
  {
    icon: inboxIcon,
    title: "Caixa de Entrada Inteligente",
    description: "Todos os canais, uma só tela. Atribua conversas, adicione notas internas e colabore com sua equipe sem sair do chat."
  },
  {
    icon: automationIcon,
    title: "Automação que Trabalha por Você",
    description: "Crie chatbots com nosso construtor visual para qualificar leads, responder dúvidas e direcionar clientes 24/7."
  },
  {
    icon: reportsIcon,
    title: "Relatórios para Decisões Rápidas",
    description: "Monitore o tempo de resposta, volume de chats, performance da equipe e a satisfação dos seus clientes em tempo real."
  },
  {
    icon: mobileIcon,
    title: "Atendimento na Palma da Mão",
    description: "Nosso aplicativo para iOS e Android permite que você e sua equipe atendam os clientes de qualquer lugar."
  }
]

const FeaturesSection = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Feito para equipes que não podem{" "}
            <span className="text-chatvexio-orange">perder tempo</span>{" "}
            (nem clientes).
          </h2>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="card-chatvexio text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-6">
                <img 
                  src={feature.icon} 
                  alt={`Ícone ${feature.title}`}
                  className="w-16 h-16 mx-auto group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-4">
                {feature.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default FeaturesSection;