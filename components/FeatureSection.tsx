// Dentro de src/components/LandingPageModern.tsx (ou crie um novo FeatureSection.tsx)

import React from "react";
import Image from "next/image";
import { Mic, Zap, MessageSquare } from "lucide-react";

// --- Interface para as Funcionalidades ---

interface FeatureProps {
  title: string;
  description: string;
  imageSrc: string; // Caminho da imagem PNG
  imageAlt: string; // Texto alternativo para acessibilidade
  icon: React.ReactElement;
  reverse?: boolean; // Para alternar o layout
}

// --- Componente da Funcionalidade (Alternado) ---

const FeatureCard: React.FC<FeatureProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  icon,
  reverse = false,
}) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 py-16 md:py-24 w-full ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Coluna 1: Ilustração/Mockup (Visual) */}
      <div
        className={`w-full md:w-1/2 flex ${
          reverse ? "md:justify-end" : "md:justify-start"
        }`}
      >
        <div className="group relative w-full max-w-lg aspect-square">
          {/* Efeito de brilho no hover */}
          <div className="absolute -inset-4 bg-gradient-to-br from-orange-500/20 via-orange-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700"></div>

          {/* Container da imagem PNG - sem fundo */}
          <div className="relative w-full h-full rounded-3xl overflow-hidden transition-all duration-500 group-hover:scale-[1.03] group-hover:shadow-2xl group-hover:shadow-orange-500/20">
            <div className="absolute inset-0 rounded-3xl overflow-hidden border border-gray-800/50 group-hover:border-orange-500/30 transition-colors duration-500">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Coluna 2: Texto (Descrição) */}
      <div className="w-full md:w-1/2 text-left md:flex md:flex-col md:items-start">
        <div className="inline-flex items-center gap-2 text-orange-500 bg-gradient-to-r from-orange-500/10 via-orange-500/5 to-orange-500/10 backdrop-blur-sm border border-orange-500/30 px-5 py-2.5 rounded-full text-xs font-bold tracking-wide uppercase mb-8 shadow-lg shadow-orange-500/10 hover:shadow-orange-500/20 transition-all duration-300 hover:scale-105">
          {React.cloneElement(icon as React.ReactElement<any>, {
            className: "w-4 h-4",
          })}
          <span>Funcionalidade Inteligente</span>
        </div>
        <h3 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white leading-tight tracking-tight max-w-xl">
          <span className="relative inline-block">
            <span className="relative z-10">{title}</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-orange-500/50 to-orange-400/50 rounded-full"></span>
          </span>
        </h3>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl">
          {description}
        </p>
      </div>
    </div>
  );
};

// --- Seção Principal de Funcionalidades ---

export default function FeatureSection() {
  return (
    <section className="relative py-16 md:py-28 overflow-hidden border-t border-b border-gray-800">
      {/* Background moderno com gradientes - 100% width */}
      <div className="absolute inset-0 w-full bg-gradient-to-b from-gray-950 via-gray-950 to-gray-900"></div>
      <div className="absolute inset-0 w-full bg-[radial-gradient(circle_at_30%_50%,rgba(249,115,22,0.06),transparent_60%)]"></div>
      <div className="absolute inset-0 w-full bg-[radial-gradient(circle_at_70%_50%,rgba(249,115,22,0.06),transparent_60%)]"></div>

      <div className="w-full px-4 md:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 text-orange-500 bg-orange-500/10 border border-orange-500/20 px-5 py-2.5 rounded-full text-xs font-bold tracking-wide uppercase mb-8 shadow-lg shadow-orange-500/10">
            <Zap className="w-4 h-4" />
            <span>Funcionalidades do MVP</span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white leading-tight tracking-tight">
            <span className="relative inline-block">
              <span className="relative z-10">Simples,</span>
              <span className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-orange-400/20 blur-2xl"></span>
            </span>{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
                Rápido,
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-orange-400/20 blur-2xl"></span>
            </span>{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Prático,</span>
              <span className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-orange-400/20 blur-2xl"></span>
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Tudo que você precisa pra gerenciar suas OS. Sem complicação. Feito
            pro prestador de serviço que trabalha na rua.
          </p>
        </div>

        {/* 1. OS POR ÁUDIO (Opcional) */}
        <FeatureCard
          title="1. Fale que o sistema escreve"
          description="Clica no '+' e fala o que você fez. O sistema escreve tudo sozinho. Não precisa digitar nada. Muito mais rápido."
          imageSrc="/feature-mic.png"
          imageAlt="Sistema de reconhecimento de voz para criar ordens de serviço"
          icon={<Mic />}
        />

        {/* 2. CADASTRO RÁPIDO E STATUS SIMPLES */}
        <FeatureCard
          title="2. Cadastro rápido e controle fácil"
          description="Cadastra o cliente só com nome e telefone. Controla suas OS em 3 lugares: Pra fazer, Fazendo e Pronto. Simples assim."
          imageSrc="/feature-calendar.png"
          imageAlt="Calendário e controle de ordens de serviço"
          icon={<Zap />}
          reverse
        />

        {/* 3. RELATÓRIO RÁPIDO NO WHATSAPP (2 CLIQUES) */}
        <FeatureCard
          title="3. Envia o recibo pelo WhatsApp"
          description="Quando termina o serviço, marca como pronto. O sistema cria um PDF bonito e abre o WhatsApp pra você enviar pro cliente. Em 2 cliques tá feito."
          imageSrc="/feature-resume.png"
          imageAlt="Envio de recibo PDF pelo WhatsApp"
          icon={<MessageSquare />}
        />
      </div>
    </section>
  );
}

// Exemplo de como usar no LandingPageModern.tsx:
// Adicione o import: import FeatureSection from './FeatureSection';
// Substitua o código de ProcessStep por: <FeatureSection />
