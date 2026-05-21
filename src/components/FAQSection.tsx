import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Como funciona o modelo PEI (Ensino Integral) na escola?",
    answer: "A escola funciona em regime de tempo integral com jornada de 7 horas diárias. O currículo une as disciplinas da Base Nacional Comum com a Parte Diversificada (Eletivas, Clubes Juvenis, Orientação de Estudos e Práticas de Ciências/Matemática), além do foco constante no Projeto de Vida do estudante.",
  },
  {
    question: "Quais são os horários de entrada e saída?",
    answer: "Os Anos Finais do Ensino Fundamental (6º ao 9º ano) entram às 07h00 e saem às 14h00. O Ensino Médio entra às 14h15 e sai às 21h15.",
  },
  {
    question: "Os alunos recebem refeições na escola?",
    answer: "Sim. No turno da manhã são servidos o café da manhã e o almoço. No turno da tarde/noite são oferecidos o lanche da tarde e o jantar. Todas as refeições são gratuitas e balanceadas.",
  },
  {
    question: "O que é o Novotec e quem pode fazer?",
    answer: "O Novotec oferece cursos técnicos integrados para os estudantes do Ensino Médio. As opções em nossa escola abrangem Desenvolvimento de Sistemas, Administração e Vendas, integrados à grade letiva do período da tarde/noite.",
  },
  {
    question: "Quais são os contatos oficiais da secretaria?",
    answer: "Você pode falar com a secretaria da escola pelo telefone (19) 3261-1256 ou pelo e-mail oficial E905471A@educacao.sp.gov.br. O código identificador CIE da nossa instituição é 905471.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-background scroll-mt-16">
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
            Dúvidas Frequentes
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Perguntas & Respostas
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            Ficou com alguma dúvida sobre a nossa escola? Encontre respostas rápidas para as principais dúvidas.
          </p>
        </motion.div>

        {/* FAQ Accordion List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = activeIndex === i;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/20 transition-colors duration-300"
              >
                <button
                  onClick={() => toggleAccordion(i)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-semibold text-foreground md:text-lg flex items-center gap-3 pr-4">
                    <HelpCircle className="w-5 h-5 text-primary shrink-0" />
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-muted-foreground"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 text-sm md:text-base text-muted-foreground font-body leading-relaxed pl-14 border-t border-border/40 bg-school-cream/30">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
