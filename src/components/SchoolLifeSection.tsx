import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ArrowRight, BookOpen, Star, Compass, ShieldCheck, Pin, Plus, X, Image, Link, Check } from "lucide-react";
import { toast } from "sonner";

import projetoBanner from "@/assets/projeto-banner.jpg";
import visitaIac from "@/assets/visita-iac.jpg";
import baciaHidro from "@/assets/bacia-hidrografica.jpg";
import chiquinhaImg from "@/assets/chiquinha-gonzaga.jpg";
import teatroOriki from "@/assets/teatro-oriki.jpg";
import sambaRuy from "@/assets/samba-ruy.jpg";

const peiFeatures = [
  {
    icon: Compass,
    title: "Disciplinas Eletivas",
    description: "Matérias eletivas inovadoras escolhidas semestralmente pelos estudantes para expandir conhecimentos práticos, como robótica, empreendedorismo e teatro.",
  },
  {
    icon: Star,
    title: "Clubes Juvenis",
    description: "Espaços auto-organizados pelos próprios alunos com focos temáticos (dança, cinema, esportes), desenvolvendo liderança e trabalho em equipe.",
  },
  {
    icon: BookOpen,
    title: "Tutoria",
    description: "Acompanhamento individualizado e constante de um professor tutor escolhido pelo estudante para apoiar nos estudos e no seu Projeto de Vida.",
  },
  {
    icon: ShieldCheck,
    title: "Grêmio Estudantil",
    description: "Representação ativa dos estudantes no cotidiano escolar, organizando eventos, debates e defendendo os direitos do corpo discente.",
  },
];

const initialProjects = [
  {
    id: "proj-1",
    title: "Jornada de Investigação Científica",
    subtitle: "Banner e Apresentação na Escola",
    date: "Novembro 2025",
    description: "Estudantes apresentaram banners científicos com resultados de pesquisas sobre qualidade da água e meio ambiente.",
    tag: "Ciências",
    image: projetoBanner,
    link: "#",
  },
  {
    id: "proj-2",
    title: "Visita ao Instituto Agronômico",
    subtitle: "IAC-Apta Portas Abertas",
    date: "Outubro 2025",
    description: "Visita técnica ao Instituto Agronômico de Campinas com apresentação de linhas de pesquisa e visitas guiadas.",
    tag: "Ciências",
    image: visitaIac,
    link: "#",
  },
  {
    id: "proj-3",
    title: "Visita à Bacia Hidrográfica",
    subtitle: "Estudo do Meio Ambiente",
    date: "Maio 2025",
    description: "Coleta de amostras de água em nascentes do Parque Itajaí para análise da qualidade hídrica regional.",
    tag: "Meio Ambiente",
    image: baciaHidro,
    link: "#",
  },
  {
    id: "proj-4",
    title: "Chiquinha Gonzaga",
    subtitle: "Trilha Antirracista",
    date: "Novembro 2023",
    description: "Projeto de valorização da cultura afro-brasileira através da vida e obra de Chiquinha Gonzaga.",
    tag: "Antirracismo",
    image: chiquinhaImg,
    link: "#",
  },
  {
    id: "proj-5",
    title: "Peça Olorum Ayé",
    subtitle: "Grupo Oriki – Teatro",
    date: "Outubro 2023",
    description: "Espetáculo teatral que celebra a cultura e a espiritualidade afro-brasileira com os estudantes.",
    tag: "Cultura",
    image: teatroOriki,
    link: "#",
  },
  {
    id: "proj-6",
    title: "Samba do Ruy",
    subtitle: "Cultura Popular na Escola",
    date: "Setembro 2023",
    description: "Evento musical que trouxe o samba como expressão cultural e ferramenta pedagógica para os estudantes.",
    tag: "Cultura",
    image: sambaRuy,
    link: "#",
  },
];

const tagColors: Record<string, string> = {
  Ciências: "bg-school-warm/15 text-school-warm",
  "Meio Ambiente": "bg-emerald-100 text-emerald-700",
  Cultura: "bg-school-gold/15 text-school-gold",
  Antirracismo: "bg-primary/10 text-primary",
  Recado: "bg-sky-100 text-sky-700 border border-sky-200",
};

