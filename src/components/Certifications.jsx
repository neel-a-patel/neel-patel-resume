import { motion } from 'framer-motion'
import { Award, CheckCircle } from 'lucide-react'

function Certifications() {
  const certifications = [
    {
      title: 'AWS Certified Solutions Architect - Associate',
      issuer: 'Amazon Web Services',
      date: '2025',
      credentialId: '9fa3dd80-2b9a-4614-bd41-515a457e89cb',
      url: 'https://l1nq.com/znydc3o',
      icon: '🏆',
      badgeImage: '/certifications/aws_solutions_architect_badge.png',
      isImage: true,
    },
    {
      title: 'AWS Certified Solutions Architect - Professional',
      issuer: 'Amazon Web Services',
      date: '2026',
      credentialId: '09bbcec2-cbac-403b-91a0-4cd5e03fdc28',
      url: 'https://sl1nk.com/rfhmdek ',
      icon: '🏆',
      badgeImage: '/certifications/aws_solutions_architect_pro.png',
      isImage: true,
    },
    {
      title: 'AWS Certified SysOps Administrator - Associate',
      issuer: 'Amazon Web Services',
      date: '2025',
      credentialId: '74d2bdb2-2696-41f4-ae39-014cbb01ac72',
      url: 'https://l1nq.com/eo8zk31',
      icon: '☁️',
      badgeImage: '/certifications/aws_sysops_admin.png',
      isImage: true,
    },
    {
      title: 'Terraform Associate',
      issuer: 'HashiCorp',
      date: '2022',
      credentialId: '12dff733-89c8-4db5-8ba5-4f76ec55c21f',
      url: 'https://l1nq.com/qs6japw',
      icon: '🏗️',
      badgeImage: '/certifications/terrform.png',
      isImage: true,
    },
    {
      title: 'Google Associate Cloud Engineer',
      issuer: 'Google Cloud',
      date: '2022',
      credentialId: '5e17b934bd8046e0bc6d4c9c9fe66955',
      url: 'https://sl1nk.com/y4zo0ee',
      icon: '☁️',
      badgeImage: '/certifications/gcp.png',
      isImage: true,
    },
    {
      title: 'Azure Administrator',
      issuer: 'Microsoft Azure',
      date: '2021',
      credentialId: 'b3967bfe-9642-44e2-b91e-6c3bc79eb935',
      url: 'https://sl1nk.com/cdwerfm',
      icon: '⚙️',
      badgeImage: '/certifications/azur_admin.png',
      isImage: true,
    },
    {
      title: 'Technology Architect Associate - Accenture',
      issuer: 'Accenture',
      date: '2024',
      credentialId: '0413ea91-17e8-4f9c-9ff0-89ccd0637cb5',
      url: 'https://l1nq.com/wtkqjzj',
      icon: '🎓',
      badgeImage: '/certifications/acn_architect.png',
      isImage: true,
    },
    {
      title: 'Reinvention with Agentic AI - Accenture',
      issuer: 'Accenture',
      date: '2024',
      credentialId: 'c47dc345-320e-422e-8ab6-96e461d2ec88',
      url: 'https://l1nq.com/1eb0y4d',
      icon: '🤖',
      badgeImage: '/certifications/agentic_ai.png',
      isImage: true,
    },
        {
      title: 'Red Hat Certified Engineer (RHCE)',
      issuer: 'Red Hat',
      date: '2020',
      credentialId: 'RHCE-123456',
      url: 'https://www.redhat.com/en/services/certification',
      icon: '🐧',
      badgeImage: '/certifications/RHCE.png',
      isImage: true,
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
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="certifications" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div className="mb-16" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-400 to-blue-600 rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="space-y-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="glass p-6 md:p-8 rounded-2xl group relative overflow-hidden"
              variants={itemVariants}
              whileHover={{ 
                x: 10,
                boxShadow: '0 20px 50px rgba(0, 212, 255, 0.15)',
              }}
            >
              {/* Background accent */}
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary-400 to-transparent rounded-full" />

              <div className="flex gap-4 md:gap-6">
                {/* Icon or Badge Image */}
                <div className="flex-shrink-0">
                  {cert.isImage && cert.badgeImage ? (
                    <motion.img
                      src={cert.badgeImage}
                      alt={cert.title}
                      className="w-16 h-16 md:w-20 md:h-20 object-contain group-hover:scale-110 transition-transform"
                      whileHover={{ scale: 1.1 }}
                    />
                  ) : (
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-lg bg-primary-500/20 flex items-center justify-center text-2xl md:text-3xl group-hover:scale-110 transition-transform">
                      {cert.icon}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold mb-1">{cert.title}</h3>
                      <p className="text-primary-400 font-semibold text-sm">{cert.issuer}</p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-3 py-1 bg-primary-500/20 border border-primary-500/50 rounded-full text-sm text-primary-300 font-medium">
                        {cert.date}
                      </span>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="mt-4 flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                    <p className="text-gray-400 text-sm">
                      <span className="font-semibold">Credential ID:</span> {cert.credentialId}
                    </p>
                    <motion.a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 text-sm font-semibold transition-colors"
                      whileHover={{ x: 3 }}
                    >
                      View Credential
                      <CheckCircle size={16} />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6" variants={containerVariants}>
          {[
            { label: 'Total Certifications', value: '9' },
            { label: 'Cloud Platforms', value: '3' },
            { label: 'Active Certifications', value: '6' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="glass p-6 rounded-xl text-center"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center justify-center gap-3 mb-2">
                <Award className="w-5 h-5 text-primary-400" />
                <div className="text-3xl font-bold gradient-text">{stat.value}</div>
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Certifications
