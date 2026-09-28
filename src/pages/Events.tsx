import EventCard from "../components/EventCard";
import PageHero from "../components/PageHero";
import { events } from "../data/events";

export default function Events() {
  return (
    <>
      <PageHero label="Events" title="Explore what we build together." description="A collection of workshops, competitions, sessions and student-led technical activities." />
      <section className="bg-[#07090c] py-24">
        <div className="site-container grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => <EventCard key={event.slug} event={event} index={index + 1} />)}
        </div>
      </section>
    </>
  );
}
