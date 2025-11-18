"use client";

import React from 'react';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-dark-950/80 backdrop-blur-md z-50 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <img 
              src="/logo.png" 
              alt="OSZap" 
              className="h-8 w-auto object-contain brightness-0 invert" 
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            {/* Fallback text styled like the logo in image */}
            <span className="hidden font-extrabold text-2xl text-white tracking-tight">
              OSZap<span className="text-brand-500">!</span>
            </span>
          </div>

          <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
            <a href="#problemas" className="hover:text-brand-500 transition-colors">Problemas</a>
            <a href="#funcionalidades" className="hover:text-brand-500 transition-colors">Funcionalidades</a>
            <a href="#demo" className="hover:text-brand-500 transition-colors">Testar IA</a>
            <a href="#preco" className="hover:text-brand-500 transition-colors">Preço</a>
          </nav>

          <div className="hidden md:flex items-center">
            <a 
              href="#waitlist"
              className="bg-brand-600 hover:bg-brand-500 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-brand-500/20 hover:shadow-brand-500/40"
            >
              Quero Acesso Antecipado
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white p-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-dark-900 border-t border-white/10 p-4 space-y-4 shadow-lg absolute w-full">
          <a href="#problemas" className="block text-gray-300 font-medium hover:text-brand-500" onClick={() => setIsMenuOpen(false)}>Problemas</a>
          <a href="#funcionalidades" className="block text-gray-300 font-medium hover:text-brand-500" onClick={() => setIsMenuOpen(false)}>Funcionalidades</a>
          <a href="#demo" className="block text-gray-300 font-medium hover:text-brand-500" onClick={() => setIsMenuOpen(false)}>Testar IA</a>
          <a href="#preco" className="block text-gray-300 font-medium hover:text-brand-500" onClick={() => setIsMenuOpen(false)}>Preço</a>
          <a href="#waitlist" className="block w-full text-center bg-brand-600 text-white py-3 rounded-lg font-bold shadow-lg shadow-brand-500/20" onClick={() => setIsMenuOpen(false)}>
            Quero Acesso Antecipado
          </a>
        </div>
      )}
    </header>
  );
};