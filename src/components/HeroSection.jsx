import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { FiArrowDown, FiArrowRight } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";

const ProfileImage = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg";
const PythonLogo = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg";
const JSLogo = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg";
const VSCodeLogo = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg";

const HeroSection = () => {
  const logos = [PythonLogo, JSLogo, VSCodeLogo];
  const canvasRef = useRef(null);

  // AI Grid Background
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    let points = [];
    const POINTS_COUNT = 50;

    for (let i = 0; i < POINTS_COUNT; i++) {
      points.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw lines
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          let dx = points[i].x - points[j].x;
          let dy = points[i].y - points[j].y;
          let dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.strokeStyle = `rgba(22, 210, 255, ${1 - dist/150})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw points
      for (let i = 0; i < points.length; i++) {
        points[i].x += points[i].vx;
        points[i].y += points[i].vy;

        if (points[i].x < 0 || points[i].x > width) points[i].vx *= -1;
        if (points[i].y < 0 || points[i].y > height) points[i].vy *= -1;

        ctx.fillStyle = "#16d2ff";
        ctx.beginPath();
        ctx.arc(points[i].x, points[i].y, 3, 0, Math.PI * 2);
        ctx.fill();
      }

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
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* AI Grid Canvas */}
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center px-6">
        {/* Left Side */}
        <motion.div
          className="flex-1 flex flex-col justify-center items-start text-left mb-10 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-cyan-400 text-lg uppercase tracking-[0.3em] mb-3">Hello, I'm</p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
            Muhammad <span className="text-cyan-400 drop-shadow-[0_0_12px_#22d3ee]">Sohaib</span> Maqsood
          </h1>

          <div className="text-xl md:text-2xl text-white mb-6">
            <TypeAnimation
              sequence={[
                "Python Data Scientist ", 2000,
                "Machine Learning Enthusiast ", 2000,
                "Web Developer ", 2000,
                "AI Enthusiast ", 2000
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="/projects"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-cyan-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-cyan-400 transition-colors"
            >
              See My Work <FiArrowRight />
            </motion.a>

            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-cyan-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-cyan-400 transition-colors"
            >
              Download CV <FiArrowDown />
            </motion.a>
          </div>
        </motion.div>

        {/* Right Side - Profile Image + Logos */}
        <motion.div
          className="flex-1 flex justify-center relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative w-64 md:w-80">
            <img
              src={ProfileImage}
              alt="Profile"
              className="w-full rounded-full border-4 border-cyan-400 shadow-lg"
            />

            {logos.map((logo, index) => {
              const angle = (index / logos.length) * 360;
              return (
                <motion.img
                  key={index}
                  src={logo}
                  alt={`Logo ${index}`}
                  className="w-12 h-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white shadow-md bg-white p-1"
                  style={{
                    transform: `rotate(${angle}deg) translate(100px) rotate(-${angle}deg)`,
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                />
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
