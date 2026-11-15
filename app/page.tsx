import Link from "next/link";
import Motion from "@/components/Motion";
import StoryCarousel from "@/components/StoryCarousel";
import { Pat } from "@/components/ui";
import { events, partners } from "@/lib/content";
import HeroWord from "@/components/HeroWord";
import FieldMarquee from "@/components/FieldMarquee";

const reci = [
  { l: "R", t: "Research", hi: "शोध", tone: "indigo", pat: "twill", href: "/research", cta: "See the clusters", body: "Field-grounded studies across seven clusters, from craft economies and informal enterprise to creative technologies." },
  { l: "E", t: "Enable", hi: "सक्षम", tone: "tur", pat: "jaal", href: "/programmes", cta: "Fellowships & residencies", body: "Fellowships, residencies and toolkits that help practitioners, studios and clusters build livelihoods that last." },
  { l: "C", t: "Convene", hi: "संवाद", tone: "madder", pat: "rangoli", href: "/programmes", cta: "Upcoming gatherings", body: "Conferences, roundtables and gurukul-to-campus exchanges that put unlikely people in the same room." },
  { l: "I", t: "Influence", hi: "प्रभाव", tone: "lac", pat: "weave", href: "/policy-lab", cta: "Enter the Policy Lab", body: "Briefs, consultations and open data that bring the creative economy to the table in cities, states and the Union." },
] as const;

import { BuildingLibraryIcon, ChartBarIcon, DocumentTextIcon } from "@heroicons/react/24/outline";
import { Ico, Place, reciIcon } from "@/components/icons";

const minis = [
  { tone: "madder", href: "/policy-lab", k: "Policy brief · PB-07", t: "Fair pay for regional-language creators on platforms", c: "6 min read · Open for comment", Icon: DocumentTextIcon },
  { tone: "neem", href: "/knowledge-hub", k: "Dataset · pilot release", t: "Craft Cluster Register: a first open index", c: "CSV · API soon · CC BY", Icon: ChartBarIcon },
  { tone: "lac", href: "/research/culture-heritage", k: "Cluster · Culture & Heritage", t: "Guru-shishya as an institution: what endures, what pays", c: "Research cluster · 5 projects", Icon: BuildingLibraryIcon },
] as const;

