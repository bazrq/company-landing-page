import React from 'react'
import { Activity, Shield, Users, Zap } from 'lucide-react'

const features = [
  {
    name: 'AI-Powered Health Insights',
    description: 'Our EmpowerHer app uses advanced AI to provide personalized health recommendations and insights.',
    icon: Zap,
  },
  {
    name: 'Comprehensive Health Tracking',
    description: 'Track various aspects of your health, from menstrual cycles to mood and physical activity.',
    icon: Activity,
  },
  {
    name: 'Data Security and Privacy',
    description: 'Your health data is protected with state-of-the-art encryption and privacy measures.',
    icon: Shield,
  },
  {
    name: 'Supportive Community',
    description: 'Connect with a community of women and access expert resources for support and guidance.',
    icon: Users,
  },
]

const Features: React.FC = () => {
  return (
    <div id="features" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-purple-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Empowering Your Health Journey
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Discover how Ovariant's EmpowerHer app can revolutionize your approach to health and wellness.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default Features