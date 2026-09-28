import { ArrowRight, Code2, Lightbulb, Trophy, UsersRound } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import EventCard from "../components/EventCard";
import MemberCard from "../components/MemberCard";
import { activities } from "../data/activities";
import { events } from "../data/events";
import { gallery } from "../data/gallery";
import { team } from "../data/team";
import { site } from "../data/site";

const activityIcons = [Code2, Trophy, UsersRound, Lightbulb];
const stats = [
  { value: "100+", label: "Active Members" },
  { value: "25+", label: "Technical Events" },
  { value: "15+", label: "Workshops & Sessions" },
  { value: "05+", label: "Years of Community" },
];

export default function Home() {
  return (
    <>
      <section className="hero-grid relative overflow-hidden">
        <div className="hero-glow pointer-events-none absolute inset-0" />
        <div className="site-container relative z-10 grid min-h-[680px] items-center gap-16 py-20 lg:grid-cols-[1.15fr_.85fr]">
          <div className="max-w-3xl">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-9 bg-[#0088cc]" />
              <span className="text-xs font-semibold uppercase tracking-[.25em] text-[#51b1e5]">IEEE Student Branch • AMU</span>
            </div>
            <h1 className="text-[clamp(3rem,7vw,6.4rem)] font-bold leading-[.94] tracking-[-.055em] text-white">
              Engineering <span className="block text-white/45">the Future.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-7 text-white/55 sm:text-lg">{site.description}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/events" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#00629b] px-6 text-sm font-semibold text-white transition hover:bg-[#0078b9]">Explore Events <ArrowRight size={17} /></Link>
              <Link to="/about" className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/15 px-6 text-sm font-semibold text-white/80 transition hover:border-white/30 hover:bg-white/5 hover:text-white">About the Branch</Link>
            </div>
          </div>
          <div className="relative hidden items-center justify-center lg:flex" aria-hidden="true">
            <div className="tech-core">
              <div className="tech-ring tech-ring-one" />
              <div className="tech-ring tech-ring-two" />
              <div className="tech-ring tech-ring-three" />
              <div className="tech-center"><span className="text-sm font-bold tracking-[.08em] text-[#7fc8eb]">IEEE</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-[#090c10] py-24">
        <div className="site-container grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
          <SectionHeading label="Who We Are" title="Driven by technology. Connected by community." />
          <div className="lg:pt-8">
            <p className="text-base leading-8 text-white/60 sm:text-lg">IEEE Student Branch at Aligarh Muslim University provides a platform for students to explore technology beyond classrooms, collaborate on ideas and develop practical skills through technical activities.</p>
            <p className="mt-5 text-sm leading-7 text-white/40 sm:text-base">From workshops and competitions to expert interactions and collaborative projects, the branch aims to create an environment where students can learn, build and grow together.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#07090c] py-24">
        <div className="site-container">
          <SectionHeading label="What We Do" title="Learn. Build. Collaborate." description="Activities designed to help students explore technology, strengthen technical skills and connect with the wider engineering community." />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {activities.map((activity, index) => {
              const Icon = activityIcons[index];
              return (
                <article key={activity.title} className="soft-lift rounded-xl border border-white/10 bg-white/[.025] p-6 transition duration-300 hover:border-[#0088cc]/30 hover:bg-white/[.04]">
                  <div className="mb-8 flex items-start justify-between">
                    <div className="grid h-11 w-11 place-items-center rounded-lg border border-[#0088cc]/20 bg-[#00629b]/10 text-[#51b1e5]"><Icon size={20} /></div>
                    <span className="text-xs font-medium tracking-widest text-white/20">0{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">{activity.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/45">{activity.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0b0f14]">
        <div className="site-container grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={stat.label} className={`py-10 sm:py-12 lg:px-8 ${index % 2 !== 0 ? "border-l border-white/10" : ""} ${index >= 2 ? "border-t border-white/10 lg:border-t-0" : ""} ${index > 0 ? "lg:border-l lg:border-white/10" : ""}`}>
              <p className="text-3xl font-semibold tracking-[-.04em] text-white sm:text-4xl">{stat.value}</p>
              <p className="mt-2 text-xs uppercase tracking-[.14em] text-white/35 sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#07090c] py-24">
        <div className="site-container">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading label="Events" title="Ideas in action." description="Workshops, competitions and technical sessions designed to turn curiosity into practical experience." />
            <Link to="/events" className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-white/60 transition hover:text-white">View all events <ArrowRight size={17} /></Link>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event, index) => <EventCard key={event.slug} event={event} index={index + 1} />)}
          </div>
        </div>
      </section>

      <section className="border-y border-white/5 bg-[#090c10] py-24">
        <div className="site-container">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading label="Our Team" title="Built by students." description="A student team working together to organize technical initiatives and strengthen the IEEE community at AMU." />
            <Link to="/team" className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-white/60 transition hover:text-white">Meet the team <ArrowRight size={17} /></Link>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-6">
            {team.slice(0, 4).map((member) => <MemberCard key={`${member.name}-${member.role}`} member={member} />)}
          </div>
        </div>
      </section>

      <section className="bg-[#07090c] py-24">
        <div className="site-container">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading label="Gallery" title="Moments that define us." description="A glimpse into workshops, competitions, technical sessions and community activities." />
            <Link to="/gallery" className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-white/60 transition hover:text-white">View gallery <ArrowRight size={17} /></Link>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item, index) => (
              <article key={item.id} className={`gallery-card soft-lift relative overflow-hidden rounded-xl border border-white/10 transition duration-300 hover:border-[#0088cc]/30 ${index === 0 ? "lg:col-span-2" : ""}`}>
                <div className={`flex items-end p-6 ${index === 0 ? "min-h-[320px]" : "min-h-[250px]"}`}>
                  <div><p className="text-[10px] font-semibold uppercase tracking-[.2em] text-[#62bce8]">{item.category}</p><h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#07090c] pb-24">
        <div className="site-container">
          <div className="cta-panel relative overflow-hidden rounded-2xl border border-white/10 px-6 py-14 sm:px-10 sm:py-16 lg:px-16">
            <div className="relative z-10 max-w-3xl">
              <p className="text-[11px] font-semibold uppercase tracking-[.25em] text-[#5ab6e4]">Join the Community</p>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-.04em] text-white sm:text-4xl lg:text-5xl">Learn. Build. Connect.<span className="block text-white/40">Be part of IEEE.</span></h2>
              <p className="mt-6 max-w-xl text-sm leading-7 text-white/50 sm:text-base">Connect with students passionate about technology, engineering and innovation at Aligarh Muslim University.</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link to="/contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#00629b] px-6 text-sm font-semibold text-white transition hover:bg-[#0078b9]">Get in Touch <ArrowRight size={17} /></Link>
                <a href="https://www.ieee.org/" target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/15 px-6 text-sm font-semibold text-white/70 transition hover:border-white/30 hover:bg-white/5 hover:text-white">Explore IEEE</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
