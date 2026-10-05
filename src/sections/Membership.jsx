import { membershipData } from "../data/membership";

export default function Membership() {
  return (
    <section className="next-section" id="membership">
      <p className="eyebrow">{membershipData.eyebrow}</p>
      <h2>{membershipData.title}</h2>
      <p>{membershipData.text}</p>
    </section>
  );
}
