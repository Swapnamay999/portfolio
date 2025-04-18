import Skills from './components/Skills'
import About from './components/About'
import Education from './components/Eduction'
import Experience from './components/Experience'
import Header from './components/Header'
import Contact from './components/Contact'


function App() {
  return (
    <div className="bg-black text-white min-h-screen px-8 py-12 font-sans">
      <Header />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Contact />
    </div>
  )
}

export default App
