import Link from "next/link";
import type { Exam } from "@/data/exams";

type Props = {
  exams: Exam[];
};

export default function ExamTable({ exams }: Props) {
  return (
    <>
      {/* Tabel — vizibil pe desktop */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-[#A43234] text-white">
              <th className="text-left px-4 py-3 font-semibold">Disciplina</th>
              <th className="text-left px-4 py-3 font-semibold">Cadru didactic</th>
              <th className="text-left px-4 py-3 font-semibold">Data</th>
              <th className="text-left px-4 py-3 font-semibold">Interval orar</th>
              <th className="text-left px-4 py-3 font-semibold">Sala</th>
              <th className="text-left px-4 py-3 font-semibold"></th>
            </tr>
          </thead>
          <tbody>
            {exams.map((exam, idx) => (
              <tr
                key={exam.slug}
                className={`border-b border-gray-200 ${
                  idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                } hover:bg-red-50 transition-colors`}
              >
                <td className="px-4 py-3 font-medium text-gray-900">
                  {exam.discipline}
                </td>
                <td className="px-4 py-3 text-gray-700">{exam.profesor}</td>
                <td className="px-4 py-3 text-gray-700 whitespace-nowrap">
                  {exam.data}
                </td>
                <td className="px-4 py-3 text-gray-700 whitespace-nowrap">
                  {exam.interval}
                </td>
                <td className="px-4 py-3 text-gray-700">{exam.sala}</td>
                <td className="px-4 py-3">
                  <Link
                    href={`/materie/${exam.slug}`}
                    className="inline-block border border-[#A43234] text-[#A43234] text-xs font-semibold px-3 py-1.5 rounded-sm hover:bg-[#A43234] hover:text-white transition-colors uppercase tracking-wide"
                  >
                    Vezi materia
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Carduri — vizibile pe mobil */}
      <div className="md:hidden space-y-4">
        {exams.map((exam) => (
          <div
            key={exam.slug}
            className="border border-gray-200 rounded-sm bg-white p-4 shadow-sm"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-semibold text-gray-900 text-base leading-snug">
                {exam.discipline}
              </h3>
              <span className="text-xs font-bold text-[#A43234] whitespace-nowrap border border-[#A43234] px-2 py-0.5 rounded-sm">
                {exam.data}
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-1">{exam.profesor}</p>
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-700">
              <span>
                <span className="font-medium">Orar:</span> {exam.interval}
              </span>
              <span>
                <span className="font-medium">Sala:</span> {exam.sala}
              </span>
            </div>
            <div className="mt-3">
              <Link
                href={`/materie/${exam.slug}`}
                className="inline-block border border-[#A43234] text-[#A43234] text-xs font-semibold px-3 py-1.5 rounded-sm hover:bg-[#A43234] hover:text-white transition-colors uppercase tracking-wide"
              >
                Vezi materia
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
