"use client"

import React, { useState, useRef } from 'react';
import { Mic, Sparkles, Loader2, Share2, FileText, Square, StopCircle } from 'lucide-react';
import { parseServiceOrderFromText, transcribeAudio } from '../services/geminiService';
import { ServiceOrderPreview } from '../types';

export const SmartDemo: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isTranscribing, setIsTranscribing] = useState(false);
  const [result, setResult] = useState<ServiceOrderPreview | null>(null);
  
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  const handleDemo = async () => {
    if (!input.trim()) return;
    setLoading(true);
    try {
      const data = await parseServiceOrderFromText(input);
      setResult(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      chunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunksRef.current.push(e.data);
        }
      };

      mediaRecorderRef.current.onstop = async () => {
        const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
        await handleTranscription(blob);
        
        // Stop all tracks to release microphone
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (err) {
      console.error("Error accessing microphone:", err);
      alert("Não foi possível acessar o microfone. Verifique as permissões.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const handleTranscription = async (audioBlob: Blob) => {
    setIsTranscribing(true);
    try {
      const reader = new FileReader();
      reader.readAsDataURL(audioBlob);
      reader.onloadend = async () => {
        const base64Audio = (reader.result as string).split(',')[1];
        // Default to webm, usually what browsers record
        const text = await transcribeAudio(base64Audio, 'audio/webm');
        setInput(prev => prev ? `${prev} ${text}` : text);
        setIsTranscribing(false);
      };
    } catch (error) {
      console.error("Transcription error:", error);
      setIsTranscribing(false);
    }
  };

  const examplePrompt = "Troquei o sifão da pia da cozinha da Dona Ana e instalei uma tomada nova na sala. Cobrei 200 reais total.";

  return (
    <section id="demo" className="py-24 bg-black text-white overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Context */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-900/30 border border-brand-500/30 text-brand-400 font-semibold text-sm mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Teste a Inteligência Artificial Agora</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Veja a mágica <br/><span className="text-brand-500">acontecer</span></h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Não acredita que é tão fácil? Digite abaixo o que você fez ou <strong>grave um áudio</strong> e veja como o OSZap organiza tudo em segundos.
            </p>
            
            <div className="bg-[#0B1121] p-6 rounded-2xl border border-white/10 shadow-2xl relative">
              <label className="block text-sm font-medium text-gray-300 mb-2">Descreva o serviço (Fale ou Digite)</label>
              <div className="relative">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={isRecording ? "Gravando áudio..." : (isTranscribing ? "Transcrevendo..." : examplePrompt)}
                  className={`w-full bg-black border border-gray-800 rounded-xl p-4 text-white placeholder-gray-600 focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all resize-none h-32 ${isRecording ? 'ring-2 ring-brand-500/50 animate-pulse' : ''}`}
                  disabled={isRecording || isTranscribing}
                />
                {/* Floating Mic Button inside Textarea area */}
                <button
                  onClick={isRecording ? stopRecording : startRecording}
                  className={`absolute bottom-4 right-4 p-3 rounded-full transition-all duration-300 shadow-lg flex items-center justify-center ${
                    isRecording 
                      ? 'bg-red-500 hover:bg-red-600 animate-pulse scale-110' 
                      : 'bg-white hover:bg-gray-200'
                  }`}
                  title={isRecording ? "Parar gravação" : "Gravar áudio"}
                >
                  {isRecording ? (
                    <Square className="w-5 h-5 text-white fill-white" />
                  ) : (
                    <Mic className="w-5 h-5 text-brand-600" />
                  )}
                </button>
              </div>

              {isTranscribing && (
                <div className="mt-2 text-sm text-brand-400 flex items-center gap-2">
                  <Loader2 className="w-3 h-3 animate-spin" />
                  Transformando voz em texto...
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-between items-center">
                 <button 
                  onClick={() => setInput(examplePrompt)}
                  className="text-sm text-gray-400 hover:text-brand-400 underline transition-colors text-left"
                 >
                   Usar exemplo pronto
                 </button>
                 
                 <button
                  onClick={handleDemo}
                  disabled={loading || !input || isRecording || isTranscribing}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-600/80 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg"
                 >
                   {loading ? <Loader2 className="animate-spin w-5 h-5" /> : <Sparkles className="w-5 h-5 text-white" />}
                   {loading ? 'Criando OS...' : 'Gerar OS'}
                 </button>
              </div>
            </div>
          </div>

          {/* Right: Result Mockup */}
          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-brand-500 blur-[120px] opacity-10 rounded-full pointer-events-none"></div>
            <div className="relative w-[320px] bg-black rounded-[2.5rem] border-[8px] border-gray-800 overflow-hidden shadow-2xl h-[600px] flex flex-col">
              
              {/* Mockup Header */}
              <div className="bg-brand-600 p-6 pt-10 text-white">
                 <div className="flex justify-between items-center">
                    <h3 className="font-bold text-lg">Nova OS #1024</h3>
                    <Share2 className="w-5 h-5 opacity-80" />
                 </div>
              </div>

              {/* Mockup Body */}
              <div className="flex-1 p-6 bg-[#0f172a] overflow-y-auto">
                {loading || isTranscribing ? (
                  <div className="h-full flex flex-col items-center justify-center text-gray-400 gap-4">
                    <Loader2 className="w-10 h-10 animate-spin text-brand-500" />
                    <p className="text-sm font-medium">{isTranscribing ? "Ouvindo você..." : "Criando OS..."}</p>
                  </div>
                ) : result ? (
                  <div className="space-y-6 animate-fade-in">
                    <div className="bg-[#1e293b] p-4 rounded-xl shadow-sm border border-white/5 hover:border-brand-500/40 hover:shadow-lg hover:shadow-brand-500/10 hover:bg-[#232f42] transition-all duration-300 cursor-default group">
                      <label className="text-xs font-bold text-gray-500 group-hover:text-brand-400 transition-colors uppercase tracking-wider">Cliente</label>
                      <p className="text-lg font-bold text-white">{result.clientName}</p>
                    </div>

                    <div className="bg-[#1e293b] p-4 rounded-xl shadow-sm border border-white/5 hover:border-brand-500/40 hover:shadow-lg hover:shadow-brand-500/10 hover:bg-[#232f42] transition-all duration-300 cursor-default group">
                      <label className="text-xs font-bold text-gray-500 group-hover:text-brand-400 transition-colors uppercase tracking-wider">Descrição</label>
                      <p className="text-gray-300 mt-1">{result.serviceDescription}</p>
                    </div>

                    <div className="bg-[#1e293b] p-4 rounded-xl shadow-sm border border-white/5 hover:border-brand-500/40 hover:shadow-lg hover:shadow-brand-500/10 hover:bg-[#232f42] transition-all duration-300 cursor-default group">
                      <label className="text-xs font-bold text-gray-500 group-hover:text-brand-400 transition-colors uppercase tracking-wider mb-2 block">Itens / Serviços</label>
                      <ul className="space-y-2">
                        {result.items.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-brand-900/20 p-4 rounded-xl border border-brand-500/20 flex justify-between items-center hover:bg-brand-900/30 hover:border-brand-500/50 hover:shadow-lg hover:shadow-brand-500/20 transition-all duration-300 cursor-default">
                      <span className="font-medium text-brand-200">Valor Total</span>
                      <span className="font-bold text-2xl text-brand-400">R$ {result.totalValue.toFixed(2)}</span>
                    </div>

                    <button className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-green-500/20 transition-all">
                      <FileText className="w-4 h-4" />
                      Gerar PDF e Enviar
                    </button>
                  </div>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-gray-500 text-center opacity-50">
                    <FileText className="w-16 h-16 mb-4 text-gray-700" />
                    <p>Sua OS aparecerá aqui</p>
                  </div>
                )}
              </div>

              {/* Mockup Navigation */}
              <div className="bg-[#0f172a] border-t border-white/5 p-4 flex justify-around">
                 <div className="w-32 h-1 rounded bg-gray-700 mx-auto"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};