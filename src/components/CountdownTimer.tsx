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

  const diff = target.diff(now, ["days", "hours", "minutes", "seconds"]).toObject();

  const totalSeconds = target.toSeconds() - now.toSeconds();
  if (totalSeconds <= 0) {
    return { zile: 0, ore: 0, minute: 0, secunde: 0, started: true };
  }

  return {
    zile: Math.floor(diff.days ?? 0),
    ore: Math.floor(diff.hours ?? 0),
    minute: Math.floor(diff.minutes ?? 0),
    secunde: Math.floor(diff.seconds ?? 0),
    started: false,
  };
}

export default function CountdownTimer({ examStart }: Props) {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setMounted(true);
    if (!examStart) return;

    const update = () => setTimeLeft(calcTimeLeft(examStart));
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [examStart]);

  if (!examStart) {
    return (
      <div className="border border-[#A43234] rounded-sm p-5 bg-gray-50 mt-6">
        <p className="text-sm text-gray-600 italic">
          Această disciplină este marcată ca verificare pe parcurs și nu are o dată
          de examen indicată în grafic.
        </p>
      </div>
    );
  }

  if (!mounted || timeLeft === null) {
    return (
      <div className="border border-[#A43234] rounded-sm p-5 bg-white mt-6 animate-pulse">
        <div className="h-5 bg-gray-200 rounded w-48 mb-3" />
        <div className="h-8 bg-gray-200 rounded w-64" />
      </div>
    );
  }

  return (
    <div className="border border-[#A43234] rounded-sm p-5 bg-white mt-6">
      <h3 className="text-[#A43234] font-semibold text-base uppercase tracking-wide mb-4">
        Timp rămas până la examen
      </h3>

      {timeLeft.started ? (
        <p className="text-gray-700 text-sm font-medium">
          Examenul a început sau s-a încheiat.
        </p>
      ) : (
        <>
          <div className="flex flex-wrap gap-4 mb-4">
            {[
              { val: timeLeft.zile, label: timeLeft.zile === 1 ? "zi" : "zile" },
              { val: timeLeft.ore, label: timeLeft.ore === 1 ? "oră" : "ore" },
              { val: timeLeft.minute, label: "minute" },
              { val: timeLeft.secunde, label: "secunde" },
            ].map(({ val, label }) => (
              <div
                key={label}
                className="flex flex-col items-center min-w-[60px] border border-gray-200 rounded-sm px-3 py-2 bg-gray-50"
              >
                <span className="text-3xl font-bold text-gray-900 leading-none tabular-nums">
                  {String(val).padStart(2, "0")}
                </span>
                <span className="text-xs text-gray-500 mt-1 uppercase tracking-wide">
                  {label}
                </span>
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-sm">
            Mai sunt{" "}
            <span className="font-semibold text-gray-800">
              {timeLeft.zile} {timeLeft.zile === 1 ? "zi" : "zile"}
            </span>
            ,{" "}
            <span className="font-semibold text-gray-800">
              {String(timeLeft.ore).padStart(2, "0")} ore
            </span>
            ,{" "}
            <span className="font-semibold text-gray-800">
              {String(timeLeft.minute).padStart(2, "0")} minute
            </span>{" "}
            și{" "}
            <span className="font-semibold text-gray-800">
              {String(timeLeft.secunde).padStart(2, "0")} secunde
            </span>{" "}
            până la examen.
          </p>
        </>
      )}
    </div>
  );
}
