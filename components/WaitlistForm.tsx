"use client";

import React, { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import { cadastrarLead, type LeadData } from "@/lib/services/leadService";

export const WaitlistForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [mensagemEnviada, setMensagemEnviada] = useState(false);
  const [nomeUsuario, setNomeUsuario] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const leadData: LeadData = {
      nome: formData.get("name") as string,
      email: formData.get("email") as string,
      telefone: (formData.get("telefone") as string) || null,
      feedback: (formData.get("feedback") as string) || null,
    };

    try {
      const result = await cadastrarLead(leadData);

      if (result.success) {
        setNomeUsuario(leadData.nome.split(" ")[0]);
        setMensagemEnviada(result.mensagem_enviada || false);
        setSubmitted(true);
        e.currentTarget.reset();
      } else {
        setError(
          result.error || "Erro ao processar seu cadastro. Tente novamente."
        );
      }
    } catch (err) {
      console.error("Erro ao cadastrar lead:", err);
      setError("Erro ao conectar com o servidor. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section
        id="waitlist"
        className="py-20 bg-dark-950 text-white text-center px-4"
      >
        <div className="max-w-xl mx-auto bg-[#0B1121] p-10 rounded-3xl border border-brand-500/20 shadow-2xl shadow-brand-900/20">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Send className="w-8 h-8 text-green-500" />
          </div>
          <h3 className="text-3xl font-bold mb-4 text-white">
            Parabéns, {nomeUsuario}! 🎉
          </h3>
          <p className="text-xl text-gray-300">Você garantiu sua vaga VIP!</p>
          {mensagemEnviada ? (
            <p className="mt-4 text-green-400">
              ✅ Te enviamos uma mensagem no WhatsApp com todos os detalhes!
            </p>
          ) : (
            <p className="mt-4 text-gray-500">
              📧 Em breve você vai receber mais informações no email!
            </p>
          )}
          <p className="mt-4 text-gray-400 text-sm">
            Você garantiu:{" "}
            <span className="text-brand-400 font-bold">3 meses GRÁTIS</span> +{" "}
            <span className="text-brand-400 font-bold">50% OFF vitalício</span>
          </p>
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
              Preencha abaixo para garantir os{" "}
              <span className="text-brand-500 font-bold">3 meses grátis</span> e
              o desconto vitalício.
            </p>

            <form
              onSubmit={handleSubmit}
              className="space-y-4 max-w-md mx-auto text-left"
            >
              {error && (
                <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 rounded-xl text-sm">
                  ⚠️ {error}
                </div>
              )}

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-400 mb-1"
                >
                  Seu Nome <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type="text"
                  id="name"
                  name="name"
                  placeholder="João da Silva"
                  className="w-full px-4 py-3 rounded-xl bg-black/50 border border-gray-800 text-white placeholder-gray-600 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                  disabled={loading}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-400 mb-1"
                >
                  Seu Melhor Email <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type="email"
                  id="email"
                  name="email"
                  placeholder="joao@email.com"
                  className="w-full px-4 py-3 rounded-xl bg-black/50 border border-gray-800 text-white placeholder-gray-600 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                  disabled={loading}
                />
              </div>

              <div>
                <label
                  htmlFor="telefone"
                  className="block text-sm font-medium text-gray-400 mb-1"
                >
                  WhatsApp (Opcional)
                </label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  placeholder="(22) 99999-9999"
                  className="w-full px-4 py-3 rounded-xl bg-black/50 border border-gray-800 text-white placeholder-gray-600 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                  disabled={loading}
                  onChange={(e) => {
                    // Aplica máscara de telefone
                    let value = e.target.value.replace(/\D/g, "");
                    if (value.length <= 11) {
                      if (value.length > 6) {
                        value = value.replace(
                          /^(\d{2})(\d{5})(\d{0,4}).*/,
                          "($1) $2-$3"
                        );
                      } else if (value.length > 2) {
                        value = value.replace(/^(\d{2})(\d{0,5})/, "($1) $2");
                      }
                      e.target.value = value;
                    }
                  }}
                />
                <p className="text-xs text-gray-600 mt-1">
                  Se informado, você receberá uma mensagem automática de
                  boas-vindas
                </p>
              </div>

              <div>
                <label
                  htmlFor="feedback"
                  className="block text-sm font-medium text-gray-400 mb-1"
                >
                  O que você achou da ideia? (Opcional)
                </label>
                <textarea
                  id="feedback"
                  name="feedback"
                  rows={2}
                  placeholder="Achei muito bom porque..."
                  className="w-full px-4 py-3 rounded-xl bg-black/50 border border-gray-800 text-white placeholder-gray-600 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all resize-none"
                  disabled={loading}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-brand-600 hover:bg-brand-500 disabled:bg-gray-700 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 mt-4 shadow-lg shadow-brand-900/20"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Processando...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Entrar na Lista VIP
                  </>
                )}
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
