import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

interface ExperienceItem {
  role: string
  company: string
  period: string
  description: string
}

const Experience: React.FC = () => {
  const { t } = useTranslation()
  const rawData = t('experience.items', { returnObjects: true })

const experiences: ExperienceItem[] = Array.isArray(rawData) ? rawData : []

  return (
    <section id="experience" className="py-16 px-6 bg-white dark:bg-gray-950">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white text-center">
          {t('navbar.experience')}
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow"
            >
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">{exp.role}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">{exp.company} · {exp.period}</p>
              <p className="mt-2 text-gray-800 dark:text-gray-200">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Experience
