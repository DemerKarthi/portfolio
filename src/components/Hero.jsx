import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="section relative overflow-hidden">
      {/* Animated background gradient */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 240, 255, 0.3) 0%, transparent 50%)`,
        }}
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(rgba(0, 240, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />

      <div className="max-w-7xl mx-auto w-full text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-neon-cyan via-neon-blue to-white bg-clip-text text-transparent neon-text">
              Dhanakarthikeyan P
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-3xl lg:text-4xl text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Full Stack Developer
          </motion.p>

          <motion.p
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Building scalable, high-performance web applications
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-cyan text-dark-navy font-semibold rounded-lg glow-effect"
            >
              View Projects
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 glass border-2 border-neon-cyan text-neon-cyan font-semibold rounded-lg hover:bg-neon-cyan hover:text-dark-navy transition-all duration-300"
            >
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Floating elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 border border-neon-cyan opacity-30 rounded-full"
          animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-16 h-16 border border-neon-blue opacity-30 rounded-full"
          animate={{ y: [0, 20, 0], rotate: [360, 180, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-neon-cyan rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-neon-cyan rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero

