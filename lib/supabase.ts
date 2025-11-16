import { createClient } from '@supabase/supabase-js';

// Configuração do Supabase
// Você precisa criar uma conta em https://supabase.com e criar um projeto
// Depois, pegue a URL e a chave anônima no Settings > API

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase não configurado. Configure as variáveis de ambiente NEXT_PUBLIC_SUPABASE_URL e NEXT_PUBLIC_SUPABASE_ANON_KEY');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Tipo para os dados do formulário
export interface BetaSignupData {
  name: string;
  email: string;
  whatsapp: string;
  serviceArea?: string;
  mainPainPoint?: string;
  createdAt?: string;
}

