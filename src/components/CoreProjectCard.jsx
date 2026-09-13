import React from 'react'

const CoreProjectCard = React.memo(({ project }) => {
  return (
    <div className="bg-[#1b263b] rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className="w-full h-40 sm:h-48 object-cover object-top bg-[#0d1b2a]"
      />

      <div className="p-5">
        <h3 className="text-lg pointer-events-none sm:text-xl font-bold mb-2">{project.title}</h3>

        <p className="text-gray-300 pointer-events-none text-sm mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="bg-cyan-500/20 pointer-events-none text-cyan-400 text-xs px-2 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-x-4 gap-y-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 text-sm hover:underline"
            >
              GitHub
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 text-sm hover:underline"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
})

export default CoreProjectCard
