// src/components/Illustrations.tsx

import React from 'react';

// Shared styles for a consistent look - Tema escuro com laranja
const sharedCircleStyle = "fill-orange-500/20 stroke-orange-500/40 stroke-[1px]";
const sharedLineStyle = "stroke-gray-500 stroke-[1px] stroke-dashed";
const textStyle = "font-sans text-xs fill-gray-200";

// --- Ilustração 1: Relatório de Serviço por Voz (IA) ---
export const VoiceReportIllustration: React.FC = () => (
  <svg width="400" height="200" viewBox="0 0 400 200" className="w-full h-auto">
    {/* Pessoa falando no celular (esquerda) - Mais clara e visível */}
    <g transform="translate(30, 60)">
      {/* Cabeça */}
      <circle cx="0" cy="0" r="16" fill="#D97706" />
      {/* Olhos */}
      <circle cx="-5" cy="-2" r="2" fill="white" />
      <circle cx="5" cy="-2" r="2" fill="white" />
      {/* Boca aberta (falando) */}
      <ellipse cx="0" cy="5" rx="4" ry="3" fill="#111827" />
      
      {/* Corpo */}
      <rect x="-12" y="16" width="24" height="40" rx="12" fill="#F97316" />
      
      {/* Braço esquerdo levantado */}
      <rect x="-18" y="20" width="8" height="30" rx="4" fill="#D97706" />
      
      {/* Celular próximo ao rosto (como se estivesse falando) */}
      <g transform="translate(-10, -5)">
        <rect x="0" y="0" width="24" height="42" rx="4" fill="#1F2937" stroke="#F97316" strokeWidth="2" />
        <rect x="2" y="3" width="20" height="36" rx="2" fill="#111827" />
        {/* Ícone de microfone ativo */}
        <circle cx="12" cy="15" r="5" fill="#F97316" />
        <rect x="11" y="20" width="2" height="6" rx="1" fill="#F97316" />
        {/* Ondas no microfone */}
        <path d="M 12 26 Q 8 28, 12 30 M 12 26 Q 16 28, 12 30" stroke="#FB923C" strokeWidth="2" fill="none" />
      </g>
      
      {/* Ondas sonoras saindo da boca/celular - MUITO MAIS EVIDENTES */}
      <g transform="translate(15, 10)">
        {/* Onda 1 - mais próxima */}
        <path d="M 0 0 Q 15 -8, 0 -16 M 0 8 Q 20 0, 0 -8 M 0 16 Q 25 8, 0 0" 
              stroke="#F97316" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.9" />
        {/* Onda 2 - média */}
        <path d="M 8 0 Q 25 -12, 8 -24 M 8 12 Q 35 0, 8 -12 M 8 24 Q 40 12, 8 0" 
              stroke="#FB923C" strokeWidth="3.5" fill="none" strokeLinecap="round" opacity="0.7" />
        {/* Onda 3 - mais distante */}
        <path d="M 16 0 Q 35 -16, 16 -32 M 16 16 Q 50 0, 16 -16 M 16 32 Q 55 16, 16 0" 
              stroke="#F97316" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.5" />
        {/* Onda 4 - mais externa */}
        <path d="M 24 0 Q 45 -20, 24 -40 M 24 20 Q 65 0, 24 -20 M 24 40 Q 70 20, 24 0" 
              stroke="#FB923C" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.3" />
      </g>
    </g>

    {/* IA - Coração com IA */}
    <g transform="translate(200, 25)">
      <path d="M 0 0 C -8 -8, -15 -5, -15 5 C -15 15, 0 25, 0 25 C 0 25, 15 15, 15 5 C 15 -5, 8 -8, 0 0 Z" 
            fill="#374151" stroke="#F97316" strokeWidth="1.5" />
      <text x="-4" y="8" className="font-bold text-[10px] fill-orange-500">IA</text>
    </g>

    {/* Linha conectando ondas sonoras à IA - mais visível */}
    <path d="M 90 70 Q 140 50, 190 50" 
          stroke="#F97316" strokeWidth="2" strokeDasharray="4,4" fill="none" opacity="0.6" />
    
    {/* Linhas conectando IA ao documento */}
    <line x1="200" y1="50" x2="250" y2="60" className={sharedLineStyle} />
    <line x1="200" y1="50" x2="150" y2="60" className={sharedLineStyle} />

    {/* Documento central */}
    <g transform="translate(120, 50)">
      <rect x="0" y="0" width="160" height="100" rx="8" fill="#1F2937" stroke="#374151" strokeWidth="1.5" />
      <rect x="8" y="8" width="144" height="20" rx="4" fill="#111827" />
      <text x="15" y="22" className="font-semibold text-[11px] fill-gray-200">Relatório de Serviço</text>
      
      {/* Linhas de texto */}
      <rect x="15" y="35" width="130" height="6" rx="2" fill="#374151" />
      <rect x="15" y="48" width="100" height="6" rx="2" fill="#374151" />
      <rect x="15" y="61" width="120" height="6" rx="2" fill="#374151" />
      
      {/* Checkmarks */}
      <g transform="translate(10, 75)">
        <circle cx="0" cy="0" r="6" fill="#22C55E" />
        <path d="M -3 0 L -1 2 L 3 -2" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <g transform="translate(10, 90)">
        <circle cx="0" cy="0" r="6" fill="#22C55E" />
        <path d="M -3 0 L -1 2 L 3 -2" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </g>

    {/* Papéis com X sendo eliminados (direita) */}
    <g transform="translate(320, 90)">
      <circle cx="0" cy="0" r="45" stroke="#4B5563" strokeWidth="1" fill="transparent" opacity="0.3" />
      {/* Papel 1 */}
      <rect x="-25" y="-20" width="20" height="15" rx="2" fill="#374151" stroke="#4B5563" strokeWidth="1" transform="rotate(-15)" />
      <line x1="-20" y1="-15" x2="-10" y2="-5" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
      <line x1="-20" y1="-5" x2="-10" y2="-15" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
      {/* Papel 2 */}
      <rect x="5" y="-35" width="20" height="15" rx="2" fill="#374151" stroke="#4B5563" strokeWidth="1" transform="rotate(20)" />
      <line x1="10" y1="-30" x2="20" y2="-20" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
      <line x1="10" y1="-20" x2="20" y2="-30" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
      {/* Papel 3 */}
      <rect x="-15" y="10" width="20" height="15" rx="2" fill="#374151" stroke="#4B5563" strokeWidth="1" transform="rotate(10)" />
      <line x1="-10" y1="15" x2="0" y2="25" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
      <line x1="-10" y1="25" x2="0" y2="15" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
    </g>
  </svg>
);

