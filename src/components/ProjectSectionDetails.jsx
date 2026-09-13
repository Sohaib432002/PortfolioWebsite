import { coreProjects } from '../data/projects'

const ProjectsSection = () => {
  return (
    <section className="w-full py-12 sm:py-16 px-4 sm:px-6 md:px-10 bg-gradient-to-b from-[#0d1b2a] via-[#1b263b] to-[#0d1b2a] text-white">
      <h2 className="text-center pointer-events-none my-10 text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 sm:mb-10 tracking-tight">
        <span className=" text-white/90 ">My</span>{' '}
        <span className="bg-gradient-to-r  from-cyan-400 to-blue-600 bg-clip-text text-transparent drop-shadow-md">
          Projects
        </span>
      </h2>

      <p className="text-center text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-12 sm:mb-16">
        Selected AI/ML, data science, and full-stack projects. Live demos are linked where a
        deployment exists.
      </p>

      <div className="space-y-8 sm:space-y-12 max-w-6xl mx-auto">
        {coreProjects.map((proj, idx) => (
          <div
            key={idx}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg hover:scale-[1.01] transition-transform duration-300"
          >
            <h3 className="text-2xl pointer-events-none sm:text-3xl md:text-4xl font-bold text-cyan-300 mb-3 sm:mb-4">
              {proj.title}
            </h3>
            <p className="text-gray-300 pointer-events-none text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
              {proj.description}
            </p>

            <div className="mb-4 pointer-events-none">
              <h4 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-1 sm:mb-2">
                Tech Stack:
              </h4>
              <p className="text-gray-400 text-sm sm:text-base">{proj.tech.join(', ')}</p>
            </div>

            <ul className="list-disc pointer-events-none ml-5 text-gray-300 space-y-1 sm:space-y-2 mb-4 sm:mb-6 text-sm sm:text-base">
              {proj.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {proj.github && (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={proj.github}
                  className="px-4 py-2 sm:px-6 sm:py-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 transition-all text-sm sm:text-base"
                >
                  GitHub
                </a>
              )}
              {proj.demo && (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={proj.demo}
                  className="px-4 py-2 sm:px-6 sm:py-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 transition-all text-sm sm:text-base"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
