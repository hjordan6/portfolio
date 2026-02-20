export default function About() {
  return (
    <section className="max-w-3xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold mb-4 text-stone-800">About Me</h2>
      <p className="text-stone-700 mb-4 leading-relaxed">
        Hi there! I&apos;m a passionate developer who loves building cool things on the web.
        I have experience in full-stack development, open-source contributions, and
        turning coffee into code.
      </p>
      <p className="text-stone-700 mb-4 leading-relaxed">
        When I&apos;m not coding, you can find me hiking through forests, tending to my
        garden, or experimenting with new recipes in the kitchen.
      </p>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-5 shadow-sm border border-stone-200">
          <h3 className="font-semibold text-stone-800 mb-2">Skills</h3>
          <ul className="text-stone-600 space-y-1 text-sm">
            <li>✦ TypeScript &amp; JavaScript</li>
            <li>✦ React &amp; Next.js</li>
            <li>✦ Node.js &amp; Python</li>
            <li>✦ UI/UX Design</li>
          </ul>
        </div>
        <div className="bg-white rounded-xl p-5 shadow-sm border border-stone-200">
          <h3 className="font-semibold text-stone-800 mb-2">Experience</h3>
          <ul className="text-stone-600 space-y-1 text-sm">
            <li>✦ 5+ years of web dev</li>
            <li>✦ Open source contributor</li>
            <li>✦ Freelance consultant</li>
            <li>✦ Tech blog writer</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
