export default function Timeline() {
  const experiences = [
    {
      year: "2022 - Present",
      title: "Graphic Designer",
      description:
        "Helping businesses create engaging branding, social media creatives, and marketing designs.",
    },
    {
      year: "2024 - Present",
      title: "Meta Ads Specialist",
      description:
        "Running lead generation and conversion-focused campaigns for businesses.",
    },
    {
      year: "2025 - Present",
      title: "Web Developer",
      description:
        "Building modern, responsive, and business-focused websites.",
    },
    {
      year: "2025 - Present",
      title: "App Developer",
      description:
        "Developing mobile applications and digital solutions.",
    },
  ];

  return (
    <section id="experience" className="py-16 md:py-24 px-6">
      <div className="max-w-5xl mx-auto">

        <p className="text-pink-500 mb-4">
          Experience
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
          My Journey
        </h2>

        <div className="space-y-8">
          {experiences.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8"
            >
              <span className="text-pink-500 font-medium">
                {item.year}
              </span>

              <h3 className="text-2xl font-semibold text-white mt-2 mb-4">
                {item.title}
              </h3>

              <p className="text-zinc-400 leading-7">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}