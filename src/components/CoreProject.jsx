import { coreProjects } from '../data/projects'
import CoreProjectCard from './CoreProjectCard'

const ProjectsSection = () => {
  return (
    <section className="w-full py-12 sm:py-16 px-4 sm:px-6 md:px-10 bg-gradient-to-b from-[#0d1b2a] via-[#1b263b] to-[#0d1b2a] text-white">
      <h2 className="text-3xl pointer-events-none sm:text-5xl md:text-6xl font-extrabold mb-6 text-center">
        <span>My </span>
        <span className="text-cyan-400">Core Projects</span>
      </h2>

      <p className="text-center text-sm pointer-events-none sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-12">
        Featured AI/ML, data science, and full-stack projects with live deployments.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {coreProjects.map((proj, idx) => (
          <CoreProjectCard key={idx} project={proj} />
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
