"use client";

import { useEffect, useRef, useState } from "react";
import { CheckIcon, ChevronDownIcon, ComputerDesktopIcon, MoonIcon, SunIcon } from "@heroicons/react/24/outline";

const options = [
  { id: "auto", label: "System", Icon: ComputerDesktopIcon },
  { id: "light", label: "Light", Icon: SunIcon },
  { id: "dark", label: "Dark", Icon: MoonIcon },
] as const;
type Theme = (typeof options)[number]["id"];
const root = () => document.getElementById("cce-root")!;

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("auto");
  const [open, setOpen] = useState(false);
  const wrap = useRef<HTMLDivElement>(null);
  const btn = useRef<HTMLButtonElement>(null);

  // Pick up the theme the inline script applied before first paint.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme((root().dataset.theme as Theme) || "auto");
  }, []);

  // Close on outside press or Escape; Escape returns focus to the trigger.
  useEffect(() => {
    if (!open) return;
    const down = (e: PointerEvent) => { if (!wrap.current?.contains(e.target as Node)) setOpen(false); };
    const key = (e: KeyboardEvent) => { if (e.key === "Escape") { setOpen(false); btn.current?.focus(); } };
    document.addEventListener("pointerdown", down);
    document.addEventListener("keydown", key);
    return () => { document.removeEventListener("pointerdown", down); document.removeEventListener("keydown", key); };
  }, [open]);

  const pick = (t: Theme) => {
    setTheme(t);
    root().dataset.theme = t;
    try { localStorage.setItem("cce-theme", t); } catch {}
    setOpen(false);
    btn.current?.focus();
  };

  // Arrow keys move between items, as in a native menu.
  const onMenuKey = (e: React.KeyboardEvent) => {
    const items = Array.from(wrap.current!.querySelectorAll<HTMLElement>('[role="menuitemradio"]'));
    const i = items.indexOf(document.activeElement as HTMLElement);
    if (e.key === "ArrowDown") { e.preventDefault(); items[(i + 1) % items.length].focus(); }
    if (e.key === "ArrowUp") { e.preventDefault(); items[(i - 1 + items.length) % items.length].focus(); }
  };

  const cur = options.find((o) => o.id === theme)!;

  return (
    <div className="theme" ref={wrap}>
      <button
        ref={btn}
        className="theme-btn"
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={`Theme: ${cur.label}`}
        onClick={() => setOpen(!open)}
        onKeyDown={(e) => { if (e.key === "ArrowDown" && !open) { e.preventDefault(); setOpen(true); } }}
      >
        <cur.Icon width={20} height={20} aria-hidden="true" />
        <ChevronDownIcon className="theme-chev" width={14} height={14} aria-hidden="true" />
      </button>
      {open && (
        <div className="theme-menu" role="menu" aria-label="Theme" onKeyDown={onMenuKey}>
          {options.map(({ id, label, Icon }) => (
            <button
              key={id}
              type="button"
              role="menuitemradio"
              aria-checked={theme === id}
              className="theme-opt"
              autoFocus={theme === id}
              onClick={() => pick(id)}
            >
              <Icon width={18} height={18} aria-hidden="true" />
              <span>{label}</span>
              {theme === id && <CheckIcon className="theme-check" width={16} height={16} aria-hidden="true" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
