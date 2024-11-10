import './App.css'
import './index.css';
import AboutMe from './components/AboutMe'
import Banner from './components/Banner'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import ExperienceEducation from './components/ExperienceEducation';

function App() {

  return (
    <>
      <div className='w-11/12 mx-auto'>
        <Navbar />
        <Banner />
        <AboutMe />
        <ExperienceEducation />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
