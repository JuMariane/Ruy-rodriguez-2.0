import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import heroImg from "@/assets/borboleta-escola.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center overflow-hidden pt-16">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Escola Ruy Rodriguez - Jardim e Fachada"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-foreground/20" />
      </div>

      <div className="container mx-auto relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-primary/90 text-primary-foreground mb-6"
          >
            Escola Estadual · Integral
          </motion.span>

          <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground leading-tight mb-6">
            Escola Ruy
            <br />
            <span className="italic">Rodriguez</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg md:text-xl text-primary-foreground/80 font-body leading-relaxed mb-4 max-w-lg"
          >
            Formando cidadãos críticos e profissionais qualificados através da educação, ciência e cultura.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-wrap gap-2 mb-8"
          >
            {["Desenvolvimento de Sistemas", "Vendas", "Administração"].map((curso) => (
              <span
                key={curso}
                className="inline-block px-3 py-1 rounded-md text-xs font-medium bg-primary-foreground/15 text-primary-foreground/90 backdrop-blur-sm border border-primary-foreground/10"
              >
                Técnico em {curso}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#horarios-fundamental"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-amber-500 text-foreground font-semibold text-sm hover:bg-amber-600 transition-colors shadow-soft"
            >
              <Sun className="w-4 h-4" /> Turno da Manhã - Fundamental
            </a>
            <a
              href="#horarios-medio"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-school-red-dark transition-colors shadow-hero"
            >
              <Moon className="w-4 h-4" /> Turno da Tarde - Médio
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
