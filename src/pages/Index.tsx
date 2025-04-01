
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturedProducts from '../components/FeaturedProducts';
import RegionMap from '../components/RegionMap';
import Benefits from '../components/Benefits';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, CheckCircle, Award, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeaturedProducts />
        
        {/* Trust Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-montserrat font-bold text-gray-900">
                Why Choose Zos Honey?
              </h2>
              <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                We are committed to bringing you the highest quality, authentic Pakistani honey.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="bg-primary-gold/10 p-4 rounded-full mb-4">
                  <CheckCircle size={32} className="text-primary-gold" />
                </div>
                <h3 className="text-xl font-montserrat font-semibold mb-2">Authenticity Guarantee</h3>
                <p className="text-gray-600">
                  Every jar of honey comes with a unique QR code that allows you to verify its authenticity and source.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="bg-primary-gold/10 p-4 rounded-full mb-4">
                  <Award size={32} className="text-primary-gold" />
                </div>
                <h3 className="text-xl font-montserrat font-semibold mb-2">Premium Quality</h3>
                <p className="text-gray-600">
                  Our honey is carefully harvested, processed, and packaged to preserve its natural properties and flavors.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="bg-primary-gold/10 p-4 rounded-full mb-4">
                  <Shield size={32} className="text-primary-gold" />
                </div>
                <h3 className="text-xl font-montserrat font-semibold mb-2">Lab Tested</h3>
                <p className="text-gray-600">
                  All our honey variants undergo rigorous laboratory testing to ensure purity and quality.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <RegionMap />
        <Benefits />
        
        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-montserrat font-bold text-gray-900">
                What Our Customers Say
              </h2>
              <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                Don't just take our word for it - hear from our satisfied customers across Pakistan.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Ahmed Khan',
                  location: 'Lahore',
                  rating: 5,
                  testimonial: 'The Sidr honey is exceptional. My family has been using it for years and we can definitely tell the difference in quality compared to other brands.',
                },
                {
                  name: 'Fatima Zahra',
                  location: 'Karachi',
                  rating: 5,
                  testimonial: 'I was skeptical at first, but after trying the Himalayan Mountain Honey, I\'m a convert. The taste is so pure and natural. Fast delivery too!',
                },
                {
                  name: 'Muhammad Ali',
                  location: 'Islamabad',
                  rating: 4,
                  testimonial: 'The Wild Berry Honey has helped with my seasonal allergies. Plus, ordering through WhatsApp was so convenient. Great customer service.',
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        className={i < testimonial.rating ? "text-primary-gold fill-primary-gold" : "text-gray-300"} 
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.testimonial}"</p>
                  <div className="flex items-center">
                    <div className="rounded-full bg-primary-gold/30 h-10 w-10 flex items-center justify-center text-primary-gold font-semibold mr-3">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-montserrat font-medium">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <Button 
                asChild
                variant="outline" 
                className="border-primary-gold text-primary-gold hover:bg-primary-gold/10"
              >
                <Link to="/reviews">
                  View All Reviews <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-primary-gold/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-montserrat font-bold text-gray-900 mb-4">
              Ready to Experience Pure Pakistani Honey?
            </h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Browse our collection of premium honey variants and have them delivered straight to your doorstep.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                asChild
                className="bg-primary-gold hover:bg-primary-gold/90 text-white font-montserrat"
                size="lg"
              >
                <Link to="/shop">
                  Shop Now <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
              <a 
                href="https://wa.me/923000000000" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  variant="outline" 
                  className="border-secondary-green text-secondary-green hover:bg-secondary-green/10 font-montserrat w-full sm:w-auto"
                  size="lg"
                >
                  Order via WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
