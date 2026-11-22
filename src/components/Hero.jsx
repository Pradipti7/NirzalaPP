import { LinkedIn, Mail } from "./Icons.jsx";

export default function Hero() {
  const draw = "[stroke-dasharray:100] animate-draw";

  return (
    <header
      id="top"
      className="relative isolate animate-grid-drift overflow-hidden bg-grid-paper bg-grid"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <div className="animate-hatch-drift absolute -inset-x-1/4 inset-y-0 bg-[repeating-linear-gradient(135deg,rgba(22,50,79,0.05)_0px,rgba(22,50,79,0.05)_1px,transparent_1px,transparent_12px)]" />
        <div className="animate-sweep absolute inset-y-0 -left-1/3 w-2/3 bg-gradient-to-r from-transparent via-flag/[0.045] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blueprint-line/25 to-transparent" />

        <svg
          viewBox="0 0 64 64"
          className="animate-drift-b absolute left-[5%] top-[14%] h-16 w-16 text-blueprint-ink opacity-10"
        >
          <g fill="none" stroke="currentColor" strokeWidth="1">
            <circle cx="24" cy="24" r="10" />
            <path d="M24 4v12M24 32v12M4 24h12M32 24h12" />
            <circle cx="48" cy="46" r="6" />
            <path d="M48 34v6M48 52v6M36 46h6M54 46h6" />
          </g>
          <circle cx="24" cy="24" r="1.5" fill="currentColor" stroke="none" />
        </svg>

        <svg
          viewBox="0 0 120 32"
          className="animate-rotate-a absolute right-[7%] top-[9%] h-8 w-28 text-blueprint-ink opacity-10"
        >
          <g fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M6 18h108" />
            <path d="M6 14 2 18l4 4M114 14l4 4-4 4" />
            <path d="M14 8v20M106 8v20" />
          </g>
          <text
            x="60"
            y="11"
            textAnchor="middle"
            fill="currentColor"
            fontFamily="IBM Plex Mono, monospace"
            fontSize="7"
            letterSpacing="1"
          >
            12.50 m
          </text>
        </svg>

        <svg
          viewBox="0 0 96 64"
          className="animate-drift-a absolute bottom-[13%] left-[3%] h-16 w-24 text-blueprint-ink opacity-10"
        >
          <g fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M4 56h88M4 48h88" />
            <path d="M8 48 32 12 56 48 80 12 92 48" />
            <path d="M32 12v36M56 48V12M80 12v36" />
          </g>
        </svg>

        <svg
          viewBox="0 0 96 48"
          className="animate-rotate-b absolute bottom-[7%] right-[9%] h-12 w-24 text-blueprint-ink opacity-10"
        >
          <g fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M0 12h96M0 18h96" />
            <path d="M24 18v24h12V18M60 18v24h12V18" />
            <path d="M20 42h20M56 42h20" />
            <path d="M30 24l6 6M66 24l6 6" />
          </g>
        </svg>

        <svg
          viewBox="0 0 40 100"
          className="animate-rotate-c absolute right-[2%] top-[43%] h-24 w-10 text-blueprint-ink opacity-10"
        >
          <g fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M20 4v92" strokeDasharray="4 4" />
            <path d="M10 4h20M10 96h20" />
            <circle cx="20" cy="50" r="4" />
            <path d="M20 42v16M12 50h16" />
          </g>
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 pb-16 pt-4 sm:px-10 sm:pb-24 sm:pt-8">
        <div className="mt-6 grid grid-cols-1 items-stretch gap-10 md:grid-cols-[minmax(0,1fr)_auto] md:gap-6">
          <div className="relative order-2 flex min-w-0 flex-col">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 hidden w-6 -translate-x-full -ml-2 md:block"
            >
              <svg
                viewBox="0 0 24 100"
                preserveAspectRatio="none"
                className="absolute inset-0 h-full w-full text-blueprint-line/60"
              >
                <path
                  d="M12 0V100"
                  pathLength={100}
                  stroke="currentColor"
                  strokeWidth="0.6"
                  className="[stroke-dasharray:100] animate-draw"
                />
                <path
                  d="M6 0H18M6 100H18"
                  pathLength={100}
                  stroke="currentColor"
                  strokeWidth="0.8"
                  className="[stroke-dasharray:100] animate-draw [animation-delay:100ms]"
                />
              </svg>
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap bg-blueprint-paper px-1.5 font-mono text-[9px] tracking-[0.2em] text-blueprint-steel">
                ELEV. +3.00
              </span>
            </div>

            <h1 className="font-display font-semibold text-blueprint-ink tracking-tight leading-[0.92] text-6xl sm:text-8xl text-balance">
              <span className="block text-2xl sm:text-4xl font-medium text-blueprint-steel tracking-normal leading-none opacity-0 [animation:fadeup_0.5s_ease-out_0.1s_forwards]">
                I am
              </span>
              <span className="mt-1 block opacity-0 [animation:fadeup_0.6s_ease-out_0.25s_forwards] sm:mt-2">
                <span className="block origin-left transition-transform duration-300 hover:scale-[1.02]">
                  Nirjala
                  <br />
                  Prajapati
                </span>
              </span>
            </h1>

            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-blueprint-steel opacity-0 animate-fadein sm:text-[11px]">
              Civil engineer · Site development · Structural design
            </p>

            <div className="mt-7 h-px bg-blueprint-line/40 relative w-full max-w-xl overflow-hidden">
              <div className="absolute inset-y-0 left-0 h-px bg-flag animate-drawline" />
            </div>

            <p className="mt-6 max-w-xl text-lg text-blueprint-graphite opacity-0 animate-fadein">
              Motivated civil engineering graduate with hands-on academic and field experience, eager to apply theoretical knowledge to practical construction projects and site development.
            </p>

            <div className="mt-auto flex flex-wrap gap-4 pt-8 opacity-0 animate-fadein">
              <a
                href="RESUME_NIRJALA%20PRAJAPATI.pdf"
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

            <div className="relative">
              <svg
                aria-hidden="true"
                viewBox="0 0 400 520"
                preserveAspectRatio="none"
                className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[calc(100%_+_5rem)] w-[calc(100%_+_5rem)] -translate-x-1/2 -translate-y-1/2 text-blueprint-line/25"
              >
                <g fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M0 470H400M0 476H400" pathLength={100} vectorEffect="non-scaling-stroke" className={draw} />
                  <path d="M12 470 2 486M36 470 26 486M60 470 50 486M340 470 330 486M364 470 354 486M388 470 378 486" pathLength={100} vectorEffect="non-scaling-stroke" className={`${draw} [animation-delay:50ms]`} />
                  <path d="M56 300h288M56 310h288" pathLength={100} vectorEffect="non-scaling-stroke" className={`${draw} [animation-delay:100ms]`} />
                  <path d="M72 300V180H328V300" pathLength={100} vectorEffect="non-scaling-stroke" className={`${draw} [animation-delay:150ms]`} />
                  <path d="M72 180 132 300 192 180 252 300 312 180 328 300M72 300 132 180 192 300 252 180 312 300" pathLength={100} vectorEffect="non-scaling-stroke" className={`${draw} [animation-delay:200ms]`} />
                  <path d="M132 180v120M192 180v120M252 180v120M312 180v120" pathLength={100} vectorEffect="non-scaling-stroke" className={`${draw} [animation-delay:250ms]`} />
                  <path d="M72 300v170M328 300v170M60 300h24v170H60zM316 300h24v170h-24z" pathLength={100} vectorEffect="non-scaling-stroke" className={`${draw} [animation-delay:300ms]`} />
                  <path d="M200 40v460" pathLength={100} vectorEffect="non-scaling-stroke" className={`${draw} [animation-delay:150ms]`} />
                  <path d="M40 100H360M40 94v12M360 94v12M72 120V94M328 120V94" pathLength={100} vectorEffect="non-scaling-stroke" className={`${draw} [animation-delay:50ms]`} />
                </g>
                <g fill="currentColor" className="opacity-0 [animation:fadein_0.6s_ease-out_0.9s_forwards]">
                  <circle cx="72" cy="180" r="2" />
                  <circle cx="132" cy="300" r="2" />
                  <circle cx="192" cy="180" r="2" />
                  <circle cx="252" cy="300" r="2" />
                  <circle cx="312" cy="180" r="2" />
                </g>
                <text
                  x="200"
                  y="92"
                  textAnchor="middle"
                  fill="currentColor"
                  className="opacity-0 [animation:fadein_0.6s_ease-out_0.9s_forwards]"
                  fontFamily="IBM Plex Mono, monospace"
                  fontSize="9"
                  letterSpacing="2"
                >
                  SPAN 24.00 m
                </text>
                <text
                  x="200"
                  y="505"
                  textAnchor="middle"
                  fill="currentColor"
                  className="opacity-0 [animation:fadein_0.6s_ease-out_0.9s_forwards]"
                  fontFamily="IBM Plex Mono, monospace"
                  fontSize="8"
                  letterSpacing="2"
                >
                  TRUSS ELEVATION — TYP.
                </text>
              </svg>

              <div className="animate-build -m-4 p-4">
                <div className="group relative z-10 aspect-[3/4] -rotate-[1.5deg] border border-blueprint-line/60 bg-blueprint-panel p-2 shadow-[10px_10px_0_0_#16324F] transition-[transform,box-shadow] duration-300 hover:rotate-0 hover:scale-[1.03] hover:shadow-[14px_14px_0_0_#16324F] hover:ring-2 hover:ring-[#F6DE8A]/80">
                  <div className="relative h-full w-full overflow-hidden border border-blueprint-ink/20">
                    <img
                      src="niru.jpg"
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
              </div>
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
