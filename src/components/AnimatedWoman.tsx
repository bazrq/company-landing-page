import React from 'react'

const AnimatedWoman: React.FC = () => {
  return (
    <svg
      className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#8B5CF6', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#6D28D9', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <style>
        {`
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
          .pulse { animation: pulse 4s ease-in-out infinite; }
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          .float { animation: float 6s ease-in-out infinite; }
        `}
      </style>
      <g>
        {/* Background circle */}
        <circle cx="100" cy="100" r="90" fill="url(#grad1)" className="pulse" />
        
        {/* DNA helix representation */}
        <path d="M70,40 Q100,60 130,40 T190,40 M70,60 Q100,80 130,60 T190,60" 
              stroke="#F3E8FF" strokeWidth="2" fill="none" className="float" />
        <path d="M10,140 Q40,120 70,140 T130,140 M10,160 Q40,140 70,160 T130,160" 
              stroke="#F3E8FF" strokeWidth="2" fill="none" className="float" />
        
        {/* Female symbol */}
        <circle cx="100" cy="85" r="25" stroke="#F3E8FF" strokeWidth="4" fill="none" />
        <line x1="100" y1="110" x2="100" y2="150" stroke="#F3E8FF" strokeWidth="4" />
        <line x1="80" y1="130" x2="120" y2="130" stroke="#F3E8FF" strokeWidth="4" />
        
        {/* Tech elements */}
        <rect x="70" y="160" width="60" height="30" rx="5" fill="#F3E8FF" />
        <circle cx="85" cy="175" r="5" fill="#6D28D9" />
        <circle cx="100" cy="175" r="5" fill="#6D28D9" />
        <circle cx="115" cy="175" r="5" fill="#6D28D9" />
        
        {/* Abstract data points */}
        <circle cx="30" cy="30" r="5" fill="#F3E8FF" />
        <circle cx="170" cy="30" r="5" fill="#F3E8FF" />
        <circle cx="30" cy="170" r="5" fill="#F3E8FF" />
        <circle cx="170" cy="170" r="5" fill="#F3E8FF" />
      </g>
    </svg>
  )
}

export default AnimatedWoman