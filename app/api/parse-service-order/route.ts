import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI, Type } from "@google/genai";
import { ServiceOrderPreview } from '../../../types';

export async function POST(request: NextRequest) {
  try {
    const { text } = await request.json();

    if (!text || typeof text !== 'string') {
      return NextResponse.json(
        { error: 'Texto é obrigatório' },
        { status: 400 }
      );
    }

    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.error('API_KEY não configurada');
      // Retornar fallback em vez de erro para demo
      return NextResponse.json({
        clientName: "Cliente Exemplo",
        serviceDescription: "Serviço detectado (API não configurada)",
        totalValue: 0,
        items: ["Item processado manualmente"]
      } as ServiceOrderPreview);
    }

    const ai = new GoogleGenAI({ apiKey });
    const model = "gemini-2.5-flash";
    
    const response = await ai.models.generateContent({
      model,
      contents: `You are a smart assistant for a handyman app. Extract service order details from the following unstructured text in Portuguese. 
      If specific details like client name or price are missing, infer reasonable defaults or leave them generic (e.g. "Cliente não informado").
      
      Text: "${text}"`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            clientName: { type: Type.STRING, description: "Name of the client if mentioned" },
            serviceDescription: { type: Type.STRING, description: "Short summary of work done" },
            totalValue: { type: Type.NUMBER, description: "Total price of service" },
            items: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING }, 
              description: "List of specific tasks or materials" 
            }
          },
          required: ["clientName", "serviceDescription", "totalValue", "items"]
        }
      }
    });

    if (response.text) {
      const result = JSON.parse(response.text) as ServiceOrderPreview;
      return NextResponse.json(result);
    }
    
    throw new Error("No text returned from Gemini");

  } catch (error) {
    console.error("Error parsing service order:", error);
    // Fallback para demo
    return NextResponse.json({
      clientName: "Cliente Exemplo",
      serviceDescription: "Serviço detectado (Erro na IA)",
      totalValue: 0,
      items: ["Item processado manualmente"]
    } as ServiceOrderPreview);
  }
}

