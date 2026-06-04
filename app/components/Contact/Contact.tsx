export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">

        <p className="text-pink-500 mb-4">
          Contact
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Let's Work Together
        </h2>

        <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-12">
          Looking for a website, mobile app, graphic design,
          video editing, or digital marketing solution?
          Let's discuss your project.
        </p>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">

          <div className="space-y-6">

            <div>
              <p className="text-zinc-500 text-sm">
                Email
              </p>

              <p className="text-white text-lg">
                nd0437210@gmail.com
              </p>
            </div>

            <div>
              <p className="text-zinc-500 text-sm">
                WhatsApp
              </p>

              <p className="text-white text-lg">
                +91 9307271695
              </p>
            </div>

            <div>
              <p className="text-zinc-500 text-sm">
                Location
              </p>

              <p className="text-white text-lg">
                Mehkar, Maharashtra, India
              </p>
            </div>

          </div>

          <a
            href="https://wa.me/919307271695"
            target="_blank"
            className="inline-block mt-10 bg-pink-600 hover:bg-pink-500 transition px-8 py-4 rounded-full text-white font-medium"
          >
            Contact On WhatsApp
          </a>

        </div>

      </div>
    </section>
  );
}