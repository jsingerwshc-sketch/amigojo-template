import Link from "next/link";

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-2 text-center">AmigoJo 🇪🇸</h1>
      <p className="text-center text-gray-600 mb-6">Playful Spanish, one lesson at a time.</p>

      <div className="max-w-md mx-auto flex flex-col gap-3">
        <Link
          href="/lesson/1"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-xl text-center text-lg shadow"
        >
          Start Lesson: Hello & Goodbye
        </Link>
      </div>
    </main>
  );
}