// --- Ilustração 2: Lembretes Inteligentes de Manutenção (IA e Agenda) ---
export const SmartRemindersIllustration: React.FC = () => (
  <svg width="400" height="200" viewBox="0 0 400 200" className="w-full h-auto">
    {/* IA - Coração com IA */}
    <g transform="translate(200, 20)">
      <path d="M 0 0 C -8 -8, -15 -5, -15 5 C -15 15, 0 25, 0 25 C 0 25, 15 15, 15 5 C 15 -5, 8 -8, 0 0 Z" 
            fill="#374151" stroke="#F97316" strokeWidth="1.5" />
      <text x="-4" y="8" className="font-bold text-[10px] fill-orange-500">IA</text>
    </g>

    {/* Linha conectando IA ao calendário */}
    <line x1="200" y1="45" x2="200" y2="55" className={sharedLineStyle} />

    {/* Calendário */}
    <g transform="translate(150, 50)">
      <rect x="0" y="0" width="100" height="120" rx="10" fill="#F97316" stroke="#FB923C" strokeWidth="2" />
      <rect x="5" y="5" width="90" height="22" rx="4" fill="#111827" />
      <text x="20" y="20" className="font-bold text-[11px] fill-gray-200">NOVEMBRO</text>
      
      {/* Grid do calendário */}
      <g transform="translate(8, 32)">
        {[...Array(5)].map((_, r) =>
          [...Array(5)].map((_, c) => (
            <rect key={`${r}-${c}`} x={c * 17} y={r * 17} width="14" height="14" rx="2" 
                  fill="#374151" stroke="#4B5563" strokeWidth="0.5" />
          ))
        )}
        {/* Data destacada */}
        <rect x={2 * 17} y={1 * 17} width="14" height="14" rx="2" fill="#F97316" stroke="#FB923C" strokeWidth="1.5" />
        <circle cx={2 * 17 + 7} cy={1 * 17 + 7} r="4" fill="white" />
        <path d="M 41 24 L 43 26 L 47 22" stroke="#22C55E" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </g>

    {/* Celular com checklist */}
    <g transform="translate(280, 50)">
      <rect x="0" y="0" width="50" height="80" rx="6" fill="#1F2937" stroke="#374151" strokeWidth="1.5" />
      <rect x="5" y="8" width="40" height="64" rx="3" fill="#111827" />
      <circle cx="25" cy="20" r="3" fill="#22C55E" />
      <rect x="30" y="18" width="12" height="4" rx="1" fill="#374151" />
      <circle cx="25" cy="35" r="3" fill="#22C55E" />
      <rect x="30" y="33" width="12" height="4" rx="1" fill="#374151" />
      <circle cx="25" cy="50" r="3" fill="#22C55E" />
      <rect x="30" y="48" width="12" height="4" rx="1" fill="#374151" />
    </g>

    {/* Moedas empilhadas */}
    <g transform="translate(280, 140)">
      <circle cx="0" cy="0" r="12" fill="#FBBF24" stroke="#F59E0B" strokeWidth="1.5" />
      <circle cx="0" cy="-8" r="12" fill="#FBBF24" stroke="#F59E0B" strokeWidth="1.5" />
      <circle cx="0" cy="-16" r="12" fill="#FBBF24" stroke="#F59E0B" strokeWidth="1.5" />
      <text x="-3" y="2" className="font-bold text-[8px] fill-gray-800">$</text>
    </g>

    {/* Gráfico de crescimento */}
    <g transform="translate(320, 120)">
      <rect x="0" y="0" width="60" height="50" fill="transparent" />
      {/* Linha do gráfico */}
      <path d="M 5 45 L 15 35 L 25 38 L 35 25 L 45 28 L 55 20" 
            stroke="#22C55E" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {/* Área preenchida */}
      <path d="M 5 45 L 15 35 L 25 38 L 35 25 L 45 28 L 55 20 L 55 45 L 5 45 Z" 
            fill="#22C55E" opacity="0.2" />
      {/* Ponto no topo */}
      <circle cx="55" cy="20" r="4" fill="#22C55E" />
    </g>
  </svg>
);

