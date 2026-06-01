"use client";

import { useState } from "react";
import type { Exam } from "@/data/exams";
import MaterieRenderer from "./MaterieRenderer";
import TestQuiz from "./TestQuiz";

type Tab = "tabel" | "rezumat" | "complet" | "test";

type Props = {
  exam: Exam;
};

export default function MateriePageContent({ exam }: Props) {
  const hasComplet = !!(exam.materieComplet && exam.materieComplet.length > 0);
  const hasTest = !!(exam.test && exam.test.length > 0);
  const hasTabel = !!(exam.rezumat && exam.rezumat.length > 0);

  const [tab, setTab] = useState<Tab>(hasTabel ? "tabel" : "rezumat");

  const tabs: { id: Tab; label: string; available: boolean }[] = [
    { id: "tabel", label: "Tabel conceptual", available: hasTabel },
    { id: "rezumat", label: "Rezumat", available: true },
    { id: "complet", label: "Cursul complet", available: hasComplet },
    { id: "test", label: "Test", available: hasTest },
  ];

  return (
    <>
      {/* Tab selector */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tabs
          .filter((t) => t.available)
          .map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className="px-4 py-2 rounded-full text-sm font-semibold transition-all"
              style={
                tab === t.id
                  ? { background: "#7C2D34", color: "#fff" }
                  : {
                      background: "#f1f5f9",
                      color: "#64748b",
                      border: "1px solid #e2e8f0",
                    }
              }
            >
              {t.label}
            </button>
          ))}
      </div>

      {/* Content */}
      {tab === "tabel" && exam.rezumat && <TabelView rezumat={exam.rezumat} />}
      {tab === "rezumat" && (
        <>
          <div
            className="rounded-xl px-5 py-4 mb-6 text-sm"
            style={{
              background: "#f0fdf4",
              borderLeft: "4px solid #059669",
              color: "#374151",
            }}
          >
            Acesta este un rezumat al materiei. Dacă vrei să vezi materia mai
            completă, accesează{" "}
            <button
              onClick={() => setTab("complet")}
              className="font-semibold underline underline-offset-2"
              style={{ color: "#7C2D34" }}
            >
              Cursul complet
            </button>
            .
          </div>
          <MaterieRenderer blocks={exam.materie} />
        </>
      )}
      {tab === "complet" && exam.materieComplet && (
        <CompletView blocks={exam.materieComplet} />
      )}
      {tab === "test" && exam.test && <TestQuiz questions={exam.test} />}
    </>
  );
}

// ─── Tabel conceptual ────────────────────────────────────────────────────────
import type { RezumatBlock } from "@/data/exams";

const cursColors = [
  "#7C2D34",
  "#059669",
  "#d97706",
  "#6366f1",
  "#0891b2",
  "#be185d",
];

