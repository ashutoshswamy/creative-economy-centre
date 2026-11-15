import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Motion from "@/components/Motion";
import { Ph } from "@/components/ui";
import { clusters, stories } from "@/lib/content";

export function generateStaticParams() {
  return stories.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/stories/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  return { title: stories.find((s) => s.slug === slug)?.name };
}

export default async function Story({ params }: PageProps<"/stories/[slug]">) {
  const { slug } = await params;
  const s = stories.find((x) => x.slug === slug);
  if (!s) notFound();
  const related = clusters.slice(0, 2);
  const more = stories.filter((x) => x.slug !== s.slug).slice(0, 3);

  return (
    <>
      <Motion />
      <header className="story-hero">
        <Ph tone={s.tone} pat={s.pat} className={s.cls} shot={s.shot} alt={`${s.name}, ${s.role}`} />
        <div className="scrim" />
        <div className="wrap in">
          <nav className="crumbs" aria-label="Breadcrumb" style={{ color: "inherit" }}>
            <Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/stories">Stories</Link><span aria-hidden="true">/</span><span aria-current="page">{s.name}</span>
          </nav>
          <p className="t-eyebrow" style={{ color: "inherit" }}>{s.practice}</p>
          <h1 className="t-display mt-s">{s.name}</h1>
          <p className="t-lead mt-s" style={{ color: "inherit" }}>{s.role}, {s.place}</p>
        </div>
      </header>

      <section className="sec">
        <div className="wrap">
          <div className="g12">
            <article className="col w7 prose">
              <p className="t-lead dropcap">[Opening paragraph. Introduce {s.name} at work, in {s.place}, with the detail only someone who was there would notice.]</p>
              <p className="t-body mt-s">[Body copy from the story editor. Placeholder text: this profile is a template until the interview, photography and consent are complete.]</p>
              <blockquote className="pull mt-l">“{s.quote}”</blockquote>
              <dl className="qa">
                <dt>What do you want policymakers to understand?</dt>
                <dd>[Answer in the practitioner&apos;s words.]</dd>
                <dt>What would make the next ten years easier?</dt>
                <dd>[Answer in the practitioner&apos;s words.]</dd>
              </dl>
              <figure className="mt-l">
                <Ph tone={s.tone} pat={s.pat} className="ar-43" style={{ ["--ar" as string]: "3/2" }} shot="Working detail, close" alt="a close view of the work" />
                <figcaption className="cap"><span><b>{s.name}</b>, {s.role.toLowerCase()}, {s.place}.</span><span className="credit">[Photographer] · CCE Field Archive</span></figcaption>
              </figure>
            </article>
            <aside className="col w4 st9 sticky" aria-label="Story details">
              <div className="factbox">
                <dl>
                  <dt>Practice</dt><dd>{s.practice}, {s.role}</dd>
                  <dt>Place</dt><dd>{s.place}</dd>
                  <dt>Region</dt><dd>{s.region}</dd>
                  <dt>Credits</dt><dd>Interview and text: [name]. Photography: [name]. Consent recorded: [date].</dd>
                </dl>
              </div>
              <div className="factbox mt-m">
                <p className="ds-label">Related research</p>
                <ul className="mt-s">
                  {related.map((c) => <li key={c.slug}><Link className="lnk" href={`/research/${c.slug}`}>{c.name}</Link></li>)}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="sec alt" aria-labelledby="more-h">
        <div className="wrap">
          <div className="secthead"><div><h2 id="more-h" className="t-h2">More stories</h2></div><Link className="lnk" href="/stories">All profiles</Link></div>
          <ul className="grid-3">
            {more.map((m) => (
              <li key={m.slug} className="st-card">
                <div className="zoom"><Ph tone={m.tone} pat={m.pat} className={`arch-s ${m.cls}`} shot={m.shot} alt={`${m.name}, ${m.role}`} /></div>
                <div className="st-body"><h3 className="st-name"><Link className="stretch" href={`/stories/${m.slug}`}>{m.name}</Link></h3><p className="st-role">{m.role}, {m.place}</p></div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
