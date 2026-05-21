import { motion } from "framer-motion";
import { BookOpen, Star, Compass, ShieldCheck } from "lucide-react";

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

const SchoolLifeSection = () => {
  return (
    <section id="vida-escolar" className="py-24 bg-background scroll-mt-16">
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
        <div className="grid md:grid-cols-2 gap-8">
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
      </div>
    </section>
  );
};

export default SchoolLifeSection;
