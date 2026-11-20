import Sheet from "./Sheet.jsx";
import Reveal from "./Reveal.jsx";
import { Seal } from "./Icons.jsx";

const certs = [
  {
    title: "NEC Registered Civil Engineer",
    org: "Nepal Engineering Council",
  },
  {
    title: "Revit Building Information Modeling Software",
    org: "Khwopa Engineering College",
  },
  {
    title: "AutoCAD and Municipal Drawing",
    org: "NextStep InfoTech Training Center Pvt. Ltd.",
  },
  {
    title: "Introductory Course on GIS Software",
    org: "Khwopa Engineering College",
  },
  {
    title: "Design and Estimation of Road using SW Road V2",
    org: "Nepal Engineering Academy and Consult Pvt. Ltd.",
  },
];

export default function Certifications() {
  return (
    <Sheet
      title="Certifications & training"
      kicker="Stamped and sealed"
      id="certifications"
    >
      <div className="grid sm:grid-cols-2 gap-6">
        {certs.map((c, i) => (
          <Reveal key={c.title} delay={(i % 2) * 100}>
            <div className="flex gap-4 items-center border border-blueprint-hairline bg-blueprint-panel p-5 hover:border-blueprint-line/50 transition-all duration-300 hover:scale-[1.02]">
              <Seal className="w-10 h-10 text-blueprint-line shrink-0" />
              <div>
                <h3 className="font-display font-semibold text-blueprint-ink leading-snug">
                  {c.title}
                </h3>
                <p className="text-sm text-blueprint-steel mt-0.5">{c.org}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Sheet>
  );
}