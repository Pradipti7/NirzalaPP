import { CompassRose } from "./Icons.jsx";
import RulerStrip from "./RulerStrip.jsx";
import Reveal from "./Reveal.jsx";

const gridTexture = {
  backgroundImage:
    "linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px)",
  backgroundSize: "28px 28px",
};

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-blueprint-ink text-white overflow-hidden scroll-mt-14">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={gridTexture}
      />
      <div className="relative">
        <RulerStrip />
        <div className="max-w-5xl mx-auto px-6 sm:px-10 pt-16 sm:pt-20 pb-6 sm:pb-8">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-8">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-white/50">
                  End of set
                </p>
                <h2 className="mt-4 font-display font-semibold text-4xl sm:text-5xl md:text-6xl tracking-tight text-balance">
                  Let's build something.
                </h2>
                <p className="mt-4 text-white/70 max-w-sm">
                  Open to graduate civil engineering roles, site work, and
                  drafting projects. Based in Mahalaxmi, Lalitpur.
                </p>
              </div>
              <CompassRose className="w-14 h-14 text-white/25 hidden sm:block" />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="mailto:prajapatinirjala648@gmail.com"
                className="group inline-flex items-center gap-2 bg-flag text-white px-6 py-3 text-sm font-medium hover:bg-flag-dark transition-all duration-300 hover:scale-105 shadow-[4px_4px_0_0_rgba(0,0,0,0.35)]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-[-1px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="5" width="18" height="14" rx="1" />
                  <path d="M3 7 L12 13 L21 7" />
                </svg>
                prajapatinirjala648@gmail.com
              </a>
            </div>
          </Reveal>

          <div className="mt-14 pt-6 border-t border-white/15 flex flex-wrap justify-between gap-3 text-xs text-white/50 font-mono">
              <span>Nirjala Prajapati — Civil Engineer</span>
              <span>© 2026 Nirjala Prajapati</span>
            </div>
        </div>
      </div>
    </footer>
  );
}