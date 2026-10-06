import {
  Users,
  CircleCheck,
  Heart,
  Share2,
} from "lucide-react";

import { membershipData } from "../data/membership";

const icons = {
  users: Users,
  skill: CircleCheck,
  heart: Heart,
  share: Share2,
};

export default function Membership() {
  return (
    <section id="membership" className="membership-section">
      <div className="membership-container">

        {/* EXISTING MEMBERSHIP HEADING */}
        <div className="section-heading">
          <p className="eyebrow">
            {membershipData.eyebrow}
          </p>

          <h2>
            {membershipData.title}
          </h2>

          <p>
            {membershipData.text}
          </p>
        </div>


        {/* MEMBERSHIP BENEFIT CARDS */}
        <div className="membership-benefits">

          {membershipData.benefits.map((benefit) => {
            const Icon = icons[benefit.icon];

            return (
              <article
                className="membership-card"
                key={benefit.title}
              >

                <div className="membership-card-icon">
                  <Icon
                    size={30}
                    strokeWidth={1.8}
                  />
                </div>

                <h3>{benefit.title}</h3>

                <p>{benefit.description}</p>

              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
}
