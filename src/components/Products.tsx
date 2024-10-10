import React from 'react'
import { Smartphone, Activity, Shield, Users, CheckCircle } from 'lucide-react'

const products = [
  {
    name: "EmpowerHer",
    description: "Our flagship app for personalized women's health tracking and insights.",
    icon: Smartphone,
    features: [
      "AI-powered health insights",
      "Personalized health tracking",
      "Secure data management",
      "Community support"
    ]
  }
]

const Products: React.FC = () => {
  return (
    <div id="products" className="bg-purple-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-purple-600 font-semibold tracking-wide uppercase">Our Products</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Innovative Solutions for Women's Health
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Discover our cutting-edge products designed to empower women in their health journey.
          </p>
        </div>

        <div className="mt-16">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-1 md:gap-x-8 md:gap-y-10">
            {products.map((product) => (
              <div key={product.name} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="px-6 py-8">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <product.icon className="h-12 w-12 text-purple-500" aria-hidden="true" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-500">{product.description}</p>
                  <ul className="mt-6 space-y-4">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0">
                          <CheckCircle className="h-6 w-6 text-green-500" aria-hidden="true" />
                        </div>
                        <p className="ml-3 text-base text-gray-700">{feature}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-6 py-4 bg-gray-50">
                  <a
                    href="#"
                    className="block w-full text-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products