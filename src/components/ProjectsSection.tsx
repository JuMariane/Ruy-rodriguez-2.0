import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import ProjectDetailsModal, { ProjectDetails } from "./ProjectDetailsModal";

import projetoBanner from "@/assets/projeto-banner.jpg";
import visitaIac from "@/assets/visita-iac.jpg";
import baciaHidro from "@/assets/bacia-hidrografica.jpg";
import chiquinhaImg from "@/assets/chiquinha-gonzaga.jpg";
import teatroOriki from "@/assets/teatro-oriki.jpg";
import sambaRuy from "@/assets/samba-ruy.jpg";
import nzingaImg from "@/assets/nzinga-mbandi.jpg";

// Scraped gallery local assets
import investigacao1 from "../assets/scraped_gallery/investigacao_1.jpg";
import investigacao2 from "../assets/scraped_gallery/investigacao_2.jpg";
import visitaIac1 from "../assets/scraped_gallery/visita_iac_1.jpg";
import visitaIac2 from "../assets/scraped_gallery/visita_iac_2.jpg";
import baciaHidro1 from "../assets/scraped_gallery/bacia_hidro_1.jpg";
import baciaHidro2 from "../assets/scraped_gallery/bacia_hidro_2.jpg";
import baciaHidro3 from "../assets/scraped_gallery/bacia_hidro_3.jpg";
import teatroOriki1 from "../assets/scraped_gallery/teatro_oriki_1.png";
import teatroOriki2 from "../assets/scraped_gallery/teatro_oriki_2.jpg";
import sambaRuy1 from "../assets/scraped_gallery/samba_ruy_1.jpg";

