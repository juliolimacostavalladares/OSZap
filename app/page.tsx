"use client";

// Crie este arquivo em src/components/LandingPageModern.tsx

import React, { useEffect, useRef, useState } from "react";
import { Check, MessageSquare, Mic, Zap, TrendingUp, X } from "lucide-react";
import Link from "next/link";
import FeatureSection from "../components/FeatureSection";
import HoverPlayCard from "@/components/hover-play-card";

// --- Componente para Reiniciar Animação ao Entrar na Tela ---

const AnimatedFlowSection: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
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
        rootMargin: "0px",
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

// Componente para as Dores (design moderno com efeitos avançados)
const PainPointCard: React.FC<PainPointCardProps> = ({
  title,
  description,
  icon,
}) => (
  <div className="group relative p-8 md:p-10 bg-gradient-to-br from-gray-900/80 via-gray-900/90 to-gray-800/80 backdrop-blur-sm rounded-3xl border border-gray-800/50 text-center transition-all duration-500 hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-2">
    {/* Efeito de brilho no hover */}
    <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500/0 via-orange-500/20 to-orange-500/0 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>

    {/* Conteúdo */}
    <div className="relative z-10">
      <div className="mx-auto w-16 h-16 bg-gradient-to-br from-orange-500/20 to-orange-500/10 ring-2 ring-orange-500/30 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:ring-orange-500/50 group-hover:shadow-lg group-hover:shadow-orange-500/20">
        {icon}
      </div>
      <h3 className="font-bold text-xl md:text-2xl mb-4 text-white group-hover:text-orange-400 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-300 text-base md:text-lg leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
        {description}
      </p>
    </div>
  </div>
);

// Componente para os Passos (Estilo 'Card de Informação' com Sombra Forte)
const ProcessStep: React.FC<ProcessStepProps> = ({
  step,
  title,
  description,
  icon,
}) => (
  <div className="bg-gray-900 p-8 rounded-2xl shadow-2xl border border-gray-800 transition duration-300 hover:scale-[1.03] hover:shadow-orange-500/20">
    <div className="mb-4 flex items-center">
      {/* Número em destaque com fundo de contraste */}
      <div className="text-xl font-extrabold text-gray-900 bg-orange-500 w-10 h-10 rounded-full flex items-center justify-center mr-4">
        {step}
      </div>
      {React.cloneElement(icon as React.ReactElement<any>, {
        className: "w-7 h-7 text-orange-500",
      })}
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

        <div className="w-full px-4 md:px-8 lg:px-12 relative z-10">
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
            A Gestão de OS Mais{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
                Rápida
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-orange-400/20 blur-2xl"></span>
            </span>{" "}
            para Prestadores de Serviço
          </h2>

          {/* Subtítulo */}
          <p className="text-lg md:text-xl text-gray-300 mb-8 w-full max-w-5xl mx-auto leading-relaxed">
            Crie uma OS em <strong className="text-orange-500">segundos</strong>
            , veja tudo que você tem pra fazer hoje e{" "}
            <strong className="text-white">envie o recibo</strong> pro cliente
            direto no <strong className="text-orange-500">WhatsApp</strong>.
            Tudo no seu celular.
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
          <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-4 md:p-6 w-full max-w-4xl mx-auto mb-4">
            <p className="text-sm md:text-base text-gray-300 leading-relaxed">
              <strong className="text-orange-500">Vagas limitadas</strong> - Os
              primeiros ganham{" "}
              <strong className="text-white">3 meses grátis</strong> quando
              lançar e depois pagam só{" "}
              <strong className="text-orange-500">R$ 34,95/mês</strong> pra
              sempre. Só preciso que você me diga o que achou do sistema.
            </p>
          </div>

          {/* Preço Normal */}
          <p className="text-xs text-gray-500">
            Depois vai custar:{" "}
            <span className="line-through">R$ 69,90/mês</span>
          </p>

          {/* Mockup com Fluxo Animado */}
          <AnimatedFlowSection>
            <div className="mt-20 w-full group">
              <div className="relative">
                {/* Efeito de brilho no hover */}
                <div className="absolute -inset-3 bg-gradient-to-br from-orange-500/30 via-orange-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-700"></div>

                {/* Container do mockup */}
                <div className="relative bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 rounded-3xl shadow-2xl border border-gray-800/50 overflow-hidden transition-all duration-500 group-hover:border-orange-500/50 group-hover:shadow-orange-500/20">
                  <HoverPlayCard src={"/videos/oszap-mockup.mp4"} />
                </div>
              </div>
            </div>
          </AnimatedFlowSection>
        </div>
      </section>

      {/* 2. SEÇÃO DE DORES (O Porquê - Agora com ênfase no que o cliente perde) */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background moderno com gradientes e efeitos */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.08),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(249,115,22,0.03)_50%,transparent_100%)]"></div>

        <div className="w-full px-4 md:px-8 lg:px-12 relative z-10">
          {/* Header moderno */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 text-orange-500 bg-orange-500/10 border border-orange-500/20 px-4 py-2 rounded-full text-xs font-bold tracking-wide uppercase mb-6">
              <TrendingUp className="w-4 h-4" />
              <span>Problemas Resolvidos</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white leading-tight">
              Chega de perder{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
                  dinheiro!
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-orange-400/20 blur-2xl"></span>
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              O OSZap resolve os 3 problemas que mais te atrapalham
            </p>
          </div>

          {/* Cards modernos */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
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
      <FeatureSection />

      {/* CTA Final */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background com gradiente e efeitos */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.1),transparent_70%)]"></div>
        <div className="absolute inset-0 border-t border-b border-gray-800/50"></div>

        <div className="w-full px-4 md:px-8 lg:px-12 relative z-10">
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
            <p className="text-lg md:text-xl text-gray-300 mb-8 w-full max-w-4xl mx-auto leading-relaxed">
              Vagas limitadas! Seja um dos primeiros. Quando lançar, você ganha
              3 meses grátis e depois paga metade do preço pra sempre.
            </p>

            {/* Oferta destacada */}
            <div className="bg-gradient-to-r from-orange-500/10 to-orange-400/10 border border-orange-500/30 rounded-xl p-6 md:p-8 w-full max-w-3xl mx-auto mb-8">
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-white mb-2">
                  3 Meses Grátis
                </p>
                <p className="text-gray-300 mb-2">+ 50% OFF vitalício</p>
                <p className="text-sm text-gray-400 mb-3">
                  De <span className="line-through">R$ 69,90/mês</span> para{" "}
                  <span className="text-orange-500 font-bold text-lg">
                    R$ 34,95/mês
                  </span>{" "}
                  para sempre
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
              <span>
                Vagas limitadas • Me diga o que achou e ganhe o desconto pra
                sempre
              </span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
