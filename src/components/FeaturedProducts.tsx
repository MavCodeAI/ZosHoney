
import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/products';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const FeaturedProducts = () => {
  const featuredProducts = products.filter(product => product.featured);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-montserrat font-bold text-gray-900">
              Featured Products
            </h2>
            <p className="text-gray-600 mt-2 max-w-2xl">
              Discover our selection of premium honey varieties, harvested from the most pristine regions of Pakistan.
            </p>
          </div>
          <Link to="/shop" className="mt-4 md:mt-0 flex items-center text-primary-gold hover:text-primary-gold/80 transition-colors">
            View all products <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
