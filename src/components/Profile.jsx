import Sheet from "./Sheet.jsx";
import Reveal from "./Reveal.jsx";

const details = [
  ["Name", "Nirjala Prajapati"],
  ["Email", "prajapatinirjala648@gmail.com"],
  ["Education", "Bachelor in Civil Engineering"],
  ["University", "Khwopa Engineering College"],
  ["Location", "Mahalaxmi, Lalitpur"],
  ["Languages", "Nepali, English"],
];

export default function Profile() {
  return (
    <Sheet title="Profile" id="profile">
      <Reveal className="max-w-3xl border-l-4 border-flag/60 pl-6 sm:pl-8">
        <p className="mt-4 text-base sm:text-lg leading-relaxed text-blueprint-graphite/90">
          During my internship, I gained practical exposure to construction
          workflows—reviewing drawings against site conditions, assisting with
          level marking, and maintaining project documentation. This experience
          strengthened my ability to bridge design intent with on-site reality.
          I am confident in using AutoCAD and related engineering tools, and I
          approach unfamiliar tasks with a willingness to learn and adapt to
          organisational standards.
        </p>
      </Reveal>

      <dl className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
        {details.map(([label, value], i) => (
          <Reveal
            key={label}
            delay={i * 80}
            className="group border-t border-blueprint-hairline pt-4 transition-colors duration-300 hover:border-blueprint-line/50"
          >
            <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-blueprint-steel transition-colors duration-300 group-hover:text-flag">
              {label}
            </dt>
            <dd className="mt-1.5 text-blueprint-graphite inline-block origin-left transition-transform duration-300 group-hover:scale-105">
              {value}
            </dd>
          </Reveal>
        ))}
      </dl>
    </Sheet>
  );
}