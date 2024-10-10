import React, { useState } from 'react';
import { Heart, Users, Sparkles } from 'lucide-react';
import WaitlistForm from './wait-list/WaitListForm';

const OrganizationPage: React.FC = () => {
  const [showWaitlistForm, setShowWaitlistForm] = useState(false);

  const handleOpenWaitlistForm = () => {
    console.log('Button clicked!');
    setShowWaitlistForm(true);
  };

  const handleCloseWaitlistForm = () => {
    setShowWaitlistForm(false);
  };

  console.log('Component rendering, showWaitlistForm:', showWaitlistForm);

  return (
    <div className="bg-white">
      <h1 className="text-3xl font-bold text-center py-4">Organization Page</h1>
      {/* Hero Section */}
      <div className="relative bg-purple-700">
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Empowering Women in Your Workplace
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-purple-100">
            Join Ovariant in creating a supportive environment where women can thrive, both personally and professionally.
          </p>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-gray-50 overflow-hidden lg:py-24">
        <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
          <div className="relative">
            <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Why Partner with Ovariant?
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
              Together, we can create a workplace that truly supports and values women's health and well-being.
            </p>
          </div>

          <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative">
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                The Impact of Empowerment
              </h3>
              <p className="mt-3 text-lg text-gray-500">
                By partnering with Ovariant, your organization can:
              </p>

              <dl className="mt-10 space-y-10">
                {[
                  {
                    icon: Heart,
                    title: 'Nurture Well-being',
                    description:
                      "Create a supportive environment that prioritizes women's health, leading to happier, more fulfilled employees.",
                  },
                  {
                    icon: Users,
                    title: 'Foster Inclusivity',
                    description:
                      'Build a culture where women feel valued, understood, and empowered to bring their whole selves to work.',
                  },
                  {
                    icon: Sparkles,
                    title: 'Unlock Potential',
                    description:
                      'Provide tools and support that enable women to thrive, innovate, and lead in your organization.',
                  },
                ].map((item) => (
                  <div key={item.title} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                        {item.title}
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      {item.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
              <svg
                className="w-full h-auto"
                viewBox="0 0 400 300"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#F3E8FF', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#D8B4FE', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                
                {/* Background */}
                <rect x="0" y="0" width="400" height="300" fill="url(#grad1)" />
                
                {/* Ascending steps */}
                <g transform="translate(50, 250) scale(0.8)">
                  <rect x="0" y="-50" width="75" height="50" fill="#9333EA" />
                  <rect x="100" y="-100" width="75" height="100" fill="#A855F7" />
                  <rect x="200" y="-150" width="75" height="150" fill="#C084FC" />
                  <rect x="300" y="-200" width="75" height="200" fill="#E9D5FF" />
                  
                  {/* Person figure */}
                  <circle cx="337.5" cy="-225" r="12.5" fill="#4C1D95" />
                  <path d="M337.5 -212.5 v 25 l -12.5 25 h 25 l -12.5 -25 v -25" fill="#4C1D95" />
                  <path d="M325 -187.5 h 25" stroke="#4C1D95" strokeWidth="2" />
                </g>
                
                {/* Text */}
                <text x="200" y="40" fontFamily="Arial, sans-serif" fontSize="24" fill="#4C1D95" textAnchor="middle" fontWeight="bold">
                  Empowerment Journey
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-purple-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to create positive change?</span>
            <span className="block">Let's explore how Ovariant can support your team.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-purple-200">
            Our team is excited to discuss how we can tailor our solutions to your organization's unique needs.
          </p>
          <button
            onClick={() => {
              console.log('Button clicked (inline)');
              handleOpenWaitlistForm();
            }}
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-purple-600 bg-white hover:bg-purple-50 sm:w-auto"
          >
            Join Waitlist
          </button>
        </div>
      </div>

      {/* Contact Form */}
      <div id="contact-form" className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
          <div className="divide-y-2 divide-gray-200">
            <div className="lg:grid lg:grid-cols-3 lg:gap-8">
              <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                Let's Connect
              </h2>
              <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
                {[
                  {
                    name: 'Partnership Inquiries',
                    email: 'partnerships@ovariant.com'
                  },
                ].map((department) => (
                  <div key={department.name}>
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      {department.name}
                    </h3>
                    <dl className="mt-2 text-base text-gray-500">
                      <div>
                        <dt className="sr-only">Email</dt>
                        <dd>{department.email}</dd>
                      </div>
                    </dl>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-16 pt-16 lg:grid lg:grid-cols-3 lg:gap-8">
              <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                Reach Out
              </h2>
              <div className="mt-8 lg:mt-0 lg:col-span-2">
                <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
                  <div>
                    <label htmlFor="full-name" className="block text-sm font-medium text-gray-700">
                      Full name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="full-name"
                        id="full-name"
                        autoComplete="name"
                        className="py-3 px-4 block w-full shadow-sm focus:ring-purple-500 focus:border-purple-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="py-3 px-4 block w-full shadow-sm focus:ring-purple-500 focus:border-purple-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-gray-700">
                      Organization
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="organization"
                        id="organization"
                        className="py-3 px-4 block w-full shadow-sm focus:ring-purple-500 focus:border-purple-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      How can we help?
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="py-3 px-4 block w-full shadow-sm focus:ring-purple-500 focus:border-purple-500 border border-gray-300 rounded-md"
                      ></textarea>
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                    >
                      Start the Conversation
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showWaitlistForm && (
        <WaitlistForm onClose={handleCloseWaitlistForm} />
      )}
    </div>
  );
};

export default OrganizationPage;