export default function Home() {
  return (
    <>
      <Motion />
      {/* HERO */}
      <section className="hero" aria-labelledby="hero-h">
        <div className="wrap">
          <h1 id="hero-h" className="t-display" aria-label="Where India's making meets its measuring.">
            Where India&apos;s <HeroWord /><br />meets its measuring.
          </h1>
          <div className="hero-row">
            <p className="t-lead">
              Research, policy and data on India&apos;s creative economy. The loom and the game engine both count, in every study, dataset and policy brief.
            </p>
            <div className="btn-row">
              <Link className="btn btn-accent btn-lg btn-arrow" href="/research">Explore research</Link>
              <Link className="btn btn-ghost btn-lg" href="/stories">Read stories</Link>
            </div>
          </div>
        </div>
        <FieldMarquee />
      </section>

      {/* RECI */}
      <section className="sec alt" aria-labelledby="reci-h">
        <div className="wrap">
          <div className="secthead">
            <div>
              <h2 id="reci-h" className="t-h1">Research. Enable. Convene. <em>Influence.</em></h2>
              <p className="t-lead mt-s">Four commitments, one loop: what we learn in the field shapes what we build, who we gather, and what we ask of policy.</p>
            </div>
          </div>
          <div className="reci-grid">
            {reci.map((r) => (
              <article key={r.l} className={`reci-card tone-${r.tone} rv`}>
                <Pat p={r.pat} />
                <Ico i={reciIcon[r.l]} />
                <span className="reci-letter" aria-hidden="true">{r.l}</span>
                <h3>{r.t} <span className="hi" lang="hi" style={{ fontSize: ".6em", opacity: 0.8 }}>· {r.hi}</span></h3>
                <p>{r.body}</p>
                <Link className="lnk" href={r.href}>{r.cta}</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED RESEARCH */}
      <section className="sec" aria-labelledby="feat-h">
        <div className="wrap">
          <div className="secthead">
            <div>
              <h2 id="feat-h" className="t-h1">New from the <em>field</em></h2>
            </div>
            <Link className="lnk" href="/knowledge-hub">Open the Knowledge Hub</Link>
          </div>
          <div className="g12">
            <article className="col w8 feat rv">
              <Pat p="jaal" style={{ color: "#FFFDF9" }} />
              <div className="feat-cover">
                <div className="feat-book" aria-hidden="true">
                  <Pat p="twill" />
                  <small>Report · 2026</small>
                  <b>Mapping the Unmapped</b>
                  <small>Centre for the Creative Economy</small>
                </div>
              </div>
              <div className="feat-text">
                <div className="taglist"><span className="tag tag-solid tone-tur">Flagship report</span><span className="tag" style={{ color: "#FFFDF9", borderColor: "rgba(255,253,249,.6)" }}>Informal enterprise</span></div>
                <h3>Mapping the Unmapped: informal creative enterprise in India</h3>
                <p>The first systematic look at how craft clusters, performing-arts lineages and festival economies earn, trade and pass on skill, and what the formal statistics miss.</p>
                <div className="meta" style={{ color: "rgba(255,253,249,.86)" }}><span>Lead: [Cluster lead]</span><span>148 pp.</span><span>English, हिन्दी summary</span></div>
                <div className="actions mt-s"><Link className="btn btn-gold btn-arrow" href="/knowledge-hub">Read the report</Link><Link className="btn btn-ghost" href="/knowledge-hub">Download PDF</Link></div>
              </div>
            </article>
            <div className="col w4">
              <div className="rv">
                {minis.map((m) => (
                  <Link key={m.t} className={`mini tone-${m.tone}`} href={m.href}>
                    <span className="glyph" aria-hidden="true">
                      <m.Icon width={24} height={24} />
                    </span>
                    <span>
                      <span className="k" style={{ color: "var(--tone-c)" }}>{m.k}</span>
                      <h3>{m.t}</h3>
                      <span className="t-cap">{m.c}</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORIES */}
      <section className="band band-lac sec" aria-labelledby="st-h">
        <Pat p="rangoli" className="pat-fade" style={{ color: "#FFFDF9", ["--po" as string]: ".1" }} />
        <div className="wrap">
          <StoryCarousel />
          <div className="row mt-l">
            <Link className="btn btn-gold btn-arrow" href="/stories">All profiles</Link>
            <span className="t-small" style={{ opacity: 0.85 }}>Artists · artisans · filmmakers · designers · musicians · writers · creators</span>
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="sec" aria-labelledby="ev-h">
        <div className="wrap">
          <div className="g12">
            <div className="col w4 sticky rv">
              <h2 id="ev-h" className="t-h1">Come to <em>the room</em></h2>
              <p className="t-body soft mt-s">Conferences, lectures, workshops and gatherings in studios, campuses, craft clusters and online. Most are open to practitioners without registration fees.</p>
              <div className="row mt-m"><Link className="btn btn-primary btn-arrow" href="/programmes">Full calendar</Link></div>
            </div>
            <div className="col w7 st6">
              <ul>
                {events.slice(0, 4).map((e) => (
                  <li key={e.slug} className={`ev-row tone-${e.tone} rv-f`}>
                    <div className="d"><b>{e.day}</b><span>{e.mon}</span></div>
                    <div className="flow" style={{ ["--s4" as string]: "8px" }}>
                      <div className="taglist"><span className="tag tag-tone">{e.type}</span><Place>{e.place}</Place></div>
                      <h3><Link className="stretch" href="/programmes">{e.title}</Link></h3>
                    </div>
                    <span className="go lnk" aria-hidden="true">Details</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="sec-s alt" aria-labelledby="pt-h">
        <div className="wrap">
          <div className="secthead">
            <div>
              <h2 id="pt-h" className="t-h2">Built with universities, states, clusters and creators</h2>
            </div>
            <Link className="lnk" href="/partners">Become a partner</Link>
          </div>
          <ul className="logo-grid">
            {partners.map((p, i) => (
              <li key={p.name} className="logo-tile">
                <span className={`logo-mark ${["", "sq", "arc", ""][i % 4]} tone-${p.tone}`} aria-hidden="true"><Pat p="jaal" /><b>{p.mono}</b></span>
                <span className="logo-name">{p.name}<small>Logo placeholder</small></span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
