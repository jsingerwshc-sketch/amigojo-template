"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { findLesson, Item, Theme } from "../lib/course";
import ThemeFrame from "./ThemeFrame";
import MascotBubble from "./MascotBubble";
import { addXp, markCompleted } from "../lib/progress";

export default function LessonPlayer({ lessonId }: { lessonId: string }) {
  const lesson = useMemo(() => findLesson(lessonId), [lessonId]);

  const [index, setIndex] = useState(0);
  const [input, setInput] = useState("");
  const [checked, setChecked] = useState<null | { correct: boolean; message: string }>(null);
  const [xp, setXp] = useState(0);

  const items: Item[] = lesson?.items ?? [];
  const item = items[index];

  const normalize = (s: string) => s.trim().toLowerCase();

  function check(answer: string) {
    if (!item) return;
    const correct = normalize(answer) === normalize(item.answer);

    if (correct) {
      addXp(10);
      setXp((prev) => prev + 10);
      setChecked({ correct: true, message: "Correct! +10 XP" });
    } else {
      setChecked({ correct: false, message: `Not quite. Correct answer: ${item.answer}` });
    }
  }

  function next() {
    setChecked(null);
    setInput("");
    setIndex((i) => i + 1);
  }

  if (!lesson) {
    return (
      <div className="max-w-lg mx-auto bg-white p-6 rounded-2xl shadow">
        <h2 className="text-2xl font-bold mb-2">Lesson not found</h2>
        <Link href="/" className="inline-block mt-3 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl">
          Back to Path
        </Link>
      </div>
    );
  }

  if (!item) {
    markCompleted(lessonId);
    return (
      <ThemeFrame theme={lesson.theme}>
        <h2 className="text-2xl font-bold mb-2">Lesson complete! ✅</h2>
        <p className="text-gray-700 mb-4">
          XP earned this lesson: <span className="font-semibold">{xp}</span>
        </p>
        <Link href="/" className="inline-block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl">
          Back to Path
        </Link>
      </ThemeFrame>
    );
  }

  const mascotState = checked ? (checked.correct ? "correct" : "wrong") : "idle";
  const mascotMessage =
    mascotState === "idle"
      ? "Pick an answer (or type it) — you got this!"
      : checked?.message || "";

  return (
    <ThemeFrame theme={lesson.theme}>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">{lesson.title}</h2>
        <div className="text-sm text-gray-600">
          XP: <span className="font-semibold">{xp}</span>
        </div>
      </div>

      <div className="mt-4">
        <MascotBubble theme={lesson.theme as Theme} state={mascotState} message={mascotMessage} />
      </div>

      <p className="text-lg mt-4">{item.prompt}</p>

      {item.type === "multiple_choice" ? (
        <div className="grid gap-2 mt-4">
          {item.choices.map((c) => (
            <button
              key={c}
              disabled={!!checked}
              onClick={() => check(c)}
              className="border rounded-xl p-3 text-left hover:bg-gray-50 disabled:opacity-60"
            >
              {c}
            </button>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-2 mt-4">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border rounded-xl p-3"
            placeholder="Type your answer…"
            disabled={!!checked}
          />
          <button
            onClick={() => check(input)}
            disabled={!!checked || !input.trim()}
            className="bg-blue-500 hover:bg-blue-600 disabled:opacity-60 text-white p-3 rounded-xl"
          >
            Check
          </button>
        </div>
      )}

      {checked && (
        <div className={`p-3 rounded-xl mt-4 ${checked.correct ? "bg-green-50" : "bg-red-50"}`}>
          <p className="font-semibold">{checked.message}</p>
          {"tip" in item && item.tip ? <p className="text-sm text-gray-700 mt-1">{item.tip}</p> : null}
          <button
            onClick={next}
            className="mt-3 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl"
          >
            Continue
          </button>
        </div>
      )}
    </ThemeFrame>
  );
}
