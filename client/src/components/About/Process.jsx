import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Equipment Install",
      description: "Pulax out pages with meaningless however",
      icon: (
        <svg
          className="w-12 h-12 text-blue-500"
          viewBox="0 0 48 48"
          fill="none"
        >
          <path
            d="M12 8L36 8C38.2 8 40 9.8 40 12L40 36C40 38.2 38.2 40 36 40L12 40C9.8 40 8 38.2 8 36L8 12C8 9.8 9.8 8 12 8Z"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <path d="M16 16L32 16" stroke="currentColor" strokeWidth="2" />
          <path d="M16 20L28 20" stroke="currentColor" strokeWidth="2" />
          <path d="M16 24L24 24" stroke="currentColor" strokeWidth="2" />
          <circle
            cx="20"
            cy="32"
            r="3"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <circle
            cx="28"
            cy="32"
            r="3"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Drain & Clean",
      description: "Making this the first true generator on the Internet",
      icon: (
        <svg
          className="w-12 h-12 text-blue-500"
          viewBox="0 0 48 48"
          fill="none"
        >
          <rect
            x="8"
            y="20"
            width="32"
            height="20"
            rx="2"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M12 20V16C12 12 16 8 24 8C32 8 36 12 36 16V20"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="16" cy="12" r="2" fill="currentColor" />
          <circle cx="20" cy="8" r="2" fill="currentColor" />
          <circle cx="28" cy="8" r="2" fill="currentColor" />
          <circle cx="32" cy="12" r="2" fill="currentColor" />
          <path d="M20 28L20 32" stroke="currentColor" strokeWidth="2" />
          <path d="M24 26L24 34" stroke="currentColor" strokeWidth="2" />
          <path d="M28 28L28 32" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Water Analysis",
      description: "Discovering the source behind the ubiquitous filler",
      icon: (
        <svg
          className="w-12 h-12 text-blue-500"
          viewBox="0 0 48 48"
          fill="none"
        >
          <circle
            cx="24"
            cy="28"
            r="12"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <path d="M24 16L24 28L32 32" stroke="currentColor" strokeWidth="2" />
          <circle cx="24" cy="16" r="2" fill="currentColor" />
          <path d="M16 8L20 12" stroke="currentColor" strokeWidth="2" />
          <path d="M32 8L28 12" stroke="currentColor" strokeWidth="2" />
          <circle
            cx="38"
            cy="18"
            r="3"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <path d="M36 16L40 20" stroke="currentColor" strokeWidth="1" />
        </svg>
      ),
    },
    {
      number: "04",
      title: "Pool Inspections",
      description: "Nor is there anyone who loves or pursues or",
      icon: (
        <svg
          className="w-12 h-12 text-blue-500"
          viewBox="0 0 48 48"
          fill="none"
        >
          <rect
            x="8"
            y="16"
            width="32"
            height="24"
            rx="4"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M12 24L16 20L20 24L24 20L28 24L32 20L36 24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <circle
            cx="14"
            cy="32"
            r="2"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <circle
            cx="22"
            cy="32"
            r="2"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <circle
            cx="30"
            cy="32"
            r="2"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M20 8L24 4L28 8"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-500 font-semibold text-sm uppercase tracking-widest mb-4">
            PROCESS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How it works
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Escape from the hustle and hassle of your everyday routine and come
            away to the Ami Homestay, where a serene world awaits you.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Card */}
              <div className="text-center">
                {/* Icon Container */}
                <div className="relative mb-8">
                  {/* Yellow Circle with Number */}
                  <div className="absolute -top-2 -right-2 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center z-10">
                    <span className="text-black font-bold text-lg">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon Background */}
                  <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto">
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>

              {/* Connection Dots (hidden on mobile, visible on larger screens) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-px">
                  <div className="flex items-center justify-center h-full">
                    <div className="flex space-x-3">
                      <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
