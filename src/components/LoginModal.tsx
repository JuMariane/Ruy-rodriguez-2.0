import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, User, Lock, Shield, Check, AlertCircle } from "lucide-react";
import { toast } from "sonner";

export interface UserType {
  email: string;
  name: string;
  role: "student" | "management";
}

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (user: UserType) => void;
}

const LoginModal = ({ isOpen, onClose, onLogin }: LoginModalProps) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const validateEmail = (emailStr: string): "student" | "management" | null => {
    const cleanEmail = emailStr.trim().toLowerCase();
    
    // Check for student email
    if (cleanEmail.endsWith("@aluno.educacao.sp.gov.br")) {
      return "student";
    }
    
    // Check for management/teacher email
    if (
      cleanEmail.endsWith("@educacao.sp.gov.br") ||
      cleanEmail.endsWith("@professor.educacao.sp.gov.br") ||
      cleanEmail === "direcao@ruy.br" || // Testing fallbacks
      cleanEmail === "admin@admin.com"
    ) {
      return "management";
    }
    
    return null;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const cleanEmail = email.trim();
    const cleanName = name.trim();

    if (!cleanEmail || !cleanName || !password) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    if (password.length < 4) {
      setError("A senha deve conter pelo menos 4 caracteres.");
      return;
    }

    const role = validateEmail(cleanEmail);
    if (!role) {
      setError("Utilize um e-mail institucional válido da Secretaria da Educação de SP (@aluno.educacao.sp.gov.br ou @educacao.sp.gov.br).");
      return;
    }

    const newUser: UserType = {
      email: cleanEmail,
      name: cleanName,
      role: role,
    };

    onLogin(newUser);
    toast.success(`Acesso concedido como ${role === "management" ? "Gestão Escolar" : "Estudante"}!`, {
      description: `Seja bem-vindo(a), ${cleanName}.`
    });
    
    // Reset form
    setEmail("");
    setName("");
    setPassword("");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-card border border-border rounded-2xl p-6 max-w-md w-full shadow-elevated relative overflow-hidden z-10"
          >
            {/* Design accents */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-school-gold/5 rounded-full blur-xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground rounded-full hover:bg-muted transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6 text-center">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-bold text-2xl text-foreground">
                Acesso Acadêmico
              </h3>
              <p className="text-xs text-muted-foreground font-body mt-1 max-w-sm mx-auto">
                Faça login com seu e-mail institucional da Secretaria da Educação de São Paulo (SED).
              </p>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 p-3 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive text-xs flex gap-2 items-start font-body"
              >
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{error}</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name input */}
              <div>
                <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-1">
                  Nome Completo
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Seu nome completo"
                    className="w-full pl-10 pr-4 py-2.5 text-xs bg-muted border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                  />
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground">
                    <User className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* Email input */}
              <div>
                <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-1">
                  E-mail Institucional
                </label>
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="aluno@aluno.educacao.sp.gov.br"
                    className="w-full pl-10 pr-4 py-2.5 text-xs bg-muted border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                  />
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground">
                    <Mail className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* Password input */}
              <div>
                <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-1">
                  Senha (mín. 4 caracteres)
                </label>
                <div className="relative">
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-2.5 text-xs bg-muted border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                  />
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground">
                    <Lock className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* Tips Section */}
              <div className="p-3.5 bg-muted/50 border border-border/40 rounded-xl space-y-2 text-[10px] text-muted-foreground font-body">
                <div className="flex gap-1.5 items-start">
                  <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <p>
                    <strong>Estudante:</strong> use seu e-mail finalizado em <code>@aluno.educacao.sp.gov.br</code> para poder publicar e curtir no mural.
                  </p>
                </div>
                <div className="flex gap-1.5 items-start">
                  <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                  <p>
                    <strong>Gestão/Professor:</strong> use emails finalizados em <code>@educacao.sp.gov.br</code> ou <code>@professor.educacao.sp.gov.br</code> para ter acesso administrativo (excluir postagens do mural).
                  </p>
                </div>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-xs hover:bg-school-red-dark transition-all shadow-hero active:scale-[0.98] mt-2 block"
              >
                Entrar com Conta Acadêmica
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LoginModal;
