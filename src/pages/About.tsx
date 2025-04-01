
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-secondary-green/10 to-primary-gold/10 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-gray-900 mb-4">
                Our Story
              </h1>
              <p className="text-lg text-gray-700">
                Discover the journey of Zos, Pakistan's premium honey brand
              </p>
            </div>
          </div>
        </div>
        
        {/* Mission & Vision */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-montserrat font-bold text-gray-900 mb-4">
                  Our Mission
                </h2>
                <p className="text-gray-700 mb-6">
                  At Zos, our mission is to bring the finest, purest honey from Pakistan's pristine regions to your table, while supporting sustainable beekeeping practices and the livelihoods of local communities.
                </p>
                <h2 className="text-3xl font-montserrat font-bold text-gray-900 mb-4">
                  Our Vision
                </h2>
                <p className="text-gray-700">
                  We envision a world where every Pakistani household has access to authentic, premium-quality honey that not only tastes delicious but also contributes to better health and a more sustainable environment.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -left-6 -top-6 w-48 h-48 bg-primary-gold/10 rounded-full"></div>
                <div className="absolute -right-6 -bottom-6 w-48 h-48 bg-secondary-green/10 rounded-full"></div>
                <img 
                  src="https://images.unsplash.com/photo-1471943311424-646960669fbc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Bees in a natural environment"
                  className="rounded-lg shadow-lg relative z-10"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Journey */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-montserrat font-bold text-gray-900 mb-8 text-center">
              The Zos Journey
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-primary-gold"></div>
                
                {/* Timeline Events */}
                <div className="space-y-12">
                  {/* 2015 */}
                  <div className="relative flex flex-col md:flex-row items-center md:items-start">
                    <div className="w-full md:w-1/2 md:pr-12 md:text-right">
                      <h3 className="text-xl font-montserrat font-semibold text-gray-900 mb-2">
                        2015: The Beginning
                      </h3>
                      <p className="text-gray-700">
                        Founded by a family with deep roots in the traditional honey harvesting communities of Pakistan, Zos started as a small operation focused on bringing authentic Sidr honey to urban markets.
                      </p>
                    </div>
                    <div className="bg-primary-gold h-8 w-8 rounded-full z-10 my-4 md:my-0 md:mx-0 md:absolute md:left-1/2 md:-ml-4"></div>
                    <div className="w-full md:w-1/2 md:pl-12 md:text-left"></div>
                  </div>
                  
                  {/* 2017 */}
                  <div className="relative flex flex-col md:flex-row items-center md:items-start">
                    <div className="w-full md:w-1/2 md:pr-12 md:text-right"></div>
                    <div className="bg-primary-gold h-8 w-8 rounded-full z-10 my-4 md:my-0 md:mx-0 md:absolute md:left-1/2 md:-ml-4"></div>
                    <div className="w-full md:w-1/2 md:pl-12 md:text-left">
                      <h3 className="text-xl font-montserrat font-semibold text-gray-900 mb-2">
                        2017: Expanding Horizons
                      </h3>
                      <p className="text-gray-700">
                        We expanded our range to include honey varieties from across Pakistan, from the Himalayan mountains to the plains of Punjab, working directly with local beekeepers to ensure quality.
                      </p>
                    </div>
                  </div>
                  
                  {/* 2019 */}
                  <div className="relative flex flex-col md:flex-row items-center md:items-start">
                    <div className="w-full md:w-1/2 md:pr-12 md:text-right">
                      <h3 className="text-xl font-montserrat font-semibold text-gray-900 mb-2">
                        2019: Laboratory Excellence
                      </h3>
                      <p className="text-gray-700">
                        We established our state-of-the-art testing facility in Islamabad, ensuring that every batch of honey meets the highest standards of purity and quality before reaching our customers.
                      </p>
                    </div>
                    <div className="bg-primary-gold h-8 w-8 rounded-full z-10 my-4 md:my-0 md:mx-0 md:absolute md:left-1/2 md:-ml-4"></div>
                    <div className="w-full md:w-1/2 md:pl-12 md:text-left"></div>
                  </div>
                  
                  {/* 2021 */}
                  <div className="relative flex flex-col md:flex-row items-center md:items-start">
                    <div className="w-full md:w-1/2 md:pr-12 md:text-right"></div>
                    <div className="bg-primary-gold h-8 w-8 rounded-full z-10 my-4 md:my-0 md:mx-0 md:absolute md:left-1/2 md:-ml-4"></div>
                    <div className="w-full md:w-1/2 md:pl-12 md:text-left">
                      <h3 className="text-xl font-montserrat font-semibold text-gray-900 mb-2">
                        2021: Nationwide Recognition
                      </h3>
                      <p className="text-gray-700">
                        Zos became a household name across Pakistan, known for our commitment to authenticity, quality, and customer satisfaction, winning several industry awards.
                      </p>
                    </div>
                  </div>
                  
                  {/* 2023 */}
                  <div className="relative flex flex-col md:flex-row items-center md:items-start">
                    <div className="w-full md:w-1/2 md:pr-12 md:text-right">
                      <h3 className="text-xl font-montserrat font-semibold text-gray-900 mb-2">
                        2023: Today & Tomorrow
                      </h3>
                      <p className="text-gray-700">
                        Today, we continue to innovate while staying true to our roots, expanding our online presence to reach customers across Pakistan while maintaining our commitment to quality and sustainability.
                      </p>
                    </div>
                    <div className="bg-primary-gold h-8 w-8 rounded-full z-10 my-4 md:my-0 md:mx-0 md:absolute md:left-1/2 md:-ml-4"></div>
                    <div className="w-full md:w-1/2 md:pl-12 md:text-left"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Values */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-montserrat font-bold text-gray-900">
                Our Values
              </h2>
              <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                The principles that guide everything we do at Zos
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
                <div className="bg-primary-gold/10 p-4 inline-block rounded-full mb-4">
                  <svg className="w-8 h-8 text-primary-gold" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-montserrat font-semibold mb-2">Authenticity</h3>
                <p className="text-gray-700">
                  We never compromise on the authenticity and purity of our honey. What you see is what you get—100% pure Pakistani honey with no additives or artificial processes.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
                <div className="bg-primary-gold/10 p-4 inline-block rounded-full mb-4">
                  <svg className="w-8 h-8 text-primary-gold" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-xl font-montserrat font-semibold mb-2">Sustainability</h3>
                <p className="text-gray-700">
                  We work with beekeepers who practice sustainable harvesting methods that protect bee populations and preserve the natural environment for future generations.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
                <div className="bg-primary-gold/10 p-4 inline-block rounded-full mb-4">
                  <svg className="w-8 h-8 text-primary-gold" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <h3 className="text-xl font-montserrat font-semibold mb-2">Community</h3>
                <p className="text-gray-700">
                  By supporting local beekeepers and their communities, we help preserve traditional knowledge and create sustainable livelihoods across Pakistan.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-montserrat font-bold text-gray-900">
                Meet Our Team
              </h2>
              <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                The passionate people behind Zos who work tirelessly to bring you the finest honey from across Pakistan
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: 'Ahmed Ali',
                  role: 'Founder & CEO',
                  image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                  description: 'With a family background in beekeeping, Ahmed founded Zos with a vision to share Pakistan\'s honey treasures with the world.'
                },
                {
                  name: 'Fatima Zahra',
                  role: 'Chief Quality Officer',
                  image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                  description: 'Fatima leads our laboratory testing and ensures that every jar of honey meets our strict quality standards.'
                },
                {
                  name: 'Hassan Khan',
                  role: 'Head of Beekeeper Relations',
                  image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                  description: 'Hassan works directly with our network of beekeepers across Pakistan, ensuring sustainable practices and fair prices.'
                },
                {
                  name: 'Ayesha Malik',
                  role: 'Marketing Director',
                  image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                  description: 'Ayesha is passionate about sharing the story of Pakistani honey and educating customers about its unique benefits.'
                }
              ].map((member, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-montserrat font-semibold mb-1">{member.name}</h3>
                    <p className="text-primary-gold font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-primary-gold/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-montserrat font-bold text-gray-900 mb-4">
              Join the Zos Family
            </h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Discover the difference that pure, premium Pakistani honey can make in your life. Browse our collection of honey varieties and find your perfect match.
            </p>
            <Button 
              asChild
              className="bg-primary-gold hover:bg-primary-gold/90 text-white font-montserrat"
              size="lg"
            >
              <Link to="/shop">
                Explore Our Honey <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
