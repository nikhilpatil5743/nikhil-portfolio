import Image from "next/image";
export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-20 items-center">

        {/* Left Content */}
        <div>

          <p className="text-pink-500 text-lg mb-4 font-medium">
            Hello, I'm
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Nikhil Dhondge
            <br />
            Patil
          </h1>

          <h2 className="text-xl md:text-2xl text-zinc-300 leading-relaxed mb-8">
            Web Developer | App Developer | Graphic Designer
            <br />
            Video Editor | Digital Marketer
          </h2>

          <p className="text-zinc-400 text-lg max-w-xl leading-relaxed mb-10">
            I help businesses grow online with modern websites, mobile applications, creative designs, video content, and result-driven digital marketing solutions.
          </p>

          <div className="flex flex-wrap gap-4">

            <button className="bg-pink-600 hover:bg-pink-500 transition-all duration-300 px-8 py-4 rounded-full text-white font-medium">
              Hire Me
            </button>

            <button className="border border-zinc-500 hover:border-white transition-all duration-300 px-8 py-4 rounded-full text-white font-medium">
              Let's Talk
            </button>

          </div>

        </div>

        {/* Right Side */}
        <div className="flex justify-center">

          <div className="relative">

            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-pink-600/20 blur-3xl rounded-full"></div>

            {/* Photo Placeholder */}
            <div className="relative overflow-hidden w-[380px] h-[500px] bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800 rounded-[32px]">

  <Image
    src="/images/profile/nikhil-new.jpg"
    alt="Nikhil Dhondge Patil"
    fill
    priority
    className="object-cover object-top scale-125"
  />

</div>


          </div>

        </div>

      </div>
    </section>
  );
}