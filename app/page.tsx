"use client";

// Crie este arquivo em src/components/LandingPageModern.tsx

import React, { useEffect, useRef, useState } from 'react';
import { Check, MessageSquare, Mic, Zap, TrendingUp, X } from 'lucide-react'; 
import Link from 'next/link';
import FeatureSection from './FeatureSection';

// --- Componente para Reiniciar Animação ao Entrar na Tela ---

const AnimatedFlowSection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [animationKey, setAnimationKey] = useState(0);
  const wasVisibleRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const isVisible = entry.isIntersecting;
          const wasVisible = wasVisibleRef.current;

          if (isVisible && !wasVisible) {
            // Elemento entrou na tela (primeira vez ou após ter saído) - reinicia animação
            setAnimationKey((prev) => prev + 1);
            wasVisibleRef.current = true;
          } else if (!isVisible && wasVisible) {
            // Elemento saiu da tela
            wasVisibleRef.current = false;
          }
        });
      },
      {
        threshold: 0.15, // Quando 15% do elemento estiver visível
        rootMargin: '0px',
      }
    );

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div ref={containerRef} key={animationKey}>
      {children}
    </div>
  );
};

// --- Interfaces para Tipagem ---

interface PainPointCardProps {
  title: string;
  description: string;
  icon: React.ReactElement;
}

interface ProcessStepProps {
  step: string;
  title: string;
  description: string;
  icon: React.ReactElement;
}

// --- Componentes Auxiliares (Com Estilo Mais Sofisticado) ---

// Componente para as Dores (usando sombra sutil e design limpo)
const PainPointCard: React.FC<PainPointCardProps> = ({ title, description, icon }) => (
    <div className="p-8 bg-gray-900 rounded-2xl shadow-lg border border-gray-800 text-center transition duration-300 hover:shadow-xl hover:border-orange-500">
        <div className="mx-auto w-12 h-12 bg-orange-500/10 ring-2 ring-orange-500/20 rounded-full flex items-center justify-center mb-4">
            {icon}
        </div>
        <h3 className="font-bold text-xl mb-2 text-white">{title}</h3>
        <p className="text-gray-400 text-base">{description}</p>
    </div>
);

// Componente para os Passos (Estilo 'Card de Informação' com Sombra Forte)
const ProcessStep: React.FC<ProcessStepProps> = ({ step, title, description, icon }) => (
    <div className="bg-gray-900 p-8 rounded-2xl shadow-2xl border border-gray-800 transition duration-300 hover:scale-[1.03] hover:shadow-orange-500/20">
        <div className="mb-4 flex items-center">
            {/* Número em destaque com fundo de contraste */}
            <div className="text-xl font-extrabold text-gray-900 bg-orange-500 w-10 h-10 rounded-full flex items-center justify-center mr-4">{step}</div>
            {React.cloneElement(icon as React.ReactElement<any>, { className: 'w-7 h-7 text-orange-500' })}
        </div>
        <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
);

// --- Componente Principal ---

