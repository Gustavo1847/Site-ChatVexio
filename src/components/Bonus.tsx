import { ChatvexioButton } from "@/components/ui/chatvexio-button"

const Bonus = () => {
  return (
    <section className="relative overflow-hidden px-4 py-24" id="Bonus">
      <div className="absolute inset-0 -z-20 bg-chatvexio-orange opacity-20"></div>
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[60deg] bg-gradient-to-r from-orange-300 to-green-300 opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}>
          </div>
          <div className="relative left-[calc(50%-15rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[90deg] bg-gradient-to-b from-orange-300 to-green-300 opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(20% 30%, 80% 30%, 100% 50%, 80% 70%, 20% 70%, 0% 50%)" }}>
          </div>
        </div>
        <div className="mx-auto w-full max-w-4xl px-6 text-center lg:px-8">
          <div>
            <p className="text-lg font-semibold text-orange-600">Implantação Gratuita</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Eleve o Atendimento ao Cliente a um Novo Nível com ChatVexio</h2>
            <p className="mx-auto mt-5 max-w-prose text-xl text-gray-600">Comece sem preocupações. Ao adiquirir nossos serviços, você ganha um pacote de implantação gratuita que inclui:</p>
          </div>
        </div>
        <div className="mx-auto mt-16 grid w-full max-w-6xl grid-cols-1 place-items-center gap-8 sm:grid-cols-2">
          <div className="order-2 grid gap-y-4 px-8 md:order-1">
            <div>
              <svg className="absolute mt-1 h-6 w-6 text-orange-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
              </svg>
              <p className="ml-10 text-lg leading-8 text-gray-900">Instalação e configuração completa da plataforma</p>
            </div>
            <div>
              <svg className="absolute mt-1 h-6 w-6 text-orange-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
              </svg>
              <p className="ml-10 text-lg leading-8 text-gray-900">Customização para alinhar com as necessidades do seu negócio</p>
            </div>
            <div>
              <svg className="absolute mt-1 h-6 w-6 text-orange-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
              </svg>
              <p className="ml-10 text-lg leading-8 text-gray-900">Treinamento exclusivo para seus agentes dominarem o ChatVexio rapidamente</p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img alt="chatwoot-apis" loading="lazy" width="560" height="400" decoding="async" data-nimg="1" style={{ color: "transparent" }} sizes="(max-width: 1400px) 100vw, 1400px" src="FinalCTA.png" />
          </div>
        </div>
    </section>
  )
}
export default Bonus;