import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { navigation } from "../data/navigation";

const socials = [
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "LinkedIn", href: "#", icon: Linkedin },
  { label: "GitHub", href: "#", icon: Github },
  { label: "Email", href: "mailto:ieee@example.com", icon: Mail },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050709]">
      <div className="site-container">
        <div className="grid gap-12 py-14 md:grid-cols-[1.4fr_.6fr_.8fr] md:py-16">
          <div>
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-md border border-[#0088cc]/25 bg-[#00629b]/10">
                <span className="text-[10px] font-bold text-[#5db8e5]">IEEE</span>
              </div>
              <div>
                <p className="text-sm font-semibold tracking-wide text-white">IEEE STUDENT BRANCH</p>
                <p className="mt-0.5 text-xs text-white/35">Aligarh Muslim University</p>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-6 text-white/35">Advancing technology, encouraging innovation and building a collaborative engineering community at AMU.</p>
            <div className="mt-6 flex gap-2">
              {socials.map(({ label, href, icon: Icon }) => (
                <a key={label} href={href} aria-label={label} className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-white/40 transition hover:border-[#0088cc]/30 hover:bg-[#00629b]/10 hover:text-[#63bce9]"><Icon size={17} /></a>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-white/30">Navigation</p>
            <nav className="mt-5 flex flex-col gap-3">
              {navigation.map((item) => <Link key={item.href} to={item.href} className="w-fit text-sm text-white/45 transition hover:text-white">{item.label}</Link>)}
            </nav>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-white/30">Contact</p>
            <div className="mt-5 space-y-3 text-sm text-white/45">
              <p>Aligarh Muslim University</p>
              <p>Aligarh, Uttar Pradesh</p>
              <a href="mailto:ieee@example.com" className="block w-fit transition hover:text-white">ieee@example.com</a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-xs text-white/25 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 IEEE Student Branch AMU</p>
          <p>Built by the IEEE SB AMU Technical Team</p>
        </div>
      </div>
    </footer>
  );
}
