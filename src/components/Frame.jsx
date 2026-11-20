const corners = [
  "top-0 left-0 border-t-2 border-l-2",
  "top-0 right-0 border-t-2 border-r-2",
  "bottom-0 left-0 border-b-2 border-l-2",
  "bottom-0 right-0 border-b-2 border-r-2",
];

export default function Frame() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-40">
      <div className="absolute inset-2 sm:inset-3 border border-blueprint-ink/15" />
      {corners.map((c) => (
        <div
          key={c}
          className={`absolute w-4 h-4 ${c} border-blueprint-ink/40`}
        />
      ))}
    </div>
  );
}