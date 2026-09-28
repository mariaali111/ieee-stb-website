type Props = {
  label?: string;
  title: string;
  description?: string;
};

export default function SectionHeading({ label, title, description }: Props) {
  return (
    <div className="max-w-2xl">
      {label && (
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-8 bg-[#0088cc]" />
          <span className="text-[11px] font-semibold uppercase tracking-[.22em] text-[#51b1e5]">{label}</span>
        </div>
      )}
      <h2 className="text-3xl font-semibold tracking-[-.03em] text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {description && <p className="mt-5 max-w-xl text-sm leading-7 text-white/50 sm:text-base">{description}</p>}
    </div>
  );
}
