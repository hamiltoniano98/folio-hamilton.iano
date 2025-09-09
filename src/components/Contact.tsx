import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const Contact: React.FC = () => {
  const { t } = useTranslation()

  return (
    <section id="contact" className="py-16 px-6 bg-gray-100 dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          {t('navbar.contact')}
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          {t('contact.description')}
        </p>

        <div className="space-y-4">
          <p className="text-gray-800 dark:text-gray-200">
            📧 <a href="mailto:qdftvc@gmail.com" className="text-blue-600 hover:underline">qdftvc@gmail.com</a>
          </p>
          <p className="text-gray-800 dark:text-gray-200">
            💼 <a href="https://github.com/hamiltoniano98" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub</a>
          </p>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
