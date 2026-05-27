import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import fachadaImg from "@/assets/fachada-escola.png";

const VideoSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  // Hook do Framer Motion para detectar o scroll no contêiner
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Mapeamento dinâmico dos valores baseados no scroll
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["24px", "0px"]);
  const padding = useTransform(scrollYProgress, [0, 0.8], ["24px", "0px"]);
  
  // Efeito de fade-out do cabeçalho conforme o card expande
  const headerOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const headerY = useTransform(scrollYProgress, [0, 0.3], [0, -40]);

  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const handleMuteToggle = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div
      ref={containerRef}
      className="relative h-[160vh] bg-background w-full"
      style={{ contentVisibility: "auto" }}
    >
      {/* Contêiner Sticky que mantém a tela no foco */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        
        {/* Cabeçalho da seção (desaparece ao dar zoom) */}
        <motion.div
          style={{ opacity: headerOpacity, y: headerY }}
          className="text-center mb-8 px-4 max-w-xl z-20 absolute top-12 md:top-20"
        >
          <span className="text-xs font-bold tracking-widest uppercase text-primary mb-2 block">
            Vídeo Institucional
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Conheça Nossa Escola
          </h2>
          <p className="text-muted-foreground text-sm font-body mt-2">
            Rola a página para baixo para expandir o vídeo e mergulhar em nosso espaço físico e convivência.
          </p>
        </motion.div>

        {/* Card de Vídeo Animado */}
        <motion.div
          style={{
            scale,
            borderRadius,
            width: "100%",
            height: "100%",
            maxWidth: "1440px",
            maxHeight: "810px", // Limite de proporção de tela 16:9
          }}
          className="relative w-full aspect-video overflow-hidden shadow-elevated border border-border/20 bg-black flex items-center justify-center"
        >
          {/* O vídeo em si */}
          <video
            ref={videoRef}
            src="https://assets.mixkit.co/videos/preview/mixkit-group-of-students-studying-in-a-classroom-42353-large.mp4"
            poster={fachadaImg}
            loop
            muted={isMuted}
            playsInline
            autoPlay
            className="w-full h-full object-cover"
          />

          {/* Sombra e Degradê do player */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/45 pointer-events-none" />

          {/* Informações no canto inferior esquerdo */}
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white z-10 max-w-md pointer-events-none">
            <h3 className="font-display text-lg md:text-2xl font-bold drop-shadow-md">
              Vivencie o Ruy Rodriguez
            </h3>
            <p className="text-xs md:text-sm text-white/80 font-body mt-1 drop-shadow-sm leading-relaxed">
              Descubra como nossa infraestrutura integrada, laboratórios e programas técnicos preparam nossos estudantes para os desafios do futuro.
            </p>
          </div>

          {/* Botões de controle flutuantes no canto inferior direito */}
          <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 flex items-center gap-3 z-10">
            <button
              onClick={handlePlayPause}
              className="p-3 md:p-4 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur-md transition-all border border-white/20 active:scale-95"
              title={isPlaying ? "Pausar Vídeo" : "Reproduzir Vídeo"}
            >
              {isPlaying ? <Pause className="w-4 h-4 md:w-5 md:h-5" /> : <Play className="w-4 h-4 md:w-5 md:h-5" />}
            </button>
            <button
              onClick={handleMuteToggle}
              className="p-3 md:p-4 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur-md transition-all border border-white/20 active:scale-95"
              title={isMuted ? "Ativar Áudio" : "Mutar Áudio"}
            >
              {isMuted ? <VolumeX className="w-4 h-4 md:w-5 md:h-5" /> : <Volume2 className="w-4 h-4 md:w-5 md:h-5" />}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default VideoSection;