// --- Ilustração 3: Relatórios Digitais Instantâneos (Confirmação Profissional) ---
export const DigitalReportsIllustration: React.FC = () => (
  <svg width="400" height="200" viewBox="0 0 400 200" className="w-full h-auto">
    {/* IA - Coração com IA */}
    <g transform="translate(200, 20)">
      <path d="M 0 0 C -8 -8, -15 -5, -15 5 C -15 15, 0 25, 0 25 C 0 25, 15 15, 15 5 C 15 -5, 8 -8, 0 0 Z" 
            fill="#374151" stroke="#F97316" strokeWidth="1.5" />
      <text x="-4" y="8" className="font-bold text-[10px] fill-orange-500">IA</text>
    </g>

    {/* Linha conectando IA ao documento */}
    <line x1="200" y1="45" x2="200" y2="55" className={sharedLineStyle} />

    {/* Documento central */}
    <g transform="translate(120, 50)">
      <rect x="0" y="0" width="160" height="100" rx="8" fill="#1F2937" stroke="#374151" strokeWidth="1.5" />
      <rect x="8" y="8" width="144" height="20" rx="4" fill="#111827" />
      <text x="15" y="22" className="font-semibold text-[11px] fill-gray-200">Relatório de Serviço</text>
      
      {/* Linhas de texto */}
      <rect x="15" y="35" width="130" height="6" rx="2" fill="#374151" />
      <rect x="15" y="48" width="100" height="6" rx="2" fill="#374151" />
      
      {/* Status Concluído */}
      <g transform="translate(10, 70)">
        <circle cx="0" cy="0" r="6" fill="#22C55E" />
        <path d="M -3 0 L -1 2 L 3 -2" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <text x="20" y="75" className="font-bold text-[12px] fill-green-500">Concluído</text>
    </g>

    {/* Checkmark grande de confirmação */}
    <g transform="translate(300, 80)">
      <circle cx="0" cy="0" r="25" fill="#22C55E" opacity="0.2" />
      <circle cx="0" cy="0" r="18" fill="#22C55E" />
      <path d="M -8 0 L -2 6 L 8 -4" stroke="white" strokeWidth="3" fill="none" 
            strokeLinecap="round" strokeLinejoin="round" />
    </g>

    {/* Cliente feliz com celular (direita) */}
    <g transform="translate(300, 120)">
      {/* Corpo */}
      <rect x="-15" y="0" width="30" height="50" rx="15" fill="#F97316" />
      {/* Cabeça */}
      <circle cx="0" cy="-10" r="12" fill="#D97706" />
      {/* Celular */}
      <rect x="8" y="10" width="12" height="20" rx="2" fill="#1F2937" stroke="#374151" strokeWidth="1" />
      <rect x="10" y="12" width="8" height="16" rx="1" fill="#111827" />
      {/* Olhos e sorriso */}
      <circle cx="-4" cy="-12" r="1.5" fill="white" />
      <circle cx="4" cy="-12" r="1.5" fill="white" />
      <path d="M -6 -6 Q 0 -3, 6 -6" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </g>
  </svg>
);
