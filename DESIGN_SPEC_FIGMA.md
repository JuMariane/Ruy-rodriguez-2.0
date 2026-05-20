# Escola Ruy Rodriguez — Design Spec para Figma

> Use este documento para recriar o site fielmente no Figma.

---

## 1. DESIGN TOKENS

### Fontes
| Uso | Fonte | Peso |
|-----|-------|------|
| **Display** (títulos, H1-H6, logo) | **Playfair Display** | 400, 500, 600, 700, 800, itálico |
| **Body** (textos, botões, labels) | **Source Sans 3** | 300, 400, 500, 600, 700 |

Google Fonts:
- `https://fonts.google.com/specimen/Playfair+Display`
- `https://fonts.google.com/specimen/Source+Sans+3`

### Paleta de Cores (HSL → HEX)

#### Cores Principais
| Token | HSL | HEX (aprox.) | Uso |
|-------|-----|---------------|-----|
| **background** | `hsl(40, 33%, 96%)` | `#F7F4EF` | Fundo geral |
| **foreground** | `hsl(20, 15%, 15%)` | `#2D2723` | Texto principal |
| **primary** | `hsl(0, 65%, 45%)` | `#BE2828` | Vermelho escola (botões, links, destaques) |
| **primary-foreground** | `hsl(40, 30%, 97%)` | `#F9F7F3` | Texto sobre primary |
| **secondary** | `hsl(35, 40%, 90%)` | `#EDE4D5` | Fundo secundário |
| **muted** | `hsl(35, 25%, 92%)` | `#EDE9E2` | Fundo sutil |
| **muted-foreground** | `hsl(20, 10%, 45%)` | `#7A716A` | Texto secundário |
| **accent** | `hsl(25, 60%, 52%)` | `#CC7733` | Laranja quente |
| **accent-foreground** | `hsl(40, 30%, 97%)` | `#F9F7F3` | Texto sobre accent |

#### Cores da Escola (Custom)
| Token | HSL | HEX (aprox.) | Uso |
|-------|-----|---------------|-----|
| **school-red** | `hsl(0, 65%, 45%)` | `#BE2828` | Vermelho principal |
| **school-red-light** | `hsl(0, 55%, 55%)` | `#C94D4D` | Hover vermelho |
| **school-red-dark** | `hsl(0, 70%, 35%)` | `#981C1C` | Botão hover escuro |
| **school-beige** | `hsl(40, 33%, 96%)` | `#F7F4EF` | Fundo claro |
| **school-beige-dark** | `hsl(35, 30%, 85%)` | `#DDD5C8` | Bordas |
| **school-cream** | `hsl(40, 40%, 93%)` | `#F2ECDF` | Fundo seções alternadas |
| **school-warm** | `hsl(25, 60%, 52%)` | `#CC7733` | Cor quente |
| **school-gold** | `hsl(40, 70%, 50%)` | `#D9A825` | Dourado |

#### Tags dos Projetos
| Tag | Fundo | Texto |
|-----|-------|-------|
| Ciências | `school-warm` 15% opacidade | `school-warm` |
| Meio Ambiente | `#D1FAE5` (emerald-100) | `#047857` (emerald-700) |
| Cultura | `school-gold` 15% opacidade | `school-gold` |
| Antirracismo | `primary` 10% opacidade | `primary` |

### Bordas & Cantos
| Token | Valor |
|-------|-------|
| **border** | `hsl(35, 25%, 85%)` → `#DDD5C8` |
| **border-radius** | `12px` (lg), `10px` (md), `8px` (sm) |

### Sombras
| Token | Valor |
|-------|-------|
| **soft** | `0 4px 20px -4px rgba(45, 39, 35, 0.08)` |
| **elevated** | `0 8px 30px -8px rgba(45, 39, 35, 0.12)` |
| **hero** | `0 20px 60px -15px rgba(190, 40, 40, 0.15)` |

---

## 2. LAYOUT GERAL

- **Container**: max-width `1400px`, centrado, padding horizontal `32px`
- **Breakpoints**: Mobile < 768px, Tablet 768-1024px, Desktop > 1024px
- **Grid**: 1 col (mobile), 2 col (tablet), 3 col (desktop)

---

## 3. SEÇÕES (de cima para baixo)

### 3.1 NAVBAR (SchoolNav)
- **Altura**: `64px`
- **Posição**: Fixa no topo, z-index alto
- **Fundo**: `background` com 90% opacidade + `backdrop-blur(12px)`
- **Borda inferior**: 1px `border`
- **Logo (esquerda)**: "Escola Ruy Rodriguez"
  - Fonte: Playfair Display, 20px, Bold, cor `primary`
- **Links (direita, desktop)**:
  - Fonte: Source Sans 3, 14px, Medium
  - Cor: `foreground` 70% opacidade → hover: `primary`
  - Items: Início, Sobre, Projetos, Educação Antirracista, Contato
- **Mobile**: Hamburguer → menu dropdown vertical

---

