import Image from "next/image";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Left Content */}
        <div className="text-center lg:text-left">

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

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">

            <button className="bg-pink-600 hover:bg-pink-500 transition-all duration-300 px-8 py-4 rounded-full text-white font-medium">
              Hire Me
            </button>

            <button className="border border-zinc-500 hover:border-white transition-all duration-300 px-8 py-4 rounded-full text-white font-medium">
              Let's Talk
            </button>
            <a
  href="/resume/Nikhil Dhondge Resume V2.pdf"
  download
  className="border border-pink-600 text-pink-500 hover:bg-pink-600 hover:text-white transition-all duration-300 px-8 py-4 rounded-full font-medium"
>
  Download Resume
</a>
        <div className="flex gap-5 mt-8 text-2xl">

  <a
    href="https://github.com/nikhilpatil5743"
    target="_blank"
    rel="noopener noreferrer"
    className="text-zinc-400 hover:text-pink-500 transition"
  >
    <FaGithub />
  </a>

  <a
    href="https://www.linkedin.com/in/nikhil-dhondge"
    target="_blank"
    rel="noopener noreferrer"
    className="text-zinc-400 hover:text-pink-500 transition"
  >
    <FaLinkedin />
  </a>

  <a
    href="https://www.instagram.com/nikhilpatil.design/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-zinc-400 hover:text-pink-500 transition"
  >
    <FaInstagram />
  </a>

</div>

          </div>

        </div>

        {/* Right Side */}
        {/* Hya khalchya line madhye change kela ahe (-mt-8 md:mt-0 add kela) */}
        <div className="flex justify-center -mt-8 md:mt-0">

          <div className="relative">

            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-pink-600/20 blur-3xl rounded-full"></div>

            {/* Photo Placeholder */}
            <div className="relative overflow-hidden w-[280px] h-[360px] md:w-[340px] md:h-[450px] lg:w-[380px] lg:h-[500px] bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800 rounded-[32px]">

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