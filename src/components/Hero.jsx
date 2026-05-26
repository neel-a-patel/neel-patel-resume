import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import { useEffect, useState } from 'react'

function Hero() {
  const [displayedText, setDisplayedText] = useState('')
  const fullText = 'AWS Solution Architect | DevOps Engineer | Cloud Innovator'
  const typingSpeed = 50

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(interval)
      }
    }, typingSpeed)

    return () => clearInterval(interval)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact')
    contactSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Animated background gradient */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full mix-blend-screen filter blur-3xl"
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -50, 100, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full mix-blend-screen filter blur-3xl"
          animate={{
            x: [0, -100, 50, 0],
            y: [0, 50, -100, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, delay: 1 }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Image */}
        <motion.div
          className="mb-8"
          variants={itemVariants}
        >
          <motion.div
            className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary-400 to-blue-600 p-1 shadow-lg shadow-primary-500/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
            src="/neel.png"
            alt="Neel Patel"
            className="w-full h-full rounded-full object-cover"
          />
          </motion.div>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight"
          variants={itemVariants}
        >
          Neel Patel
        </motion.h1>

        {/* Typing Animation Title */}
        <motion.div
          className="h-16 md:h-20 flex items-center justify-center mb-8"
          variants={itemVariants}
        >
          <div className="text-2xl md:text-4xl gradient-text font-semibold">
            {displayedText}
            <motion.span
              className="ml-2 inline-block"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.7, repeat: Infinity }}
            >
              |
            </motion.span>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed"
          variants={itemVariants}
        >
          11+ years designing secure, scalable cloud architectures on AWS. Expert in GitOps automation, Infrastructure-as-Code, and building high-performing teams.
        </motion.p>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-3 gap-4 md:gap-8 max-w-xl mx-auto mb-12"
          variants={itemVariants}
        >
          <div className="glass-sm p-4">
            <div className="text-3xl font-bold gradient-text">11+</div>
            <div className="text-sm text-gray-400 mt-1">Years Experience</div>
          </div>
          <div className="glass-sm p-4">
            <div className="text-3xl font-bold gradient-text">9</div>
            <div className="text-sm text-gray-400 mt-1">Certifications</div>
          </div>
          <div className="glass-sm p-4">
            <div className="text-3xl font-bold gradient-text">3</div>
            <div className="text-sm text-gray-400 mt-1">Major Clouds</div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          variants={itemVariants}
        >
          <motion.button
            onClick={handleContactClick}
            className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary-500 to-blue-600 hover:from-primary-400 hover:to-blue-500 rounded-lg font-semibold text-dark-900 transition-all"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 180, 255, 0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
            <ArrowRight size={18} />
          </motion.button>
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-3 bg-dark-800/50 border border-primary-500/30 hover:border-primary-400 rounded-lg font-semibold text-primary-400 transition-all"
            whileHover={{ scale: 1.05, borderColor: 'rgba(0, 212, 255, 1)' }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={18} />
            View Projects
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-6"
          variants={itemVariants}
        >
          <motion.a
            href="https://linkedin.com/in/neel-a-patel"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-dark-800/50 border border-primary-500/30 hover:border-primary-400 rounded-lg text-primary-400 hover:text-primary-300 transition-all"
            whileHover={{ scale: 1.1, rotate: 10 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin size={20} />
          </motion.a>
          <motion.a
            href="https://github.com/neel-a-patel"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-dark-800/50 border border-primary-500/30 hover:border-primary-400 rounded-lg text-primary-400 hover:text-primary-300 transition-all"
            whileHover={{ scale: 1.1, rotate: 10 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} />
          </motion.a>
          <motion.a
            href="mailto:neelpatel.it@hotmail.com"
            className="p-3 bg-dark-800/50 border border-primary-500/30 hover:border-primary-400 rounded-lg text-primary-400 hover:text-primary-300 transition-all"
            whileHover={{ scale: 1.1, rotate: 10 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={20} />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary-400/50 rounded-full flex justify-center p-2">
          <div className="w-1 h-2 bg-primary-400 rounded-full" />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
