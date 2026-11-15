import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHead, Pat, initials } from "@/components/ui";
import { clusters, resources, stories } from "@/lib/content";

export function generateStaticParams() {
  return clusters.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/research/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const c = clusters.find((x) => x.slug === slug);
  return { title: c?.name };
}

const questions = [
  "What do current statistics leave out, and who pays for the gap?",
  "Which institutions, formal or informal, actually sustain this work?",
  "What would fair terms look like, and who has to agree to them?",
];

export default async function Cluster({ params }: PageProps<"/research/[slug]">) {
  const { slug } = await params;
  const c = clusters.find((x) => x.slug === slug);
  if (!c) notFound();
  const outputs = resources.filter((r) => r.theme === c.name).slice(0, 3);
  const voices = stories.slice(0, 2);

  return (
    <>
      <PageHead crumbs={[["Research", "/research"], [c.name]]} eyebrow="Research cluster" title={c.name} em={c.name.split(" ").slice(-1)[0]} lead={c.blurb} pat={c.pat} />

      <section className="sec-s" aria-labelledby="q-h">
        <div className="wrap">
          <div className="g12">
            <div className="col w4"><h2 id="q-h" className="t-h2">Key <em>questions</em></h2></div>
            <ol className="col w7 st6 numlist">
              {questions.map((q, i) => <li key={q}><b aria-hidden="true">{i + 1}</b><div><h3>{q}</h3></div></li>)}
            </ol>
          </div>
        </div>
      </section>

      <section className="sec alt" aria-labelledby="o-h">
        <div className="wrap">
          <div className="secthead"><div><h2 id="o-h" className="t-h1">Outputs</h2></div><Link className="lnk" href="/knowledge-hub">All in the Knowledge Hub</Link></div>
          {outputs.length ? (
            <ul className="grid-3">
              {outputs.map((r) => (
                <li key={r.id} style={{ display: "flex" }}>
                  <article className="card rp-card v" style={{ flex: 1 }}>
                    <div className={`rp-cover tone-${r.tone}`}><Pat p="twill" /><small>{r.type} · {r.year}</small><b>{r.title}</b></div>
                    <div className="card-body"><p>{r.summary}</p><div className="card-foot"><Link className="lnk stretch" href="/knowledge-hub">{r.action}</Link></div></div>
                  </article>
                </li>
              ))}
            </ul>
          ) : (
            <div className="empty"><p className="t-lead">Outputs for this cluster are being prepared.</p></div>
          )}
        </div>
      </section>

      <section className="sec" aria-labelledby="v-h">
        <div className="wrap">
          <div className="secthead"><div><h2 id="v-h" className="t-h1">Practitioner <em>voices</em></h2></div></div>
          <ul className="grid-2">
            {voices.map((s) => (
              <li key={s.slug}>
                <blockquote className="pq">“{s.quote}”</blockquote>
                <p className="t-small mt-s"><b>{s.name}</b>, {s.role}, {s.place}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sec-s alt" aria-labelledby="t-h">
        <div className="wrap">
          <div className="secthead"><div><h2 id="t-h" className="t-h2">Cluster team</h2></div></div>
          <ul className="grid-4">
            {["Cluster lead", "Senior researcher", "Field associate", "Data analyst"].map((r) => (
              <li key={r} className="person">
                <div className={`avatar tone-${c.tone}`} style={{ aspectRatio: "1", fontSize: 40 }} role="img" aria-label={`Portrait placeholder: ${r}`}><Pat p="jaal" /><b>{initials(r)}</b></div>
                <h3>[Name]</h3><p className="role">{r}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
