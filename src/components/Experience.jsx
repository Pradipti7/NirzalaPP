import Sheet from "./Sheet.jsx";
import Reveal from "./Reveal.jsx";
import { SurveyPin } from "./Icons.jsx";

const roles = [
  {
    title: "Teaching Assistant",
    org: "Khwopa Engineering College",
    place: "Libali, Bhaktapur",
    period: "Aug 2025 – May 2026",
    points: [
      "Facilitated engaging learning experiences for diverse student groups.",
      "Assisted in surveying fieldwork, instrument handling, and measurements.",
      "Supported students during labs and practical exercises.",
      "Gained exposure to drone surveying and GNSS applications.",
    ],
  },
  {
    title: "Civil Engineering Intern",
    org: "Road Division Office",
    place: "Bhaktapur",
    period: "Mar 2025 – May 2025",
    points: [
      "Gained hands-on experience in construction site management.",
      "Assisted in site inspections and ensured compliance with safety standards.",
      "Supported site supervision and construction management activities.",
      "Assisted in supervising bridge construction works at Mahadev Khola Bridge (Gundu) and Hanumante Khola Bridge (Saagbari).",
    ],
  },
];

const corners = [
  "top-0 left-0 border-t-2 border-l-2",
  "top-0 right-0 border-t-2 border-r-2",
  "bottom-0 left-0 border-b-2 border-l-2",
  "bottom-0 right-0 border-b-2 border-r-2",
];

const CornerTicks = () =>
  corners.map((c) => (
    <span
      key={c}
      aria-hidden="true"
      className={`absolute w-3 h-3 ${c} border-blueprint-line/40 pointer-events-none`}
    />
  ));

export default function Experience() {
  return (
    <Sheet title="Experience" id="experience">
      <div className="space-y-12">
        {roles.map((r, i) => (
          <Reveal key={r.title} delay={i * 120}>
            <div className="relative border border-blueprint-hairline bg-blueprint-panel hover:border-blueprint-line/50 transition-all duration-300 hover:scale-[1.02]">
              <CornerTicks />
              <div className="flex flex-wrap items-start justify-between gap-3 px-5 sm:px-6 py-4 border-b border-blueprint-hairline">
                <div className="flex items-start gap-3">
                  <SurveyPin className="w-7 h-7 mt-0.5 text-flag shrink-0" />
                <div>
                  <h3 className="font-display font-semibold text-lg text-blueprint-ink">
                    {r.title}
                  </h3>
                  <p className="text-sm text-blueprint-graphite">
                    {r.org}, {r.place}
                  </p>
                </div>
              </div>
              <span className="font-mono text-[11px] text-blueprint-ink bg-blueprint-paper border border-blueprint-hairline px-2 py-1 whitespace-nowrap">
                {r.period}
              </span>
            </div>
            <ul className="px-5 sm:px-6 py-4 space-y-2.5">
              {r.points.map((p) => (
                <li
                  key={p}
                  className="text-sm text-blueprint-graphite pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-px before:bg-blueprint-line"
                >
                  {p}
                </li>
              ))}
            </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Sheet>
  );
}