"use client";

import React from 'react';
import { Instagram, Facebook, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-extrabold text-2xl text-white tracking-tight">
                OSZap<span className="text-brand-500">!</span>
              </span>
            </div>
            <p className="text-gray-500 max-w-xs">
              A ferramenta definitiva para prestadores de serviço. Menos papel, mais lucro.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Produto</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#problemas" className="hover:text-brand-500 transition-colors">Problemas</a></li>
              <li><a href="#funcionalidades" className="hover:text-brand-500 transition-colors">Funcionalidades</a></li>
              <li><a href="#preco" className="hover:text-brand-500 transition-colors">Preço</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Contato</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-brand-500 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-500 hover:text-brand-500 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-500 hover:text-brand-500 transition-colors"><MessageCircle size={20} /></a>
            </div>
            <a href="mailto:contato@oszap.com.br" className="block mt-4 text-sm text-gray-500 hover:text-brand-500">
              contato@oszap.com.br
            </a>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} OSZap Tecnologia. Todos os direitos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};