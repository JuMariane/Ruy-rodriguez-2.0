import { motion } from "framer-motion";
import { BookOpen, Users, Microscope, Globe, Monitor, ShoppingCart, Briefcase, Info, Laptop, MapPin } from "lucide-react";
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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-primary mb-2 block">
            A Escola
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Uma escola que transforma
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            A Escola Estadual Ruy Rodriguez é referência em educação pública e profissional em Campinas, operando no modelo de Ensino Integral (PEI).
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
          className="mb-20 flex justify-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
            <BookOpen className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-foreground">
              Programa de Ensino Integral (PEI)
            </span>
          </div>
        </motion.div>

        {/* Grid de Diferenciais */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
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

        {/* Patrono & Infraestrutura */}
        <div className="grid lg:grid-cols-2 gap-12 mb-24 items-stretch">
          {/* Patrono */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-school-cream rounded-2xl p-8 border border-border flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
                <Users className="w-3.5 h-3.5" /> Nosso Patrono
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Prof. Ruy Rodriguez
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed mb-4">
                O Professor Ruy Rodriguez foi um ilustre educador, jurista e líder comunitário em Campinas. Destacou-se pelo seu profundo compromisso social e por sua visão transformadora sobre o papel da educação na vida dos jovens.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed">
                Sua maior contribuição social foi a fundação da <strong>"Guardinha de Campinas"</strong> (Associação de Educação do Homem de Amanhã), uma instituição pioneira que há décadas promove a formação profissional, inserção no mercado de trabalho e amparo pedagógico para milhares de jovens da região. A nossa escola carrega com orgulho seu nome e seu legado de transformação social.
              </p>
            </div>
          </motion.div>

          {/* Ficha Técnica e Infraestrutura */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-2xl p-8 border border-border flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
                <Info className="w-3.5 h-3.5" /> Ficha Técnica & Recursos
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                Infraestrutura Completa
              </h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Laptop className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">Equipamentos Tecnológicos</h4>
                    <p className="text-xs text-muted-foreground">75 tablets dedicados, 52 notebooks portáteis e Laboratório de Informática completo para as aulas técnicas de Desenvolvimento de Sistemas.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Microscope className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">Laboratório Multiuso</h4>
                    <p className="text-xs text-muted-foreground">Espaço equipado para práticas científicas, física, química e biologia, promovendo o ensino investigativo.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Info className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">Identificação Escolar</h4>
                    <p className="text-xs text-muted-foreground"><strong>Código CIE:</strong> 905471 | <strong>Diretoria de Ensino:</strong> Campinas Oeste. Acessibilidade garantida com rampas e banheiros adaptados.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Localização / Google Maps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden border border-border shadow-soft"
        >
          <div className="p-6 bg-card border-b border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-display text-xl font-bold text-foreground flex items-center gap-2">
                <MapPin className="text-primary w-5 h-5" /> Nossa Localização
              </h3>
              <p className="text-sm text-muted-foreground font-body mt-1">
                Rua Paulo Gliwkoff, 104 - Conj. Hab. Parque Itajaí, Campinas - SP, 13058-023
              </p>
            </div>
            <a 
              href="https://maps.google.com/?q=E.E.+Prof.+Ruy+Rodriguez+Rua+Paulo+Gliwkoff+104+Campinas" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-primary text-primary-foreground font-semibold text-xs hover:bg-school-red-dark transition-colors"
            >
              Abrir no Google Maps
            </a>
          </div>
          <div className="w-full h-80 bg-muted">
            <iframe
              src="https://maps.google.com/maps?q=E.E.%20Prof.%20Ruy%20Rodriguez%2C%20Rua%20Paulo%20Gliwkoff%2C%20104%20-%20Conjunto%20Habitacional%20Parque%20Itaja%C3%AD%2C%20Campinas%20-%20SP&t=&z=17&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de localização da escola"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
