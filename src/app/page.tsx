import Link from "next/link";
import { regularExams, vpExams } from "@/data/exams";
import ExamTable from "@/components/ExamTable";

export default function HomePage() {
  const sorted = [...regularExams].sort((a, b) => {
    if (!a.examStart || !b.examStart) return 0;
    return a.examStart.date.localeCompare(b.examStart.date);
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#A43234] text-white py-8 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-red-200 mb-2">
            Facultatea de Teologie Ortodoxă «Sf. Dumitru Stăniloae»
          </p>
          <h1 className="text-2xl md:text-3xl font-bold leading-tight">
            Calendar sesiune — Teologie Ortodoxă, Anul II
          </h1>
        </div>
      </header>

      <div className="h-1 bg-yellow-800" />

      <main className="max-w-5xl mx-auto px-4 py-10">
        <p className="text-gray-600 text-sm leading-relaxed mb-8 max-w-2xl border-l-4 border-[#A43234] pl-4">
          Această platformă centralizează examenele și materialele de studiu
          pentru sesiune. Selectează o disciplină pentru a vedea informațiile
          examenului și materia de învățat.
        </p>

        <section>
          <h2 className="text-[#A43234] font-bold text-xl mb-4 border-b border-[#A43234]/30 pb-2">
            Examene — Sesiunea iunie 2026
          </h2>
          <ExamTable exams={sorted} />
        </section>

        <section className="mt-14">
          <h2 className="text-gray-700 font-bold text-xl mb-2 border-b border-gray-300 pb-2">
            Discipline cu verificare pe parcurs
          </h2>
          <p className="text-sm text-gray-500 mb-5">
            Disciplinele de mai jos nu au dată, interval orar sau sală indicate în graficul oficial.
          </p>

          {/* Desktop */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-700 text-white">
                  <th className="text-left px-4 py-3 font-semibold">Disciplina</th>
                  <th className="text-left px-4 py-3 font-semibold">Cadru didactic</th>
                  <th className="text-left px-4 py-3 font-semibold">Tip evaluare</th>
                  <th className="text-left px-4 py-3 font-semibold"></th>
                </tr>
              </thead>
              <tbody>
                {vpExams.map((exam, idx) => (
                  <tr
                    key={exam.slug}
                    className={`border-b border-gray-200 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-gray-100 transition-colors`}
                  >
                    <td className="px-4 py-3 font-medium text-gray-900">{exam.discipline}</td>
                    <td className="px-4 py-3 text-gray-700">{exam.profesor}</td>
                    <td className="px-4 py-3">
                      <span className="text-xs font-semibold text-gray-600 border border-gray-400 px-2 py-0.5 rounded-sm uppercase tracking-wide">
                        Verificare pe parcurs
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <Link
                        href={`/materie/${exam.slug}`}
                        className="inline-block border border-gray-500 text-gray-600 text-xs font-semibold px-3 py-1.5 rounded-sm hover:bg-gray-700 hover:text-white transition-colors uppercase tracking-wide"
                      >
                        Vezi materia
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
              <div key={exam.slug} className="border border-gray-200 rounded-sm bg-white p-4 shadow-sm">
                <h3 className="font-semibold text-gray-900">{exam.discipline}</h3>
                <p className="text-sm text-gray-600 mt-1">{exam.profesor}</p>
                <span className="mt-2 inline-block text-xs font-semibold text-gray-600 border border-gray-400 px-2 py-0.5 rounded-sm uppercase tracking-wide">
                  Verificare pe parcurs
                </span>
                <div className="mt-3">
                  <Link
                    href={`/materie/${exam.slug}`}
                    className="inline-block border border-gray-500 text-gray-600 text-xs font-semibold px-3 py-1.5 rounded-sm hover:bg-gray-700 hover:text-white transition-colors uppercase tracking-wide"
                  >
                    Vezi materia
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-auto border-t border-gray-200 py-6 px-4 text-center text-xs text-gray-400">
        <p>Facultatea de Teologie Ortodoxă «Sf. Dumitru Stăniloae» — Universitatea «Alexandru Ioan Cuza» din Iași</p>
        <p className="mt-1">Platformă de organizare a sesiunii, Anul II, 2025–2026</p>
      </footer>
    </div>
  );
}
