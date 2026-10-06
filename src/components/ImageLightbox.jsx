import { X } from "lucide-react";

export default function ImageLightbox({ image, onClose }) {
  if (!image) return null;

  return (
    <div className="image-lightbox" role="presentation" onClick={onClose}>
      <button className="lightbox-close" type="button" onClick={onClose} aria-label="Close image viewer">
        <X size={22} />
        <span>Close</span>
      </button>

      <div className="lightbox-frame" onClick={(e) => e.stopPropagation()}>
        <img src={image.src} alt={image.alt} />
      </div>

      <span className="lightbox-caption">Click outside or use Close to return</span>
    </div>
  );
}
