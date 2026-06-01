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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#A43234] text-white py-6 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-red-200 mb-1">
            Facultatea de Teologie Ortodoxă «Sf. Dumitru Stăniloae»
          </p>
          <h1 className="text-xl md:text-2xl font-bold leading-tight">
            {exam.discipline}
          </h1>
        </div>
      </header>

      <div className="h-1 bg-yellow-800" />

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Navigare înapoi */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#A43234] text-sm font-semibold hover:underline mb-6"
        >
          <span aria-hidden>&#8592;</span> Înapoi la calendar
        </Link>

        {/* Fișa examenului */}
        <div className="border border-gray-200 rounded-sm p-5 bg-gray-50 mb-6">
          <h2 className="text-[#A43234] font-bold text-base uppercase tracking-wide mb-4">
            Informații examen
          </h2>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div>
              <dt className="text-gray-500 font-medium mb-0.5">Disciplina</dt>
              <dd className="text-gray-900 font-semibold">{exam.discipline}</dd>
            </div>
            <div>
              <dt className="text-gray-500 font-medium mb-0.5">Cadru didactic</dt>
              <dd className="text-gray-900">{exam.profesor}</dd>
            </div>
            <div>
              <dt className="text-gray-500 font-medium mb-0.5">Data</dt>
              <dd className="text-gray-900">{exam.data}</dd>
            </div>
            <div>
              <dt className="text-gray-500 font-medium mb-0.5">Interval orar</dt>
              <dd className="text-gray-900">{exam.interval}</dd>
            </div>
            <div>
              <dt className="text-gray-500 font-medium mb-0.5">Sala</dt>
              <dd className="text-gray-900">{exam.sala}</dd>
            </div>
            {exam.isVP && (
              <div>
                <dt className="text-gray-500 font-medium mb-0.5">Tip evaluare</dt>
                <dd>
                  <span className="text-xs font-semibold text-gray-600 border border-gray-400 px-2 py-0.5 rounded-sm uppercase tracking-wide">
                    Verificare pe parcurs
                  </span>
                </dd>
              </div>
            )}
          </dl>
        </div>

        {/* Countdown */}
        <CountdownTimer examStart={exam.examStart} />

        {/* Materia de învățat */}
        <section className="mt-10">
          <h2 className="text-[#A43234] font-bold text-xl border-b border-[#A43234]/30 pb-2 mb-6">
            Materia de învățat
          </h2>
          {exam.materie.length > 0 ? (
            <MaterieRenderer blocks={exam.materie} />
          ) : (
            <p className="text-gray-500 italic text-sm">
              Materia nu a fost adăugată încă. Editează fișierul{" "}
              <code className="bg-gray-100 px-1 py-0.5 rounded text-xs">
                src/data/exams.ts
              </code>{" "}
              pentru a adăuga conținut.
            </p>
          )}
        </section>

        {/* Buton înapoi jos */}
        <div className="mt-12 pt-6 border-t border-gray-200">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#A43234] text-sm font-semibold hover:underline"
          >
            <span aria-hidden>&#8592;</span> Înapoi la calendar
          </Link>
        </div>
      </main>

      <footer className="mt-auto border-t border-gray-200 py-6 px-4 text-center text-xs text-gray-400">
        <p>Facultatea de Teologie Ortodoxă «Sf. Dumitru Stăniloae» — Universitatea «Alexandru Ioan Cuza» din Iași</p>
        <p className="mt-1">Platformă de organizare a sesiunii, Anul II, 2025–2026</p>
      </footer>
    </div>
  );
}
