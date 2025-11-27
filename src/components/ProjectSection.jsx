import { useEffect, useRef } from "react";
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
    name: "Ali Homeland",
    desc: "Web project for Ali Homeland showcasing dynamic content.",
    github: "https://github.com/Sohaib432002/aliHomeland",
    img: "https://cdn-icons-png.flaticon.com/512/2920/2920325.png" // website icon
  },
  {
    name: "Countries API",
    desc: "API integration project displaying country data dynamically.",
    github: "https://github.com/Sohaib432002/countriesAPi",
    img: "https://cdn-icons-png.flaticon.com/512/201/201623.png" // API icon
  },
  {
    name: "StayEasy Web",
    desc: "Full-stack web project for StayEasy web application.",
    github: "https://github.com/stayeasy57/StayEasy-Web",
    img: "https://cdn-icons-png.flaticon.com/512/414/414927.png" // hotel icon
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
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const points = [];
    const POINTS_COUNT = 50;

    for (let i = 0; i < POINTS_COUNT; i++) {
      points.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5
      });
    }

    const draw = () => {
      ctx.fillStyle = "#0a0f2a";
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          let dx = points[i].x - points[j].x;
          let dy = points[i].y - points[j].y;
          let dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.strokeStyle = `rgba(22,210,255,${0.1 + 0.7 * (1 - dist / 120)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.stroke();
          }
        }
      }

      points.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 5);
        gradient.addColorStop(0, "rgba(22,210,255,1)");
        gradient.addColorStop(1, "rgba(22,210,255,0)");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center py-20 overflow-hidden">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />
      <h2 className="relative z-10 text-5xl md:text-7xl font-extrabold mb-12 text-center leading-tight text-white drop-shadow-lg">
        <span className="text-cyan-400">My</span>{" "}
        <span className="text-white">Projects</span>
        <div className="text-cyan-500 text-2xl md:text-3xl font-semibold mt-3">
          — A Glimpse Into My Work —
        </div>
      </h2>

      <div className="relative z-10 w-full flex items-center justify-center p-4">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full max-w-7xl justify-items-center">
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
      </div>
    </section>
  );
};

export default ProjectSection;
