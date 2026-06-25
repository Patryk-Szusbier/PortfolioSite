import { Code2, Palette, Zap, Heart } from "lucide-react";
function About({ aboutRef }) {
  const skills = [
    {
      icon: Code2,
      title: "Clean Code",
      description:
        "Piszę czytelny i łatwy w utrzymaniu kod, zgodny z najlepszymi praktykami.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Projektuję intuicyjne interfejsy z dbałością o doświadczenie użytkownika.",
    },
    {
      icon: Zap,
      title: "Performance",
      description:
        "Optymalizuję aplikacje dla maksymalnej wydajności i szybkości działania.",
    },
    {
      icon: Heart,
      title: "Passion",
      description:
        "Pasjonuję się technologią i nieustannie rozwijam swoje umiejętności.",
    },
  ];
  return (
    <section
      ref={aboutRef}
      id="about"
      className="min-h-screen py-24 px-6 relative"
    >
      <div className="absolute inset-0 bg-linear-to-b from-gray-950 via-gray-900 to-gray-950 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl text-center mb-6 bg-linear-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          O mnie
        </h2>

        <div className="about-text max-w-3xl mx-auto text-center mb-20">
          <p className="text-lg text-gray-300 mb-4">
            Jestem programistą z ponad 5-letnim doświadczeniem w tworzeniu
            aplikacji webowych i mobilnych. Specjalizuję się w technologiach
            front-end, szczególnie w React i TypeScript.
          </p>
          <p className="text-lg text-gray-400">
            Moją pasją jest tworzenie rozwiązań, które nie tylko działają
            świetnie, ale również zapewniają wyjątkowe doświadczenie
            użytkownika.
          </p>
        </div>

        <div className="skills-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="skill-card bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl mb-2 text-white">{skill.title}</h3>
                <p className="text-gray-400 text-sm">{skill.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-2xl mb-8 text-gray-200">Technologie</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["React", "TypeScript", "Tailwind CSS", "PostgreSQL"].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-full text-gray-300 hover:border-purple-500 transition-colors duration-300"
                >
                  {tech}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
