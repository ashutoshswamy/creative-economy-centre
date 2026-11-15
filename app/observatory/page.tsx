import type { Metadata } from "next";
import { PageHead, Pat } from "@/components/ui";
import ObservatorySignup from "@/components/ObservatorySignup";
import { Ico, moduleIcon } from "@/components/icons";

export const metadata: Metadata = { title: "Observatory" };

const bars = [
  ["Craft & textiles", 78, "madder"],
  ["Performing arts", 52, "lac"],
  ["Film & audiovisual", 64, "indigo"],
  ["Games & animation", 31, "neem"],
  ["Digital creators", 69, "tur"],
] as const;

const modules = [
  ["Cluster map", "Where creative clusters are, what they make and who works in them."],
  ["Livelihood tracker", "Income ranges, payment timing and platform dependence, updated each wave."],
  ["Policy tracker", "Schemes, budgets and regulations that touch creative work, state by state."],
  ["Open data room", "Downloadable datasets with documentation, licences and an API."],
];

const roadmap = [
  ["Phase 1", "Pilot datasets and the Craft Cluster Register in the Knowledge Hub."],
  ["Phase 2", "Cluster map and livelihood tracker in public beta."],
  ["Phase 3", "Policy tracker and open data room. Launch date to be announced."],
];

export default function Observatory() {
  return (
    <>
      <PageHead
        crumbs={[["Observatory"]]}
        eyebrow="Observatory · coming soon"
        hi="वेधशाला"
        title="India's creative economy, measured in the open."
        em="measured"
        lead="The Observatory will be a public data platform for the sector. This page previews what it will show. Charts below are not real data."
        pat="weave"
      />

      <section className="sec obs" aria-labelledby="prev-h">
        <Pat p="weave" className="pat-fade" style={{ color: "#FFFDF9", ["--po" as string]: ".08" }} />
        <div className="wrap">
          <div className="secthead"><div><h2 id="prev-h" className="t-h1">A first <em>look</em></h2></div></div>
          <div className="grid-2">
            <article className="chart-card">
              <span className="illus">Illustrative sample</span>
              <h3 className="t-h3">Share of workers by sector</h3>
              <div className="bars mt-m" role="img" aria-label="Illustrative bar chart of sector shares. Sample values only.">
                {bars.map(([l, v, tone]) => (
                  <div key={l} className={`bar tone-${tone}`}><span>{l}</span><span className="tr"><span className="fl" style={{ width: `${v}%` }} /></span><b>{v}</b></div>
                ))}
              </div>
            </article>
            <article className="chart-card">
              <span className="illus">Illustrative sample</span>
              <h3 className="t-h3">Cluster density by district</h3>
              <div className="heat mt-m" role="img" aria-label="Illustrative heat grid of cluster density. Sample values only.">
                {Array.from({ length: 50 }, (_, i) => <i key={i} style={{ opacity: 0.15 + (((i * 37) % 11) / 11) * 0.85 }} />)}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="sec" aria-labelledby="mod-h">
        <div className="wrap">
          <div className="secthead"><div><h2 id="mod-h" className="t-h1">Planned <em>modules</em></h2></div></div>
          <ul className="grid-2">
            {modules.map(([t, b], i) => (
              <li key={t} className={`vm tone-${(["indigo", "madder", "lac", "neem"] as const)[i]}`}>
                <Pat p={(["twill", "jaal", "weave", "rangoli"] as const)[i]} />
                <Ico i={moduleIcon[i]} /><h3 className="t-h3">{t}</h3><p>{b}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sec alt" aria-labelledby="road-h">
        <div className="wrap">
          <div className="g12">
            <div className="col w4"><h2 id="road-h" className="t-h2">Roadmap</h2></div>
            <ol className="col w7 st6 numlist">
              {roadmap.map(([p, b]) => <li key={p}><b aria-hidden="true" style={{ fontSize: 14, fontFamily: "var(--f-body)", letterSpacing: ".1em" }}>{p.split(" ")[1]}</b><div><h3>{p}</h3><p>{b}</p></div></li>)}
            </ol>
          </div>
        </div>
      </section>

      <section className="band tone-madder sec" aria-labelledby="sig-h">
        <Pat p="jaal" style={{ color: "#0F1214", ["--po" as string]: ".12" }} />
        <div className="wrap">
          <div className="g12" style={{ alignItems: "center" }}>
            <div className="col w6"><h2 id="sig-h" className="t-h1">Be there at <em>launch</em></h2><p className="t-lead mt-s">Tell us who you are and we will write when each module opens.</p></div>
            <ObservatorySignup />
          </div>
        </div>
      </section>
    </>
  );
}
