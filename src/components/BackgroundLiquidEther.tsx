"use client";
import dynamic from "next/dynamic";

const LiquidEther = dynamic(() => import("@/components/reactbits/LiquidEther"), { ssr: false });

export default function BackgroundLiquidEther() {
  return (
    <div className="fixed inset-0 z-0" aria-hidden>
      {/* El canvas ocupa toda la pantalla */}
      <div className="absolute inset-0">
        <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          mouseForce={30}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.8}
          isBounce={true}
          autoDemo={true}
          autoSpeed={5}
          autoIntensity={3}
          takeoverDuration={0.25}
          autoResumeDelay={2}
          autoRampDuration={0.6}
        />
      </div>

      {/* (Opcional) Scrim para contraste; si tapa el efecto, comenta esta capa */}
      {/* <div className="absolute inset-0 pointer-events-none"
           style={{ background: "rgba(0,0,0,0.2)" }} /> */}
    </div>
  );
}
