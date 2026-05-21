# Relatório de Implementação e Redesenho — Escola Estadual Prof. Ruy Rodriguez

Este relatório detalha todas as atualizações, melhorias visuais, lógicas de segurança e de conteúdo implementadas no redesign do portal da Escola Estadual Prof. Ruy Rodriguez. 

Todas as alterações descritas aqui estão compiladas, testadas e publicadas no repositório GitHub do projeto ([JuMariane/Ruy-rodriguez-2.0](https://github.com/JuMariane/Ruy-rodriguez-2.0)).

---

## 🔑 1. Sistema de Acesso Acadêmico (Login)

Adicionamos uma aba de login moderna em formato de modal com estilo Glassmorphism (efeito translúcido premium) para gerenciar o acesso ao site e restringir operações no mural.

### Validação de E-mails Institucionais (SED)
O portal valida os e-mails informados com base nos domínios oficiais da Secretaria de Educação do Estado de São Paulo:

* **Estudante**:
  * **Formato exigido**: `RA + dígito verificador + @al.educacao.sp.gov.br` (ex: `000123456789x@al.educacao.sp.gov.br` ou `1234567890sp@al.educacao.sp.gov.br`).
  * **Cargo**: `student` (Estudante).
  * **Permissões**: Pode criar postagens, curtir publicações e excluir apenas os posts que ele mesmo criou.
* **Gestão Escolar e Professores**:
  * **Formato exigido**: Finalizados em `@educacao.sp.gov.br` ou `@professor.educacao.sp.gov.br` (ex: `professor@professor.educacao.sp.gov.br`).
  * **Cargo**: `management` (Gestão).
  * **Permissões**: Administrador do portal. Pode criar postagens, curtir e **excluir qualquer publicação** contida no mural.
* **Conta de Administração Geral (Teste)**:
  * Criamos uma credencial administrativa coringa para testes e homologação rápida: `admin@admin.com` (com o cargo de Gestão).

### Fluxo de Recuperação de Senha por Código
Caso o usuário cadastrado esqueça a senha, implementamos um assistente passo a passo interativo dentro do próprio modal:
1. **Solicitação**: O usuário clica em "Esqueceu a senha?" e informa seu e-mail institucional cadastrado.
2. **Geração do Código**: O sistema gera um código numérico randômico de 6 dígitos (ex: `847192`) e simula o envio de e-mail disparando um Toast (notificação informativa) contendo o código para que você o copie.
3. **Validação**: O usuário digita o código de 6 dígitos no modal.
4. **Redefinição**: Ao digitar o código correto, a tela muda para "Nova Senha", permitindo criar e confirmar a nova credencial, que é atualizada imediatamente no banco local.

---

## 📌 2. Mural da Comunidade (Projetos & Recados)

O mural foi transformado em um espaço colaborativo vivo e seguro para a exibição de trabalhos e comunicados da escola.

### Lógica de Controle de Acesso e Permissão
* **Apenas Usuários Logados**: O formulário de envio de novas publicações está bloqueado para visitantes. Caso um usuário tente postar, o sistema exibe um aviso e abre o modal de login automaticamente.
* **Remoção Condicional (Botão de Lixeira)**:
  * Se o usuário logado for **Gestão**, o botão de excluir (`Trash2`) aparece em todos os cards do mural.
  * Se for **Estudante**, o botão de excluir só aparece nos cards criados pelo e-mail do próprio estudante ativo.
  * Se for um visitante não logado, o botão de exclusão não é exibido in nenhum card.
* **Envio Anônimo**: Adicionamos a opção "Anônimo" no formulário de criação. Quando ativada, o nome do autor é omitido no card público, mas o sistema guarda o e-mail do criador em segundo plano para que ele ainda consiga gerenciar e apagar seu próprio post se desejar.

### Solução para Limite de Cota (Compressão de Imagem)
Para evitar que o site pare de funcionar ou que ocorram travamentos ao enviar fotos tiradas de celulares modernos (que chegam a ter 5MB ou mais), implementamos um downscaler em canvas HTML5 no navegador:
* Imagens muito grandes são redimensionadas proporcionalmente para uma largura máxima de 600px.
* São exportadas no formato JPEG compacto com qualidade 0.6.
* O tamanho das mídias cai de 3MB para aproximadamente **20-50KB**, garantindo que caibam perfeitamente na memória persistida (`localStorage`) sem estourar o limite de armazenamento.

---

## 🎨 3. Design e Ajustes de Mídia

* **Restauração de Assets originais**: Revertemos as imagens borradas dos estudantes e reintegramos as fotos reais originais em formato `.jpg` no diretório `/src/assets/`, adaptando todos os imports dos componentes para carregar essas imagens com nitidez.
* **Dúvidas Expandidas (FAQ)**: Reestruturamos o FAQ escolar respondendo as dúvidas com base nos dados oficiais e modelo pedagógico da escola:
  * Explicação detalhada do modelo PEI (Grade curricular diferenciada de 7 horas diárias, Tutoria, Clubes e Eletivas).
  * Informações reais de alimentação (Nutricionista, turnos da manhã e tarde).
  * Detalhes sobre os Cursos Técnicos integrados Novotec oferecidos (Desenvolvimento de Sistemas, Vendas, Administração).
  * Informações sobre a Secretaria Escolar Digital (SED), emissão de documentos e telefones oficiais.
* **Responsividade e Transições**: Todos os elementos usam transições do Framer Motion e adaptam-se perfeitamente a dispositivos móveis, tablets e monitores de alta resolução.

---

## 📋 4. Persistência de Dados (Local Storage)

Para simular o funcionamento de um banco de dados real em ambientes estáticos (como o Vercel) sem custos adicionais de servidores, o site utiliza:
* `ruy_user`: Guarda os dados da sessão do usuário atualmente conectado.
* `ruy_mural_posts`: Armazena a lista de postagens do mural (incluindo as iniciais e as criadas pelos alunos).
* `ruy_registered_users`: Mapeia e-mails e senhas cadastradas para validar acessos e permitir redefinições de senha no site.
* `ruy_mural_liked_ids`: Memoriza quais postagens o navegador atual curtiu, impedindo que o mesmo usuário clique repetidamente para burlar o contador de curtidas.

---

## 🚀 5. Verificação de Build

O projeto passou com sucesso por testes locais de compilação sem quaisquer erros de TypeScript ou CSS:
```bash
npm run build
```
O build final gerou os arquivos de produção leves e otimizados na pasta `/dist`, prontos para deploy contínuo em qualquer plataforma (Vercel, Netlify, etc.).
