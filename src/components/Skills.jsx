import Sheet from "./Sheet.jsx";
import Reveal from "./Reveal.jsx";
import { Blueprint, Beam, DraftingTool } from "./Icons.jsx";

const groups = [
  {
    label: "Drafting & modeling",
    icon: Blueprint,
    items: ["AutoCAD — 2D drawings, plans and layouts", "Revit — basic BIM modeling and drafting", "Civil 3D"],
  },
  {
    label: "Survey & site data",
    icon: DraftingTool,
    items: ["Arc GIS (basic)", "SW DTM", "SW Road"],
  },
  {
    label: "Reporting",
    icon: Beam,
    items: ["MS Excel", "MS Word — reports and documentation", "MS PowerPoint — technical presentations"],
  },
];

export default function Skills() {
  return (
    <Sheet title="Skills & tools" kicker="Legend" id="skills">
      <div className="grid sm:grid-cols-3 gap-x-8 gap-y-12">
        {groups.map(({ label, icon: Icon, items }, gi) => (
          <Reveal key={label} delay={gi * 100} className="group">
            <div className="pl-5 sm:pl-6 border-l-2 border-blueprint-line/30 transition-colors duration-300 hover:border-blueprint-line/70">
              <span className="font-mono text-[10px] tracking-[0.2em] text-blueprint-steel transition-colors duration-300 group-hover:text-flag">
                S-0{gi + 1}
              </span>
              <div className="mt-1.5 flex items-center gap-2.5 text-blueprint-ink origin-left transition-transform duration-300 group-hover:scale-105">
                <Icon className="w-5 h-5" />
                <h3 className="font-display font-semibold">{label}</h3>
              </div>
              <ul className="mt-4 space-y-2.5">
                {items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-blueprint-graphite pl-3 border-l border-blueprint-hairline"
                  >
                    {item}
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