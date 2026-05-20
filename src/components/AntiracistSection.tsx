import { motion } from "framer-motion";
import patternBg from "@/assets/pattern-bg.jpg";

const AntiracistSection = () => {
  return (
    <section id="antirracista" className="py-24 relative overflow-hidden">
      {/* Pattern background */}
      <div className="absolute inset-0 opacity-[0.06]">
        <img src={patternBg} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <span className="text-sm font-semibold tracking-widest uppercase text-primary mb-2 block">
              Educação Antirracista
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Diversidade é força
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4"
            >
              <p className="text-muted-foreground font-body text-lg leading-relaxed">
                Nossa escola é comprometida com a educação antirracista, promovendo projetos
                que valorizam a cultura afro-brasileira e indígena como parte fundamental
                da formação dos nossos estudantes.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed">
                Através de trilhas pedagógicas, teatro, dança, música e pesquisa,
                construímos um ambiente escolar que respeita e celebra a diversidade.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-4"
            >
              {[
                "Trilha Antirracista – Chiquinha Gonzaga e Nzinga Mbandi",
                "Teatro: Peça Olorum Ayé com Grupo Oriki",
                "Maculelê e danças afro-brasileiras",
                "Máscaras Africanas e arte de resistência",
                "Samba do Ruy – valorização da cultura popular",
                "Propaganda Publicitária Antirracista",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-lg bg-card border border-border"
                >
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span className="text-sm text-foreground font-body">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AntiracistSection;
