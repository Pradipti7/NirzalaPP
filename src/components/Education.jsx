import Sheet from "./Sheet.jsx";
import Reveal from "./Reveal.jsx";

const education = [
  {
    degree: "Bachelor in Civil Engineering",
    school: "Khwopa Engineering College",
    period: "2020 – 2025",
    detail: "CGPA 3.61 / 4.0",
  },
  {
    degree: "+2 Level, Science",
    school: "Capital Secondary School",
    period: "2018 – 2020",
    detail: "CGPA 3.50 / 4.0",
  },
];

export default function Education() {
  return (
    <Sheet title="Education" id="education">
      <div className="relative pl-6 sm:pl-8">
        <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-blueprint-line/70 via-blueprint-line/40 to-transparent" />
        <ul className="space-y-10">
          {education.map((e, i) => (
            <Reveal as="li" key={e.degree} delay={i * 120} className="relative group">
              <span className="absolute -left-[30px] sm:-left-[38px] top-1.5 w-3 h-3 rounded-full border-2 border-flag bg-blueprint-paper" />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display font-semibold text-xl text-blueprint-ink inline-block origin-left transition-transform duration-300 group-hover:scale-105">
                  {e.degree}
                </h3>
                <span className="font-mono text-xs text-blueprint-steel transition-colors duration-300 group-hover:text-flag">
                  {e.period}
                </span>
              </div>
              <p className="text-blueprint-graphite mt-1">{e.school}</p>
              <p className="font-mono text-sm text-blueprint-line mt-1">
                {e.detail}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </Sheet>
  );
}