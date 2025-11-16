// Dentro de src/components/LandingPageModern.tsx (ou crie um novo FeatureSection.tsx)

import React from 'react';
import { Mic, Zap, MessageSquare, Briefcase } from 'lucide-react'; 
import { VoiceReportIllustration, SmartRemindersIllustration, DigitalReportsIllustration } from './Illustrations';

// --- Interface para as Funcionalidades ---

interface FeatureProps {
  title: string;
  description: string;
  illustration: React.ComponentType; // Componente SVG
  icon: React.ReactElement;
  reverse?: boolean; // Para alternar o layout
}

// --- Componente da Funcionalidade (Alternado) ---

const FeatureCard: React.FC<FeatureProps> = ({ title, description, illustration: Illustration, icon, reverse = false }) => {
  return (
    <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 py-12 md:py-20 ${reverse ? 'md:flex-row-reverse' : ''}`}>
      
      {/* Coluna 1: Ilustração/Mockup (Visual) */}
      <div className={`w-full md:w-1/2 flex justify-center ${reverse ? 'md:justify-start' : 'md:justify-end'}`}>
        <div className="group relative w-full max-w-lg aspect-square">
          {/* Efeito de brilho no hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"></div>
          
          {/* Container da ilustração SVG */}
          <div className="relative bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 rounded-3xl shadow-2xl border border-gray-800/50 w-full h-full overflow-hidden transition-all duration-500 group-hover:border-orange-500/50 group-hover:shadow-orange-500/10 group-hover:scale-[1.02] flex items-center justify-center p-6">
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/50 to-transparent z-10"></div>
            <div className="relative z-20 w-full h-full flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
              <Illustration />
            </div>
          </div>
        </div>
      </div>

      {/* Coluna 2: Texto (Descrição) */}
      <div className={`w-full md:w-1/2 text-left ${reverse ? 'md:text-right md:flex md:flex-col md:items-end' : ''}`}>
        <div className="inline-flex items-center gap-2 text-orange-500 bg-gradient-to-r from-orange-500/10 to-orange-500/5 backdrop-blur-sm border border-orange-500/20 px-4 py-2 rounded-full text-xs font-bold tracking-wide uppercase mb-6 shadow-lg shadow-orange-500/10">
          {React.cloneElement(icon as React.ReactElement<any>, { className: 'w-4 h-4' })}
          <span>Funcionalidade Inteligente</span>
        </div>
        <h3 className="text-3xl md:text-5xl font-extrabold mb-6 text-white leading-tight tracking-tight max-w-xl">
          {title}
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
    <section className="bg-transparent py-12 md:py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 text-orange-500 bg-orange-500/10 border border-orange-500/20 px-4 py-2 rounded-full text-xs font-bold tracking-wide uppercase mb-6">
            <Zap className="w-4 h-4" />
            <span>Funcionalidades do MVP</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-white leading-tight tracking-tight">
            Simples. Rápido. Prático.
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Tudo que você precisa pra gerenciar suas OS. Sem complicação. Feito pro prestador de serviço que trabalha na rua.
          </p>
        </div>

        {/* 1. OS POR ÁUDIO (Opcional) */}
        <FeatureCard 
          title="1. Fale que o sistema escreve"
          description="Clica no '+' e fala o que você fez. O sistema escreve tudo sozinho. Não precisa digitar nada. Muito mais rápido."
          illustration={VoiceReportIllustration}
          icon={<Mic />}
        />

        {/* 2. CADASTRO RÁPIDO E STATUS SIMPLES */}
        <FeatureCard 
          title="2. Cadastro rápido e controle fácil"
          description="Cadastra o cliente só com nome e telefone. Controla suas OS em 3 lugares: Pra fazer, Fazendo e Pronto. Simples assim."
          illustration={SmartRemindersIllustration}
          icon={<Zap />}
          reverse
        />

        {/* 3. RELATÓRIO RÁPIDO NO WHATSAPP (2 CLIQUES) */}
        <FeatureCard 
          title="3. Envia o recibo pelo WhatsApp"
          description="Quando termina o serviço, marca como pronto. O sistema cria um PDF bonito e abre o WhatsApp pra você enviar pro cliente. Em 2 cliques tá feito."
          illustration={DigitalReportsIllustration}
          icon={<MessageSquare />}
        />

      </div>
    </section>
  );
}

// Exemplo de como usar no LandingPageModern.tsx:
// Adicione o import: import FeatureSection from './FeatureSection';
// Substitua o código de ProcessStep por: <FeatureSection />