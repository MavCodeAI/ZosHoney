import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Plus, Minus } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/store/slices/cartSlice';
import { Product } from '../types/product';
import { toast } from 'react-hot-toast';

interface AddToCartButtonProps {
  product: Product;
  className?: string;
  quantity?: number;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product, className, quantity = 1 }) => {
  const dispatch = useDispatch();

  const incrementQuantity = () => {
    // No need to implement incrementQuantity as the quantity is passed as a prop
  };

  const decrementQuantity = () => {
    // No need to implement decrementQuantity as the quantity is passed as a prop
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ product, quantity }));
    toast.success(`${product.name} has been added to your cart`);
  };

  return (
    <div className={`flex flex-col space-y-3 ${className}`}>
      <div className="flex items-center space-x-2">
        <div className="flex items-center border rounded-md">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={decrementQuantity}
            className="h-10 w-10"
          >
            <Minus size={16} />
          </Button>
          <span className="w-10 text-center">{quantity}</span>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={incrementQuantity}
            className="h-10 w-10"
          >
            <Plus size={16} />
          </Button>
        </div>
        
        <Button 
          className="flex-1 bg-primary-gold hover:bg-primary-gold/90"
          onClick={handleAddToCart}
        >
          <ShoppingCart size={16} className="mr-2" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default AddToCartButton;