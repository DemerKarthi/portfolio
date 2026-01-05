import { motion } from 'framer-motion'

const Education = () => {
  return (
    <section id="education" className="section">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neon-cyan to-neon-blue bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <div className="w-24 h-1 bg-neon-cyan mx-auto shadow-[0_0_10px_#00f0ff]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass rounded-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Glow effect */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-cyan to-transparent" />

            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-6"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-neon-cyan mb-2">
                  B.E. Computer Science and Engineering
                </h3>
                <p className="text-xl text-gray-300 mb-2">
                  Solamalai College of Engineering
                </p>
                <p className="text-lg text-neon-blue font-semibold">
                  CGPA: 8.19
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center gap-2 text-gray-400"
              >
                <svg className="w-5 h-5 text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Jun 2020 – May 2024</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education

