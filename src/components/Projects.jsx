import { motion } from 'framer-motion'
import { Github, ExternalLink, Code } from 'lucide-react'

function Projects() {
  const projects = [
    {
      title: 'AWS Security Group Automation using Agentic AI',
      description: 'Intelligent system using AWS Bedrock and LLMs to automate security group configurations and rule generation based on natural language requirements.',
      technologies: ['AWS Bedrock', 'Python', 'EC2', 'IAM', 'Lambda', 'GenAI', 'LLMs'],
      highlights: [
        'AI-powered rule generation from natural language',
        'Automatic compliance validation',
        'Real-time security optimization',
      ],
      github: 'https://github.com',
      demo: '#',
      status: 'Production',
      color: 'from-red-500 to-pink-600',
    },
    {
      title: 'AutoSys Resume/Execute Automation',
      description: 'GitLab-based automation framework for intelligent job scheduling and execution. Integrates with AWS EC2 for dynamic instance resolution and automated job management.',
      technologies: ['GitLab CI/CD', 'Python', 'Terraform', 'AWS EC2', 'SSM', 'Bash'],
      highlights: [
        'Dynamic EC2 instance resolution via Name tags',
        'GitLab pipeline automation',
        'FORCE_STARTJOB logic implementation',
      ],
      github: 'https://github.com',
      demo: '#',
      status: 'Active',
      color: 'from-orange-500 to-red-600',
    },
    {
      title: 'AWS Infrastructure Automation',
      description: 'End-to-end Infrastructure-as-Code solution using Terraform for multi-account AWS deployments with GitOps-driven CI/CD integration.',
      technologies: ['Terraform', 'AWS', 'GitLab', 'CI/CD', 'CloudFormation', 'Python'],
      highlights: [
        'Multi-account AWS provisioning',
        'GitOps-driven deployments',
        '70% reduction in manual interventions',
      ],
      github: 'https://github.com',
      demo: '#',
      status: 'Active',
      color: 'from-yellow-500 to-orange-600',
    },
    {
      title: 'Cloud Health Monitoring Solution',
      description: 'Comprehensive monitoring and observability platform using Prometheus, Grafana, and AWS CloudWatch for multi-cloud infrastructure.',
      technologies: ['Prometheus', 'Grafana', 'CloudWatch', 'AWS', 'Kubernetes', 'Docker'],
      highlights: [
        'Custom dashboards and alerts',
        'Multi-cloud visibility',
        'Proactive anomaly detection',
      ],
      github: 'https://github.com',
      demo: '#',
      status: 'Active',
      color: 'from-green-500 to-emerald-600',
    },
    {
      title: 'CI/CD Pipeline Automation',
      description: 'Advanced Jenkins and GitLab CI/CD pipeline framework for automated build, test, and deployment with security scanning and artifact management.',
      technologies: ['Jenkins', 'GitLab', 'Docker', 'Kubernetes', 'SonarQube', 'Ansible'],
      highlights: [
        'Automated security scanning',
        'Multi-stage deployments',
        'Artifact management and versioning',
      ],
      github: 'https://github.com',
      demo: '#',
      status: 'Production',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      title: 'AI-based Cloud Operations Agent',
      description: 'Intelligent CloudOps agent leveraging AWS Bedrock and generative AI for automated infrastructure management, cost optimization, and incident response.',
      technologies: ['AWS Bedrock', 'Lambda', 'Python', 'GenAI', 'CloudWatch', 'Cost Explorer'],
      highlights: [
        'AI-driven incident remediation',
        'Automated cost optimization',
        'Natural language infrastructure queries',
      ],
      github: 'https://github.com',
      demo: '#',
      status: 'Development',
      color: 'from-purple-500 to-pink-600',
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
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div className="mb-16" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-400 to-blue-600 rounded-full" />
        </motion.div>

        {/* Projects Grid */}
        <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-8" variants={containerVariants}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="glass p-8 rounded-2xl group flex flex-col h-full relative overflow-hidden"
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                boxShadow: '0 25px 60px rgba(0, 212, 255, 0.2)',
              }}
            >
              {/* Status Badge */}
              <div className="absolute top-4 right-4">
                <motion.span
                  className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${project.color}`}
                  whileHover={{ scale: 1.05 }}
                >
                  {project.status}
                </motion.span>
              </div>

              {/* Header */}
              <div className="mb-4 pr-24">
                <h3 className="text-2xl font-bold mb-2 group-hover:gradient-text transition-all">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
              </div>

              {/* Highlights */}
              <div className="mb-6 space-y-2">
                {project.highlights.map((highlight, hIndex) => (
                  <motion.div
                    key={hIndex}
                    className="flex items-start gap-2 text-gray-300 text-sm"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-primary-400 font-bold mt-1">✓</span>
                    <span>{highlight}</span>
                  </motion.div>
                ))}
              </div>

              {/* Technologies */}
              <div className="mb-6 flex flex-wrap gap-2">
                {project.technologies.map((tech, tIndex) => (
                  <motion.span
                    key={tIndex}
                    className="px-3 py-1 bg-dark-700/50 border border-primary-500/20 rounded-full text-xs text-primary-300 hover:border-primary-400 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {/* Divider */}
              <div className="border-t border-white/5 my-4 mt-auto" />

              {/* Action Buttons */}
              <div className="flex gap-3">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-dark-700/50 border border-primary-500/30 hover:border-primary-400 rounded-lg text-primary-400 hover:text-primary-300 transition-all font-semibold text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={16} />
                  Code
                </motion.a>
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary-500/20 border border-primary-500/50 hover:bg-primary-500/30 rounded-lg text-primary-400 hover:text-primary-300 transition-all font-semibold text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink size={16} />
                  Demo
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Projects CTA */}
        <motion.div className="mt-16 text-center" variants={itemVariants}>
          <p className="text-gray-400 mb-6">Interested in seeing more of my work?</p>
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-dark-800/50 border border-primary-500/30 hover:border-primary-400 rounded-lg text-primary-400 hover:text-primary-300 transition-all font-semibold"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 212, 255, 0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={18} />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Projects
