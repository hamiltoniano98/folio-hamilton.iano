import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

interface LanguageItem {
  name: string
  level: string
}

const Languages: React.FC = () => {

  const { t } = useTranslation()
  const rawData = t('languages.items', { returnObjects: true })
  const languages: LanguageItem[] = Array.isArray(rawData) ? rawData : []


  return (
    <section id="languages" className="py-16 px-6 bg-white dark:bg-gray-950">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          {t('navbar.languages')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {languages.map((lang, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow text-center"
            >
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">{lang.name}</h3>
              <p className="text-gray-700 dark:text-gray-300">{lang.level}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Languages
