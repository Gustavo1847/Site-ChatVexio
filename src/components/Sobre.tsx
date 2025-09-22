import { ChatvexioButton } from "@/components/ui/chatvexio-button"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useEffect } from "react";

const Sobre = () => {
  return (
    <section className="relative overflow-hidden px-4 py-24" id="Sobre">
      <div className="absolute inset-0 -z-20 bg-chatvexio-orange opacity-90"></div>
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[60deg] bg-gradient-to-r from-orange-300 to-blue-300 opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}>
        </div>
        <div className="relative left-[calc(50%-15rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[90deg] bg-gradient-to-b from-orange-300 to-blue-300 opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(20% 30%, 80% 30%, 100% 50%, 80% 70%, 20% 70%, 0% 50%)" }}>
        </div>
      </div>
      <div className="relative mx-auto max-w-6xl text-white">
        <div className="relative z-20 mx-auto max-w-3xl md:text-center">
          <h2 className="font-display mb-4 text-4xl font-semibold tracking-tight sm:text-5xl">Centro de Atendimento Omnichannel</h2>
          <p className="mt-4 mb-6 text-xl">O ChatVexio se conecta com canais populares de comunicação com o cliente, como Email, chat ao vivo no site, Facebook, Twitter, WhatsApp, Instagram, Line, entre outros. Isso permite oferecer uma experiência consistente ao cliente através de diversos canais - tudo a partir de um único painel de controle.</p>
        </div>
        <div className="h-[100px] md:h-[250px]"></div>
        <img alt="ChatVexio Omnichannel" loading="lazy" width="750" height="750" decoding="async" data-nimg="1" className="absolute -bottom-[95%] left-1/2 z-10 h-[750px] w-[750px] -translate-x-1/2 object-contain" style={{ color: "transparent" }} src="/OmniChannel.png" />
      </div>
    </section>
  )
}
export default Sobre;