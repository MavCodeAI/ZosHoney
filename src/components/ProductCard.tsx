import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types/product';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Star, Heart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { addToWishlist, removeFromWishlist } from '@/store/slices/wishlistSlice';
import { toast } from '@/components/ui/use-toast';
import { addToCart } from '@/store/slices/cartSlice';

interface ProductCardProps {
  product: Product;
}

const ProductCard = React.memo(({ product }: ProductCardProps) => {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state);
  console.log('Redux State:', state);
  
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items) ?? [];
  const cartItems = useSelector((state: RootState) => state.cart.items) ?? [];
  const isInWishlist = wishlistItems.some(item => item.id === product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(addToCart({ product, quantity: 1 }));
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart`,
    });
  };

  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isInWishlist) {
      dispatch(removeFromWishlist(product.id));
      toast({
        title: "Removed from wishlist",
        description: `${product.name} has been removed from your wishlist`,
      });
    } else {
      dispatch(addToWishlist(product));
      toast({
        title: "Added to wishlist",
        description: `${product.name} has been added to your wishlist`,
      });
    }
  };

  return (
    <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      {/* Add wishlist button */}
      <button
        onClick={toggleWishlist}
        className="absolute top-2 right-2 z-10 p-2 bg-white rounded-full shadow-sm hover:bg-gray-50"
        aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
      >
        <Heart 
          size={20} 
          className={`${isInWishlist ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
        />
      </button>

      <div className="relative">
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-60 object-cover object-center group-hover:scale-105 transition-transform duration-300"
          />
        </Link>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <Badge className="bg-deepBlue">New</Badge>
          )}
          {product.seasonal && (
            <Badge className="bg-primary-gold">Seasonal</Badge>
          )}
          {product.labTested && (
            <Badge className="bg-secondary-green">Lab Tested</Badge>
          )}
        </div>
        
        {/* Discount Badge */}
        {product.discountedPrice && (
          <div className="absolute top-3 right-3">
            <Badge className="bg-red-500">
              {Math.round(((product.price - product.discountedPrice) / product.price) * 100)}% OFF
            </Badge>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="mb-1 flex items-center">
          <span className="text-xs text-gray-500">{product.region}</span>
          <span className="mx-2 text-gray-300">|</span>
          <span className="text-xs text-gray-500">{product.category}</span>
        </div>
        
        <Link to={`/product/${product.id}`}>
          <h3 className="font-montserrat font-semibold text-lg text-gray-900 hover:text-primary-gold transition-colors duration-200">
            {product.name}
          </h3>
        </Link>
        
        <div className="mt-1 flex items-center">
          {Array(5).fill(0).map((_, i) => (
            <Star 
              key={i} 
              size={16} 
              className={i < Math.floor(product.rating) ? "text-primary-gold fill-primary-gold" : "text-gray-300"} 
            />
          ))}
          <span className="ml-1 text-xs text-gray-500">({product.rating})</span>
        </div>
        
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-baseline">
            {product.discountedPrice ? (
              <>
                <span className="text-lg font-semibold text-gray-900">{product.currency} {product.discountedPrice}</span>
                <span className="ml-2 text-sm text-gray-500 line-through">{product.currency} {product.price}</span>
              </>
            ) : (
              <span className="text-lg font-semibold text-gray-900">{product.currency} {product.price}</span>
            )}
          </div>
          <span className="text-sm text-gray-500">{product.weight}</span>
        </div>
        
        <div className="mt-4 flex space-x-2">
          <Button 
            className="w-full bg-primary-gold hover:bg-primary-gold/90 text-white"
            size="sm"
            onClick={handleAddToCart}
          >
            <ShoppingCart size={16} className="mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
});

export default ProductCard;
