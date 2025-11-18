import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI } from "@google/genai";

export async function POST(request: NextRequest) {
  try {
    const { base64Audio, mimeType } = await request.json();

    if (!base64Audio || typeof base64Audio !== 'string') {
      return NextResponse.json(
        { error: 'Áudio é obrigatório' },
        { status: 400 }
      );
    }

    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.error('API_KEY não configurada');
      return NextResponse.json(
        { error: 'API não configurada' },
        { status: 500 }
      );
    }

    const ai = new GoogleGenAI({ apiKey });
    const model = "gemini-2.5-flash";
    
    const response = await ai.models.generateContent({
      model,
      contents: [
        {
          inlineData: {
            mimeType: mimeType || 'audio/webm',
            data: base64Audio
          }
        },
        {
          text: "Transcreva este áudio em português do Brasil. Retorne apenas o texto transcrito, sem explicações adicionais."
        }
      ]
    });

    const transcribedText = response.text || "";
    
    return NextResponse.json({ text: transcribedText });

  } catch (error) {
    console.error("Error transcribing audio:", error);
    return NextResponse.json(
      { error: "Erro ao transcrever áudio. Por favor, tente novamente ou digite o texto." },
      { status: 500 }
    );
  }
}

