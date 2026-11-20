import Sheet from "./Sheet.jsx";
import Reveal from "./Reveal.jsx";
import { Ribbon } from "./Icons.jsx";

const achievements = [
  {
    title: "Geotechnical Model Competition 2024",
    org: "Nepal Geotechnical Society",
  },
  {
    title: "Civil Engineering Model Competition 2024",
    org: "Khwopa Engineering College",
  },
  {
    title: "STEAM Material Design Competition",
    org: "Government of Nepal",
  },
  {
    title: "Participant, NGS International Conference 2024",
    org: "Nepal Geotechnical Society",
  },
];

export default function Achievements() {
  return (
    <Sheet title="Achievements" id="achievements">
      <div className="grid sm:grid-cols-2 gap-6">
        {achievements.map((a, i) => (
          <Reveal key={a.title} delay={(i % 2) * 100}>
            <div className="flex gap-4 items-start border border-blueprint-hairline bg-blueprint-panel p-5 hover:border-blueprint-line/50 transition-all duration-300 hover:scale-[1.02]">
              <Ribbon className="w-7 h-7 text-flag shrink-0 mt-0.5" />
              <div>
                <h3 className="font-display font-semibold text-blueprint-ink leading-snug">
                  {a.title}
                </h3>
                <p className="text-sm text-blueprint-steel mt-0.5">{a.org}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Sheet>
  );
}