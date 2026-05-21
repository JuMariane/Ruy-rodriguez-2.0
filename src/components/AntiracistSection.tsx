import { useState } from "react";
import { motion } from "framer-motion";
import patternBg from "@/assets/pattern-bg.jpg";
import ProjectDetailsModal, { ProjectDetails } from "./ProjectDetailsModal";

// Import core project assets
import chiquinhaImg from "@/assets/chiquinha-gonzaga.jpg";
import teatroOriki from "@/assets/teatro-oriki.jpg";
import sambaRuy from "@/assets/samba-ruy.jpg";
import nzingaImg from "@/assets/nzinga-mbandi.jpg";
import projetoBanner from "@/assets/projeto-banner.jpg";

// Import scraped gallery assets
import teatroOriki1 from "@/assets/scraped_gallery/teatro_oriki_1.png";
import teatroOriki2 from "@/assets/scraped_gallery/teatro_oriki_2.jpg";
import sambaRuy1 from "@/assets/scraped_gallery/samba_ruy_1.jpg";

const itemsWithDetails: Record<string, ProjectDetails> = {
  "Chiquinha Gonzaga – Trilha Antirracista": {
    title: "Chiquinha Gonzaga – Trilha Antirracista",
    subtitle: "Educação Antirracista",
    date: "Novembro 2023",
    description: "Projeto interdisciplinar sobre a compositora de descendência negra Chiquinha Gonzaga, abordando sua importância e legado na cultura nacional.",
    tag: "Antirracismo",
    image: chiquinhaImg,
    fullDescription: [
      "Atividade desenvolvida com as turmas dos 7ºs anos da PEI Ruy Rodriguez (orientada pelo professor Márcio Pimentel Rocha) sobre a pianista e compositora Chiquinha Gonzaga, de descendência negra. Ela compôs grandes sucessos do carnaval de sua época, como \"O abre alas\".",
      "O projeto buscou discutir o protagonismo de figuras negras na história e na música brasileira, combatendo preconceitos e resgatando memórias históricas importantes.",
      "Palavras-chave: Chiquinha Gonzaga, Educação Antirracista, Escola Ruy Rodriguez, Parque Itajaí, Programa de Ensino Integral, Protagonismo Juvenil"
    ],
    videos: [
      "https://video.wordpress.com/embed/ye1erQ3v?cover=1&preloadContent=metadata&useAverageColor=1&hd=0",
      "https://video.wordpress.com/embed/qHl9b2It?cover=1&preloadContent=metadata&useAverageColor=1&hd=0"
    ],
    gallery: [],
    originalUrl: "https://escolaruyrodriguez.wordpress.com/2023/11/13/chiquinha-gonzaga-trilha-antirracista/"
  },
  "Nzinga Mbandi – Trilha Antirracista": {
    title: "Nzinga Mbandi – Trilha Antirracista",
    subtitle: "Educação Antirracista",
    date: "Novembro 2023",
    description: "Projeto de pesquisa sobre a rainha guerreira Nzinga Mbandi, explorando formas de resistência e a liderança de mulheres africanas contra a opressão.",
    tag: "Antirracismo",
    image: nzingaImg,
    fullDescription: [
      "Atividade interdisciplinar sobre a lendária rainha guerreira Nzinga Mbandi de Matamba e Ndongo, e sua liderança na resistência contra o sistema escravocrata e a colonização portuguesa, realizada com os sétimos anos.",
      "Orientação: Professor Márcio Pimentel Rocha.",
      "Habilidade Pedagógica: EF07HI20* (Identificar e debater os costumes, tradições, formas de resistência e a organização social e política de populações de origem africana, com destaque para as lideranças femininas na luta contra o sistema colonial)."
    ],
    videos: [
      "https://video.wordpress.com/embed/PJRbuXQB?cover=1&preloadContent=metadata&useAverageColor=1&hd=0"
    ],
    gallery: [],
    originalUrl: "https://escolaruyrodriguez.wordpress.com/2023/11/13/chiquinha-gonzaga-trilha-antirracista/"
  },
  "Teatro: Peça Olorum Ayé com Grupo Oriki": {
    title: "Peça Olorum Ayé",
    subtitle: "Grupo Oriki – Teatro",
    date: "Outubro 2023",
    description: "Espetáculo teatral que celebra a cultura e a espiritualidade afro-brasileira com os estudantes.",
    tag: "Cultura",
    image: teatroOriki,
    fullDescription: [
      "No dia 31/08/2023 alguns de nossos estudantes (do Ensino Fundamental e do Ensino Médio) tiveram a oportunidade de assistir à peça de teatro OlorumAyé, do grupo Oriki, que reúne música, dança e atuação para contar a história da criação do mundo e da humanidade pelos Orixás. Os estudantes foram acompanhados pelas professoras Francisca, Meire, Kátia e Carol e contaram com a ajuda do coletivo Vida Nova como parceria para o transporte.",
      "Embora seja o país que mais recebeu pessoas escravizadas do continente africano em toda a história, o Brasil ainda conhece e debate pouco os costumes, tradições e mitos religiosos e culturais que chegaram ao território nacional a partir desta diáspora forçada. Uma iniciativa que envolve arte e educação e nasceu no interior de São Paulo quer mudar essa realidade, inspirada em contadores e contadoras de histórias ancestrais. O grupo Oriki, com origem em Campinas, leva aos palcos os mitos fundadores da espiritualidade afrobrasileira. Primeiro projeto da iniciativa, o espetáculo OlorumAyé reúne música, dança e atuação para contar a história da criação do mundo e da humanidade pelos Orixás. Olorum é a entidade suprema que concebeu o universo e Ayé é o planeta terra. A atriz, pesquisadora e arte-educadora Ayo Bento, idealizadora do grupo, afirma que a ideia surgiu da vontade de compartilhar uma experiência de infância: o contato com as histórias ancestrais, com origem ou influência do continente africano. As narrativas contadas pelo pai, segundo a artista, foram essenciais como referências de vida e identidade.",
      "“Eu sempre tive a cultura Iorubá no meu sangue e sempre honrei muito os meus ancestrais. Sendo uma mulher preta e descendente de pessoas africanas escravizadas, ainda assim, me sinto privilegiada. Porque meu pai sempre contou histórias de pessoas pretas, grandes, reis, rainhas, artistas. Essa vontade de contar histórias pretas começou daí.”"
    ],
    videos: [],
    gallery: [
      teatroOriki1,
      teatroOriki2
    ],
    originalUrl: "https://escolaruyrodriguez.wordpress.com/2023/10/24/peca-de-teatro-olorum-aye-grupo-oriki/"
  },
  "Maculelê e danças afro-brasileiras": {
    title: "Maculelê e danças afro-brasileiras",
    subtitle: "Danças Populares",
    date: "Novembro 2023",
    description: "Atividades de expressão corporal e folclórica, resgatando as danças tradicionais de matriz africana.",
    tag: "Antirracismo",
    image: projetoBanner,
    fullDescription: [
      "Atividade prática realizada com as turmas de Ensino Fundamental sob a orientação da professora Meire. O foco esteve na dança folclórica com bastões de madeira em ritmo percussivo (Maculelê).",
      "O projeto envolveu ensaios e a encenação de peças de teatro com a temática 'Cultura em Movimento', resgatando a dança do Carimbó e encerramento com celebração coletiva no pátio escolar.",
      "Habilidades Pedagógicas: EF09AR03 (Analisar criticamente e experimentar diferentes elementos das danças afro-brasileiras) e EF09AR13 (Investigar brincadeiras, jogos, danças e lutas de matriz afro-brasileira e indígena)."
    ],
    videos: [
      "https://video.wordpress.com/embed/jkYpqBJc?cover=1&preloadContent=metadata&useAverageColor=1&hd=0",
      "https://video.wordpress.com/embed/j8T2Dmig?cover=1&preloadContent=metadata&useAverageColor=1&hd=0",
      "https://video.wordpress.com/embed/vNO3TWUy?cover=1&preloadContent=metadata&useAverageColor=1&hd=0",
      "https://video.wordpress.com/embed/dyVuFdJl?cover=1&preloadContent=metadata&useAverageColor=1&hd=0"
    ],
    gallery: [],
    originalUrl: "https://escolaruyrodriguez.wordpress.com/educacao-antirracista/"
  },
  "Máscaras Africanas e arte de resistência": {
    title: "Máscaras Africanas e arte de resistência",
    subtitle: "História e Resistência",
    date: "Novembro 2023",
    description: "Exposição artística com réplicas de máscaras tradicionais para discutir a religiosidade, a história e a cultura dos povos da África.",
    tag: "Antirracismo",
    image: teatroOriki,
    fullDescription: [
      "Atividade desenvolvida com as turmas dos 6ºs anos na disciplina de História. O projeto envolveu a pesquisa histórica e a confecção prática de réplicas de máscaras tradicionais de diversas regiões africanas.",
      "Através da confecção das máscaras, os alunos exploraram os conceitos de arte de resistência, as representações religiosas e a importância do patrimônio cultural africano para a formação do povo brasileiro.",
      "Habilidades Pedagógicas: EF06HI07A (Identificar formas de resistência de diferentes povos na Antiguidade) e EF06HI16 (Reconhecer a diversidade cultural e a contribuição das matrizes africanas e indígenas para a cultura nacional)."
    ],
    videos: [
      "https://video.wordpress.com/embed/yYHsb8nh?cover=1&preloadContent=metadata&useAverageColor=1&hd=0",
      "https://video.wordpress.com/embed/cJumx77p?cover=1&preloadContent=metadata&useAverageColor=1&hd=0"
    ],
    gallery: [],
    originalUrl: "https://escolaruyrodriguez.wordpress.com/educacao-antirracista/"
  },
  "Samba do Ruy – valorização da cultura popular": {
    title: "Samba do Ruy",
    subtitle: "Cultura Popular na Escola",
    date: "Setembro 2023",
    description: "Evento musical que trouxe o samba como expressão cultural e ferramenta pedagógica para os estudantes.",
    tag: "Cultura",
    image: sambaRuy,
    fullDescription: [
      "A escola possui instrumentos de percussão que os estudantes usam no intervalo para fazer música. No primeiro semestre, recebemos em nossa escola alguns músicos para uma roda de samba!",
      "Habilidade EM13LGG603: Expressar-se e atuar em processos de criação autorais individuais e coletivos nas diferentes linguagens artísticas (artes visuais, audiovisual, dança, música e teatro) e nas intersecções entre elas, recorrendo a referências estéticas e culturais, conhecimentos de naturezas diversas (artísticos, históricos, sociais e políticos) e experiências individuais e coletivas."
    ],
    videos: [
      "https://video.wordpress.com/embed/rS3nwkDu?cover=1&preloadContent=metadata&useAverageColor=1&hd=0",
      "https://video.wordpress.com/embed/jF7zWJw8?cover=1&preloadContent=metadata&useAverageColor=1&hd=0",
      "https://video.wordpress.com/embed/DXOoxC07?cover=1&preloadContent=metadata&useAverageColor=1&hd=0",
      "https://video.wordpress.com/embed/W1eILstP?cover=1&preloadContent=metadata&useAverageColor=1&hd=0"
    ],
    gallery: [
      sambaRuy1
    ],
    originalUrl: "https://escolaruyrodriguez.wordpress.com/2023/09/11/samba-do-ruy/"
  },
  "Propaganda Publicitária Antirracista": {
    title: "Propaganda Publicitária Antirracista",
    subtitle: "Língua Portuguesa e Cidadania",
    date: "Novembro 2023",
    description: "Elaboração de campanhas publicitárias em vídeo pelos estudantes, promovendo a conscientização racial e prestando homenagem ao rapper Sabotage.",
    tag: "Antirracismo",
    image: sambaRuy,
    fullDescription: [
      "Projeto interdisciplinar voltado para a elaboração de campanhas publicitárias de conscientização social antirracista, orientado pelo professor Carlos Amaro.",
      "Nas produções de vídeo, os estudantes roteirizaram, atuaram e editaram comerciais contra o preconceito racial. Também prestaram homenagem especial ao rapper Sabotage, no vídeo estrelado pelo estudante Angelo explicando a militância artística do músico.",
      "Habilidade Pedagógica: EF69LP02 (Analisar e construir peças publicitárias de campanhas sociais, considerando o contexto de produção, circulação e recepção)."
    ],
    videos: [
      "https://video.wordpress.com/embed/H6P18suG?cover=1&preloadContent=metadata&useAverageColor=1&hd=0",
      "https://video.wordpress.com/embed/3i1YN88S?cover=1&preloadContent=metadata&useAverageColor=1&hd=0",
      "https://video.wordpress.com/embed/WpXLQA9b?cover=1&preloadContent=metadata&useAverageColor=1&hd=0",
      "https://video.wordpress.com/embed/fedjicvN?cover=1&preloadContent=metadata&useAverageColor=1&hd=0",
      "https://video.wordpress.com/embed/myeVGUto?cover=1&preloadContent=metadata&useAverageColor=1&hd=0",
      "https://video.wordpress.com/embed/TwD9Bqv4?cover=1&preloadContent=metadata&useAverageColor=1&hd=0"
    ],
    gallery: [],
    originalUrl: "https://escolaruyrodriguez.wordpress.com/educacao-antirracista/"
  }
};

