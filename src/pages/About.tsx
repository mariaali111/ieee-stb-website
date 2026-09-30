import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";

export default function About() {
  return (
    <>
      <PageHero label="About" title="A community built around technology." description="IEEE Student Branch AMU brings students together to learn, collaborate and participate in technical activities beyond the classroom." />
      <section className="bg-[#07090c] py-24">
        <div className="site-container grid gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHeading label="Our Purpose" title="Learn beyond the syllabus." description="The branch creates opportunities for students to explore engineering, technology and professional development through practical activities and peer collaboration." />
          <div className="space-y-5 text-sm leading-7 text-white/50 sm:text-base">
            <p>This prototype uses placeholder content. Replace this section with the approved history, mission and vision of IEEE Student Branch AMU.</p>
            <p>You can also add the Branch Counselor message and official branch achievements here once the final content is available.</p>
          </div>
        </div>
      </section>
    </>
  );
}
