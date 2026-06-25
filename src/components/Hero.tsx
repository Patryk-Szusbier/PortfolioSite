import { ArrowDown, Mail } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";

function Hero({ heroRef }) {
  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative px-6 pt-20"
    >
      <div className="absolute inset-0 bg-linear-to-br from-blue-900/30 via-purple-900/20 to-gray-950" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-7xl  mb-6 bg-linear-to-r from-blue-400 via-purple-500 to-pink-800 bg-clip-text text-transparent">
          Patryk Szusbier
        </h1>
        <p className="text-xl md:text-3xl text-gray-300 mb-6">
          Full Stack Developer
        </p>
        <p className=" text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          Tworzę nowoczesne aplikacje webowe i mobilne. Specjalizuję się w
          React, Node.js i projektowaniu interfejsów użytkownika.
        </p>
        <div className=" flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="#projects"
            className="px-8 py-3 bg-linear-to-r from-blue-500 to-purple-600 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
          >
            Zobacz projekty
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-gray-600 rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105"
          >
            Skontaktuj się
          </a>
        </div>
        <div className="flex gap-6 justify-center">
          <a
            href="https://github.com/Patryk-Szusbier"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social text-gray-400 hover:text-white transition-colors"
          >
            <FiGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/patryk-szusbier-55a6b625b/"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social text-gray-400 hover:text-white transition-colors"
          >
            <FiLinkedin size={24} />
          </a>
          <a
            href="mailto:patryk.szusbier@gmail.com"
            className="hero-social text-gray-400 hover:text-white transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
      <a
        href="#about"
        className="hero-arrow absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400"
      >
        <ArrowDown size={32} />
      </a>
    </section>
  );
}

export default Hero;
