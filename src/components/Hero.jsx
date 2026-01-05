import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import heroImg from '../assests/profile/hero-image.png'
import heroBg from '../assests/profile/hero-profile.png'
import heroProfile from '../assests/profile/hero.png'
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
    <section
      className="relative min-h-screen flex items-center"
      style={{
        backgroundImage: `
          linear-gradient(
            to right,
            rgba(2, 6, 23, 0.32),
            rgba(2, 6, 23, 0.41),
            rgba(2,6,23,0.25)
          ),
          url(${heroBg})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "brightness(1.15) contrast(1.1)"  
      }}
    >
      {/* Neon overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-blue-600/10"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2">
        <div></div>

        <div className="text-right md:text-left">
          
          <h1 className="text-4xl md:text-6xl font-bold text-cyan-400 drop-shadow-[0_0_30px_#00ffff]">
            Dhanakarthikeyan P
          </h1>

          <h2 className="mt-4 text-xl text-cyan-300 tracking-wide">
            Full Stack Developer
          </h2>

          <p className="mt-4 text-white/70 max-w-md leading-relaxed">
            Building scalable, high-performance web applications
          </p>

          <div className="mt-8 flex gap-4 justify-end md:justify-start">
            <button className="px-6 py-3 bg-cyan-500 text-black rounded-lg shadow-[0_0_25px_#00ffff] hover:scale-105 transition">
              View Projects
            </button>

            <button className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
//     <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#050b1e] to-[#020617] px-6">
//   <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">

//     {/* IMAGE */}
//     <div className="flex justify-center">
//       <img
//         src={heroImg}
//         alt="Dhanakarthikeyan P"
//         className="
//           w-[320px] md:w-[380px]
//           rounded-2xl
//           shadow-[0_0_60px_#00ffff]
//           border border-cyan-400
//           hover:scale-105
//           transition duration-500
//         "
//       />
//     </div>

//     {/* TEXT */}
//     <div className="text-center md:text-left">
//       <h1 className="text-4xl md:text-6xl font-bold text-cyan-400 drop-shadow-[0_0_25px_#00ffff]">
//         Dhanakarthikeyan P
//       </h1>

//       <h2 className="mt-4 text-xl text-white/90">
//         Full Stack Developer
//       </h2>

//       <p className="mt-4 text-white/60 max-w-md">
//         Building scalable, high-performance web applications
//       </p>

//       <div className="mt-8 flex gap-4 justify-center md:justify-start">
//         <button className="px-6 py-3 bg-cyan-500 text-black rounded-lg shadow-[0_0_20px_#00ffff] hover:bg-cyan-400">
//           View Projects
//         </button>

//         <button className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black">
//           Contact Me
//         </button>
//       </div>
//     </div>

//   </div>
// </section>

    // <section id="home" className="section relative overflow-hidden">
    //   {/* Animated background gradient */}
    //   <div
    //     className="absolute inset-0 opacity-20"
    //     style={{
    //       background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 240, 255, 0.3) 0%, transparent 50%)`,
    //     }}
    //   />

    //   {/* Grid pattern */}
    //   <div className="absolute inset-0 opacity-10" style={{
    //     backgroundImage: 'linear-gradient(rgba(0, 240, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.1) 1px, transparent 1px)',
    //     backgroundSize: '50px 50px'
    //   }} />

    //   <div className="max-w-7xl mx-auto w-full text-center relative z-10">
    //     <motion.div
    //       initial={{ opacity: 0, y: 30 }}
    //       animate={{ opacity: 1, y: 0 }}
    //       transition={{ duration: 0.8 }}
    //     >
    //       <motion.h1
    //         className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4"
    //         initial={{ opacity: 0, scale: 0.8 }}
    //         animate={{ opacity: 1, scale: 1 }}
    //         transition={{ duration: 1, delay: 0.2 }}
    //       >
    //         <span className="bg-gradient-to-r from-neon-cyan via-neon-blue to-white bg-clip-text text-transparent neon-text">
    //           Dhanakarthikeyan P
    //         </span>
    //       </motion.h1>

    //       <motion.p
    //         className="text-xl md:text-3xl lg:text-4xl text-gray-300 mb-8"
    //         initial={{ opacity: 0 }}
    //         animate={{ opacity: 1 }}
    //         transition={{ duration: 0.8, delay: 0.5 }}
    //       >
    //         Full Stack Developer
    //       </motion.p>

    //       <motion.p
    //         className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
    //         initial={{ opacity: 0 }}
    //         animate={{ opacity: 1 }}
    //         transition={{ duration: 0.8, delay: 0.7 }}
    //       >
    //         Building scalable, high-performance web applications
    //       </motion.p>

    //       <motion.div
    //         className="flex flex-col sm:flex-row gap-4 justify-center items-center"
    //         initial={{ opacity: 0, y: 20 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 0.8, delay: 0.9 }}
    //       >
    //         <motion.button
    //           whileHover={{ scale: 1.05 }}
    //           whileTap={{ scale: 0.95 }}
    //           onClick={() => scrollToSection('projects')}
    //           className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-cyan text-dark-navy font-semibold rounded-lg glow-effect"
    //         >
    //           View Projects
    //         </motion.button>
    //         <motion.button
    //           whileHover={{ scale: 1.05 }}
    //           whileTap={{ scale: 0.95 }}
    //           onClick={() => scrollToSection('contact')}
    //           className="px-8 py-4 glass border-2 border-neon-cyan text-neon-cyan font-semibold rounded-lg hover:bg-neon-cyan hover:text-dark-navy transition-all duration-300"
    //         >
    //           Contact Me
    //         </motion.button>
    //       </motion.div>
    //     </motion.div>

    //     {/* Floating elements */}
    //     <motion.div
    //       className="absolute top-20 left-10 w-20 h-20 border border-neon-cyan opacity-30 rounded-full"
    //       animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
    //       transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
    //     />
    //     <motion.div
    //       className="absolute bottom-20 right-10 w-16 h-16 border border-neon-blue opacity-30 rounded-full"
    //       animate={{ y: [0, 20, 0], rotate: [360, 180, 0] }}
    //       transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
    //     />
    //   </div>

    //   {/* Scroll indicator */}
    //   <motion.div
    //     className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
    //     animate={{ y: [0, 10, 0] }}
    //     transition={{ duration: 2, repeat: Infinity }}
    //   >
    //     <div className="w-6 h-10 border-2 border-neon-cyan rounded-full flex justify-center">
    //       <motion.div
    //         className="w-1 h-3 bg-neon-cyan rounded-full mt-2"
    //         animate={{ y: [0, 12, 0] }}
    //         transition={{ duration: 2, repeat: Infinity }}
    //       />
    //     </div>
    //   </motion.div>
    // </section>
  )
}

export default Hero

