export default function RulerStrip() {
  return (
    <div
      aria-hidden="true"
      className="h-3 w-full"
      style={{
        backgroundImage:
          "repeating-linear-gradient(90deg, #7C8791 0px, #7C8791 1px, transparent 1px, transparent 8px)",
        backgroundPosition: "0 100%",
        backgroundSize: "8px 60%",
        backgroundRepeat: "repeat-x",
        opacity: 0.5,
      }}
    />
  );
}
