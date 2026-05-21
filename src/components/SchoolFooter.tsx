import { Instagram, Facebook, Globe } from "lucide-react";

const footerLinks = [
  { label: "Início", href: "#inicio" },
  { label: "A Escola", href: "#sobre" },
  { label: "Turnos e Horários", href: "#horarios" },
  { label: "Vida Escolar", href: "#vida-escolar" },
  { label: "Mural da Comunidade", href: "#mural" },
  { label: "Documentos", href: "#documentos" },
  { label: "Dúvidas Frequentes", href: "#duvidas" },
];

const SchoolFooter = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-display text-lg font-bold text-primary-foreground mb-3">
              Escola Ruy Rodriguez
            </h3>
            <p className="text-sm text-primary-foreground/60 font-body leading-relaxed">
              Escola Estadual comprometida com a educação pública de qualidade,
              formando cidadãos críticos e conscientes.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-primary-foreground mb-3">
              Links Rápidos
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors font-body"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-primary-foreground mb-3">
              Redes Sociais
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.instagram.com/ee_ruy_rodriguez/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors font-body"
                >
                  <Instagram size={16} className="text-primary" />
                  <span>Instagram (@ee_ruy_rodriguez)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/search/top?q=Escola%20Estadual%20Ruy%20Rodriguez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors font-body"
                >
                  <Facebook size={16} className="text-primary" />
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a
                  href="https://escolaruyrodriguez.wordpress.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors font-body"
                >
                  <Globe size={16} className="text-primary" />
                  <span>Blog WordPress</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 text-center">
          <p className="text-xs text-primary-foreground/40 font-body">
            © {new Date().getFullYear()} Escola Estadual Ruy Rodriguez. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SchoolFooter;

