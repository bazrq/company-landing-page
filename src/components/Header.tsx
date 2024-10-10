import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false)
  const location = useLocation()

  const isHomePage = location.pathname === '/'

  const scrollToSection = (sectionId: string) => {
    if (isHomePage) {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <header className="bg-gradient-to-r from-purple-100 via-pink-100 to-purple-100 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/" className="flex items-center">
              <img className="h-12 w-auto sm:h-14 transition-transform duration-300 hover:scale-110" src="/logo.svg" alt="Ovariant" />
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">
            <Link 
              to={isHomePage ? "#about" : "/#about"} 
              className="text-base font-medium text-gray-700 hover:text-purple-600 transition duration-150 ease-in-out"
              onClick={() => scrollToSection('about')}
            >
              About
            </Link>
            <div className="relative">
              <button
                type="button"
                className="text-base font-medium text-gray-700 hover:text-purple-600 group inline-flex items-center transition duration-150 ease-in-out"
                onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
              >
                Products
                <ChevronDown className="ml-2 h-5 w-5 text-gray-400 group-hover:text-purple-600" aria-hidden="true" />
              </button>
              {isProductsDropdownOpen && (
                <div className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                      <Link
                        to="/ovsync"
                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-purple-50 transition duration-150 ease-in-out"
                        onClick={() => setIsProductsDropdownOpen(false)}
                      >
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">OvSync</p>
                          <p className="mt-1 text-sm text-gray-500">Our revolutionary women's health app</p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <Link 
              to="/organizations" 
              className="text-base font-medium text-gray-700 hover:text-purple-600 transition duration-150 ease-in-out"
            >
              For Organizations
            </Link>
            <Link 
              to={isHomePage ? "#contact" : "/#contact"} 
              className="text-base font-medium text-gray-700 hover:text-purple-600 transition duration-150 ease-in-out"
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </Link>
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Link to="/ovsync" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition duration-150 ease-in-out transform hover:scale-105">
              OvSync
            </Link>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img className="h-8 w-auto" src="/logo.svg" alt="Ovariant" />
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <Link 
                    to={isHomePage ? "#about" : "/#about"}
                    className="text-base font-medium text-gray-900 hover:text-purple-600"
                    onClick={() => {
                      setIsMenuOpen(false)
                      scrollToSection('about')
                    }}
                  >
                    About
                  </Link>
                  <Link 
                    to="/ovsync"
                    className="text-base font-medium text-gray-900 hover:text-purple-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    OvSync
                  </Link>
                  <Link 
                    to="/organizations"
                    className="text-base font-medium text-gray-900 hover:text-purple-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    For Organizations
                  </Link>
                  <Link 
                    to={isHomePage ? "#contact" : "/#contact"}
                    className="text-base font-medium text-gray-900 hover:text-purple-600"
                    onClick={() => {
                      setIsMenuOpen(false)
                      scrollToSection('contact')
                    }}
                  >
                    Contact
                  </Link>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <Link 
                to="/ovsync"
                className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                onClick={() => setIsMenuOpen(false)}
              >
                OvSync
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header