function TabelView({ rezumat }: { rezumat: RezumatBlock[] }) {
  return (
    <div>
      <div
        className="rounded-xl px-5 py-4 mb-6 text-sm"
        style={{
          background: "#0f172a",
          color: "#94a3b8",
        }}
      >
        <p className="font-semibold text-white mb-0.5">Tabel conceptual</p>
        <p>Punctele esențiale ale fiecărui curs, organizate pe teme.</p>
      </div>

      <div className="space-y-4">
        {rezumat.map((bloc, i) => (
          <div
            key={i}
            className="rounded-2xl border overflow-hidden shadow-sm"
            style={{ borderColor: `${cursColors[i % cursColors.length]}30` }}
          >
            <div
              className="px-5 py-3 flex items-center gap-2"
              style={{
                background: `${cursColors[i % cursColors.length]}10`,
                borderBottom: `2px solid ${cursColors[i % cursColors.length]}25`,
              }}
            >
              <span
                className="w-6 h-6 rounded-full text-white text-xs font-bold flex items-center justify-center shrink-0"
                style={{ background: cursColors[i % cursColors.length] }}
              >
                {i + 1}
              </span>
              <h3
                className="font-bold text-sm"
                style={{ color: cursColors[i % cursColors.length] }}
              >
                {bloc.curs}
              </h3>
            </div>

            <ul className="bg-white divide-y divide-slate-50">
              {bloc.puncte.map((punct, j) => (
                <li key={j} className="flex gap-3 px-5 py-3 text-sm text-slate-700">
                  <span
                    className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full"
                    style={{ background: cursColors[i % cursColors.length] }}
                  />
                  <span className="leading-relaxed">{punct}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="text-center text-slate-400 text-xs mt-6 italic">
        Pentru detalii complete, accesează secțiunea Cursul complet.
      </p>
    </div>
  );
}

// ─── Cursul Complet ──────────────────────────────────────────────────────────
import type { ContentBlock } from "@/data/exams";

function CompletView({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="space-y-10">
      {blocks.map((block, i) => (
        <CompletChapter key={i} block={block} index={i} />
      ))}
    </div>
  );
}

function CompletChapter({ block, index }: { block: ContentBlock; index: number }) {
  if (block.type !== "chapter") return <CompletBlock block={block} />;

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <span
          className="flex items-center justify-center w-8 h-8 rounded-full text-white text-sm font-bold shrink-0"
          style={{ background: "#7C2D34" }}
        >
          {index + 1}
        </span>
        <h2 className="font-bold text-lg text-slate-900">{block.title}</h2>
      </div>

      {block.children && (
        <div className="space-y-8 ml-3 pl-6 border-l-2 border-slate-100">
          {block.children.map((child, j) => (
            <CompletSubchapter key={j} block={child} />
          ))}
        </div>
      )}
    </div>
  );
}

function CompletSubchapter({ block }: { block: ContentBlock }) {
  if (block.type !== "subchapter") return <CompletBlock block={block} />;

  return (
    <div>
      <h3 className="font-semibold text-slate-800 text-base mb-3 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
        {block.title}
      </h3>
      {block.children && (
        <div className="space-y-3">
          {block.children.map((child, k) => (
            <CompletBlock key={k} block={child} />
          ))}
        </div>
      )}
    </div>
  );
}

function CompletBlock({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "paragraph":
      return <p className="text-slate-700 text-sm leading-loose">{block.text}</p>;

    case "key-idea":
      return (
        <div
          className="py-2.5 px-4 rounded-r-xl"
          style={{ background: "#f0fdf4", borderLeft: "4px solid #059669" }}
        >
          <p className="text-slate-700 text-sm leading-relaxed">{block.text}</p>
        </div>
      );

    case "definition":
      return (
        <div
          className="py-2.5 px-4 rounded-r-xl"
          style={{ background: "#fffbeb", borderLeft: "4px solid #d97706" }}
        >
          <p className="text-sm text-slate-800 leading-relaxed">
            <strong className="font-bold" style={{ color: "#92400e" }}>
              {block.term}:
            </strong>{" "}
            {block.text}
          </p>
        </div>
      );

    case "quote":
      return (
        <blockquote
          className="pl-4 py-2.5 rounded-r-xl"
          style={{ background: "#f8fafc", borderLeft: "4px solid #94a3b8" }}
        >
          <p className="text-slate-600 italic text-sm leading-relaxed">{block.text}</p>
          {block.source && (
            <footer className="mt-1 text-xs text-slate-400">— {block.source}</footer>
          )}
        </blockquote>
      );

    case "exam-questions":
      return (
        <div
          className="rounded-xl p-4"
          style={{
            background: "rgba(124,45,52,0.04)",
            border: "1px solid rgba(124,45,52,0.15)",
          }}
        >
          <h4
            className="font-semibold text-xs uppercase tracking-widest mb-3"
            style={{ color: "#7C2D34" }}
          >
            Intrebari posibile
          </h4>
          <ol className="space-y-2">
            {block.questions.map((q, i) => (
              <li key={i} className="flex gap-3 text-sm text-slate-700">
                <span className="font-bold shrink-0 tabular-nums" style={{ color: "#7C2D34" }}>
                  {i + 1}.
                </span>
                <span>{q}</span>
              </li>
            ))}
          </ol>
        </div>
      );

    case "observation":
      return (
        <div
          className="py-2.5 px-4 rounded-r-xl"
          style={{ background: "#eff6ff", borderLeft: "4px solid #60a5fa" }}
        >
          <p className="text-slate-700 text-sm leading-relaxed italic">{block.text}</p>
        </div>
      );

    case "subchapter":
      return <CompletSubchapter block={block} />;

    case "chapter":
      return <CompletChapter block={block} index={0} />;

    default:
      return null;
  }
}
