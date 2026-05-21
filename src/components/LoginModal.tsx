import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, User, Lock, Shield, Check, AlertCircle, ArrowLeft, Key } from "lucide-react";
import { toast } from "sonner";
import { dbService } from "../lib/dbService";

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

type ModalView = "login" | "forgot_password" | "verify_code" | "reset_password";

const LoginModal = ({ isOpen, onClose, onLogin }: LoginModalProps) => {
  const [view, setView] = useState<ModalView>("login");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  
  // Recovery states
  const [recoveryEmail, setRecoveryEmail] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");
  const [inputCode, setInputCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState<string | null>(null);

  // Reset states when modal is opened/closed
  useEffect(() => {
    setError(null);
    if (!isOpen) {
      setView("login");
      setEmail("");
      setName("");
      setPassword("");
      setRecoveryEmail("");
      setGeneratedCode("");
      setInputCode("");
      setNewPassword("");
      setConfirmPassword("");
    }
  }, [isOpen]);

  const validateEmail = (emailStr: string): "student" | "management" | null => {
    const cleanEmail = emailStr.trim().toLowerCase();
    
    // Check for student email: ra<digits><digit>@al.educacao.sp.gov.br
    const studentRegex = /^ra\d+@al\.educacao\.sp\.gov\.br$/i;
    if (studentRegex.test(cleanEmail)) {
      return "student";
    }
    
    // Check for management/teacher email
    if (
      cleanEmail.endsWith("@educacao.sp.gov.br") ||
      cleanEmail.endsWith("@professor.educacao.sp.gov.br") ||
      cleanEmail === "direcao@ruy.br" ||
      cleanEmail === "admin@admin.com"
    ) {
      return "management";
    }
    
    return null;
  };

  // Backwards compatibility: register currently active session user if not registered yet
  useEffect(() => {
    const registerFallback = async () => {
      if (isOpen) {
        const savedUserStr = localStorage.getItem("ruy_user");
        if (savedUserStr) {
          try {
            const savedUser = JSON.parse(savedUserStr);
            if (savedUser && savedUser.email) {
              const existing = await dbService.getUser(savedUser.email);
              if (!existing) {
                await dbService.createUser({
                  email: savedUser.email,
                  name: savedUser.name,
                  role: savedUser.role,
                  password: "1234" // Default fallback password
                });
              }
            }
          } catch {}
        }
      }
    };
    registerFallback();
  }, [isOpen]);

  const handleLoginSubmit = async (e: React.FormEvent) => {
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
      setError("Utilize um e-mail institucional válido (@al.educacao.sp.gov.br para alunos no formato RA+Dígito ou @educacao.sp.gov.br para a gestão).");
      return;
    }

    try {
      const existingUser = await dbService.getUser(cleanEmail);

      if (existingUser) {
        if (existingUser.password !== password) {
          setError("Senha incorreta para este e-mail acadêmico.");
          return;
        }
        
        const loggedUser: UserType = {
          email: existingUser.email,
          name: existingUser.name,
          role: existingUser.role,
        };
        
        onLogin(loggedUser);
        toast.success(`Seja bem-vindo(a) de volta, ${existingUser.name}!`, {
          description: `Conectado como ${existingUser.role === "management" ? "Gestão Escolar" : "Estudante"}.`
        });
      } else {
        // Register new user
        const newUserObj = {
          email: cleanEmail,
          name: cleanName,
          role: role,
          password: password
        };
        await dbService.createUser(newUserObj);

        const loggedUser: UserType = {
          email: cleanEmail,
          name: cleanName,
          role: role,
        };
        
        onLogin(loggedUser);
        toast.success(`Cadastro e login efetuados com sucesso!`, {
          description: `Seja bem-vindo(a) à plataforma, ${cleanName}.`
        });
      }

      setEmail("");
      setName("");
      setPassword("");
      onClose();
    } catch (err) {
      console.error(err);
      setError("Erro ao autenticar. Verifique sua conexão.");
    }
  };

  const handleForgotPasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const cleanEmail = recoveryEmail.trim().toLowerCase();
    if (!cleanEmail) {
      setError("Por favor, informe seu e-mail.");
      return;
    }

    try {
      const user = await dbService.getUser(cleanEmail);
      if (!user) {
        setError("Este e-mail institucional não está cadastrado no site.");
        return;
      }

      // Generate random 6-digit verification code
      const code = Math.floor(100000 + Math.random() * 900000).toString();
      setGeneratedCode(code);
      
      // Simulate sending email
      toast.info(`[SIMULAÇÃO] Código de recuperação enviado!`, {
        duration: 15000,
        description: `Código: ${code} (Copie este código para redefinir sua senha).`
      });

      setView("verify_code");
    } catch (err) {
      console.error(err);
      setError("Erro ao buscar e-mail. Verifique sua conexão.");
    }
  };

  const handleVerifyCodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (inputCode.trim() !== generatedCode) {
      setError("Código de verificação incorreto. Tente novamente.");
      return;
    }

    setView("reset_password");
  };

  const handleResetPasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (newPassword.length < 4) {
      setError("A nova senha deve conter pelo menos 4 caracteres.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("As senhas informadas não coincidem.");
      return;
    }

    try {
      const cleanEmail = recoveryEmail.trim().toLowerCase();
      const updated = await dbService.updateUserPassword(cleanEmail, newPassword);

      if (updated) {
        toast.success("Senha redefinida com sucesso!", {
          description: "Agora você pode entrar na sua conta com a nova senha."
        });

        setRecoveryEmail("");
        setGeneratedCode("");
        setInputCode("");
        setNewPassword("");
        setConfirmPassword("");
        setView("login");
      } else {
        setError("Erro ao redefinir senha. Tente novamente.");
      }
    } catch (err) {
      console.error(err);
      setError("Erro ao redefinir senha. Verifique sua conexão.");
    }
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

            {view === "login" && (
              <>
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

                <form onSubmit={handleLoginSubmit} className="space-y-4">
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
                        placeholder="ra123456789d@al.educacao.sp.gov.br"
                        className="w-full pl-10 pr-4 py-2.5 text-xs bg-muted border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                      />
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground">
                        <Mail className="w-4 h-4" />
                      </span>
                    </div>
                  </div>

                  {/* Password input */}
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block">
                        Senha (mín. 4 caracteres)
                      </label>
                      <button
                        type="button"
                        onClick={() => setView("forgot_password")}
                        className="text-[10px] font-bold text-primary hover:text-school-red-dark transition-colors"
                      >
                        Esqueceu a senha?
                      </button>
                    </div>
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
                        <strong>Estudante:</strong> use seu e-mail no formato <code>ra + dígito + @al.educacao.sp.gov.br</code> (ex: <code>000123456789x@al.educacao.sp.gov.br</code>).
                      </p>
                    </div>
                    <div className="flex gap-1.5 items-start">
                      <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                      <p>
                        <strong>Gestão/Professor:</strong> use e-mails finalizados em <code>@educacao.sp.gov.br</code> ou <code>@professor.educacao.sp.gov.br</code>.
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
              </>
            )}

            {view === "forgot_password" && (
              <>
                <div className="mb-6 text-center">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <Key className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-foreground">
                    Recuperar Senha
                  </h3>
                  <p className="text-xs text-muted-foreground font-body mt-1 max-w-sm mx-auto">
                    Insira o seu e-mail institucional cadastrado para receber um código de recuperação.
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

                <form onSubmit={handleForgotPasswordSubmit} className="space-y-4">
                  <div>
                    <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-1">
                      Seu E-mail Institucional
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        required
                        value={recoveryEmail}
                        onChange={(e) => setRecoveryEmail(e.target.value)}
                        placeholder="Ex: ra123456789d@al.educacao.sp.gov.br"
                        className="w-full pl-10 pr-4 py-2.5 text-xs bg-muted border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                      />
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground">
                        <Mail className="w-4 h-4" />
                      </span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-xs hover:bg-school-red-dark transition-all shadow-hero active:scale-[0.98] mt-2 block"
                  >
                    Enviar Código de Recuperação
                  </button>

                  <button
                    type="button"
                    onClick={() => setView("login")}
                    className="w-full py-2.5 rounded-xl border border-border text-[11px] font-semibold text-foreground hover:bg-muted transition-colors flex items-center justify-center gap-1.5 mt-2"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> Voltar para o Login
                  </button>
                </form>
              </>
            )}

            {view === "verify_code" && (
              <>
                <div className="mb-6 text-center">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-foreground">
                    Verificar Código
                  </h3>
                  <p className="text-xs text-muted-foreground font-body mt-1 max-w-sm mx-auto">
                    Insira o código de 6 dígitos que enviamos para o e-mail: <strong className="text-foreground">{recoveryEmail}</strong>
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

                <form onSubmit={handleVerifyCodeSubmit} className="space-y-4">
                  <div>
                    <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-1">
                      Código de 6 dígitos
                    </label>
                    <input
                      type="text"
                      required
                      maxLength={6}
                      value={inputCode}
                      onChange={(e) => setInputCode(e.target.value.replace(/\D/g, ""))}
                      placeholder="000000"
                      className="w-full py-3 text-center text-lg font-bold tracking-widest bg-muted border border-border rounded-xl text-foreground focus:outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-xs hover:bg-school-red-dark transition-all shadow-hero active:scale-[0.98] mt-2 block"
                  >
                    Confirmar Código
                  </button>

                  <button
                    type="button"
                    onClick={() => setView("forgot_password")}
                    className="w-full py-2.5 rounded-xl border border-border text-[11px] font-semibold text-foreground hover:bg-muted transition-colors flex items-center justify-center gap-1.5 mt-2"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> Voltar
                  </button>
                </form>
              </>
            )}

            {view === "reset_password" && (
              <>
                <div className="mb-6 text-center">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <Lock className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-foreground">
                    Nova Senha
                  </h3>
                  <p className="text-xs text-muted-foreground font-body mt-1 max-w-sm mx-auto">
                    Crie uma nova senha de acesso para a conta: <strong className="text-foreground">{recoveryEmail}</strong>
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

                <form onSubmit={handleResetPasswordSubmit} className="space-y-4">
                  {/* New Password */}
                  <div>
                    <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-1">
                      Nova Senha (mín. 4 caracteres)
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        required
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full pl-10 pr-4 py-2.5 text-xs bg-muted border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                      />
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground">
                        <Lock className="w-4 h-4" />
                      </span>
                    </div>
                  </div>

                  {/* Confirm New Password */}
                  <div>
                    <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-1">
                      Confirmar Nova Senha
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full pl-10 pr-4 py-2.5 text-xs bg-muted border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                      />
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground">
                        <Lock className="w-4 h-4" />
                      </span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-xs hover:bg-school-red-dark transition-all shadow-hero active:scale-[0.98] mt-2 block"
                  >
                    Salvar Nova Senha e Entrar
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LoginModal;

