import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { products } from '../data/products';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star, Minus, Plus, ShoppingCart, Share2, Award, Shield, Phone, ArrowLeft } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { Skeleton } from '@/components/ui/skeleton';
import { toast } from '@/components/ui/use-toast';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/store/slices/cartSlice';

const Product = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  
  const product = products.find(p => p.id === id);
  
  // Update document title and meta tags
  useEffect(() => {
    if (product) {
      document.title = `${product.name} | Zos Honey`;
      
      // Update meta description with proper type casting
      let metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        (metaDescription as HTMLMetaElement).content = product.description;
      } else {
        const meta = document.createElement('meta') as HTMLMetaElement;
        meta.name = 'description';
        meta.content = product.description;
        document.head.appendChild(meta);
      }
      
      // Update Open Graph tags with proper type casting
      const ogTags = {
        'og:title': `${product.name} | Zos Honey`,
        'og:description': product.description,
        'og:image': product.image
      };
      
      Object.entries(ogTags).forEach(([property, content]) => {
        let tag = document.querySelector(`meta[property="${property}"]`);
        if (tag) {
          (tag as HTMLMetaElement).content = content;
        } else {
          const meta = document.createElement('meta') as HTMLMetaElement;
          meta.setAttribute('property', property);
          meta.content = content;
          document.head.appendChild(meta);
        }
      });
    }
  }, [product]);

  // Simulate loading state
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Skeleton className="h-[400px] w-full rounded-lg" />
            <div className="space-y-4">
              <Skeleton className="h-8 w-3/4" />
              <Skeleton className="h-6 w-1/2" />
              <Skeleton className="h-24 w-full" />
              <Skeleton className="h-12 w-full" />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="text-center py-16">
            <h1 className="text-2xl font-montserrat font-semibold mb-4">Product Not Found</h1>
            <p className="text-gray-600 mb-6">The product you're looking for doesn't exist or has been removed.</p>
            <Button asChild className="bg-primary-gold hover:bg-primary-gold/90 text-white">
              <Link to="/shop">Return to Shop</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  
  const similarProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);
    
  const handleAddToCart = () => {
    dispatch(addToCart({ product, quantity: 1 }));
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart`,
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <div className="mb-6">
            <div className="flex items-center text-sm text-gray-500">
              <Link to="/" className="hover:text-primary-gold transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/shop" className="hover:text-primary-gold transition-colors">Shop</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-700">{product.name}</span>
            </div>
          </div>
          
          {/* Back to shop */}
          <Link to="/shop" className="inline-flex items-center text-gray-600 hover:text-primary-gold mb-6 transition-colors">
            <ArrowLeft size={16} className="mr-1" />
            Back to shop
          </Link>
          
          {/* Product Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Product Image */}
            <div className="bg-gray-50 rounded-lg overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Product Info */}
            <div>
              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <span className="text-sm text-gray-500">{product.region}</span>
                  <span className="mx-2 text-gray-300">|</span>
                  <span className="text-sm text-gray-500">{product.category}</span>
                </div>
                <h1 className="text-3xl font-montserrat font-bold text-gray-900 mb-2">{product.name}</h1>
                <div className="flex items-center mb-4">
                  {Array(5).fill(0).map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      className={i < Math.floor(product.rating) ? "text-primary-gold fill-primary-gold" : "text-gray-300"} 
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-500">({product.rating})</span>
                </div>
                <div className="flex items-baseline mb-4">
                  {product.discountedPrice ? (
                    <>
                      <span className="text-2xl font-semibold text-gray-900">{product.currency} {product.discountedPrice}</span>
                      <span className="ml-2 text-lg text-gray-500 line-through">{product.currency} {product.price}</span>
                      <span className="ml-2 bg-red-100 text-red-600 text-xs px-2 py-1 rounded">
                        {Math.round(((product.price - product.discountedPrice) / product.price) * 100)}% OFF
                      </span>
                    </>
                  ) : (
                    <span className="text-2xl font-semibold text-gray-900">{product.currency} {product.price}</span>
                  )}
                </div>
              </div>
              
              <p className="text-gray-700 mb-6">{product.description}</p>
              
              {/* Product Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {product.labTested && (
                  <span className="bg-secondary-green/10 text-secondary-green text-xs px-3 py-1 rounded-full flex items-center">
                    <Shield size={14} className="mr-1" />
                    Lab Tested
                  </span>
                )}
                {product.seasonal && (
                  <span className="bg-primary-gold/10 text-primary-gold text-xs px-3 py-1 rounded-full flex items-center">
                    <Award size={14} className="mr-1" />
                    Seasonal
                  </span>
                )}
                <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                  {product.weight}
                </span>
              </div>
              
              {/* Quantity Selector */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                <div className="flex items-center">
                  <button 
                    onClick={decreaseQuantity} 
                    className="border border-gray-300 rounded-l-md px-3 py-2 hover:bg-gray-50 transition-colors"
                  >
                    <Minus size={16} />
                  </button>
                  <input 
                    type="number" 
                    min="1" 
                    value={quantity} 
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)} 
                    className="border-y border-gray-300 py-2 w-16 text-center focus:outline-none"
                  />
                  <button 
                    onClick={increaseQuantity} 
                    className="border border-gray-300 rounded-r-md px-3 py-2 hover:bg-gray-50 transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
              
              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  className="bg-primary-gold hover:bg-primary-gold/90 text-white flex-1"
                  size="lg"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart size={18} className="mr-2" />
                  Add to Cart
                </Button>
                <a 
                  href={`https://wa.me/923000000000?text=I'm interested in buying ${product.name}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button 
                    variant="outline" 
                    className="border-secondary-green text-secondary-green hover:bg-secondary-green/10 w-full"
                    size="lg"
                  >
                    <Phone size={18} className="mr-2" />
                    Order via WhatsApp
                  </Button>
                </a>
              </div>
              
              {/* Share */}
              <div className="flex items-center text-sm text-gray-500">
                <Share2 size={16} className="mr-2" />
                <span>Share:</span>
                <div className="flex ml-2 space-x-2">
                  <button className="hover:text-primary-gold transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <button className="hover:text-primary-gold transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </button>
                  <button className="hover:text-primary-gold transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <button className="hover:text-primary-gold transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Product Details Tabs */}
          <div className="mb-16">
            <Tabs defaultValue="details">
              <TabsList className="w-full border-b border-gray-200 bg-transparent mb-6">
                <TabsTrigger 
                  value="details"
                  className="data-[state=active]:border-b-2 data-[state=active]:border-primary-gold rounded-none"
                >
                  Product Details
                </TabsTrigger>
                <TabsTrigger 
                  value="properties"
                  className="data-[state=active]:border-b-2 data-[state=active]:border-primary-gold rounded-none"
                >
                  Properties
                </TabsTrigger>
                <TabsTrigger 
                  value="shipping"
                  className="data-[state=active]:border-b-2 data-[state=active]:border-primary-gold rounded-none"
                >
                  Shipping Information
                </TabsTrigger>
              </TabsList>
              <TabsContent value="details" className="text-gray-700">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-montserrat font-semibold mb-4">About {product.name}</h3>
                    <p className="mb-4">
                      {product.description}
                    </p>
                    <p>
                      Our honey is sustainably harvested from the pristine {product.region} region of Pakistan, 
                      ensuring the highest quality and authentic taste that can only come from pure, natural honey.
                    </p>
                    
                    {product.seasonal && (
                      <div className="mt-4 bg-primary-gold/10 p-4 rounded-md">
                        <h4 className="font-montserrat font-medium mb-1">Seasonal Availability</h4>
                        <p className="text-sm">{product.availabilityPeriod}</p>
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-montserrat font-semibold mb-4">Benefits</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-secondary-green mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Rich in antioxidants and natural enzymes.</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-secondary-green mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Supports immune system health.</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-secondary-green mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Natural energy booster without refined sugars.</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-secondary-green mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Contains natural antibacterial properties.</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-secondary-green mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Soothes sore throats and coughs.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="properties" className="text-gray-700">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-montserrat font-semibold mb-4">Honey Properties</h3>
                    <div className="space-y-4">
                      {product.properties && Object.entries(product.properties).map(([key, value]) => (
                        <div key={key} className="border-b border-gray-200 pb-2">
                          <div className="font-medium capitalize">{key}</div>
                          <div className="text-gray-600">{value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-montserrat font-semibold mb-4">Storage Instructions</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-primary-gold mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Store in a cool, dry place away from direct sunlight.</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-primary-gold mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Do not refrigerate as it accelerates crystallization.</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-primary-gold mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>If crystallization occurs, place the jar in warm water to restore liquid state.</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-primary-gold mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Always use a clean utensil when taking honey from the jar.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="shipping" className="text-gray-700">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-montserrat font-semibold mb-4">Delivery Information</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-primary-gold mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <div>
                          <span className="font-medium">Nationwide Delivery</span>
                          <p className="text-sm text-gray-600">We deliver to all major cities in Pakistan within 2-5 business days.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-primary-gold mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div>
                          <span className="font-medium">Delivery Times</span>
                          <p className="text-sm text-gray-600">
                            Karachi, Lahore, Islamabad: 1-2 days<br />
                            Other major cities: 2-3 days<br />
                            Remote areas: 3-5 days
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-primary-gold mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <div>
                          <span className="font-medium">Shipping Partners</span>
                          <p className="text-sm text-gray-600">We work with TCS, Leopards Courier, and M&P for reliable nationwide delivery.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-montserrat font-semibold mb-4">Payment Options</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-secondary-green mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <div>
                          <span className="font-medium">Cash on Delivery (COD)</span>
                          <p className="text-sm text-gray-600">Available in all major cities across Pakistan.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-secondary-green mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <div>
                          <span className="font-medium">Mobile Wallets</span>
                          <p className="text-sm text-gray-600">EasyPaisa and JazzCash accepted for convenient payment.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-secondary-green mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <div>
                          <span className="font-medium">Bank Transfer</span>
                          <p className="text-sm text-gray-600">Direct bank transfer to our account is also available.</p>
                        </div>
                      </li>
                    </ul>
                    
                    <div className="mt-6 bg-secondary-green/10 p-4 rounded-md">
                      <h4 className="font-montserrat font-medium mb-1">Order Tracking</h4>
                      <p className="text-sm">
                        Once your order is dispatched, you will receive a tracking number via SMS and email to monitor your delivery in real-time.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Similar Products */}
          {similarProducts.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-6">
                You May Also Like
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {similarProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Product;
