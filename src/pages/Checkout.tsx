import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import { clearCart } from '@/store/slices/cartSlice';
import { 
  CreditCard, 
  MapPin, 
  Truck, 
  CheckCircle,
  ArrowLeft
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const subtotal = cartItems.reduce((total, item) => 
    total + (item.product.discountedPrice || item.product.price) * item.quantity, 0
  );
  const [activeStep, setActiveStep] = useState<'shipping' | 'payment' | 'confirmation'>('shipping');
  const [paymentMethod, setPaymentMethod] = useState<'credit-card' | 'cash-on-delivery'>('credit-card');
  const [shippingInfo, setShippingInfo] = useState({
    fullName: '',
    address: '',
    city: '',
    postalCode: '',
    phone: '',
  });
  
  // Handle shipping info input changes
  const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingInfo(prev => ({ ...prev, [name]: value }));
  };
  
  // Proceed to payment step
  const handleProceedToPayment = () => {
    // Basic validation
    if (!shippingInfo.fullName || !shippingInfo.address || !shippingInfo.city || 
        !shippingInfo.postalCode || !shippingInfo.phone) {
      toast.error("Please fill all shipping information fields");
      return;
    }
    setActiveStep('payment');
  };
  
  // Handle order placement
  const handlePlaceOrder = () => {
    // Process payment logic would go here in a real application
    
    // Show success message
    toast.success("Order placed successfully!");
    
    // Move to confirmation step
    setActiveStep('confirmation');
    
    // Clear cart after successful order
    handleClearCart();
  };
  
  // Shipping costs (would be calculated based on location in a real app)
  const shippingCost = 10.00;
  // Calculate order total
  const orderTotal = subtotal + shippingCost;
  
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  
  // If cart is empty, redirect to cart page
  if (cartItems.length === 0 && activeStep !== 'confirmation') {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center py-16 px-4">
          <h1 className="text-2xl md:text-3xl font-montserrat font-bold text-gray-800 mb-4">
            Your cart is empty
          </h1>
          <p className="text-gray-500 mb-8 text-center max-w-md">
            Add some products to your cart before proceeding to checkout.
          </p>
          <Button onClick={() => navigate('/shop')} className="bg-primary-gold hover:bg-primary-gold/90">
            Continue Shopping
          </Button>
        </div>
        <Footer />
      </div>
    );
  }
  
  // Order confirmation view
  if (activeStep === 'confirmation') {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="container mx-auto px-4 py-12 flex-1">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
            <div className="flex flex-col items-center text-center">
              <CheckCircle size={64} className="text-green-500 mb-4" />
              
              <h1 className="text-3xl font-montserrat font-bold text-gray-900 mb-2">
                Thank You for Your Order!
              </h1>
              
              <p className="text-gray-600 mb-6 max-w-md">
                Your order has been received and is being processed. You will receive a confirmation email shortly.
              </p>
              
              <Button 
                onClick={() => navigate('/shop')} 
                className="bg-primary-gold hover:bg-primary-gold/90 mt-4"
              >
                Continue Shopping
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 flex-1">
        <div className="mb-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/cart')} 
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Cart
          </Button>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main checkout form */}
          <div className="lg:w-2/3">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-montserrat">Checkout</CardTitle>
                <CardDescription>Complete your purchase</CardDescription>
              </CardHeader>
              
              <Tabs 
                value={activeStep} 
                className="w-full"
                onValueChange={(value) => setActiveStep(value as any)}
              >
                <div className="px-6">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="shipping" disabled={activeStep !== 'shipping'}>
                      <div className="flex items-center">
                        <MapPin size={18} className="mr-2" />
                        Shipping
                      </div>
                    </TabsTrigger>
                    <TabsTrigger value="payment" disabled={activeStep !== 'payment'}>
                      <div className="flex items-center">
                        <CreditCard size={18} className="mr-2" />
                        Payment
                      </div>
                    </TabsTrigger>
                  </TabsList>
                </div>
                
                <CardContent className="p-6">
                  <TabsContent value="shipping" className="space-y-4 mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="md:col-span-2">
                        <Label htmlFor="fullName">Full Name</Label>
                        <Input 
                          id="fullName" 
                          name="fullName" 
                          value={shippingInfo.fullName} 
                          onChange={handleShippingChange} 
                        />
                      </div>
                      
                      <div className="md:col-span-2">
                        <Label htmlFor="address">Address</Label>
                        <Input 
                          id="address" 
                          name="address" 
                          value={shippingInfo.address} 
                          onChange={handleShippingChange} 
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="city">City</Label>
                        <Input 
                          id="city" 
                          name="city" 
                          value={shippingInfo.city} 
                          onChange={handleShippingChange} 
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="postalCode">Postal Code</Label>
                        <Input 
                          id="postalCode" 
                          name="postalCode" 
                          value={shippingInfo.postalCode} 
                          onChange={handleShippingChange} 
                        />
                      </div>
                      
                      <div className="md:col-span-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input 
                          id="phone" 
                          name="phone" 
                          value={shippingInfo.phone} 
                          onChange={handleShippingChange} 
                        />
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <Button 
                        onClick={handleProceedToPayment} 
                        className="w-full bg-primary-gold hover:bg-primary-gold/90"
                      >
                        Continue to Payment
                      </Button>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="payment" className="space-y-4 mt-0">
                    <h3 className="font-semibold text-lg mb-2">Payment Method</h3>
                    
                    <RadioGroup value={paymentMethod} onValueChange={(value) => setPaymentMethod(value as any)}>
                      <div className="flex items-center space-x-2 border rounded-md p-4 mb-3">
                        <RadioGroupItem value="credit-card" id="credit-card" />
                        <Label htmlFor="credit-card" className="flex items-center cursor-pointer">
                          <CreditCard size={20} className="mr-2 text-primary-gold" />
                          Credit/Debit Card
                        </Label>
                      </div>
                      
                      <div className="flex items-center space-x-2 border rounded-md p-4">
                        <RadioGroupItem value="cash-on-delivery" id="cash-on-delivery" />
                        <Label htmlFor="cash-on-delivery" className="flex items-center cursor-pointer">
                          <Truck size={20} className="mr-2 text-primary-gold" />
                          Cash on Delivery
                        </Label>
                      </div>
                    </RadioGroup>
                    
                    {paymentMethod === 'credit-card' && (
                      <div className="space-y-4 mt-4 border rounded-md p-4">
                        <div>
                          <Label htmlFor="cardName">Name on Card</Label>
                          <Input id="cardName" placeholder="John Smith" />
                        </div>
                        
                        <div>
                          <Label htmlFor="cardNumber">Card Number</Label>
                          <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="expiryDate">Expiry Date</Label>
                            <Input id="expiryDate" placeholder="MM/YY" />
                          </div>
                          
                          <div>
                            <Label htmlFor="cvc">CVC</Label>
                            <Input id="cvc" placeholder="123" />
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <div className="flex gap-3 pt-4">
                      <Button 
                        variant="outline" 
                        onClick={() => setActiveStep('shipping')}
                      >
                        Back
                      </Button>
                      <Button 
                        onClick={handlePlaceOrder} 
                        className="flex-1 bg-primary-gold hover:bg-primary-gold/90"
                      >
                        Place Order
                      </Button>
                    </div>
                  </TabsContent>
                </CardContent>
              </Tabs>
            </Card>
          </div>
          
          {/* Order Summary */}
          <div className="lg:w-1/3">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-montserrat">Order Summary</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Products list */}
                <div className="space-y-3">
                  {cartItems.map(item => (
                    <div key={item.id} className="flex justify-between items-center pb-3 border-b">
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded overflow-hidden mr-3">
                          <img 
                            src={item.product.image} 
                            alt={item.product.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium text-sm">{item.product.name}</h4>
                          <p className="text-gray-500 text-xs">{item.quantity} × {item.product.currency} {item.product.discountedPrice || item.product.price}</p>
                        </div>
                      </div>
                      <span className="font-medium">
                        {item.product.currency} {((item.product.discountedPrice || item.product.price) * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
                
                <Separator />
                
                {/* Price calculations */}
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>PKR {subtotal.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span>PKR {shippingCost.toFixed(2)}</span>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>PKR {orderTotal.toFixed(2)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Checkout;
