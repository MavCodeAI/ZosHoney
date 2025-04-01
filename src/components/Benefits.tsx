
import React from 'react';

const Benefits = () => {
  const benefits = [
    {
      icon: (
        <svg className="w-12 h-12 text-primary-gold" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Boosts Immunity',
      description: 'Rich in antioxidants, our honey strengthens your immune system naturally.'
    },
    {
      icon: (
        <svg className="w-12 h-12 text-primary-gold" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: 'Heart Health',
      description: 'Contains antioxidants that help reduce the risk of heart disease.'
    },
    {
      icon: (
        <svg className="w-12 h-12 text-primary-gold" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Natural Antibacterial',
      description: 'Effective against various bacteria and helps in wound healing.'
    },
    {
      icon: (
        <svg className="w-12 h-12 text-primary-gold" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      ),
      title: 'Digestive Health',
      description: 'Soothes digestive issues and supports a healthy gut flora.'
    }
  ];

  return (
    <section className="py-16 bg-secondary-green/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-montserrat font-bold text-gray-900">
            Health Benefits of Our Honey
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Honey has been used for centuries as a natural remedy. Discover the many ways our pure Pakistani honey can enhance your health.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-montserrat font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-montserrat font-semibold mb-3">Scientifically Verified</h3>
              <p className="text-gray-600 mb-4">
                All of our honey products undergo rigorous testing at Pakistan's leading food laboratories to ensure they meet the highest standards of purity and quality.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-secondary-green mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm">No Additives</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-secondary-green mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm">Zero Pesticides</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-secondary-green mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm">100% Authentic</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1601063476271-a159c71ab0b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Honey Lab Testing" 
                className="rounded-lg shadow-md max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
