import Reveal from "./Reveal.jsx";

export default function Sheet({ title, kicker, children, id }) {
  return (
    <section
      id={id}
      className="border-t border-blueprint-hairline scroll-mt-14"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-10 py-14 sm:py-20">
        <Reveal as="header" className="mb-12">
          <div className="flex items-end justify-between gap-4">
            <div>
              {kicker && (
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-blueprint-steel">
                  {kicker}
                </p>
              )}
              <h2 className="mt-1.5 font-display font-semibold text-3xl sm:text-4xl text-blueprint-ink text-balance">
                {title}
              </h2>
            </div>
          </div>
          <div className="mt-6 h-px bg-blueprint-line/25 relative" aria-hidden="true">
            <span className="absolute -top-px left-0 w-10 h-[3px] bg-flag" />
            <span className="absolute -top-px right-0 w-16 h-[3px] bg-blueprint-line/40" />
            <span className="absolute -top-px right-20 w-2 h-[3px] bg-blueprint-line/40" />
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}