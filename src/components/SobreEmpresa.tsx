import { ChatvexioButton } from "@/components/ui/chatvexio-button"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useEffect } from "react";

const SobreEmpresa = () => {
  return (
    <section className="mx-auto w-11/12 max-w-screen-md md:my-16">
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl [&:not(:first-child)]:mt-6">
        ChatVexio
      </h1>
      <p className="leading-6 [&:not(:first-child)]:mt-4 [&>a]:text-blue-600 [&>a]:hover:underline">
        O ChatVexio é um fork do projeto Chatwoot.
        Uma versão do Chatwoot customizada especificamente para atender às necessidades do mercado de atendimento de pequenas e médias empresas.
        Nosso objetivo é oferecer uma experiência excepcional para empresas que desejam melhorar seu engajamento com clientes através de uma plataforma robusta e versátil.
      </p>
      <p className="leading-6 [&:not(:first-child)]:mt-4 [&>a]:text-blue-600 [&>a]:hover:underline">
        O Chatwoot é uma plataforma de engajamento com os clientes que oferece uma alternativa a ferramentas como Intercom, Zendesk e Salesforce Service Cloud.
        A plataforma permite que as empresas se conectem com seus clientes através de diversos canais de comunicação, como websites, Facebook, Instagram, Twitter, WhatsApp e e-mail, integrando tudo em um único local.
      </p>
      <h2 className="border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 [&:not(:first-child)]:mt-6">
        Oferecemos:
      </h2>
      <ul className="my-4 ml-6 list-disc [&>li]:mt-0">
      <li>
        <strong>Acesso completo à plataforma:</strong>
        Utilize todas as funcionalidades do Chatwoot CE, incluindo gestão de múltiplos canais de comunicação e relatórios detalhados para monitorar o desempenho da sua equipe.
      </li>
      <li>
        <strong>Configuração personalizada dos canais de atendimento:</strong>
        Adapte a plataforma para atender de forma eficaz as especificidades dos seus clientes.
      </li>
      <li>
        <strong>Suporte nativo e dedicado em português:</strong>
        Contamos com uma equipe de suporte técnico português para ajudá-lo com qualquer dúvida ou dificuldade.
      </li>
      <li>
        <strong>Implantação e customização:</strong>
        Trabalhe com nossos especialistas para implementar e customizar o Chatwoot conforme as necessidades do seu negócio.
      </li>
      <li>
        <strong>Treinamento:</strong>
        Oferecemos treinamentos detalhados para garantir que sua equipe possa aproveitar ao máximo todas as funcionalidades disponíveis.
      </li>
      </ul>
      <p className="leading-6 [&:not(:first-child)]:mt-4 [&>a]:text-blue-600 [&>a]:hover:underline">
        Somos o seu parceiro estratégico para soluções de atendimento ao cliente omnichannel que transformam a forma como as empresas se conectam com seus clientes.
        Nossa missão é capacitar negócios de todos os portes a oferecerem experiências de atendimento personalizadas e envolventes, construindo relacionamentos duradouros e elevando a satisfação do cliente a um novo nível de qualidade.
      </p>
    </section>
  )
}
export default SobreEmpresa;