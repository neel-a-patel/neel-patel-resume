import { motion } from 'framer-motion'

function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 flex items-center justify-center z-50"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full mix-blend-screen filter blur-3xl"
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -50, 100, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Logo */}
        <motion.div
          className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-400 to-blue-600 flex items-center justify-center"
          animate={{
            scale: [1, 1.1, 1],
            boxShadow: ['0 0 20px rgba(0, 212, 255, 0.5)', '0 0 40px rgba(0, 212, 255, 0.8)', '0 0 20px rgba(0, 212, 255, 0.5)'],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-4xl font-bold text-dark-900">NP</span>
        </motion.div>

        {/* Loading Text */}
        <motion.h1
          className="text-3xl md:text-4xl font-bold gradient-text"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Neel Patel
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-gray-400 text-center max-w-sm"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
        >
          AWS Cloud Platform Engineer
        </motion.p>

        {/* Loading Spinner */}
        <motion.div
          className="flex gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-3 h-3 rounded-full bg-primary-400"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: index * 0.1,
              }}
            />
          ))}
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          className="w-48 h-1 bg-dark-700 rounded-full overflow-hidden"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 2 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-primary-400 to-blue-600"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default LoadingScreen
