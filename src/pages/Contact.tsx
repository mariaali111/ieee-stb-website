import { Mail, MapPin } from "lucide-react";
import PageHero from "../components/PageHero";

export default function Contact() {
  return (
    <>
      <PageHero label="Contact" title="Connect with the branch." description="Use the final official branch email and social links here before publishing the website." />
      <section className="bg-[#07090c] py-24">
        <div className="site-container grid gap-5 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-[#0c1015] p-7"><MapPin className="text-[#51b1e5]" size={22} /><h2 className="mt-5 text-xl font-semibold">Location</h2><p className="mt-3 text-sm leading-6 text-white/45">Aligarh Muslim University<br />Aligarh, Uttar Pradesh</p></div>
          <div className="rounded-xl border border-white/10 bg-[#0c1015] p-7"><Mail className="text-[#51b1e5]" size={22} /><h2 className="mt-5 text-xl font-semibold">Email</h2><a href="mailto:ieee@example.com" className="mt-3 block w-fit text-sm text-white/45 transition hover:text-white">ieee@example.com</a></div>
        </div>
      </section>
    </>
  );
}
