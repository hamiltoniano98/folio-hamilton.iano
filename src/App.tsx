import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Languages from './components/Languages'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {


  return (
    <>
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
    <Navbar />
    <Hero />
    <About/>
    <Skills/>
    <Experience/>
    <Languages/>
    <Contact/>
    <Footer/>
    </div>

    </>
  )
}

export default App
