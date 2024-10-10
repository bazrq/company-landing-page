import React from 'react'
import { CheckCircle } from 'lucide-react'

const benefits = [
  "Improved health outcomes through personalized insights",
  "Better understanding of your unique health patterns",
  "Empowerment through knowledge and data-driven decisions",
  "Early detection of potential health issues",
  "Streamlined communication with healthcare providers",
  "Reduced stress and anxiety related to health concerns"
]

const Benefits: React.FC = () => {
  return (
    <div id="benefits" className="py-16 bg-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-purple-600 font-semibold tracking-wide uppercase">Benefits</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Transform Your Health Journey
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Experience the power of data-driven health management with Ovariant.
          </p>
        </div>
        <div className="mt-10">
          <ul className="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {benefits.map((benefit, index) => (
              <li key={index} className="mt-10 first:mt-0 md:mt-0">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                      <CheckCircle className="h-6 w-6" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-lg leading-6 font-medium text-gray-900">{benefit}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Benefits