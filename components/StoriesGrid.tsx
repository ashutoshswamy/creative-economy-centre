"use client";

import Link from "next/link";
import { useState } from "react";
import { stories } from "@/lib/content";
import { Ph } from "./ui";

const practices = [...new Set(stories.map((s) => s.practice))].sort();
const regions = [...new Set(stories.map((s) => s.region))].sort();

export default function StoriesGrid() {
  const [practice, setPractice] = useState("");
  const [region, setRegion] = useState("");
  const ok = (s: (typeof stories)[number], skip?: "practice" | "region") =>
    (skip === "practice" || !practice || s.practice === practice) && (skip === "region" || !region || s.region === region);
  const shown = stories.filter((s) => ok(s));
  const n = (k: "practice" | "region", v: string) => stories.filter((s) => ok(s, k) && s[k] === v).length;

  const chip = (k: "practice" | "region", v: string, cur: string, set: (v: string) => void) => (
    <button key={v} type="button" className={`chip${cur === v ? " is-on" : ""}`} aria-pressed={cur === v} onClick={() => set(cur === v ? "" : v)}>
      {v} <span className="n">{n(k, v)}</span>
    </button>
  );

  return (
    <>
      <div className="flow">
        <div role="group" aria-label="Practice"><p className="ds-label">Practice</p><div className="chips-scroll mt-s">{practices.map((p) => chip("practice", p, practice, setPractice))}</div></div>
        <div role="group" aria-label="Region"><p className="ds-label">Region</p><div className="chips-scroll mt-s">{regions.map((r) => chip("region", r, region, setRegion))}</div></div>
      </div>
      <div className="resbar mt-m"><p role="status" className="t-small"><b>{shown.length}</b> {shown.length === 1 ? "story" : "stories"}</p></div>
      {shown.length ? (
        <div className="masonry">
          {shown.map((s, i) => (
            <article key={s.slug} className="st-card">
              <div className="zoom"><Ph tone={s.tone} pat={s.pat} className={`arch-s ${s.cls}`} style={{ ["--ar" as string]: i % 3 === 1 ? "1/1" : i % 3 === 2 ? "4/3" : "4/5" }} kind={s.practice} shot={s.shot} alt={`${s.name}, ${s.role}`} /></div>
              <div className="st-body">
                <h3 className="st-name"><Link className="stretch" href={`/stories/${s.slug}`}>{s.name}</Link></h3>
                <p className="st-role">{s.role}, {s.place}</p>
                <p className="st-quote">“{s.quote}”</p>
                <p className="credit">[Photographer] · CCE Field Archive</p>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="empty"><h2 className="t-h3">No stories match yet</h2><p className="soft mt-s">We are still adding profiles. Try another practice or region.</p>
          <button className="btn btn-primary mt-m" type="button" onClick={() => { setPractice(""); setRegion(""); }}>Reset filters</button></div>
      )}
    </>
  );
}
