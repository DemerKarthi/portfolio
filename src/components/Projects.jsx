import { motion } from 'framer-motion'

const Projects = () => {
  const projects = [
    {
      title: 'EnvisionShop',
      description: 'AI-based shopping platform with voice-controlled navigation',
      tech: ['AI', 'React', 'Node.js', 'Voice Recognition'],
      achievement: 'Reduced user interaction time by ~30%',
    },
    {
      title: 'Wink-To-Scroll',
      description: 'Hands-free browsing system using wink-triggered scrolling',
      tech: ['Computer Vision', 'JavaScript', 'WebRTC'],
      achievement: 'Built using computer vision techniques',
    },
    {
      title: 'AR Tourist Guide',
      description: 'Augmented reality navigation system',
      tech: ['Unity3D', 'Vuforia', 'AR', 'C#'],
      achievement: 'Built with Unity3D and Vuforia',
    },
  ]

  return (
    <section id="projects" className="section">
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
              Key Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-neon-cyan mx-auto shadow-[0_0_10px_#00f0ff]" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass rounded-2xl p-6 cursor-pointer glow-effect group relative"
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold text-neon-cyan mb-3 group-hover:text-neon-blue transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-dark-blue border border-neon-cyan rounded-full text-neon-cyan"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-neon-cyan/20">
                <p className="text-sm text-neon-blue font-medium">
                  {project.achievement}
                </p>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-neon-cyan/10 to-transparent pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
