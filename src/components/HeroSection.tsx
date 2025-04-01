
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative min-h-[600px] bg-gradient-to-r from-secondary-green/10 to-primary-gold/10">
      {/* Honeycomb pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cpath d='M5 0 L30 15 L55 0 L55 45 L30 60 L5 45 Z' fill='none' stroke='%23FFA726' stroke-width='2'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}
      ></div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-8 relative z-10">
        <div className="flex flex-col justify-center">
          <span className="text-secondary-green font-montserrat uppercase tracking-wider text-sm font-medium mb-2">
            Pakistan's Premium
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-gray-900 mb-4">
            <span className="text-primary-gold">Pure</span> &amp; <span className="text-secondary-green">Natural</span> Honey
          </h1>
          <p className="text-lg text-gray-700 mb-6 max-w-lg">
            Discover the authentic taste of Pakistani honey, sustainably harvested from pristine regions across the country.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              asChild
              className="bg-primary-gold hover:bg-primary-gold/90 text-white font-montserrat"
              size="lg"
            >
              <Link to="/shop">
                Shop Now <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline" 
              className="border-primary-gold text-primary-gold hover:bg-primary-gold/10 font-montserrat"
              size="lg"
            >
              <Link to="/about">
                Our Story
              </Link>
            </Button>
          </div>
          <div className="flex items-center mt-8 space-x-8 text-sm text-gray-600">
            <div className="flex items-center">
              <svg className="h-6 w-6 text-secondary-green mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>100% Pure</span>
            </div>
            <div className="flex items-center">
              <svg className="h-6 w-6 text-secondary-green mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Lab Tested</span>
            </div>
            <div className="flex items-center">
              <svg className="h-6 w-6 text-secondary-green mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>No Additives</span>
            </div>
          </div>
        </div>
        
        <div className="relative hidden md:block">
          <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-64 h-64 bg-primary-gold/20 rounded-full filter blur-3xl"></div>
          <div className="absolute -right-12 top-1/3 -translate-y-1/3 w-48 h-48 bg-secondary-green/20 rounded-full filter blur-3xl"></div>
          <img 
            src="https://images.unsplash.com/photo-1587049352851-8d4e89133924?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
            alt="Premium Pakistani Honey" 
            className="w-full h-full object-cover rounded-lg shadow-xl relative z-10"
          />
          <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg z-20">
            <div className="flex items-center space-x-2">
              <div className="text-primary-gold font-montserrat font-bold text-xl">PKR 1,200</div>
              <div className="bg-secondary-green text-white text-xs px-2 py-1 rounded-full">Bestseller</div>
            </div>
            <div className="text-sm text-gray-600 mt-1">Premium Sidr Honey</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
