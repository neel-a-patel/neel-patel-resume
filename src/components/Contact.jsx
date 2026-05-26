import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react'
import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Create mailto link
    const mailtoLink = `mailto:neelpatel.it@hotmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`
    window.location.href = mailtoLink
    
    // Show confirmation
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

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
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div className="mb-16 text-center" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Connect</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to discuss your cloud infrastructure needs? Reach out and let's explore how I can help transform your organization.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-400 to-blue-600 rounded-full mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div className="lg:col-span-1 space-y-6" variants={containerVariants}>
            {/* Email */}
            <motion.a
              href="mailto:neelpatel.it@hotmail.com"
              className="glass p-6 rounded-2xl group flex items-start gap-4 hover:bg-dark-700/50 transition-colors"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="p-3 bg-primary-500/20 rounded-lg text-primary-400 group-hover:bg-primary-500/30 transition-colors">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Email</h3>
                <p className="text-gray-400 text-sm">neelpatel.it@hotmail.com</p>
              </div>
            </motion.a>

            {/* Phone */}
            <motion.a
              href="tel:+917874414144"
              className="glass p-6 rounded-2xl group flex items-start gap-4 hover:bg-dark-700/50 transition-colors"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="p-3 bg-primary-500/20 rounded-lg text-primary-400 group-hover:bg-primary-500/30 transition-colors">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Phone</h3>
                <p className="text-gray-400 text-sm">+91 7874414144</p>
              </div>
            </motion.a>

            {/* Location */}
            <motion.div
              className="glass p-6 rounded-2xl flex items-start gap-4"
              variants={itemVariants}
            >
              <div className="p-3 bg-primary-500/20 rounded-lg text-primary-400">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Location</h3>
                <p className="text-gray-400 text-sm">Pune, Maharashtra, India</p>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div className="pt-4" variants={itemVariants}>
              <h3 className="font-semibold text-lg mb-4">Connect on Social</h3>
              <div className="flex gap-4">
                <motion.a
                  href="https://linkedin.com/in/neel-a-patel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 glass rounded-lg flex items-center justify-center text-primary-400 hover:bg-primary-500/20 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin size={20} />
                </motion.a>
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 glass rounded-lg flex items-center justify-center text-primary-400 hover:bg-primary-500/20 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={20} />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <form onSubmit={handleSubmit} className="glass p-8 rounded-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Name Input */}
                <motion.div whileHover={{ scale: 1.02 }}>
                  <label className="block text-sm font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-800/50 border border-white/10 rounded-lg focus:border-primary-400 focus:outline-none transition-colors text-white placeholder-gray-500"
                    placeholder="Your name"
                  />
                </motion.div>

                {/* Email Input */}
                <motion.div whileHover={{ scale: 1.02 }}>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-800/50 border border-white/10 rounded-lg focus:border-primary-400 focus:outline-none transition-colors text-white placeholder-gray-500"
                    placeholder="your@email.com"
                  />
                </motion.div>
              </div>

              {/* Subject Input */}
              <motion.div className="mb-6" whileHover={{ scale: 1.02 }}>
                <label className="block text-sm font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-800/50 border border-white/10 rounded-lg focus:border-primary-400 focus:outline-none transition-colors text-white placeholder-gray-500"
                  placeholder="Project inquiry, collaboration, etc."
                />
              </motion.div>

              {/* Message Input */}
              <motion.div className="mb-6" whileHover={{ scale: 1.02 }}>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-dark-800/50 border border-white/10 rounded-lg focus:border-primary-400 focus:outline-none transition-colors text-white placeholder-gray-500 resize-none"
                  placeholder="Tell me about your project..."
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={submitted}
                className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${
                  submitted
                    ? 'bg-green-500/20 text-green-400 border border-green-500/50'
                    : 'bg-gradient-to-r from-primary-500 to-blue-600 hover:from-primary-400 hover:to-blue-500 text-dark-900 border border-transparent'
                }`}
                whileHover={!submitted ? { scale: 1.02 } : {}}
                whileTap={!submitted ? { scale: 0.98 } : {}}
              >
                {submitted ? (
                  <>
                    <span>✓</span>
                    Message sent!
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </motion.button>

              {/* Help Text */}
              <p className="text-gray-500 text-xs mt-4 text-center">
                This will open your email client to send me a message directly.
              </p>
            </form>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div className="mt-16 text-center" variants={itemVariants}>
          <div className="glass p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Open to Opportunities</h3>
            <p className="text-gray-300 mb-6">
              I'm actively looking for roles where I can leverage my cloud architecture expertise to solve complex infrastructure challenges. Let's discuss how I can add value to your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:neelpatel.it@hotmail.com"
                className="px-6 py-3 bg-gradient-to-r from-primary-500 to-blue-600 rounded-lg font-semibold text-dark-900 hover:from-primary-400 hover:to-blue-500 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule a Call
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/neel-a-patel"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-dark-800/50 border border-primary-500/30 rounded-lg font-semibold text-primary-400 hover:border-primary-400 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View LinkedIn
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Contact
