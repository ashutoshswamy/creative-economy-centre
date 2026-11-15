import { BrandMark } from "./BrandMark";

// Brand loader: the mark above a row of warp threads. CSS-only, so it works before JS and under any route fallback.
export default function Loader({ splash = false }: { splash?: boolean }) {
  const bars = (
    <span className="loader-bars" aria-hidden="true">{Array.from({ length: 7 }, (_, i) => <i key={i} />)}</span>
  );
  if (splash)
    return <div className="splash" aria-hidden="true"><div className="loader"><BrandMark />{bars}</div></div>;
  return (
    <div className="loader loader-page" role="status" aria-live="polite">
      <BrandMark />
      {bars}
      <span className="sr-only">Loading</span>
    </div>
  );
}
