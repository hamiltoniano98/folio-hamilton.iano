import { useTranslation } from 'react-i18next'
import { Link } from 'react-scroll'
import { useState } from 'react'
import { clsx } from 'clsx'

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation()
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">Pablo</h1>

        <nav className="flex items-center gap-6">
          {['home', 'about', 'skills', 'experience', 'education', 'languages', 'contact'].map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              {t(`navbar.${section}`)}
            </Link>
          ))}

          <div className="flex items-center gap-2 ml-4">
            <button
              onClick={() => i18n.changeLanguage('es')}
              className={clsx(
                'text-xs px-2 py-1 rounded',
                i18n.language === 'es' ? 'bg-blue-600 text-white' : 'text-gray-600 dark:text-gray-300'
              )}
            >
              ES
            </button>
            <button
              onClick={() => i18n.changeLanguage('en')}
              className={clsx(
                'text-xs px-2 py-1 rounded',
                i18n.language === 'en' ? 'bg-blue-600 text-white' : 'text-gray-600 dark:text-gray-300'
              )}
            >
              EN
            </button>
            <button
              onClick={toggleDarkMode}
              className="text-xs px-2 py-1 rounded text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
