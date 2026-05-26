import { motion } from 'framer-motion'
import { Cloud, Code, Users, Zap } from 'lucide-react'

function About() {
  const features = [
    {
      icon: <Cloud className="w-6 h-6" />,
      title: 'Cloud Architecture',
      description: 'Designing secure, scalable, cost-optimized cloud solutions on AWS, Azure, and GCP'
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Infrastructure-as-Code',
      description: 'Expert in Terraform, CloudFormation, and GitOps-driven automation with GitLab CI/CD'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Technical Leadership',
      description: 'Leading cross-functional engineering teams to deliver high-quality cloud solutions'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'DevOps Excellence',
      description: 'Building robust CI/CD pipelines, containerization, and Kubernetes orchestration'
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div className="mb-16" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-400 to-blue-600 rounded-full" />
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Text Content */}
          <motion.div className="lg:col-span-1" variants={itemVariants}>
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Professional Journey</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Started my career as a Network & System Engineer, evolved through infrastructure management, and now architect cloud-native solutions as an AWS Solution Architect.
              </p>
              <p className="text-gray-400 text-sm">
                Passionate about automation, reliability, and building systems that scale.
              </p>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6" variants={containerVariants}>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="glass p-6 rounded-xl group cursor-pointer"
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: '0 0 30px rgba(0, 212, 255, 0.2)' }}
              >
                <div className="text-primary-400 mb-3 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Key Metrics */}
        <motion.div className="grid grid-cols-1 md:grid-cols-4 gap-6" variants={containerVariants}>
          {[
            { label: 'Years in Tech', value: '11+' },
            { label: 'Cloud Platforms', value: '3' },
            { label: 'Team Members Led', value: '12+' },
            { label: 'Certifications', value: '9' },
          ].map((metric, index) => (
            <motion.div
              key={index}
              className="glass p-6 text-center rounded-xl"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl font-bold gradient-text mb-2">{metric.value}</div>
              <div className="text-gray-400 text-sm">{metric.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About
