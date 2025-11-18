import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section id="preco" className="py-24 bg-dark-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
           <span className="inline-block px-4 py-1 rounded-full border border-brand-500/30 bg-brand-900/20 text-brand-500 font-bold tracking-wider uppercase text-xs mb-4">
            Oferta Limitada
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Vagas Limitadas - <span className="text-brand-500">Seja um dos Primeiros</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Glow behind card */}
            <div className="absolute inset-0 bg-brand-500/20 blur-[60px] rounded-[3rem]"></div>
            
            <div className="relative bg-[#120804] rounded-[2rem] border border-brand-900/50 overflow-hidden">
              <div className="p-8 md:p-12 text-center">
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">3 Meses Grátis</h3>
                <p className="text-xl text-brand-500 font-medium mb-8">+ 50% OFF vitalício</p>
                
                <div className="flex items-end justify-center gap-3 mb-8">
                   <span className="text-gray-500 line-through mb-1">R$ 69,90/mês</span>
                   <span className="text-gray-400 mb-1">para</span>
                   <span className="text-4xl md:text-5xl font-bold text-brand-500">R$ 34,95</span>
                   <span className="text-gray-400 mb-1">/mês para sempre</span>
                </div>

                <div className="w-full h-px bg-brand-900/30 mb-8"></div>

                <p className="text-brand-400 flex items-center justify-center gap-2 mb-8 text-sm font-medium">
                  <Check className="w-4 h-4" />
                  Oferta válida após o lançamento
                </p>

                <a 
                  href="#waitlist"
                  className="inline-flex items-center justify-center w-full md:w-auto px-10 py-4 bg-brand-600 hover:bg-brand-500 text-white text-lg font-bold rounded-xl transition-all shadow-[0_0_30px_-5px_rgba(249,115,22,0.4)] hover:shadow-[0_0_50px_-5px_rgba(249,115,22,0.5)] hover:scale-105"
                >
                  QUERO SER UM DOS PRIMEIROS
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>

                <p className="mt-6 text-sm text-gray-500">
                  Vagas limitadas • Me diga o que achou e ganhe o desconto pra sempre
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};