import Link from "next/link";
import { regularExams, vpExams } from "@/data/exams";
import ExamTable from "@/components/ExamTable";

export default function HomePage() {
  const sorted = [...regularExams].sort((a, b) => {
    if (!a.examStart || !b.examStart) return 0;
    return a.examStart.date.localeCompare(b.examStart.date);
  });

  return (
    <div className="min-h-screen" style={{ background: "#f8fafc" }}>
      {/* Header */}
      <header
        className="text-white py-10 px-4"
        style={{
          background: "linear-gradient(135deg, #5B1E22 0%, #7C2D34 60%, #9B3540 100%)",
        }}
      >
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "rgba(255,255,255,0.55)" }}>
            Facultatea de Teologie Ortodoxă «Sfântul Dumitru Stăniloae»
          </p>
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-1">
            Calendar și rezumate sesiune — Teologie Ortodoxă
          </h1>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
            Anul II · Sesiunea iunie 2026
          </p>
        </div>
      </header>

      <div className="h-1" style={{ background: "linear-gradient(90deg, #059669, #d97706, #7C2D34)" }} />

      <main className="max-w-5xl mx-auto px-4 py-10">
        {/* Intro */}
        <p
          className="text-sm leading-relaxed mb-10 max-w-2xl pl-4 py-1"
          style={{ color: "#64748b", borderLeft: "3px solid #059669" }}
        >
          Selectează o disciplină pentru a vedea informațiile examenului, cronometrul
          rămas și materia de studiu organizată pe capitole.
        </p>

        {/* Examene principale */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-5">
            <h2 className="font-bold text-lg" style={{ color: "#0f172a" }}>
              Examene scrise
            </h2>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700">
              {sorted.length} discipline
            </span>
          </div>
          <ExamTable exams={sorted} />
        </section>

        {/* VP */}
        <section>
          <div className="flex items-center gap-3 mb-2">
            <h2 className="font-bold text-lg" style={{ color: "#0f172a" }}>
              Verificare pe parcurs
            </h2>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
              {vpExams.length} discipline
            </span>
          </div>
          <p className="text-xs text-slate-400 mb-5">
            Fără dată, interval orar sau sală în graficul oficial.
          </p>

          {/* Desktop */}
          <div className="hidden md:block overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr style={{ background: "#1e293b", color: "#fff" }}>
                  <th className="text-left px-5 py-3.5 font-semibold text-slate-300 text-xs uppercase tracking-wider">
                    Disciplina
                  </th>
                  <th className="text-left px-5 py-3.5 font-semibold text-slate-300 text-xs uppercase tracking-wider">
                    Cadru didactic
                  </th>
                  <th className="text-left px-5 py-3.5 font-semibold text-slate-300 text-xs uppercase tracking-wider">
                    Tip evaluare
                  </th>
                  <th className="px-5 py-3.5" />
                </tr>
              </thead>
              <tbody>
                {vpExams.map((exam) => (
                  <tr
                    key={exam.slug}
                    className="border-b border-slate-100 bg-white hover:bg-slate-50 transition-colors"
                  >
                    <td className="px-5 py-3.5 font-semibold text-slate-900">
                      {exam.discipline}
                    </td>
                    <td className="px-5 py-3.5 text-slate-600">{exam.profesor}</td>
                    <td className="px-5 py-3.5">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                        Verificare pe parcurs
                      </span>
                    </td>
                    <td className="px-5 py-3.5">
                      <Link
                        href={`/materie/${exam.slug}`}
                        className="text-xs font-semibold px-3.5 py-1.5 rounded-full border border-slate-400 text-slate-600 hover:bg-slate-800 hover:text-white hover:border-slate-800 transition-colors inline-block whitespace-nowrap"
                      >
                        Vezi materia →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobil */}
          <div className="md:hidden space-y-3">
            {vpExams.map((exam) => (
              <div
                key={exam.slug}
                className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <h3 className="font-semibold text-slate-900">{exam.discipline}</h3>
                <p className="text-sm text-slate-500 mt-1 mb-2">{exam.profesor}</p>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 inline-block mb-3">
                  Verificare pe parcurs
                </span>
                <div>
                  <Link
                    href={`/materie/${exam.slug}`}
                    className="text-xs font-semibold px-3.5 py-1.5 rounded-full border border-slate-400 text-slate-600 inline-block whitespace-nowrap"
                  >
                    Vezi materia →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-16 border-t border-slate-200 py-6 px-4 text-center text-xs text-slate-400">
        <p>Facultatea de Teologie Ortodoxă «Sfântul Dumitru Stăniloae» — Universitatea «Alexandru Ioan Cuza» din Iași</p>
        <p className="mt-1">Platformă de organizare a sesiunii, Anul II, 2025–2026 · Andrei Radu</p>
      </footer>
    </div>
  );
}