### 3.2 HERO SECTION
- **Altura mínima**: 85vh, `padding-top: 64px`
- **Imagem de fundo**: `teatro-itinerario.jpg` (cobre toda a seção, object-cover)
- **Overlay gradient**: da esquerda para direita:
  - `foreground` 85% → `foreground` 60% → `foreground` 20%
- **Conteúdo (lado esquerdo, max-width 672px)**:
  - **Badge superior**: 
    - Texto: "ESCOLA ESTADUAL · INTEGRAL"
    - Fonte: Source Sans 3, 12px, Semibold, tracking-widest, uppercase
    - Fundo: `primary` 90%, texto `primary-foreground`
    - Padding: 6px 16px, border-radius: full (pill)
  - **Título H1**:
    - "Escola Ruy" (linha 1) + "Rodriguez" (linha 2, itálico)
    - Fonte: Playfair Display, 70px desktop / 48px mobile, Bold
    - Cor: `primary-foreground`
  - **Subtítulo**:
    - Texto: "Formando cidadãos críticos..."
    - Fonte: Source Sans 3, 20px desktop / 18px mobile
    - Cor: `primary-foreground` 80% opacidade
  - **Tags de cursos** (3 chips inline):
    - "Técnico em Desenvolvimento de Sistemas"
    - "Técnico em Vendas"  
    - "Técnico em Administração"
    - Fundo: `primary-foreground` 15%, texto: `primary-foreground` 90%
    - Borda: `primary-foreground` 10%, backdrop-blur
    - Fonte: 12px, Medium, border-radius: 6px, padding: 4px 12px
  - **Botões (2)**:
    - "Nossos Projetos": bg `primary`, texto `primary-foreground`, sombra hero
    - "Conheça a Escola": bg `primary-foreground` 15%, borda `primary-foreground` 20%, backdrop-blur
    - Ambos: padding 12px 24px, border-radius 8px, fonte 14px Semibold
- **Gradiente inferior**: 96px de altura, `background` para transparente (transição para próxima seção)

---

### 3.3 ABOUT SECTION (Quem Somos)
- **Fundo**: `background`
- **Padding vertical**: 96px
- **Header** (centralizado):
  - Label: "QUEM SOMOS" — 14px, Semibold, tracking-widest, uppercase, cor `primary`
  - Título H2: "Uma escola que transforma" — Playfair Display, 48px desktop / 36px mobile, Bold
  - Subtítulo: "A Escola Estadual Ruy Rodriguez..." — Source Sans 3, 18px, cor `muted-foreground`, max-width 672px
    - "período integral" em negrito, cor `foreground`
- **Imagem da Fachada**:
  - `fachada-escola.png`, max-width 768px, centrada
  - Border-radius: 16px, sombra `elevated`, borda 1px `border`
- **Badge de Horário** (centralizado):
  - Ícone BookOpen (20px) + "Escola Integral — 14h30 às 21h30"
  - Fundo: `primary` 10%, borda: `primary` 20%, border-radius: full
  - Fonte: 14px, Semibold
- **Cards (grid 3 colunas)**:
  - 6 cards com ícone + título + descrição
  - Fundo: `card`, borda: `border`, border-radius: 12px, padding: 24px
  - Hover: borda `primary` 30%, sombra `elevated`
  - Ícone: 48x48px container com fundo `primary` 10%, ícone 24px cor `primary`
  - Título: Playfair Display, 18px, Semibold
  - Descrição: Source Sans 3, 14px, cor `muted-foreground`
  - **Items**:
    1. 🖥️ Desenvolvimento de Sistemas
    2. 🛒 Técnico em Vendas
    3. 💼 Técnico em Administração
    4. 🔬 Investigação Científica
    5. 🌍 Educação Antirracista
    6. 👥 Comunidade Ativa

---

### 3.4 PROJECTS SECTION (Nossos Projetos)
- **Fundo**: `school-cream`
- **Padding vertical**: 96px
- **Header** (centralizado):
  - Label: "NOSSOS PROJETOS"
  - Título H2: "Aprendizado em ação"
  - Subtítulo: descrição dos projetos
- **Cards (grid 3 colunas, gap 24px)**:
  - **Imagem**: aspect-ratio 16:10, object-cover, hover: scale 1.05 (transition 500ms)
  - **Conteúdo** (padding 24px):
    - Linha 1: Tag colorida (pill, 12px) + data com ícone Calendar (12px, `muted-foreground`)
    - Título H3: Playfair Display, 18px, Bold → hover: cor `primary`
    - Subtítulo: 14px, Medium, cor `primary` 70%
    - Descrição: 14px, `muted-foreground`
    - "Saiba mais →": 14px, Semibold, `primary`, opacidade 0 → 1 no hover
  - Fundo: `card`, borda: `border`, border-radius: 12px
  - Hover: sombra `elevated`, borda `primary` 20%
  - **6 projetos**:
    1. Jornada de Investigação Científica (Nov 2025, Ciências)
    2. Visita ao Instituto Agronômico (Out 2025, Ciências)
    3. Visita à Bacia Hidrográfica (Mai 2025, Meio Ambiente)
    4. Chiquinha Gonzaga (Nov 2023, Antirracismo)
    5. Peça Olorum Ayé (Out 2023, Cultura)
    6. Samba do Ruy (Set 2023, Cultura)

