import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 90 },
        { name: 'JavaScript', level: 90 },
        { name: 'React.js', level: 90 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'GraphQL (Apollo)', level: 85 },
        { name: 'REST APIs', level: 90 },
        { name: 'Python (FastAPI)', level: 75 },
      ],
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MySQL', level: 90 },
        { name: 'Firebase', level: 85 },
        { name: 'Sequelize ORM', level: 85 },
      ],
    },
    {
      title: 'Real-Time & Integrations',
      skills: [
        { name: 'Socket.IO', level: 85 },
        { name: 'Ayrshare API', level: 80 },
        { name: 'Firebase Cloud Messaging', level: 85 },
        { name: 'Payment Gateways', level: 85 },
      ],
    },
    {
      title: 'DevOps & Tools',
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'Linux (RHCSA)', level: 85 },
        { name: 'Nginx', level: 80 },
        { name: 'PM2', level: 80 },
      ],
    },
  ]

  return (
    <section id="skills" className="section">
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
              Technical Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-neon-cyan mx-auto shadow-[0_0_10px_#00f0ff]" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="glass rounded-2xl p-6 md:p-8"
            >
              <h3 className="text-2xl font-bold text-neon-cyan mb-6">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-neon-cyan text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-dark-blue rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                        className="h-full bg-gradient-to-r from-neon-blue to-neon-cyan rounded-full shadow-[0_0_10px_#00f0ff]"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
