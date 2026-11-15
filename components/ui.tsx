import Link from "next/link";
import Motion from "./Motion";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import type { ReactNode } from "react";
import type { Pattern, Tone } from "@/lib/content";

export const Pat = ({ p, className = "", style }: { p: Pattern; className?: string; style?: React.CSSProperties }) => (
  <i className={`pat pat-${p} ${className}`} aria-hidden="true" style={style} />
);

// Placeholder photo frame: art direction for the photographer until real images exist.
export function Ph({
  tone, pat, kind, shot, alt, className = "", style,
}: { tone: Tone; pat: Pattern; kind?: string; shot: string; alt: string; className?: string; style?: React.CSSProperties }) {
  return (
    <div className={`ph tone-${tone} ${className}`} role="img" aria-label={`Photograph placeholder: ${alt}`} style={style}>
      <Pat p={pat} />
      {kind && <span className="ph-kind">{kind}</span>}
      <span className="ph-tag">{shot}</span>
    </div>
  );
}

export function PageHead({
  crumbs, hi, title, em, lead, pat = "twill", children,
}: {
  crumbs: [string, string?][]; eyebrow?: string; hi?: string; title: string; em: string; lead: string; pat?: Pattern; children?: ReactNode;
}) {
  const [before, after] = title.split(em);
  return (
    <section className="phead">
      <Pat p={pat} style={{ inset: "0 0 auto auto", width: "50%", height: "100%", color: "var(--c-madder)", ["--po" as string]: ".1", WebkitMaskImage: "linear-gradient(200deg,#000,transparent 65%)", maskImage: "linear-gradient(200deg,#000,transparent 65%)" }} />
      <div className="wrap">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          {crumbs.map(([label, href]) => (
            <span key={label} style={{ display: "contents" }}>
              <span aria-hidden="true">/</span>
              {href ? <Link href={href}>{label}</Link> : <span aria-current="page">{label}</span>}
            </span>
          ))}
          {hi && <span className="hi hi-tag" lang="hi">{hi}</span>}
        </nav>
        <h1 className="t-display">{before}<em>{em}</em>{after}</h1>
        <p className="t-lead">{lead}</p>
        {children}
      </div>
      <Motion />
      <div className="wrap" style={{ marginTop: "clamp(32px,4vw,56px)" }}><i className="div div-border" aria-hidden="true" /></div>
    </section>
  );
}

export const Arrow = ({ dir = "right" }: { dir?: "left" | "right" }) =>
  dir === "left" ? <ArrowLeftIcon width={22} height={22} aria-hidden="true" /> : <ArrowRightIcon width={22} height={22} aria-hidden="true" />;

export const initials = (n: string) => n.replace(/^Pt\. /, "").split(" ").map((w) => w[0]).slice(0, 2).join("");
