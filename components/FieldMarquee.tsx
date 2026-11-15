import Link from "next/link";
import { sectors } from "@/lib/content";

// Two counter-moving rows, one per side of the field, same size and speed: equal standing as a layout.
// The copy of each row is aria-hidden and inert, so assistive tech and keyboards meet each sector once.
const rows = [
  { label: "Living traditions and livelihoods", list: sectors.living, tone: "lac", dir: "l" },
  { label: "Contemporary industries and platforms", list: sectors.contemporary, tone: "indigo", dir: "r" },
] as const;

export default function FieldMarquee() {
  return (
    <div className="field" role="group" aria-label="Sectors we study">
      {rows.map((r) => (
        <div key={r.tone} className={`field-row tone-${r.tone}`} data-dir={r.dir}>
          {[0, 1].map((c) => (
            <ul key={c} className="field-track" aria-hidden={c === 1 || undefined} inert={c === 1 || undefined} aria-label={c === 0 ? r.label : undefined}>
              {[...r.list, ...r.list].map((s, i) => (
                <li key={s + i}><Link className="tag tag-lg" href={`/knowledge-hub?q=${encodeURIComponent(s)}`}>{s}</Link></li>
              ))}
            </ul>
          ))}
        </div>
      ))}
    </div>
  );
}
