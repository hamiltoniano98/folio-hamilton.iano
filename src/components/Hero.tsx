import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const Hero: React.FC = () => {
  const { t } = useTranslation()

  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900 text-center px-4"
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white"
      >
        {t('hero.greeting')}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mt-4"
      >
        {t('hero.subtitle')}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-8"
      >
        <a
          href="#contact"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition"
        >
          {t('hero.cta')}
        </a>
      </motion.div>
    </section>
  )
}

export default Hero
