import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navigation } from "../data/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07090c]/90 backdrop-blur-xl">
      <div className="site-container flex h-20 items-center justify-between">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-[#0088cc]/30 bg-[#00629b]/10">
            <span className="text-[10px] font-bold tracking-tight text-[#45a9df]">IEEE</span>
          </div>
          <div className="min-w-0 leading-tight">
            <p className="truncate text-sm font-semibold tracking-wide text-white">IEEE STUDENT BRANCH</p>
            <p className="truncate text-[10px] tracking-[0.12em] text-white/45 sm:text-xs">ALIGARH MUSLIM UNIVERSITY</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navigation.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              end={item.href === "/"}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${isActive ? "text-white" : "text-white/55 hover:text-white"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-white/10 text-white md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-[#080b10] md:hidden">
          <div className="site-container flex flex-col py-4">
            {navigation.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                end={item.href === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-3 text-sm font-medium ${isActive ? "bg-white/5 text-white" : "text-white/60 hover:bg-white/5 hover:text-white"}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