---

### 3.5 ANTIRACIST SECTION (Educação Antirracista)
- **Fundo**: `background` com pattern sutil (6% opacidade)
- **Padding vertical**: 96px
- **Header**: "EDUCAÇÃO ANTIRRACISTA" + "Diversidade é força"
- **Layout 2 colunas** (max-width 896px, centrado):
  - **Coluna esquerda**: 2 parágrafos descritivos
    - Fonte: Source Sans 3, 18px (1º) e 16px (2º), cor `muted-foreground`
  - **Coluna direita**: 6 items de lista
    - Cada item: padding 12px, fundo `card`, borda `border`, border-radius 8px
    - Bolinha vermelha (8x8px, `primary`) + texto 14px
    - Items: Trilha Antirracista, Teatro Olorum Ayé, Maculelê, Máscaras Africanas, Samba do Ruy, Propaganda Antirracista

---

### 3.6 CONTACT SECTION (Fale Conosco)
- **Fundo**: `school-cream`
- **Padding vertical**: 96px
- **Header**: "FALE CONOSCO" + "Entre em contato"
- **Grid 4 colunas** (max-width 1024px):
  - 4 cards centralizados com:
    - Ícone em círculo (48x48, fundo `primary` 10%, ícone `primary`)
    - Título: 16px, Semibold
    - Info: 14px, `muted-foreground`
    - Detalhe: 14px, Medium, `foreground` 80%
  - **Cards**:
    1. 📍 Endereço — Campinas, São Paulo
    2. 🕐 Horário — 14h30 às 21h30
    3. 📞 Telefone — Secretaria
    4. ✉️ E-mail — contato@eeruyrodriguez.edu.br

---

### 3.7 FOOTER
- **Fundo**: `foreground` (escuro)
- **Padding vertical**: 48px
- **Grid 3 colunas**:
  - **Col 1**: Logo + descrição (cor `primary-foreground` 60%)
  - **Col 2**: "Links Rápidos" — lista de 5 links (cor `primary-foreground` 50% → hover 80%)
  - **Col 3**: "Redes Sociais" — link WordPress
- **Linha inferior**: borda top `primary-foreground` 10%, texto copyright 12px, `primary-foreground` 40%

---

## 4. ANIMAÇÕES (Framer Motion → Figma Smart Animate)

| Elemento | Tipo | Duração | Delay | Easing |
|----------|------|---------|-------|--------|
| Hero conteúdo | Fade up (Y: 40→0) | 800ms | 0ms | easeOut |
| Hero badge | Fade up (Y: 20→0) | 600ms | 200ms | easeOut |
| Hero subtítulo | Fade in | 600ms | 500ms | easeOut |
| Hero cursos | Fade in | 500ms | 600ms | easeOut |
| Hero botões | Fade up (Y: 20→0) | 500ms | 800ms | easeOut |
| Section headers | Fade up (Y: 30→0) | 600ms | 0ms | easeOut |
| Cards | Fade up (Y: 30→0) | 500ms | i×80ms | easeOut |
| Fachada imagem | Scale (0.95→1) + fade | 600ms | 0ms | easeOut |
| Antiracist cols | Slide X (±20→0) | 500ms | 200-300ms | easeOut |

---

## 5. IMAGENS NECESSÁRIAS

| Arquivo | Uso | Dimensão sugerida |
|---------|-----|--------------------|
| `teatro-itinerario.jpg` | Hero background | 1920×1080 |
| `fachada-escola.png` | About section | 768×auto |
| `projeto-banner.jpg` | Card projeto 1 | 640×400 |
| `visita-iac.jpg` | Card projeto 2 | 640×400 |
| `bacia-hidrografica.jpg` | Card projeto 3 | 640×400 |
| `chiquinha-gonzaga.jpg` | Card projeto 4 | 640×400 |
| `teatro-oriki.jpg` | Card projeto 5 | 640×400 |
| `samba-ruy.jpg` | Card projeto 6 | 640×400 |
| `pattern-bg.jpg` | Background sutil antirracista | 1920×1080 |

---

## 6. ÍCONES (Lucide Icons)

Todos os ícones são da biblioteca **Lucide** (https://lucide.dev):
- `Menu`, `X` (nav mobile)
- `BookOpen` (badge horário)
- `Monitor` (Dev Sistemas)
- `ShoppingCart` (Vendas)
- `Briefcase` (Administração)
- `Microscope` (Ciências)
- `Globe` (Antirracismo)
- `Users` (Comunidade)
- `Calendar` (data projetos)
- `ArrowRight` (saiba mais)
- `MapPin`, `Phone`, `Mail`, `Clock` (contato)

---

## 7. FRAMES FIGMA SUGERIDOS

1. **Desktop** (1440×auto)
2. **Tablet** (768×auto)
3. **Mobile** (375×auto)

Cada frame contém todas as 7 seções empilhadas verticalmente.
