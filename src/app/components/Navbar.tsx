"use client";

import { useState } from "react";

type Tab = "about" | "projects" | "blog" | "nature";

const tabs: { id: Tab; label: string }[] = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "blog", label: "Blog" },
  { id: "nature", label: "Nature" },
];

interface NavbarProps {
  active: Tab;
  onNavigate: (tab: Tab) => void;
}

export default function Navbar({ active, onNavigate }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#2d6a4f] text-white shadow-md">
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between h-14">
        <span className="font-bold text-lg tracking-wide">My Portfolio</span>

        {/* Desktop menu */}
        <ul className="hidden sm:flex gap-1">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <button
                onClick={() => onNavigate(tab.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  active === tab.id
                    ? "bg-white/20 text-white"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden p-2 rounded-md hover:bg-white/10 transition-colors"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-0.5 bg-white mb-1" />
          <span className="block w-5 h-0.5 bg-white mb-1" />
          <span className="block w-5 h-0.5 bg-white" />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <ul className="sm:hidden bg-[#235c42] px-4 pb-3 flex flex-col gap-1">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <button
                onClick={() => {
                  onNavigate(tab.id);
                  setMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  active === tab.id
                    ? "bg-white/20 text-white"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
