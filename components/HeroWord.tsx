"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

// Alternates a living tradition with a contemporary industry, so neither is ever the default.
const words = ["making", "weaving", "coding", "singing", "filming", "carving", "drawing"];

// The headline's one emphasised word. Static "making" without JS or under reduced motion; screen readers get the static sentence from the h1's label.
export default function HeroWord() {
  const slot = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = slot.current;
    if (!el) return;
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ws = gsap.utils.toArray<HTMLElement>(".hw", el);
      const widths = ws.map((w) => w.offsetWidth);
      gsap.set(ws, { autoAlpha: 0, yPercent: 100 });
      gsap.set(ws[0], { autoAlpha: 1, yPercent: 0 });
      gsap.set(el, { width: widths[0] });
      const tl = gsap.timeline({ repeat: -1, delay: 2.4 });
      ws.forEach((cur, i) => {
        const nxt = (i + 1) % ws.length;
        tl.to(cur, { yPercent: -100, autoAlpha: 0, duration: 0.6, ease: "power3.in" })
          .fromTo(ws[nxt], { yPercent: 100, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1, duration: 0.7, ease: "power3.out" }, "<0.15")
          .to(el, { width: widths[nxt], duration: 0.7, ease: "power3.inOut" }, "<")
          .to({}, { duration: 1.7 });
      });
      return () => { gsap.set(el, { clearProps: "width" }); };
    });
    return () => mm.revert();
  }, []);

  return (
    <em className="hw-slot" ref={slot} aria-hidden="true">
      <span className="hw-size">{words[0]}</span>
      {words.map((w, i) => <span key={w} className={`hw${i === 0 ? " hw-on" : ""}`}>{w}</span>)}
    </em>
  );
}
