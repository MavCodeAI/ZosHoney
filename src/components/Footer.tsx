
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Phone, MessageSquare, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-montserrat font-bold">
                <span className="text-primary-gold">Z</span>
                <span className="text-white">os</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-4">
              Pakistan's premium honey brand, bringing the finest natural honey from the pristine regions of the country to your table.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-gold transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-montserrat font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="text-gray-400 hover:text-primary-gold transition-colors">
                  Shop All
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/honey-guide" className="text-gray-400 hover:text-primary-gold transition-colors">
                  Honey Guide
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-primary-gold transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-primary-gold transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-montserrat font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="text-primary-gold mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  123 Honey Lane, Islamabad, Pakistan
                </span>
              </li>
              <li className="flex items-start">
                <Phone size={20} className="text-primary-gold mr-2 mt-1 flex-shrink-0" />
                <div className="text-gray-400">
                  <p>+92 300 1234567</p>
                  <p className="text-xs mt-1">Operating Hours: 9 AM - 10 PM (PKT)</p>
                </div>
              </li>
              <li className="flex items-start">
                <MessageSquare size={20} className="text-primary-gold mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  info@zoshoney.pk
                </span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-montserrat font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Stay updated with our latest products and offers.
            </p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-gold"
              />
              <button 
                type="submit" 
                className="px-4 py-2 bg-primary-gold text-white rounded-md hover:bg-primary-gold/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Zos Honey. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm text-gray-400">
              <Link to="/privacy" className="hover:text-primary-gold transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary-gold transition-colors">
                Terms of Service
              </Link>
              <Link to="/shipping" className="hover:text-primary-gold transition-colors">
                Shipping Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
