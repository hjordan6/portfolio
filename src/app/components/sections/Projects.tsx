const projects = [
  {
    title: "Weather Dashboard",
    description:
      "A real-time weather app that pulls data from multiple APIs and displays beautiful visualizations.",
    tech: ["React", "TypeScript", "Chart.js"],
  },
  {
    title: "Trail Tracker",
    description:
      "A hiking companion app that logs trails, elevation, and lets you share routes with friends.",
    tech: ["Next.js", "Tailwind", "Mapbox"],
  },
  {
    title: "Recipe Vault",
    description:
      "A recipe management system with tagging, search, and meal planning calendar built in.",
    tech: ["Node.js", "PostgreSQL", "React"],
  },
  {
    title: "Portfolio Site",
    description:
      "This very portfolio — built with Next.js and Tailwind CSS, deployed on Firebase.",
    tech: ["Next.js", "Tailwind", "Firebase"],
  },
];

export default function Projects() {
  return (
    <section className="max-w-3xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold mb-2 text-stone-800">Projects</h2>
      <p className="text-stone-600 mb-8">A selection of things I&apos;ve built.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white rounded-xl p-5 shadow-sm border border-stone-200 flex flex-col gap-3"
          >
            <h3 className="font-semibold text-stone-800 text-lg">{project.title}</h3>
            <p className="text-stone-600 text-sm leading-relaxed flex-1">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-1">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="bg-[#f0ebe0] text-stone-700 text-xs px-2 py-1 rounded-full font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
