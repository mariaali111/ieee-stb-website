import MemberCard from "../components/MemberCard";
import PageHero from "../components/PageHero";
import team from "../data/team";

export default function Team() {
  return (
    <>
      <PageHero label="Team" title="Students behind the branch." description="Meet the student team working on technical initiatives, events, outreach and branch activities." />
      <section className="bg-[#07090c] py-24">
        <div className="site-container grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6">
          {team.map((member: (typeof team)[number]) => <MemberCard key={`${member.name}-${member.role}`} member={member} />)}
        </div>
      </section>
    </>
  );
}
