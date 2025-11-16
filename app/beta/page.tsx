"use client";

import React, { useState, FormEvent } from 'react';
import { Mail, User, Smartphone, Briefcase, ChevronRight, CheckCircle2, MessageSquareText, Zap } from 'lucide-react';
import Link from 'next/link';
import { supabase, BetaSignupData } from '@/lib/supabase';

// Função para enviar dados ao Supabase
async function submitFormData(data: BetaSignupData) {
  const { error } = await supabase
    .from('beta_signups')
    .insert([
      {
        name: data.name,
        email: data.email,
        whatsapp: data.whatsapp,
        service_area: data.serviceArea || null,
        main_pain_point: data.mainPainPoint || null,
        created_at: new Date().toISOString(),
      }
    ]);

  if (error) {
    throw error;
  }

  return { success: true, message: "Dados enviados com sucesso!" };
}

export default function BetaSignupFormFriendly() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    serviceArea: '', // Área de atuação (simples)
    mainPainPoint: '', // A dor mais latente
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  // Função para formatar telefone brasileiro
  const formatPhone = (value: string): string => {
    // Remove tudo que não é número
    const numbers = value.replace(/\D/g, '');
    
    // Limita a 11 dígitos (DDD + 9 dígitos)
    const limitedNumbers = numbers.slice(0, 11);
    
    // Aplica a máscara (XX) XXXXX-XXXX
    if (limitedNumbers.length <= 2) {
      return limitedNumbers;
    } else if (limitedNumbers.length <= 7) {
      return `(${limitedNumbers.slice(0, 2)}) ${limitedNumbers.slice(2)}`;
    } else {
      return `(${limitedNumbers.slice(0, 2)}) ${limitedNumbers.slice(2, 7)}-${limitedNumbers.slice(7)}`;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    
    // Aplica máscara apenas no campo de WhatsApp
    if (id === 'whatsapp') {
      const formatted = formatPhone(value);
      setFormData(prev => ({ ...prev, [id]: formatted }));
    } else {
      setFormData(prev => ({ ...prev, [id]: value }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Remove a máscara do WhatsApp antes de enviar (salva apenas números)
      const cleanWhatsapp = formData.whatsapp.replace(/\D/g, '');
      
      await submitFormData({
        ...formData,
        whatsapp: cleanWhatsapp,
      });
      setSubmissionSuccess(true);
    } catch (error: any) {
      console.error("Erro ao enviar formulário:", error);
      alert(
        error?.message 
          ? `Erro: ${error.message}` 
          : "Ocorreu um erro ao enviar seu cadastro. Por favor, tente novamente."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submissionSuccess) {
    return (
      <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center p-4">
        {/* Efeitos de fundo */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-950 to-gray-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.1),transparent_70%)]"></div>
        
        <div className="relative z-10 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 p-8 md:p-12 rounded-3xl shadow-2xl w-full max-w-lg text-center border-t-4 border-green-500">
          <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Quase lá! Seu acesso está a caminho!</h2>
          <p className="text-lg text-gray-300 mb-4">
            Obrigado, <span className="font-semibold text-orange-500">{formData.name.split(' ')[0]}</span>! Entraremos em contato via WhatsApp/e-mail quando estiver pronto.
          </p>
          <p className="text-md text-gray-400 mb-6">
            Você ganhou: <strong className="text-orange-500">3 meses grátis</strong> quando lançarmos + <strong className="text-orange-500">50% OFF vitalício</strong> (R$ 34,95/mês para sempre).
          </p>
          <p className="text-md text-gray-400">
            Sua resposta sobre suas dores é valiosíssima para o OSZap. Estamos animados para te ajudar!
          </p>
          <Link href="/" className="inline-block mt-6 text-orange-500 hover:text-orange-400 font-semibold">
            ← Voltar para a página inicial
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center p-4">
      {/* Efeitos de fundo */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-950 to-gray-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.1),transparent_70%)]"></div>
      
      <div className="relative z-10 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 p-8 md:p-12 rounded-3xl shadow-2xl w-full max-w-lg border-t-4 border-orange-500">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 text-orange-500 bg-orange-500/10 backdrop-blur-sm border border-orange-500/20 px-4 py-2 rounded-full text-xs font-bold tracking-wide uppercase mb-6">
          <Zap className="w-4 h-4" />
          <span>Acesso Beta</span>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">Acesso Beta OSZap</h1>
          <p className="text-lg text-gray-300 mb-2">
            Preencha os campos abaixo para garantir seu <strong className="text-orange-500">acesso grátis por 3 meses + 50% OFF vitalício!</strong>
          </p>
          <p className="text-sm text-orange-400 font-medium">
            ✓ Oferta válida quando lançar
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Campo 1: Nome Completo */}
          <div>
            <label htmlFor="name" className="block text-gray-300 text-sm font-semibold mb-2">
              Seu Nome <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Seu nome"
                required
                className="w-full p-3 pl-10 bg-gray-800 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-150 placeholder-gray-500"
              />
            </div>
          </div>

          {/* Campo 2: E-mail */}
          <div>
            <label htmlFor="email" className="block text-gray-300 text-sm font-semibold mb-2">
              Seu Melhor E-mail <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="seu@email.com"
                required
                className="w-full p-3 pl-10 bg-gray-800 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-150 placeholder-gray-500"
              />
            </div>
          </div>

          {/* Campo 3: WhatsApp */}
          <div>
            <label htmlFor="whatsapp" className="block text-gray-300 text-sm font-semibold mb-2">
              Seu WhatsApp (para acesso e suporte) <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Smartphone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input
                type="tel"
                id="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                placeholder="(22) 99999-9999"
                required
                maxLength={15}
                className="w-full p-3 pl-10 bg-gray-800 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-150 placeholder-gray-500"
              />
            </div>
          </div>

          {/* Campo 4 (Opcional, mas valioso): Área de Serviço */}
          <div>
            <label htmlFor="serviceArea" className="block text-gray-300 text-sm font-semibold mb-2">
              Sua área de atuação (nos ajuda a te entender!)
            </label>
            <div className="relative">
              <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5 pointer-events-none z-10" />
              <input
                type="text"
                id="serviceArea"
                value={formData.serviceArea}
                onChange={handleChange}
                placeholder="Ex: Eletricista, Encanador, Técnico de Ar-Condicionado..."
                className="w-full p-3 pl-10 bg-gray-800 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-150 placeholder-gray-500"
              />
            </div>
          </div>

          {/* Campo 5 (Opcional, mas CRUCIAL): Dor Principal */}
          <div>
            <label htmlFor="mainPainPoint" className="block text-gray-300 text-sm font-semibold mb-2">
              Qual sua MAIOR dificuldade hoje na gestão de serviços? (Ajuda a focar no que importa pra você!)
            </label>
            <div className="relative">
              <MessageSquareText className="absolute left-3 top-3 text-gray-500 w-5 h-5" />
              <textarea
                id="mainPainPoint"
                value={formData.mainPainPoint}
                onChange={handleChange}
                placeholder="Ex: Perco tempo com papel, esqueço manutenções, clientes reclamam do recibo..."
                rows={3}
                className="w-full p-3 pl-10 bg-gray-800 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-150 placeholder-gray-500 resize-none"
              />
            </div>
          </div>

          {/* Botão de Cadastro */}
          <button
            type="submit"
            className={`w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 rounded-lg text-lg flex items-center justify-center transition duration-300 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transform hover:scale-[1.02] ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Enviando Cadastro...
              </>
            ) : (
              <>
                Sim! Quero Meu Acesso Grátis!
                <ChevronRight className="w-5 h-5 ml-2" />
              </>
            )}
          </button>
        </form>

        <p className="text-sm text-gray-400 mt-6 text-center">
          Ao se cadastrar, você concorda com nossos Termos de Uso e Política de Privacidade.
        </p>

        <Link href="/" className="block mt-4 text-center text-gray-400 hover:text-orange-500 transition-colors text-sm">
          ← Voltar para a página inicial
        </Link>
      </div>
    </div>
  );
}

