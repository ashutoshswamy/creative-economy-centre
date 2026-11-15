"use client";

import Link from "next/link";
import { useRef } from "react";
import { stories } from "@/lib/content";
import { Arrow, Ph } from "./ui";

export default function StoryCarousel() {
  const track = useRef<HTMLDivElement>(null);
  const go = (dir: number) => {
    const t = track.current;
    if (!t) return;
    const rm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    t.scrollBy({ left: dir * Math.round(t.clientWidth * 0.8), behavior: rm ? "auto" : "smooth" });
  };

  return (
    <div className="carousel">
      <div className="secthead">
        <div>
          <h2 id="st-h" className="t-h1">The people behind <em>the numbers</em></h2>
          <p className="t-lead mt-s">Long-form profiles of artisans, gurus, filmmakers, designers and creators, told in their words and photographed where they work.</p>
        </div>
        <div className="car-ctl">
          <button className="icon-btn" type="button" aria-label="Previous stories" onClick={() => go(-1)}><Arrow dir="left" /></button>
          <button className="icon-btn" type="button" aria-label="Next stories" onClick={() => go(1)}><Arrow /></button>
        </div>
      </div>
      <div className="track rv" ref={track} role="list" tabIndex={0} aria-label="Story profiles, scroll horizontally">
        {stories.slice(0, 6).map((s) => (
          <article className="st-card" role="listitem" key={s.slug}>
            <div className="zoom">
              <Ph tone={s.tone} pat={s.pat} className={`arch-s ${s.cls}`} kind={s.practice} shot={s.shot} alt={`${s.name}, ${s.role}`} />
            </div>
            <div className="st-body">
              <h3 className="st-name"><Link className="stretch" href={`/stories/${s.slug}`}>{s.name}</Link></h3>
              <p className="st-role">{s.role}, {s.place}</p>
              <p className="st-quote">“{s.quote}”</p>
              <p className="credit" style={{ opacity: 0.85 }}>[Photographer] · CCE Field Archive</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
