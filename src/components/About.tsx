import React from 'react'

const About: React.FC = () => {
  return (
    <div id="about" className="bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen"></div>
        <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div>
            <h2 className="text-base text-purple-600 font-semibold tracking-wide uppercase">About Ovariant</h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our Mission
            </h3>
          </div>
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
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img
                    className="rounded-lg shadow-lg object-cover object-center"
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt="Ovariant founder"
                    width={1184}
                    height={1376}
                  />
                </div>
                <figcaption className="mt-3 flex text-sm text-gray-500">
                  <span className="ml-2">Ovariant founder, Sarah Johnson</span>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="text-base max-w-prose mx-auto lg:max-w-none">
              <p className="text-lg text-gray-500">
                At Ovariant, we're on a mission to revolutionize women's health and wellness through innovative technology solutions. 
                Founded by Sarah Johnson, a visionary in femtech, our goal is to empower women with cutting-edge tools and insights 
                to take control of their health and well-being.
              </p>
            </div>
            <div className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
              <p>
                We believe that every woman deserves access to comprehensive, data-driven health solutions 
                tailored to her unique needs. By combining cutting-edge technology with a deep understanding 
                of women's health, we're creating a future where personalized care is the norm, not the exception.
              </p>
              <p>
                Our team of dedicated experts in healthcare, data science, and technology are working tirelessly 
                to bring this vision to life. We're committed to privacy, security, and ethical data practices, 
                ensuring that your health information is always protected and used responsibly.
              </p>
              <p>
                Join us in our journey to transform women's health and wellness, one innovation at a time. 
                Together, we can create a healthier, more empowered future for women everywhere.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About