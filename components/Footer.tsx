import Link from "next/link";
import { ArrowUpIcon } from "@heroicons/react/24/outline";
import { BrandMark } from "./BrandMark";

const cols = [
  { h: "The Centre", links: [["Vision & mission", "/about"], ["Leadership", "/about"], ["Advisory structure", "/about"], ["Team", "/about"], ["Partners", "/partners"]] },
  { h: "Research", links: [["All 7 clusters", "/research"], ["Culture & Heritage", "/research/culture-heritage"], ["Creator Livelihoods", "/research/livelihoods"], ["Creative Cities", "/research/creative-cities"], ["Creative Technologies & AI", "/research/technologies-ai"]] },
  { h: "Knowledge", links: [["Knowledge Hub", "/knowledge-hub"], ["Observatory", "/observatory"], ["Policy Lab", "/policy-lab"], ["Creative India Stories", "/stories"]] },
  { h: "Engage", links: [["Programmes & events", "/programmes"], ["Fellowships", "/programmes"], ["Collaborate", "/partners"]] },
] as const;

export default function Footer() {
  return (
    <footer className="foot" aria-label="Site footer">
      <div className="wrap foot-top">
        <div className="foot-cta">
          <p className="foot-sign">Keep the loom, the lens and the <em>code</em> in one conversation.</p>
        </div>

        <div className="foot-grid">
          <div className="foot-id">
            <div className="foot-brand">
              <BrandMark />
              <div>
                <div className="brand-name">Centre for the<br />Creative Economy</div>
              </div>
            </div>
            <p className="foot-about">
              A national knowledge platform for research, policy, data, practice and public engagement on India&apos;s creative economy, from craft clusters to creator studios.
            </p>
          </div>
          {cols.map((c) => (
            <nav key={c.h} aria-label={c.h}>
              <h4>{c.h}</h4>
              <ul className="foot-links">
                {c.links.map(([l, href]) => (
                  <li key={l}><Link href={href}>{l}</Link></li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      <div className="wrap">
        <div className="foot-bottom">
          <span>&copy; 2026 Centre for the Creative Economy. Research is licensed CC BY-NC-SA 4.0 unless stated.</span>
          <nav aria-label="Legal">
            <Link href="/about">Accessibility</Link>
            <Link href="/about">Privacy</Link>
            <Link href="/about">Terms</Link>
          </nav>
          <a className="foot-top-link" href="#main">Back to top <ArrowUpIcon width={18} height={18} aria-hidden="true" /></a>
        </div>
      </div>
    </footer>
  );
}
