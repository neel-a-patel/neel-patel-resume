import { motion } from 'framer-motion'
import { TrendingUp, Target, Zap, Users } from 'lucide-react'

function Achievements() {
  const achievements = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Cost Optimization',
      metric: '20-30%',
      description: 'Reduced cloud infrastructure costs through intelligent resource optimization and right-sizing',
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Incident Response',
      metric: '30%',
      description: 'Faster incident detection and resolution using automated monitoring and alerting',
      color: 'from-yellow-500 to-orange-600',
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Security Improvement',
      metric: '40%',
      description: 'Reduced unauthorized access risks through IAM role-based access control',
      color: 'from-red-500 to-pink-600',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Team Leadership',
      metric: '12+',
      description: 'Successfully managed and mentored engineering teams for enterprise cloud projects',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Automation',
      metric: '70%',
      description: 'Reduced manual interventions through GitOps and infrastructure automation',
      color: 'from-purple-500 to-pink-600',
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'System Uptime',
      metric: '99.99%',
      description: 'Maintained critical healthcare workloads with industry-leading reliability',
      color: 'from-cyan-500 to-blue-600',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="achievements" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div className="mb-16" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Key Achievements</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-400 to-blue-600 rounded-full" />
        </motion.div>

        {/* Achievements Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" variants={containerVariants}>
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="glass p-8 rounded-2xl group relative overflow-hidden"
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                boxShadow: '0 20px 50px rgba(0, 212, 255, 0.15)',
              }}
            >
              {/* Background accent */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${achievement.color} transition-opacity duration-300`} />

              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${achievement.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {achievement.icon}
              </div>

              {/* Metric */}
              <div className="mb-4">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {achievement.metric}
                </div>
                <h3 className="text-xl font-bold">{achievement.title}</h3>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {achievement.description}
              </p>

              {/* Animated line */}
              <motion.div
                className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${achievement.color}`}
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Summary Stats */}
        <motion.div className="mt-16 glass p-12 rounded-2xl" variants={itemVariants}>
          <h3 className="text-2xl font-bold mb-8">Impact Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                label: 'Projects Delivered',
                value: '50+',
                icon: '📦',
              },
              {
                label: 'Enterprise Clients',
                value: '4+',
                icon: '🏢',
              },
              {
                label: 'Team Members Mentored',
                value: '20+',
                icon: '👥',
              },
              {
                label: 'Infrastructure Nodes',
                value: '1000+',
                icon: '🔧',
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Awards & Recognition */}
        <motion.div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8" variants={containerVariants}>
          <motion.div className="glass p-8 rounded-2xl" variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4">Notable Recognitions</h3>
            <ul className="space-y-3">
              {[
                'Promoted to Associate Manager for technical leadership',
                'Led critical healthcare infrastructure transformation',
                'Recognized for 40% security improvement implementation',
                'Top performer in AWS architecture and cloud innovation',
              ].map((recognition, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3 text-gray-300"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-primary-400 font-bold mt-1">⭐</span>
                  <span>{recognition}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="glass p-8 rounded-2xl" variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4">Expertise Areas</h3>
            <ul className="space-y-3">
              {[
                'Cloud Architecture & Design Patterns',
                'Infrastructure-as-Code & GitOps Automation',
                'DevOps & CI/CD Pipeline Development',
                'Team Leadership & Technical Mentoring',
              ].map((area, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3 text-gray-300"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-primary-400 font-bold mt-1">✓</span>
                  <span>{area}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Achievements
