import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaPython, FaPhp, FaJava, FaLaravel, FaVuejs } from 'react-icons/fa'
import MyIcon from '../assets/icons8-django.svg?react'
import MyIcon1 from '../assets/fastapi.svg?react'
import MyIcon2 from '../assets/icons8-mysql.svg?react'


const skills = [

  {name:'Python',icon:<FaPython className="text-yellow-500"/>},
  { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-500" /> },
  { name: 'PHP', icon: <FaPhp className="text-blue-500" /> },
  { name: 'Java', icon: <FaJava className="text-orange-500" /> }
]

const tech=[
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-600" /> },
  { name: 'React', icon: <FaReact className="text-blue-500" /> },
  {name:'VueJs',icon:<FaVuejs/>},
  { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
  { name: 'Django', icon: <MyIcon/> },
  { name: 'Laravel', icon: <FaLaravel className="text-blue-600" /> },
  { name: 'FastApi', icon: <MyIcon1 /> },
  { name: 'NestJs', icon: <img width="32" height="32" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEAUlEQVR4nO1ZXagVVRT+QhMzpYewEhWiIoJUCEQwE/+IiMxuxl5r7Irhg39PllA+iSJYaCEYFCQVkVhGL6kvvST5EJb9qUiFlSSiQtlV76w1J+VeJ9admXvGcz3nzPGcmXsO3A82Zw6z95nvO3vtvdb+BhjBCDoHCn5LQe/1wk207yXwgyFwGzoFPryFCg4FfCDE8jsFfEbAR0pwD6ETIODFJkBBuwX0eXQ90P714aaj3WHho6CDCv4oRT6MZ+XMP1gyAe0MBW1T8PpK8jrY6I1CiPRi2SMC2qzgLxX0i4LOC1hjEj3x9yP2TwtoZQkvPhCNcxMF/Ht1Afx3CDcmN+K28BT8gYD6a5Co1n70Qd0K/q1WvwA0Jyfyq29X8KFbIF4R63StTp91uQhQ0NZmyWdsW5JnCrzHWkX+BQH3FSPAe6UsgH2BW9Uw4RDuDvsMwFMVvLs48hz6oGn2bFv4ccj1K6grK/HxAj4cDeSgKNI62Oir8qynt1vqEXRPqitAQK8VT5oTkucV3VOMhyU0S2wVffZkEfDFcJAX8NES+P4oCl4aG2fryj59/4Efrifg3YLJ/yCgFSHcKEtgAdwyBZ2sLpR21hTgY/k9Av66IPLHFPS+hUa87i5nCTMTm0HELWXagpqblbFqHG6iXG0WXs5aNgzWPFH6p18F9Kcll+EUIOBP6wqIZsF7XsBvW5Up4KdvvOcmK/g5Ab+j4IvFCqBvMwlIRARwT9SerYFtb020jxci4BzyQA/cXQLaV4CAfuQFcxgEtCtvEcgTkYiBtdGZAsq7GP2UTwixjyJgNkk+ZTidRFEQ8Cc5LOL9TZEKsXicgt6MCr+o/K0GhTfzJiQuNRlCrzYlwM6sqR88NFSgG2+fZruYCyGgU6mHX4/tmEZJXy9fN3lOFtA36X/TZiS5dwVdd5s55YMXJSc6SzwpIod9eE82SF4V/GHL4l/BP1fE5L7kDB25z9xbvZqlZwX0VIOL9uPYT7JKdG0LBAzU8JUP6bH6vpbnI+DvLEcoeHUjAnx4C80UtlBsiWvnw5vR6PYo4Ks2Lp6lIcauVm/HItHU1VLHLgBvaGQB2rExOaxnOHldTl0vTRIjWgkf3qMCPp2BvB+AvGScgnbU6f+ZgP6Kw/J4rm9vLCTifPB9ZUjFDvR2gbuvTN7OD9WPqgLaL/Ceicf3BeDHURRsFzJbxNw0K6sr75vFruALZlwJ6I+bbAJ7bYEmmVvAm9AusDyRuGpxfXQ1NVN9At5ooeLDu1dAJdvl2vLFX2zZnE6HWQA3O7mv4NdtjbQleauZFHwijnWxEEln8BBuVAA3D+2IADxXQGft9ZG9Y7BQQafAB8+PSNOCEPNGDzefEYwAQ/E/hVzcZFNbcaAAAAAASUVORK5CYII=" alt="nestjs"></img> },
 
  
]

const db = [

    {name:'MySQL',icon:<MyIcon2/>},
    { name: 'MongoDB', icon: <img width="32" height="32" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC1klEQVR4nM3X3U9SYQDH8eeira3V6q61brzxrrv+gy5I1CO+gKiJ2nwJdL5VImpy5BC9bCqwHAKHlwXGGCPfxovs4EhtRmR1Uze9XHRRV92Uq61UnvbYdBLngbWdc+C3fe8/O3BeHgA42GhIbXC9elQKimE25t7pBlftbx1DvSi0BdyNkiVNrrpfxIwISudk0JK09hQMY3pmOit3VO8gDKrR1whl3vo0/ZwuKwio1dOwfYBBKfwKKHaWwxZ/y44n5bkgKGZwsTdxFINqC7Ttg1CqhZ5t25bthCAYKkZdlFguZ2BQHcH2QxDKEDesCQJq9zV//ReDujbflQEi3FXQkXSIeMXoY/pLxEz21UGpFpUZIJQ6rP7MK6g70PGRDYPqWezOAqHsSbuEN1D1rDiNA/Uu9bKCJhjda14wVIzswmFQA6F+VpDUK0vzcsf1BVUvc4FuhAdZQSjLpnWAc5DiofxHLtBQ5CYWRDH6JOcgGV21mwukjgxhQehByTlIYinDYlCalWEsqNHXtMcp5v7ToVO5MKix2AgWVO6qgIlE4hhnIDJBluQDjTNjWBAq8CZwkjOQMWE8kw+kZW4JB0Jje6EebYLRYjF1HmkacL36PHeZLk5iQZ3Bzp+cg5T+q19ygfSrE1jQSHT0A+cgbXTMmAt0O44HmdZNVs5B5nfm4zVW/MtVx7D/ZOi7iLcjUv9j1db/Pqk1Ec0nwNem16bPVc+KWUH9y31ZmApXJaRTNAH4nGb5eoAN1BXM/IRFjce0b0EhjkDEjAi2+lszMM0+xa5gx+up+NR5GU3sHWAkFjFUBpUZf2Tbpq0DCLk7DFlWYy3fv+vkdgkkQ3/fZZVuApo3HkwLijmKktoqYafzCnSGJ2Gtpw7ObbrXQSFHPaFKJ53Dez6vAa6mFqZAMczvM76fD5p3QLFseZ52R0L276BYFl5yjURDjm+FdhwuFvGKmBUPJ8fmP3l2evhXCCAdAAAAAElFTkSuQmCC" alt="external-mongodb-a-cross-platform-document-oriented-database-program-logo-shadow-tal-revivo"/> },

  ]

const Skills: React.FC = () => {
  const { t } = useTranslation()

  return (
    <section id="skills" className="py-16 px-6 bg-white dark:bg-gray-950">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          {t('navbar.skills')}
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-10">
          {t('skills.description')}
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 mt-10">
          {t('skills.languages')}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center gap-2"
            >
              <div className="text-4xl">{skill.icon}</div>
              <span className="text-sm text-gray-800 dark:text-gray-200">{skill.name}</span>
            </motion.div>
          ))}
        </div>
    
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 mt-10">
          {t('skills.web')}
        </p>
        <div className=" mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center ">
          {tech.map((techs, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center gap-2 mx-auto"
            >
              <div className="text-4xl">{techs.icon}</div>
              <span className="text-sm text-gray-800 dark:text-gray-200">{techs.name}</span>
            </motion.div>
          ))}
          
        </div>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 mt-10">
          {t('skills.db')}
        </p>
        <div className=" mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-2 justify-items-center ">
          {db.map((dbs, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center gap-2 mx-auto"
            >
              <div className="text-4xl">{dbs.icon}</div>
              <span className="text-sm text-gray-800 dark:text-gray-200">{dbs.name}</span>
            </motion.div>
          ))}
          
        </div>
      </motion.div>
    </section>
  )
}

export default Skills