const projects: ProjectDetails[] = [
  {
    title: "Jornada de Investigação Científica",
    subtitle: "Banner e Apresentação na Escola",
    date: "Novembro 2025",
    description: "Estudantes apresentaram banners científicos com resultados de pesquisas sobre qualidade da água e meio ambiente.",
    tag: "Ciências",
    image: projetoBanner,
    fullDescription: [
      "Diário de bordo: Jornada de Investigação Científica – novembro de 2025.",
      "Após a finalização do Banner que levaremos à Unicamp no dia 29 de novembro de 2025, alguns participantes da eletiva realizaram uma apresentação do trabalho para os outros estudantes e professores da escola. Uma experiência muito relevante!"
    ],
    gallery: [
      investigacao1,
      investigacao2
    ],
    videos: [],
    originalUrl: "https://escolaruyrodriguez.wordpress.com/2025/11/29/jornada-de-investigacao-cientifica-banner-e-apresentacao-na-escola/"
  },
  {
    title: "Visita ao Instituto Agronômico",
    subtitle: "IAC-Apta Portas Abertas",
    date: "Outubro 2025",
    description: "Visita técnica ao Instituto Agronômico de Campinas com apresentação de linhas de pesquisa e visitas guiadas.",
    tag: "Ciências",
    image: visitaIac,
    fullDescription: [
      "Diário de bordo: Jornada de Investigação Científica – outubro de 2025.",
      "No dia 17 de outubro de 2025 nossos estudantes foram visitar o Instituto Agronômico de Campinas (IAC-Apta) que estava com o projeto Portas Abertas. Além da área expositiva, mostrando os resultados das diferentes linhas de pesquisa desenvolvidas pelo IAC, nossos estudantes tiveram visita guiada nos prédios históricos, estufas, biblioteca, Pós-Graduação, jardim e laboratórios.",
      "Fotos: Gilberto Marques/SAA e professora Bianca Vasconselos."
    ],
    gallery: [
      visitaIac1,
      visitaIac2
    ],
    videos: [],
    originalUrl: "https://escolaruyrodriguez.wordpress.com/2025/11/29/jornada-de-investigacao-cientifica-visita-ao-instituto-agronomico/"
  },
  {
    title: "Visita à Bacia Hidrográfica",
    subtitle: "Estudo do Meio Ambiente",
    date: "Maio 2025",
    description: "Coleta de amostras de água em nascentes do Parque Itajaí para análise da qualidade hídrica regional.",
    tag: "Meio Ambiente",
    image: baciaHidro,
    fullDescription: [
      "Diário de bordo: Jornada de Investigação Científica - maio de 2025.",
      "No dia 13 de maio de 2025, realizamos uma visita técnica a uma das nascentes de água do Parque Itajaí com o objetivo de coletar amostras de água para análises. Durante essa atividade, observamos de perto o caminho que a água percorre desde o ponto em que nasce até trechos onde já recebe influência da ação humana.",
      "Coletamos duas amostras distintas. A primeira foi retirada de uma corrente de água de primeira ordem, que é o nome dado ao trecho inicial de um curso d’água, onde ele ainda é bem estreito e não recebeu a junção com nenhum outro córrego. Em outras palavras, um rio ou córrego de primeira ordem é aquele que nasce diretamente da fonte — seja de uma nascente, infiltração do solo ou pequenas poças que se unem. Já a segunda amostra foi coletada mais adiante, em uma corrente de segunda ordem, que se forma quando dois cursos de primeira ordem se encontram. Nesses pontos, o volume de água geralmente é maior, e a chance de receber poluição ao longo do caminho também aumenta.",
      "A visita foi acompanhada pelos professores Carlos Henrique, Marcelo Zapparoli e Simone Bandeira, que explicaram aos estudantes o funcionamento das nascentes, a importância dos mananciais e como a qualidade da água pode variar conforme o percurso. Enquanto caminhávamos, os alunos observavam a vegetação, o solo, o relevo e faziam perguntas sobre como esses elementos influenciam o fluxo da água. Também refletiram sobre a relação entre o ambiente natural e a presença humana.",
      "Ao longo do trajeto, percebemos diversos sinais da ação humana no entorno do córrego. Observamos habitações construídas a menos de 50 metros do curso d’água, o que é um problema porque áreas próximas aos rios, chamadas de APPs (Áreas de Preservação Permanente), devem ser protegidas para evitar erosão, contaminação e assoreamento. APPs são faixas de vegetação obrigatória e servem como uma espécie de “cinturão de proteção” para a água.",
      "Também encontramos uma chácara e estábulos com animais instalados muito próximos ao córrego. A presença de animais nesse tipo de área pode representar risco ambiental, pois o esterco e a urina podem escorrer para a água, aumentando a quantidade de bactérias, nutrientes em excesso (como nitrogênio e fósforo) e até substâncias tóxicas. Isso afeta não só a vida aquática, mas também os seres humanos que utilizam essa água."
    ],
    gallery: [
      baciaHidro1,
      baciaHidro2,
      baciaHidro3
    ],
    videos: [],
    originalUrl: "https://escolaruyrodriguez.wordpress.com/2025/11/25/jornada-de-investigacao-cientifica-1a-visita-a-bacia-hidrografica/"
  },
  {
    title: "Chiquinha Gonzaga",
    subtitle: "Trilha Antirracista",
    date: "Novembro 2023",
    description: "Projeto de valorização da cultura afro-brasileira através da vida e obra de Chiquinha Gonzaga.",
    tag: "Antirracismo",
    image: chiquinhaImg,
    fullDescription: [
      "Atividade desenvolvida pelos sétimos anos da PEI Ruy Rodriguez (orientada pelo professor Márcio Pimentel Rocha) sobre a pianista e compositora Chiquinha Gonzaga, de descendência negra. Ela compôs grandes sucessos do carnaval de sua época, como \"O abre alas\".",
      "O projeto buscou discutir o protagonismo de figuras negras na história e na música brasileira, combatendo preconceitos e resgatando memórias históricas importantes.",
      "Chiquinha Gonzaga, Educação Antirracista, Escola Ruy Rodriguez, Parque Itajaí, Programa de Ensino Integral, Protagonismo Juvenil"
    ],
    gallery: [],
    videos: [
      "https://video.wordpress.com/embed/ye1erQ3v?cover=1&preloadContent=metadata&useAverageColor=1&hd=0",
      "https://video.wordpress.com/embed/qHl9b2It?cover=1&preloadContent=metadata&useAverageColor=1&hd=0"
    ],
    originalUrl: "https://escolaruyrodriguez.wordpress.com/2023/11/13/chiquinha-gonzaga-trilha-antirracista/"
  },
  {
    title: "Projeto Nzinga Mbandi",
    subtitle: "Trilha Antirracista",
    date: "Novembro 2023",
    description: "Atividade interdisciplinar sobre a rainha guerreira Nzinga Mbandi e sua liderança na resistência à escravidão.",
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
  {
    title: "Peça Olorum Ayé",
    subtitle: "Grupo Oriki – Teatro",
    date: "Outubro 2023",
    description: "Espetáculo teatral que celebra a cultura e a espiritualidade afro-brasileira com os estudantes.",
    tag: "Cultura",
    image: teatroOriki,
    fullDescription: [
      "No dia 31/08/2023 alguns de nossos estudantes (do Ensino Fundamental e do Ensino Médio) tiveram a oportunidade de assistir à peça de teatro OlorumAyé, do grupo Oriki, que reúne música, dança e atuação para contar a história da criação do mundo e da humanidade pelos Orixás. Os estudantes foram acompanhados pelas professoras Francisca, Meire, Kátia e Carol e contaram com a ajuda do coletivo Vida Nova como parceria para o transporte.",
      "Embora seja o país que mais recebeu pessoas escravizadas do continente africano em toda a história, o Brasil ainda conhece e debate pouco os costumes, tradições e mitos religiosos e culturais que chegaram ao território nacional a partir desta diáspora forçada. Uma iniciativa que envolve arte e educação e nasceu no interior de São Paulo quer mudar essa realidade, inspirada em contadores e contadoras de histórias ancestrais. O grupo Oriki, com origem em Campinas, leva aos palcos os mitos fundadores da espiritualidade afrobrasileira. Primeiro projeto da iniciativa, o espetáculo OlorumAyé reúne música, dança e atuação para contar a história da criação do mundo e da humanidade pelos Orixás. Olorum é a entidade suprema que concebeu o universo e Ayé é o planeta terra. A atriz, pesquisadora e arte-educadora Ayo Bento, idealizadora do grupo, afirma que a ideia surgiu da vontade de compartilhar uma experiência de infância: o contato com as histórias ancestrais, com origem ou influência do continente africano. As narrativas contadas pelo pai, according to the artist, foram essenciais como referências de vida e identidade.",
      "“Eu sempre tive a cultura Iorubá no meu sangue e sempre honrei muito os meus ancestrais. Sendo uma mulher preta e descendente de pessoas africanas escravizadas, ainda assim, me sinto privilegiada. Porque meu pai sempre contou histórias de pessoas pretas, grandes, reis, rainhas, artistas. Essa vontade de contar histórias pretas começou daí.”"
    ],
    gallery: [
      teatroOriki1,
      teatroOriki2
    ],
    videos: [],
    originalUrl: "https://escolaruyrodriguez.wordpress.com/2023/10/24/peca-de-teatro-olorum-aye-grupo-oriki/"
  },
  {
    title: "Maculelê e Danças Afro-Brasileiras",
    subtitle: "Cultura Popular e Movimento",
    date: "Novembro 2023",
    description: "Atividade de expressão corporal e resgate da dança folclórica Maculelê com bastões e dança do Carimbó.",
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
  {
    title: "Máscaras Africanas e Arte de Resistência",
    subtitle: "História e Resistência",
    date: "Novembro 2023",
    description: "Exposição artística com réplicas de máscaras tradicionais para discutir a religiosidade e a diversidade das culturas africanas.",
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
  {
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
    gallery: [
      sambaRuy1
    ],
    videos: [
      "https://video.wordpress.com/embed/rS3nwkDu?cover=1&preloadContent=metadata&useAverageColor=1&hd=0",
      "https://video.wordpress.com/embed/jF7zWJw8?cover=1&preloadContent=metadata&useAverageColor=1&hd=0",
      "https://video.wordpress.com/embed/DXOoxC07?cover=1&preloadContent=metadata&useAverageColor=1&hd=0",
      "https://video.wordpress.com/embed/W1eILstP?cover=1&preloadContent=metadata&useAverageColor=1&hd=0"
    ],
    originalUrl: "https://escolaruyrodriguez.wordpress.com/2023/09/11/samba-do-ruy/"
  },
  {
    title: "Propaganda Publicitária Antirracista",
    subtitle: "Língua Portuguesa e Conscientização",
    date: "Novembro 2023",
    description: "Criação de propagandas publicitárias in vídeo contra o preconceito racial e homenagem ao rapper Sabotage.",
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
];

const tagColors: Record<string, string> = {
  Ciências: "bg-school-warm/15 text-school-warm",
  "Meio Ambiente": "bg-emerald-100 text-emerald-700",
  Cultura: "bg-school-gold/15 text-school-gold",
  Antirracismo: "bg-primary/10 text-primary",
};

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(null);

  return (
    <section id="projetos" className="py-24 bg-school-cream">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-primary mb-2 block">
            Nossos Projetos
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Aprendizado em ação
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            Conheça os projetos que fazem da nossa escola um espaço de descoberta e transformação.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-elevated hover:border-primary/20 transition-all duration-300 cursor-pointer flex flex-col"
              onClick={() => setSelectedProject(project)}
            >
              <div className="aspect-[16/10] overflow-hidden shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${tagColors[project.tag] || "bg-muted text-muted-foreground"}`}>
                      {project.tag}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Calendar className="w-3.5 h-3.5" />
                      {project.date}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium text-primary/70 mb-3">{project.subtitle}</p>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  Saiba mais <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <ProjectDetailsModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </section>
  );
};

export default ProjectsSection;

