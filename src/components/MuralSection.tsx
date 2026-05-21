import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ArrowRight, Plus, X, Image, Search, Heart, Pin, Trash2 } from "lucide-react";
import { toast } from "sonner";

import projetoBanner from "@/assets/projeto-banner.jpg";
import visitaIac from "@/assets/visita-iac.jpg";
import baciaHidro from "@/assets/bacia-hidrografica.jpg";
import chiquinhaImg from "@/assets/chiquinha-gonzaga.jpg";
import teatroOriki from "@/assets/teatro-oriki.jpg";
import sambaRuy from "@/assets/samba-ruy.jpg";

interface ProjectPost {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  description: string;
  tag: string;
  image: string;
  link: string;
  likes: number;
  authorEmail?: string;
}

const initialProjects: ProjectPost[] = [
  {
    id: "proj-1",
    title: "Jornada de Investigação Científica",
    subtitle: "Apresentação e Banners na Escola",
    date: "Novembro 2025",
    description: "Estudantes apresentaram banners científicos com resultados de pesquisas sobre a qualidade da água e meio ambiente regional.",
    tag: "Ciências",
    image: projetoBanner,
    link: "#",
    likes: 12,
  },
  {
    id: "proj-2",
    title: "Visita ao Instituto Agronômico",
    subtitle: "IAC-Apta Portas Abertas",
    date: "Outubro 2025",
    description: "Visita técnica ao Instituto Agronômico de Campinas com apresentação de linhas de pesquisa e visitas guiadas.",
    tag: "Técnico / Novotec",
    image: visitaIac,
    link: "#",
    likes: 8,
  },
  {
    id: "proj-3",
    title: "Estudo da Bacia Hidrográfica",
    subtitle: "Visita Técnica e Análises",
    date: "Maio 2025",
    description: "Coleta e análise de amostras de água em nascentes do Parque Itajaí para verificar a qualidade hídrica regional.",
    tag: "Ciências",
    image: baciaHidro,
    link: "#",
    likes: 15,
  },
  {
    id: "proj-4",
    title: "Projeto Chiquinha Gonzaga",
    subtitle: "Trilha de Educação Antirracista",
    date: "Novembro 2023",
    description: "Projeto interdisciplinar de valorização da música e cultura afro-brasileira a partir da história da compositora.",
    tag: "Eletivas",
    image: chiquinhaImg,
    link: "#",
    likes: 24,
  },
  {
    id: "proj-5",
    title: "Peça Teatral Olorum Ayé",
    subtitle: "Grupo Oriki de Teatro",
    date: "Outubro 2023",
    description: "Peça de teatro auto-organizada pelos alunos celebrando a mitologia e a ancestralidade afro-brasileira.",
    tag: "Clubes",
    image: teatroOriki,
    link: "#",
    likes: 19,
  },
  {
    id: "proj-6",
    title: "O Samba do Ruy",
    subtitle: "Atividade de Eletiva Artística",
    date: "Setembro 2023",
    description: "Apresentação musical e debate histórico sobre o samba como patrimônio e manifestação popular brasileira.",
    tag: "Cultura",
    image: sambaRuy,
    link: "#",
    likes: 31,
  },
];

const tagColors: Record<string, string> = {
  Eletivas: "bg-purple-100 text-purple-700 border border-purple-200 dark:bg-purple-950/40 dark:text-purple-300 dark:border-purple-900/60",
  Clubes: "bg-pink-100 text-pink-700 border border-pink-200 dark:bg-pink-950/40 dark:text-pink-300 dark:border-pink-900/60",
  "Técnico / Novotec": "bg-amber-100 text-amber-700 border border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-900/60",
  "Ciências": "bg-emerald-100 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-900/60",
  Cultura: "bg-orange-100 text-orange-700 border border-orange-200 dark:bg-orange-950/40 dark:text-orange-300 dark:border-orange-900/60",
  Recado: "bg-sky-100 text-sky-700 border border-sky-200 dark:bg-sky-950/40 dark:text-sky-300 dark:border-sky-900/60",
};

import { UserType } from "./LoginModal";

interface MuralSectionProps {
  user: UserType | null;
  onOpenLogin: () => void;
}

