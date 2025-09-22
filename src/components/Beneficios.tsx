// src/sections/FeaturesSection.tsx
import { FC } from "react";

const FeatureItem: FC<{
  title: string;
  desc: string;
  icon: JSX.Element;
}> = ({ title, desc, icon }) => (
  <div className="relative pl-9">
    <dt className="inline text-xl font-semibold text-gray-900">
      <span className="absolute left-1 top-1 h-5 w-5 text-chatvexio-orange">
        {icon}
      </span>
      {title}
    </dt>
    <br />
    <dd className="inline text-gray-600">{desc}</dd>
  </div>
);

export default function Beneficios() {
  return (
    <section className="scroll-mt-[50px] my-20" id="Beneficios">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center">
          <h2
            className="text-4xl md:text-5xl font-semibold leading-tight"
            data-speed="0.9"
          >
            <span className="bg-gradient-to-r from-chatvexio-orange to-green-600 bg-clip-text text-transparent">
              Atendimento ao cliente facilitado
            </span>
          </h2>
          <p
            className="mx-auto mt-4 max-w-4xl text-xl md:text-2xl leading-9 font-medium text-slate-800"
            data-speed="1.05"
          >
            O <span className="font-semibold">ChatVexio</span> reúne seus
            canais em um só lugar para sua equipe trabalhar mais rápido, com
            contexto e colaboração - sem pular entre aplicativos.
          </p>
        </div>

        {/* Grid */}
        <div className="mx-auto mt-16 w-full">
          <dl className="mx-auto grid grid-cols-1 gap-x-8 gap-y-12 text-lg leading-7 text-gray-600 xl:grid-cols-2">
            <FeatureItem
              title="Canais centralizados"
              desc="WhatsApp, Instagram, Facebook Messenger, Webchat e e-mail no mesmo painel. Roteie, priorize e responda tudo em um único fluxo."
              icon={
                // cloud icon
                <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              }
            />

            <FeatureItem
              title="Widget de chat personalizado"
              desc="Combine com sua identidade visual: cores, logotipo e mensagens de boas-vindas. Faça cada visita virar conversa."
              icon={
                // lock/badge icon
                <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                    clipRule="evenodd"
                  />
                </svg>
              }
            />

            <FeatureItem
              title="Respostas com IA integrada"
              desc="Sugestões automáticas, atalhos e macros inteligentes para reduzir tempo de resposta e manter o padrão da marca."
              icon={
                // refresh/loop icon
                <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z"
                    clipRule="evenodd"
                  />
                </svg>
              }
            />

            <FeatureItem
              title="Contexto e histórico completos"
              desc="Veja conversas anteriores, notas e tags. Entenda o momento do cliente e mantenha a experiência contínua."
              icon={
                // eye/visibility icon
                <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M10 6.12a3 3 0 00-3.001 3.041 11.455 11.455 0 01-2.697 7.24.75.75 0 01-1.148-.965A9.957 9.957 0 005.5 9a4.5 4.5 0 018.996.084V9.15l-.005.297a.75.75 0 11-1.5-.034c.003-.11.004-.219.005-.328a3 3 0 00-3-2.965z"
                    clipRule="evenodd"
                  />
                </svg>
              }
            />

            <FeatureItem
              title="Colaboração em tempo real"
              desc="Atribua, mencione colegas, compartilhe notas internas e garanta atendimento coeso, mesmo com times grandes."
              icon={
                // cog/adjust icon
                <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M7.84 1.804A1 1 0 018.82 1h2.36a1 1 0 01.98.804l.331 1.652a6.993 6.993 0 011.929 1.115l1.598-.54a1 1 0 011.186.447l1.18 2.044a1 1 0 01-.205 1.251l-1.267 1.113a7.047 7.047 0 010 2.228l1.267 1.113a1 1 0 01.206 1.25l-1.18 2.045a1 1 0 01-1.187.447l-1.598-.54a6.993 6.993 0 01-1.929 1.115l-.33 1.652a1 1 0 01-.98.804H8.82a1 1 0 01-.98-.804l-.331-1.652a6.993 6.993 0 01-1.929-1.115l-1.598.54a1 1 0 01-1.186-.447l-1.18-2.044a1 1 0 01.205-1.251l1.267-1.114a7.05 7.05 0 010-2.227L1.821 7.773a1 1 0 01-.206-1.25l1.18-2.045a1 1 0 011.187-.447l1.598.54A6.993 6.993 0 017.51 3.456l.33-1.652zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
              }
            />

            <FeatureItem
              title="Métricas e relatórios"
              desc="Acompanhe SLA, tempo médio de resposta e satisfação. Enxergue gargalos e tome decisões guiadas por dados."
              icon={
                // cart/analytics icon
                <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z"></path>
                  <path
                    fillRule="evenodd"
                    d="M4 13a2 2 0 100 4h12a2 2 0 100-4H4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              }
            />
          </dl>
        </div>
      </div>
    </section>
  );
}
