"use client";

import React, { useState } from 'react';
import { Send } from 'lucide-react';

export const WaitlistForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  if (submitted) {
    return (
      <section id="waitlist" className="py-20 bg-dark-950 text-white text-center px-4">
        <div className="max-w-xl mx-auto bg-[#0B1121] p-10 rounded-3xl border border-brand-500/20 shadow-2xl shadow-brand-900/20">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
             <Send className="w-8 h-8 text-green-500" />
          </div>
          <h3 className="text-3xl font-bold mb-4 text-white">Parabéns! 🎉</h3>
          <p className="text-xl text-gray-300">Você entrou na lista de espera.</p>
          <p className="mt-4 text-gray-500">Assim que liberarmos o acesso, você receberá um email com seu link exclusivo de 3 meses grátis.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist" className="py-24 bg-dark-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B1121] border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl text-center relative overflow-hidden">
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Garanta sua vaga
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Preencha abaixo para garantir os <span className="text-brand-500 font-bold">3 meses grátis</span> e o desconto vitalício.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto text-left">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Seu Nome</label>
                <input 
                  required
                  type="text" 
                  id="name"
                  placeholder="João da Silva"
                  className="w-full px-4 py-3 rounded-xl bg-black/50 border border-gray-800 text-white placeholder-gray-600 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Seu Melhor Email</label>
                <input 
                  required
                  type="email" 
                  id="email"
                  placeholder="joao@email.com"
                  className="w-full px-4 py-3 rounded-xl bg-black/50 border border-gray-800 text-white placeholder-gray-600 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <label htmlFor="feedback" className="block text-sm font-medium text-gray-400 mb-1">O que você achou da ideia? (Opcional)</label>
                <textarea 
                  id="feedback"
                  rows={2}
                  placeholder="Achei muito bom porque..."
                  className="w-full px-4 py-3 rounded-xl bg-black/50 border border-gray-800 text-white placeholder-gray-600 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-brand-600 hover:bg-brand-500 text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 mt-4 shadow-lg shadow-brand-900/20"
              >
                <Send className="w-5 h-5" />
                Entrar na Lista VIP
              </button>
              <p className="text-xs text-gray-600 text-center mt-3">
                Prometemos zero spam.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};