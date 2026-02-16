import { Theme } from "../lib/course";

export default function ThemeFrame({
  theme,
  children,
}: {
  theme: Theme;
  children: React.ReactNode;
}) {
  return (
    <div className="relative max-w-lg mx-auto outline outline-4 outline-fuchsia-500 rounded-2xl">
      <div className="absolute inset-0 -z-10 overflow-hidden rounded-2xl">
        <img
          src={`/art/themes/${theme}/bg_soft.svg`}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-100"
        />
        <img
          src={`/art/themes/${theme}/frame_overlay.svg`}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-100"
        />
      </div>

      <div className="bg-white/40 backdrop-blur rounded-2xl shadow p-6">
        {children}
      </div>
    </div>
  );
}
