import Sheet from "./Sheet.jsx";
import Reveal from "./Reveal.jsx";

const projects = [
  {
    title: "Pre-Feasibility Study of Kisedi Khola\nSmall Hydropower Project",
    org: "Khwopa Engineering College",
    type: "Hydropower",
    year: "2025",
    badges: [{ label: "FINAL YEAR PROJECT", tone: "navy" }],
    summary:
      "Prefeasibility assessment of a run-of-river hydropower site covering hydrology, site layout, and preliminary design.",
    tools: ["HEC-RAS", "ArcGIS", "Civil 3D", "AutoCAD", "Overleaf (LaTeX)"],
  },
  {
    title: "Landslide Model: Debris Flow and Rotational Failure",
    org: "Winner, Civil 3D Competition · Top 10, National STEM Model Competition 2024 (MoEST)",
    type: "Geotechnical",
    year: "2024",
    badges: [
      { label: "WINNER", tone: "orange" },
      { label: "TOP 10", tone: "orange" },
    ],
    summary:
      "Built a physical landslide model demonstrating two failure mechanisms, debris flow and rotational landslide. Won the Civil 3D competition and was selected in the top 10 at the 2024 STEM model competition held by the Ministry of Education, Nepal.",
    tools: ["Physical model"],
  },
  {
    title: "Paper Arch Bridge",
    org: "Paper Bridge Competition · Winner",
    type: "Structural",
    badges: [{ label: "WINNER", tone: "orange" }],
    summary:
      "Designed and built an arch bridge from paper to demonstrate load-carrying behaviour under loading. Won the competition.",
    tools: ["Paper model"],
  },
  {
    title: "Geotechnical Model Competition 2024",
    org: "Organised by GeoMandu · Nationwide · 2nd Runner-up",
    type: "Geotechnical",
    year: "2024",
    badges: [{ label: "2ND RUNNER-UP", tone: "orange" }],
    summary:
      "Competed in a nationwide geotechnical model competition organised by GeoMandu in 2024 and placed 2nd runner-up.",
  },
];

const isPlaceholder = (value) => /^\[.*\]$/.test(String(value).trim());
const hasValue = (value) =>
  value != null && String(value).trim() !== "" && !isPlaceholder(value);
const visibleTools = (project) => (project.tools ?? []).filter(hasValue);

function Badge({ label, tone }) {
  const toneClass =
    tone === "navy" ? "bg-blueprint-ink text-white" : "bg-flag text-white";

  return (
    <span
      className={`px-2 py-0.5 font-mono text-[8px] uppercase tracking-[0.18em] ${toneClass}`}
    >
      {label}
    </span>
  );
}

function TitleBlockCell({ label, value }) {
  return (
    <div className="min-w-0 flex-1">
      <dt className="font-mono text-[8px] uppercase tracking-[0.22em] text-blueprint-steel">
        {label}
      </dt>
      <dd className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-blueprint-ink">
        {value}
      </dd>
    </div>
  );
}

export default function Projects() {
  return (
    <Sheet title="Projects" kicker="Selected work" id="projects" className="bg-grid-paper bg-grid">
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={(i % 2) * 100}>
            <article className="group flex h-full flex-col border border-blueprint-hairline border-b-[3px] border-b-blueprint-ink bg-blueprint-panel transition-all duration-300 hover:-translate-y-0.5 hover:border-b-flag hover:shadow-[4px_4px_0_0_rgba(22,50,79,0.12)]">
              <div className="flex-1 p-6">
                {project.badges?.length > 0 && (
                  <div className="mb-3 flex flex-wrap gap-2">
                    {project.badges.map((badge) => (
                      <Badge
                        key={badge.label}
                        label={badge.label}
                        tone={badge.tone}
                      />
                    ))}
                  </div>
                )}
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
                {/* Tools row is omitted until the project has real tools */}
                {visibleTools(project).length > 0 && (
                  <div className="mt-4">
                    <p className="font-mono text-[8px] uppercase tracking-[0.22em] text-blueprint-steel">
                      Tools
                    </p>
                    <div className="mt-1 flex flex-wrap gap-2">
                      {visibleTools(project).map((tool) => (
                        <span
                          key={tool}
                          className="border border-blueprint-hairline px-2 py-0.5 font-mono text-[9px] tracking-[0.12em] text-blueprint-steel"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              {/* Inset row: padding matches the body, so the dashed rule stops at the card gutter */}
              <div className="px-6 pb-5">
                <dl className="flex flex-wrap gap-x-8 gap-y-4 border-t border-dashed border-blueprint-hairline pt-4">
                  <TitleBlockCell label="Sheet" value={`0${i + 1}`} />
                  <TitleBlockCell label="Type" value={project.type} />
                  {/* Missing or placeholder values are not rendered */}
                  {hasValue(project.year) && (
                    <TitleBlockCell label="Year" value={project.year} />
                  )}
                </dl>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Sheet>
  );
}
