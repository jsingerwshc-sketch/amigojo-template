"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { course } from "../lib/course";
import { loadProgress, Progress } from "../lib/progress";
import IntroScreen from "../components/IntroScreen";

export default function Home() {
  const [progress, setProgress] = useState<Progress>({ xpTotal: 0, completed: {} });

  useEffect(() => {
    setProgress(loadProgress());
  }, []);

  return (
    <main className="p-6">
      <IntroScreen onStart={() => setProgress(loadProgress())} />

      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-1 text-center">AmigoJo 🇪🇸</h1>
        <p className="text-center text-gray-600 mb-4">Playful Spanish, one lesson at a time.</p>

        <div className="bg-white rounded-2xl shadow p-4 mb-6 flex items-center justify-between">
          <div>
            <div className="text-sm text-gray-500">Total XP</div>
            <div className="text-2xl font-bold">{progress.xpTotal}</div>
          </div>

          <div className="flex items-center gap-2">
            <button
              className="text-sm border rounded-xl px-3 py-2 hover:bg-gray-50"
              onClick={() => setProgress(loadProgress())}
            >
              Refresh
            </button>

            <button
              className="text-sm border rounded-xl px-3 py-2 hover:bg-gray-50"
              onClick={() => {
                localStorage.removeItem("amigojo_intro_seen");
                location.reload();
              }}
            >
              Start Screen
            </button>
          </div>
        </div>

        <div className="space-y-6">
          {course.map((unit) => (
            <section key={unit.id} className="bg-white rounded-2xl shadow p-4">
              <h2 className="text-xl font-bold mb-3">{unit.title}</h2>

              <div className="grid gap-2">
                {unit.lessons.map((lesson) => {
                  const done = !!progress.completed[lesson.id];
                  return (
                    <Link
                      key={lesson.id}
                      href={`/lesson/${lesson.id}`}
                      className="border rounded-xl p-3 hover:bg-gray-50 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <span className={done ? "line-through text-gray-400" : ""}>{lesson.title}</span>
                        {done ? <span className="text-green-600 font-semibold">✅</span> : null}
                      </div>
                      <span className="text-sm text-gray-500">Start →</span>
                    </Link>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
