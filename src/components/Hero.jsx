import { LinkedIn, Mail } from "./Icons.jsx";

export default function Hero() {
  return (
    <header
      id="top"
      className="relative bg-grid-paper bg-grid overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-10 pt-4 sm:pt-8 pb-16 sm:pb-24">
        <div className="mt-6 grid grid-cols-1 items-stretch gap-10 md:grid-cols-[minmax(0,1fr)_auto] md:gap-6">
          <div className="relative order-2 flex min-w-0 flex-col">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 hidden w-6 -translate-x-full -ml-2 md:block"
            >
              <span className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-blueprint-line/50" />
              <span className="absolute left-1/2 top-0 h-px w-3 -translate-x-1/2 bg-blueprint-line/60" />
              <span className="absolute bottom-0 left-1/2 h-px w-3 -translate-x-1/2 bg-blueprint-line/60" />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap bg-blueprint-paper px-1.5 font-mono text-[9px] tracking-[0.2em] text-blueprint-steel">
                ELEV. +3.00
              </span>
            </div>

            <h1 className="font-display font-semibold text-blueprint-ink tracking-tight leading-[0.92] text-6xl sm:text-8xl text-balance">
              <span className="block text-2xl sm:text-4xl font-medium text-blueprint-steel tracking-normal leading-none">
                I am
              </span>
              <span className="mt-1 block origin-left transition-transform duration-300 hover:scale-[1.02] sm:mt-2">
                Nirjala
                <br />
                Prajapati
              </span>
            </h1>

            <div className="mt-7 h-px bg-blueprint-line/40 relative w-full max-w-xl overflow-hidden">
              <div className="absolute inset-y-0 left-0 h-px bg-flag animate-drawline" />
            </div>

            <p className="mt-6 max-w-xl text-lg text-blueprint-graphite opacity-0 animate-fadein">
              Motivated civil engineering graduate with hands-on academic and field experience, eager to apply theoretical knowledge to practical construction projects and site development.
            </p>

            <div className="mt-auto flex flex-wrap gap-4 pt-8 opacity-0 animate-fadein">
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
          <div className="relative order-1 flex w-64 flex-col sm:w-72 md:order-3 md:w-80 md:justify-self-end">
            {/* washi tape — peeled corner strips */}
            <span
              aria-hidden="true"
              className="absolute -left-3 -top-2 z-20 w-10 h-3 bg-flag/40 rotate-[-6deg]"
            />
            <span
              aria-hidden="true"
              className="absolute -right-3 top-6 z-20 w-10 h-3 bg-blueprint-line/25 rotate-[5deg]"
            />

            <div className="group relative aspect-[3/4] -rotate-[1.5deg] border border-blueprint-line/60 bg-blueprint-panel p-2 shadow-[10px_10px_0_0_#16324F] transition-[transform,box-shadow] duration-300 hover:scale-[1.03] hover:ring-2 hover:ring-[#F6DE8A]/80">
              <div className="relative h-full w-full overflow-hidden border border-blueprint-ink/20">
                <img
                  src="/niru.jpg"
                  alt="Portrait of Nirjala Prajapati"
                  className="absolute inset-0 h-full w-full object-cover object-top transition-[filter] duration-500 group-hover:brightness-110 group-hover:saturate-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-[#F6DE8A] opacity-0 mix-blend-soft-light transition-opacity duration-500 group-hover:opacity-30" />

                <div className="pointer-events-none absolute inset-y-0 left-0 w-4 border-r border-blueprint-line/40 bg-blueprint-paper/80 transition-opacity duration-500 group-hover:opacity-0">
                  {[18, 38, 58, 78].map((top) => (
                    <span
                      key={top}
                      style={{ top: `${top}%` }}
                      className="absolute right-0 h-px w-2 bg-blueprint-line/70"
                    />
                  ))}
                </div>

                <svg
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  className="pointer-events-none absolute inset-0 h-full w-full text-blueprint-ink/30"
                >
                  <path
                    d="M0 0h8M0 0v8M100 0h-8M100 0v8M0 100h8M0 100v-8M100 100h-8M100 100v-8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                  />
                </svg>

                <span className="absolute right-2 top-2 bg-flag px-1.5 py-0.5 font-mono text-[8px] font-bold tracking-[0.18em] text-white">
                  PL. 01
                </span>
                <span className="absolute bottom-2 right-2 font-mono text-[8px] tracking-[0.18em] text-blueprint-ink/70">
                  PHOTO / 01
                </span>
              </div>

              <span className="pointer-events-none absolute -left-5 top-1/2 hidden -translate-y-1/2 -rotate-90 whitespace-nowrap font-mono text-[8px] tracking-[0.3em] text-blueprint-steel sm:block">
                PHOTOGRAPHIC PLATE
              </span>
            </div>

            <div className="mt-auto flex items-center justify-center gap-2 pt-4 font-mono text-[9px] tracking-[0.18em] text-blueprint-steel">
              <span className="h-px w-6 bg-blueprint-line/50" />
              FIG. 01 — NIRJALA PRAJAPATI
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
