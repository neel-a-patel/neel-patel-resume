import { motion } from 'framer-motion'
import { Briefcase, MapPin, Calendar } from 'lucide-react'

function Experience() {
  const experiences = [
    {
      company: 'Accenture India Private Limited',
      position: 'Infra Transformation Associate Manager',
      location: 'Pune, Maharashtra',
      duration: 'Nov 2023 - Present',
      highlights: [
        'Led technical direction for AWS cloud-native and Python solutions',
        'Implemented Terraform and AWS SSM for automated provisioning',
        'Designed cost-optimized, scalable architectures for enterprise applications',
        'Managed 12-member engineering team ensuring high-quality delivery',
        'Implemented IAM role-based access, reducing unauthorized access risks by 40%',
      ],
    },
    {
      company: 'Cognizant Technology Solutions',
      position: 'Sr. Associate',
      location: 'Pune, Maharashtra',
      duration: 'Nov 2021 - Nov 2023',
      highlights: [
        'Established and improved delivery governance frameworks',
        'Designed and deployed secure, HIPAA-compliant AWS architectures',
        'Integrated real-time monitoring with CloudWatch, improving incident detection by 30%',
        'Managed healthcare workloads on AWS with 99.99% uptime',
      ],
    },
    {
      company: 'L&T Technology Services',
      position: 'Sr. Engineer',
      location: 'Mysuru, Karnataka',
      duration: 'Oct 2019 - Nov 2021',
      highlights: [
        'Designed and implemented highly available AWS infrastructure',
        'Developed CI/CD pipelines using Jenkins and Bitbucket',
        'Containerized microservices with Docker and Kubernetes',
        'Deployed and managed Kubernetes clusters for production workloads',
        'Monitored infrastructure using Prometheus and Grafana',
      ],
    },
    {
      company: 'FinLogic Technologies India',
      position: 'Assistant Manager',
      location: 'Surat, Gujarat',
      duration: 'Mar 2018 - Jan 2019',
      highlights: [
        'Performed OS upgrades and patch management for RHEL/SUSE Linux servers',
        'Administered and optimized NGINX web servers',
        'Implemented Zabbix and Nagios monitoring solutions',
        'Automated operational tasks using Rundeck',
      ],
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
    <section id="experience" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div className="mb-16" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-400 to-blue-600 rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="glass p-8 rounded-2xl group relative overflow-hidden"
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                boxShadow: '0 20px 50px rgba(0, 212, 255, 0.15)',
              }}
            >
              {/* Left border accent */}
              <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary-400 to-transparent" />

              {/* Header */}
              <div className="mb-6">
                <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                  <div>
                    <h3 className="text-2xl font-bold">{exp.position}</h3>
                    <p className="text-primary-400 font-semibold">{exp.company}</p>
                  </div>
                  <motion.div
                    className="px-4 py-2 bg-primary-500/20 border border-primary-500/50 rounded-full text-sm text-primary-300 font-semibold flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Calendar size={16} />
                    {exp.duration}
                  </motion.div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin size={16} />
                  <span className="text-sm">{exp.location}</span>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-3">
                {exp.highlights.map((highlight, hIndex) => (
                  <motion.div
                    key={hIndex}
                    className="flex gap-3 items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: hIndex * 0.1 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-primary-400 mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />
                    <p className="text-gray-300 text-sm md:text-base">{highlight}</p>
                  </motion.div>
                ))}
              </div>

              {/* Right side icon */}
              <div className="absolute right-6 top-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Briefcase size={80} className="text-primary-400" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Experience Summary */}
        <motion.div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8" variants={containerVariants}>
          <motion.div className="glass p-8 rounded-2xl" variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4">Key Achievements</h3>
            <ul className="space-y-3">
              {[
                '40% reduction in unauthorized access risks',
                '30% faster incident detection',
                '99.99% uptime for critical systems',
                '70% reduction in provisioning time',
                '20-30% cost optimization savings',
              ].map((achievement, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-2 text-gray-300"
                  whileHover={{ x: 5 }}
                >
                  <span className="w-2 h-2 bg-primary-400 rounded-full" />
                  {achievement}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="glass p-8 rounded-2xl" variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4">Career Highlights</h3>
            <ul className="space-y-3">
              {[
                'Led teams of 12+ engineers',
                'Managed 4+ enterprise clients',
                'Handled critical healthcare workloads',
                'Implemented infrastructure for 3+ cloud platforms',
                'Drove GitOps transformation initiatives',
              ].map((highlight, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-2 text-gray-300"
                  whileHover={{ x: 5 }}
                >
                  <span className="w-2 h-2 bg-primary-400 rounded-full" />
                  {highlight}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Experience
