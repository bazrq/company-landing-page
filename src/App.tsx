import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />
      <Hero />
      <About />
      <Products />
      <Features />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App