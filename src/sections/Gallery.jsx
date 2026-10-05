/*import { galleryData } from "../data/gallery";

export default function Gallery({ onOpenImage }) {
  return (
    <section className="next-section" id="gallery">
      <p className="eyebrow">{galleryData.eyebrow}</p>
      <h2>{galleryData.title}</h2>
      <p>{galleryData.text}</p>

      {galleryData.images.length > 0 && (
        <div className="gallery-grid">
          {galleryData.images.map((img) => (
            <button
              key={img.src}
              type="button"
              className="gallery-item"
              onClick={() => onOpenImage(img)}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
  */