export default function LandingPageModern() {
  return (
    <div className="bg-gray-950 text-white min-h-screen">
      
      {/* 1. SEÇÃO HERO (Oferta Principal - Gradiente de Fundo e Layout Focado) */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 text-center overflow-hidden">
        {/* Background sofisticado */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-950 to-gray-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(249,115,22,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(249,115,22,0.1),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          
          {/* Badge Moderno */}
          <div className="inline-flex items-center gap-2 text-orange-500 bg-orange-500/10 backdrop-blur-sm border border-orange-500/20 px-4 py-2 rounded-full text-xs font-bold tracking-wide uppercase mb-8 shadow-lg shadow-orange-500/10">
            <Zap className="w-4 h-4" />
            <span>Feito para Prestadores de Serviço</span>
          </div>

          {/* Título Principal */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1] text-white">
            Chega de Papelada e Planilhas!
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-8 leading-[1.1] text-white">
            A Gestão de OS Mais{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
                Rápida
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-orange-400/20 blur-2xl"></span>
            </span>
            {' '}para Prestadores de Serviço
          </h2>
          
          {/* Subtítulo */}
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Crie uma OS em <strong className="text-orange-500">segundos</strong>, veja tudo que você tem pra fazer hoje e{' '}
            <strong className="text-white">envie o recibo</strong> pro cliente direto no{' '}
            <strong className="text-orange-500">WhatsApp</strong>. Tudo no seu celular.
          </p>
          
          {/* Botão CTA Principal Moderno */}
          <Link href="/beta" className="relative inline-block group mb-4">
            {/* Efeito de brilho no hover */}
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
            
            {/* Botão */}
            <div className="relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 md:px-12 rounded-2xl text-lg md:text-xl shadow-2xl shadow-orange-500/30 transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-orange-500/50">
              <span className="relative z-10 flex items-center gap-3">
                <span>QUERO SER UM DOS PRIMEIROS</span>
                <span className="hidden md:inline">→</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          </Link>
          
          {/* Oferta Especial */}
          <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-4 md:p-6 max-w-2xl mx-auto mb-4">
            <p className="text-sm md:text-base text-gray-300 leading-relaxed">
              <strong className="text-orange-500">Vagas limitadas</strong> - Os primeiros ganham{' '}
              <strong className="text-white">3 meses grátis</strong> quando lançar e depois pagam só{' '}
              <strong className="text-orange-500">R$ 34,95/mês</strong> pra sempre.{' '}
              Só preciso que você me diga o que achou do sistema.
            </p>
          </div>
          
          {/* Preço Normal */}
          <p className="text-xs text-gray-500">
            Depois vai custar: <span className="line-through">R$ 69,90/mês</span>
          </p>
          
          {/* Mockup com Fluxo Animado */}
          <AnimatedFlowSection>
            <div className="mt-20 mx-auto max-w-6xl group">
              <div className="relative">
                {/* Efeito de brilho no hover */}
                <div className="absolute -inset-3 bg-gradient-to-br from-orange-500/30 via-orange-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-700"></div>
                
                {/* Container do mockup */}
                <div className="relative bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 rounded-3xl shadow-2xl border border-gray-800/50 overflow-hidden transition-all duration-500 group-hover:border-orange-500/50 group-hover:shadow-orange-500/20">
                  {/* Barra superior do mockup - estilo macOS */}
                  <div className="bg-gray-800/60 backdrop-blur-sm border-b border-orange-500/30 px-6 py-3.5 flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-red-500 shadow-sm"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-sm"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500 shadow-sm"></div>
                    <div className="flex-1"></div>
                    <div className="text-xs text-gray-400 font-medium">OSZap</div>
                  </div>
                  
                  {/* Conteúdo do mockup com fluxo */}
                  <div className="relative bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 p-8 md:p-12 min-h-[500px] md:min-h-[600px] flex flex-col items-center justify-center overflow-visible">
                  {/* Efeito de fundo sutil */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.1),transparent_70%)]"></div>
                  
                  {/* Estado 1: Gravando com Transcrição Simulada */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center z-10 animate-[fadeInOut_9s_infinite] px-4" style={{animationName: 'fadeInOut', animationDuration: '9s', animationIterationCount: 'infinite', animationTimingFunction: 'linear'}}>
                    <div className="relative mb-4">
                      <div className="absolute inset-0 bg-orange-500/30 rounded-full blur-2xl animate-pulse"></div>
                      <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-xl"></div>
                      <Mic className="relative w-16 h-16 md:w-20 md:h-20 text-orange-500 drop-shadow-lg"/>
                      {/* Ondas sonoras animadas */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 md:w-32 md:h-32 border-2 border-orange-500/30 rounded-full animate-ping"></div>
                      </div>
                    </div>
                    <div className="text-center mb-4">
                      <p className="text-xl md:text-2xl font-bold text-white leading-tight mb-1">
                        Gravando seu relatório...
                      </p>
                      <p className="text-sm md:text-base text-gray-400">
                        Fale o que você fez no serviço
                      </p>
                    </div>
                    
                    {/* Área de Transcrição Simulada */}
                    <div className="w-full max-w-md bg-gray-800/50 border border-gray-700/50 rounded-lg p-4 backdrop-blur-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                        <span className="text-xs text-gray-400 font-medium">Transcrevendo em tempo real...</span>
                      </div>
                      <div className="min-h-[100px] text-left">
                        <p className="text-sm text-gray-300 leading-relaxed">
                          <span className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-orange-500" style={{animation: 'typing 3s steps(60,end) infinite, blink 1s step-end infinite'}}>
                            Realizei a manutenção preventiva no ar condicionado do cliente. Limpei os filtros, verifiquei o gás refrigerante e testei o funcionamento. Tudo está funcionando perfeitamente.
                          </span>
                        </p>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                      <span className="text-xs text-gray-400 font-medium">Gravando...</span>
                    </div>
                  </div>

                  {/* Estado 2: Processando */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4" style={{animationName: 'fadeInOut2', animationDuration: '9s', animationIterationCount: 'infinite', animationTimingFunction: 'linear'}}>
                    <div className="relative mb-8">
                      <div className="w-24 h-24 md:w-28 md:h-28 border-4 border-orange-500/30 border-t-orange-500 rounded-full animate-spin"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Zap className="w-12 h-12 md:w-14 md:h-14 text-orange-500"/>
                      </div>
                    </div>
                    <div className="text-center space-y-3">
                      <p className="text-2xl md:text-3xl font-bold text-white leading-tight">
                        Processando com IA...
                      </p>
                      <p className="text-base md:text-lg text-gray-300 font-medium">
                        Transcrevendo e formatando
                      </p>
                    </div>
                  </div>

                  {/* Estado 3: Relatório Pronto */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4 overflow-visible py-4" style={{animationName: 'fadeInOut3', animationDuration: '9s', animationIterationCount: 'infinite', animationTimingFunction: 'linear'}}>
                    {/* Badge PDF + WhatsApp */}
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center gap-1.5 bg-red-500/20 border border-red-500/30 px-3 py-1.5 rounded-full">
                        <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd"/>
                          <path fillRule="evenodd" d="M8 0a2 2 0 00-2 2v2h4V2a2 2 0 00-2-2z" clipRule="evenodd"/>
                        </svg>
                        <span className="text-xs font-bold text-red-500">PDF</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-green-500/20 border border-green-500/30 px-3 py-1.5 rounded-full">
                        <MessageSquare className="w-4 h-4 text-green-500"/>
                        <span className="text-xs font-bold text-green-500">WhatsApp</span>
                      </div>
                    </div>
                    
                    {/* SVG do Relatório - PDF Profissional */}
                    <div className="relative mb-2 w-full max-w-[280px]">
                      <svg viewBox="0 0 300 380" className="w-full h-auto drop-shadow-2xl" preserveAspectRatio="xMidYMid meet">
                        <defs>
                          {/* Gradiente para o fundo do PDF */}
                          <linearGradient id="pdfGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#FFFFFF" />
                            <stop offset="100%" stopColor="#F9FAFB" />
                          </linearGradient>
                          {/* Gradiente para o cabeçalho */}
                          <linearGradient id="headerGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#1F2937" />
                            <stop offset="100%" stopColor="#111827" />
                          </linearGradient>
                          {/* Sombra suave */}
                          <filter id="shadow">
                            <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#000000" floodOpacity="0.2"/>
                          </filter>
                        </defs>
                        
                        {/* Sombra do documento */}
                        <rect x="10" y="10" width="280" height="360" rx="6" fill="#000000" opacity="0.15" filter="url(#shadow)"/>
                        
                        {/* Documento principal - Estilo PDF */}
                        <rect x="0" y="0" width="300" height="380" rx="6" fill="url(#pdfGradient)" stroke="#E5E7EB" strokeWidth="1.5"/>
                        
                        {/* Cabeçalho profissional */}
                        <rect x="0" y="0" width="300" height="70" rx="6" fill="url(#headerGradient)"/>
                        <rect x="0" y="0" width="300" height="5" fill="#F97316"/>
                        
                        {/* Logo e título */}
                        <text x="20" y="30" fontSize="16" fontWeight="bold" fill="#F97316" fontFamily="Arial, sans-serif">OSZap</text>
                        <text x="20" y="48" fontSize="11" fill="#9CA3AF" fontFamily="Arial, sans-serif">ORDEM DE SERVIÇO</text>
                        <text x="20" y="62" fontSize="9" fill="#6B7280" fontFamily="Arial, sans-serif">OS #001234</text>
                        
                        {/* Data no canto direito do cabeçalho */}
                        <text x="250" y="30" fontSize="9" fill="#9CA3AF" textAnchor="end" fontFamily="Arial, sans-serif">Data: 15/11/2024</text>
                        
                        {/* Linha divisória */}
                        <line x1="0" y1="70" x2="300" y2="70" stroke="#E5E7EB" strokeWidth="1"/>
                        
                        {/* Informações do Cliente - Estilo profissional */}
                        <g transform="translate(20, 85)">
                          <text x="0" y="0" fontSize="9" fontWeight="bold" fill="#374151" fontFamily="Arial, sans-serif" letterSpacing="0.5">CLIENTE</text>
                          <rect x="0" y="5" width="260" height="1" fill="#E5E7EB"/>
                          <text x="0" y="22" fontSize="13" fontWeight="600" fill="#111827" fontFamily="Arial, sans-serif">João Silva</text>
                          <text x="0" y="36" fontSize="10" fill="#6B7280" fontFamily="Arial, sans-serif">Telefone: (22) 99999-9999</text>
                        </g>
                        
                        {/* Data e Status em cards modernos */}
                        <g transform="translate(20, 135)">
                          <rect x="0" y="0" width="120" height="38" rx="4" fill="#F9FAFB" stroke="#E5E7EB" strokeWidth="1"/>
                          <text x="10" y="14" fontSize="8" fontWeight="600" fill="#6B7280" fontFamily="Arial, sans-serif" letterSpacing="0.3">DATA DO SERVIÇO</text>
                          <text x="10" y="30" fontSize="11" fontWeight="600" fill="#111827" fontFamily="Arial, sans-serif">15/11/2024</text>
                          
                          <rect x="130" y="0" width="130" height="38" rx="4" fill="#ECFDF5" stroke="#22C55E" strokeWidth="1.5"/>
                          <text x="140" y="14" fontSize="8" fontWeight="600" fill="#059669" fontFamily="Arial, sans-serif" letterSpacing="0.3">STATUS</text>
                          <text x="195" y="30" textAnchor="middle" fontSize="10" fontWeight="700" fill="#22C55E" fontFamily="Arial, sans-serif">✓ CONCLUÍDO</text>
                        </g>
                        
                        {/* Descrição do Serviço - Estilo profissional */}
                        <g transform="translate(20, 185)">
                          <text x="0" y="0" fontSize="10" fontWeight="700" fill="#374151" fontFamily="Arial, sans-serif" letterSpacing="0.5">DESCRIÇÃO DO SERVIÇO</text>
                          <rect x="0" y="6" width="260" height="1" fill="#E5E7EB"/>
                          <rect x="0" y="12" width="260" height="65" rx="4" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1"/>
                          <text x="8" y="26" fontSize="9" fill="#374151" fontFamily="Arial, sans-serif">
                            <tspan x="8" dy="0">Realizei a manutenção preventiva no</tspan>
                            <tspan x="8" dy="13">ar condicionado do cliente. Limpei</tspan>
                            <tspan x="8" dy="13">os filtros, verifiquei o gás</tspan>
                            <tspan x="8" dy="13">refrigerante e testei o funcionamento.</tspan>
                            <tspan x="8" dy="13">Tudo está funcionando perfeitamente.</tspan>
                          </text>
                        </g>
                        
                        {/* Valor Total - Destaque profissional */}
                        <g transform="translate(20, 270)">
                          <rect x="0" y="0" width="260" height="1" fill="#E5E7EB"/>
                          <rect x="0" y="8" width="260" height="45" rx="4" fill="#FFF7ED" stroke="#F97316" strokeWidth="1.5"/>
                          <text x="10" y="25" fontSize="9" fontWeight="600" fill="#9A3412" fontFamily="Arial, sans-serif" letterSpacing="0.3">VALOR TOTAL</text>
                          <text x="10" y="42" fontSize="20" fontWeight="700" fill="#F97316" fontFamily="Arial, sans-serif">R$ 150,00</text>
                        </g>
                        
                        {/* Rodapé profissional */}
                        <g transform="translate(20, 330)">
                          <rect x="0" y="0" width="260" height="1" fill="#E5E7EB"/>
                          <g transform="translate(0, 10)">
                            <circle cx="8" cy="8" r="7" fill="#22C55E"/>
                            <path d="M 5 8 L 7 10 L 11 6" stroke="white" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                            <text x="20" y="12" fontSize="9" fill="#059669" fontWeight="600" fontFamily="Arial, sans-serif">Serviço concluído com sucesso</text>
                          </g>
                        </g>
                        
                        {/* Badge de WhatsApp flutuante */}
                        <g transform="translate(255, 345)">
                          <circle cx="0" cy="0" r="20" fill="#25D366" filter="url(#shadow)"/>
                          <circle cx="0" cy="0" r="18" fill="#25D366"/>
                          <path d="M -7 -4 Q -7 -6, -5 -6 L 5 -6 Q 7 -6, 7 -4 L 7 4 Q 7 6, 5 6 L -2 6 L -5 9 L -5 4 Q -5 2, -7 2 Z" fill="white" opacity="0.95"/>
                          <circle cx="-2" cy="0" r="1.2" fill="#25D366"/>
                          <circle cx="2" cy="0" r="1.2" fill="#25D366"/>
                        </g>
                        
                        {/* Indicador de PDF no canto superior direito */}
                        <g transform="translate(265, 8)">
                          <rect x="0" y="0" width="27" height="27" rx="4" fill="#DC2626"/>
                          <text x="13.5" y="18" textAnchor="middle" fontSize="8" fontWeight="700" fill="white" fontFamily="Arial, sans-serif">PDF</text>
                        </g>
                      </svg>
                      
                      {/* Efeito de brilho verde */}
                      <div className="absolute inset-0 bg-green-500/10 rounded-lg blur-2xl animate-pulse"></div>
                    </div>
                    
                    <div className="text-center space-y-1 mt-1">
                      <p className="text-lg md:text-xl font-bold text-white leading-tight">
                        PDF Pronto!
                      </p>
                      <p className="text-xs md:text-sm text-gray-300 font-medium">
                        Envie pelo WhatsApp em 2 cliques
                      </p>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedFlowSection>
        </div>
      </section>

      {/* 2. SEÇÃO DE DORES (O Porquê - Agora com ênfase no que o cliente perde) */}
      <section className="py-20 md:py-28 bg-gray-900">
        <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-white">
              Chega de perder dinheiro!
            </h2>
            <p className="text-lg text-gray-400 text-center mb-16">
              O OSZap resolve os 3 problemas que mais te atrapalham
            </p>
            <div className="grid md:grid-cols-3 gap-10">
                
                <PainPointCard 
                    title="Esqueceu de ligar pro cliente?" 
                    description="O sistema lembra você de revisões e manutenções. Nunca mais perca um cliente por esquecimento."
                    icon={<X className="w-6 h-6 text-orange-500" />} 
                />
                
                <PainPointCard 
                    title="Perdeu o recibo?" 
                    description="Envia o recibo pelo WhatsApp na hora. Em 2 cliques, o cliente já recebe o PDF no celular dele."
                    icon={<MessageSquare className="w-6 h-6 text-orange-500" />}
                />
                
                <PainPointCard 
                    title="Sistema difícil de usar?" 
                    description="Tudo no celular. Sem enrolação. 3 cliques e sua OS tá pronta. Simples assim."
                    icon={<Zap className="w-6 h-6 text-orange-500" />}
                />
            </div>
        </div>
      </section>

      {/* 3. SEÇÃO "O PROCESSO" (3 Passos Simplificados) */}
      <section className="py-0 bg-gray-950 border-t border-b border-gray-800">
        <div className="container mx-auto px-4">
            <FeatureSection />
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background com gradiente e efeitos */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.1),transparent_70%)]"></div>
        <div className="absolute inset-0 border-t border-b border-gray-800/50"></div>
        
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 text-orange-500 bg-orange-500/10 border border-orange-500/20 px-4 py-2 rounded-full text-xs font-bold tracking-wide uppercase mb-8">
              <Zap className="w-4 h-4" />
              <span>Oferta Limitada</span>
            </div>
            
            {/* Título Principal */}
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-white leading-tight tracking-tight">
              Vagas Limitadas - Seja um dos Primeiros
            </h2>
            
            {/* Subtítulo */}
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Vagas limitadas! Seja um dos primeiros. Quando lançar, você ganha 3 meses grátis e depois paga metade do preço pra sempre.
            </p>
            
            {/* Oferta destacada */}
            <div className="bg-gradient-to-r from-orange-500/10 to-orange-400/10 border border-orange-500/30 rounded-xl p-6 md:p-8 max-w-xl mx-auto mb-8">
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-white mb-2">
                  3 Meses Grátis
                </p>
                <p className="text-gray-300 mb-2">
                  + 50% OFF vitalício
                </p>
                <p className="text-sm text-gray-400 mb-3">
                  De <span className="line-through">R$ 69,90/mês</span> para{' '}
                  <span className="text-orange-500 font-bold text-lg">R$ 34,95/mês</span> para sempre
                </p>
                <p className="text-xs text-orange-400 font-medium border-t border-orange-500/30 pt-3 mt-3">
                  ✓ Oferta válida após o lançamento
                </p>
              </div>
            </div>
            
            {/* Botão CTA Moderno */}
            <Link href="/beta" className="relative inline-block group">
              {/* Efeito de brilho no hover */}
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
              
              {/* Botão */}
              <div className="relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-10 md:px-16 rounded-2xl text-lg md:text-xl shadow-2xl shadow-orange-500/30 transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-orange-500/50">
                <span className="relative z-10 flex items-center gap-3">
                  <span>QUERO SER UM DOS PRIMEIROS</span>
                  <span className="hidden md:inline">→</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            </Link>
            
            {/* Texto de garantia */}
            <p className="mt-8 text-sm text-gray-500 flex items-center justify-center gap-2">
              <Check className="w-4 h-4 text-orange-500" />
              <span>Vagas limitadas • Me diga o que achou e ganhe o desconto pra sempre</span>
            </p>
          </div>
        </div>
        </section>

    </div>
  );
}