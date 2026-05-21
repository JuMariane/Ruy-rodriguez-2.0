import { motion } from "framer-motion";
import { Calendar, ArrowRight, BookOpen, Star, Compass, ShieldCheck, Pin } from "lucide-react";

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

const SchoolLifeSection = () => {
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
            Projetos Pedagógicos & Recantos da Comunidade
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
          className="max-w-3xl mx-auto mb-16 p-6 rounded-2xl bg-primary/5 border border-primary/10 flex flex-col md:flex-row items-center gap-4 text-center md:text-left"
        >
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <Pin className="w-6 h-6 text-primary rotate-45" />
          </div>
          <div>
            <h3 className="font-display font-bold text-foreground text-lg mb-1">
              Como funciona este Mural Colaborativo?
            </h3>
            <p className="text-sm text-muted-foreground font-body leading-relaxed">
              Diferente do formato antigo, o novo site conta com um espaço integrado para dar voz a todos! A gestão e os professores publicam comunicados, enquanto os alunos podem expor os projetos dos Clubes, Eletivas e Jornadas Científicas. <strong>Quer divulgar seu trabalho ou deixar um recado?</strong> Fale com o seu professor tutor ou procure a secretaria para incluir sua publicação.
            </p>
          </div>
        </motion.div>

        {/* Projetos Grid */}
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

export default SchoolLifeSection;
