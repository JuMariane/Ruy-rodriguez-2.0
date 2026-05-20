import { motion } from "framer-motion";
import { BookOpen, Users, Microscope, Globe, Monitor, ShoppingCart, Briefcase } from "lucide-react";
import fachadaImg from "@/assets/fachada-escola.png";

const features = [
  {
    icon: Monitor,
    title: "Desenvolvimento de Sistemas",
    description: "Curso técnico que forma profissionais para criar e manter softwares e sistemas.",
  },
  {
    icon: ShoppingCart,
    title: "Técnico em Vendas",
    description: "Formação técnica em estratégias comerciais, atendimento ao cliente e gestão de vendas.",
  },
  {
    icon: Briefcase,
    title: "Técnico em Administração",
    description: "Curso que prepara estudantes para atuar em gestão empresarial e processos administrativos.",
  },
  {
    icon: Microscope,
    title: "Investigação Científica",
    description: "Projetos de iniciação científica com visitas a institutos de pesquisa.",
  },
  {
    icon: Globe,
    title: "Educação Antirracista",
    description: "Trilhas e projetos que valorizam a diversidade e a cultura afro-brasileira.",
  },
  {
    icon: Users,
    title: "Comunidade Ativa",
    description: "Grêmio estudantil, eventos culturais e participação da comunidade.",
  },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-primary mb-2 block">
            Quem Somos
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Uma escola que transforma
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            A Escola Estadual Ruy Rodriguez é uma escola de <strong className="text-foreground">período integral</strong> (14h30 às 21h30), 
            referência em educação pública com cursos técnicos profissionalizantes em Campinas.
          </p>
        </motion.div>

        {/* Fachada da escola */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 rounded-2xl overflow-hidden shadow-elevated border border-border max-w-3xl mx-auto"
        >
          <img
            src={fachadaImg}
            alt="Fachada da Escola Estadual Ruy Rodriguez"
            className="w-full h-auto object-cover"
          />
        </motion.div>

        {/* Horário destaque */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex justify-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
            <BookOpen className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-foreground">
              Escola Integral — 14h30 às 21h30
            </span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-elevated transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
