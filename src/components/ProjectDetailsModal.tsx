import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, ExternalLink } from "lucide-react";

export interface ProjectDetails {
  title: string;
  subtitle: string;
  date: string;
  description: string;
  tag: string;
  image: string;
  fullDescription?: string[];
  videos?: string[];
  gallery?: string[];
  originalUrl?: string;
}

interface ProjectDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectDetails | null;
}

const tagColors: Record<string, string> = {
  Ciências: "bg-school-warm/15 text-school-warm",
  "Meio Ambiente": "bg-emerald-100 text-emerald-700",
  Cultura: "bg-school-gold/15 text-school-gold",
  Antirracismo: "bg-primary/10 text-primary",
};

const ProjectDetailsModal = ({ isOpen, onClose, project }: ProjectDetailsModalProps) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-card/95 border border-border/50 rounded-2xl shadow-elevated backdrop-blur-md relative w-full max-w-4xl max-h-[90vh] flex flex-col z-10"
          >
            {/* Header Image */}
            <div className="h-48 md:h-64 relative w-full overflow-hidden shrink-0">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-background/40 hover:bg-background/80 border border-border/20 text-foreground transition-all z-20"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Tag Over Header */}
              <div className="absolute bottom-4 left-6">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${tagColors[project.tag] || "bg-muted text-muted-foreground"}`}>
                  {project.tag}
                </span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 md:p-8 overflow-y-auto flex-1 space-y-6">
              {/* Title & Meta */}
              <div>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-1">
                  {project.title}
                </h3>
                <p className="text-sm font-medium text-primary/80 mb-2">{project.subtitle}</p>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Calendar className="w-3.5 h-3.5" />
                  {project.date}
                </div>
              </div>

              {/* Videos Section */}
              {project.videos && project.videos.length > 0 && (
                <div className="space-y-4">
                  <h4 className="font-display text-lg font-bold text-foreground">
                    Vídeos do Projeto
                  </h4>
                  <div className={`grid gap-4 ${project.videos.length > 1 ? "md:grid-cols-2" : "grid-cols-1"}`}>
                    {project.videos.map((videoUrl, idx) => (
                      <div
                        key={idx}
                        className="relative aspect-video w-full rounded-xl overflow-hidden shadow-soft border border-border/30 bg-black/10"
                      >
                        <iframe
                          src={videoUrl}
                          className="absolute inset-0 w-full h-full"
                          frameBorder="0"
                          allowFullScreen
                          title={`Vídeo ${idx + 1}`}
                          allow="clipboard-write"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Description Paragraphs */}
              <div className="space-y-4">
                {project.fullDescription && project.fullDescription.length > 0 ? (
                  project.fullDescription.map((para, idx) => (
                    <p key={idx} className="text-muted-foreground font-body text-base leading-relaxed">
                      {para}
                    </p>
                  ))
                ) : (
                  <p className="text-muted-foreground font-body text-base leading-relaxed">
                    {project.description}
                  </p>
                )}
              </div>

              {/* Gallery Images */}
              {project.gallery && project.gallery.length > 0 && (
                <div className="space-y-4 pt-4 border-t border-border/30">
                  <h4 className="font-display text-lg font-bold text-foreground">
                    Galeria de Fotos
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {project.gallery.map((imgUrl, idx) => (
                      <div
                        key={idx}
                        className="aspect-[4/3] rounded-lg overflow-hidden border border-border/30 shadow-soft hover:scale-[1.02] transition-transform duration-300 bg-muted"
                      >
                        <img
                          src={imgUrl}
                          alt={`Foto da atividade ${idx + 1}`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Link to original blog */}
              {project.originalUrl && (
                <div className="pt-6 border-t border-border/30 flex justify-end">
                  <a
                    href={project.originalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-school-red-light transition-colors"
                  >
                    Ver publicação original no Blog <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetailsModal;
