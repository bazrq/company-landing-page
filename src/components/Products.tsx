import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { Smartphone, Activity, Shield, Users, CheckCircle, ChevronRight, Brain, Target, Stethoscope } from 'lucide-react'

// Custom hook for typing animation
const useTypingEffect = (text: string, speed: number = 50) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setDisplayedText('');
    setIndex(0);
  }, [text]);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [index, text, speed]);

  return displayedText;
};

const products = [
  {
    name: "OvSync",
    description: "Your personal health companion, designed to understand and celebrate the unique rhythms of your body.",
    icon: Smartphone,
    features: [
      { 
        name: "AI-powered health insights", 
        icon: Brain,
        description: "Unlock the power of your personal health data with our advanced AI. Get tailored insights that help you make informed decisions about your wellbeing, just like having a health expert in your pocket."
      },
      { 
        name: "Personalized health tracking", 
        icon: Activity,
        description: "Say goodbye to one-size-fits-all health apps. OvSync learns your unique patterns, helping you understand your body's signals and rhythms like never before."
      },
      { 
        name: "Secure data management", 
        icon: Shield,
        description: "Your health data is precious. Rest easy knowing that your information is protected with bank-level encryption, giving you peace of mind while you focus on your health journey."
      },
      { 
        name: "Community support", 
        icon: Users,
        description: "Connect with a vibrant community of women who understand your experiences. Share, learn, and grow together in a safe, supportive environment."
      },
      { 
        name: "Educational and science-based info", 
        icon: CheckCircle,
        description: "Empower yourself with knowledge. Access a wealth of scientifically accurate, easy-to-understand information about women's health, curated by experts in the field."
      },
      { 
        name: "Intelligent 'Pairing' features", 
        icon: Target,
        description: "Discover how different aspects of your life interconnect. Our intelligent pairing feature helps you uncover surprising connections between your habits, symptoms, and overall wellbeing."
      },
      { 
        name: "Achieve your personal goals", 
        icon: Target,
        description: "Whether it's improving your sleep, managing stress, or optimizing your fitness, set personalized goals and let OvSync guide you every step of the way."
      },
      { 
        name: "Be advised on your symptoms", 
        icon: Stethoscope,
        description: "Worried about a new symptom? Our symptom checker provides reliable, personalized advice, helping you decide when to relax and when to seek professional care."
      },
      { 
        name: "Understand your body and hormones", 
        icon: Brain,
        description: "Demystify your hormonal cycles. Gain deep insights into how hormones influence your mood, energy, and overall health, empowering you to harness your natural rhythms."
      }
    ]
  }
]

const Products: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const handleFeatureClick = useCallback((index: number) => {
    setActiveFeature(index);
  }, []);

  const displayedText = useTypingEffect(products[0].features[activeFeature].description, 30);

  return (
    <div id="products" className="bg-purple-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-purple-600 font-semibold tracking-wide uppercase">Our Products</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Innovative Solutions for Women's Health
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Discover our cutting-edge products designed to empower you on your unique health journey.
          </p>
        </div>

        {products.map((product) => (
          <div key={product.name} className="mt-16 bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="px-6 py-8">
              <div className="flex items-center justify-center">
                <product.icon className="h-16 w-16 text-purple-500" aria-hidden="true" />
                <h3 className="ml-4 text-3xl font-bold text-gray-900">{product.name}</h3>
              </div>
              <p className="mt-4 text-center text-gray-500">{product.description}</p>
              
              <div className="mt-8 flex flex-col md:flex-row">
                <div className="md:w-1/3 mb-6 md:mb-0">
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li 
                        key={index} 
                        className={`flex items-center p-2 rounded-lg cursor-pointer transition-colors duration-200 ${activeFeature === index ? 'bg-purple-100' : 'hover:bg-purple-50'}`}
                        onClick={() => handleFeatureClick(index)}
                      >
                        <feature.icon className="h-5 w-5 text-purple-500 mr-2" />
                        <span className="text-sm text-gray-700">{feature.name}</span>
                        <ChevronRight className={`h-4 w-4 ml-auto ${activeFeature === index ? 'text-purple-500' : 'text-gray-400'}`} />
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="md:w-2/3 md:pl-8">
                  <div className="bg-purple-100 p-6 rounded-lg h-full flex items-center justify-center">
                    <p className="text-lg text-gray-800">
                      {displayedText}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-center space-x-2">
                <Smartphone className="h-5 w-5 text-gray-600" />
                <span className="text-sm text-gray-500">Coming soon to iOS and Android</span>
              </div>
            </div>
            <div className="px-6 py-4 bg-gray-50">
              <Link
                to="/ovsync"
                className="block w-full text-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out"
              >
                Discover OvSync
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products