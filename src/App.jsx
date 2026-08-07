import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <main className="container main-grid">
        <div className="main-left">
          <About />
          <Experience />
        </div>
        <div className="main-right">
          <Skills />
          <Projects />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  )
}
