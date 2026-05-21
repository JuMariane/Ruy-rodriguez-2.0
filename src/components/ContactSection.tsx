import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="py-24 bg-school-cream">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-primary mb-2 block">
            Fale Conosco
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Entre em contato
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            {
              icon: MapPin,
              title: "Endereço",
              info: "Rua Paulo Gliwkoff, 104",
              detail: "Conj. Hab. Parque Itajaí, Campinas - SP",
            },
            {
              icon: Clock,
              title: "Horário",
              info: "Fundamental (6º ao 9º): 07h00 às 14h00",
              detail: "Ensino Médio: 14h15 às 21h15",
            },
            {
              icon: Phone,
              title: "Telefone",
              info: "(19) 3261-1256",
              detail: "Secretaria Escolar",
            },
            {
              icon: Mail,
              title: "E-mail",
              info: "e905471a@educacao.sp.gov.br",
              detail: "Atendimento Institucional",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 border border-border text-center"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-base font-semibold text-foreground mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">{item.info}</p>
              <p className="text-sm font-medium text-foreground/80 mt-1">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
