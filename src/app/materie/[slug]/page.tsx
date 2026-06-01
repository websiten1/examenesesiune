import Link from "next/link";
import { notFound } from "next/navigation";
import { exams } from "@/data/exams";
import MaterieRenderer from "@/components/MaterieRenderer";
import CountdownTimer from "@/components/CountdownTimer";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return exams.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const exam = exams.find((e) => e.slug === slug);
  if (!exam) return { title: "Disciplină negăsită" };
  return {
    title: `${exam.discipline} — Calendar sesiune Teologie Anul II`,
  };
}

export default async function MateriePage({ params }: Props) {
  const { slug } = await params;
  const exam = exams.find((e) => e.slug === slug);
  if (!exam) notFound();

  return (
    <div className="min-h-screen" style={{ background: "#f8fafc" }}>
      {/* Header */}
      <header
        className="text-white py-8 px-4"
        style={{
          background: "linear-gradient(135deg, #5B1E22 0%, #7C2D34 60%, #9B3540 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>
            Facultatea de Teologie Ortodoxă «Sf. Dumitru Stăniloae»
          </p>
          <h1 className="text-xl md:text-2xl font-bold leading-tight">
            {exam.discipline}
          </h1>
        </div>
      </header>

      <div className="h-1" style={{ background: "linear-gradient(90deg, #059669, #d97706, #7C2D34)" }} />

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Navigare înapoi */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold mb-7 transition-colors hover:opacity-70"
          style={{ color: "#7C2D34" }}
        >
          ← Înapoi la calendar
        </Link>

        {/* Fișa examenului */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 mb-6 shadow-sm">
          <h2 className="font-bold text-xs uppercase tracking-widest mb-4" style={{ color: "#7C2D34" }}>
            Informații examen
          </h2>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <InfoRow label="Disciplina" value={exam.discipline} bold />
            <InfoRow label="Cadru didactic" value={exam.profesor} />
            <InfoRow label="Data" value={exam.data} />
            <InfoRow label="Interval orar" value={exam.interval} />
            <InfoRow label="Sala" value={exam.sala} />
            {exam.isVP && (
              <div>
                <dt className="text-xs text-slate-400 font-medium mb-1">Tip evaluare</dt>
                <dd>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                    Verificare pe parcurs
                  </span>
                </dd>
              </div>
            )}
          </dl>
        </div>

        {/* Countdown */}
        <CountdownTimer examStart={exam.examStart} />

        {/* Materia */}
        <section className="mt-10">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="font-bold text-lg" style={{ color: "#0f172a" }}>
              Materia de studiu
            </h2>
            {exam.materie.length > 0 && (
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700">
                {exam.materie.length} capitole
              </span>
            )}
          </div>

          {exam.materie.length > 0 ? (
            <MaterieRenderer blocks={exam.materie} />
          ) : (
            <p className="text-slate-400 italic text-sm">
              Materia nu a fost adăugată încă.
            </p>
          )}
        </section>

        <div className="mt-12 pt-6 border-t border-slate-200">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-70"
            style={{ color: "#7C2D34" }}
          >
            ← Înapoi la calendar
          </Link>
        </div>
      </main>

      <footer className="mt-16 border-t border-slate-200 py-6 px-4 text-center text-xs text-slate-400">
        <p>Facultatea de Teologie Ortodoxă «Sf. Dumitru Stăniloae» — Universitatea «Alexandru Ioan Cuza» din Iași</p>
        <p className="mt-1">Platformă de organizare a sesiunii, Anul II, 2025–2026</p>
      </footer>
    </div>
  );
}

function InfoRow({ label, value, bold }: { label: string; value: string; bold?: boolean }) {
  return (
    <div>
      <dt className="text-xs text-slate-400 font-medium mb-1">{label}</dt>
      <dd className={bold ? "text-slate-900 font-semibold" : "text-slate-800"}>
        {value}
      </dd>
    </div>
  );
}
