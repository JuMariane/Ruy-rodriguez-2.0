import { useState, useEffect, useRef } from "react";
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

interface HoveredCardData {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface AntiracistParticlesProps {
  hoveredCardRef: React.RefObject<HoveredCardData | null>;
}

const AntiracistParticles = ({ hoveredCardRef }: AntiracistParticlesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      baseSize: number;
      speedY: number;
      speedX: number;
      opacity: number;
      baseOpacity: number;
      color: string;
      glowColor: string;
    }> = [];

    // Paleta de tons terrosos, bronze, âmbar e ouro
    const colors = [
      "217, 119, 6",   // âmbar-600
      "180, 83, 9",    // bronze/laranja escuro
      "245, 158, 11",  // âmbar-500
      "251, 191, 36",  // ouro-400
      "212, 163, 89",  // bronze claro metálico
    ];

    for (let i = 0; i < 60; i++) {
      const colorBase = colors[Math.floor(Math.random() * colors.length)];
      const size = Math.random() * 3 + 1.2;
      const opacity = Math.random() * 0.35 + 0.15;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: size,
        baseSize: size,
        speedY: -(Math.random() * 0.2 + 0.08), // subida suave
        speedX: Math.random() * 0.14 - 0.07, // oscilação suave
        opacity: opacity,
        baseOpacity: opacity,
        color: `rgba(${colorBase}, ${opacity})`,
        glowColor: `rgb(${colorBase})`,
      });
    }

    const mouse = { x: null as number | null, y: null as number | null, radius: 130 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      const hoveredCard = hoveredCardRef.current;
      
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // Movimento ascendente padrão
        p.y += p.speedY;
        p.x += p.speedX;

        // Loop das bordas
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10 || p.x > width + 10) {
          p.speedX = -p.speedX;
        }

        // Ponto de destino da atração
        let targetX = mouse.x;
        let targetY = mouse.y;
        let activeRadius = 140;

        // Se houver um card sob hover, atrai para o centro do card com maior raio
        if (hoveredCard) {
          targetX = hoveredCard.x;
          targetY = hoveredCard.y;
          activeRadius = 260; 
        }

        let isInsideCard = false;
        
        if (targetX !== null && targetY !== null) {
          const dx = targetX - p.x;
          const dy = targetY - p.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < activeRadius) {
            const force = (activeRadius - distance) / activeRadius;
            // Efeito magnético de atração suave
            p.x += (dx / distance) * force * 1.6;
            p.y += (dy / distance) * force * 1.6;
            
            p.opacity = p.baseOpacity + force * 0.65;
            p.size = p.baseSize + force * 3.5;
          } else {
            p.opacity = p.opacity * 0.95 + p.baseOpacity * 0.05;
            p.size = p.size * 0.95 + p.baseSize * 0.05;
          }
        } else {
          p.opacity = p.opacity * 0.95 + p.baseOpacity * 0.05;
          p.size = p.size * 0.95 + p.baseSize * 0.05;
        }

        // Verifica se a partícula está atrás da bounding box do card ativo
        if (hoveredCard) {
          const halfW = hoveredCard.width / 2;
          const halfH = hoveredCard.height / 2;
          if (
            p.x >= hoveredCard.x - halfW &&
            p.x <= hoveredCard.x + halfW &&
            p.y >= hoveredCard.y - halfH &&
            p.y <= hoveredCard.y + halfH
          ) {
            isInsideCard = true;
          }
        }

        // Desenha partícula
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        
        const rgbValues = p.glowColor.match(/\d+/g);
        if (rgbValues) {
          const finalOpacity = isInsideCard ? Math.min(1.0, p.opacity * 1.8) : p.opacity;
          ctx.fillStyle = `rgba(${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]}, ${finalOpacity})`;
        } else {
          ctx.fillStyle = p.color;
        }
        
        ctx.shadowBlur = isInsideCard ? 18 : (targetX !== null ? 8 : 1);
        ctx.shadowColor = p.glowColor;
        ctx.fill();
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />;
};

