import { motion } from 'framer-motion'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="section">
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
              Professional Summary
            </span>
          </h2>
          <div className="w-24 h-1 bg-neon-cyan mx-auto shadow-[0_0_10px_#00f0ff]" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 md:p-12 max-w-4xl mx-auto"
        >
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6"
          >
            Full Stack Developer with <span className="text-neon-cyan font-semibold">1.5+ years</span> of professional experience building, deploying, and maintaining scalable web applications in startup environments.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6"
          >
            Strong expertise in <span className="text-neon-cyan font-semibold">React, Node.js, GraphQL, MySQL</span>, and real-time systems. Experienced in integrating third-party APIs, payment gateways, authentication systems, and improving performance, reliability, and user experience.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 mt-8"
          >
            <span className="px-4 py-2 glass border border-neon-cyan rounded-full text-sm text-neon-cyan">
              Full Stack Development
            </span>
            <span className="px-4 py-2 glass border border-neon-cyan rounded-full text-sm text-neon-cyan">
              Real-Time Systems
            </span>
            <span className="px-4 py-2 glass border border-neon-cyan rounded-full text-sm text-neon-cyan">
              API Integration
            </span>
            <span className="px-4 py-2 glass border border-neon-cyan rounded-full text-sm text-neon-cyan">
              Performance Optimization
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

