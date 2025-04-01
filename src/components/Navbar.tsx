import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <span className="text-2xl font-montserrat font-bold text-primary-gold">
              <span className="text-secondary-green">Z</span>os
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-primary-gold">Home</Link>
            <Link to="/shop" className="hover:text-primary-gold">Shop</Link>
            <Link to="/contact" className="hover:text-primary-gold">Contact</Link>
            <Link to="/about" className="hover:text-primary-gold">About</Link>
            <NavLink 
              to="/honey-guide" 
              className={({isActive}) => 
                `font-montserrat text-sm uppercase tracking-wide hover:text-primary-gold transition-colors ${isActive ? 'text-primary-gold font-semibold' : 'text-gray-700'}`
              }
            >
              Honey Guide
            </NavLink>
            <NavLink 
              to="/blog" 
              className={({isActive}) => 
                `font-montserrat text-sm uppercase tracking-wide hover:text-primary-gold transition-colors ${isActive ? 'text-primary-gold font-semibold' : 'text-gray-700'}`
              }
            >
              Blog
            </NavLink>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <a 
              href="https://wa.me/923000000000" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden md:flex items-center text-sm text-secondary-green hover:text-primary-gold transition-colors"
            >
              <Phone size={16} className="mr-1" />
              <span>Order via WhatsApp</span>
            </a>
            
            <NavLink to="/cart">
              <Button 
                variant="ghost" 
                size="icon"
                className="relative hover:bg-primary-gold/10"
              >
                <ShoppingCart size={20} />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary-gold text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Button>
            </NavLink>
            
            <button 
              className="md:hidden"
              onClick={toggleMenu}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 md:hidden">
          <div className="flex justify-end p-4">
            <button onClick={toggleMenu}>
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col items-center space-y-6 p-8">
            <Link to="/" className="font-montserrat text-lg font-medium">Home</Link>
            <Link to="/shop" className="font-montserrat text-lg font-medium">Shop</Link>
            <Link to="/contact" className="font-montserrat text-lg font-medium">Contact</Link>
            <Link to="/about" className="font-montserrat text-lg font-medium">About</Link>
            <NavLink 
              to="/honey-guide" 
              className="font-montserrat text-lg font-medium"
              onClick={toggleMenu}
            >
              Honey Guide
            </NavLink>
            <NavLink 
              to="/blog" 
              className="font-montserrat text-lg font-medium"
              onClick={toggleMenu}
            >
              Blog
            </NavLink>
            <NavLink 
              to="/faq" 
              className="font-montserrat text-lg font-medium"
              onClick={toggleMenu}
            >
              FAQs
            </NavLink>
            <NavLink 
              to="/cart" 
              className="font-montserrat text-lg font-medium"
              onClick={toggleMenu}
            >
              Cart ({totalItems})
            </NavLink>
            <a 
              href="https://wa.me/923000000000" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-secondary-green"
            >
              <Phone size={18} className="mr-2" />
              <span>Order via WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
