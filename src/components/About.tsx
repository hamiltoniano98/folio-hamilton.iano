import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const About: React.FC = () => {
  const { t } = useTranslation()

  return (
    <section id="about" className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
          {t('navbar.about')}
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          {t('about.description')}
        </p>
      </motion.div>
    </section>
  )
}

export default About
