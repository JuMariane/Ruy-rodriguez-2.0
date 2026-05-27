import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

const VideoCard = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  // Monitora o scroll conforme o elemento se aproxima do centro da tela
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 90%", "start 50%"],
  });

  // Animações acopladas ao scroll
  const scale = useTransform(scrollYProgress, [0, 1], [0.75, 1]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["24px", "16px"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [0.7, 1]);

  const handlePlayPause = () => {
    if (!iframeRef.current || !iframeRef.current.contentWindow) return;
    if (isPlaying) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: "command", func: "pauseVideo", args: "" }),
        "*"
      );
      setIsPlaying(false);
    } else {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: "command", func: "playVideo", args: "" }),
        "*"
      );
      setIsPlaying(true);
    }
  };

  const handleMuteToggle = () => {
    if (!iframeRef.current || !iframeRef.current.contentWindow) return;
    if (isMuted) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: "command", func: "unMute", args: "" }),
        "*"
      );
      setIsMuted(false);
    } else {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: "command", func: "mute", args: "" }),
        "*"
      );
      setIsMuted(true);
    }
  };

  return (
    <div ref={containerRef} className="w-full flex justify-center py-6">
      <motion.div
        style={{
          scale,
          borderRadius,
          opacity,
        }}
        className="relative w-full max-w-4xl aspect-video overflow-hidden shadow-elevated border border-border bg-black flex items-center justify-center"
      >
        {/* Iframe do YouTube configurado como background video */}
        <iframe
          ref={iframeRef}
          src="https://www.youtube.com/embed/j-QzD0tXQXc?autoplay=1&mute=1&controls=0&loop=1&playlist=j-QzD0tXQXc&playsinline=1&rel=0&enablejsapi=1"
          title="Vídeo Institucional Ruy Rodriguez"
          className="w-full h-full pointer-events-none scale-[1.3] object-cover absolute inset-0"
          allow="autoplay; encrypted-media"
          style={{ border: 0 }}
        />

        {/* Overlay do player */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

        {/* Legenda inferior esquerdo */}
        <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 text-white z-10 max-w-md pointer-events-none text-left">
          <h3 className="font-display text-sm md:text-lg font-bold drop-shadow-md">
            Vivencie o Ruy Rodriguez
          </h3>
          <p className="text-[10px] md:text-xs text-white/80 font-body mt-0.5 drop-shadow-sm leading-relaxed">
            Descubra nossa infraestrutura integrada, laboratórios e programas técnicos.
          </p>
        </div>

        {/* Controles do player */}
        <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 flex items-center gap-2 z-10">
          <button
            onClick={handlePlayPause}
            className="p-2 md:p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all border border-white/20 active:scale-95"
            title={isPlaying ? "Pausar" : "Reproduzir"}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5 md:w-4 md:h-4" /> : <Play className="w-3.5 h-3.5 md:w-4 md:h-4" />}
          </button>
          <button
            onClick={handleMuteToggle}
            className="p-2 md:p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all border border-white/20 active:scale-95"
            title={isMuted ? "Ativar Som" : "Mutar Som"}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5 md:w-4 md:h-4" /> : <Volume2 className="w-3.5 h-3.5 md:w-4 md:h-4" />}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default VideoCard;
