import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "O que é a API Oficial do WhatsApp e por que preciso dela?",
    answer: "É a solução oficial do WhatsApp para empresas, garantindo estabilidade, segurança e acesso a recursos avançados. Nós cuidamos de toda a burocracia para você."
  },
  {
    question: "Preciso ter um número de celular novo?",
    answer: "Você pode usar um número existente (fixo ou móvel), desde que ele não esteja ativo em outra conta do WhatsApp."
  },
  {
    question: "A instalação é complicada?",
    answer: "Não! Nossa equipe de especialistas realiza todo o processo de configuração e onboarding para que você comece a usar a plataforma o mais rápido possível."
  },
  {
    question: "Posso cancelar quando quiser?",
    answer: "Sim. Nossos planos são mensais e você pode cancelar a qualquer momento, sem taxas ou multas."
  }
]

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-4xl">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Ainda tem <span className="text-chatvexio-orange">dúvidas</span>? A gente responde.
          </h2>
        </div>
        
        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="card-chatvexio cursor-pointer transition-all duration-200 hover:shadow-lg"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-text-primary pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-chatvexio-orange" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-chatvexio-orange" />
                  )}
                </div>
              </div>
              
              {openIndex === index && (
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-text-secondary leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}