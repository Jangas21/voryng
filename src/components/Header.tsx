"use client";
import PillNav from "@/components/reactbits/PillNav";

export default function Header() {
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
        ]}
        activeHref="/"
        baseColor="rgba(10,15,20,0.85)"
        pillColor="#00C2FF"
        hoveredPillTextColor="#0B0F14"
        pillTextColor="#E5E7EB"
        className="text-[#E5E7EB]"
        onMobileMenuClick={() => {}}
      />
    </div>
  );
}
