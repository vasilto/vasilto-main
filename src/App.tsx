import Nav from './components/Nav'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Projects />
        <About />
      </main>
      <footer
        className="relative z-10 border-t border-[#8a6118]/50 px-12 py-7"
        style={{ background: '#120a04' }}
      >
        <div className="max-w-5xl mx-auto flex items-center justify-between flex-wrap gap-3">
          <span className="font-serif text-lg text-[#f4edd8]">
            vasil<span className="text-[#c8922a]">♠</span>
          </span>
          <span className="text-xs text-[#8a7d5e]">Пловдив · 2025</span>
          <a href="mailto:vasil@example.com" className="text-sm text-[#8a7d5e] hover:text-[#c8922a] transition-colors">
            vasil@example.com
          </a>
        </div>
      </footer>
    </>
  )
}
