# Escola Estadual Ruy Rodriguez - Redesign

Este é o repositório do redesign do site da **Escola Estadual Ruy Rodriguez**, localizada em Campinas - SP. 

O site foi desenvolvido com tecnologias modernas de front-end para fornecer uma experiência visual premium, intuitiva e responsiva para a comunidade escolar (estudantes, pais, professores e funcionários).

---

## 🛠️ Tecnologias Utilizadas

* **React + Vite** (com TypeScript)
* **Tailwind CSS** (para estilização responsiva e moderna)
* **Framer Motion** (para micro-animações e efeitos visuais refinados)
* **Lucide React** (para ícones da interface)
* **Radix UI** (para componentes de acessibilidade)

---

## 🚀 Como Executar o Projeto Localmente

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

1. **Clone o repositório:**
   ```bash
   git clone <https://github.com/JuMariane/Ruy-rodriguez-2.0>
   cd ruy-rodriguez-redesign
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   *O site estará disponível em `http://localhost:8080`.*

4. **Gerar a build de produção:**
   ```bash
   npm run build
   ```

---

## 📂 Estrutura de Diretórios

* `src/components/` - Seções modulares da página (Nav, Hero, Sobre, Projetos, Antirracista, Contato, Rodapé).
* `src/pages/` - Páginas principais da aplicação.
* `src/assets/` - Imagens e recursos visuais estáticos.
* `src/index.css` - Estilos globais e tokens de cores baseados em HSL.
* `vercel.json` - Configuração para hospedagem SPA sem erros de roteamento na Vercel.
