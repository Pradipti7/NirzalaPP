import useInView from "../hooks/useInView.js";

export default function Reveal({
  as: Tag = "div",
  delay = 0,
  className = "",
  children,
  ...rest
}) {
  const [ref, inView] = useInView();
  const style = delay ? { animationDelay: `${delay}ms` } : undefined;

  return (
    <Tag
      ref={ref}
      style={style}
      className={`${className} opacity-0 translate-y-3.5 ${inView ? "animate-fadeup" : ""}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}