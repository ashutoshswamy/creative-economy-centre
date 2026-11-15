"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);


// One orchestrator for the whole site. Every effect below is skipped under
// prefers-reduced-motion (gsap.matchMedia), and the CSS that pre-hides elements
// is gated on the same media query, so reduced-motion users just see the page.
export default function Motion() {
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Rendered inside each page (not a layout), so this effect runs only after that page has hydrated.
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
        const ease = "power3.out";

        // Reading progress: hierarchy cue for long editorial pages.
        gsap.fromTo(bar.current, { scaleX: 0 }, {
          scaleX: 1, ease: "none",
          scrollTrigger: { start: 0, end: "max", scrub: 0.3 },
        });

        // Nav tucks away while reading down, returns on any upward scroll.
        let hidden = false;
        ScrollTrigger.create({
          start: 160,
          end: "max",
          onUpdate: (self) => {
            const open = document.querySelector(".nav .menu, .nav .searchpanel");
            const hide = self.direction === 1 && !open;
            if (hide === hidden) return;
            hidden = hide;
            gsap.to(".nav", { yPercent: hide ? -100 : 0, duration: 0.45, ease: "power3.out", overwrite: true });
          },
        });

        // Home hero: headline words rise, then supporting copy, then the artwork assembles.
        if (document.querySelector(".hero")) {
          const h1 = document.querySelector<HTMLElement>(".hero h1")!;
          gsap.set(h1, { autoAlpha: 1 });
          const tl = gsap.timeline({ defaults: { ease, duration: 1 } });
          tl.from(h1, { yPercent: 14, autoAlpha: 0, duration: 1 }, 0.1);
          tl.from(".hero .t-lead", { autoAlpha: 0, y: 24 }, 0.55)
            .from(".hero .btn-row", { autoAlpha: 0, y: 24 }, 0.7);
        }

        // Inner-page header: same sequence, shorter.
        if (document.querySelector(".phead")) {
          gsap.set(".phead h1", { autoAlpha: 1 });
          const tl = gsap.timeline({ defaults: { ease, duration: 0.9 } });
          tl.from(".phead .crumbs", { autoAlpha: 0, y: 14, stagger: 0.08, duration: 0.6 });
          tl.from(SplitText.create(".phead h1", { type: "words" }).words, { yPercent: 50, autoAlpha: 0, stagger: 0.06 }, 0.1);
          tl.from(".phead .t-lead", { autoAlpha: 0, y: 20 }, 0.45);
        }

        // Scroll reveals: whatever enters together staggers in together.
        gsap.set(".rv, .rv-f", { autoAlpha: 0, y: 32 });
        ScrollTrigger.batch(".rv, .rv-f", {
          start: "top 90%",
          once: true,
          onEnter: (els) =>
            gsap.to(els, { autoAlpha: 1, y: 0, stagger: 0.09, duration: 0.95, ease, overwrite: true }),
        });

        // Section headings: words rise as the heading enters, so the eye lands on the claim first.
        gsap.utils.toArray<HTMLElement>(".secthead :is(h1,h2), .foot-sign").forEach((h) => {
          gsap.set(h, { autoAlpha: 1 });
          gsap.from(SplitText.create(h, { type: "words" }).words, {
            yPercent: 55, autoAlpha: 0, stagger: 0.07, duration: 0.9, ease,
            scrollTrigger: { trigger: h, start: "top 88%", once: true },
          });
        });

        // Coloured bands ease the page from one section to the next.
        gsap.utils.toArray<HTMLElement>(".band .pat").forEach((p) => {
          gsap.to(p, { yPercent: -12, ease: "none", scrollTrigger: { trigger: p.parentElement, start: "top bottom", end: "bottom top", scrub: true } });
        });

        // Observatory bars and heat grid fill in once visible.
        gsap.utils.toArray<HTMLElement>(".bars").forEach((el) => {
          gsap.from(el.querySelectorAll(".fl"), { scaleX: 0, transformOrigin: "left", stagger: 0.1, duration: 1.2, ease, scrollTrigger: { trigger: el, start: "top 85%", once: true } });
        });
        gsap.utils.toArray<HTMLElement>(".heat").forEach((el) => {
          gsap.from(el.children, { autoAlpha: 0, scale: 0.4, stagger: { amount: 0.9, from: "random" }, duration: 0.6, ease, scrollTrigger: { trigger: el, start: "top 85%", once: true } });
        });

        // Magnetic-lite hover on pill buttons: a small, springy pull toward the pointer.
        const off: (() => void)[] = [];
        if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
          document.querySelectorAll<HTMLElement>(".btn-lg").forEach((b) => {
            const x = gsap.quickTo(b, "x", { duration: 0.5, ease: "elastic.out(1, 0.6)" });
            const y = gsap.quickTo(b, "y", { duration: 0.5, ease: "elastic.out(1, 0.6)" });
            const move = (e: PointerEvent) => {
              const r = b.getBoundingClientRect();
              x((e.clientX - (r.left + r.width / 2)) * 0.18);
              y((e.clientY - (r.top + r.height / 2)) * 0.28);
            };
            const leave = () => { x(0); y(0); };
            b.addEventListener("pointermove", move);
            b.addEventListener("pointerleave", leave);
            off.push(() => { b.removeEventListener("pointermove", move); b.removeEventListener("pointerleave", leave); });
          });
        }
        return () => off.forEach((f) => f());
      });

    return () => mm.revert();
  }, []);

  return <div ref={bar} className="progress" aria-hidden="true" />;
}
