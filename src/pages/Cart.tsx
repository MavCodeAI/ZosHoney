import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import { removeFromCart, updateQuantity, clearCart } from '@/store/slices/cartSlice';
import { 
  Trash2, 
  Plus, 
  Minus, 
  ArrowLeft, 
  ShoppingBag, 
  RefreshCw
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const subtotal = cartItems.reduce((total, item) => 
    total + (item.product.discountedPrice || item.product.price) * item.quantity, 0
  );

  const handleRemoveItem = (productId: string) => {
    dispatch(removeFromCart(productId));
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    dispatch(updateQuantity({ id: productId, quantity }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center py-16 px-4">
          <ShoppingBag size={64} className="text-gray-300 mb-4" />
          <h1 className="text-2xl md:text-3xl font-montserrat font-bold text-gray-800 mb-2">
            Your cart is empty
          </h1>
          <p className="text-gray-500 mb-8 text-center max-w-md">
            Looks like you haven't added any products to your cart yet.
          </p>
          <Link to="/shop">
            <Button className="bg-primary-gold hover:bg-primary-gold/90">
              Continue Shopping
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 flex-1">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl md:text-3xl font-montserrat font-bold">Shopping Cart</h1>
          <Button 
            variant="outline" 
            onClick={handleClearCart}
            className="text-red-500 border-red-500 hover:bg-red-50"
          >
            <RefreshCw size={16} className="mr-2" />
            Clear Cart
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
            <div className="space-y-6">
              {cartItems.map(item => (
                <div key={item.product.id} className="flex flex-col sm:flex-row border-b pb-6">
                  <div className="sm:w-24 h-24 mb-4 sm:mb-0">
                    <img 
                      src={item.product.image} 
                      alt={item.product.name} 
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  
                  <div className="sm:ml-6 flex-1">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">{item.product.name}</h3>
                        <p className="mt-1 text-sm text-gray-500">{item.product.category} | {item.product.weight}</p>
                      </div>
                      <div className="text-right">
                        {item.product.discountedPrice ? (
                          <div>
                            <span className="text-lg font-semibold text-gray-900">
                              {item.product.currency} {item.product.discountedPrice}
                            </span>
                            <p className="text-sm text-gray-500 line-through">
                              {item.product.currency} {item.product.price}
                            </p>
                          </div>
                        ) : (
                          <span className="text-lg font-semibold text-gray-900">
                            {item.product.currency} {item.product.price}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="mt-4 flex justify-between items-center">
                      <div className="flex items-center border rounded-md">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          onClick={() => handleUpdateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                          className="h-8 w-8"
                        >
                          <Minus size={16} />
                        </Button>
                        <span className="w-10 text-center">{item.quantity}</span>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          onClick={() => handleUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="h-8 w-8"
                        >
                          <Plus size={16} />
                        </Button>
                      </div>
                      
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleRemoveItem(item.product.id)}
                        className="text-red-500 hover:bg-red-50"
                      >
                        <Trash2 size={16} className="mr-1" />
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow-md p-6 h-fit">
            <h2 className="text-xl font-montserrat font-semibold mb-4">Order Summary</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Items ({cartItems.length})</span>
                <span className="font-medium">PKR {subtotal.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">Calculated at checkout</span>
              </div>
              
              <div className="border-t pt-4 mt-4">
                <div className="flex justify-between font-semibold">
                  <span>Subtotal</span>
                  <span>PKR {subtotal.toFixed(2)}</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  Taxes and shipping calculated at checkout
                </p>
              </div>
              
              <Button 
                className="w-full bg-primary-gold hover:bg-primary-gold/90 mt-6"
                onClick={() => navigate('/checkout')}
              >
                Proceed to Checkout
              </Button>
              
              <div className="mt-6">
                <Link 
                  to="/shop" 
                  className="flex items-center justify-center text-primary-gold hover:text-primary-gold/80"
                >
                  <ArrowLeft size={16} className="mr-2" />
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Cart;
