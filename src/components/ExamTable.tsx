import Link from "next/link";
import type { Exam } from "@/data/exams";

type Props = {
  exams: Exam[];
};

export default function ExamTable({ exams }: Props) {
  return (
    <>
      {/* Tabel — desktop */}
      <div className="hidden md:block overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr style={{ background: "#0f172a", color: "#fff" }}>
              <th className="text-left px-5 py-3.5 font-semibold text-slate-300 text-xs uppercase tracking-wider">
                Disciplina
              </th>
              <th className="text-left px-5 py-3.5 font-semibold text-slate-300 text-xs uppercase tracking-wider">
                Cadru didactic
              </th>
              <th className="text-left px-5 py-3.5 font-semibold text-slate-300 text-xs uppercase tracking-wider">
                Data
              </th>
              <th className="text-left px-5 py-3.5 font-semibold text-slate-300 text-xs uppercase tracking-wider">
                Interval
              </th>
              <th className="text-left px-5 py-3.5 font-semibold text-slate-300 text-xs uppercase tracking-wider">
                Sala
              </th>
              <th className="px-5 py-3.5" />
            </tr>
          </thead>
          <tbody>
            {exams.map((exam, idx) => (
              <tr
                key={exam.slug}
                className="border-b border-slate-100 bg-white hover:bg-emerald-50 transition-colors"
              >
                <td className="px-5 py-3.5 font-semibold text-slate-900">
                  {exam.discipline}
                </td>
                <td className="px-5 py-3.5 text-slate-600">{exam.profesor}</td>
                <td className="px-5 py-3.5 whitespace-nowrap">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full text-white" style={{ background: "#7C2D34" }}>
                    {exam.data}
                  </span>
                </td>
                <td className="px-5 py-3.5 text-slate-600 whitespace-nowrap">
                  {exam.interval}
                </td>
                <td className="px-5 py-3.5 text-slate-600">{exam.sala}</td>
                <td className="px-5 py-3.5">
                  <Link
                    href={`/materie/${exam.slug}`}
                    className="inline-block text-xs font-semibold px-3.5 py-1.5 rounded-full border border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-colors whitespace-nowrap"
                  >
                    Vezi materia →
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Carduri — mobil */}
      <div className="md:hidden space-y-3">
        {exams.map((exam) => (
          <div
            key={exam.slug}
            className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
          >
            <div className="flex items-start justify-between gap-3 mb-1">
              <h3 className="font-semibold text-slate-900 text-base leading-snug">
                {exam.discipline}
              </h3>
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full text-white whitespace-nowrap shrink-0"
                style={{ background: "#7C2D34" }}
              >
                {exam.data}
              </span>
            </div>
            <p className="text-sm text-slate-500 mb-2">{exam.profesor}</p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-600 mb-3">
              <span>
                <span className="font-semibold">Orar:</span> {exam.interval}
              </span>
              <span>
                <span className="font-semibold">Sala:</span> {exam.sala}
              </span>
            </div>
            <Link
              href={`/materie/${exam.slug}`}
              className="inline-block text-xs font-semibold px-3.5 py-1.5 rounded-full border transition-colors whitespace-nowrap"
              style={{ color: "#059669", borderColor: "#059669" }}
            >
              Vezi materia →
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
