"use client";

import { useState } from "react";
import type { ContentBlock } from "@/data/exams";

type Props = {
  blocks: ContentBlock[];
};

export default function MaterieRenderer({ blocks }: Props) {
  return (
    <div className="space-y-2">
      {blocks.map((block, idx) => (
        <TopBlock key={idx} block={block} index={idx} />
      ))}
    </div>
  );
}

function TopBlock({ block, index }: { block: ContentBlock; index: number }) {
  const [open, setOpen] = useState(false);

  if (block.type !== "chapter") {
    return <ContentItem block={block} />;
  }

  const childCount = block.children?.length ?? 0;

  return (
    <div
      className="rounded-2xl border overflow-hidden shadow-sm transition-shadow hover:shadow-md"
      style={{ borderColor: open ? "#7C2D34" : "#e2e8f0" }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-5 py-4 bg-white hover:bg-slate-50 transition-colors text-left"
      >
        <div className="flex items-center gap-3">
          <span
            className="flex items-center justify-center w-7 h-7 rounded-full text-white text-xs font-bold shrink-0"
            style={{ background: "#7C2D34" }}
          >
            {index + 1}
          </span>
          <span className="font-semibold text-slate-800 text-sm leading-snug">
            {block.title}
          </span>
        </div>
        <div className="flex items-center gap-3 shrink-0 ml-4">
          {childCount > 0 && (
            <span className="text-xs text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full font-medium hidden sm:inline">
              {childCount} subiecte
            </span>
          )}
          <span
            className="text-slate-400 text-sm"
            style={{
              display: "inline-block",
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.2s ease",
            }}
          >
            ▾
          </span>
        </div>
      </button>

      {open && block.children && (
        <div className="border-t border-slate-100 px-5 py-5 bg-white space-y-4">
          {block.children.map((child, i) => (
            <ContentItem key={i} block={child} />
          ))}
        </div>
      )}
    </div>
  );
}

function ContentItem({ block }: { block: ContentBlock }) {
  const [open, setOpen] = useState(false);

  switch (block.type) {
    case "chapter":
      return (
        <div className="mt-2">
          <h2
            className="font-bold text-base border-b pb-1.5 mb-3"
            style={{ color: "#7C2D34", borderColor: "rgba(124,45,52,0.2)" }}
          >
            {block.title}
          </h2>
          {block.children && (
            <div className="space-y-3 ml-1">
              {block.children.map((child, i) => (
                <ContentItem key={i} block={child} />
              ))}
            </div>
          )}
        </div>
      );

    case "subchapter":
      return (
        <div className="mt-3">
          <button
            onClick={() => setOpen((v) => !v)}
            className="w-full flex items-center gap-2 text-left group"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
            <span className="font-semibold text-slate-700 text-sm group-hover:text-emerald-700 transition-colors flex-1">
              {block.title}
            </span>
            <span className="text-slate-300 text-xs shrink-0">
              {open ? "▲" : "▼"}
            </span>
          </button>
          {open && block.children && (
            <div className="mt-2 ml-4 pl-3 border-l-2 border-emerald-100 space-y-3">
              {block.children.map((child, i) => (
                <ContentItem key={i} block={child} />
              ))}
            </div>
          )}
        </div>
      );

    case "key-idea":
      return (
        <div
          className="flex gap-2 items-start py-2.5 px-4 rounded-r-xl"
          style={{
            background: "#f0fdf4",
            borderLeft: "4px solid #059669",
          }}
        >
          <p className="text-slate-700 text-sm leading-relaxed">{block.text}</p>
        </div>
      );

    case "definition":
      return (
        <div
          className="py-2.5 px-4 rounded-r-xl"
          style={{
            background: "#fffbeb",
            borderLeft: "4px solid #d97706",
          }}
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
          style={{
            background: "#f8fafc",
            borderLeft: "4px solid #94a3b8",
          }}
        >
          <p className="text-slate-600 italic text-sm leading-relaxed">
            {block.text}
          </p>
          {block.source && (
            <footer className="mt-1 text-xs text-slate-400">
              — {block.source}
            </footer>
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
            className="font-semibold text-xs uppercase tracking-widest mb-3 flex items-center gap-1.5"
            style={{ color: "#7C2D34" }}
          >
            Intrebari posibile de examen
          </h4>
          <ol className="space-y-2">
            {block.questions.map((q, i) => (
              <li key={i} className="flex gap-3 text-sm text-slate-700">
                <span
                  className="font-bold shrink-0 tabular-nums"
                  style={{ color: "#7C2D34" }}
                >
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
          className="flex gap-2 items-start py-2.5 px-4 rounded-r-xl"
          style={{
            background: "#eff6ff",
            borderLeft: "4px solid #60a5fa",
          }}
        >
          <p className="text-slate-700 text-sm leading-relaxed italic">
            {block.text}
          </p>
        </div>
      );

    case "paragraph":
      return (
        <p className="text-slate-700 text-sm leading-relaxed">{block.text}</p>
      );

    case "download":
      return (
        <a
          href={block.url}
          download
          className="flex items-center gap-3 px-5 py-4 rounded-xl font-semibold text-sm transition-all hover:opacity-90 active:scale-95"
          style={{ background: "#7C2D34", color: "#fff", textDecoration: "none" }}
        >
          <span style={{ fontSize: "1.2rem" }}>⬇</span>
          <span>{block.label}</span>
        </a>
      );

    default:
      return null;
  }
}
