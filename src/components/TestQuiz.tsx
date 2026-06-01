"use client";

import { useState } from "react";
import type { TestQuestion } from "@/data/exams";

type Props = {
  questions: TestQuestion[];
};

function shuffleQuestions(questions: TestQuestion[]): TestQuestion[] {
  return questions.map((q) => {
    const indices = q.variante.map((_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    return {
      ...q,
      variante: indices.map((i) => q.variante[i]),
      corect: indices.indexOf(q.corect),
    };
  });
}

export default function TestQuiz({ questions }: Props) {
  const [shuffled, setShuffled] = useState(() => shuffleQuestions(questions));
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(questions.length).fill(null)
  );
  const [finished, setFinished] = useState(false);

  const q = shuffled[current];
  const isAnswered = selected !== null;
  const isCorrect = selected === q.corect;

  function pick(idx: number) {
    if (isAnswered) return;
    setSelected(idx);
    const next = [...answers];
    next[current] = idx;
    setAnswers(next);
  }

  function goNext() {
    if (current + 1 < shuffled.length) {
      setCurrent(current + 1);
      setSelected(answers[current + 1]);
    } else {
      setFinished(true);
    }
  }

  function restart() {
    const next = shuffleQuestions(questions);
    setShuffled(next);
    setCurrent(0);
    setSelected(null);
    setAnswers(Array(questions.length).fill(null));
    setFinished(false);
  }

  const score = answers.filter((a, i) => a === shuffled[i].corect).length;
  const pct = Math.round((score / shuffled.length) * 100);

  if (finished) {
    const grade =
      pct >= 90
        ? { label: "Excelent! Esti pregatit(a).", color: "#059669" }
        : pct >= 70
        ? { label: "Bine! Revizuieste ce-ai gresit.", color: "#d97706" }
        : pct >= 50
        ? { label: "Mediu. Mai ai de munca.", color: "#ea580c" }
        : { label: "Sub 50%. Recomandare: Cursul complet.", color: "#7C2D34" };

    return (
      <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
        <div
          className="p-8 text-center text-white"
          style={{ background: "#0f172a" }}
        >
          <p className="text-slate-400 text-xs uppercase tracking-widest mb-4">
            Rezultat final
          </p>
          <div className="text-7xl font-bold tabular-nums mb-1" style={{ color: "#fff" }}>
            {pct}%
          </div>
          <p className="text-slate-400 text-sm mt-1">
            {score} din {shuffled.length} corecte
          </p>
          <p className="mt-4 font-semibold text-lg" style={{ color: grade.color }}>
            {grade.label}
          </p>
        </div>

        <div className="bg-white p-6">
          <div className="space-y-3 mb-6 max-h-72 overflow-y-auto">
            {shuffled.map((q, i) => {
              const a = answers[i];
              const ok = a === q.corect;
              return (
                <div key={i} className="flex items-start gap-3 text-sm">
                  <span
                    className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5"
                    style={{ background: ok ? "#059669" : "#7C2D34" }}
                  >
                    {ok ? "✓" : "✗"}
                  </span>
                  <div className="flex-1">
                    <p className="text-slate-700">{q.intrebare}</p>
                    {!ok && (
                      <p className="text-xs text-emerald-700 mt-0.5">
                        Corect: {q.variante[q.corect]}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={restart}
            className="w-full py-3 rounded-xl font-semibold text-white text-sm transition-opacity hover:opacity-90"
            style={{ background: "#7C2D34" }}
          >
            Încearcă din nou
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
      {/* Header */}
      <div
        className="px-5 py-4 flex items-center justify-between"
        style={{ background: "#0f172a" }}
      >
        <p className="text-slate-400 text-xs uppercase tracking-widest">
          Întrebarea {current + 1} din {shuffled.length}
        </p>
        <div className="flex gap-1">
          {shuffled.map((_, i) => (
            <span
              key={i}
              className="w-2 h-2 rounded-full"
              style={{
                background:
                  answers[i] !== null
                    ? answers[i] === shuffled[i].corect
                      ? "#059669"
                      : "#7C2D34"
                    : i === current
                    ? "#94a3b8"
                    : "#1e293b",
              }}
            />
          ))}
        </div>
      </div>

      {/* Question */}
      <div className="bg-white p-6">
        <p className="font-semibold text-slate-900 text-base leading-snug mb-5">
          {q.intrebare}
        </p>

        <div className="space-y-2 mb-6">
          {q.variante.map((v, i) => {
            let bg = "bg-white border-slate-200";
            let text = "text-slate-800";
            if (isAnswered) {
              if (i === q.corect) {
                bg = "bg-emerald-50 border-emerald-400";
                text = "text-emerald-800 font-semibold";
              } else if (i === selected && i !== q.corect) {
                bg = "bg-red-50 border-red-300";
                text = "text-red-700 line-through";
              }
            } else {
              bg = "bg-white border-slate-200 hover:border-slate-400 hover:bg-slate-50 cursor-pointer";
            }

            return (
              <button
                key={i}
                onClick={() => pick(i)}
                disabled={isAnswered}
                className={`w-full text-left rounded-xl border px-4 py-3 text-sm transition-colors ${bg} ${text}`}
              >
                <span className="font-bold mr-2 text-slate-400">
                  {["A", "B", "C", "D"][i]}.
                </span>
                {v}
              </button>
            );
          })}
        </div>

        {isAnswered && (
          <div
            className="rounded-xl px-4 py-3 mb-5 text-sm font-medium"
            style={{
              background: isCorrect ? "#f0fdf4" : "rgba(124,45,52,0.06)",
              borderLeft: `4px solid ${isCorrect ? "#059669" : "#7C2D34"}`,
              color: isCorrect ? "#065f46" : "#7C2D34",
            }}
          >
            {isCorrect ? "✦ Corect!" : `✗ Răspuns corect: ${q.variante[q.corect]}`}
          </div>
        )}

        <button
          onClick={isAnswered ? goNext : undefined}
          disabled={!isAnswered}
          className="w-full py-3 rounded-xl font-semibold text-sm transition-opacity"
          style={{
            background: isAnswered ? "#7C2D34" : "#e2e8f0",
            color: isAnswered ? "#fff" : "#94a3b8",
            cursor: isAnswered ? "pointer" : "not-allowed",
          }}
        >
          {current + 1 === shuffled.length ? "Vezi rezultatul" : "Următoarea →"}
        </button>
      </div>
    </div>
  );
}
