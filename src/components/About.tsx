import React from 'react'

const About: React.FC = () => {
  return (
    <div id="about" className="bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto text-base max-w-prose lg:max-w-none">
          <h2 className="text-base text-purple-600 font-semibold tracking-wide uppercase">About Ovariant</h2>
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Our Mission
          </h3>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:row-start-1 lg:col-start-2">
            <svg
              className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
            </svg>
            <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
              <blockquote className="relative bg-white rounded-lg shadow-lg px-6 py-8 sm:px-10 sm:py-12">
                <p className="text-lg font-medium text-gray-700">
                  "At Ovariant, we're on a mission to revolutionize women's health and wellness through innovative technology solutions. 
                  Our goal is to empower women with cutting-edge tools and insights to take control of their health and well-being. We are in a digital age where womens health should no longer suffer."
                </p>
                <footer className="mt-4">
                  <p className="text-base font-semibold text-purple-600">Alice Austin, Founder of Ovariant</p>
                </footer>
              </blockquote>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="text-base max-w-prose mx-auto lg:max-w-none">
              <p className="text-lg text-gray-500">
                Pioneering the future of women's health through technology and innovation.
              </p>
            </div>
            <div className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
              <h4 className="font-semibold text-gray-900">Our Approach</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Develop data-driven health solutions tailored for women</li>
                <li>Combine cutting-edge tech with deep healthcare expertise</li>
                <li>Prioritize privacy, security, and ethical data practices</li>
              </ul>

              <h4 className="font-semibold text-gray-900 mt-6">Our Team</h4>
              <p>
                Experts in healthcare, data science, and technology working together to transform women's health.
              </p>

              <h4 className="font-semibold text-gray-900 mt-6">Join Our Mission</h4>
              <p>
                Be part of the revolution in women's health. Together, we're creating a healthier, more empowered future for women everywhere.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About