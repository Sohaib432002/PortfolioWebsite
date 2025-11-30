const ProjectsSection = () => {
  const projects = [
   {
  "title": "YouTube Clone App",
  "desc": "A YouTube Clone app built as a learning project to explore ReactJS, Tailwind CSS, and backend API integration. Although the project became quite large and I eventually stopped before fully completing it, I spent a significant amount of time developing it and gained valuable experience.",
  "tech": "ReactJS, Tailwind CSS",
  "points": [
    "Gained hands-on experience with ReactJS and component-based architecture",
    "Implemented responsive designs using Tailwind CSS",
    "Worked with backend API concepts for fetching and displaying data",
    "Practiced structuring a large-scale application"
  ],
  "github": "https://github.com/Sohaib432002/youtubeClone"
},
    {
      title: "ML + Web Integration",
      desc: "A project where Machine Learning meets Web Development. Models run on a backend API and results are displayed beautifully on a live web interface.",
      tech: "ReactJS, Python, Flask/Django, ML Models",
      points: [
        "Real-time ML predictions",
        "Interactive UI",
        "API-based ML communication",
        "Frontend + Backend synergy",
      ],
      github: "https://github.com/Sohaib432002/AD_Mathematics",
    },
    {
      title: "Full-Stack App with Django + React + Redux (Working)",
      desc: "A powerful full-stack web application built using Django REST API and React with Redux for state management. Includes authentication, routing, secure APIs, and optimized frontend.(Currently Working On it..)",
      tech: "React, Redux, Django REST, Tailwind CSS",
      points: [
        "Full CRUD API",
        "User authentication & protected routes",
        "Redux global state management",
        "Clean UI with Tailwind",
      ],
      github: "---",
    },
    {
      title: "E-Commerce Website",
      desc: "A complete e-commerce system with product search, filtering, cart, checkout, admin product control, and secure backend.",
      tech: "Django, HTML,CSS,Javascript",
      points: [
        "Complete cart + checkout",
        "Admin panel for products",
        "Search + category filters",
        "Responsive UI",
      ],
      github: "https://github.com/Sohaib432002/django_web_EC",
    },
    {
      title: "Web Scraping Project",
      desc: "Extracted and analyzed real-time website data using BeautifulSoup and automated scripts. Useful for research and dataset creation.",
      tech: "Python, BeautifulSoup, Pandas",
      points: [
        "Automated data extraction",
        "CSV dataset generation",
        "Cleaning + preprocessing",
        "Use case: ML-ready data",
      ],
      github: "https://github.com/Sohaib432002/web_scraping_project",
    },
  ];

  return (
    <section className="w-full py-12 sm:py-16 px-4 sm:px-6 md:px-10 bg-gradient-to-b from-[#0d1b2a] via-[#1b263b] to-[#0d1b2a] text-white">

      <h2 className="text-center my-10 text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 sm:mb-10 tracking-tight">
        <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent drop-shadow-md">My</span>{" "}
        <span className="text-white/90">Projects</span>
      </h2>

      <p className="text-center text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-12 sm:mb-16">
        These are my top projects including Machine Learning, Web Development, Full-Stack applications, API tools, dashboards, and Python-based tools.
      </p>

      <div className="space-y-8 sm:space-y-12 max-w-6xl mx-auto">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg hover:scale-[1.01] transition-transform duration-300"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-300 mb-3 sm:mb-4">{proj.title}</h3>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">{proj.desc}</p>

            <div className="mb-4">
              <h4 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-1 sm:mb-2">Tech Stack:</h4>
              <p className="text-gray-400 text-sm sm:text-base">{proj.tech}</p>
            </div>

            <ul className="list-disc ml-5 text-gray-300 space-y-1 sm:space-y-2 mb-4 sm:mb-6 text-sm sm:text-base">
              {proj.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            <div className="flex items-center gap-4 mt-2 sm:mt-4">
              <a
                href={proj.github}
                className="px-4 py-2 sm:px-6 sm:py-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 transition-all text-sm sm:text-base"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