const AntiracistSection = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(null);

  const items = [
    "Chiquinha Gonzaga – Trilha Antirracista",
    "Nzinga Mbandi – Trilha Antirracista",
    "Teatro: Peça Olorum Ayé com Grupo Oriki",
    "Maculelê e danças afro-brasileiras",
    "Máscaras Africanas e arte de resistência",
    "Samba do Ruy – valorização da cultura popular",
    "Propaganda Publicitária Antirracista",
  ];

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
              {items.map((item, i) => {
                const projectDetails = itemsWithDetails[item];
                const isClickable = !!projectDetails;

                return (
                  <div
                    key={i}
                    onClick={() => {
                      if (isClickable) {
                        setSelectedProject(projectDetails);
                      }
                    }}
                    className={`flex items-start gap-3 p-3.5 rounded-xl bg-card/65 backdrop-blur-sm border transition-all duration-300 ${
                      isClickable
                        ? "cursor-pointer border-border hover:border-primary/45 hover:bg-primary/5 hover:translate-x-1 hover:shadow-soft"
                        : "border-border/60 opacity-80"
                    }`}
                  >
                    <div className={`w-2 h-2 rounded-full mt-2 shrink-0 ${isClickable ? "bg-primary" : "bg-muted-foreground/60"}`} />
                    <div className="flex-1 flex justify-between items-center gap-2">
                      <span className={`text-sm font-body ${isClickable ? "text-foreground font-semibold" : "text-muted-foreground"}`}>
                        {item}
                      </span>
                      {isClickable && (
                        <span className="text-[10px] text-primary font-bold uppercase tracking-wider bg-primary/10 px-2 py-0.5 rounded-full shrink-0">
                          Clique para Ver
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>

      <ProjectDetailsModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </section>
  );
};

export default AntiracistSection;
