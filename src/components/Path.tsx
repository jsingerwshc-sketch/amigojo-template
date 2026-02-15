"use client";
import Link from "next/link";

export default function Path() {
  const lessons = [{ id: "1", title: "Hello & Goodbye" }];

  return (
    <div className="flex flex-col gap-4">
      {lessons.map((lesson) => (
        <Link
          key={lesson.id}
          href={`/lesson/${lesson.id}`}
          className="bg-green-500 text-white p-4 rounded-xl text-center text-lg shadow"
        >
          {lesson.title}
        </Link>
      ))}
    </div>
  );
}
