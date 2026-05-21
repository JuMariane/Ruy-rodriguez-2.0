import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

import projetoBanner from "@/assets/projeto-banner.jpg";
import visitaIac from "@/assets/visita-iac.jpg";
import baciaHidro from "@/assets/bacia-hidrografica.jpg";
import chiquinhaImg from "@/assets/chiquinha-gonzaga.jpg";
import teatroOriki from "@/assets/teatro-oriki.jpg";
import sambaRuy from "@/assets/samba-ruy.jpg";

const projects = [
  {
    title: "Jornada de Investigação Científica",
    subtitle: "Banner e Apresentação na Escola",
    date: "Novembro 2025",
    description: "Estudantes apresentaram banners científicos com resultados de pesquisas sobre qualidade da água e meio ambiente.",
    tag: "Ciências",
    image: projetoBanner,
  },
  {
    title: "Visita ao Instituto Agronômico",
    subtitle: "IAC-Apta Portas Abertas",
    date: "Outubro 2025",
    description: "Visita técnica ao Instituto Agronômico de Campinas com apresentação de linhas de pesquisa e visitas guiadas.",
    tag: "Ciências",
    image: visitaIac,
  },
  {
    title: "Visita à Bacia Hidrográfica",
    subtitle: "Estudo do Meio Ambiente",
    date: "Maio 2025",
    description: "Coleta de amostras de água em nascentes do Parque Itajaí para análise da qualidade hídrica regional.",
    tag: "Meio Ambiente",
    image: baciaHidro,
  },
  {
    title: "Chiquinha Gonzaga",
    subtitle: "Trilha Antirracista",
    date: "Novembro 2023",
    description: "Projeto de valorização da cultura afro-brasileira através da vida e obra de Chiquinha Gonzaga.",
    tag: "Antirracismo",
    image: chiquinhaImg,
  },
  {
    title: "Peça Olorum Ayé",
    subtitle: "Grupo Oriki – Teatro",
    date: "Outubro 2023",
    description: "Espetáculo teatral que celebra a cultura e a espiritualidade afro-brasileira com os estudantes.",
    tag: "Cultura",
    image: teatroOriki,
  },
  {
    title: "Samba do Ruy",
    subtitle: "Cultura Popular na Escola",
    date: "Setembro 2023",
    description: "Evento musical que trouxe o samba como expressão cultural e ferramenta pedagógica para os estudantes.",
    tag: "Cultura",
    image: sambaRuy,
  },
];

const tagColors: Record<string, string> = {
  Ciências: "bg-school-warm/15 text-school-warm",
  "Meio Ambiente": "bg-emerald-100 text-emerald-700",
  Cultura: "bg-school-gold/15 text-school-gold",
  Antirracismo: "bg-primary/10 text-primary",
};

const ProjectsSection = () => {
  return (
    <section id="projetos" className="py-24 bg-school-cream">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-primary mb-2 block">
            Nossos Projetos
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Aprendizado em ação
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            Conheça os projetos que fazem da nossa escola um espaço de descoberta e transformação.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-elevated hover:border-primary/20 transition-all duration-300"
            >
              <div className="aspect-[16/10] overflow-hidden">
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

                <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Saiba mais <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
