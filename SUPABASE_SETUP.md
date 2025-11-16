# Configuração do Supabase

## 1. Criar conta e projeto no Supabase

1. Acesse https://supabase.com
2. Crie uma conta (é grátis)
3. Crie um novo projeto
4. Escolha uma região próxima (ex: South America)
5. Aguarde o projeto ser criado (pode levar alguns minutos)

## 2. Obter as credenciais

1. No dashboard do Supabase, vá em **Settings** > **API**
2. Copie:
   - **Project URL** (URL do projeto)
   - **anon public** key (chave pública anônima)

## 3. Configurar variáveis de ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
NEXT_PUBLIC_SUPABASE_URL=sua_url_aqui
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_aqui
```

**IMPORTANTE**: Não commite o arquivo `.env.local` no git! Ele já deve estar no `.gitignore`.

## 4. Criar a tabela no Supabase

No dashboard do Supabase, vá em **SQL Editor** e execute este SQL:

```sql
-- Criar tabela para cadastros beta
CREATE TABLE beta_signups (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  whatsapp TEXT NOT NULL,
  service_area TEXT,
  main_pain_point TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Criar índice para busca por email
CREATE INDEX idx_beta_signups_email ON beta_signups(email);

-- Habilitar Row Level Security (RLS)
ALTER TABLE beta_signups ENABLE ROW LEVEL SECURITY;

-- Política: permitir inserção para todos (anon)
CREATE POLICY "Permitir inserção de cadastros beta"
  ON beta_signups
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Política: permitir leitura apenas para usuários autenticados (opcional)
-- Se quiser que apenas você veja os dados, remova esta política
CREATE POLICY "Permitir leitura para service_role"
  ON beta_signups
  FOR SELECT
  TO service_role
  USING (true);
```

## 5. Instalar dependências

```bash
npm install @supabase/supabase-js
```

## 6. Testar

1. Inicie o servidor: `npm run dev`
2. Acesse `/beta`
3. Preencha o formulário
4. Verifique os dados no Supabase: **Table Editor** > `beta_signups`

---

## Alternativas Open Source

### Opção 1: Turso (SQLite distribuído)
- Site: https://turso.tech
- SQLite distribuído, fácil migração
- Free tier generoso

### Opção 2: Neon (PostgreSQL serverless)
- Site: https://neon.tech
- PostgreSQL serverless
- Free tier disponível

### Opção 3: Self-hosted PostgreSQL
- Mais controle, mas precisa gerenciar servidor
- Pode usar Docker: `docker run -d -p 5432:5432 postgres`

### Opção 4: SQLite local (apenas desenvolvimento)
- Não recomendado para produção
- Funciona apenas em desenvolvimento local

---

## Por que Supabase?

✅ **Open Source** - Pode ser self-hosted se quiser  
✅ **Free Tier Generoso** - 500MB banco, 2GB bandwidth  
✅ **Fácil de usar** - API REST + SQL direto  
✅ **Seguro** - Row Level Security built-in  
✅ **Escalável** - Cresce com seu projeto  
✅ **Extras** - Auth, Storage, Realtime incluídos  

