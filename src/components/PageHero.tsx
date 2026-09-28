type Props = { label: string; title: string; description: string };

export default function PageHero({ label, title, description }: Props) {
  return (
    <section className="hero-grid relative overflow-hidden border-b border-white/5">
      <div className="hero-glow pointer-events-none absolute inset-0" />
      <div className="site-container relative z-10 py-20 sm:py-24">
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[.25em] text-[#51b1e5]">{label}</p>
          <h1 className="mt-5 text-4xl font-semibold tracking-[-.04em] text-white sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">{description}</p>
        </div>
      </div>
    </section>
  );
}
