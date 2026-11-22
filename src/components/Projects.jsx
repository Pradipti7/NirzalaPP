import Sheet from "./Sheet.jsx";
import Reveal from "./Reveal.jsx";

const projects = [
  {
    title: "Prefeasibility Study of Kisedi Khola\nHydropower",
    org: "Final Year Project · Khwopa Engineering College",
    type: "Hydropower",
    year: "2025",
    role: "[my role]",
    summary:
      "Prefeasibility assessment of a run-of-river hydropower site covering hydrology, site layout, and preliminary design.",
    tools: ["HEC-RAS", "ArcGIS", "Civil 3D", "AutoCAD", "Overleaf (LaTeX)"],
  },
  {
    title: "Landslide Model, STEM Program (MoEST)",
    org: "STEM Program · Ministry of Education, Science and Technology",
    type: "Geotechnical",
    year: "[year]",
    role: "[my role]",
    summary:
      "Landslide model built for a STEM program organised by the Ministry of Education, Science and Technology.",
    tools: ["[physical model / software]"],
  },
];

function TitleBlockCell({ label, value }) {
  return (
    <div className="px-3 py-2">
      <p className="font-mono text-[8px] uppercase tracking-[0.22em] text-blueprint-steel">
        {label}
      </p>
      <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-blueprint-ink">
        {value}
      </p>
    </div>
  );
}

export default function Projects() {
  return (
    <Sheet title="Projects" kicker="Selected work" id="projects" className="bg-grid-paper bg-grid">
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={(i % 2) * 100}>
            <article className="group flex h-full flex-col border border-blueprint-hairline bg-blueprint-panel transition-all duration-300 hover:-translate-y-0.5 hover:border-blueprint-line/50 hover:shadow-[4px_4px_0_0_rgba(22,50,79,0.12)]">
              <div className="flex-1 p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="whitespace-pre-line font-display font-semibold leading-snug text-blueprint-ink">
                    {project.title}
                  </h3>
                  <span className="mt-1 h-[3px] w-6 shrink-0 bg-flag transition-all duration-300 group-hover:w-10" />
                </div>
                <p className="mt-1 text-sm text-blueprint-graphite">{project.org}</p>
                <p className="mt-3 text-sm leading-relaxed text-blueprint-graphite/80">
                  {project.summary}
                </p>
                <div className="mt-4">
                  <p className="font-mono text-[8px] uppercase tracking-[0.22em] text-blueprint-steel">
                    Tools
                  </p>
                  <div className="mt-1 flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="border border-blueprint-hairline px-2 py-0.5 font-mono text-[9px] tracking-[0.12em] text-blueprint-steel"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 divide-x divide-blueprint-hairline border-t border-blueprint-hairline sm:grid-cols-4">
                <TitleBlockCell label="Sheet" value={`0${i + 1}`} />
                <TitleBlockCell label="Type" value={project.type} />
                <TitleBlockCell label="Year" value={project.year} />
                <TitleBlockCell label="Role" value={project.role} />
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Sheet>
  );
}
