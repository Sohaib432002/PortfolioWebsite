// import ProjectCard from './ProjectCard'
import CoreProjectCard from './CoreProjectCard'
const ProjectsSection = () => {
  const projects = [
    {
      title: 'YouTube Clone App',
      description:
        'A YouTube Clone built to deeply understand React architecture, API integration, and responsive UI development. This large-scale project significantly enhanced my frontend engineering skills.',
      image: '/PortfolioWebsite/assets/youtubeClone.png',
      tech: ['ReactJS', 'Tailwind CSS', 'REST API'],
      points: [
        'Component-based scalable architecture',
        'Responsive UI using Tailwind CSS',
        'API data fetching & rendering',
        'Large project folder structuring practice',
      ],
      github: 'https://github.com/Sohaib432002/youtubeClone',
      demo: 'https://www.linkedin.com/posts/muhammad-sohaib-maqsood-72b785244_reactjs-webdevelopment-frontenddeveloper-activity-7434573887910338560-iO2i?utm_source=share&utm_medium=member_desktop&rcm=ACoAADyggdMBS5Nu2OumRPqGvRaal16wb5s8vzI',
    },

    {
      title: 'Symptoms & Clinical Data Dashboard',
      description:
        'Interactive healthcare dashboard for visualizing patient clinical data with dynamic filtering and real-time chart updates.',
      image: '/PortfolioWebsite/assets/Dashboard.png',
      tech: ['React', 'Recharts', 'Context API', 'Data Visualization'],
      points: [
        'Age-based filtering',
        'Gallstone status filtering',
        'Pie chart for symptom prevalence',
        'Bar chart for BMI, TBW & VFR comparison',
        'Live chart updates',
        'Loader component for async data',
      ],
      github: 'https://github.com/Sohaib432002/Dashboard',
      demo: 'https://www.linkedin.com/posts/muhammad-sohaib-maqsood-72b785244_datavisualization-healthcareanalytics-reactjs-activity-7429927540523175936-ouCP?utm_source=share&utm_medium=member_desktop&rcm=ACoAADyggdMBS5Nu2OumRPqGvRaal16wb5s8vzI',
    },

    {
      title: 'ML + Web Integration',
      description:
        'Machine Learning models integrated with a live web interface. Backend APIs process predictions and frontend displays results interactively.',
      image: '/PortfolioWebsite/assets/ML.png',
      tech: ['ReactJS', 'Python', 'Flask', 'Django', 'Machine Learning'],
      points: [
        'Real-time ML predictions',
        'Backend API integration',
        'Interactive prediction UI',
        'Full frontend-backend integration',
      ],
      github: 'https://github.com/Sohaib432002/Machine-Learning-Two-Apps',
      demo: 'https://www.linkedin.com/posts/muhammad-sohaib-maqsood-72b785244_two-apps-have-been-developed-data-inspect-activity-7339214026909913090-SapC?utm_source=share&utm_medium=member_desktop&rcm=ACoAADyggdMBS5Nu2OumRPqGvRaal16wb5s8vzI',
    },

    // {
    //   title: 'Full-Stack App (Django + React + Redux)',
    //   description:
    //     'A scalable full-stack web app using Django REST API and React with Redux state management. Includes authentication, protected routes, and optimized UI.',
    //   image: '/images/fullstack.png',
    //   tech: ['React', 'Redux', 'Django REST', 'Tailwind CSS'],
    //   points: [
    //     'Full CRUD REST APIs',
    //     'JWT Authentication',
    //     'Protected Routes',
    //     'Redux global state management',
    //   ],
    //   github: '---',
    //   demo: '---',
    // },

    {
      title: 'E-Commerce Website (Django)',
      description:
        'Complete e-commerce platform with product filtering, cart system, checkout flow, and admin product control.',
      image: '/PortfolioWebsite/assets/EcomDj.png',
      tech: ['Django', 'HTML', 'CSS', 'JavaScript'],
      points: [
        'Cart & checkout system',
        'Admin dashboard',
        'Product search & filters',
        'Responsive UI',
      ],
      github: 'https://github.com/Sohaib432002/django_web_EC',
      demo: 'https://www.linkedin.com/posts/muhammad-sohaib-maqsood-72b785244_webdevelopment-frontend-backend-activity-7314687010470817792-yuhl?utm_source=share&utm_medium=member_desktop&rcm=ACoAADyggdMBS5Nu2OumRPqGvRaal16wb5s8vzI',
    },

    {
      title: 'Web Scraping Project',
      description:
        'Automated web scraping system using Python to extract, clean, and prepare real-time datasets for analysis or ML usage.',
      image: '/PortfolioWebsite/assets/WebScrap.png',
      tech: ['Python', 'BeautifulSoup', 'Pandas'],
      points: [
        'Automated data extraction',
        'Dataset generation (CSV)',
        'Data cleaning & preprocessing',
        'ML-ready structured data',
      ],
      github: 'https://github.com/Sohaib432002/web_scraping_project',
      demo: 'https://www.linkedin.com/posts/muhammad-sohaib-maqsood-72b785244_python-webscraping-datascience-activity-7301299152989163520-yJdn?utm_source=share&utm_medium=member_desktop&rcm=ACoAADyggdMBS5Nu2OumRPqGvRaal16wb5s8vzI',
    },

    {
      title: 'Portfolio Projects Showcase',
      description:
        'Collection of frontend and full-stack projects built using HTML, CSS, JavaScript, and React. Includes a dynamic portfolio website.',
      image: '/PortfolioWebsite/assets/Portfolio.png',
      tech: ['HTML', 'CSS', 'JavaScript', 'React', 'Git'],
      points: [
        'Reusable React components',
        'Interactive JavaScript features',
        'Responsive layouts',
        'Live deployment',
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
      <h2 className="text-3xl pointer-events-none sm:text-5xl md:text-6xl font-extrabold mb-6 text-center">
        <span>My </span>
        <span className="text-cyan-400">Core Projects</span>
      </h2>

      <p className="text-center text-sm pointer-events-none sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-12">
        Featured Machine Learning, Full-Stack & Frontend projects.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((proj, idx) => (
          <CoreProjectCard key={idx} project={proj} />
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
