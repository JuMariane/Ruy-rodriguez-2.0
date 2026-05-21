import { useState } from "react";
import { Menu, X, LogIn, LogOut } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { UserType } from "./LoginModal";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "A Escola", href: "#sobre" },
  { label: "Turnos e Horários", href: "#horarios" },
  { label: "Vida Escolar", href: "#vida-escolar" },
  { label: "Mural", href: "#mural" },
  { label: "Documentos", href: "#documentos" },
  { label: "Dúvidas", href: "#duvidas" },
];

interface SchoolNavProps {
  user: UserType | null;
  onLogout: () => void;
  onOpenLogin: () => void;
}

const SchoolNav = ({ user, onLogout, onOpenLogin }: SchoolNavProps) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#inicio" className="font-display text-xl font-bold text-primary tracking-tight">
          Escola Ruy Rodriguez
        </a>

        {/* Desktop Links & Login */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="h-4 w-px bg-border" />

          {user ? (
            <div className="flex items-center gap-3">
              <div className="flex flex-col items-end">
                <span className="text-xs font-semibold text-foreground max-w-[120px] truncate">{user.name}</span>
                <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider ${
                  user.role === "management" 
                    ? "bg-primary/10 text-primary border border-primary/20" 
                    : "bg-emerald-500/10 text-emerald-600 border border-emerald-500/20"
                }`}>
                  {user.role === "management" ? "Gestão" : "Estudante"}
                </span>
              </div>
              <button
                onClick={onLogout}
                className="p-2 rounded-lg bg-muted text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
                title="Sair"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <button
              onClick={onOpenLogin}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-semibold text-xs hover:bg-school-red-dark transition-colors shadow-soft"
            >
              <LogIn className="w-3.5 h-3.5" /> Acesso Acadêmico
            </button>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-background border-b border-border"
          >
            <ul className="flex flex-col px-4 py-4 gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block text-sm font-medium text-foreground/70 hover:text-primary py-2"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <div className="h-px bg-border my-2" />
              {user ? (
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                      {user.name.substring(0, 2).toUpperCase()}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-foreground">{user.name}</span>
                      <span className="text-[9px] text-muted-foreground">{user.email}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      onLogout();
                      setOpen(false);
                    }}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-destructive/10 text-destructive text-xs font-semibold"
                  >
                    <LogOut className="w-3.5 h-3.5" /> Sair
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => {
                    onOpenLogin();
                    setOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-xs hover:bg-school-red-dark transition-colors"
                >
                  <LogIn className="w-4 h-4" /> Acesso Acadêmico
                </button>
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default SchoolNav;
