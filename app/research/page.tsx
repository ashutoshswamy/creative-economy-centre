import type { Metadata } from "next";
import Link from "next/link";
import { PageHead, Pat } from "@/components/ui";
import { clusters } from "@/lib/content";
import { Ico, clusterIcon } from "@/components/icons";

export const metadata: Metadata = { title: "Research" };

export default function Research() {
  return (
    <>
      <PageHead
        crumbs={[["Research"]]}
        eyebrow="Research"
        hi="शोध"
        title="Seven clusters, one question: who gets counted?"
        em="counted"
        lead="Each cluster pairs researchers with practitioners. Projects start in the field and end in something people can use."
        pat="weave"
      />
      <section className="sec-s">
        <div className="wrap">
          <ul className="grid-3 cl-grid">
            {clusters.map((c) => (
              <li key={c.slug} style={{ display: "flex" }}>
                <article className={`card cl-card tone-${c.tone} rv`} style={{ flex: 1 }}>
                  <Pat p={c.pat} className="pat-corner" />
                  <div className="card-body">
                    <Ico i={clusterIcon[c.slug]} />
                    <h3><Link className="stretch" href={`/research/${c.slug}`}>{c.name}</Link></h3>
                    <p>{c.blurb}</p>
                    <span className="lnk" aria-hidden="true">{c.projects} projects</span>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
