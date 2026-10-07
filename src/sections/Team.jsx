import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { branchInfo, leadership, cellLeads, teams } from "../data/team";
import { getProfileImage, getInitials } from "../utils/profileImages";

function PersonImage({ name }) {
  const image = getProfileImage(name);

  return (
    <div className="person-image">
      {image ? (
        <img src={image} alt={`${name} profile`} />
      ) : (
        <span>{getInitials(name)}</span>
      )}
    </div>
  );
}

export default function Team() {
  const [activeTeam, setActiveTeam] = useState(null);

  const selectedTeam = teams.find(
    (team) => team.name === activeTeam
  );

  const getLeadRole = (leadName) => {
    const lead = cellLeads.find(
      (person) => person.name === leadName
    );

    return lead?.role || "Team Lead";
  };

  return (
    <section className="team-section section-block" id="team">

      {/* HEADING */}
      <div className="section-heading split-heading">
        <div>
          <p className="eyebrow">OUR TEAM</p>
          <h2>People behind the club.</h2>
        </div>

        <div className="team-intro-copy">
          <p className="section-intro">
            Selected office bearers, team leads and working-group members
            for the academic session.
          </p>

          <p className="team-official-note">
            Official team selection · Academic Session{" "}
            {branchInfo.academicSession} · Notice dated{" "}
            {branchInfo.selectionNoticeDate}
          </p>
        </div>
      </div>

      {/* LEADERSHIP */}
      <div className="team-subheading">
        <p className="eyebrow">LEADERSHIP</p>
        <h3>Core Team.</h3>
      </div>

      <div className="leadership-card-grid">
        {leadership.map((person) => (
          <article
            className="team-person-card leadership-card"
            key={person.name}
          >
            <PersonImage name={person.name} />
            <div>
              <h3>{person.name}</h3>
              <p>{person.role}</p>
            </div>
          </article>
        ))}
      </div>

      {/* TEAMS */}
      <div className="team-subheading">
        <p className="eyebrow">TEAMS</p>
        <h3>Teams behind the branch.</h3>
      </div>

      <div className="team-selector">
        {teams.map((team, index) => (
          <button
            key={team.name}
            type="button"
            className={`team-option ${
              activeTeam === team.name ? "active" : ""
            }`}
            onClick={() => setActiveTeam(team.name)}
          >
            <span className="team-option-number">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="team-option-info">
              <strong>{team.name}</strong>

              <span>
                {team.members.length}{" "}
                {team.members.length === 1
                  ? "member"
                  : "members"}
              </span>
            </div>

            <ArrowUpRight
              className="card-arrow"
              size={18}
            />
          </button>
        ))}
      </div>

      {/* SELECTED TEAM */}
      {selectedTeam && (
        <div
          className="team-modal-overlay"
          onClick={() => setActiveTeam(null)}
        >
          <div
            className="team-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="team-modal-close"
              onClick={() => setActiveTeam(null)}
              aria-label="Close team details"
            >
              ×
            </button>

            <div className="selected-team-heading">
              <div>
                <h3>{selectedTeam.name}</h3>
              </div>

              <span>
                {selectedTeam.members.length}{" "}
                {selectedTeam.members.length === 1
                  ? "MEMBER"
                  : "MEMBERS"}
              </span>
            </div>

           {/* TEAM LEAD */}
            {selectedTeam.lead && (
              <div className="selected-team-lead">
                <p className="selected-label">TEAM LEAD</p>

                <div className="team-lead-card">
                  <PersonImage name={selectedTeam.lead} />

                  <div>
                    <strong>{selectedTeam.lead}</strong>
                    <p>{getLeadRole(selectedTeam.lead)}</p>
                  </div>

                  <ArrowUpRight size={18} />
                </div>
              </div>
            )}

            {/* TEAM MEMBERS */}
            <div className="selected-team-members">
              <p className="selected-label">TEAM MEMBERS</p>

              <div className="member-list">
                {selectedTeam.members.map((member) => (
                  <button
                    className="member-card"
                    key={member}
                    type="button"
                  >
                    <PersonImage name={member} />

                    <span className="member-name">
                      {member}
                    </span>

                    <ArrowUpRight size={15} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}