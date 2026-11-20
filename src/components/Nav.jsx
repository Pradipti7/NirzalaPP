const links = [
  ["Profile", "#profile"],
  ["Education", "#education"],
  ["Skills", "#skills"],
  ["Experience", "#experience"],
  ["Achievements", "#achievements"],
  ["Certificates", "#certifications"],
];

export default function Nav() {
  return (
    <nav className="sticky top-0 z-20 bg-blueprint-paper/90 backdrop-blur border-b border-blueprint-hairline">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 h-14 flex items-center gap-6 sm:gap-8 overflow-x-auto">
        <a href="#top" className="flex items-baseline gap-1.5 shrink-0 group">
          <span className="font-display font-bold text-blueprint-ink leading-none whitespace-nowrap">
            Nirjala Prajapati
          </span>
        </a>
        <span
          aria-hidden="true"
          className="w-px h-5 bg-blueprint-hairline shrink-0"
        />
        <div className="flex items-center gap-5 sm:gap-7 ml-auto">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="relative text-sm text-blueprint-graphite hover:text-blueprint-ink transition-colors whitespace-nowrap flex items-baseline gap-1.5 py-2 before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-0 before:bg-flag before:transition-all before:duration-300 hover:before:w-full"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}