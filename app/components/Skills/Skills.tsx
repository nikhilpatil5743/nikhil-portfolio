export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">

        <p className="text-pink-500 mb-4">
          My Skills
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Development */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:scale-105 transition-all duration-300">
            <h3 className="text-white text-2xl font-semibold mb-6">
              Development
            </h3>

            <ul className="space-y-3 text-zinc-400">
              <li>Website Development</li>
              <li>Landing Pages</li>
              <li>WordPress</li>
              <li>Responsive Design</li>
            </ul>
          </div>

          {/* App Development */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:scale-105 transition-all duration-300">
            <h3 className="text-white text-2xl font-semibold mb-6">
              App Development
            </h3>

            <ul className="space-y-3 text-zinc-400">
              <li>Android Apps</li>
              <li>Flutter Apps</li>
              <li>App UI Design</li>
            </ul>
          </div>

          {/* Design */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:scale-105 transition-all duration-300">
            <h3 className="text-white text-2xl font-semibold mb-6">
              Design
            </h3>

            <ul className="space-y-3 text-zinc-400">
              <li>Graphic Design</li>
              <li>Branding</li>
              <li>Social Media Design</li>
              <li>Canva</li>
              <li>Photoshop</li>
            </ul>
          </div>

          {/* Marketing */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:scale-105 transition-all duration-300">
            <h3 className="text-white text-2xl font-semibold mb-6">
              Marketing
            </h3>

            <ul className="space-y-3 text-zinc-400">
              <li>Meta Ads</li>
              <li>Lead Generation</li>
              <li>Campaign Optimization</li>
              <li>Video Editing</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}