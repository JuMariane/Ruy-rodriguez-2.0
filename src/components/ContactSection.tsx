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
              info: "Campinas, São Paulo",
              detail: "Escola Estadual Ruy Rodriguez",
            },
            {
              icon: Clock,
              title: "Horário",
              info: "Escola Integral",
              detail: "14h30 às 21h30",
            },
            {
              icon: Phone,
              title: "Telefone",
              info: "Secretaria",
              detail: "Entre em contato",
            },
            {
              icon: Mail,
              title: "E-mail",
              info: "Atendimento",
              detail: "contato@eeruyrodriguez.edu.br",
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
