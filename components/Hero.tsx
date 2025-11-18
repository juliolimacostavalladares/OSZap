"use client";

import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="pt-40 pb-24 overflow-hidden bg-dark-950 relative">
      {/* Dark Decorative background blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden z-0 pointer-events-none">
         <div className="absolute top-[-10%] left-[20%] w-96 h-96 bg-brand-600/20 rounded-full filter blur-[100px] opacity-40 animate-blob"></div>
         <div className="absolute top-[20%] right-[10%] w-72 h-72 bg-purple-600/10 rounded-full filter blur-[80px] opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-400 font-semibold text-sm mb-8 uppercase tracking-wider"
          >
            <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
            Feito para Prestadores de Serviço
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-8"
          >
            Chega de Papelada <br/>
            <span className="text-brand-500">e Planilhas!</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-2xl md:text-4xl font-bold mb-8"
          >
             A Gestão de OS Mais <span className="text-brand-500">Rápida</span> para <br className="hidden md:block" /> Prestadores de Serviço
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Crie uma OS em <strong className="text-brand-400">segundos</strong>, veja tudo que você tem pra fazer hoje e envie o recibo pro cliente direto no <strong className="text-brand-400">WhatsApp</strong>. Tudo no seu celular.
          </motion.p>

          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.3 }}
             className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a 
              href="#waitlist" 
              className="w-full sm:w-auto px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white rounded-xl font-bold text-lg shadow-[0_0_40px_-10px_rgba(249,115,22,0.5)] hover:shadow-[0_0_60px_-10px_rgba(249,115,22,0.6)] flex items-center justify-center gap-2 transition-all transform hover:scale-105 border border-brand-500"
            >
              QUERO SER UM DOS PRIMEIROS
              <ArrowRight className="w-5 h-5" />
            </a>
            <div className="text-sm text-gray-500 max-w-xs sm:text-left text-center">
              Vagas limitadas - Os primeiros ganham <span className="text-white">3 meses grátis</span>.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};