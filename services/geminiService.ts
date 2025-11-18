import { ServiceOrderPreview } from "../types";

/**
 * Parse service order from text using Gemini AI via API route
 * The API key is kept secure on the server side
 */
export const parseServiceOrderFromText = async (text: string): Promise<ServiceOrderPreview> => {
  try {
    const response = await fetch('/api/parse-service-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    return data as ServiceOrderPreview;

  } catch (error) {
    console.error("Error parsing service order:", error);
    // Fallback for demo purposes if API fails
    return {
      clientName: "Cliente Exemplo",
      serviceDescription: "Serviço detectado (Erro na IA)",
      totalValue: 0,
      items: ["Item processado manualmente"]
    };
  }
};

/**
 * Transcribe audio to text using Gemini AI via API route
 * The API key is kept secure on the server side
 */
export const transcribeAudio = async (base64Audio: string, mimeType: string = 'audio/webm'): Promise<string> => {
  try {
    const response = await fetch('/api/transcribe-audio', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ base64Audio, mimeType }),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    return data.text || "";

  } catch (error) {
    console.error("Error transcribing audio:", error);
    return "Erro ao transcrever áudio. Por favor, tente novamente ou digite o texto.";
  }
};