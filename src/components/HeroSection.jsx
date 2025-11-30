import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { FiArrowDown, FiArrowRight } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";

const ProfileImage = `${process.env.PUBLIC_URL}/assets/profile pic (1).png`;

const HeroSection = () => {
  const canvasRef = useRef(null);

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

      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          let dx = points[i].x - points[j].x;
          let dy = points[i].y - points[j].y;
          let dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.strokeStyle = `rgba(22, 210, 255, ${1 - dist / 150})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.stroke();
          }
        }
      }

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
    <section className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-center overflow-hidden px-4">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center w-full gap-6">

        <motion.div
          className="flex-1 flex flex-col justify-center items-start text-left mb-8 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-cyan-400 text-base sm:text-lg uppercase tracking-[0.2em] mb-2">Hello, I'm</p>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
            Muhammad <span className="text-cyan-400 drop-shadow-[0_0_12px_#22d3ee]">Sohaib</span> Maqsood
          </h1>

          <div className="text-sm sm:text-lg md:text-xl text-white mt-3 mb-4 sm:mb-6">
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

          <div className="flex flex-wrap gap-3 sm:gap-4">
            <motion.a
              href="#/projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-cyan-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md sm:rounded-lg font-medium hover:bg-cyan-400 transition-colors text-sm sm:text-base"
            >
              See My Work <FiArrowRight />
            </motion.a>

            <motion.a
  href={`${process.env.PUBLIC_URL}/assets/Sohaib_CV.pdf`}
  download="Muhammad-Sohaib-Maqsood-CV.pdf"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="inline-flex items-center gap-2 bg-cyan-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md sm:rounded-lg font-medium hover:bg-cyan-400 transition-colors text-sm sm:text-base"
>
  Download CV <FiArrowDown />
</motion.a>
          </div>
        </motion.div>

        <motion.div
          className="flex-1 flex justify-center relative mt-6 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative w-40 sm:w-64 md:w-80">
            <img
              src={ProfileImage}
              alt="Profile"
              className="w-full rounded-full border-4 border-cyan-400 shadow-lg"
            />


          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
