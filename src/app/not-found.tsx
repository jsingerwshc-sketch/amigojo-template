import Link from "next/link";

export default function NotFound() {
  return (
    <main className="p-6">
      <div className="max-w-lg mx-auto bg-white rounded-2xl shadow p-6">
        <h1 className="text-2xl font-bold mb-2">Page not found</h1>
        <p className="text-gray-600 mb-4">
          That page doesn’t exist.
        </p>
        <Link
          href="/"
          className="inline-block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl"
        >
          Back home
        </Link>
      </div>
    </main>
  );
}