const MuralSection = ({ user, onOpenLogin }: MuralSectionProps) => {
  // Persistence state
  const [projectList, setProjectList] = useState<ProjectPost[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("ruy_mural_posts");
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          console.error("Erro ao carregar posts do localStorage:", e);
        }
      }
    }
    return initialProjects;
  });

  // Keep track of liked posts in this browser session
  const [likedPosts, setLikedPosts] = useState<string[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("ruy_mural_liked_ids");
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          return [];
        }
      }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("ruy_mural_posts", JSON.stringify(projectList));
  }, [projectList]);

  useEffect(() => {
    localStorage.setItem("ruy_mural_liked_ids", JSON.stringify(likedPosts));
  }, [likedPosts]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Search & Filters states
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("Todos");

  // Form states
  const [selectedTag, setSelectedTag] = useState("Eletivas");
  const [isAnonymous, setIsAnonymous] = useState(false);
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
      // Validate file size is under 15MB for local compression (browser limit)
      if (file.size > 15 * 1024 * 1024) {
        toast.error("A imagem selecionada é muito grande. Escolha uma foto com menos de 15MB.");
        return;
      }

      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        const img = new window.Image();
        img.src = reader.result as string;
        img.onload = () => {
          // Compress using canvas to prevent exceeding localStorage quota
          const canvas = document.createElement("canvas");
          const MAX_WIDTH = 600; // Optimal width for cards
          const MAX_HEIGHT = 450; // Optimal height for cards
          let width = img.width;
          let height = img.height;

          if (width > height) {
            if (width > MAX_WIDTH) {
              height *= MAX_WIDTH / width;
              width = MAX_WIDTH;
            }
          } else {
            if (height > MAX_HEIGHT) {
              width *= MAX_HEIGHT / height;
              height = MAX_HEIGHT;
            }
          }

          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext("2d");
          if (ctx) {
            ctx.drawImage(img, 0, 0, width, height);
            // Get compressed jpeg data url (quality 0.6)
            // This compresses images to ~20-50KB instead of 3MB+!
            const compressedDataUrl = canvas.toDataURL("image/jpeg", 0.6);
            setImagePreview(compressedDataUrl);
          } else {
            setImagePreview(reader.result as string);
          }
        };
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || (!isAnonymous && !author) || !description) {
      toast.error("Por favor, preencha os campos obrigatórios (Título, " + (isAnonymous ? "" : "Autor ") + "e Descrição).");
      return;
    }

    const authorDisplayName = isAnonymous ? "Anônimo" : author;

    const newPost: ProjectPost = {
      id: `custom-${Date.now()}`,
      title,
      subtitle: subtitle || authorDisplayName,
      date: "Hoje",
      description,
      tag: selectedTag,
      image: imagePreview || "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&auto=format&fit=crop&q=60",
      link: link || "#",
      likes: 0,
      authorEmail: user?.email,
    };

    try {
      const updatedList = [newPost, ...projectList];
      setProjectList(updatedList);
      
      // Tentativa de salvar imediatamente para detectar erros de cota
      localStorage.setItem("ruy_mural_posts", JSON.stringify(updatedList));
      toast.success("Publicação adicionada ao mural com sucesso!");
    } catch (error) {
      console.error("Erro de persistência local:", error);
      toast.error("Erro ao salvar! A imagem pode ser muito pesada. Tente com outra foto menor.");
      return;
    }

    // Reset states
    setTitle("");
    setSubtitle("");
    setAuthor("");
    setIsAnonymous(false);
    setDescription("");
    setImageFile(null);
    setImagePreview(null);
    setLink("");
    setIsModalOpen(false);
  };

  const handleLike = (id: string) => {
    const isAlreadyLiked = likedPosts.includes(id);
    if (isAlreadyLiked) {
      // Unlike
      setLikedPosts(likedPosts.filter((postId) => postId !== id));
      setProjectList(
        projectList.map((post) =>
          post.id === id ? { ...post, likes: Math.max(0, post.likes - 1) } : post
        )
      );
    } else {
      // Like
      setLikedPosts([...likedPosts, id]);
      setProjectList(
        projectList.map((post) =>
          post.id === id ? { ...post, likes: post.likes + 1 } : post
        )
      );
    }
  };

  const handleDelete = (id: string) => {
    const postToDelete = projectList.find((p) => p.id === id);
    if (!postToDelete) return;

    const canDelete =
      user?.role === "management" ||
      (user?.role === "student" && postToDelete.authorEmail === user.email);

    if (!canDelete) {
      toast.error("Você não tem permissão para excluir esta publicação.");
      return;
    }

    const updatedList = projectList.filter((p) => p.id !== id);
    setProjectList(updatedList);
    localStorage.setItem("ruy_mural_posts", JSON.stringify(updatedList));
    toast.success("Publicação excluída com sucesso!");
  };

  // Prefill author name when modal opens
  useEffect(() => {
    if (isModalOpen && user) {
      setAuthor(user.name);
    }
  }, [isModalOpen, user]);

  const filters = ["Todos", "Eletivas", "Clubes", "Técnico / Novotec", "Ciências", "Cultura", "Recado"];

  const filteredProjects = projectList.filter((project) => {
    const matchesFilter = activeFilter === "Todos" || project.tag === activeFilter;
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tag.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="mural" className="py-24 bg-school-cream/35 border-y border-border/80 scroll-mt-16">
      <div className="container mx-auto px-4">
        {/* Header Exclusivo e Bonito do Mural */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold tracking-widest uppercase text-primary bg-primary/10 px-4 py-1.5 rounded-full inline-block mb-3">
            Mural da Comunidade
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Projetos, Eletivas & Recados
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            O nosso espaço interativo de exposição. Acompanhe os projetos das Eletivas, Clubes, Cursos Técnicos/Novotec e recados importantes.
          </p>
        </motion.div>

        {/* Board Container */}
        <div className="bg-background rounded-[2rem] p-6 md:p-10 border border-border shadow-soft relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px] dark:opacity-[0.05]" />

          {/* Banner Informativo & CTA */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-school-cream/40 border border-border/60 mb-10 relative z-10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Pin className="w-5 h-5 text-primary rotate-45" />
              </div>
              <div>
                <h3 className="font-display font-bold text-foreground text-base mb-1">
                  Espaço Colaborativo Ruy Rodriguez
                </h3>
                <p className="text-xs text-muted-foreground font-body leading-relaxed max-w-xl">
                  {user 
                    ? `Identificado como ${user.role === "management" ? "Gestão" : "Estudante"}. Compartilhe o que você anda criando!`
                    : "Espaço restrito para alunos e gestão. Entre com seu e-mail acadêmico para publicar ou remover postagens."}
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                if (!user) {
                  toast.error("Acesso Restrito", {
                    description: "Por favor, faça login com seu e-mail acadêmico para publicar no mural."
                  });
                  onOpenLogin();
                } else {
                  setIsModalOpen(true);
                }
              }}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-xs hover:bg-school-red-dark active:scale-[0.98] hover:scale-[1.02] transition-all shrink-0 shadow-hero"
            >
              <Plus className="w-4 h-4" /> Criar Publicação
            </button>
          </div>

          {/* Barra de Filtros e Busca */}
          <div className="mb-8 flex flex-col lg:flex-row lg:items-center justify-between gap-4 relative z-10">
            {/* Categorias (Filtros) */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none w-full lg:w-auto">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
                    activeFilter === filter
                      ? "bg-primary border-primary text-primary-foreground shadow-sm"
                      : "bg-muted border-border text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Input de Busca */}
            <div className="relative shrink-0 w-full lg:w-80">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Pesquisar por título, descrição ou tag..."
                className="w-full pl-10 pr-4 py-2.5 text-xs bg-muted/80 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors focus:ring-1 focus:ring-primary/20"
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                <Search className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* Grid de Projetos */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => {
                const isLiked = likedPosts.includes(project.id);
                return (
                  <motion.article
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -30 }}
                    transition={{ duration: 0.4 }}
                    className="group bg-card rounded-2xl overflow-hidden border border-border/80 hover:shadow-elevated hover:border-primary/20 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      {/* Image section */}
                      <div className="aspect-[16/10] overflow-hidden bg-muted relative">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3">
                          <span className={`text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full shadow-sm ${tagColors[project.tag] || "bg-muted text-muted-foreground"}`}>
                            {project.tag}
                          </span>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3 text-[10px] text-muted-foreground">
                          <span className="font-semibold text-primary/80">{project.subtitle}</span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {project.date}
                          </span>
                        </div>

                        <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {project.title}
                        </h3>
                        <p className="text-xs text-muted-foreground font-body leading-relaxed line-clamp-4">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    {/* Footer Actions inside Card */}
                    <div className="px-6 pb-6 pt-2 border-t border-border/30 flex items-center justify-between">
                      {project.link && project.link !== "#" ? (
                        <a 
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-school-red-dark transition-colors cursor-pointer"
                        >
                          Acessar conteúdo <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <span className="text-[10px] text-muted-foreground italic">Compartilhado no Mural</span>
                      )}

                      <div className="flex items-center gap-2">
                        {/* Delete button (visible to Gestão for all, and to Student only for their own posts) */}
                        {user && (user.role === "management" || (user.role === "student" && project.authorEmail === user.email)) && (
                          <button
                            onClick={() => handleDelete(project.id)}
                            className="p-1.5 rounded-lg text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
                            title="Excluir publicação"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}

                        {/* Like button */}
                        <button
                          onClick={() => handleLike(project.id)}
                          className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                            isLiked
                              ? "bg-rose-500/10 text-rose-500"
                              : "text-muted-foreground hover:text-rose-500 hover:bg-rose-500/5"
                          }`}
                          title={isLiked ? "Descurtir" : "Curtir"}
                        >
                          <Heart className={`w-3.5 h-3.5 transition-transform duration-250 ${isLiked ? "fill-rose-500 scale-110" : ""}`} />
                          <span>{project.likes}</span>
                        </button>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 relative z-10"
            >
              <div className="w-16 h-16 rounded-full bg-muted/60 flex items-center justify-center mx-auto mb-4">
                <Search className="w-6 h-6 text-muted-foreground/60" />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-1">Nenhuma publicação encontrada</h3>
              <p className="text-muted-foreground text-xs font-body max-w-sm mx-auto">
                Tente ajustar os termos da pesquisa ou selecione outra categoria para ver outros posts.
              </p>
            </motion.div>
          )}
        </div>
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
              className="absolute inset-0 bg-background/80 backdrop-blur-md"
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
                  Compartilhe recados, projetos escolares, matérias técnicas ou eletivas com a comunidade.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Select Tag (Category) */}
                <div>
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-2">
                    Categoria / Tag
                  </label>
                  <div className="flex flex-wrap gap-1.5">
                    {["Eletivas", "Clubes", "Técnico / Novotec", "Ciências", "Cultura", "Recado"].map((t) => (
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
                    <div className="flex items-center justify-between mb-1">
                      <label htmlFor="author" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        Seu Nome & Turma / Cargo {!isAnonymous && "*"}
                      </label>
                      <label className="flex items-center gap-1.5 text-[10px] font-semibold text-muted-foreground cursor-pointer select-none">
                        <input
                          type="checkbox"
                          checked={isAnonymous}
                          onChange={(e) => {
                            setIsAnonymous(e.target.checked);
                            if (e.target.checked) setAuthor("");
                          }}
                          className="rounded border-border text-primary focus:ring-primary w-3.5 h-3.5 cursor-pointer"
                        />
                        Anônimo
                      </label>
                    </div>
                    <input
                      id="author"
                      type="text"
                      required={!isAnonymous}
                      disabled={isAnonymous}
                      value={isAnonymous ? "Anônimo" : author}
                      onChange={(e) => setAuthor(e.target.value)}
                      placeholder={isAnonymous ? "Seu nome será ocultado" : "Ex: João - 3º Ano B ou Profª Marina"}
                      className={`w-full px-3.5 py-2.5 text-sm border rounded-xl transition-colors focus:outline-none focus:border-primary/50 ${
                        isAnonymous 
                          ? "bg-muted/40 text-muted-foreground border-border/50 cursor-not-allowed" 
                          : "bg-muted border-border text-foreground placeholder:text-muted-foreground"
                      }`}
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
                      placeholder="Ex: Protótipo de E-commerce do Novotec"
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
                      placeholder="Ex: Trabalho de Desenvolvimento de Sistemas"
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
                      placeholder="Ex: https://github.com/..."
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
                    placeholder="Escreva do que se trata seu projeto ou recado..."
                    className="w-full px-3.5 py-2.5 text-sm bg-muted border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  />
                </div>

                {/* Imagem (Mídia) */}
                <div>
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-1">
                    Adicionar Imagem
                  </label>
                  <div className="relative border-2 border-dashed border-border rounded-xl p-4 flex flex-col items-center justify-center bg-muted/50 hover:bg-muted transition-colors cursor-pointer min-h-[100px]">
                    {imagePreview ? (
                      <div className="relative w-full h-28 rounded-lg overflow-hidden">
                        <img
                          src={imagePreview}
                          alt="Preview"
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
                        <span className="text-[10px] text-muted-foreground mt-0.5">JPG, PNG (máx 5MB)</span>
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

export default MuralSection;
