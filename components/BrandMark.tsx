export function BrandMark() {
  return (
    <svg className="brand-mark" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <circle cx="24" cy="24" r="22.5" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
        <ellipse key={a} cx="24" cy="13" rx="3.8" ry="8" transform={`rotate(${a} 24 24)`} />
      ))}
      <circle cx="24" cy="24" r="3.4" fill="currentColor" stroke="none" />
    </svg>
  );
}
