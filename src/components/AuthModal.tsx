"use client";
import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthProvider";

export default function AuthModal({
  open,
  onClose,
  initialMode = "login",
}: {
  open: boolean;
  onClose: () => void;
  initialMode?: "login" | "signup";
}) {
  const { signIn, signUp } = useAuth();
  const [mode, setMode] = useState<"login" | "signup">(initialMode);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (open) {
      setMode(initialMode);
      setEmail(""); setPassword("");
      setError(null);
    }
  }, [open, initialMode]);

  if (!open) return null;

  const submit = async () => {
    setError(null);
    const err = mode === "login" ? await signIn(email, password) : await signUp(email, password);
    if (err) setError(err);
    else onClose();
  };

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/50 backdrop-blur-sm">
      <div className="w-full max-w-sm rounded-2xl border border-border/60 bg-card p-6">
        <h3 className="text-xl font-semibold mb-4 text-center">
          {mode === "login" ? "Iniciar sesión" : "Crear cuenta"}
        </h3>

        <input
          className="w-full mb-3 px-3 py-2 rounded border bg-background"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-full mb-4 px-3 py-2 rounded border bg-background"
          placeholder="Contraseña"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="text-red-400 text-sm mb-3">{error}</p>}

        <button
          onClick={submit}
          disabled={!email || !password}
          className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {mode === "login" ? "Entrar" : "Registrarme"}
        </button>

        <button
          onClick={() => setMode(mode === "login" ? "signup" : "login")}
          className="mt-3 text-xs subtle w-full"
        >
          {mode === "login" ? "¿No tienes cuenta? Regístrate" : "¿Ya tienes cuenta? Inicia sesión"}
        </button>

        <button onClick={onClose} className="mt-2 text-xs subtle w-full">
          Cerrar
        </button>
      </div>
    </div>
  );
}
