import PageHero from "../components/PageHero";
import { gallery } from "../data/gallery";

export default function Gallery() {
  return (
    <>
      <PageHero label="Gallery" title="Moments from our community." description="Dummy placeholders for workshops, technical events and student activities. Actual photographs can be added later." />
      <section className="bg-[#07090c] py-24">
        <div className="site-container grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item, index) => (
            <article key={item.id} className={`gallery-card soft-lift relative overflow-hidden rounded-xl border border-white/10 transition duration-300 hover:border-[#0088cc]/30 ${index % 5 === 0 ? "lg:col-span-2" : ""}`}>
              <div className={`flex items-end p-6 ${index % 5 === 0 ? "min-h-[330px]" : "min-h-[260px]"}`}>
                <div><p className="text-[10px] font-semibold uppercase tracking-[.2em] text-[#62bce8]">{item.category}</p><h2 className="mt-2 text-lg font-semibold text-white">{item.title}</h2></div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
