import { ExternalLink, MapPin } from "lucide-react";
import { contactData, socialLinks } from "../data/contact";
import SocialBrandIcon from "../components/SocialBrandIcon";

export default function Contact() {
  return (
    <section className="contact-section section-block" id="contact">
      <div className="section-heading">
        <p className="eyebrow">{contactData.eyebrow}</p>
        <h2>{contactData.title}</h2>
      </div>

      <div className="contact-grid">
        <div className="contact-copy">
          <p>{contactData.text}</p>

          <div className="contact-note">
            <MapPin size={18} />
            <span>{contactData.address}</span>
          </div>
        </div>

        <div className="social-grid">
          {socialLinks.map((social) => (
            <a
              className="social-card"
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noreferrer"
            >
              <div className={`social-icon social-icon-${social.name.toLowerCase()}`}>
                <SocialBrandIcon name={social.name} />
              </div>
              <div>
                <strong>{social.name}</strong>
                <span>{social.handle}</span>
              </div>
              <ExternalLink size={16} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
