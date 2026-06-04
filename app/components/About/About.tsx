export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">

        <p className="text-pink-500 mb-4">
          About Me
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-10">
          Turning Ideas Into
          <br />
          Digital Experiences
        </h2>

        <div className="grid lg:grid-cols-2 gap-16">

          <div>
            <p className="text-zinc-400 text-lg leading-9">
              I'm Nikhil Dhondge Patil, a creative professional passionate
              about building impactful digital experiences.

              <br /><br />

              My journey started with graphic design, where I spent over
              3 years helping businesses create engaging visual identities.

              <br /><br />

              As my interest in technology grew, I expanded into web
              development, app development, video editing, and digital
              marketing.

              <br /><br />

              Today, I combine creativity, technology, and marketing
              to deliver complete digital solutions that help businesses
              establish a stronger online presence.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">

            <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800">
              <h3 className="text-4xl font-bold text-pink-500">
                3+
              </h3>
              <p className="text-zinc-300 mt-2">
                Years Graphic Design
              </p>
            </div>

            <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800">
              <h3 className="text-4xl font-bold text-pink-500">
                1+
              </h3>
              <p className="text-zinc-300 mt-2">
                Years Meta Ads
              </p>
            </div>

            <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800">
              <h3 className="text-4xl font-bold text-pink-500">
                1+
              </h3>
              <p className="text-zinc-300 mt-2">
                Years Web Development
              </p>
            </div>

            <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800">
              <h3 className="text-4xl font-bold text-pink-500">
                1+
              </h3>
              <p className="text-zinc-300 mt-2">
                Years App Development
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}