import SkipLink from './components/SkipLink'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import Values from './components/Values'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Courses from './components/Courses'
import Timeline from './components/Timeline'
import Private from './components/Private'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <SkipLink />
      <Sidebar />
      <Hero />
      <main id="main-content">
        <Values />
        <Skills />
        <Projects />
        <Courses />
        <Timeline />
        <Private />
      </main>
      <Footer />
    </>
  )
}

export default App
