const posts = [
  {
    date: "Jan 15, 2025",
    title: "Getting Started with Next.js App Router",
    summary:
      "A beginner-friendly walkthrough of the new App Router in Next.js 13+, covering layouts, server components, and data fetching.",
    readTime: "5 min read",
  },
  {
    date: "Dec 3, 2024",
    title: "Why I Switched to Tailwind CSS",
    summary:
      "After years of writing custom SCSS, I gave Tailwind a real shot. Here's what surprised me and what I still miss.",
    readTime: "4 min read",
  },
  {
    date: "Oct 22, 2024",
    title: "Building a REST API with Node and Express",
    summary:
      "Step-by-step guide to building a clean, modular REST API using Express.js, with auth and database integration.",
    readTime: "8 min read",
  },
  {
    date: "Sep 8, 2024",
    title: "Type-Safe APIs with TypeScript",
    summary:
      "How to leverage TypeScript generics and utility types to write rock-solid, self-documenting API layers.",
    readTime: "6 min read",
  },
];

export default function Blog() {
  return (
    <section className="max-w-3xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold mb-2 text-stone-800">Blog</h2>
      <p className="text-stone-600 mb-8">Thoughts, tutorials, and notes from the field.</p>
      <div className="flex flex-col gap-5">
        {posts.map((post) => (
          <div
            key={post.title}
            className="bg-white rounded-xl p-5 shadow-sm border border-stone-200"
          >
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs text-stone-400">{post.date}</span>
              <span className="text-xs text-stone-400">{post.readTime}</span>
            </div>
            <h3 className="font-semibold text-stone-800 text-lg mb-1">{post.title}</h3>
            <p className="text-stone-600 text-sm leading-relaxed">{post.summary}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
