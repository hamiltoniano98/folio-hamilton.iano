import { useTranslation } from 'react-i18next'

const Footer: React.FC = () => {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-200 dark:bg-gray-800 py-6 text-center text-sm text-gray-700 dark:text-gray-300">
      <p>
        © {year} Pablo · {t('footer.rights')}
      </p>
    </footer>
  )
}

export default Footer
