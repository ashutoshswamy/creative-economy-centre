"use client";

import { useState } from "react";
import { Pat } from "./ui";
import type { Pattern, Tone } from "@/lib/content";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { Ico, pathIcon, stepIcon } from "./icons";

const paths: { name: string; blurb: string; tone: Tone; pat: Pattern }[] = [
  { name: "Academia", blurb: "Joint studies, field schools and shared datasets with universities and research institutes.", tone: "indigo", pat: "twill" },
  { name: "Government", blurb: "Evidence, evaluation and convenings for state and Union departments.", tone: "lac", pat: "weave" },
  { name: "Industry", blurb: "Studios, platforms and industry bodies working on fair practice and standards.", tone: "tur", pat: "jaal" },
  { name: "Creators & practitioners", blurb: "Collectives, clusters and individual makers who want to shape the research.", tone: "madder", pat: "rangoli" },
  { name: "Technology", blurb: "Tools, data and AI partners building responsibly with creative communities.", tone: "neem", pat: "twill" },
  { name: "International", blurb: "Comparative work, exchanges and shared programmes with institutions abroad.", tone: "indigo", pat: "jaal" },
];

const steps = [
  ["Tell us", "Send an enquiry. A partnerships lead replies within five working days."],
  ["Scope", "A short call to agree questions, roles and what each side brings."],
  ["Agree", "A one-page note on outputs, data, credit and licensing."],
  ["Begin", "Work starts, with a named contact at the Centre throughout."],
];

// TODO: route enquiries to the partnerships desk and send an auto-acknowledgement.
export default function PartnerPaths() {
  const [sel, setSel] = useState("");
  const [done, setDone] = useState("");

  return (
    <>
      <section className="sec-s" aria-labelledby="paths-h">
        <div className="wrap">
          <h2 id="paths-h" className="sr-only">Ways to partner</h2>
          <ul className="grid-3">
            {paths.map((p) => (
              <li key={p.name} style={{ display: "flex" }}>
                <article className={`path tone-${p.tone}${sel === p.name ? " is-on" : ""}`} style={{ flex: 1 }}>
                  <Pat p={p.pat} />
                  <Ico i={pathIcon[p.name]} />
                  <h3>{p.name}</h3>
                  <p>{p.blurb}</p>
                  <button type="button" className="tag" aria-pressed={sel === p.name} onClick={() => { setSel(p.name); document.getElementById("enquire")?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" }); }}>
                    {sel === p.name ? "Selected" : "Start an enquiry"}
                  </button>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sec alt" aria-labelledby="how-h">
        <div className="wrap">
          <div className="secthead"><div><h2 id="how-h" className="t-h1">How it <em>works</em></h2></div></div>
          <ol className="steps grid-4">
            {steps.map(([t, b]) => <li key={t}><Ico i={stepIcon[t]} /><h3 className="t-h3">{t}</h3><p className="soft">{b}</p></li>)}
          </ol>
        </div>
      </section>

      <section className="sec" id="enquire" aria-labelledby="enq-h">
        <div className="wrap">
          <div className="g12">
            <div className="col w4"><h2 id="enq-h" className="t-h1">Send an <em>enquiry</em></h2><p className="t-lead mt-s">We reply within five working days.</p></div>
            <div className="col w7 st6">
              {done ? (
                <div className="formcard" role="status"><CheckCircleIcon className="ok-i" aria-hidden="true" /><h3 className="t-h3">Enquiry received</h3><p>Thank you, {done}. A partnerships lead will reply within five working days.</p></div>
              ) : (
                <form className="formcard" onSubmit={(e) => { e.preventDefault(); setDone(String(new FormData(e.currentTarget).get("name"))); }}>
                  <div className="form-2">
                    <div className="field"><label htmlFor="p-name">Name</label><input id="p-name" name="name" className="input" required autoComplete="name" /></div>
                    <div className="field"><label htmlFor="p-org">Organisation</label><input id="p-org" name="org" className="input" required autoComplete="organization" /></div>
                  </div>
                  <div className="form-2">
                    <div className="field"><label htmlFor="p-mail">Email</label><input id="p-mail" name="email" type="email" className="input" required autoComplete="email" /></div>
                    <div className="field"><label htmlFor="p-type">Partner type</label>
                      <select id="p-type" name="type" className="select" required value={sel} onChange={(e) => setSel(e.target.value)}>
                        <option value="" disabled>Choose one</option>{paths.map((p) => <option key={p.name}>{p.name}</option>)}
                      </select></div>
                  </div>
                  <div className="field"><label htmlFor="p-area">Area of interest</label><input id="p-area" name="area" className="input" /></div>
                  <div className="field"><label htmlFor="p-msg">Message</label><textarea id="p-msg" name="message" className="textarea" required /></div>
                  <label className="check"><input type="checkbox" required /> I consent to the Centre contacting me about this enquiry.</label>
                  <div><button className="btn btn-primary btn-lg btn-arrow" type="submit">Send enquiry</button></div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
