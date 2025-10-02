import { ChatvexioButton } from "@/components/ui/chatvexio-button"
import heroImage from "@/assets/chatvexio-dashboard-hero-macbook.png"
import HeroParallax from "./Sobre" // importa o componente com GSAP
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useEffect } from "react";

const Hero = () => {
  return (
    <section className="scroll-mt-[50px] mt-16" id="Inicio">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#74fca8] to-[#FF9F59] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}>
        </div>
      </div>
      <div className="mx-auto max-w-4xl">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="anuncioChatVexio relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Anúncio sobre o ChatVexio.&nbsp;
            <a className="text-primary font-semibold" href="/empresa">
              <span className="absolute inset-0" aria-hidden="true"></span>
              Saiba mais
              <span aria-hidden="true"> →</span>
            </a>
          </div>
        </div>
        <div className="text-center mb-12">
          {/* Main Title */}
          <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold text-text-primary mb-6 leading-tight">
            Menos caos, mais vendas.{" "}
            <br />
            <span className="text-chatvexio-orange">
              O atendimento omnichannel
            </span>{" "}
            que sua equipe precisa.
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-text-secondary mb-6 max-w-3xl mx-auto leading-relaxed">
            Centralize WhatsApp, Instagram, Site e mais. Organize sua equipe com uma plataforma inteligente e transforme cada conversa em uma oportunidade de negócio.
          </p>
          
          {/* Social Proof */}
          <p className="text-sm text-text-muted mb-8">
            Junte-se a mais de 500 empresas que já estão revolucionando seu atendimento.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <ChatvexioButton size="lg" className="w-full cursor-pointer sm:w-auto" onClick={() => window.location.href = "/teste-gratuito"}>
              Iniciar Teste Grátis de 7 Dias
            </ChatvexioButton>
            <ChatvexioButton variant="secondary" size="lg" className="w-full cursor-pointer sm:w-auto" onClick={() => window.location.href = "/agendar-demonstracao"}>
              Agendar Demonstração
            </ChatvexioButton>
          </div>
        </div>

        <div className="relative mt-[-80px]">
          <img
            src="/src/assets/chatvexio-dashboard-hero-macbook.png"
            alt="Dashboard da ChatVexio mostrando caixa de entrada unificada com WhatsApp, Instagram e outros canais"
            className="w-full h-auto will-change-transform [transform:translateZ(0)] drop-shadow-xl"
          />
          <div className="absolute inset-0" />
        </div>
        <div className="mx-8 max-w-7xl px-6 lg:px-8">
          <h2 className="mb-6 text-center text-base font-semibold text-gray-500">
            O projeto original ja é utilizado por mais de 15.000 organizações em todo o mundo
          </h2>
        </div>
        
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#FF9F59] to-[#74fca8] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Hero;