import { motion } from 'framer-motion'

function BackgroundElements() {
  const floatingElements = [
    { label: 'AWS', emoji: '☁️', delay: 0 },
    { label: 'Terraform', emoji: '🏗️', delay: 0.2 },
    { label: 'Docker', emoji: '🐳', delay: 0.4 },
    { label: 'Kubernetes', emoji: '⚙️', delay: 0.6 },
    { label: 'Jenkins', emoji: '🔧', delay: 0.8 },
    { label: 'Python', emoji: '🐍', delay: 1 },
    { label: 'Bash', emoji: '⚡', delay: 1.2 },
    { label: 'Linux', emoji: '🐧', delay: 1.4 },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-20 -left-40 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"
        animate={{
          x: [0, 50, -50, 0],
          y: [0, -50, 50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 -right-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 50, 0],
          y: [0, 50, -50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, delay: 2 }}
      />

      {/* Floating Tech Icons */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute text-4xl opacity-5 hover:opacity-15 transition-opacity cursor-pointer"
          animate={{
            y: [0, -30, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6 + index * 0.5,
            repeat: Infinity,
            delay: element.delay,
          }}
          style={{
            left: `${10 + index * 12}%`,
            top: `${20 + (index % 3) * 30}%`,
          }}
        >
          {element.emoji}
        </motion.div>
      ))}

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(0, 212, 255, .05) 25%, rgba(0, 212, 255, .05) 26%, transparent 27%, transparent 74%, rgba(0, 212, 255, .05) 75%, rgba(0, 212, 255, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 212, 255, .05) 25%, rgba(0, 212, 255, .05) 26%, transparent 27%, transparent 74%, rgba(0, 212, 255, .05) 75%, rgba(0, 212, 255, .05) 76%, transparent 77%, transparent)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Dot Pattern */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-2 h-2 bg-primary-400/30 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full"
        animate={{
          scale: [1.5, 1, 1.5],
          opacity: [0.8, 0.3, 0.8],
        }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
      />
    </div>
  )
}

export default BackgroundElements
