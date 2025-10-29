"use client";
import { useEffect, useRef, useState, memo } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { CircleUser, LogIn, UserPlus, LogOut, User as UserIcon, LayoutDashboard } from "lucide-react";
import { useAuth } from "@/contexts/AuthProvider";

const AuthModal = dynamic(() => import("@/components/AuthModal"), { ssr: false });
const ConfirmDialog = dynamic(() => import("@/components/ConfirmDialog"), { ssr: false });

function UserMenuInner() {
  const { user, signOut } = useAuth();
  const [openMenu, setOpenMenu] = useState(false);
  const [authOpen, setAuthOpen] = useState<{ open: boolean; mode: "login" | "signup" }>({ open: false, mode: "login" });
  const [confirmOpen, setConfirmOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpenMenu(false);
    };
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && setOpenMenu(false);
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  const onLogout = async () => {
    setConfirmOpen(false);
    await signOut();
  };

  return (
    <>
      <div ref={ref} className="relative">
        <button
          aria-haspopup="menu"
          aria-expanded={openMenu}
          aria-label="Menú de usuario"
          onClick={() => setOpenMenu(v => !v)}
          className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-border/60 bg-card hover:bg-card/80 transition"
        >
          <CircleUser className="h-5 w-5" />
        </button>

        {openMenu && (
          <div
            role="menu"
            tabIndex={-1}
            className="absolute right-0 mt-2 w-52 rounded-xl border border-border/60 bg-card/95 shadow-lg backdrop-blur-sm p-1 z-30"
          >
            {!user ? (
              <>
                <button
                  role="menuitem"
                  onClick={() => { setAuthOpen({ open: true, mode: "login" }); setOpenMenu(false); }}
                  className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-background/60 text-sm"
                >
                  <LogIn className="h-4 w-4" /> Iniciar sesión
                </button>
                <button
                  role="menuitem"
                  onClick={() => { setAuthOpen({ open: true, mode: "signup" }); setOpenMenu(false); }}
                  className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-background/60 text-sm"
                >
                  <UserPlus className="h-4 w-4" /> Registrarse
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/profile"
                  role="menuitem"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-background/60 text-sm"
                  onClick={() => setOpenMenu(false)}
                >
                  <UserIcon className="h-4 w-4" /> Perfil
                </Link>
                <Link
                  href="/dashboard"
                  role="menuitem"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-background/60 text-sm"
                  onClick={() => setOpenMenu(false)}
                >
                  <LayoutDashboard className="h-4 w-4" /> Dashboard
                </Link>
                <div className="my-1 h-px bg-border/60" />
                <button
                  role="menuitem"
                  onClick={() => { setConfirmOpen(true); setOpenMenu(false); }}
                  className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-background/60 text-sm text-red-300"
                >
                  <LogOut className="h-4 w-4" /> Cerrar sesión
                </button>
              </>
            )}
          </div>
        )}
      </div>

      {/* Modales (cargan sólo si se abren) */}
      <AuthModal
        open={authOpen.open}
        initialMode={authOpen.mode}
        onClose={() => setAuthOpen({ open: false, mode: "login" })}
      />
      <ConfirmDialog
        open={confirmOpen}
        title="¿Cerrar sesión?"
        description="Perderás el acceso al dashboard hasta volver a iniciar sesión."
        confirmText="Sí, salir"
        cancelText="Cancelar"
        onConfirm={onLogout}
        onCancel={() => setConfirmOpen(false)}
      />
    </>
  );
}

export default memo(UserMenuInner);
