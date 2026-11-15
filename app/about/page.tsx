import type { Metadata } from "next";
import Link from "next/link";
import { PageHead, Pat } from "@/components/ui";
import type { Pattern, Tone } from "@/lib/content";

export const metadata: Metadata = { title: "About" };

const principles = [
  ["Equal standing", "Living traditions and contemporary industries get the same attention, the same data standards and the same seat at the table."],
  ["Practitioners first", "Research starts in workshops, studios and fairs. People we study help shape the questions and read the findings before they are published."],
  ["Open by default", "Reports, datasets and briefs are published under open licences, in plain language, with a Hindi summary."],
  ["Evidence that travels", "Every study ends in something a policymaker, a funder or a practitioner can use the following week."],
];

const tiers: { n: string; t: string; body: string; tone: Tone; pat: Pattern }[] = [
  { n: "Tier 1", t: "Governing Council", body: "Sets mandate, approves budgets and appoints the Director. [Members to be confirmed].", tone: "indigo", pat: "weave" },
  { n: "Tier 2", t: "Research & Ethics Board", body: "Reviews methods, data practices and consent processes for every study. [Members to be confirmed].", tone: "lac", pat: "twill" },
  { n: "Tier 3", t: "Industry & Policy Forum", body: "Brings platforms, studios, funders and officials into regular conversation with researchers. [Members to be confirmed].", tone: "tur", pat: "jaal" },
  { n: "Tier 4", t: "Practitioners' Assembly", body: "Artisans, gurus, performers and creators who set priorities, review findings and can call for a study. [Members to be confirmed].", tone: "madder", pat: "rangoli" },
];

const leaders = [
  ["[Director name]", "Director", "indigo"],
  ["[Name]", "Head of Research", "madder"],
  ["[Name]", "Head of Programmes", "tur"],
  ["[Name]", "Head of Policy", "lac"],
] as const;

const team = ["Researcher", "Field associate", "Data analyst", "Programme manager", "Editor", "Designer", "Policy associate", "Communications lead"];

export default function About() {
  return (
    <>
      <PageHead
        crumbs={[["About"]]}
        eyebrow="About the Centre"
        hi="केंद्र के बारे में"
        title="A centre built on both the loom and the lab."
        em="both"
        lead="We are a knowledge institution for India's creative economy: part research centre, part policy lab, part commons for the people who make culture."
        pat="rangoli"
      />

      <section className="sec-s">
        <div className="wrap">
          <nav className="subnav" aria-label="On this page">
            {[["Vision and mission", "#vision"], ["Mandate", "#mandate"], ["Leadership", "#leadership"], ["Advisory structure", "#advisory"], ["Team", "#team"]].map(([l, h]) => <a key={h} href={h}>{l}</a>)}
          </nav>
        </div>
      </section>

      <section className="sec-s" id="vision" aria-labelledby="vm-h">
        <div className="wrap">
          <h2 id="vm-h" className="sr-only">Vision and mission</h2>
          <div className="grid-2">
            <article className="vm tone-indigo" style={{ ["--tone" as string]: "var(--band-indigo)", ["--on-tone" as string]: "var(--on-fill)" }}>
              <Pat p="twill" />
              <p className="t-eyebrow">Vision</p>
              <p className="vm-quote">A country where every creative livelihood, old or new, is counted, valued and able to grow.</p>
            </article>
            <article className="vm" style={{ ["--tone" as string]: "var(--band-lac)", ["--on-tone" as string]: "var(--on-fill)" }}>
              <Pat p="jaal" />
              <p className="t-eyebrow">Mission</p>
              <p className="vm-quote">To research, enable, convene and influence, so that evidence and practice shape creative-economy policy together.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="sec alt" id="mandate" aria-labelledby="mandate-h">
        <div className="wrap">
          <div className="g12">
            <div className="col w4 sticky">
              <h2 id="mandate-h" className="t-h1">Our <em>mandate</em></h2>
              <p className="t-lead mt-s">Four principles guide what we study, how we work and what we publish.</p>
            </div>
            <ol className="col w7 st6 numlist">
              {principles.map(([t, b], i) => (
                <li key={t}><b aria-hidden="true">{i + 1}</b><div><h3>{t}</h3><p>{b}</p></div></li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="sec" id="leadership" aria-labelledby="lead-h">
        <div className="wrap">
          <div className="secthead"><div><h2 id="lead-h" className="t-h1">Leadership</h2></div></div>
          <ul className="grid-4">
            {leaders.map(([n, r, tone]) => (
              <li key={r} className="person">
                <div className={`avatar tone-${tone}`} style={{ aspectRatio: "4/5", borderRadius: "var(--r-s)", fontSize: 72 }} role="img" aria-label={`Portrait placeholder: ${r}`}>
                  <Pat p="twill" /><b>{n.replace(/[\[\]]/g, "")[0]}</b>
                </div>
                <h3>{n}</h3>
                <p className="role">{r}</p>
              </li>
            ))}
          </ul>
          <p className="t-cap mt-m">Names and portraits are placeholders pending confirmation.</p>
        </div>
      </section>

      <section className="sec alt" id="advisory" aria-labelledby="adv-h">
        <div className="wrap">
          <div className="secthead">
            <div>
              <h2 id="adv-h" className="t-h1">A four-tier <em>advisory</em> structure</h2>
              <p className="t-lead mt-s">Authority runs both ways: the Practitioners&apos; Assembly can put questions to the Council, not just receive answers.</p>
            </div>
          </div>
          <div className="tiers">
            {tiers.map((t, i) => (
              <div key={t.n}>
                <article className={`tier tone-${t.tone}`}>
                  <Pat p={t.pat} />
                  <div><p className="tier-n">{t.n}</p><h3>{t.t}</h3></div>
                  <p className="t-body">{t.body}</p>
                </article>
                {i < tiers.length - 1 && <div className="tier-links" aria-hidden="true" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" id="team" aria-labelledby="team-h">
        <div className="wrap">
          <div className="secthead"><div><h2 id="team-h" className="t-h1">The <em>team</em></h2></div><Link className="lnk" href="/partners">Work with us</Link></div>
          <ul className="grid-4">
            {team.map((r, i) => (
              <li key={r} className="person">
                <div className={`avatar tone-${(["indigo", "madder", "tur", "lac", "neem"] as const)[i % 5]}`} style={{ aspectRatio: "1", fontSize: 40 }} role="img" aria-label={`Portrait placeholder: ${r}`}>
                  <Pat p="jaal" /><b>{r[0]}</b>
                </div>
                <h3>[Name]</h3>
                <p className="role">{r}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
