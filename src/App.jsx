import SkipLink from './components/SkipLink'
import Hero from './components/Hero'
import Values from './components/Values'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Timeline from './components/Timeline'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <SkipLink />
      <Hero />
      <main id="main-content">
        <Values />
        <Skills />
        <Projects />
        <Timeline />
      </main>
      <Footer />
    </>
  )
}

export default App
