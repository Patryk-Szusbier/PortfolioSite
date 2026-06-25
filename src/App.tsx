import { useEffect, useRef } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import About from "./components/About";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    const sections = [heroRef.current, aboutRef.current];

    const triggers = [];

    sections.forEach((section) => {
      if (!section) return;

      const anim = gsap.fromTo(
        section,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.25,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        },
      );

      triggers.push(anim.scrollTrigger);
    });

    return () => {
      triggers.forEach((t) => t?.kill());
    };
  }, []);
  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-x-hidden overflow-y-auto ">
      <Navigation />
      <main>
        <Hero heroRef={heroRef} />
        <About aboutRef={aboutRef} />
      </main>
    </div>
  );
}

export default App;
