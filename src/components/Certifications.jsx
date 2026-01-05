import { motion } from 'framer-motion'

const Certifications = () => {
  const certifications = [
    {
      name: 'Red Hat Certified System Administrator',
      code: 'RHCSA',
      issuer: 'Red Hat',
      version: 'RHEL 9',
      validTill: 'Valid till Mar 2026',
    },
  ]

  return (
    <section id="certifications" className="section">
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
              Certifications
            </span>
          </h2>
          <div className="w-24 h-1 bg-neon-cyan mx-auto shadow-[0_0_10px_#00f0ff]" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.code}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass rounded-2xl p-8 text-center glow-effect group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-cyan to-transparent" />
              
              <motion.div
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-neon-cyan flex items-center justify-center"
              >
                <svg className="w-8 h-8 text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </motion.div>

              <h3 className="text-xl font-bold text-neon-cyan mb-2 group-hover:text-neon-blue transition-colors">
                {cert.name}
              </h3>
              <p className="text-neon-blue font-semibold mb-1">{cert.code}</p>
              <p className="text-gray-300 text-sm mb-1">{cert.version}</p>
              <p className="text-gray-400 text-xs">{cert.validTill}</p>
              <p className="text-gray-500 text-xs mt-1">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications

