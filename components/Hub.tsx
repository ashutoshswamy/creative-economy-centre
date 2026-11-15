"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { type Resource, resources } from "@/lib/content";
import { Pat } from "./ui";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { resourceIcon } from "./icons";

const types = ["Report", "Dataset", "Case study", "Policy document", "Recommended book", "Global reference"] as const;
const themes = [...new Set(resources.map((r) => r.theme))].sort();
const years = [...new Set(resources.map((r) => r.year))].sort((a, b) => b - a);

// State lives in the URL so any filtered view is shareable.
export default function Hub() {
  const sp = useSearchParams();
  const router = useRouter();
  const path = usePathname();
  const q = sp.get("q") ?? "";
  const type = sp.get("type") ?? "";
  const theme = sp.get("theme") ?? "";
  const year = sp.get("year") ?? "";

  const set = (k: string, v: string) => {
    const p = new URLSearchParams(sp.toString());
    if (v) p.set(k, v); else p.delete(k);
    router.replace(`${path}${p.size ? `?${p}` : ""}`, { scroll: false });
  };

  const match = (r: Resource, skip?: "type" | "theme" | "year") =>
    (skip === "type" || !type || r.type === type) &&
    (skip === "theme" || !theme || r.theme === theme) &&
    (skip === "year" || !year || String(r.year) === year) &&
    (!q || `${r.title} ${r.summary} ${r.theme} ${r.source}`.toLowerCase().includes(q.toLowerCase()));

  const results = useMemo(() => resources.filter((r) => match(r)), [q, type, theme, year]); // eslint-disable-line react-hooks/exhaustive-deps
  const count = (k: "type" | "theme" | "year", v: string) => resources.filter((r) => match(r, k) && String(r[k]) === v).length;
  const active = [type && ["type", type], theme && ["theme", theme], year && ["year", year]].filter(Boolean) as [string, string][];

  const opt = (k: "type" | "theme" | "year", v: string) => (
    <li key={v}>
      <button type="button" className={`opt${sp.get(k) === v ? " is-on" : ""}`} aria-pressed={sp.get(k) === v} onClick={() => set(k, sp.get(k) === v ? "" : v)}>
        <span>{v}</span><span className="n">{count(k, v)}</span>
      </button>
    </li>
  );

  return (
    <div className="g12">
      <aside className="col w3 rail only-d" aria-label="Filters">
        <div><h2>Type</h2><ul>{types.map((t) => opt("type", t))}</ul></div>
        <div><h2>Theme</h2><ul>{themes.map((t) => opt("theme", t))}</ul></div>
        <div><h2>Year</h2><ul>{years.map((y) => opt("year", String(y)))}</ul></div>
      </aside>

      <div className="col w9">
        <form className="searchbar" role="search" onSubmit={(e) => e.preventDefault()}>
          <label className="sr-only" htmlFor="hub-q">Search the Knowledge Hub</label>
          <input id="hub-q" type="search" value={q} onChange={(e) => set("q", e.target.value)} placeholder="Search reports, datasets, case studies" />
        </form>

        <div className="only-m mt-s">
          <div className="chips-scroll" role="group" aria-label="Type">
            {types.map((t) => (
              <button key={t} type="button" className={`chip${type === t ? " is-on" : ""}`} aria-pressed={type === t} onClick={() => set("type", type === t ? "" : t)}>{t}</button>
            ))}
          </div>
          <div className="grid-2 mt-s" style={{ ["--gut" as string]: "12px" }}>
            <div className="field"><label htmlFor="m-theme">Theme</label>
              <select id="m-theme" className="select" value={theme} onChange={(e) => set("theme", e.target.value)}><option value="">All themes</option>{themes.map((t) => <option key={t}>{t}</option>)}</select></div>
            <div className="field"><label htmlFor="m-year">Year</label>
              <select id="m-year" className="select" value={year} onChange={(e) => set("year", e.target.value)}><option value="">All years</option>{years.map((y) => <option key={y}>{y}</option>)}</select></div>
          </div>
        </div>

        <div className="resbar">
          <p role="status" className="t-small"><b>{results.length}</b> {results.length === 1 ? "resource" : "resources"}</p>
          <div className="taglist">
            {active.map(([k, v]) => (
              <button key={k} type="button" className="chip" onClick={() => set(k, "")} aria-label={`Remove filter ${v}`}>{v} <XMarkIcon className="tag-i" aria-hidden="true" /></button>
            ))}
          </div>
        </div>

        {results.length ? (
          <ul>
            {results.map((r) => (
              <li key={r.id} className={`lib tone-${r.tone}`}>
                <div className="glyph" aria-hidden="true"><Pat p="twill" />{(() => { const I = resourceIcon[r.type]; return <I width={30} height={30} style={{ position: "relative" }} />; })()}</div>
                <div>
                  <div className="taglist"><span className="tag tag-tone">{r.type}</span><span className="tag">{r.theme}</span></div>
                  <h3><a className="stretch" href="#" onClick={(e) => e.preventDefault()}>{r.title}</a></h3>
                  <p>{r.summary}</p>
                  <div className="meta mt-s"><span>{r.year}</span><span>{r.source}</span><span>{r.action}</span></div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="empty">
            <h2 className="t-h3">Nothing matches those filters</h2>
            <p className="soft mt-s">Try fewer filters or a broader search term.</p>
            <button type="button" className="btn btn-primary mt-m" onClick={() => router.replace(path, { scroll: false })}>Reset filters</button>
          </div>
        )}
      </div>
    </div>
  );
}
