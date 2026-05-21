import { motion } from "framer-motion";
import { Download, FileText, Calendar, Utensils } from "lucide-react";
import { toast } from "sonner";

const documents = [
  {
    icon: Calendar,
    title: "Calendário Escolar 2026",
    description: "Datas de início/fim de bimestres, férias escolares, feriados e reuniões de pais.",
    filename: "calendario_escolar_2026.pdf",
    size: "1.2 MB",
  },
  {
    icon: Utensils,
    title: "Cardápio da Semana",
    description: "Refeições completas fornecidas diariamente (café da manhã, almoço, lanche e jantar).",
    filename: "cardapio_semanal_ruy.pdf",
    size: "840 KB",
  },
  {
    icon: FileText,
    title: "Lista de Materiais Didáticos",
    description: "Lista de materiais básicos recomendados para o Ensino Fundamental e Médio.",
    filename: "lista_materiais_didaticos.pdf",
    size: "520 KB",
  },
];

const DownloadsSection = () => {
  const handleDownload = (title: string, filename: string) => {
    toast.success(`Download iniciado: ${title}`, {
      description: `O arquivo "${filename}" está sendo baixado em seu dispositivo.`,
    });
  };

  return (
    <section id="documentos" className="py-24 bg-school-cream border-t border-border">
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
            Secretaria Digital
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Documentos & Downloads
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            Acesse rapidamente arquivos importantes, cardápios e informativos da nossa escola.
          </p>
        </motion.div>

        {/* Grid de Documentos */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {documents.map((doc, i) => (
            <motion.div
              key={doc.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 border border-border flex flex-col justify-between hover:shadow-soft hover:border-primary/25 transition-all duration-300"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <doc.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {doc.title}
                </h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed mb-6">
                  {doc.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border/60">
                <span className="text-xs font-semibold text-muted-foreground">
                  PDF · {doc.size}
                </span>
                <button
                  onClick={() => handleDownload(doc.title, doc.filename)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-semibold text-xs hover:bg-school-red-dark transition-colors shadow-soft"
                >
                  <Download className="w-3.5 h-3.5" /> Baixar
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DownloadsSection;
