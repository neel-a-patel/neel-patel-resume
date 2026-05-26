import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import BackgroundElements from './components/BackgroundElements'
import LoadingScreen from './components/LoadingScreen'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen bg-dark-900 text-gray-100 overflow-x-hidden">
      {/* Animated Background */}
      <BackgroundElements />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <Hero />
        <About />
        <Skills />
        <Certifications />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </motion.main>

      {/* Footer */}
      <footer className="relative z-10 bg-dark-900/50 backdrop-blur-md border-t border-white/5 py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400 text-sm">
            <p>© 2025 Neel Patel. All rights reserved.</p>
            <p className="mt-2 text-xs text-gray-500">
              Designed & Built by Neel Patel • Deployed on GitHub Pages
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
