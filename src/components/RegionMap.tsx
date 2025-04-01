
import React from 'react';
import { regions } from '../data/products';

const RegionMap = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-montserrat font-bold text-gray-900">
            Pakistani Honey Sources
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Our honey is sourced from diverse regions across Pakistan, each with unique floral profiles and natural characteristics.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Pakistan Map SVG - Simplified outline */}
          <svg viewBox="0 0 800 800" className="w-full">
            <path
              d="M200,100 L600,150 L700,300 L650,600 L450,700 L150,650 L100,400 Z"
              fill="#f0f9f0"
              stroke="#2E7D32"
              strokeWidth="2"
            />

            {/* Regions */}
            <circle cx="250" cy="500" r="30" fill="#FFA726" fillOpacity="0.7" />
            <text x="250" y="550" textAnchor="middle" className="font-montserrat text-sm">Sindh</text>
            
            <circle cx="350" cy="380" r="30" fill="#FFA726" fillOpacity="0.7" />
            <text x="350" y="430" textAnchor="middle" className="font-montserrat text-sm">Punjab</text>
            
            <circle cx="300" cy="250" r="30" fill="#FFA726" fillOpacity="0.7" />
            <text x="300" y="300" textAnchor="middle" className="font-montserrat text-sm">Khyber Pakhtunkhwa</text>
            
            <circle cx="180" cy="350" r="30" fill="#FFA726" fillOpacity="0.7" />
            <text x="180" y="400" textAnchor="middle" className="font-montserrat text-sm">Balochistan</text>
            
            <circle cx="500" cy="200" r="30" fill="#FFA726" fillOpacity="0.7" />
            <text x="500" y="250" textAnchor="middle" className="font-montserrat text-sm">Northern Areas</text>
            
            <circle cx="450" cy="150" r="30" fill="#FFA726" fillOpacity="0.7" />
            <text x="450" y="200" textAnchor="middle" className="font-montserrat text-sm">Himalayan Range</text>
          </svg>

          {/* Legend */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
            {regions.map((region, index) => (
              <div key={index} className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-primary-gold mr-2"></div>
                <span className="text-sm text-gray-700">{region}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegionMap;
