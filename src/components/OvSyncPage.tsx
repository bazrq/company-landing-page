import React, { useState } from 'react'
import { Heart, Shield, Zap, Users, ChevronDown, ChevronUp, UserPlus } from 'lucide-react'
import AnimatedWoman from './AnimatedWoman'

const OvSyncPage: React.FC = () => {
  const [isAIInsightsExpanded, setIsAIInsightsExpanded] = useState(false)
  const [isAdvancedPairingExpanded, setIsAdvancedPairingExpanded] = useState(false)

  const toggleAIInsights = () => setIsAIInsightsExpanded(!isAIInsightsExpanded)
  const toggleAdvancedPairing = () => setIsAdvancedPairingExpanded(!isAdvancedPairingExpanded)

  return (
    <div className="bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-purple-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-full lg:w-full lg:pb-28 xl:pb-32">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 lg:col-span-6">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block xl:inline">Empower Your Health</span>{' '}
                    <span className="block text-purple-600 xl:inline">with OvSync</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Take control of your health journey with our revolutionary app designed specifically for women's wellness.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <a
                        href="#"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 md:py-4 md:text-lg md:px-10"
                      >
                        Join Waitlist
                      </a>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <a
                        href="#features"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-purple-700 bg-purple-100 hover:bg-purple-200 md:py-4 md:text-lg md:px-10"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </main>
              <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                <AnimatedWoman />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* App Features Section */}
      <div id="features" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-purple-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Empower Your Health Journey
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              OvSync combines cutting-edge technology with a deep understanding of women's health to provide personalized insights and recommendations.
            </p>
          </div>

          <div className="mt-20">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                    <Zap className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">AI-Powered Insights</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  <p>Advanced algorithms analyze your data to provide personalized health recommendations.</p>
                  <button
                    onClick={toggleAIInsights}
                    className="mt-2 flex items-center text-purple-600 hover:text-purple-800 focus:outline-none"
                  >
                    {isAIInsightsExpanded ? 'Show less' : 'Learn more'}
                    {isAIInsightsExpanded ? (
                      <ChevronUp className="ml-1 h-4 w-4" />
                    ) : (
                      <ChevronDown className="ml-1 h-4 w-4" />
                    )}
                  </button>
                  {isAIInsightsExpanded && (
                    <div className="mt-4 bg-purple-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-700 mb-2">
                        Our AI-powered system goes beyond basic health tracking. It learns about you, your goals, and your unique health patterns over time.
                      </p>
                      <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        <li>Provides deep, personalized recommendations to help you meet your health goals</li>
                        <li>Adjusts expectations based on your individual progress and circumstances</li>
                        <li>Offers educational content tailored to your specific health journey</li>
                        <li>Continuously adapts and improves its insights as it learns more about you</li>
                      </ul>
                      <p className="text-sm text-gray-700 mt-2">
                        With OvSync's AI, you'll have a knowledgeable health companion that understands your unique needs and helps you make informed decisions about your well-being.
                      </p>
                    </div>
                  )}
                </dd>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                    <Heart className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Holistic Health Tracking</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Monitor various aspects of your health, from menstrual cycles to mood and physical activity.
                </dd>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                    <Shield className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Data Security</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Your health information is protected with state-of-the-art encryption and privacy measures.
                </dd>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                    <Users className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Community Support</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Connect with a community of women and access expert resources for support and guidance.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Advanced Pairing Section */}
      <div className="py-16 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-purple-600 font-semibold tracking-wide uppercase">Advanced Pairing</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Fostering Understanding and Support
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              OvSync goes beyond individual health tracking by allowing you to connect with those closest to you.
            </p>
          </div>

          <div className="mt-10">
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                  <UserPlus className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Multi-Dimensional Care</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                <p>Connect with partners, friends, or family members to share your health journey and foster greater understanding.</p>
                <button
                  onClick={toggleAdvancedPairing}
                  className="mt-2 flex items-center text-purple-600 hover:text-purple-800 focus:outline-none"
                >
                  {isAdvancedPairingExpanded ? 'Show less' : 'Learn more'}
                  {isAdvancedPairingExpanded ? (
                    <ChevronUp className="ml-1 h-4 w-4" />
                  ) : (
                    <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </button>
                {isAdvancedPairingExpanded && (
                  <div className="mt-4 bg-white p-4 rounded-lg">
                    <p className="text-sm text-gray-700 mb-2">
                      Our advanced pairing feature allows you to connect with important people in your life, creating a support network that enhances your health journey.
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                      <li>Pair with partners to increase understanding of your health needs</li>
                      <li>Connect with family members to share relevant health information</li>
                      <li>Build a network of friends for mutual support and encouragement</li>
                      <li>Customize sharing settings to control what information is shared</li>
                    </ul>
                    <p className="text-sm text-gray-700 mt-2">
                      By fostering open communication and shared understanding, OvSync helps create a more supportive environment for your health and wellness goals.
                    </p>
                  </div>
                )}
              </dd>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-purple-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to take control of your health?</span>
            <span className="block">Start your journey with OvSync today.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-purple-200">
            Join our community of empowered women and experience the future of personalized health management.
          </p>
          <a
            href="#"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-purple-600 bg-white hover:bg-purple-50 sm:w-auto"
          >
            Sign up for early access
          </a>
        </div>
      </div>
    </div>
  )
}

export default OvSyncPage