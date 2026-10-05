import { ArrowUpRight } from "lucide-react";
import { branchInfo, leadership, cellLeads, teams } from "../data/team";
import { getProfileImage, getInitials } from "../utils/profileImages";

function PersonImage({ name }) {
  const image = getProfileImage(name);
  return (
    <div className="person-image">
      {image ? <img src={image} alt={`${name} profile`} /> : <span>{getInitials(name)}</span>}
    </div>
  );
}

export default function Team() {
  const allMembers = teams.flatMap((team) =>
    team.members.map((member) => ({ member, cell: team.name }))
  );

  return (
    <section className="team-section section-block" id="team">
      {/* HEADING */}
      <div className="section-heading split-heading">
        <div>
          <p className="eyebrow">OUR TEAM</p>
          <h2>People behind the branch.</h2>
        </div>

        <div className="team-intro-copy">
          <p className="section-intro">
            Selected office bearers, cell leads and working-group members for the academic session.
          </p>
          <p className="team-official-note">
            Official team selection · Academic Session {branchInfo.academicSession} · Notice dated{" "}
            {branchInfo.selectionNoticeDate}
          </p>
        </div>
      </div>

      {/* LEADERSHIP */}
      <div className="team-subheading">
        <p className="eyebrow">LEADERSHIP</p>
        <h3>Branch leadership.</h3>
      </div>

      <div className="leadership-card-grid">
        {leadership.map((person) => (
          <article className="team-person-card leadership-card" key={person.name}>
            <PersonImage name={person.name} />
            <div>
              <h3>{person.name}</h3>
              <p>{person.role}</p>
              <span>IEEE STB ZHCET · AMU</span>
            </div>
          </article>
        ))}
      </div>

      {/* CELL LEADS */}
      <div className="team-subheading">
        <p className="eyebrow">CELL LEADS</p>
        <h3>Leads across the branch.</h3>
      </div>

      <div className="lead-card-grid">
        {cellLeads.map((person) => (
          <article className="team-person-card" key={person.name}>
            <PersonImage name={person.name} />
            <div>
              <h3>{person.name}</h3>
              <p>{person.role}</p>
              <span>{person.role.replace(" Lead", "")}</span>
            </div>
            <ArrowUpRight className="card-arrow" size={17} />
          </article>
        ))}
      </div>

      {/* TEAM MEMBERS */}
      <div className="team-subheading">
        <p className="eyebrow">TEAM MEMBERS</p>
        <h3>Working together across cells.</h3>
      </div>

      <div className="member-card-grid">
        {allMembers.map(({ member, cell }) => (
          <button className="team-person-card member-card" key={`${cell}-${member}`} type="button">
            <PersonImage name={member} />
            <div>
              <h3>{member}</h3>
              <p>Cell Member</p>
              <span>{cell}</span>
            </div>
            <ArrowUpRight className="card-arrow" size={17} />
          </button>
        ))}
      </div>
    </section>
  );
}
