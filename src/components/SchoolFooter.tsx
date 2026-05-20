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
              {["Início", "Sobre", "Projetos", "Educação Antirracista", "Contato"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/ /g, "-")}`}
                    className="text-sm text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors font-body"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-primary-foreground mb-3">
              Redes Sociais
            </h4>
            <a
              href="https://escolaruyrodriguez.wordpress.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors font-body"
            >
              Blog WordPress
            </a>
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
