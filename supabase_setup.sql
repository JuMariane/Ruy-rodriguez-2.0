-- ==========================================
-- SCRIPT DE CONFIGURAÇÃO DE TABELAS - SUPABASE
-- ==========================================
-- Instruções:
-- 1. Abra o painel do seu projeto no Supabase (https://supabase.com).
-- 2. No menu lateral esquerdo, vá em "SQL Editor" e clique em "New Query".
-- 3. Cole este script completo abaixo e clique no botão "Run" (Executar).

-- ------------------------------------------
-- 1. TABELA DE USUÁRIOS
-- ------------------------------------------
CREATE TABLE IF NOT EXISTS public.users (
    email TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    role TEXT NOT NULL CHECK (role IN ('student', 'management')),
    password TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Habilitar Row Level Security (RLS) para segurança basica
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

-- Criar políticas de acesso públicas (para simulação de cliente sem autenticação JWT avançada)
CREATE POLICY "Permitir leitura pública de usuários" ON public.users FOR SELECT USING (true);
CREATE POLICY "Permitir inserção pública de usuários" ON public.users FOR INSERT WITH CHECK (true);
CREATE POLICY "Permitir atualização pública de usuários" ON public.users FOR UPDATE USING (true);
CREATE POLICY "Permitir exclusão pública de usuários" ON public.users FOR DELETE USING (true);

-- ------------------------------------------
-- 2. TABELA DE POSTS (MURAL)
-- ------------------------------------------
CREATE TABLE IF NOT EXISTS public.posts (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    subtitle TEXT,
    date TEXT NOT NULL,
    description TEXT NOT NULL,
    tag TEXT NOT NULL,
    image TEXT, -- Armazena a imagem (Base64 comprimido ou URL)
    link TEXT,
    likes INTEGER DEFAULT 0 NOT NULL,
    "authorEmail" TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Habilitar Row Level Security (RLS)
ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;

-- Criar políticas de acesso para posts
CREATE POLICY "Permitir leitura pública de posts" ON public.posts FOR SELECT USING (true);
CREATE POLICY "Permitir inserção pública de posts" ON public.posts FOR INSERT WITH CHECK (true);
CREATE POLICY "Permitir atualização pública de posts" ON public.posts FOR UPDATE USING (true);
CREATE POLICY "Permitir exclusão pública de posts" ON public.posts FOR DELETE USING (true);