const SchoolLifeSection = () => {
  const [projectList, setProjectList] = useState(initialProjects);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form states
  const [selectedTag, setSelectedTag] = useState("Ciências");
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const localUrl = URL.createObjectURL(file);
      setImagePreview(localUrl);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !author || !description) {
      toast.error("Por favor, preencha os campos obrigatórios (Título, Autor e Descrição).");
      return;
    }

    const newPost = {
      id: `custom-${Date.now()}`,
      title,
      subtitle: subtitle || author,
      date: "Hoje",
      description,
      tag: selectedTag,
      image: imagePreview || "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&auto=format&fit=crop&q=60",
      link: link || "#",
    };

    setProjectList([newPost, ...projectList]);
    toast.success("Publicação adicionada ao mural com sucesso!");

    // Reset states
    setTitle("");
    setSubtitle("");
    setAuthor("");
    setDescription("");
    setImageFile(null);
    setImagePreview(null);
    setLink("");
    setIsModalOpen(false);
  };

  return (
    <section id="vida-escolar" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header Diferenciais */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-primary mb-2 block">
            Diferenciais PEI
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Vida Escolar e Protagonismo
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            Na Escola Ruy Rodriguez, os alunos são o centro das atividades. Conheça as práticas que impulsionam o protagonismo juvenil.
          </p>
        </motion.div>

        {/* Diferenciais Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {peiFeatures.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-school-cream rounded-2xl p-6 border border-border flex gap-4 hover:shadow-soft transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                <feat.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {feat.title}
                </h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">
                  {feat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Header Projetos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-primary mb-2 block">
            Mural da Comunidade
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Projetos Pedagógicos & Recados da Comunidade
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto font-body">
            Exposição de trabalhos e atividades extracurriculares desenvolvidas por alunos, professores e equipe escolar.
          </p>
        </motion.div>

        {/* Banner Informativo do Mural */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto mb-16 p-6 rounded-2xl bg-primary/5 border border-primary/10 flex flex-col md:flex-row items-center gap-6 text-center md:text-left justify-between"
        >
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Pin className="w-6 h-6 text-primary rotate-45" />
            </div>
            <div>
              <h3 className="font-display font-bold text-foreground text-lg mb-1">
                Mural de Projetos & Comunicados Interativos
              </h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed max-w-2xl">
                Este espaço é colaborativo! A gestão publica avisos, os professores deixam comunicados e os alunos compartilham suas produções das Eletivas e Clubes. <strong>Quer publicar um recado, ideia ou projeto?</strong> Clique no botão ao lado para postar com fotos e links!
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-school-red-dark active:scale-[0.98] transition-all shrink-0 shadow-hero hover:shadow-hover"
          >
            <Plus className="w-4 h-4" /> Nova Publicação
          </button>
        </motion.div>

        {/* Grid de Projetos */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {projectList.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -30 }}
                transition={{ duration: 0.4 }}
                className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-elevated hover:border-primary/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[16/10] overflow-hidden bg-muted">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${tagColors[project.tag] || "bg-muted text-muted-foreground"}`}>
                        {project.tag}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Calendar className="w-3.5 h-3.5" />
                        {project.date}
                      </span>
                    </div>

                    <h3 className="font-display text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium text-primary/70 mb-3">{project.subtitle}</p>
                    <p className="text-sm text-muted-foreground font-body leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-0">
                  {project.link && project.link !== "#" ? (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-school-red-dark transition-colors cursor-pointer"
                    >
                      Acessar conteúdo <ArrowRight className="w-4 h-4" />
                    </a>
                  ) : (
                    <div className="flex items-center gap-1 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      Ver detalhes <ArrowRight className="w-4 h-4" />
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal de Publicação */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-background/85 backdrop-blur-md"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-card border border-border rounded-2xl p-6 max-w-xl w-full shadow-elevated relative max-h-[90vh] overflow-y-auto z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground rounded-full hover:bg-muted transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6">
                <h3 className="font-display font-bold text-2xl text-foreground">
                  Nova publicação no Mural
                </h3>
                <p className="text-sm text-muted-foreground font-body mt-1">
                  Compartilhe recados, projetos escolares ou comunicados com a comunidade.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Select Tag (Category) */}
                <div>
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-2">
                    Categoria / Tag
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {["Ciências", "Meio Ambiente", "Cultura", "Antirracismo", "Recado"].map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setSelectedTag(t)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                          selectedTag === t
                            ? "bg-primary border-primary text-primary-foreground shadow-sm"
                            : "bg-muted border-border text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Nome e Título */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="author" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-1">
                      Seu Nome & Turma / Cargo *
                    </label>
                    <input
                      id="author"
                      type="text"
                      required
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                      placeholder="Ex: João - 1º Ano A ou Prof. Carlos"
                      className="w-full px-3.5 py-2.5 text-sm bg-muted border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="title" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-1">
                      Título da Publicação *
                    </label>
                    <input
                      id="title"
                      type="text"
                      required
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Ex: Maquete de Célula Animal"
                      className="w-full px-3.5 py-2.5 text-sm bg-muted border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>
                </div>

                {/* Subtítulo & Link */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="subtitle" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-1">
                      Subtítulo (Opcional)
                    </label>
                    <input
                      id="subtitle"
                      type="text"
                      value={subtitle}
                      onChange={(e) => setSubtitle(e.target.value)}
                      placeholder="Ex: Trabalho de Biologia"
                      className="w-full px-3.5 py-2.5 text-sm bg-muted border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="link" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-1">
                      Link de Acesso (Opcional)
                    </label>
                    <input
                      id="link"
                      type="url"
                      value={link}
                      onChange={(e) => setLink(e.target.value)}
                      placeholder="Ex: https://drive.google.com/..."
                      className="w-full px-3.5 py-2.5 text-sm bg-muted border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>
                </div>

                {/* Descrição */}
                <div>
                  <label htmlFor="description" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-1">
                    Descrição / Mensagem *
                  </label>
                  <textarea
                    id="description"
                    required
                    rows={3}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Explique do que se trata o projeto ou digite o aviso da comunidade..."
                    className="w-full px-3.5 py-2.5 text-sm bg-muted border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  />
                </div>

                {/* Imagem (Mídia) */}
                <div>
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-1">
                    Adicionar Imagem / Mídia
                  </label>
                  <div className="relative border-2 border-dashed border-border rounded-xl p-4 flex flex-col items-center justify-center bg-muted/50 hover:bg-muted transition-colors cursor-pointer min-h-[100px]">
                    {imagePreview ? (
                      <div className="relative w-full h-24 rounded-lg overflow-hidden">
                        <img
                          src={imagePreview}
                          alt="Preview da publicação"
                          className="w-full h-full object-cover"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            setImageFile(null);
                            setImagePreview(null);
                          }}
                          className="absolute top-1 right-1 p-1 bg-background/80 text-foreground hover:bg-background rounded-full hover:scale-105 transition-all shadow-sm"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ) : (
                      <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer py-2">
                        <Image className="w-7 h-7 text-muted-foreground mb-1" />
                        <span className="text-xs font-semibold text-foreground/80">Escolher uma foto</span>
                        <span className="text-[10px] text-muted-foreground mt-0.5">Formatos recomendados: JPG, PNG</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageChange}
                          className="hidden"
                        />
                      </label>
                    )}
                  </div>
                </div>

                {/* Botões do Formulário */}
                <div className="flex items-center justify-end gap-3 pt-4 border-t border-border/50">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2.5 rounded-xl border border-border text-sm font-semibold text-foreground hover:bg-muted transition-colors"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-school-red-dark active:scale-[0.98] transition-all shadow-sm flex items-center gap-1.5"
                  >
                    <Plus className="w-4 h-4" /> Publicar
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SchoolLifeSection;
