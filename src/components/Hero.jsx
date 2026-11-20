import { LinkedIn, Mail } from "./Icons.jsx";

export default function Hero() {
  return (
    <header
      id="top"
      className="relative bg-grid-paper bg-grid overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-10 pt-4 sm:pt-8 pb-16 sm:pb-24">
        <div className="mt-6 grid grid-cols-1 items-start gap-10 md:grid-cols-[minmax(0,1fr)_auto] md:gap-8">
          {/* introduction — cylinder hangs off its left edge */}
          <div className="relative order-2 min-w-0">
            <div className="absolute hidden md:block top-0 bottom-0 left-0 w-12 -translate-x-full -ml-6">
              <svg
                viewBox="0 0 48 100"
              preserveAspectRatio="none"
              className="h-full w-full text-blueprint-line"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="rebar-hatch"
                  width="8"
                  height="8"
                  patternUnits="userSpaceOnUse"
                  patternTransform="rotate(45)"
                >
                  <line
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="8"
                    stroke="currentColor"
                    strokeWidth="0.7"
                  />
                </pattern>
              </defs>
              <rect
                x="16"
                y="8"
                width="16"
                height="84"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                pathLength={100}
                className="[stroke-dasharray:100] animate-draw"
              />
              <rect
                x="16.75"
                y="10.5"
                width="14.5"
                height="79"
                fill="url(#rebar-hatch)"
                stroke="none"
                opacity="0.35"
                className="animate-fadein [animation-delay:700ms]"
              />
              <line
                x1="24"
                y1="2"
                x2="24"
                y2="98"
                stroke="currentColor"
                strokeWidth="0.6"
                strokeDasharray="5 4"
                opacity="0.55"
              />
              <rect
                x="12"
                y="3"
                width="24"
                height="6"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.9"
                pathLength={100}
                className="[stroke-dasharray:100] animate-draw [animation-delay:180ms]"
              />
              <rect
                x="6"
                y="92"
                width="36"
                height="8"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.9"
                pathLength={100}
                className="[stroke-dasharray:100] animate-draw [animation-delay:320ms]"
              />
              <path
                d="M10 92 L10 100 M38 92 L38 100"
                stroke="currentColor"
                strokeWidth="0.6"
                opacity="0.7"
              />
              <line
                x1="3"
                y1="16"
                x2="3"
                y2="84"
                stroke="currentColor"
                strokeWidth="0.6"
                opacity="0.75"
              />
              <line
                x1="3"
                y1="16"
                x2="6"
                y2="16"
                stroke="currentColor"
                strokeWidth="0.6"
                opacity="0.75"
              />
              <line
                x1="3"
                y1="84"
                x2="6"
                y2="84"
                stroke="currentColor"
                strokeWidth="0.6"
                opacity="0.75"
              />
            </svg>

            <span className="pointer-events-none absolute left-3 bottom-8 origin-left -rotate-90 whitespace-nowrap font-mono text-[9px] tracking-[0.25em] text-blueprint-steel">
              H = 3.0 m · NTS
            </span>
            <span className="pointer-events-none absolute right-0 top-1 font-mono text-[9px] leading-none text-blueprint-line">
              A
            </span>
            <span className="pointer-events-none absolute right-0 bottom-1 font-mono text-[9px] leading-none text-blueprint-line">
              A
            </span>

            <span
                  aria-hidden="true"
                  className="pointer-events-none absolute left-0 right-0 h-px bg-flag/60 [animation:scan_2.6s_linear_1.6s_infinite]"
                />
            </div>

            <h1 className="font-display font-semibold text-blueprint-ink tracking-tight leading-[0.92] text-6xl sm:text-8xl text-balance">
              <span className="text-2xl sm:text-4xl font-medium text-blueprint-steel tracking-normal">
                I am
              </span>
              <br />
              <span className="inline-block origin-left transition-transform duration-300 hover:scale-[1.02]">
                Nirjala
                <br />
                Prajapati
              </span>
            </h1>

            <div className="mt-7 h-px bg-blueprint-line/40 relative w-full max-w-md overflow-hidden">
              <div className="absolute inset-y-0 left-0 h-px bg-flag animate-drawline" />
            </div>

            <p className="mt-7 max-w-md text-lg text-blueprint-graphite opacity-0 animate-fadein">
              Motivated civil engineering graduate with hands-on academic and field experience, eager to apply theoretical knowledge to practical construction projects and site development.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 opacity-0 animate-fadein">
              <a
                href="/RESUME_NIRJALA%20PRAJAPATI.pdf"
                download
                className="inline-flex items-center gap-2 bg-blueprint-ink text-white px-6 py-3 text-sm font-medium hover:bg-flag transition-all duration-300 hover:scale-[1.05] shadow-[4px_4px_0_0_rgba(22,50,79,0.18)]"
              >
                Resume
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 4v10m0 0 3.5-3.5M12 14 8.5 10.5" />
                  <path d="M5 20h14" />
                </svg>
              </a>
              <a
                href="mailto:prajapatinirjala648@gmail.com"
                aria-label="Email Nirjala Prajapati"
                className="inline-flex items-center justify-center w-12 h-12 border border-blueprint-ink text-blueprint-ink hover:border-flag hover:text-flag transition-all duration-300 hover:scale-[1.1]"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/nirjala-prajapati-712641349/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Nirjala Prajapati on LinkedIn"
                className="inline-flex items-center justify-center w-12 h-12 border border-blueprint-ink text-blueprint-ink hover:border-flag hover:text-flag transition-all duration-300 hover:scale-[1.1]"
              >
                <LinkedIn className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* portrait */}
          <div className="order-1 md:order-3 w-60 sm:w-72 shrink-0 justify-self-center md:justify-self-end md:mt-20">
            {/* washi tape — peeled corner strips */}
            <span
              aria-hidden="true"
              className="absolute -left-3 -top-2 z-20 w-10 h-3 bg-flag/40 rotate-[-6deg]"
            />
            <span
              aria-hidden="true"
              className="absolute -right-3 top-6 z-20 w-10 h-3 bg-blueprint-line/25 rotate-[5deg]"
            />

            <div className="relative aspect-[3/4] border border-blueprint-line/50 bg-blueprint-panel/60 transition-transform duration-300 hover:scale-[1.03]">
              {[
                "top-1 left-1 border-t-2 border-l-2",
                "top-1 right-1 border-t-2 border-r-2",
                "bottom-1 left-1 border-b-2 border-l-2",
                "bottom-1 right-1 border-b-2 border-r-2",
              ].map((c) => (
                <span
                  key={c}
                  aria-hidden="true"
                  className={`absolute ${c} w-3 h-3 border-blueprint-line/60`}
                />
              ))}
              <div className="absolute inset-2 border border-dashed border-blueprint-line/30" />

              <svg
                viewBox="0 0 100 100"
                className="absolute inset-0 h-full w-full text-blueprint-line/50"
              >
                <line
                  x1="50"
                  y1="3"
                  x2="50"
                  y2="97"
                  stroke="currentColor"
                  strokeWidth="0.7"
                  strokeDasharray="6 4"
                />
                <line
                  x1="3"
                  y1="50"
                  x2="97"
                  y2="50"
                  stroke="currentColor"
                  strokeWidth="0.7"
                  strokeDasharray="6 4"
                />
                <circle cx="50" cy="50" r="1.4" fill="currentColor" stroke="none" />
              </svg>

              <img
                src="/niru.jpg"
                alt="Portrait of Nirjala Prajapati"
                className="absolute left-[10%] top-[10%] h-[80%] w-[80%] border border-blueprint-line/40 object-cover object-top"
              />
            </div>

            <div className="mt-4 flex items-center justify-center gap-2 font-mono text-[9px] tracking-[0.18em] text-blueprint-steel">
              <span className="h-px w-6 bg-blueprint-line/50" />
              FIG. 01 — SUBJECT N.P
              <span className="h-px w-6 bg-blueprint-line/50" />
            </div>

            <span className="absolute -right-2 -top-2 rotate-[12deg] border-2 border-flag/60 px-2 py-0.5 font-mono text-[9px] font-bold tracking-[0.15em] text-flag/80 shadow-sm z-30">
              APPROVED
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}