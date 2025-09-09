import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

 

  const toggleMenu = () => setIsOpen(!isOpen)

  const changeLanguage = (lng: 'en' | 'es') => {
    i18n.changeLanguage(lng)
  }

  const navItems = ['home', 'about', 'skills', 'experience', 'languages', 'contact']

  return (
    <nav className="bg-white dark:bg-gray-900 shadow fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-blue-600 dark:text-blue-400">Pablo</div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 dark:text-white focus:outline-none">
            ☰
          </button>
        </div>

        <ul className="hidden md:flex space-x-6 items-center text-sm font-medium text-gray-700 dark:text-gray-300">
          {navItems.map((item) => (
            <li key={item}>
              <a href={`#${item}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition">
                {t(`navbar.${item}`)}
              </a>
            </li>
          ))}
      
          <li>
            <button onClick={() => changeLanguage('es')} className="ml-2 hover:text-blue-600">🇪🇸</button>
            <button onClick={() => changeLanguage('en')} className="ml-1 hover:text-blue-600">🇺🇸</button>
          </li>
        </ul>
      </div>

      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white dark:bg-gray-900 px-4 pt-2 pb-4 space-y-2 text-gray-700 dark:text-gray-300"
        >
          {navItems.map((item) => (
            <li key={item}>
              <a href={`#${item}`} className="block hover:text-blue-600 dark:hover:text-blue-400" onClick={() => setIsOpen(false)}>
                {t(`navbar.${item}`)}
              </a>
            </li>
          ))}
          <li className="flex justify-center space-x-4 pt-2">
            <button onClick={() => changeLanguage('es')}>🇪🇸</button>
            <button onClick={() => changeLanguage('en')}>🇺🇸</button>
          </li>
        </motion.ul>
      )}
    </nav>
  )
}

export default Navbar
