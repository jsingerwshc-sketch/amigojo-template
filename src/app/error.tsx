"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="p-6">
      <div className="max-w-lg mx-auto bg-white rounded-2xl shadow p-6">
        <h1 className="text-2xl font-bold mb-2">Something went wrong</h1>
        <p className="text-gray-600 mb-4">
          Try again. If it keeps happening, refresh the page.
        </p>
        <pre className="text-xs bg-gray-50 p-3 rounded-xl overflow-auto mb-4">
{error?.message}
        </pre>
        <button
          onClick={() => reset()}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
