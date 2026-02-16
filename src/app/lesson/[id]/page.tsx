"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import LessonPlayer from "../../../components/LessonPlayer";
import IntroCartoon from "../../../components/IntroCartoon";

export default function LessonPage() {
  const params = useParams<{ id: string }>();
  const lessonId = params?.id ?? "l1";

  const [started, setStarted] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem("amigojo_intro_seen") === "1";
    if (seen) setStarted(true);
  }, []);

  return (
    <main className="p-6">
      {!started && <IntroCartoon onStart={() => setStarted(true)} />}
      {started ? (
        <LessonPlayer lessonId={lessonId} />
      ) : (
        <div className="max-w-lg mx-auto text-center text-gray-600">Loading…</div>
      )}
    </main>
  );
}
