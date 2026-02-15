"use client";

import { useState } from "react";
import Link from "next/link";

type Item =
  | { type: "multiple_choice"; prompt: string; answer: string; choices: string[]; tip?: string }
  | { type: "fill_blank"; prompt: string; answer: string; tip?: string };

const lessonData: Item[] = [
  { type: "multiple_choice", prompt: 'Translate: "Hello"', answer: "Hola", choices: ["Hola", "Adiós", "Gracias"], tip: "“Hola” is “Hello/Hi”." },
  { type: "multiple_choice", prompt: 'Translate: "Goodbye"', answer: "Adiós", choices: ["Por favor", "Adiós", "Buenos días"], tip: "“Adiós” is “Goodbye”." },
  { type: "fill_blank", prompt: 'Type: "Good morning"', answer: "Buenos días", tip: "Two words: buenos + días." }
];

export default function LessonPlayer() {
  const [index, setIndex] = useState(0);
  const [input, setInput] = useState("");
  const [checked, setChecked] = useState<null | { correct: boolean; message: string }>(null);
  const [xp, setXp] = useState(0);

  const item = lessonData[index];

  function normalize(s: string) {
    return s.trim().toLowerCase();
  }

  function check(answer: string) {
    const correct = normalize(answer) === normalize(item.answer);
    setChecked({
      correct,
      message: correct ? "Correct! 🎉" : `Not quite. Correct answer: ${item.answer}`,
    });
    setXp((prev) => prev + (correct ? 10 : 0));
  }

  function next() {
    setChecked(null);
    setInput("");
    setIndex((i) => i + 1);
  }

  if (!item) {
    return (
      <div className="max-w-lg mx-auto bg-white p-6 rounded-2xl shadow">
        <h2 className="text-2xl font-bold mb-2">Lesson complete! ✅</h2>
        <p className="text-gray-700 mb-4">XP earned: <span className="font-semibold">{xp}</span></p>
        <Link href="/" className="inline-block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl">
          Back to Path
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-2xl shadow flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Lesson 1</h2>
        <div className="text-sm text-gray-600">XP: <span className="font-semibold">{xp}</span></div>
      </div>

      <p className="text-lg">{item.prompt}</p>

      {item.type === "multiple_choice" ? (
        <div className="grid gap-2">
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
        <div className="flex flex-col gap-2">
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
        <div className={`p-3 rounded-xl ${checked.correct ? "bg-green-50" : "bg-red-50"}`}>
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
    </div>
  );
}
