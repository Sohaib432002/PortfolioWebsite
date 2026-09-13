import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { FiArrowDown, FiArrowRight, FiChevronsDown } from 'react-icons/fi'
import { TypeAnimation } from 'react-type-animation'
import { SITE } from '../data/site'

const ProfileImage = SITE.profileImage

const HeroSection = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)
    let animationId = 0

    let points = []
    const POINTS_COUNT = 50

    for (let i = 0; i < POINTS_COUNT; i++) {
      points.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          let dx = points[i].x - points[j].x
          let dy = points[i].y - points[j].y
          let dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 150) {
            ctx.strokeStyle = `rgba(22, 210, 255, ${1 - dist / 150})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(points[i].x, points[i].y)
            ctx.lineTo(points[j].x, points[j].y)
            ctx.stroke()
          }
        }
      }

      for (let i = 0; i < points.length; i++) {
        points[i].x += points[i].vx
        points[i].y += points[i].vy

        if (points[i].x < 0 || points[i].x > width) points[i].vx *= -1
        if (points[i].y < 0 || points[i].y > height) points[i].vy *= -1

        ctx.fillStyle = '#16d2ff'
        ctx.beginPath()
        ctx.arc(points[i].x, points[i].y, 3, 0, Math.PI * 2)
        ctx.fill()
      }

      animationId = requestAnimationFrame(draw)
    }

    draw()

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const scrollToAbout = () => {
    const about = document.getElementById('about')
    if (about) {
      about.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-center overflow-hidden px-4 pt-24 pb-24">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center w-full gap-6">
        <motion.div
          className="flex-1 flex flex-col justify-center items-start text-left mb-8 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-cyan-400 text-base pointer-events-none sm:text-lg uppercase tracking-[0.2em] mb-2">
            Hello, I'm
          </p>
          <h1 className="text-3xl pointer-events-none sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
            Muhammad <span className="text-cyan-400 drop-shadow-[0_0_12px_#22d3ee]">Sohaib</span>{' '}
            Maqsood
          </h1>

          <div className="text-sm pointer-events-none sm:text-lg md:text-xl text-white mt-3 mb-4 sm:mb-6">
            <TypeAnimation
              sequence={[
                'AI / Machine Learning Engineer ',
                2000,
                'Applied Mathematics & Data Science ',
                2000,
                'Full-Stack Developer ',
                2000,
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
              href={SITE.cvPath}
              download={SITE.cvFileName}
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
          <div className="profile-ring relative w-40 sm:w-64 md:w-80">
            <img
              src={ProfileImage}
              alt="Muhammad Sohaib Maqsood"
              className="relative z-10 w-full aspect-square rounded-full object-cover object-top"
            />
          </div>
        </motion.div>
      </div>

      <button
        type="button"
        onClick={scrollToAbout}
        aria-label="Scroll down to more content"
        className="scroll-hint absolute bottom-5 left-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full border-2 border-cyan-800 bg-cyan-900 text-cyan-100 shadow-[0_0_14px_rgba(8,47,73,0.7)] hover:bg-cyan-950"
      >
        <FiChevronsDown size={26} aria-hidden="true" />
      </button>
    </section>
  )
}

export default HeroSection
