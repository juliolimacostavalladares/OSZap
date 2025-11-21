/**
 * Serviço para cadastro de leads via API externa
 * 
 * API: https://api.oszap.com.br/api/leads/cadastrar
 */

export interface LeadData {
  nome: string;
  email: string;
  telefone?: string | null;
  feedback?: string | null;
}

export interface LeadResponse {
  success: boolean;
  mensagem?: string;
  error?: string;
  novo_lead?: boolean;
  mensagem_enviada?: boolean;
  lead?: {
    id: number;
    nome: string;
    email: string;
  };
}

/**
 * Cadastra um lead na API externa
 */
export async function cadastrarLead(data: LeadData): Promise<LeadResponse> {
  const apiUrl = process.env.NEXT_PUBLIC_LEADS_API_URL || 'https://api.oszap.com.br/api/leads/cadastrar';

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nome: data.nome.trim(),
        email: data.email.trim().toLowerCase(),
        telefone: data.telefone ? data.telefone.replace(/\D/g, '') : null,
        feedback: data.feedback?.trim() || null,
      }),
    });

    const result: LeadResponse = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: result.error || `Erro HTTP ${response.status}`,
      };
    }

    return result;
  } catch (error) {
    console.error('Erro ao cadastrar lead:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Erro ao conectar com a API',
    };
  }
}

