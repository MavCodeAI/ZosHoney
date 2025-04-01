import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { categories, regions } from '../data/products';
import { Product, ProductFilter, ProductCategory } from '../types/product';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Search, Filter, X } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { productService } from '@/services/productService';

// Move localProducts to the top, before the component
const localProducts: Product[] = [
  {
    id: "1",
    name: "Pure Sidr Honey",
    description: "Premium quality Sidr honey from the mountains",
    price: 999,
    discountedPrice: 899,
    category: "raw-honey",
    region: "Northern Areas",
    image: "/images/products/sidr-honey.jpg",
    labTested: true,
    seasonal: false,
    weight: "500g",
    currency: "PKR",
    rating: 4.5,
    createdAt: new Date().toISOString(),
    stock: 10
  },
  {
    id: "2",
    name: "Mountain Flower Honey",
    description: "Sweet and fragrant honey from mountain flowers",
    price: 799,
    discountedPrice: 699,
    category: "raw-honey",
    region: "Gilgit",
    image: "/images/products/mountain-flower-honey.jpg",
    labTested: true,
    seasonal: true,
    weight: "500g",
    currency: "PKR",
    rating: 4.8,
    createdAt: new Date().toISOString(),
    stock: 15
  },
  {
    id: "3",
    name: "Acacia Honey",
    description: "Pure Acacia honey with natural sweetness",
    price: 899,
    discountedPrice: 799,
    category: "raw-honey",
    region: "Punjab",
    image: "/images/products/acacia-honey.jpg",
    labTested: true,
    seasonal: false,
    weight: "500g",
    currency: "PKR",
    rating: 4.7,
    createdAt: new Date().toISOString(),
    stock: 20
  },
  // Add more products for better testing
  {
    id: "4",
    name: "Black Forest Honey",
    description: "Dark and rich honey from black forest flowers",
    price: 1299,
    discountedPrice: 1199,
    category: "specialty-honey",
    region: "Swat",
    image: "/images/products/black-forest-honey.jpg",
    labTested: true,
    seasonal: true,
    weight: "500g",
    currency: "PKR",
    rating: 4.9,
    createdAt: new Date().toISOString(),
    stock: 8
  },
  {
    id: "5",
    name: "Sunflower Honey",
    description: "Light and sweet honey from sunflower fields",
    price: 699,
    discountedPrice: 599,
    category: "raw-honey",
    region: "Punjab",
    image: "/images/products/sunflower-honey.jpg",
    labTested: true,
    seasonal: true,
    weight: "500g",
    currency: "PKR",
    rating: 4.6,
    createdAt: new Date().toISOString(),
    stock: 25
  },
  {
    id: "6",
    name: "Pure Shilajit Honey",
    description: "Premium blend of pure honey with authentic Himalayan Shilajit. Known for its powerful health benefits.",
    price: 2499,
    discountedPrice: 2299,
    category: "specialty-honey",
    region: "Himalayan Range",
    image: "/images/products/shilajit-honey.jpg",
    labTested: true,
    seasonal: false,
    weight: "500g",
    currency: "PKR",
    rating: 5.0,
    createdAt: new Date().toISOString(),
    stock: 15
  },
  {
    id: "7",
    name: "Royal Jelly Honey",
    description: "Enriched with royal jelly for enhanced immunity and vitality",
    price: 1899,
    discountedPrice: 1799,
    category: "specialty-honey",
    region: "Northern Areas",
    image: "/images/products/royal-jelly-honey.jpg",
    labTested: true,
    seasonal: true,
    weight: "500g",
    currency: "PKR",
    rating: 4.8,
    createdAt: new Date().toISOString(),
    stock: 12
  },
  {
    id: "8",
    name: "Herbal Honey Mix",
    description: "A unique blend of honey with traditional Pakistani herbs",
    price: 1599,
    discountedPrice: 1499,
    category: "herbal-honey",
    region: "Punjab",
    image: "/images/products/herbal-honey.jpg",
    labTested: true,
    seasonal: false,
    weight: "500g",
    currency: "PKR",
    rating: 4.7,
    createdAt: new Date().toISOString(),
    stock: 20
  },
  {
    id: "9",
    name: "Premium Gift Set",
    description: "Luxury gift box with 3 varieties of honey and a wooden dipper",
    price: 3999,
    discountedPrice: 3699,
    category: "gift-sets",
    region: "Various",
    image: "/images/products/gift-set.jpg",
    labTested: true,
    seasonal: false,
    weight: "3x250g",
    currency: "PKR",
    rating: 4.9,
    createdAt: new Date().toISOString(),
    stock: 8
  },
  {
    id: "10",
    name: "Shilajit Extract",
    description: "Pure Himalayan Shilajit extract in honey base. Ancient remedy for vitality and strength.",
    price: 2999,
    discountedPrice: 2799,
    category: "specialty-honey",
    region: "Himalayan Range",
    image: "/images/products/shilajit-extract.jpg",
    labTested: true,
    seasonal: false,
    weight: "250g",
    currency: "PKR",
    rating: 5.0,
    createdAt: new Date().toISOString(),
    stock: 10
  }
];