const AntiracistSection = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(null);
  const hoveredCardRef = useRef<HoveredCardData | null>(null);

  const handleCardMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const cardEl = e.currentTarget;
    const rect = cardEl.getBoundingClientRect();
    const sectionEl = cardEl.closest("section");
    if (sectionEl) {
      const sectionRect = sectionEl.getBoundingClientRect();
      const relativeX = rect.left - sectionRect.left + rect.width / 2;
      const relativeY = rect.top - sectionRect.top + rect.height / 2;
      hoveredCardRef.current = {
        x: relativeX,
        y: relativeY,
        width: rect.width,
        height: rect.height,
      };
    }
  };

  const handleCardMouseLeave = () => {
    hoveredCardRef.current = null;
  };

  const pillars = [
    {
      title: "História e Visibilidade",
      concept: "Focado na ancestralidade",
      description: "Pesquisa histórica sobre o protagonismo africano e de mulheres guerreiras na luta contra a opressão colonial.",
      projects: [
        "Nzinga Mbandi – Trilha Antirracista",
        "Máscaras Africanas e arte de resistência"
      ]
    },
    {
      title: "Equidade na Prática",
      concept: "Ações afirmativas escolares",
      description: "Criação de comerciais, roteiros e letramento crítico em vídeo para conscientização e combate ativo ao preconceito racial.",
      projects: [
        "Propaganda Publicitária Antirracista"
      ]
    },
    {
      title: "Cultura do Respeito",
      concept: "Desenvolvimento de empatia",
      description: "Expressões artísticas de música, dança tradicional (Maculelê), ritmo e celebração da ancestralidade afro-brasileira.",
      projects: [
        "Chiquinha Gonzaga – Trilha Antirracista",
        "Teatro: Peça Olorum Ayé com Grupo Oriki",
        "Samba do Ruy – valorização da cultura popular",
        "Maculelê e danças afro-brasileiras"
      ]
    }
  ];

  return (
    <section id="antirracista" className="py-24 relative overflow-hidden bg-background">
      {/* Pattern background */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <img src={patternBg} alt="" className="w-full h-full object-cover" />
      </div>

      {/* Warm Magnetic Particles */}
      <AntiracistParticles hoveredCardRef={hoveredCardRef} />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-sm font-semibold tracking-widest uppercase text-primary mb-2 block">
              Educação Antirracista
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Diversidade é força
            </h2>
            <p className="text-muted-foreground/80 font-body text-sm md:text-base max-w-2xl mx-auto mt-2">
              Nossa escola é comprometida com a educação antirracista. Explore os pilares conceituais abaixo para conhecer os projetos e ativar a rede de consciência.
            </p>
          </div>

          {/* Aligned Grid Layout with Minimalist Design and Hover Lift */}
          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {pillars.map((pillar, i) => {
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  onMouseEnter={handleCardMouseEnter}
                  onMouseMove={handleCardMouseEnter}
                  onMouseLeave={handleCardMouseLeave}
                  className="flex flex-col justify-between p-8 rounded-2xl bg-card/35 backdrop-blur-md border border-border/20 shadow-elevated hover:bg-card/60 hover:border-primary/45 hover:scale-[1.05] hover:-translate-y-4 hover:shadow-2xl transition-all duration-500 ease-out max-w-md mx-auto lg:max-w-none w-full cursor-default"
                >
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      {/* Header card */}
                      <span className="text-[10px] font-bold text-primary/70 uppercase tracking-widest block mb-2">
                        {pillar.concept}
                      </span>
                      <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">
                        {pillar.title}
                      </h3>
                      <p className="text-xs md:text-sm text-muted-foreground/85 font-body leading-relaxed mb-6">
                        {pillar.description}
                      </p>
                    </div>

                    {/* List of projects linked inside this pillar */}
                    <div className="space-y-1 pt-6 border-t border-border/15">
                      <span className="text-[9px] font-semibold text-muted-foreground/50 uppercase tracking-widest block mb-3">
                        Projetos do Pilar
                      </span>
                      {pillar.projects.map((projTitle) => {
                        const projectDetails = itemsWithDetails[projTitle];
                        return (
                          <div
                            key={projTitle}
                            onClick={() => setSelectedProject(projectDetails)}
                            className="cursor-pointer flex items-center justify-between py-2.5 border-b border-border/5 hover:border-primary/20 transition-all duration-300 group"
                          >
                            <span className="text-xs text-muted-foreground group-hover:text-foreground font-body leading-tight transition-colors">
                              {projTitle}
                            </span>
                            <span className="text-xs text-primary font-medium opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 shrink-0 flex items-center gap-0.5">
                              Ver →
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              );
            })}
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
