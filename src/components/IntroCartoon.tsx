"use client";

import { useEffect, useState } from "react";

export default function IntroCartoon({ onStart }: { onStart: () => void }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem("amigojo_intro_seen") === "1";
    setShow(!seen);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-2xl shadow p-6 text-center">
        <div className="text-5xl mb-3 animate-bounce">AmigoJoe</div>

        <h2 className="text-2xl font-bold">¡Hola! Soy AmigoJoe</h2>

        <p className="text-gray-600 mt-2">
          Let’s learn Spanish with quick, fun lessons.
        </p>

        <div className="mt-5">
          <button
            className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold"
            onClick={() => {
              localStorage.setItem("amigojo_intro_seen", "1");
              onStart();
            }}
          >
            Start!
          </button>
        </div>

        <p className="text-xs text-gray-400 mt-3">
          (You’ll only see this once.)
        </p>
      </div>
    </div>
  );
}
