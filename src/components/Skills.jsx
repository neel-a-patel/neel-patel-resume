import { motion } from 'framer-motion'
import { Cloud, Code } from 'lucide-react'

function Skills() {
  const skillCategories = [
    {
      title: 'Cloud Platforms',
      skills: ['AWS', 'Azure', 'GCP'],
      icon: <Cloud className="w-5 h-5" />,
    },
    {
      title: 'AWS Services',
      skills: ['EC2', 'S3', 'RDS', 'VPC', 'IAM', 'CloudWatch', 'Lambda', 'ECS', 'ELB/ALB'],
      icon: <Cloud className="w-5 h-5" />,
    },
    {
      title: 'Infrastructure-as-Code',
      skills: ['Terraform', 'CloudFormation', 'Ansible'],
      icon: <Code className="w-5 h-5" />,
    },
    {
      title: 'DevOps & CI/CD',
      skills: ['Docker', 'Kubernetes', 'Jenkins', 'GitLab', 'GitHub Actions'],
      icon: <Code className="w-5 h-5" />,
    },
    {
      title: 'Programming & Scripting',
      skills: ['Python', 'Bash', 'Shell', 'YAML', 'JSON'],
      icon: <Code className="w-5 h-5" />,
    },
    {
      title: 'Tools & Technologies',
      skills: ['Prometheus', 'Grafana', 'Terraform', 'ServiceNow', 'Ansible', 'AWS Lambda'],
      icon: <Code className="w-5 h-5" />,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div className="mb-16" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-400 to-blue-600 rounded-full" />
        </motion.div>

        {/* Skills Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants}>
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="glass p-6 rounded-2xl group"
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                boxShadow: '0 20px 50px rgba(0, 212, 255, 0.15)',
              }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary-500/20 rounded-lg text-primary-400 group-hover:bg-primary-500/30 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold">{category.title}</h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className="px-3 py-1 bg-dark-700/50 border border-primary-500/30 rounded-full text-sm text-primary-300 hover:bg-primary-500/20 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {/* Progress Bar */}
              <motion.div
                className="mt-6 h-2 bg-dark-700 rounded-full overflow-hidden"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-primary-400 to-blue-600"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: index * 0.1 + 0.2 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Proficiency Levels */}
        <motion.div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8" variants={containerVariants}>
          {[
            {
              title: 'Expert',
              description: 'AWS, Terraform, Kubernetes, Docker, Python, Bash',
              color: 'from-green-500 to-emerald-600',
            },
            {
              title: 'Advanced',
              description: 'Azure, GCP, Jenkins, CI/CD, Ansible, Linux',
              color: 'from-blue-500 to-cyan-600',
            },
            {
              title: 'Proficient',
              description: 'CloudFormation, Prometheus, Grafana, ServiceNow',
              color: 'from-purple-500 to-pink-600',
            },
          ].map((level, index) => (
            <motion.div
              key={index}
              className="glass p-6 rounded-xl text-center"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className={`inline-block px-4 py-2 rounded-lg bg-gradient-to-r ${level.color} text-white font-semibold mb-3`}>
                {level.title}
              </div>
              <p className="text-gray-300 text-sm">{level.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Skills
