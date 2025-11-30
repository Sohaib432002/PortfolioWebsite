import ProjectCard from "./ProjectCard";

const projects = [
  {
    name: "AD Mathematics",
    desc: "Advanced mathematical algorithms and problem-solving project.",
    github: "https://github.com/Sohaib432002/AD_Mathematics",
    img: "https://cdn-icons-png.flaticon.com/512/1995/1995529.png" // math icon
  },
  {
    name: "Machine Learning Web",
    desc: "Web projects integrating machine learning models with frontend.",
    github: "https://github.com/Sohaib432002/ML-Web",
    img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" // ML icon
  },
  {
    name: "Nexium Assignment 1",
    desc: "First assignment for Nexium internship focusing on web dev.",
    github: "https://github.com/Sohaib432002/Nexium_As1",
    img: "https://cdn-icons-png.flaticon.com/512/919/919825.png" // coding icon
  },
  {
    name: "Nexium Assignment 2",
    desc: "Second assignment for Nexium with advanced coding challenges.",
    github: "https://github.com/Sohaib432002/nx-2",
    img: "https://cdn-icons-png.flaticon.com/512/1006/1006554.png" // code editor icon
  },
  {
    name: "YouTube Clone",
    desc: "Full-featured YouTube clone built with React and Firebase.",
    github: "https://github.com/Sohaib432002/youtubeClone",
    img: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png" // video icon
  },
  {
    name: "Quiz App",
    desc: "Interactive quiz application developed using React.",
    github: "https://github.com/Sohaib432002/QuizApp",
    img: "https://cdn-icons-png.flaticon.com/512/3039/3039411.png" // quiz icon
  },
  {
    name: "Countries API",
    desc: "API integration project displaying country data dynamically.",
    github: "https://github.com/Sohaib432002/countriesAPi",
    img: "https://cdn-icons-png.flaticon.com/512/201/201623.png" // API icon
  },
  {
    name: "Daraz Clone",
    desc: "E-commerce web application inspired by Daraz, using Django.",
    github: "https://github.com/Sohaib432002/DarazR",
    img: "https://cdn-icons-png.flaticon.com/512/1170/1170576.png" // shopping cart icon
  },
  {
    name: "Portfolio Website",
    desc: "My personal portfolio website to showcase skills and projects.",
    github: "https://github.com/Sohaib432002/myportfolio_web",
    img: "https://cdn-icons-png.flaticon.com/512/3135/3135703.png" // portfolio icon
  },
  {
    name: "E-commerce Django",
    desc: "Full e-commerce platform built with Django and React.",
    github: "https://github.com/Sohaib432002/ecom_website",
    img: "https://cdn-icons-png.flaticon.com/512/1170/1170627.png" // online shopping icon
  },
  {
    name: "Encryptix",
    desc: "Python encryption and cryptography project for data security.",
    github: "https://github.com/Sohaib432002/Encryptix",
    img: "https://cdn-icons-png.flaticon.com/512/2910/2910767.png" // lock/security icon
  },
  {
    name: "Graphical Calculator",
    desc: "Interactive graphical calculator for complex math operations.",
    github: "https://github.com/Sohaib432002/graphcial_calculator",
    img: "https://cdn-icons-png.flaticon.com/512/3415/3415266.png" // calculator icon
  },
  {
    name: "Machine Learning Sonar",
    desc: "ML project predicting sonar signals using Python.",
    github: "https://github.com/Sohaib432002/machine_learning_proj_Sonar",
    img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" // sonar/ML icon
  },
  {
    name: "Web Scraping Project",
    desc: "Scraping data from websites using Python and BeautifulSoup.",
    github: "https://github.com/Sohaib432002/web_scraping_project",
    img: "https://cdn-icons-png.flaticon.com/512/2917/2917995.png" // web scraping icon
  },
  {
    name: "Django React Redux",
    desc: "Integration of Django backend with React frontend using Redux.",
    github: "https://github.com/Sohaib432002/django-React-redux",
    img: "https://cdn-icons-png.flaticon.com/512/919/919840.png" // react/django icon
  },
  {
    name: "My Original Website",
    desc: "Custom-built website showcasing personal projects and info.",
    github: "https://github.com/Sohaib432002/my_original_website_pj",
    img: "https://cdn-icons-png.flaticon.com/512/2920/2920340.png" // website icon
  },
  {
    name: "Test Flask App",
    desc: "Testing Flask app with backend routing and templating.",
    github: "https://github.com/Sohaib432002/Test-flask",
    img: "https://cdn-icons-png.flaticon.com/512/919/919827.png" // flask icon
  },
  {
    name: "Sohaib HTML-CSS Website",
    desc: "Simple static website built with HTML and CSS.",
    github: "https://github.com/Sohaib432002/sohaib-html-css-website",
    img: "https://cdn-icons-png.flaticon.com/512/732/732212.png" // html icon
  },
  {
    name: "Desktop Tutorial",
    desc: "Tutorial project for desktop applications and GUI development.",
    github: "https://github.com/Sohaib432002/desktop-tutorial",
    img: "https://cdn-icons-png.flaticon.com/512/2910/2910769.png" // desktop icon
  }
];



const ProjectSection = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center py-12 px-4 bg-gray-950">

      <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8 text-center text-white">
        <span className="text-cyan-400">My</span>{" "}
        <span className="text-white">Projects</span>
      </h2>
      <div className="text-cyan-500 text-lg sm:text-xl font-medium mb-12 text-center">
        — A Glimpse Into My Work —
      </div>


      <div className="w-full max-w-7xl grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {projects.map((project, idx) => (
          <ProjectCard
            key={idx}
            name={project.name}
            desc={project.desc}
            github={project.github}
            img={project.img}
          />
        ))}
      </div>
    </section>
  );
};
export default ProjectSection
