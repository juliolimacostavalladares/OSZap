import React from 'react';
import { Mic, Calendar, FileCheck } from 'lucide-react';

const FeatureRow: React.FC<{
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  isReversed?: boolean;
}> = ({ number, title, subtitle, description, icon, isReversed = false }) => {
  return (
    <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-16 mb-24 last:mb-0`}>
      <div className="w-full md:w-1/2">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-500/30 bg-brand-950/30 text-brand-500 font-bold text-xs mb-6 uppercase tracking-wider">
          {icon}
          <span>Funcionalidade Inteligente</span>
        </div>
        
        <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
          {number}. {title} <br/>
          <span className="text-brand-500">{subtitle}</span>
        </h3>
        
        <div className="h-1 w-24 bg-brand-600 my-6 rounded-full"></div>

        <p className="text-gray-400 text-lg leading-relaxed max-w-md">
          {description}
        </p>
      </div>

      <div className="w-full md:w-1/2 relative">
        {/* Abstract Representation of Feature Image */}
        <div className="aspect-square rounded-[2.5rem] bg-[#0B1121] border border-white/5 relative overflow-hidden shadow-2xl group">
           <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 to-transparent opacity-50"></div>
           
           {/* Inner graphic placeholder mimicking the mockup vibe */}
           <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 rounded-full border-2 border-brand-500/20 flex items-center justify-center animate-[spin_10s_linear_infinite]">
                 <div className="w-48 h-48 rounded-full border border-brand-500/40 border-dashed"></div>
              </div>
              <div className="absolute">
                 <div className="w-20 h-20 bg-brand-500 rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(249,115,22,0.4)]">
                    {/* Fix: Cast icon to ReactElement with className prop to resolve TypeScript overload error */}
                    {React.cloneElement(icon as React.ReactElement<{ className?: string }>, { className: 'w-10 h-10 text-white' })}
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export const Features: React.FC = () => {
  return (
    <section id="funcionalidades" className="py-24 bg-dark-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Funcionalidades do <span className="text-brand-500">MVP</span>
          </h2>
          <p className="text-xl text-gray-400">
            Simples, Rápido, Prático. Tudo que você precisa pra gerenciar suas OS.
          </p>
        </div>

        <FeatureRow
          icon={<Mic className="w-4 h-4" />}
          number="1"
          title="Fale que o sistema"
          subtitle="escreve"
          description="Clica no '+' e fala o que você fez. O sistema escreve tudo sozinho. Não precisa digitar nada. Muito mais rápido."
          isReversed={false}
        />

        <FeatureRow
          icon={<Calendar className="w-4 h-4" />}
          number="2"
          title="Cadastro rápido e"
          subtitle="controle fácil"
          description="Cadastra o cliente só com nome e telefone. Controla suas OS em 3 lugares: Pra fazer, Fazendo e Pronto. Simples assim."
          isReversed={true}
        />

        <FeatureRow
          icon={<FileCheck className="w-4 h-4" />}
          number="3"
          title="Envia o recibo pelo"
          subtitle="WhatsApp"
          description="Quando termina o serviço, marca como pronto. O sistema cria um PDF bonito e abre o WhatsApp pra você enviar pro cliente. Em 2 cliques tá feito."
          isReversed={false}
        />
      </div>
    </section>
  );
};