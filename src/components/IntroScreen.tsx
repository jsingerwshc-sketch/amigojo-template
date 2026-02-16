"use client";

import { useEffect, useState } from "react";

export default function IntroScreen({ onStart }: { onStart: () => void }) {
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem("amigojo_intro_seen") === "1";
    if (!seen) setVisible(true);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 bg-white flex items-center justify-center p-6 transition-opacity duration-500 ${
        exiting ? "opacity-0" : "opacity-100"
      }`}
    >
      <div
        className={`max-w-md w-full bg-white rounded-3xl shadow-xl p-8 text-center transition-transform duration-500 ${
          exiting ? "scale-95" : "scale-100"
        }`}
      >
        <div className="mx-auto w-40 h-40 rounded-3xl bg-white shadow-sm flex items-center justify-center overflow-hidden amigojo-breathe mb-6">
          <img
            src="/art/mascot/amigojoe.png"
            alt="AmigoJoe"
            className="w-full h-full object-cover"
          />
        </div>

        <h2 className="text-2xl font-bold mb-2">¡Hola! I’m AmigoJoe 🐹</h2>
        <p className="text-gray-600 mb-6">Tap start to begin your lessons.</p>

        <button
          className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold"
          onClick={() => {
            setExiting(true);
            setTimeout(() => {
              localStorage.setItem("amigojo_intro_seen", "1");
              setVisible(false);
              onStart();
            }, 450);
          }}
        >
          Start Learning
        </button>

        <button
          className="mt-3 text-xs text-gray-400 underline underline-offset-4"
          onClick={() => {
            localStorage.removeItem("amigojo_intro_seen");
            setVisible(true);
            setExiting(false);
          }}
        >
          (Dev) Reset intro
        </button>
      </div>
    </div>
  );
}
