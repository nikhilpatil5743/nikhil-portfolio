export default function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "Modern, responsive, and business-focused websites.",
    },
    {
      title: "App Development",
      description:
        "Android and cross-platform mobile applications.",
    },
    {
      title: "Graphic Design",
      description:
        "Creative branding, social media, and marketing designs.",
    },
    {
      title: "Video Editing",
      description:
        "Professional reels, shorts, and promotional videos.",
    },
    {
      title: "Meta Ads",
      description:
        "Lead generation and conversion-focused ad campaigns.",
    },
    {
      title: "Digital Marketing",
      description:
        "Strategies that help businesses grow online.",
    },
  ];

  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">

        <p className="text-pink-500 mb-4">
          Services
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
          What I Can Do For You
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                {service.title}
              </h3>

              <p className="text-zinc-400 leading-7">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}