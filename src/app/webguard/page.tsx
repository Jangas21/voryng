"use client";
import { useState } from "react";
import { ShieldCheck, FileText } from "lucide-react";
import Header from "@/components/Header";
import { useAuth } from "@/contexts/AuthProvider";
import AuthModal from "@/components/AuthModal";
import { supabase } from "@/lib/supabaseClient";

type Report = { score: number; issues: string[]; };

export default function WebGuardPage() {
  const { user } = useAuth();
  const [showAuth, setShowAuth] = useState(false);
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState<Report | null>(null);

const handleAnalyze = async () => {
    if (!user) {
      setShowAuth(true);
      return;
    }
    setLoading(true);
    setTimeout(async () => {
      const newReport: Report = {
        score: 87,
        issues: ["Header X-Frame-Options ausente", "Cookie sin Secure"],
      };
      setReport(newReport);
      setLoading(false);
      const { error } = await supabase.from("scans").insert([
        {
          user_id: user.id,
          url,
          score: newReport.score,
          issues: newReport.issues,
        },
      ]);
      if (error) {
        console.error("Error guardando el análisis:", error);
      }
    }, 1500);
  };

  return (
    <main className="relative overflow-clip">
      <div className="relative z-10">
        <Header />

        <section className="max-w-3xl mx-auto px-6 pt-28 pb-24 text-center">
          <h1 className="text-4xl font-bold mb-2">WebGuard</h1>
          <p className="text-muted-foreground mb-8">
            Analiza la seguridad de cualquier sitio web y genera un informe con mejoras recomendadas.
          </p>

          <div className="flex gap-2 justify-center">
            <input
              className="px-4 py-2 w-72 rounded-lg border border-border bg-card/60"
              type="text"
              placeholder="https://tusitio.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <button onClick={handleAnalyze} className="btn-primary">
              {loading ? "Analizando..." : "Analizar"}
            </button>
          </div>

          {report && (
            <div className="mt-10 p-6 rounded-2xl border border-border/60 bg-card/70 text-left">
              <h3 className="font-semibold flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-accent" />
                Resultado de análisis
              </h3>
              <p className="mt-2 text-sm">Puntuación general: <b>{report.score}/100</b></p>
              <ul className="mt-3 list-disc list-inside text-sm text-muted-foreground">
                {report.issues.map((i) => (<li key={i}>{i}</li>))}
              </ul>
              <button className="btn-secondary mt-4 inline-flex items-center gap-2">
                <FileText className="h-4 w-4" /> Exportar a PDF
              </button>
            </div>
          )}
        </section>
      </div>

      {/* ✅ Modal global para este flujo */}
      <AuthModal open={showAuth} onClose={()=>setShowAuth(false)} />
    </main>
  );
}
