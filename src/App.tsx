import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Contact from './components/Contact'
import Footer from './components/Footer'
import OvSyncPage from './components/OvSyncPage'
import OrganizationsPage from './components/OrganizationsPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Products />
              <Contact />
            </>
          } />
          <Route path="/ovsync" element={<OvSyncPage />} />
          <Route path="/organizations" element={<OrganizationsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App