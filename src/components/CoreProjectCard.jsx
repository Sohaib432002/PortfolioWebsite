import React from 'react'

const ProjectCard = ({ project }) => {
  return (
    <div className="group relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-xl hover:shadow-cyan-500/30 transition-all duration-500 hover:-translate-y-2">
      {/* Project Image */}
      {project.image && (
        <div className="relative h-52 sm:h-60 md:h-64 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        </div>
      )}

      <div className="p-6 sm:p-8">
        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-bold text-cyan-300 mb-3 group-hover:text-cyan-400 transition">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-5">
          {project.desc || project.des}
        </p>

        {project.tech && (
          <div className="mb-5">
            <h4 className="text-lg font-semibold text-cyan-400 mb-2">Tech Stack</h4>

            <div className="flex flex-wrap gap-2">
              {(Array.isArray(project.tech) ? project.tech : project.tech.split(',')).map(
                (tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs sm:text-sm bg-cyan-500/20 text-cyan-300 rounded-full border border-cyan-400/30"
                  >
                    {tech.trim()}
                  </span>
                )
              )}
            </div>
          </div>
        )}

        {project.points && (
          <ul className="list-disc ml-5 text-gray-300 space-y-2 mb-6 text-sm sm:text-base">
            {project.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        )}

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-4">
          {[project.github, project.github2, project.github3].map(
            (link, idx) =>
              link && (
                <a
                  key={idx}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={link}
                  className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white text-sm sm:text-base transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/40"
                >
                  GitHub
                </a>
              )
          )}

          {[project.demo, project.demo2, project.demo3].map(
            (link, idx) =>
              link && (
                <a
                  key={idx}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={link}
                  className="px-5 py-2 rounded-xl bg-transparent border border-cyan-400 text-cyan-300 hover:bg-cyan-500 hover:text-white text-sm sm:text-base transition-all duration-300"
                >
                  Demo
                </a>
              )
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
