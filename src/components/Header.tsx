"use client";
import PillNav from "@/components/reactbits/PillNav";
import { useAuth } from "@/contexts/AuthProvider";
import UserMenu from "@/components/UserMenu";

export default function Header() {
  const { user } = useAuth();

  return (
    <div className="fixed top-4 left-0 right-0 z-20 flex justify-center">
      <PillNav
        logo="/Voryng_logo_simple.svg"
        logoAlt="Voryng"
        logoHref="/"
        items={[
          { label: "Características", href: "#features" },
          { label: "Precios", href: "#precios" },
          { label: "Docs", href: "#docs" },
          ...(user ? [{ label: "Dashboard", href: "/dashboard" }] : []),
        ]}
        activeHref="/"
        baseColor="rgba(10,15,20,0.85)"
        pillColor="#00C2FF"
        hoveredPillTextColor="#0B0F14"
        pillTextColor="#E5E7EB"
        className="text-[#E5E7EB]"
        onMobileMenuClick={() => {}}
      />
      <div className="absolute right-6 top-1.5">
        <UserMenu />
      </div>
    </div>
  );
}
