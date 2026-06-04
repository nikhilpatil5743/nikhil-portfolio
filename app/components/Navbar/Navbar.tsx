export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black/30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        
        <h1 className="text-white font-bold text-xl">
          NDP
        </h1>

        <ul className="hidden md:flex gap-8 text-white">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <button className="bg-pink-600 hover:bg-pink-500 text-white px-5 py-2 rounded-full transition">
          Hire Me
        </button>

      </div>
    </nav>
  );
}