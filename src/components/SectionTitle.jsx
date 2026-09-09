export default function SectionTitle({
  eyebrow,
  title,
  description,
  center = false,
}) {
  return (
    <div className={`mb-14 max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <div
        className={`mb-4 flex items-center gap-3 ${
          center ? "justify-center" : ""
        }`}
      >
        <span className="h-px w-8 bg-indigo-500" />

        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-400">
          {eyebrow}
        </p>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-7 text-zinc-400 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
