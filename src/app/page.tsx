"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Blog from "./components/sections/Blog";
import Nature from "./components/sections/Nature";

type Tab = "about" | "projects" | "blog" | "nature";

const sections: Record<Tab, React.ReactNode> = {
  about: <About />,
  projects: <Projects />,
  blog: <Blog />,
  nature: <Nature />,
};

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>("about");

  return (
    <div className="min-h-screen bg-[#f5efe6]">
      <Navbar active={activeTab} onNavigate={setActiveTab} />
      <main>{sections[activeTab]}</main>
    </div>
  );
}
