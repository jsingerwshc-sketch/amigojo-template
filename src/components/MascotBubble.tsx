"use client";

export default function MascotBubble({
  theme,
  state,
  message,
}: {
  theme: "aztec" | "mayan" | "andean" | "mexicocity";
  state: "idle" | "correct" | "wrong";
  message: string;
}) {
  const themeBadge =
    theme === "aztec" ? "🗿" :
    theme === "mayan" ? "🌿" :
    theme === "andean" ? "🏔️" : "🏙️";

  const anim =
    state === "correct" ? "animate-bounce" :
    state === "wrong" ? "amigojo-shake" : "";

  return (
    <div className="flex items-start gap-3">
      <div
        className={`w-14 h-14 rounded-2xl bg-white/80 shadow overflow-hidden flex items-center justify-center ${anim}`}
      >
        <img
          src="/art/mascot/amigojoe.png"
          alt="AmigoJoe"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1">
        <div className="inline-flex items-center gap-2 text-xs text-gray-500 mb-1">
          <span className="px-2 py-1 rounded-full bg-black/5">AmigoJoe</span>
          <span className="px-2 py-1 rounded-full bg-black/5">
            {themeBadge} {theme}
          </span>
        </div>

        <div className="bg-white/80 shadow rounded-2xl px-4 py-3">
          <p className="text-sm">{message}</p>
        </div>
      </div>
    </div>
  );
}
