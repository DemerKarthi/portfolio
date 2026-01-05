import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
      company: 'Dot Com Infoway Pvt. Ltd.',
      role: 'Full Stack Developer (AI Division)',
      period: 'Sep 2025 – Present',
      location: 'Madurai',
      responsibilities: [
        'Developed and enhanced "Alfred", a social media automation agent supporting posting across 3+ platforms',
        'Reduced manual scheduling effort by ~60%',
        'Integrated Ayrshare API to automate publishing and scheduling of 100+ posts/day',
        'Implemented real-time updates using Socket.IO, improving latency by ~40%',
        'Assisted in deployment and server management using Nginx and PM2',
        'Collaborated with AI engineers, backend developers, and clients in agile sprints',
      ],
    },
    {
      company: 'RadicalStart InfoLab Pvt. Ltd.',
      role: 'Full Stack Developer',
      period: 'Sep 2024 – Aug 2025',
      location: '',
      responsibilities: [
        'Built and deployed 3+ full-stack applications using React, Node.js, MySQL, Sequelize, GraphQL',
        'Developed rental-based booking platform with slot-based availability logic (1000+ users)',
        'Implemented JWT authentication and role-based access control',
        'Integrated PayPal, Stripe, and Libelula payment gateways (reduced failures by ~25%)',
        'Implemented Firebase Cloud Messaging (FCM) push notifications',
        'Optimized performance using Next.js SSR for better SEO and load times',
      ],
    },
    {
      company: 'Nexus Info',
      role: 'Web Developer Intern',
      period: 'Dec 2023 – Mar 2024',
      location: '',
      responsibilities: [
        'Delivered 3 production-ready web projects',
        'Built login/signup systems and portfolio websites',
        'Developed AI-based accessibility tool for users with disabilities',
        'Improved user engagement and sign-up conversion by ~25%',
      ],
    },
  ]

  return (
    <section id="experience" className="section">
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
              Work Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-neon-cyan mx-auto shadow-[0_0_10px_#00f0ff]" />
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass rounded-2xl p-6 md:p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-cyan to-transparent" />

              <div className="relative z-10">
                <div className="mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-neon-cyan mb-2">
                    {exp.role}
                  </h3>
                  <p className="text-xl text-gray-300 mb-1">
                    {exp.company}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 text-gray-400">
                    <span>{exp.period}</span>
                    {exp.location && (
                      <>
                        <span>•</span>
                        <span>{exp.location}</span>
                      </>
                    )}
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-neon-blue mb-3">
                    Key Responsibilities:
                  </h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((responsibility, respIndex) => (
                      <motion.li
                        key={respIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.2 + respIndex * 0.1 }}
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <span className="text-neon-cyan mt-1 flex-shrink-0">▹</span>
                        <span>{responsibility}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
