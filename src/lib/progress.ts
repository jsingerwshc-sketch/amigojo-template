export type Progress = {
  xpTotal: number;
  completed: Record<string, boolean>; // lessonId -> true
};

const KEY = "amigojo_progress_v1";

export function loadProgress(): Progress {
  if (typeof window === "undefined") return { xpTotal: 0, completed: {} };
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return { xpTotal: 0, completed: {} };
    return JSON.parse(raw) as Progress;
  } catch {
    return { xpTotal: 0, completed: {} };
  }
}

export function saveProgress(p: Progress) {
  localStorage.setItem(KEY, JSON.stringify(p));
}

export function addXp(amount: number) {
  const p = loadProgress();
  p.xpTotal += amount;
  saveProgress(p);
}

export function markCompleted(lessonId: string) {
  const p = loadProgress();
  p.completed[lessonId] = true;
  saveProgress(p);
}
