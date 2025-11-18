import React from 'react';
import { PhoneOff, FileWarning, MousePointerClick } from 'lucide-react';

const ProblemCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => (
  <div className="bg-[#0B1121] p-8 rounded-3xl border border-white/5 shadow-2xl hover:border-brand-500/30 transition-colors duration-300 group">
    <div className="w-14 h-14 bg-[#1A1F2E] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </div>
);

export const Problems: React.FC = () => {
  return (
    <section id="problemas" className="py-24 bg-dark-950 relative">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-900/10 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 rounded-full border border-brand-500/30 bg-brand-900/20 text-brand-500 font-bold tracking-wider uppercase text-xs mb-4">
            Problemas Resolvidos
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Chega de perder <span className="text-brand-500">dinheiro!</span>
          </h2>
          <p className="text-gray-400 text-lg">
            O OSZap resolve os 3 problemas que mais te atrapalham
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <ProblemCard 
            icon={<PhoneOff className="w-6 h-6 text-brand-500" />}
            title="Esqueceu de ligar pro cliente?"
            description="O sistema lembra você de revisões e manutenções. Nunca mais perca um cliente por esquecimento."
          />
          <ProblemCard 
            icon={<FileWarning className="w-6 h-6 text-brand-500" />}
            title="Perdeu o recibo?"
            description="Envia o recibo pelo WhatsApp na hora. Em 2 cliques, o cliente já recebe o PDF no celular dele."
          />
          <ProblemCard 
            icon={<MousePointerClick className="w-6 h-6 text-brand-500" />}
            title="Sistema difícil de usar?"
            description="Tudo no celular. Sem enrolação. 3 cliques e sua OS tá pronta. Simples assim."
          />
        </div>
      </div>
    </section>
  );
};