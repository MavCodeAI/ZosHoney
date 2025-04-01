import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-montserrat font-bold text-gray-900 mb-8">
            Contact Us
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-gold focus:ring-primary-gold"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-gold focus:ring-primary-gold"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-gold focus:ring-primary-gold"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-primary-gold hover:bg-primary-gold/90 text-white py-2 px-4 rounded-md"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-montserrat font-semibold text-gray-900 mb-2">
                  Our Location
                </h2>
                <p className="text-gray-600">
                  123 Main Street<br />
                  Islamabad, Pakistan
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-montserrat font-semibold text-gray-900 mb-2">
                  Contact Information
                </h2>
                <div className="space-y-2">
                  <p className="text-gray-600">
                    <strong>Phone:</strong> +92 300 1234567
                  </p>
                  <p className="text-gray-600">
                    <strong>Email:</strong> info@zoshoney.com
                  </p>
                  <p className="text-gray-600">
                    <strong>Hours:</strong> Mon-Fri: 9am - 6pm
                  </p>
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-montserrat font-semibold text-gray-900 mb-2">
                  Follow Us
                </h2>
                <div className="flex space-x-4">
                  {/* Add your social media icons/links here */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
