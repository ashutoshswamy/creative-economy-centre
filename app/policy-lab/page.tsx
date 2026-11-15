import type { Metadata } from "next";
import Link from "next/link";
import ConsultationForm from "@/components/ConsultationForm";
import { PageHead } from "@/components/ui";
import { policyItems } from "@/lib/content";
import { policyIcon } from "@/components/icons";

export const metadata: Metadata = { title: "Policy Lab" };

const label = { open: "Open", closed: "Closed", soon: "Opening soon" } as const;

export default function PolicyLab() {
  const consultations = policyItems.filter((p) => p.status !== "closed");
  return (
    <>
      <PageHead
        crumbs={[["Policy Lab"]]}
        eyebrow="Policy Lab"
        hi="नीति प्रयोगशाला"
        title="Evidence, in a form policy can use."
        em="use"
        lead="Briefs, white papers, consultations and roundtables. Respond in writing, by audio or on video, in the language you work in."
        pat="weave"
      />

      <section className="sec-s" aria-labelledby="pb-h">
        <div className="wrap">
          <div className="secthead"><div><h2 id="pb-h" className="t-h1">Briefs &amp; <em>papers</em></h2></div><Link className="lnk" href="/knowledge-hub?type=Policy+document">All policy documents</Link></div>
          <ul className="grid-2">
            {policyItems.map((p) => (
              <li key={p.id} style={{ display: "flex" }}>
                <article className={`card pb-card tone-${p.tone}`} style={{ flex: 1 }}>
                  <div className="card-body">
                    <div className="pb-no"><b>{p.id}</b><span className={`status status-${p.status}`}>{label[p.status]}</span></div>
                    <p className="t-eyebrow ico-line">{(() => { const I = policyIcon[p.kind]; return <I className="tag-i" aria-hidden="true" />; })()}{p.kind}</p>
                    <h3><Link className="stretch" href="#respond">{p.title}</Link></h3>
                    <p>{p.summary}</p>
                    <div className="card-foot"><span>{p.deadline}</span></div>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sec alt" id="respond" aria-labelledby="resp-h">
        <div className="wrap">
          <div className="g12">
            <div className="col w5">
              <h2 id="resp-h" className="t-h1">Respond to a <em>consultation</em></h2>
              <p className="t-lead mt-s">Open now: {consultations.filter((c) => c.status === "open").length}. Responses are published anonymised on request.</p>
              <ul className="mt-m">
                {consultations.map((c) => (
                  <li key={c.id} className="mini"><span><span className="k" style={{ color: "var(--c-indigo)" }}>{c.id} · {label[c.status]}</span><h3>{c.title}</h3><span className="t-cap">{c.deadline}</span></span></li>
                ))}
              </ul>
            </div>
            <div className="col w6 st7"><ConsultationForm items={consultations.map((c) => `${c.id}: ${c.title}`)} /></div>
          </div>
        </div>
      </section>
    </>
  );
}
