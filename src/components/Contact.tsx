import React from 'react'
import { Mail } from 'lucide-react'

const Contact: React.FC = () => {
  return (
    <div id="contact" className="bg-purple-100">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="px-6 py-12 sm:px-12">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Contact Us
              </h2>
              <div className="mt-4 text-xl text-gray-600">
                Have questions or need support? We're here to help!
              </div>
            </div>
            <div className="mt-12">
              <div className="flex items-center justify-center">
                <div className="flex-shrink-0">
                  <Mail className="h-8 w-8 text-purple-500" aria-hidden="true" />
                </div>
                <div className="ml-3 text-lg font-medium text-gray-900">
                  sales@ovariant.com
                </div>
              </div>
            </div>
            <div className="mt-12">
              <a
                href="mailto:support@ovariant.com"
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                Send us an email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact