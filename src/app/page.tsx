import Header from "@/components/Header";
import { AnimatedCard } from "@/components/AnimatedCard";
import { Shield, LineChart, Wrench } from "lucide-react";

export default function Home() {
  return (
    <main className="relative overflow-clip">
      <div className="relative z-10">
        <Header />

        <section className="max-w-6xl mx-auto px-6 pt-28 pb-16">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Donde lo <span className="text-accent">aburrido</span> se vuelve <span className="text-accentAlt">brillante</span>.
          </h1>
          <p className="subtle max-w-2xl mt-4">
            Suite de microherramientas y automatizaciones. Empieza con WebGuard y añade módulos cuando los necesites.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a className="btn-primary" href="#demo">Probar demo</a>
            <a className="inline-flex items-center gap-2 text-accent hover:text-accentAlt transition" href="#docs">
              Ver documentación →
            </a>
          </div>
        </section>

        <section id="demo" className="max-w-6xl mx-auto px-6 pb-28 grid md:grid-cols-3 gap-6">
          <AnimatedCard icon={<Shield />} title="WebGuard" description="Análisis de seguridad web con checklist y export a PDF." badge="Core" href="/webguard" />
          <AnimatedCard icon={<LineChart />} title="Auidtly" description="Widgets de métricas y gráficos embebibles." badge="Beta" />
          <AnimatedCard icon={<Wrench />} title="DevOps Lite" description="Plantillas CI/CD y alertas ligeras." badge="Próximamente" />
          <AnimatedCard icon={<Wrench />} title="PhishGuard" description="Plantillas CI/CD y alertas ligeras." badge="Soon" />
        </section>
        <section className="max-w-6xl mx-auto px-6 pb-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { n: "12+", k: "Integraciones" },
            { n: "99.9%", k: "Uptime" },
            { n: "3x", k: "Más rápido" },
            { n: "∞", k: "Escalable" },
          ].map((m) => (
            <div key={m.k} className="rounded-xl border border-border/60 bg-card/60 py-5">
              <div className="text-2xl font-semibold text-primary">{m.n}</div>
              <div className="text-sm text-muted-foreground">{m.k}</div>
            </div>
          ))}
        </section>
        <section id="features" className="max-w-6xl mx-auto px-6 pb-16">
          <h2 className="text-2xl font-semibold mb-6">Cómo funciona</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: "Conecta", d: "Añade tu web o fuente de datos en 2 minutos." },
              { t: "Configura", d: "Activa módulos: WebGuard, Insights, DevOps Lite." },
              { t: "Automatiza", d: "Recibe reportes y alertas; comparte paneles." },
            ].map((s) => (
              <div key={s.t} className="rounded-2xl border border-border/60 bg-card/70 p-5">
                <h3 className="font-medium">{s.t}</h3>
                <p className="text-sm text-muted-foreground mt-1">{s.d}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="max-w-6xl mx-auto px-6 pb-16 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-semibold mb-3">Por qué Voryng</h2>
            <p className="text-muted-foreground">
              Microherramientas que encajan entre sí. Empieza pequeño y escala sin fricción.
            </p>
          </div>
          <ul className="space-y-3">
            {[
              "Instalación sin devops pesados",
              "Reportes exportables (PDF/CSV)",
              "Permisos por equipo y proyecto",
              "APIs limpias y webhooks",
            ].map((li) => (
              <li key={li} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary/80"></span>
                <span className="text-sm text-foreground/90">{li}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="max-w-6xl mx-auto px-6 pb-20">
          <div className="rounded-2xl border border-border/60 bg-card/80 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold">¿Listo para probar Voryng?</h3>
              <p className="text-muted-foreground text-sm mt-1">Empieza gratis. Sin tarjeta.</p>
            </div>
            <a href="#demo" className="btn-primary">Crear cuenta</a>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 pb-24">
          <h2 className="text-2xl font-semibold mb-6">Preguntas frecuentes</h2>
          <div className="space-y-3">
            {[
              ["¿Tiene plan gratuito?", "Sí. Incluye 1 proyecto y 3 reportes/mes."],
              ["¿Puedo exportar datos?", "CSV y PDF en todos los planes."],
              ["¿Hay API?", "Sí. REST + webhooks para automatizar flujos."],
            ].map(([q, a]) => (
              <details key={q} className="rounded-xl border border-border/60 bg-card/60 p-4">
                <summary className="cursor-pointer font-medium">{q}</summary>
                <p className="text-sm text-muted-foreground mt-2">{a}</p>
              </details>
            ))}
          </div>
        </section>

        <footer className="border-t border-border/60">
          <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="text-sm subtle">© {new Date().getFullYear()} Voryng</span>
            <nav className="flex gap-6 text-sm subtle">
              <a className="hover:text-text" href="#privacidad">Privacidad</a>
              <a className="hover:text-text" href="#terminos">Términos</a>
              <a className="hover:text-text" href="#contacto">Contacto</a>
            </nav>
          </div>
        </footer>
      </div>
    </main>
  );
}
