import React from 'react'

const testimonials = [
  {
    content: "EmpowerHer has completely changed how I approach my health. The insights are invaluable!",
    author: "Emily R.",
    role: "EmpowerHer User"
  },
  {
    content: "As a healthcare provider, I'm impressed by the depth and accuracy of Ovariant's technology.",
    author: "Dr. Sarah M.",
    role: "OB/GYN"
  },
  {
    content: "This app has helped me understand my body better than ever before. Highly recommended!",
    author: "Jessica T.",
    role: "EmpowerHer User"
  }
]

const Testimonials: React.FC = () => {
  return (
    <section className="py-12 bg-purple-50 overflow-hidden md:py-20 lg:py-24">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <img
            className="mx-auto h-8"
            src="/logo.svg"
            alt="Ovariant"
          />
          <blockquote className="mt-10">
            <div className="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900">
              <p>
                &ldquo;Ovariant is revolutionizing women's health through innovative technology. 
                Our EmpowerHer app is just the beginning of our journey to create a healthier future for women everywhere.&rdquo;
              </p>
            </div>
            <footer className="mt-8">
              <div className="md:flex md:items-center md:justify-center">
                <div className="md:flex-shrink-0">
                  <img
                    className="mx-auto h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                  <div className="text-base font-medium text-gray-900">Sarah Johnson</div>

                  <svg className="hidden md:block mx-1 h-5 w-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 0h3L9 20H6l5-20z" />
                  </svg>

                  <div className="text-base font-medium text-gray-500">CEO, Ovariant</div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
      <div className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-6 py-8">
                <p className="text-gray-600 text-base leading-7">&ldquo;{testimonial.content}&rdquo;</p>
              </div>
              <div className="px-6 py-4 bg-gray-50">
                <p className="text-sm font-medium text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials