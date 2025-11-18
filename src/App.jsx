import { useRef } from 'react'
import Hero from './components/Hero'
import Books from './components/Books'
import Reviews from './components/Reviews'
import Footer from './components/Footer'

function App() {
  const booksRef = useRef(null)
  const scrollToBooks = () => {
    booksRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div id="top" className="min-h-screen bg-slate-950 text-white">
      <Hero onScrollToBooks={scrollToBooks} />

      {/* Spacer gradient */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div ref={booksRef}>
        <Books />
      </div>

      <Reviews />
      <Footer />
    </div>
  )
}

export default App
