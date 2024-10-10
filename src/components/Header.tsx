import React from 'react'
import { Menu, X } from 'lucide-react'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#" className="flex items-center">
              <img className="h-8 w-auto sm:h-10" src="/logo.svg" alt="Ovariant" />
              <span className="ml-2 text-2xl font-bold text-purple-700">Ovariant</span>
            </a>
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
            <a href="#about" className="text-base font-medium text-gray-500 hover:text-gray-900">About</a>
            <a href="#products" className="text-base font-medium text-gray-500 hover:text-gray-900">Products</a>
            <a href="#features" className="text-base font-medium text-gray-500 hover:text-gray-900">Features</a>
            <a href="#contact" className="text-base font-medium text-gray-500 hover:text-gray-900">Contact</a>
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a href="#" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-purple-600 hover:bg-purple-700">
              Get EmpowerHer
            </a>
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
                  <a href="#about" className="text-base font-medium text-gray-900 hover:text-gray-700">About</a>
                  <a href="#products" className="text-base font-medium text-gray-900 hover:text-gray-700">Products</a>
                  <a href="#features" className="text-base font-medium text-gray-900 hover:text-gray-700">Features</a>
                  <a href="#contact" className="text-base font-medium text-gray-900 hover:text-gray-700">Contact</a>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <a href="#" className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-purple-600 hover:bg-purple-700">
                Get EmpowerHer
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header