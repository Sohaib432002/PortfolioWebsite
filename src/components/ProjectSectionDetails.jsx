const ProjectsSection = () => {
  const projects = [
    {
      title: 'YouTube Clone App',
      desc: 'A YouTube Clone app built as a learning project to explore ReactJS, Tailwind CSS, and backend API integration. Although the project became quite large and I eventually stopped before fully completing it, I spent a significant amount of time developing it and gained valuable experience.',
      tech: 'ReactJS, Tailwind CSS',
      points: [
        'Gained hands-on experience with ReactJS and component-based architecture',
        'Implemented responsive designs using Tailwind CSS',
        'Worked with backend API concepts for fetching and displaying data',
        'Practiced structuring a large-scale application',
      ],
      github: 'https://github.com/Sohaib432002/youtubeClone',
      demo: 'https://www.linkedin.com/posts/muhammad-sohaib-maqsood-72b785244_reactjs-webdevelopment-frontenddeveloper-activity-7434573887910338560-iO2i?utm_source=share&utm_medium=member_desktop&rcm=ACoAADyggdMBS5Nu2OumRPqGvRaal16wb5s8vzI',
    },
    {
      title: 'Symptoms & Clinical Data Dashboard',
      des: 'Interactive React dashboard to visualize patient clinical data and symptoms, allowing dynamic filtering by age and gallstone status. Includes Pie and Bar charts for symptom prevalence and clinical measures.',
      tech: ['React', 'Recharts', 'Context API', 'Responsive Design', 'Data Visualization'],
      points: [
        'Dynamic age-based filtering of patients',
        'Gallstone status filter to show Yes / No patients',
        'Pie chart showing prevalence of major symptoms (Comorbidity, Diabetes, CAD, Hyperlipidemia)',
        'Bar chart comparing BMI, Total Body Water (TBW), and Visceral Fat Rating (VFR)',
        'Responsive and themed UI using custom color palette',
        'Loader component while data is fetching',
        'Real-time updates of charts based on selected filters',
        'Clean and modular code using React hooks and Context API',
      ],
      github: 'https://github.com/Sohaib432002/Dashboard',
      demo: 'https://www.linkedin.com/posts/muhammad-sohaib-maqsood-72b785244_datavisualization-healthcareanalytics-reactjs-activity-7429927540523175936-ouCP?utm_source=share&utm_medium=member_desktop&rcm=ACoAADyggdMBS5Nu2OumRPqGvRaal16wb5s8vzI',
    },
    {
      title: 'ML + Web Integration',
      desc: 'A project where Machine Learning meets Web Development. Models run on a backend API and results are displayed beautifully on a live web interface.',
      tech: 'ReactJS, Python, Flask/Django, ML Models',
      points: [
        'Real-time ML predictions',
        'Interactive UI',
        'API-based ML communication',
        'Frontend + Backend synergy',
      ],
      github: 'https://github.com/Sohaib432002/Machine-Learning-Two-Apps',
      demo: 'https://www.linkedin.com/posts/muhammad-sohaib-maqsood-72b785244_two-apps-have-been-developed-data-inspect-activity-7339214026909913090-SapC?utm_source=share&utm_medium=member_desktop&rcm=ACoAADyggdMBS5Nu2OumRPqGvRaal16wb5s8vzI',
    },
    // {
    //   title: 'Full-Stack App with Django + React + Redux (Working)',
    //   desc: 'A powerful full-stack web application built using Django REST API and React with Redux for state management. Includes authentication, routing, secure APIs, and optimized frontend.(Currently Working On it..)',
    //   tech: 'React, Redux, Django REST, Tailwind CSS',
    //   points: [
    //     'Full CRUD API',
    //     'User authentication & protected routes',
    //     'Redux global state management',
    //     'Clean UI with Tailwind',
    //   ],
    //   github: '---',
    //   demo: '---',
    // },
    {
      title: 'E-Commerce Website using Django',
      desc: 'A complete e-commerce system with product search, filtering, cart, checkout, admin product control, and secure backend.',
      tech: 'Django, HTML,CSS,Javascript',
      points: [
        'Complete cart + checkout',
        'Admin panel for products',
        'Search + category filters',
        'Responsive UI',
      ],
      github: 'https://github.com/Sohaib432002/django_web_EC',
      demo: 'https://www.linkedin.com/posts/muhammad-sohaib-maqsood-72b785244_webdevelopment-frontend-backend-activity-7314687010470817792-yuhl?utm_source=share&utm_medium=member_desktop&rcm=ACoAADyggdMBS5Nu2OumRPqGvRaal16wb5s8vzI',
    },
    {
      title: 'Web Scraping Project',
      desc: 'Extracted and analyzed real-time website data using BeautifulSoup and automated scripts. Useful for research and dataset creation.',
      tech: 'Python, BeautifulSoup, Pandas',
      points: [
        'Automated data extraction',
        'CSV dataset generation',
        'Cleaning + preprocessing',
        'Use case: ML-ready data',
      ],
      github: 'https://github.com/Sohaib432002/web_scraping_project',
      demo: 'https://www.linkedin.com/posts/muhammad-sohaib-maqsood-72b785244_python-webscraping-datascience-activity-7301299152989163520-yJdn?utm_source=share&utm_medium=member_desktop&rcm=ACoAADyggdMBS5Nu2OumRPqGvRaal16wb5s8vzI',
    },
    {
      title: 'Portfolio Projects Showcase',
      des: `I have developed multiple web projects using HTML, CSS, JavaScript, and React. 
  Additionally, I have built a full portfolio website using React and integrated it with backend tools to make it dynamic and interactive. 
  You can check out my work through the links provided below.`,
      tech: ['HTML', 'CSS', 'JavaScript', 'React', 'Git', 'Responsive Design'],
      points: [
        'Designed and implemented responsive web pages',
        'Used React components for modular and reusable code',
        'Integrated interactive features with JavaScript',
        'Built a dynamic portfolio site using React',
        'Deployed projects online for public access',
      ],
      github: 'https://github.com/Sohaib432002/protfoilo_web',
      demo: 'https://www.linkedin.com/posts/muhammad-sohaib-maqsood-72b785244_webdevelopment-frontend-backend-activity-7314687666174803968-jjkz?utm_source=share&utm_medium=member_desktop&rcm=ACoAADyggdMBS5Nu2OumRPqGvRaal16wb5s8vzI',
      github2: 'https://github.com/Sohaib432002/awisklayar_proj',
      demo2:
        'https://www.linkedin.com/posts/muhammad-sohaib-maqsood-72b785244_webdevelopment-frontend-backend-activity-7314687783283900417-USKK?utm_source=share&utm_medium=member_desktop&rcm=ACoAADyggdMBS5Nu2OumRPqGvRaal16wb5s8vzI',
    },
  ]

  return (
    <section className="w-full py-12 sm:py-16 px-4 sm:px-6 md:px-10 bg-gradient-to-b from-[#0d1b2a] via-[#1b263b] to-[#0d1b2a] text-white">
      <h2 className="text-center pointer-events-none my-10 text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 sm:mb-10 tracking-tight">
        <span className=" text-white/90 ">My</span>{' '}
        <span className="bg-gradient-to-r  from-cyan-400 to-blue-600 bg-clip-text text-transparent drop-shadow-md">
          Projects
        </span>
      </h2>

      <p className="text-center text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-12 sm:mb-16">
        These are my top projects including Machine Learning, Web Development, Full-Stack
        applications, API tools, dashboards, and Python-based tools.
      </p>

      <div className="space-y-8 sm:space-y-12 max-w-6xl mx-auto">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg hover:scale-[1.01] transition-transform duration-300"
          >
            <h3 className="text-2xl pointer-events-none sm:text-3xl md:text-4xl font-bold text-cyan-300 mb-3 sm:mb-4">
              {proj.title}
            </h3>
            <p className="text-gray-300 pointer-events-none text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
              {proj.desc}
            </p>

            <div className="mb-4 pointer-events-none">
              <h4 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-1 sm:mb-2">
                Tech Stack:
              </h4>
              <p className="text-gray-400 text-sm sm:text-base">{proj.tech}</p>
            </div>

            <ul className="list-disc pointer-events-none ml-5 text-gray-300 space-y-1 sm:space-y-2 mb-4 sm:mb-6 text-sm sm:text-base">
              {proj.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <div className="flex ">
              <div className="flex items-center mx-2 gap-4 mt-2 sm:mt-4">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={proj.github}
                  className="px-4 py-2 sm:px-6 sm:py-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 transition-all text-sm sm:text-base"
                >
                  GitHub
                </a>
              </div>

              <div className="flex items-center gap-4 mt-2 sm:mt-4">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={proj.demo}
                  className="px-4 py-2 sm:px-6 sm:py-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 transition-all text-sm sm:text-base"
                >
                  Demo
                </a>
              </div>
              {proj.github2 && (
                <div className="flex items-center mx-2 gap-4 mt-2 sm:mt-4">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={proj.github2}
                    className="px-4 py-2 sm:px-6 sm:py-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 transition-all text-sm sm:text-base"
                  >
                    GitHub
                  </a>
                </div>
              )}
              {proj.demo2 && (
                <div className="flex items-center gap-4 mt-2 sm:mt-4">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={proj.demo2}
                    className="px-4 py-2 sm:px-6 sm:py-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 transition-all text-sm sm:text-base"
                  >
                    Demo
                  </a>
                </div>
              )}
              {proj.github3 && (
                <div className="flex items-center mx-2 gap-4 mt-2 sm:mt-4">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={proj.github3}
                    className="px-4 py-2 sm:px-6 sm:py-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 transition-all text-sm sm:text-base"
                  >
                    GitHub
                  </a>
                </div>
              )}
              {proj.demo3 && (
                <div className="flex items-center gap-4 mt-2 sm:mt-4">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={proj.demo3}
                    className="px-4 py-2 sm:px-6 sm:py-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 transition-all text-sm sm:text-base"
                  >
                    Demo
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
