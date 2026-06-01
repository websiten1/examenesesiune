"use client";

import { useEffect, useState } from "react";
import { DateTime } from "luxon";
import type { ExamStart } from "@/data/exams";

type Props = {
  examStart: ExamStart | null;
};

type TimeLeft = {
  zile: number;
  ore: number;
  minute: number;
  secunde: number;
  started: boolean;
};

function calcTimeLeft(examStart: ExamStart): TimeLeft {
  const now = DateTime.now().setZone(examStart.timezone);
  const target = DateTime.fromISO(`${examStart.date}T${examStart.time}:00`, {
    zone: examStart.timezone,
  });

  const totalSeconds = target.toSeconds() - now.toSeconds();
  if (totalSeconds <= 0) {
    return { zile: 0, ore: 0, minute: 0, secunde: 0, started: true };
  }

  const diff = target.diff(now, ["days", "hours", "minutes", "seconds"]).toObject();
  return {
    zile: Math.floor(diff.days ?? 0),
    ore: Math.floor(diff.hours ?? 0),
    minute: Math.floor(diff.minutes ?? 0),
    secunde: Math.floor(diff.seconds ?? 0),
    started: false,
  };
}

const units = (t: TimeLeft) => [
  { val: t.zile, label: t.zile === 1 ? "zi" : "zile" },
  { val: t.ore, label: t.ore === 1 ? "oră" : "ore" },
  { val: t.minute, label: "minute" },
  { val: t.secunde, label: "secunde" },
];

export default function CountdownTimer({ examStart }: Props) {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setMounted(true);
    if (!examStart) return;
    const update = () => setTimeLeft(calcTimeLeft(examStart));
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [examStart]);

  if (!examStart) {
    return (
      <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
        <p className="text-sm text-slate-500 italic">
          Această disciplină este marcată ca verificare pe parcurs și nu are o
          dată de examen indicată în grafic.
        </p>
      </div>
    );
  }

  if (!mounted || timeLeft === null) {
    return (
      <div
        className="mt-6 rounded-2xl p-6 animate-pulse"
        style={{ background: "#0f172a" }}
      >
        <div className="h-3 bg-slate-700 rounded w-36 mb-5" />
        <div className="flex gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-16 w-16 bg-slate-700 rounded-xl" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className="mt-6 rounded-2xl p-6"
      style={{ background: "#0f172a" }}
    >
      <p className="text-slate-400 text-xs uppercase tracking-widest mb-5 flex items-center gap-2">
        Timp rămas până la examen
      </p>

      {timeLeft.started ? (
        <p className="text-emerald-400 font-semibold text-base">
          Examenul a început. Mult succes!
        </p>
      ) : (
        <>
          <div className="flex items-end gap-1 flex-wrap">
            {units(timeLeft).map(({ val, label }, i) => (
              <div key={label} className="flex items-end gap-1">
                {i > 0 && (
                  <span className="text-slate-600 text-2xl font-light pb-5 px-0.5">
                    :
                  </span>
                )}
                <div className="flex flex-col items-center">
                  <span
                    className="text-5xl font-bold tabular-nums leading-none"
                    style={{ color: "#fff", fontVariantNumeric: "tabular-nums" }}
                  >
                    {String(val).padStart(2, "0")}
                  </span>
                  <span className="text-emerald-400 text-xs mt-2 uppercase tracking-widest">
                    {label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-slate-500 text-xs mt-5 leading-relaxed">
            {timeLeft.zile} {timeLeft.zile === 1 ? "zi" : "zile"},{" "}
            {String(timeLeft.ore).padStart(2, "0")} ore,{" "}
            {String(timeLeft.minute).padStart(2, "0")} min,{" "}
            {String(timeLeft.secunde).padStart(2, "0")} sec
          </p>
        </>
      )}
    </div>
  );
}
