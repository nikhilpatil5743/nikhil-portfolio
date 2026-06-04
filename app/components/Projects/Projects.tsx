export default function Projects() {
  const projects = [
    {
      title: "ChromaKart",
      description:
        "A modern dropshipping landing page focused on conversions and product marketing.",
      tech: "Next.js • Tailwind CSS",
    },
    {
      title: "TechPixels Studio",
      description:
        "A professional agency website showcasing digital services and solutions.",
      tech: "Next.js • Tailwind CSS • Framer Motion",
    },
    {
      title: "Bolkey Keyboard",
      description:
        "A multilingual Android keyboard application designed for seamless typing.",
      tech: "Kotlin • Android SDK",
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <p className="text-pink-500 mb-4">
          My Projects
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
          Featured Work
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                {project.title}
              </h3>

              <p className="text-zinc-400 leading-7 mb-6">
                {project.description}
              </p>

              <p className="text-pink-500 text-sm mb-6">
                {project.tech}
              </p>

              <button className="bg-pink-600 hover:bg-pink-500 transition px-5 py-2 rounded-full text-white">
                View Project
              </button>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}