const Shop = () => {
  const [products, setProducts] = useState<Product[]>(localProducts);
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState<ProductFilter>({});
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState([0, 4000]);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState<string | null>(null);
  const [initialLoad, setInitialLoad] = useState(true);
  
  const toggleMobileFilters = () => {
    setShowMobileFilters(!showMobileFilters);
  };
  
  const handleCategoryChange = useCallback((category: ProductCategory) => {
    setFilters(prev => ({
      ...prev,
      category: prev.category === category ? undefined : category
    }));
  }, []);
  
  const handleRegionChange = (region: string) => {
    setFilters(prev => ({
      ...prev,
      region: prev.region === region ? undefined : region
    }));
  };
  
  const handleLabTestedChange = (checked: boolean) => {
    setFilters(prev => ({
      ...prev,
      labTested: checked
    }));
  };
  
  const handleSeasonalChange = (checked: boolean) => {
    setFilters(prev => ({
      ...prev,
      seasonal: checked
    }));
  };
  
  const handlePriceChange = (value: number[]) => {
    setPriceRange(value);
    setFilters(prev => ({
      ...prev,
      priceRange: {
        min: value[0],
        max: value[1]
      }
    }));
  };
  
  const resetFilters = () => {
    setFilters({});
    setSearchTerm("");
    setPriceRange([0, 4000]);
  };
  
  const getSortedProducts = (products: Product[]) => {
    switch (sortBy) {
      case 'price-low':
        return [...products].sort((a, b) => a.price - b.price);
      case 'price-high':
        return [...products].sort((a, b) => b.price - a.price);
      case 'name':
        return [...products].sort((a, b) => a.name.localeCompare(b.name));
      default:
        return products;
    }
  };
  
  useEffect(() => {
    const category = searchParams.get('category');
    const region = searchParams.get('region');
    const search = searchParams.get('search');
    const sort = searchParams.get('sort') as typeof sortBy;
    
    if (category) setFilters(prev => ({ ...prev, category: category as ProductCategory }));
    if (region) setFilters(prev => ({ ...prev, region }));
    if (search) setSearchTerm(search);
    if (sort) setSortBy(sort);
  }, []);
  
  useEffect(() => {
    const params = new URLSearchParams();
    if (filters.category) params.set('category', filters.category);
    if (filters.region) params.set('region', filters.region);
    if (searchTerm) params.set('search', searchTerm);
    if (sortBy !== 'featured') params.set('sort', sortBy);
    
    setSearchParams(params);
  }, [filters, searchTerm, sortBy]);
  
  const handleSort = useCallback((value: typeof sortBy) => {
    setSortBy(value);
  }, []);
  
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const searchMatch = searchTerm.trim() === '' || 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());
        
      const inPriceRange = product.price >= priceRange[0] && product.price <= priceRange[1];
      const inCategory = filters.category ? product.category === filters.category : true;
      const inRegion = filters.region ? product.region === filters.region : true;
      const inLabTested = filters.labTested ? product.labTested : true;
      const inSeasonal = filters.seasonal ? product.seasonal : true;
      
      return searchMatch && inPriceRange && inCategory && inRegion && inLabTested && inSeasonal;
    });
  }, [products, searchTerm, priceRange, filters]);
  
  const sortedProducts = useMemo(() => {
    return getSortedProducts(filteredProducts);
  }, [filteredProducts, sortBy]);
  
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
  
  // Simplify the loading effect
  useEffect(() => {
    setProducts(localProducts);
  }, []);
  
  // Add console.log to debug
  console.log('Current products:', products);
  console.log('Is loading:', isLoading);
  
  useEffect(() => {
    console.log('Products length:', products.length);
    console.log('Filtered products length:', filteredProducts.length);
    console.log('Current page:', currentPage);
    console.log('Price range:', priceRange);
    console.log('Active filters:', filters);
  }, [products, filteredProducts, currentPage, priceRange, filters]);
  
  useEffect(() => {
    // Simulate quick initial load
    setTimeout(() => {
      setInitialLoad(false);
    }, 500);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-secondary-green/10 to-primary-gold/10 py-10">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-montserrat font-bold text-gray-900 mb-2">
              Explore Our Honey Collection
            </h1>
            <p className="text-gray-600 max-w-2xl">
              Discover the rich and diverse flavors of premium Pakistani honey, harvested from the most pristine regions of the country.
            </p>
          </div>
        </div>
        
        {/* Shop Content */}
        <div className="container mx-auto px-4 py-8">
          {/* Search and Filter Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
            <div className="flex flex-col md:flex-row gap-4 w-full md:w-2/3">
              <div className="relative w-full md:w-1/3">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-gold"
                  aria-label="Search products"
                  onKeyDown={(e) => {
                    if (e.key === 'Escape') {
                      setSearchTerm('');
                    }
                  }}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
              
              <select
                value={sortBy}
                onChange={(e) => handleSort(e.target.value as typeof sortBy)}
                className="w-full md:w-48 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-gold"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name</option>
              </select>
            </div>
            
            <div className="flex items-center gap-2 w-full md:w-auto">
              <Button
                onClick={toggleMobileFilters}
                variant="outline"
                className="md:hidden border-gray-300 text-gray-700 flex items-center gap-2"
                aria-expanded={showMobileFilters}
                aria-controls="filter-menu"
              >
                <Filter size={18} />
                Filters
              </Button>
              
              {Object.keys(filters).length > 0 && (
                <Button 
                  onClick={resetFilters}
                  variant="outline"
                  className="border-red-300 text-red-500 hover:bg-red-50 flex items-center gap-2"
                >
                  <X size={18} />
                  Clear Filters
                </Button>
              )}
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className={`${showMobileFilters ? 'fixed inset-0 bg-white z-50 overflow-auto p-4' : 'hidden'} md:block md:relative md:z-auto md:w-1/4 md:bg-transparent`}>
              {showMobileFilters && (
                <div className="flex items-center justify-between mb-4 md:hidden">
                  <h2 className="text-xl font-montserrat font-semibold">Filters</h2>
                  <Button 
                    variant="ghost" 
                    onClick={toggleMobileFilters}
                    className="text-gray-500"
                  >
                    <X size={24} />
                  </Button>
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-lg font-montserrat font-semibold mb-3">Price Range</h3>
                <div className="px-2">
                  <Slider 
                    defaultValue={[0, 4000]} 
                    max={4000} 
                    step={100}
                    value={priceRange}
                    onValueChange={handlePriceChange}
                    className="mb-4"
                  />
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">PKR {priceRange[0]}</span>
                    <span className="text-sm text-gray-600">PKR {priceRange[1]}</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-montserrat font-semibold mb-3">Categories</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Checkbox 
                      id="category-all"
                      checked={!filters.category}
                      onCheckedChange={() => setFilters(prev => ({ ...prev, category: undefined }))}
                    />
                    <label 
                      htmlFor="category-all"
                      className="ml-2 text-sm font-medium text-gray-700 cursor-pointer"
                    >
                      View All
                    </label>
                  </div>
                  {categories.map((category) => (
                    <div key={category.id} className="flex items-center">
                      <Checkbox 
                        id={`category-${category.id}`}
                        checked={filters.category === category.id}
                        onCheckedChange={() => handleCategoryChange(category.id as ProductCategory)}
                      />
                      <label 
                        htmlFor={`category-${category.id}`}
                        className="ml-2 text-sm font-medium text-gray-700 cursor-pointer"
                      >
                        {category.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-montserrat font-semibold mb-3">Regions</h3>
                <div className="space-y-2">
                  {regions.map((region) => (
                    <div key={region} className="flex items-center">
                      <Checkbox 
                        id={`region-${region}`}
                        checked={filters.region === region}
                        onCheckedChange={() => handleRegionChange(region)}
                      />
                      <label 
                        htmlFor={`region-${region}`}
                        className="ml-2 text-sm font-medium text-gray-700 cursor-pointer"
                      >
                        {region}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-montserrat font-semibold mb-3">Product Features</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Checkbox 
                      id="lab-tested"
                      checked={filters.labTested}
                      onCheckedChange={(checked) => handleLabTestedChange(checked as boolean)}
                    />
                    <label 
                      htmlFor="lab-tested"
                      className="ml-2 text-sm font-medium text-gray-700 cursor-pointer"
                    >
                      Lab Tested
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox 
                      id="seasonal"
                      checked={filters.seasonal}
                      onCheckedChange={(checked) => handleSeasonalChange(checked as boolean)}
                    />
                    <label 
                      htmlFor="seasonal"
                      className="ml-2 text-sm font-medium text-gray-700 cursor-pointer"
                    >
                      Seasonal
                    </label>
                  </div>
                </div>
              </div>
              
              {showMobileFilters && (
                <div className="mt-6 flex justify-end md:hidden">
                  <Button 
                    onClick={toggleMobileFilters}
                    className="bg-primary-gold hover:bg-primary-gold/90 text-white"
                  >
                    Apply Filters
                  </Button>
                </div>
              )}
            </div>
            
            {/* Products Grid with Loading State */}
            <div className="w-full md:w-3/4">
              {error && (
                <div className="text-red-500 mb-4 text-center">
                  {error}
                </div>
              )}
              {(initialLoad || isLoading) ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <div key={n} className="animate-pulse">
                      <div className="bg-gray-200 rounded-lg h-48 mb-4"></div>
                      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    </div>
                  ))}
                </div>
              ) : currentProducts.length > 0 ? (
                <motion.div 
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {currentProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <ProductCard product={product} />
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <div className="text-center py-16">
                  <h3 className="text-xl font-montserrat font-semibold mb-2">No products found</h3>
                  <p className="text-gray-600 mb-4">Try adjusting your filters or search term.</p>
                  <Button 
                    onClick={resetFilters}
                    className="bg-primary-gold hover:bg-primary-gold/90 text-white"
                  >
                    Reset Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <Button
                key={i + 1}
                variant={currentPage === i + 1 ? "default" : "outline"}
                size="sm"
                onClick={() => setCurrentPage(i + 1)}
                className={currentPage === i + 1 ? "bg-primary-gold hover:bg-primary-gold/90" : ""}
              >
                {i + 1}
              </Button>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
