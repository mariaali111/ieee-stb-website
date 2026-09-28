import type { TeamMember } from "../types";

type Props = { member: TeamMember };

export default function MemberCard({ member }: Props) {
  return (
    <article className="group">
      <div className="soft-lift grid aspect-[4/4.5] place-items-center overflow-hidden rounded-xl border border-white/10 bg-[#0c1015] transition duration-300 group-hover:border-[#0088cc]/30">
        <div className="grid h-24 w-24 place-items-center rounded-full border border-[#0088cc]/20 bg-[#00629b]/10">
          <span className="text-2xl font-semibold tracking-tight text-[#65bde8]">{member.initials}</span>
        </div>
      </div>
      <div className="pt-5">
        <h3 className="text-base font-semibold text-white">{member.name}</h3>
        <p className="mt-1 text-sm text-white/40">{member.role}</p>
      </div>
    </article>
  );
}
